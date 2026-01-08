import { Instagram, Twitter, Facebook, Phone, Mail, MapPin, Dribbble, X } from "lucide-react";

const Footer = () => {
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
              <a href="https://instagram.com/" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4 text-foreground" />
              </a>
              <a href="https://x.com/" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <X className="h-4 w-4 text-foreground" />
              </a>
              <a href="https://dribbble.com/" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Dribbble className="h-4 w-4 text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "Locations", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {["Shawarma", "Meatpie", "Popcorn", "Drinks","Fruits", "Combos",].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {item}
                  </a>
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
