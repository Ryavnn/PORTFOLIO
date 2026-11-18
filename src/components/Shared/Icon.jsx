import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Code, Coffee, Globe, Laptop,
  Mountain, Music, Package, Palette, Quote, RefreshCw, Rocket, Settings, Shield,
  Smartphone, Tent, User, Zap,
} from 'lucide-react';

const icons = {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Code, Coffee, Globe, Laptop,
  Mountain, Music, Package, Palette, Quote, RefreshCw, Rocket, Settings, Shield,
  Smartphone, Tent, User, Zap,
};

const Icon = ({ name, size = 24, color = "currentColor", className = "", ...props }) => {
  const IconComponent = Object.hasOwn(icons, name) ? icons[name] : Package;
  return <IconComponent size={size} color={color} className={className} {...props} />;
};

export default Icon;
