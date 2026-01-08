interface MenuCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  delay?: number;
}

const MenuCard = ({ image, title, description, price, delay = 0 }: MenuCardProps) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden card-shadow hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-foreground font-semibold text-lg">{title}</h3>
          <span className="text-primary font-bold">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
