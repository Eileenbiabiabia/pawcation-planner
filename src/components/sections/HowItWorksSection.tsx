import { Dog, Plane, CheckCircle, PawPrint } from "lucide-react";

const steps = [
  {
    icon: Dog,
    title: "Meet the Traveler",
    description: "Create a profile for your dog — their size, personality, comfort level, and needs.",
    color: "bg-paw-light-sage",
    iconColor: "text-primary",
  },
  {
    icon: Plane,
    title: "Paw-first Planning",
    description: "We analyze airline rules, hotel policies, and destinations from your dog's perspective.",
    color: "bg-paw-light-terracotta",
    iconColor: "text-accent",
  },
  {
    icon: CheckCircle,
    title: "Paw Approved Results",
    description: "Get a travel plan your dog would actually approve — or learn why they wouldn't.",
    color: "bg-highlight/20",
    iconColor: "text-highlight-foreground",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-card py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <PawPrint className="w-32 h-32 text-foreground" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <PawPrint className="w-24 h-24 text-foreground rotate-45" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
            <PawPrint className="h-4 w-4" />
            Simple as 1-2-3
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How Pawcation Works
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Three simple steps to a trip your furry friend will actually love.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-background rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 group-hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-display font-bold text-lg shadow-card">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
