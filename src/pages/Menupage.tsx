import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ShoppingCart, Filter, Star, ChefHat, Flame, Sparkles, TrendingUp } from "lucide-react";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Categories
  const categories = [
    { id: "all", name: "All", icon: "🍽️", count: 24 },
    { id: "sharwama", name: "Sharwama", icon: "🥙", count: 5 },
    { id: "pies", name: "Pies", icon: "🥧", count: 5 },
    { id: "popcorn", name: "Popcorn", icon: "🍿", count: 3 },
    { id: "snacks", name: "Snacks", icon: "🍟", count: 4 },
    { id: "drinks", name: "Drinks", icon: "🥤", count: 5 },
    { id: "combos", name: "Combos", icon: "🎯", count: 2 }
  ];

  // Menu Items Data (same as before, shortened for brevity)
  const menuItems = [
    {
      id: 1,
      name: "Arabic Shawarma",
      description: "Authentic Middle Eastern shawarma with garlic sauce",
      price: 9.99,
      category: "sharwama",
      prepTime: "6-8 min",
      rating: 4.9,
      bestseller: true,
      image: "https://images.unsplash.com/photo-1634315322828-8c8c4c86d69c?w=400&h=300&fit=crop"
    },
    // ... Add all your menu items here (same as your original)
  ];

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Add to cart function
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

  // Calculate total items in cart
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
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
                className="w-full px-6 py-3 bg-card border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                🔍
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-6 py-3 bg-card border border-input rounded-xl hover:border-primary/50 transition-colors flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Categories</h2>
              <span className="text-sm text-muted-foreground">{filteredItems.length} items</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-4">
              {categories.map((category) => (
                <button
                  key={category.id}
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
                    {category.count}
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
                <h3 className="text-2xl font-bold mb-2">No items found</h3>
                <p className="text-muted-foreground">Try a different search or category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id}
                    className="group bg-card border border-input rounded-2xl overflow-hidden hover:shadow-card transition-all hover:border-primary/30"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {item.bestseller && (
                          <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            BESTSELLER
                          </div>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-bold">{item.rating}</span>
                      </div>

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
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <div className="text-xl font-bold text-primary">
                          ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{item.prepTime}</span>
                        </div>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-primary to-[hsl(35,90%,55%)] rounded-2xl p-8 text-primary-foreground mb-12 glow-shadow">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-medium">WEEKEND SPECIAL</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Family Feast Combo - Save 25%
                </h3>
                <p className="opacity-90">
                  4 Sharwarmas + 4 Pies + 2 Popcorns + 4 Drinks for only $45.99
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 bg-primary-foreground text-primary font-bold rounded-lg hover:opacity-90 transition-opacity">
                Grab This Deal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {totalCartItems > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={() => navigate("/cart")}
            className="bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3 group"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-primary-foreground text-primary text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalCartItems}
              </span>
            </div>
            <div className="text-left">
              <div className="font-bold">{totalCartItems} items</div>
              <div className="text-sm opacity-90">View Cart</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuPage;