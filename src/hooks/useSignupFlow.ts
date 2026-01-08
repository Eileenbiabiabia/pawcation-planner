import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import type { DogAnalysis, PetProfileFormData, SignupState } from '@/types/petProfile';

export function useSignupFlow() {
  const navigate = useNavigate();
  const [state, setState] = useState<SignupState>({
    step: 1,
    imageFile: null,
    imagePreview: null,
    analysis: null,
    isAnalyzing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setImageFile = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState(prev => ({
          ...prev,
          imageFile: file,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setState(prev => ({
        ...prev,
        imageFile: null,
        imagePreview: null,
      }));
    }
  };

  const analyzeImage = async () => {
    if (!state.imagePreview) {
      toast.error('Please upload an image of your dog first');
      return;
    }

    setState(prev => ({ ...prev, isAnalyzing: true }));

    try {
      const response = await supabase.functions.invoke('analyze-dog', {
        body: { image: state.imagePreview },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      const data = response.data;

      if (data.error) {
        toast.error(data.error);
        setState(prev => ({ ...prev, isAnalyzing: false }));
        return;
      }

      if (data.analysis?.error) {
        toast.error(data.analysis.error);
        setState(prev => ({ ...prev, isAnalyzing: false }));
        return;
      }

      setState(prev => ({
        ...prev,
        analysis: data.analysis,
        step: 2,
        isAnalyzing: false,
      }));

      toast.success('🐕 Your pup looks great! Let\'s review the details.');
    } catch (error) {
      console.error('Analysis error:', error);
      toast.error('Failed to analyze image. You can still fill in the details manually.');
      // Move to step 2 with empty analysis
      setState(prev => ({
        ...prev,
        analysis: null,
        step: 2,
        isAnalyzing: false,
      }));
    }
  };

  const createProfile = async (
    formData: PetProfileFormData,
    email: string,
    password: string
  ) => {
    setIsSubmitting(true);

    try {
      // First create the user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('Failed to create account');

      // Upload image to storage if we have one
      let imageUrl = null;
      if (state.imageFile && authData.user.id) {
        const fileExt = state.imageFile.name.split('.').pop();
        const filePath = `${authData.user.id}/${Date.now()}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('pet-images')
          .upload(filePath, state.imageFile);

        if (uploadError) {
          console.error('Image upload error:', uploadError);
        } else {
          const { data: urlData } = supabase.storage
            .from('pet-images')
            .getPublicUrl(filePath);
          imageUrl = urlData.publicUrl;
        }
      }

      // Create pet profile
      const { error: profileError } = await supabase.from('pet_profiles').insert([{
        user_id: authData.user.id,
        name: formData.name,
        breed: formData.breed || null,
        age_estimate: formData.age || null,
        weight_estimate: formData.weight || null,
        weight_unit: formData.weight_unit || 'lbs',
        rabies_vaccinated: formData.rabies_vaccinated || 'unknown',
        separation_anxiety: formData.separation_anxiety || 'unknown',
        flight_comfort: formData.flight_comfort || 'unknown',
        daily_exercise_need: formData.daily_exercise_need || 'unknown',
        environment_preference: formData.environment_preference || 'unknown',
        personality_archetype: formData.personality_archetype || 'unknown',
        image_url: imageUrl,
        gemini_raw_response: state.analysis ? JSON.parse(JSON.stringify(state.analysis)) : null,
      }]);

      if (profileError) throw profileError;

      toast.success(`🎉 Welcome to Pawcation, ${formData.name}!`);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to create profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    setState(prev => ({ ...prev, step: 1 }));
  };

  return {
    state,
    isSubmitting,
    setImageFile,
    analyzeImage,
    createProfile,
    goBack,
  };
}