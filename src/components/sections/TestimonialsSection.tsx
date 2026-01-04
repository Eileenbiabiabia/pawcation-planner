import { Quote, Star, PawPrint } from "lucide-react";

const testimonials = [
  {
    quote: "I can fly in the cabin, but I don't love crowded airports. Pawcation found us a quiet route!",
    dogName: "Luna",
    breed: "Shih Tzu",
    location: "New York → Miami",
    avatar: "🐕",
    rating: 5,
  },
  {
    quote: "This hotel says 'pet-friendly,' but Pawcation told my human I'm not allowed to stay alone. Good to know!",
    dogName: "Cooper",
    breed: "Labrador",
    location: "Seattle → Portland",
    avatar: "🦮",
    rating: 5,
  },
  {
    quote: "Three long flights in two days? That's a no from me. Pawcation suggested a better route with breaks.",
    dogName: "Bella",
    breed: "Beagle",
    location: "LA → Tokyo (eventually!)",
    avatar: "🐶",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-highlight/20 text-highlight-foreground px-4 py-2 rounded-full font-body text-sm font-medium mb-4">
            <PawPrint className="h-4 w-4" />
            Paw Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Straight From the Dog's Mouth
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Real feedback from our four-legged travelers (translated by their humans, of course).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-card rotate-6">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-foreground leading-relaxed mb-6 text-lg italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-3xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.dogName}</p>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.breed}</p>
                  <p className="font-body text-xs text-primary">{testimonial.location}</p>
                </div>
              </div>

              {/* Decorative Paw */}
              <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <PawPrint className="w-16 h-16 text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
