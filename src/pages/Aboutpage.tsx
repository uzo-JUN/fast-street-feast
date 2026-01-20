// AboutPage.tsx - WITHOUT Search & Bookmark icons, VISIBLE ON MOBILE
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, TrendingUp } from "lucide-react";

// Navbar Component - WITHOUT Search & Bookmark icons, NOW VISIBLE ON MOBILE
const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Franchise", path: "/franchise" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return false;
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#ef4444' }} // Red color
              >
                <span className="text-white font-bold text-xs sm:text-sm">M</span>
              </div>
              <span className="text-foreground font-semibold text-base sm:text-lg">Mealsworth</span>
            </Link>

            {/* Nav Links - NOW VISIBLE ON MOBILE TOO! */}
            <div className="flex items-center gap-3 sm:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-xs sm:text-sm flex items-center gap-1 transition-colors ${
                    isActive(item.path)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - REMOVED Search & Bookmark icons, keeping structure */}
          <div className="flex items-center gap-2">
            {/* Empty - Icons removed as requested */}
          </div>
        </div>
      </div>
    </nav>
  );
};

const AboutPage = () => {
  const storyImages = [
    { id: 1, image: "/assets/nightfdd.jpg" },
    { id: 2, image: "/assets/smile and buy.jpg" },
    { id: 3, image: "/assets/prep.jpg" },
    { id: 4, image: "/assets/eeeec.webp" }
  ];

  const values = [
    { title: "Quality", image: "/assets/quality.png" },
    { title: "Passion", image: "/assets/passion.webp" },
    { title: "Trust", image: "/assets/trust.jpg" },
    { title: "Speed", image: "/assets/speed.webp" }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers", emoji: "😊" },
    { number: "24/7", label: "Available", emoji: "⏰" },
    { number: "30min", label: "Avg. Delivery", emoji: "🚚" },
    { number: "100%", label: "Fresh", emoji: "🌿" }
  ];

  const team = [
    { 
      name: "Alex", 
      role: "Head Chef", 
      image: "/assets/head chef.jpg",
      fallback: "👨‍🍳"
    },
    { 
      name: "Maria", 
      role: "Pastry Chef", 
      image: "/assets/pastry.jpg",
      fallback: "👩‍🍳"
    },
    { 
      name: "David", 
      role: "Delivery", 
      image: "/assets/delivery.jpg",
      fallback: "🚚"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar /> {/* Keep this Navbar */}
      
      <div className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative overflow-hidden py-16 md:py-24"
          style={{ 
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, transparent 100%)' 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ 
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderColor: 'rgba(239, 68, 68, 0.2)'
                }}
              >
                <Flame className="w-4 h-4" style={{ color: '#ef4444' }} />
                <span className="text-sm font-medium" style={{ color: '#ef4444' }}>
                  THE JOURNEY
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span 
                  className="text-gradient"
                  style={{
                    background: 'linear-gradient(to right, #ef4444, #dc2626)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Welcome
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From street food dreams to your favorite meals
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Story Images Grid - Clean & Aligned */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {storyImages.map((image) => (
                <div 
                  key={image.id}
                  className="relative rounded-xl overflow-hidden h-64 group"
                >
                  <img 
                    src={image.image} 
                    alt="WELCOME "
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full flex items-center justify-center';
                        fallback.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)';
                        fallback.innerHTML = '<span class="text-4xl opacity-50">📷</span>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-card rounded-xl p-8 mb-16 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2">{stat.emoji}</div>
                    <div 
                      className="text-3xl font-bold mb-1"
                      style={{ color: '#ef4444' }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">
                  What We Stand For
                </h2>
                <p className="text-muted-foreground">
                  Simple values, great food
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="relative rounded-xl overflow-hidden h-48 group"
                  >
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full flex items-center justify-center';
                          fallback.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)';
                          fallback.innerHTML = `
                            <div class="text-4xl">
                              ${value.title === "Quality" ? "✨" : 
                                value.title === "Passion" ? "❤️" :
                                value.title === "Trust" ? "🛡️" : "⚡"}
                            </div>
                          `;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">
                        {value.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">
                  Meet Our Team
                </h2>
                <p className="text-muted-foreground">
                  The faces behind your favorite meals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)',
                        borderColor: 'rgba(239, 68, 68, 0.2)'
                      }}
                    >
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = document.createElement('span');
                              fallback.className = 'text-5xl flex items-center justify-center h-full';
                              fallback.textContent = member.fallback;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      ) : (
                        <span className="text-5xl flex items-center justify-center h-full">
                          {member.fallback}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-xl mb-1">
                      {member.name}
                    </h3>
                    <p 
                      className="font-medium mb-1"
                      style={{ color: '#ef4444' }}
                    >
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div 
              className="rounded-2xl p-8 mb-12"
              style={{
                background: 'linear-gradient(to right, #ef4444, #dc2626)',
                color: 'white'
              }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">JOIN OUR JOURNEY</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Taste?
                  </h3>
                  <p className="opacity-90">
                    Experience the Mealsworth difference today
                  </p>
                </div>
                <Link to="/menu">
                  <Button 
                    className="mt-4 md:mt-0 font-bold rounded-lg hover:opacity-90 transition-opacity px-8 py-3"
                    style={{
                      backgroundColor: 'white',
                      color: '#ef4444'
                    }}
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ef4444' }}
                >
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-foreground font-semibold">Mealsworth</span>
              </div>
              <div className="text-sm text-muted-foreground">
                © 2014 Mealsworth
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;