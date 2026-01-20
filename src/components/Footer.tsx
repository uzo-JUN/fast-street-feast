import { Instagram, Twitter, Facebook, Phone, Mail, MapPin, Dribbble, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const categories = [
    { name: "Shawarma", id: "sharwama" },
    { name: "Meatpie", id: "pies" },
    { name: "Popcorn", id: "popcorn" },
    { name: "Drinks", id: "drinks" },
    { name: "Fruits", id: "fruits" },
    { name: "Combos", id: "combos" }
  ];

  // Quick links for navigation
  const quickLinks = [
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Franchise", path: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-foreground font-semibold text-lg">Mealsworth</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Bringing authentic street food flavors to your neighborhood since 2025.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4 text-foreground" />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <X className="h-4 w-4 text-foreground" />
              </a>
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Dribbble className="h-4 w-4 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu - Now links to specific categories */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/menu#${category.id}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors block"
                    onClick={(e) => {
                      e.preventDefault();
                      // Navigate to menu page first, then scroll to category
                      const navigateToCategory = () => {
                        const element = document.getElementById(category.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      };
                      
                      // If we're already on menu page, just scroll
                      if (window.location.pathname === '/menu') {
                        navigateToCategory();
                      } else {
                        // Navigate to menu, then scroll after page loads
                        window.location.href = `/menu#${category.id}`;
                      }
                    }}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-primary" />
                +234 702 582 5718
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-primary" />
                Shunebauzoechinna@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                Enugu, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Mealsworth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;