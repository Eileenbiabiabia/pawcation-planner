import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PawPrint, Play } from "lucide-react";
import { DecorativePaw } from "@/components/icons/PawIcons";
import heroImage from "@/assets/hero-dog-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DecorativePaw className="absolute top-32 left-10 w-16 h-16 text-primary/5 rotate-12" />
        <DecorativePaw className="absolute top-48 right-20 w-24 h-24 text-accent/10 -rotate-12" />
        <DecorativePaw className="absolute bottom-40 left-1/4 w-20 h-20 text-highlight/10 rotate-45" />
        <DecorativePaw className="absolute bottom-20 right-1/3 w-12 h-12 text-primary/5 -rotate-30" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          
          {/* Content Column */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-paw-light-sage px-4 py-2 rounded-full w-fit mb-6 opacity-0 animate-fade-in-up">
              <PawPrint className="h-4 w-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">
                Planned by AI. Approved by paws.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up stagger-1">
              Travel plans{" "}
              <span className="text-gradient">approved by paws,</span>
              <br />
              not just people.
            </h1>

            {/* Subheadline */}
            <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8 opacity-0 animate-fade-in-up stagger-2">
              Pawcation helps dogs decide where they can go, should go, and will actually enjoy — before their humans book anything.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  <PawPrint className="h-5 w-5" />
                  Create My Paw Profile
                </Link>
              </Button>
              <Button variant="hero-secondary" size="xl">
                <Play className="h-5 w-5" />
                See how it works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-10 opacity-0 animate-fade-in-up stagger-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <PawPrint className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span> happy pups have traveled with us
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative opacity-0 animate-fade-in-up stagger-2">
              {/* Main Image Container */}
              <div className="relative w-full max-w-lg lg:max-w-xl">
                {/* Decorative background shape */}
                <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-105" />
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={heroImage}
                    alt="Happy golden retriever on a plane looking out the window"
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
                </div>

                {/* Floating Card - Paw Approval */}
                <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-paw-light-sage rounded-full flex items-center justify-center">
                      <PawPrint className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground">Paw Approved!</p>
                      <p className="font-body text-sm text-muted-foreground">This trip looks fun</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Destination */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✈️</span>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">San Diego</p>
                      <p className="font-body text-xs text-primary">Dog-friendly!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
