import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import CompartmentsSection from "@/components/CompartmentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ManifestoSection />
      <CompartmentsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
