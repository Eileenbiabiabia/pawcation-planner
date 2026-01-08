import { useSignupFlow } from '@/hooks/useSignupFlow';
import { ImageUploadStep } from '@/components/signup/ImageUploadStep';
import { ProfileReviewStep } from '@/components/signup/ProfileReviewStep';
import { DecorativePaw } from '@/components/icons/PawIcons';

export default function Signup() {
  const {
    state,
    isSubmitting,
    setImageFile,
    analyzeImage,
    createProfile,
    goBack,
  } = useSignupFlow();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-5">
        <DecorativePaw className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 rotate-45">
        <DecorativePaw className="w-24 h-24 text-accent" />
      </div>
      <div className="absolute top-1/2 right-20 opacity-5 -rotate-12">
        <DecorativePaw className="w-16 h-16 text-secondary" />
      </div>

      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="flex items-center gap-2">
            <DecorativePaw className="w-8 h-8 text-primary" />
            <span className="text-xl font-display font-bold text-foreground">
              Pawcation
            </span>
          </a>
        </div>
      </header>

      {/* Progress indicator */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 max-w-xs mx-auto">
          <div
            className={`h-2 flex-1 rounded-full transition-colors ${
              state.step >= 1 ? 'bg-primary' : 'bg-muted'
            }`}
          />
          <div
            className={`h-2 flex-1 rounded-full transition-colors ${
              state.step >= 2 ? 'bg-primary' : 'bg-muted'
            }`}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Step {state.step} of 2
        </p>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {state.step === 1 ? (
          <ImageUploadStep
            imagePreview={state.imagePreview}
            isAnalyzing={state.isAnalyzing}
            onImageSelect={setImageFile}
            onAnalyze={analyzeImage}
          />
        ) : (
          <ProfileReviewStep
            imagePreview={state.imagePreview}
            analysis={state.analysis}
            isSubmitting={isSubmitting}
            onSubmit={createProfile}
            onBack={goBack}
          />
        )}
      </main>

      {/* Footer tagline */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center bg-gradient-to-t from-background to-transparent">
        <p className="text-sm text-muted-foreground">
          🐶 Paw-tested. Human-assisted.
        </p>
      </footer>
    </div>
  );
}