import { Truck, Store, Home, MapPin } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Truck,
    title: "Food Trucks",
    description: "Catch our vibrant food trucks at popular locations across the city. Fresh, fast, and flavorful!",
  },
  {
    icon: Store,
    title: "Mobile Carts & Booths",
    description: "Find us at events, markets, and busy corners. Quick bites that pack a punch of flavor.",
  },
  {
    icon: Home,
    title: "Home Delivery",
    description: "Craving our snacks? We deliver straight to your doorstep, hot and ready to enjoy.",
  },
  {
    icon: MapPin,
    title: "Event Catering",
    description: "Make your event unforgettable with our street food catering. Perfect for parties and gatherings.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">How We </span>
            <span 
              className="text-gradient"
              style={{
                background: 'linear-gradient(to right, #ef4444, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Serve
            </span>
            <span className="text-foreground"> You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether you're on the go or relaxing at home, Mealsworth brings the best 
            street food experience right to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;