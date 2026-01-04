import { Heart, Shield, Sparkles, Clock, MapPin, ThumbsUp, PawPrint } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Pet-First Perspective",
    description: "Every recommendation is evaluated from your dog's point of view, not just yours.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Airline Policy Expert",
    description: "We decode complex pet policies so you know exactly what to expect.",
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Dog-Friendly Destinations",
    description: "Curated spots where your pup is truly welcome, not just tolerated.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Trip timings that respect your dog's routine and comfort needs.",
    highlight: false,
  },
  {
    icon: ThumbsUp,
    title: "Honest Assessments",
    description: "We'll tell you if a trip isn't right — that's what friends are for.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "AI-Powered Planning",
    description: "Advanced AI that understands what makes each dog unique.",
    highlight: false,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background py-20 sm:py-28 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--border)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Why Pawcation?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Because Your Dog Deserves Better
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Traditional travel sites forget the most important member of your pack. We don't.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                feature.highlight 
                  ? 'bg-primary text-primary-foreground shadow-elevated' 
                  : 'bg-card shadow-soft hover:shadow-card'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                feature.highlight 
                  ? 'bg-primary-foreground/20' 
                  : 'bg-primary/10'
              }`}>
                <feature.icon className={`w-7 h-7 ${
                  feature.highlight 
                    ? 'text-primary-foreground' 
                    : 'text-primary'
                }`} />
              </div>

              {/* Content */}
              <h3 className={`font-display text-xl font-bold mb-3 ${
                feature.highlight ? '' : 'text-foreground'
              }`}>
                {feature.title}
              </h3>
              <p className={`font-body leading-relaxed ${
                feature.highlight 
                  ? 'text-primary-foreground/80' 
                  : 'text-muted-foreground'
              }`}>
                {feature.description}
              </p>

              {/* Decorative Paw */}
              <div className={`absolute bottom-4 right-4 opacity-10 transition-opacity group-hover:opacity-20 ${
                feature.highlight ? 'text-primary-foreground' : 'text-primary'
              }`}>
                <PawPrint className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
