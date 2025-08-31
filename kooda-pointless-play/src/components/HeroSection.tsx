import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import mascotImage from "@/assets/kooda-mascot.png";

const HeroSection = () => {
  const scrollToCompartments = () => {
    const compartmentsSection = document.getElementById('compartments');
    compartmentsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Mascot */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={mascotImage} 
              alt="KOODA Mascot - Sparkly Trash Bin with Crown" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain animate-bounce-scale"
            />
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="hero-title mb-6 leading-tight">
          KOODA
        </h1>
        
        <p className="text-2xl md:text-4xl font-bold text-muted-foreground mb-4">
          The Future of Useless Technology
        </p>

        {/* Subtitle */}
        <p className="hero-subtitle mb-12 max-w-2xl mx-auto">
          Why solve real problems when you can scroll infinite llamas? 
          <br />d
          <span className="text-accent font-semibold">Welcome to the portal of absolutely pointless fun.</span>
        </p>

        {/* CTA Button */}
        <Button 
          onClick={scrollToCompartments}
          className="btn-chaos text-white shadow-neon hover:shadow-card-hover"
          size="lg"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Enter the Chaos
          <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
        </Button>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;