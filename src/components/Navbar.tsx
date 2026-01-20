// Navbar.tsx - WITHOUT ICONS
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Franchise", path: "/franchise" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4 sm:gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#ef4444' }} // Red background
              >
                <span className="text-white font-bold text-xs sm:text-sm">M</span>
              </div>
              <span className="text-foreground font-semibold text-base sm:text-lg">Mealsworth</span>
            </Link>

            {/* Nav Links - Now visible on ALL screens */}
            <div className="flex items-center gap-3 sm:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Empty now, removed all icons */}
          <div className="flex items-center">
            {/* You can add something else here later if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;