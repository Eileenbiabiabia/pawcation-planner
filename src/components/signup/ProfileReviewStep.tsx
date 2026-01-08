import { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import type { DogAnalysis, PetProfileFormData } from '@/types/petProfile';
import {
  ANXIETY_LEVELS,
  COMFORT_LEVELS,
  EXERCISE_LEVELS,
  ENVIRONMENT_OPTIONS,
  PERSONALITY_OPTIONS,
  YES_NO_UNKNOWN,
} from '@/types/petProfile';

interface ProfileReviewStepProps {
  imagePreview: string | null;
  analysis: DogAnalysis | null;
  isSubmitting: boolean;
  onSubmit: (formData: PetProfileFormData, email: string, password: string) => void;
  onBack: () => void;
}

export function ProfileReviewStep({
  imagePreview,
  analysis,
  isSubmitting,
  onSubmit,
  onBack,
}: ProfileReviewStepProps) {
  const [formData, setFormData] = useState<PetProfileFormData>({
    name: '',
    breed: '',
    age: '',
    weight: '',
    weight_unit: 'lbs',
    rabies_vaccinated: 'unknown',
    separation_anxiety: 'unknown',
    flight_comfort: 'unknown',
    daily_exercise_need: 'unknown',
    environment_preference: 'unknown',
    personality_archetype: 'unknown',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Pre-fill form with analysis data
  useEffect(() => {
    if (analysis) {
      setFormData(prev => ({
        ...prev,
        breed: analysis.breed !== 'unknown' ? analysis.breed : '',
        age: analysis.age_estimate !== 'unknown' ? analysis.age_estimate : '',
        weight: analysis.weight_estimate !== 'unknown' ? analysis.weight_estimate : '',
        rabies_vaccinated: analysis.rabies_vaccinated || 'unknown',
        separation_anxiety: analysis.separation_anxiety || 'unknown',
        flight_comfort: analysis.flight_comfort || 'unknown',
        daily_exercise_need: analysis.daily_exercise_need || 'unknown',
        environment_preference: analysis.environment_preference || 'unknown',
        personality_archetype: analysis.personality_archetype || 'unknown',
      }));
    }
  }, [analysis]);

  const handleChange = (field: keyof PetProfileFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Your dog needs a name!';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData, email, password);
    }
  };

  const hasAiData = analysis && Object.values(analysis).some(v => v && v !== 'unknown');

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack} disabled={isSubmitting}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">
            Review & Complete Profile
          </h1>
          <p className="text-sm text-muted-foreground">
            Tell us about your dog — we'll take it from here.
          </p>
        </div>
      </div>

      {/* AI Notice */}
      {hasAiData && (
        <Alert className="bg-primary/5 border-primary/20">
          <Sparkles className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm">
            We've pre-filled some details based on your photo. Feel free to correct anything!
          </AlertDescription>
        </Alert>
      )}

      {!hasAiData && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            We couldn't analyze the photo, but you can fill in the details manually below.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Photo Preview + Name */}
        <div className="flex gap-6 items-start">
          {imagePreview && (
            <div className="shrink-0">
              <img
                src={imagePreview}
                alt="Your dog"
                className="w-24 h-24 rounded-2xl object-cover shadow-card"
              />
            </div>
          )}
          <div className="flex-1 space-y-2">
            <Label htmlFor="name">Dog's Name *</Label>
            <Input
              id="name"
              placeholder="What should we call your pup?"
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>
        </div>

        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="breed">Breed</Label>
            <Input
              id="breed"
              placeholder="e.g., Golden Retriever, Mixed"
              value={formData.breed}
              onChange={e => handleChange('breed', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              placeholder="e.g., 3 years, 6 months"
              value={formData.age}
              onChange={e => handleChange('age', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <div className="flex gap-2">
              <Input
                id="weight"
                placeholder="e.g., 45"
                value={formData.weight}
                onChange={e => handleChange('weight', e.target.value)}
                className="flex-1"
              />
              <Select
                value={formData.weight_unit}
                onValueChange={v => handleChange('weight_unit', v)}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lbs">lbs</SelectItem>
                  <SelectItem value="kg">kg</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Rabies Vaccinated?</Label>
            <Select
              value={formData.rabies_vaccinated}
              onValueChange={v => handleChange('rabies_vaccinated', v)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {YES_NO_UNKNOWN.map(opt => (
                  <SelectItem key={opt} value={opt} className="capitalize">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Travel Readiness */}
        <div className="space-y-4">
          <h3 className="font-medium text-foreground">Travel Readiness</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Separation Anxiety</Label>
              <Select
                value={formData.separation_anxiety}
                onValueChange={v => handleChange('separation_anxiety', v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ANXIETY_LEVELS.map(opt => (
                    <SelectItem key={opt} value={opt} className="capitalize">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Flight Comfort</Label>
              <Select
                value={formData.flight_comfort}
                onValueChange={v => handleChange('flight_comfort', v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {COMFORT_LEVELS.map(opt => (
                    <SelectItem key={opt} value={opt} className="capitalize">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Daily Exercise Need</Label>
              <Select
                value={formData.daily_exercise_need}
                onValueChange={v => handleChange('daily_exercise_need', v)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {EXERCISE_LEVELS.map(opt => (
                    <SelectItem key={opt} value={opt} className="capitalize">
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Personality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Environment Preference</Label>
            <Select
              value={formData.environment_preference}
              onValueChange={v => handleChange('environment_preference', v)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ENVIRONMENT_OPTIONS.map(opt => (
                  <SelectItem key={opt} value={opt} className="capitalize">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Personality</Label>
            <Select
              value={formData.personality_archetype}
              onValueChange={v => handleChange('personality_archetype', v)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PERSONALITY_OPTIONS.map(opt => (
                  <SelectItem key={opt} value={opt} className="capitalize">
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Account Creation */}
        <div className="space-y-4 pt-4 border-t">
          <h3 className="font-medium text-foreground">Create Your Account</h3>
          <p className="text-sm text-muted-foreground">
            We'll use this to save your pup's profile and travel plans.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={errors.email ? 'border-destructive' : ''}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="At least 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={errors.password ? 'border-destructive' : ''}
              />
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={isSubmitting}
            className="min-w-[200px]"
          >
            {isSubmitting ? 'Creating Profile...' : 'Create My Pet Profile 🐾'}
          </Button>
        </div>
      </form>
    </div>
  );
}