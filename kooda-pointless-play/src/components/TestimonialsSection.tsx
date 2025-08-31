import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "I wasted 6 hours scrolling a llama. 10/10 would do again. My productivity has never been lower and my happiness has never been higher.",
      author: "Elon D.",
      role: "Professional Time Waster",
      avatar: "🚀",
      rating: 5
    },
    {
      id: 2,
      text: "Finally, a website that understands my checkbox needs. I've been training for the Olympics and KOODA is my secret weapon.",
      author: "Anonymous Checkbox Enthusiast",
      role: "Click Champion 2024",
      avatar: "✅",
      rating: 5
    },
    {
      id: 3,
      text: "Better than therapy. Also cheaper. I smashed so many walls that my anger management coach asked for the link.",
      author: "Wall Puncher",
      role: "Level 99 Destroyer",
      avatar: "🥊",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ));
  };

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            What Our Victims Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real testimonials from real people who really should have been doing something else.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-accent/60" />
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                "{testimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-button flex items-center justify-center text-2xl mr-4 group-hover:animate-bounce-scale">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">Confusion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-secondary">0</div>
              <div className="text-sm text-muted-foreground">Refund Requests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Time Wasted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;