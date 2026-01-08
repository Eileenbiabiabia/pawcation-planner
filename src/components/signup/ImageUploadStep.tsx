import { useRef, useState, useCallback } from 'react';
import { Upload, Camera, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageUploadStepProps {
  imagePreview: string | null;
  isAnalyzing: boolean;
  onImageSelect: (file: File | null) => void;
  onAnalyze: () => void;
}

export function ImageUploadStep({
  imagePreview,
  isAnalyzing,
  onImageSelect,
  onAnalyze,
}: ImageUploadStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        onImageSelect(file);
      }
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const handleRemoveImage = () => {
    onImageSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
          <Camera className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-display font-bold text-foreground">
          Let's Meet Your Dog! 🐕
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Upload a photo of your furry travel companion. We'll use AI to learn about them 
          and make trip planning easier.
        </p>
      </div>

      {/* Upload Area */}
      <div className="max-w-md mx-auto">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {imagePreview ? (
          <div className="relative rounded-2xl overflow-hidden shadow-card animate-fade-in-up">
            <img
              src={imagePreview}
              alt="Your dog"
              className="w-full h-80 object-cover"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              disabled={isAnalyzing}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                Looking good! Ready to analyze? 🐾
              </p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-200",
              "flex flex-col items-center justify-center h-80 p-8",
              isDragging
                ? "border-primary bg-primary/5 scale-[1.02]"
                : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/50"
            )}
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="p-4 rounded-full bg-muted">
                <Upload className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <p className="font-medium text-foreground">
                  Drop your dog's photo here
                </p>
                <p className="text-sm text-muted-foreground">
                  or click to browse
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                JPG, PNG, or HEIC up to 10MB
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Button
          variant="hero"
          size="lg"
          onClick={onAnalyze}
          disabled={!imagePreview || isAnalyzing}
          className="min-w-[200px]"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Analyze My Dog 🐾
            </>
          )}
        </Button>
      </div>

      {/* Helper text */}
      <p className="text-center text-xs text-muted-foreground">
        We use AI to understand your dog's breed, size, and personality traits.
        <br />
        You can edit everything on the next step.
      </p>
    </div>
  );
}