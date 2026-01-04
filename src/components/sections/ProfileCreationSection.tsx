import { Button } from "@/components/ui/button";
import { PawPrint, Camera, Dog, Scale, Heart, Zap, MapPin, Smile } from "lucide-react";
import { useState } from "react";

const ProfileCreationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const profileFields = [
    { icon: Camera, label: "Photo", value: "Upload your pup's best pic" },
    { icon: Dog, label: "Breed", value: "Golden Retriever" },
    { icon: Scale, label: "Weight", value: "55 lbs" },
    { icon: Zap, label: "Energy", value: "High - loves long walks!" },
    { icon: Heart, label: "Anxiety Level", value: "Calm with new places" },
    { icon: MapPin, label: "Travel Style", value: "Adventure seeker" },
    { icon: Smile, label: "Personality", value: "Friendly, curious" },
  ];

  return (
    <section className="bg-card py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-paw-light-sage/30 via-transparent to-paw-light-terracotta/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm font-medium mb-6">
              <Dog className="h-4 w-4" />
              Pet Profiles
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Tell us about your dog.{" "}
              <span className="text-gradient">We'll take it from here.</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              We ask these questions so we can plan trips your dog would feel safe and happy taking. Every pup is unique — and so is their perfect vacation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PawPrint className="w-3 h-3 text-primary" />
                </div>
                <p className="font-body text-muted-foreground">
                  <span className="font-semibold text-foreground">Friendly & conversational</span> — never clinical or boring
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PawPrint className="w-3 h-3 text-primary" />
                </div>
                <p className="font-body text-muted-foreground">
                  <span className="font-semibold text-foreground">Dog's name & photo</span> — because they're the star, not you
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <PawPrint className="w-3 h-3 text-primary" />
                </div>
                <p className="font-body text-muted-foreground">
                  <span className="font-semibold text-foreground">Personality matters</span> — anxious? Adventurous? We'll factor it in
                </p>
              </div>
            </div>

            <Button variant="hero" size="lg">
              <PawPrint className="h-5 w-5" />
              Create Your Paw Profile
            </Button>
          </div>

          {/* Visual Column - Profile Card Preview */}
          <div className="relative">
            {/* Main Profile Card */}
            <div className="bg-background rounded-3xl shadow-elevated p-6 sm:p-8 relative">
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/60 rounded-2xl flex items-center justify-center text-4xl shadow-card">
                  🐕
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Max</h3>
                  <p className="font-body text-muted-foreground">The Adventurous Traveler</p>
                </div>
                <div className="ml-auto">
                  <div className="bg-paw-light-sage px-3 py-1 rounded-full">
                    <span className="font-body text-sm font-medium text-primary">Verified Pup</span>
                  </div>
                </div>
              </div>

              {/* Profile Fields */}
              <div className="space-y-4">
                {profileFields.slice(1).map((field, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center shadow-soft">
                      <field.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-body text-sm text-muted-foreground">{field.label}</p>
                      <p className="font-display font-semibold text-foreground">{field.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-card animate-float">
                <span className="font-display font-bold flex items-center gap-2">
                  <PawPrint className="w-4 h-4" />
                  Ready to travel!
                </span>
              </div>
            </div>

            {/* Decorative background cards */}
            <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-primary/10 rounded-3xl rotate-2" />
            <div className="absolute -z-20 top-8 -right-8 w-full h-full bg-accent/10 rounded-3xl rotate-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCreationSection;
