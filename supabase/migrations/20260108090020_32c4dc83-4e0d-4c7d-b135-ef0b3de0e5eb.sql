-- Create pet profiles table
CREATE TABLE public.pet_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  breed TEXT,
  age_estimate TEXT,
  weight_estimate TEXT,
  weight_unit TEXT DEFAULT 'lbs',
  rabies_vaccinated TEXT DEFAULT 'unknown',
  separation_anxiety TEXT DEFAULT 'unknown',
  flight_comfort TEXT DEFAULT 'unknown',
  daily_exercise_need TEXT DEFAULT 'unknown',
  environment_preference TEXT DEFAULT 'unknown',
  personality_archetype TEXT DEFAULT 'unknown',
  image_url TEXT,
  gemini_raw_response JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.pet_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own pet profiles" 
ON public.pet_profiles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own pet profiles" 
ON public.pet_profiles 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own pet profiles" 
ON public.pet_profiles 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own pet profiles" 
ON public.pet_profiles 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_pet_profiles_updated_at
BEFORE UPDATE ON public.pet_profiles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for pet images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('pet-images', 'pet-images', true);

-- Create storage policies for pet images
CREATE POLICY "Anyone can view pet images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'pet-images');

CREATE POLICY "Authenticated users can upload pet images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'pet-images' AND auth.role() = 'authenticated');

CREATE POLICY "Users can update their own pet images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'pet-images' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own pet images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'pet-images' AND auth.uid()::text = (storage.foldername(name))[1]);