export interface DogAnalysis {
  breed: string;
  age_estimate: string;
  weight_estimate: string;
  rabies_vaccinated: string;
  separation_anxiety: string;
  flight_comfort: string;
  daily_exercise_need: string;
  environment_preference: string;
  personality_archetype: string;
  error?: string;
}

export interface PetProfileFormData {
  name: string;
  breed: string;
  age: string;
  weight: string;
  weight_unit: string;
  rabies_vaccinated: string;
  separation_anxiety: string;
  flight_comfort: string;
  daily_exercise_need: string;
  environment_preference: string;
  personality_archetype: string;
}

export interface SignupState {
  step: 1 | 2;
  imageFile: File | null;
  imagePreview: string | null;
  analysis: DogAnalysis | null;
  isAnalyzing: boolean;
}

export const ANXIETY_LEVELS = ['low', 'medium', 'high'] as const;
export const COMFORT_LEVELS = ['low', 'medium', 'high'] as const;
export const EXERCISE_LEVELS = ['low', 'medium', 'high'] as const;
export const ENVIRONMENT_OPTIONS = ['urban', 'suburban', 'nature', 'mixed'] as const;
export const PERSONALITY_OPTIONS = [
  'friendly',
  'anxious', 
  'energetic',
  'calm',
  'protective',
  'playful',
  'independent'
] as const;
export const YES_NO_UNKNOWN = ['yes', 'no', 'unknown'] as const;