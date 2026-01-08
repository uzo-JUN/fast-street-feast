import MenuCard from "./MenuCard";
import meatpieImage from "@/assets/meatpie.jpg";
import popcornImage from "@/assets/popcorn.jpg";
import shawarmaPlateImage from "@/assets/shawarma-plate.jpg";

const menuItems = [
  {
    image: shawarmaPlateImage,
    title: "Classic Shawarma Plate",
    description: "Tender grilled meat with fresh vegetables, hummus, and warm pita bread",
    price: "₦3,500",
  },
  {
    image: meatpieImage,
    title: "Golden Meatpie",
    description: "Flaky, buttery crust filled with seasoned minced meat and vegetables",
    price: "₦800",
  },
  {
    image: popcornImage,
    title: "Buttery Popcorn",
    description: "Fresh, warm popcorn made with premium butter and a hint of sea salt",
    price: "₦500",
  },
];

const MenuSection = () => {
  return (
    <section id="popular" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-gradient">Popular</span>
            <span className="text-foreground"> Picks</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Handcrafted with love and the freshest ingredients, these are the crowd favorites 
            that keep our customers coming back for more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard
              key={item.title}
              {...item}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
