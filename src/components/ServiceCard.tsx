import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div 
      className="bg-card border border-border rounded-xl p-6 transition-all duration-300 group"
      style={{
        '--hover-color': '#ef4444',
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '';
      }}
    >
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors"
        style={{ 
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        }}
      >
        <Icon className="h-6 w-6" style={{ color: '#ef4444' }} />
      </div>
      <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;