// Navbar.tsx
import { Search, Bookmark, ShoppingCart, Utensils, Info } from "lucide-react"; // Added Info icon for About
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Menu", path: "/menu", },
    { name: "About", path: "/about", },
    { name: "Franchise", path: "/franchise" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="text-foreground font-semibold text-lg">Mealsworth</span>
            </Link>

            {/* Nav Links - Now with About */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                item.path.startsWith('#') ? (
                  // For anchor links (same page)
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                  >
                    {item.name}
                  </a>
                ) : (
                  // For page routes (like /menu, /about)
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            <Button variant="navIcon" size="icon" className="rounded-full">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="navIcon" size="icon" className="rounded-full">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Link to="/cart">
              <Button variant="navIcon" size="icon" className="rounded-full">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;