import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Clock, ShoppingCart, Filter, Star, Flame, Sparkles, TrendingUp, Utensils, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Navbar Component with active state - NOW VISIBLE ON MOBILE
const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Franchise", path: "/franchise" },
  ];

  // Check if current path matches nav item
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
          {/* Logo */}
          <div className="flex items-center gap-4 sm:gap-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs sm:text-sm">M</span>
              </div>
              <span className="text-foreground font-semibold text-base sm:text-lg">Mealsworth</span>
            </Link>

            {/* Nav Links with active highlighting - NOW VISIBLE ON MOBILE! */}
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

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect hash from URL and set active category
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.find(cat => cat.id === hash)) {
      setActiveCategory(hash);
      
      // Scroll to category filter section
      setTimeout(() => {
        const element = document.getElementById(`category-${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }, [location]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart:', error);
        setCartItems([]);
      }
    }
    setLoading(false);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Menu Items Data - UPDATED WITH PUBLIC FOLDER PATHS
  const menuItems = [
    // SHAWARMA ITEMS
    {
      id: 1,
      name: "Arabic Shawarma",
      description: "Authentic Middle Eastern shawarma with garlic sauce",
      price: 5500,
      category: "sharwama",
      rating: 4.9,
      image: "/assets/arabic-sharwarma.jpg" 
    },
    {
      id: 2,
      name: "Long Shawarma",
      description: "Extra-long shawarma wrap with double filling",
      price: 5500,
      category: "sharwama",
      image: "/assets/long-sharwarma.jpg"
    },
    {
      id: 3,
      name: "Beef Shawarma",
      description: "Beef shawarma rolls with special spices",
      price: 5500,
      category: "sharwama",
      image: "/assets/beef-sharwarma.jpg"
    },
    {
      id: 4,
      name: "Top Shawarma",
      description: "Premium shawarma with extra toppings",
      price: 3500,
      category: "sharwama",
      image: "/assets/top-sharwarma.jpg"
    },
    {
      id: 5,
      name: "Classic Shawarma",
      description: "Traditional shawarma with fresh veggies",
      price: 3500,
      category: "sharwama",
      image: "/assets/sharwama.jpeg"
    },

    // PIES ITEMS
    {
      id: 6,
      name: "Meat Pie Deluxe",
      description: "Flaky pastry with seasoned minced meat",
      price: 2500,
      category: "pies",
      image: "/assets/meatpie.jpeg"
    },
    {
      id: 7,
      name: "Cottage Pie",
      description: "Shepherd's pie with mashed potato topping",
      price: 2500,
      category: "pies",
      image: "/assets/cottage-pie.jpg"
    },
    {
      id: 8,
      name: "Blueberry Pies",
      description: "Delicious assorted pies with different fillings",
      price: 2500,
      category: "pies",
      image: "/assets/combopies22.jpeg"
    },
    {
      id: 9,
      name: "Apple Pie",
      description: "Sweet two pies filled with choice of filling",
      price: 2500,
      category: "pies",
      image: "/assets/apple-pie.jpg"
    },
    {
      id: 10,
      name: "Single Pie",
      description: "Hot tasty freshly baked individual plain pie",
      price: 1500,
      category: "pies",
      image: "/assets/single-pie.jpg"
    },

    // POPCORN ITEMS
    {
      id: 11,
      name: "Premium Popcorn",
      description: "Exclusive large popcorn with special seasoning",
      price: 2000,
      category: "popcorn",
      image: "/assets/popcorn.jpeg" 
    },
    {
      id: 12,
      name: "Caramel Popcorn",
      description: "Fresh and sweet caramel-coated popcorn",
      price: 1500,
      category: "popcorn",
      image: "/assets/cornpop.jpeg"
    },
    {
      id: 13,
      name: "Classic Popcorn",
      description: "Fresh and hot popped popcorn with butter",
      price: 700,
      category: "popcorn",
      image: "/assets/ppcorn.jpeg"
    },

    // SNACKS ITEMS
    {
      id: 14,
      name: "Snack Platter",
      description: "Exclusive Assorted snacks and finger foods",
      price: 12000,
      category: "snacks",
      image: "/assets/snacks.jpeg"
    },
    {
      id: 15,
      name: "More Snacks",
      description: "Delicious variety pack of popular snacks",
      price: 10000,
      category: "snacks",
      image: "/assets/more-snacks.jpg"
    },
    {
      id: 16,
      name: "Snack Again",
      description: "Loads of fixed snack selection for sharing",
      price: 11500,
      category: "snacks",
      image: "/assets/snack-again.jpg"
    },
    {
      id: 17,
      name: "Other Snacks",
      description: "Premium selection of international snacks",
      price: 10250,
      category: "snacks",
      image: "/assets/other-snacks.jpg"
    },

    // DRINKS ITEMS
    {
      id: 18,
      name: "Coke Drink",
      description: "Chilled and refreshing Coca-Cola beverage",
      price: 500,
      category: "drinks",
      image: "/assets/coke-drink.jpg"
    },
    {
      id: 19,
      name: "Ice cube Coca-Cola",
      description: "Cold and Classic Coca-Cola in a glass cup",
      price: 750,
      category: "drinks",
      image: "/assets/coke.jpeg"
    },
    {
      id: 20,
      name: "Sprite Drink",
      description: "Exclusive Lemon and lime Sprite beverage",
      price: 500,
      category: "drinks",
      image: "/assets/sprite-drink.jpg"
    },
    {
      id: 21,
      name: "Drink Platter",
      description: "Different Assorted drinks for groups to enjoy",
      price: 6000,
      category: "drinks",
      image: "/assets/drink-platter.jpg"
    },
    {
      id: 22,
      name: "Smoothies",
      description: "Chill and Cold beverages of your choice",
      price: 1500,
      category: "drinks",
      image: "/assets/drink.jpeg"
    },

    // COMBO ITEMS
    {
      id: 23,
      name: "Combo Pies",
      description: "Exclusiv multiple pies with dipping sauces",
      price: 14999,
      category: "combos",
      image: "/assets/combopies22.jpeg"
    },
    {
      id: 24,
      name: "Complete Combo",
      description: "Mixtture of Shawarma + Pie + Popcorn + Drink",
      price: 40500,
      category: "combos",
      image: "/assets/cornpop.jpeg"
    }
  ];

  // Dynamically calculate category counts
  const calculateCategoryCounts = () => {
    const counts: Record<string, number> = {
      all: menuItems.length,
      sharwama: menuItems.filter(item => item.category === "sharwama").length,
      pies: menuItems.filter(item => item.category === "pies").length,
      popcorn: menuItems.filter(item => item.category === "popcorn").length,
      snacks: menuItems.filter(item => item.category === "snacks").length,
      drinks: menuItems.filter(item => item.category === "drinks").length,
      combos: menuItems.filter(item => item.category === "combos").length
    };
    return counts;
  };

  const categoryCounts = calculateCategoryCounts();

  // Categories with dynamic counts
  const categories = [
    { id: "all", name: "All", icon: "🍽️" },
    { id: "sharwama", name: "Sharwama", icon: "🥙" },
    { id: "pies", name: "Pies", icon: "🥧" },
    { id: "popcorn", name: "Popcorn", icon: "🍿" },
    { id: "snacks", name: "Snacks", icon: "🍟" },
    { id: "drinks", name: "Drinks", icon: "🥤" },
    { id: "combos", name: "Combos", icon: "🎯" }
  ];

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add to cart function - KEPT but cart display removed as requested
  const addToCart = (item: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-foreground">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Add Navbar Here with highlighting */}
      <Navbar />

      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Flame className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Street Food Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-gradient bg-gradient-to-r from-primary to-[hsl(35,90%,55%)]">
                  Full Menu
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover our complete selection of street food favorites. From shawarma to snacks, we have it all!
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{menuItems.length}+</div>
                  <div className="text-sm text-muted-foreground">Items</div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search for dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  🔍
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-6 py-3 bg-card border border-input rounded-xl hover:border-primary/50 transition-colors flex items-center gap-2 text-foreground">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
              </div>
            </div>

            {/* Category Filter - Added IDs for hash navigation */}
            <div className="mb-12" id="category-filter">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Categories</h2>
                <span className="text-sm text-muted-foreground">{filteredItems.length} items</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    id={`category-${category.id}`} // Added ID for hash navigation
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-3 rounded-xl font-medium whitespace-nowrap flex items-center gap-2 transition-all ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-input"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? "bg-primary-foreground/20"
                        : "bg-input"
                    }`}>
                      {categoryCounts[category.id] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Grid */}
            <div className="mb-12">
              {filteredItems.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🍽️</div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">No items found</h3>
                  <p className="text-muted-foreground">Try a different search or category</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id}
                      className="group bg-card border border-input rounded-2xl overflow-hidden hover:shadow-card transition-all hover:border-primary/30"
                    >
                      {/* Image Container - Shows actual images from public folder */}
                      <div className="relative h-48 overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              // Show emoji fallback
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('div');
                                fallback.className = 'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5';
                                fallback.innerHTML = `
                                  <span class="text-4xl mb-2">${
                                    item.category === "sharwama" ? "🥙" : 
                                    item.category === "pies" ? "🥧" :
                                    item.category === "popcorn" ? "🍿" :
                                    item.category === "snacks" ? "🍟" :
                                    item.category === "drinks" ? "🥤" : "🎯"
                                  }</span>
                                  <span class="text-xs text-muted-foreground">Image loading...</span>
                                `;
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                            <span className="text-4xl mb-2">
                              {item.category === "sharwama" ? "🥙" : 
                               item.category === "pies" ? "🥧" :
                               item.category === "popcorn" ? "🍿" :
                               item.category === "snacks" ? "🍟" :
                               item.category === "drinks" ? "🥤" : "🎯"}
                            </span>
                            <span className="text-xs text-muted-foreground">No image</span>
                          </div>
                        )}
                        
                        {/* Category */}
                        <div className="absolute bottom-3 left-3">
                          <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                            {item.category.toUpperCase()}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                          <div className="text-xl font-bold text-primary">
                            ₦{item.price.toLocaleString()}
                          </div>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        {/* Footer - Add to Cart button kept but no cart display */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <button
                            onClick={() => addToCart(item)}
                            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-primary to-[hsl(35,90%,55%)] rounded-2xl p-8 text-primary-foreground mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">WEEKEND SPECIAL</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Family Feast Combo - Save 5%
                  </h3>
                  <p className="opacity-90">
                    4 Sharwarmas + 4 Pies + 2 Popcorns + 4 Drinks for only ₦40,500
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:opacity-90 transition-opacity">
                  Grab This Deal
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MenuPage;