import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shawarma.jpg";
import { Navigate } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Hero Text */}
        <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span 
              className="text-gradient"
              style={{
                background: 'linear-gradient(to right, #ef4444, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Street Food
            </span>{" "}
            <br />
            <span className="text-foreground">Delivered to </span>
            <span 
              className="text-gradient"
              style={{
                background: 'linear-gradient(to right, #ef4444, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              You
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience authentic shawarma, crispy meatpies, and irresistible snacks 
            from our mobile food carts, trucks, and straight to your doorstep.
          </p>
        </div>

        {/* Hero Image */}
        <div 
          className="relative max-w-4xl mx-auto mt-8 animate-float"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative rounded-2xl overflow-hidden card-shadow">
            <img
              src={heroImage}
              alt="Delicious shawarma wrap"
              className="w-full h-auto object-cover"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div 
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full animate-pulse-glow"
        style={{ backgroundColor: '#ef4444' }}
      />
      <div 
        className="absolute top-1/3 right-20 w-3 h-3 rounded-full animate-pulse-glow" 
        style={{ 
          animationDelay: "0.5s",
          backgroundColor: 'rgba(239, 68, 68, 0.5)'
        }} 
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse-glow" 
        style={{ 
          animationDelay: "1s",
          backgroundColor: '#ef4444'
        }} 
      />
    </section>
  );
};

export default HeroSection;