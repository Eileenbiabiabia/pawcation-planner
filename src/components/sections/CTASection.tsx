import { Button } from "@/components/ui/button";
import { PawPrint, ArrowRight, Sparkles } from "lucide-react";
import { DecorativePaw } from "@/components/icons/PawIcons";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DecorativePaw className="absolute top-10 left-10 w-32 h-32 text-primary-foreground/5 rotate-12" />
        <DecorativePaw className="absolute bottom-10 right-10 w-40 h-40 text-primary-foreground/5 -rotate-12" />
        <DecorativePaw className="absolute top-1/2 left-1/4 w-24 h-24 text-primary-foreground/5 rotate-45" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full font-body text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Join the pack
          </span>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to plan your pup's
            <br />
            <span className="text-accent">perfect adventure?</span>
          </h2>

          {/* Subheadline */}
          <p className="font-body text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Start creating your dog's profile today. It's free, takes just 2 minutes, and could make your next trip unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated"
            >
              <PawPrint className="h-5 w-5" />
              Create My Paw Profile
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Note */}
          <p className="font-body text-sm text-primary-foreground/60 mt-8 flex items-center justify-center gap-2">
            <PawPrint className="h-4 w-4" />
            Paw-tested. Human-assisted. 100% tail-wagging guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
