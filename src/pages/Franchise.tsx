// FranchisePage.tsx - WITHOUT Search & Bookmark icons, VISIBLE ON MOBILE
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Shield, 
  Clock, 
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";

// Navbar Component - NOW VISIBLE ON MOBILE
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
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm">M</span>
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

          {/* Right Side - REMOVED Search & Bookmark icons */}
          <div className="flex items-center gap-2">
            {/* Empty - Icons removed as requested */}
          </div>
        </div>
      </div>
    </nav>
  );
};

const FranchisePage = () => {
  // Gallery Images - Add your franchise location images here
  const galleryImages = [
    { id: 1, image: "/assets/stores.jpg", location: "Lagos Mainland", type: "Flagship" },
    { id: 2, image: "/assets/snack store.jpg", location: "Abuja Central", type: "Premium" },
    { id: 3, image: "/assets/snstor.jpg", location: "Port Harcourt", type: "Express" },
    { id: 4, image: "/assets/snackkk.jpg", location: "Ibadan", type: "Standard" },
    { id: 5, image: "/assets/snaso.jpg", location: "Enugu", type: "Classic" },
    { id: 6, image: "/assets/sstor.avif", location: "Kano", type: "Heritage" },
    { id: 7, image: "/assets/store.webp", location: "Calabar", type: "Coastal" },
    { id: 8, image: "/assets/enust.jpg", location: "Benin", type: "Traditional" },
  ];

  // Benefits of Franchising
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Business Model",
      description: "Join a system with 90% success rate",
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Full Support",
      description: "Training, marketing & ongoing assistance",
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Low Investment",
      description: "Start from ₦1M with flexible financing",
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Network",
      description: "Join 50+ successful franchisees",
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ];

  // Success Stories
  const successStories = [
    {
      name: "Chidi Okonkwo",
      location: "Lagos",
      duration: "2 years",
      growth: "300%",
      image: "/assets/chidiii.jpg",
      quote: "Best decision of my life. The support system is incredible."
    },
    {
      name: "Amina Yusuf",
      location: "Kano",
      duration: "1 year",
      growth: "250%",
      image: "/assets/amina.jpg",
      quote: "From zero to hero. The training program transformed me."
    },
    {
      name: "Emeka Nwosu",
      location: "Enugu",
      duration: "3 years",
      growth: "400%",
      image: "/assets/yufu.jpg",
      quote: "Life-changing opportunity. The brand recognition is amazing."
    }
  ];

  // Process Steps
  const processSteps = [
    { step: 1, title: "Apply Online", description: "Fill our simple application form", icon: "📝" },
    { step: 2, title: "Initial Consultation", description: "Meet our franchise team", icon: "🤝" },
    { step: 3, title: "Location Approval", description: "We help find the perfect spot", icon: "📍" },
    { step: 4, title: "Training Program", description: "2-week intensive training", icon: "🎓" },
    { step: 5, title: "Grand Opening", description: "We support your launch", icon: "🎉" },
    { step: 6, title: "Ongoing Support", description: "Continuous growth assistance", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section with Full-width Image */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/assets/foodle.png" 
              alt="Franchise Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 md:px-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Store className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">FRANCHISE OPPORTUNITY</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Own a <span className="text-primary">Mealsworth</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                  Join Nigeria's fastest growing street food franchise. 
                  Turn your entrepreneurial dreams into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full">
                    Apply Now <ChevronRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-2">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-card border-y border-border py-12">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Franchise Locations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">₦1M</div>
                <div className="text-sm text-muted-foreground">Starting Investment</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Visual Focus */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our <span className="text-primary">Franchise Network</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our successful locations across Nigeria
              </p>
            </div>
            
            {/* Masonry Grid for Images */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((item) => (
                <div 
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden group break-inside-avoid mb-4"
                >
                  <img 
                    src={item.image} 
                    alt={item.location}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <div className="text-white font-bold text-xl mb-1">{item.location}</div>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/80 backdrop-blur-sm rounded-full text-sm text-white">
                        <Store className="w-3 h-3" />
                        {item.type}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose <span className="text-primary">Mealsworth</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide everything you need to succeed
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-xl"
                >
                  <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Success <span className="text-primary">Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our franchise owners
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div 
                  key={index}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-background border-x border-b border-border rounded-b-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-xl">{story.name}</h3>
                        <p className="text-primary">{story.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{story.growth}</div>
                        <div className="text-sm text-muted-foreground">Growth</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{story.quote}"</p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{story.duration} operating</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Simple <span className="text-primary">6-Step Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From application to grand opening in 60 days
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <div 
                  key={step.step}
                  className="relative bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8">
            <div className="bg-gradient-to-r from-primary to-[hsl(35,90%,55%)] rounded-2xl p-12 text-primary-foreground text-center">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join the Mealsworth family and build your legacy with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full font-bold">
                  Apply for Franchise <ChevronRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Franchise Department</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+234 702 582 5718</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Shunebauzoechinna@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Enugu, Nigeria </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Investment Range</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Express Kiosk</span>
                    <span className="font-bold">₦1 - ₦3M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Standard Outlet</span>
                    <span className="font-bold">₦4M - ₦7M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Premium Store</span>
                    <span className="font-bold">₦8M - ₦10M</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/franchise#faq" className="block text-muted-foreground hover:text-primary transition-colors">
                    FAQ
                  </Link>
                  <Link to="/franchise#requirements" className="block text-muted-foreground hover:text-primary transition-colors">
                    Requirements
                  </Link>
                  <Link to="/franchise#territory" className="block text-muted-foreground hover:text-primary transition-colors">
                    Available Territories
                  </Link>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    Download Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FranchisePage;