import { Dog, PawPrint, Plane, MapPin, Heart, Sparkles } from "lucide-react";

interface PawIconProps {
  className?: string;
  size?: number;
}

export const PawIcon = ({ className, size = 24 }: PawIconProps) => (
  <PawPrint className={className} size={size} />
);

export const DogIcon = ({ className, size = 24 }: PawIconProps) => (
  <Dog className={className} size={size} />
);

export const PlaneIcon = ({ className, size = 24 }: PawIconProps) => (
  <Plane className={className} size={size} />
);

export const LocationIcon = ({ className, size = 24 }: PawIconProps) => (
  <MapPin className={className} size={size} />
);

export const HeartIcon = ({ className, size = 24 }: PawIconProps) => (
  <Heart className={className} size={size} />
);

export const SparklesIcon = ({ className, size = 24 }: PawIconProps) => (
  <Sparkles className={className} size={size} />
);

// Custom paw print SVG for decorative use
export const DecorativePaw = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    fill="currentColor"
  >
    <ellipse cx="50" cy="65" rx="22" ry="25" />
    <ellipse cx="25" cy="35" rx="12" ry="14" />
    <ellipse cx="75" cy="35" rx="12" ry="14" />
    <ellipse cx="15" cy="55" rx="10" ry="12" />
    <ellipse cx="85" cy="55" rx="10" ry="12" />
  </svg>
);

// Bone icon
export const BoneIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 40" 
    className={className}
    fill="currentColor"
  >
    <rect x="20" y="12" width="60" height="16" rx="8" />
    <circle cx="15" cy="10" r="10" />
    <circle cx="15" cy="30" r="10" />
    <circle cx="85" cy="10" r="10" />
    <circle cx="85" cy="30" r="10" />
  </svg>
);
