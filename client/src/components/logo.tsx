import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  theme?: 'dark' | 'light';
}

export default function Logo({ className = "", size = 'medium', animated = false, theme = 'dark' }: LogoProps) {
  const sizes = {
    small: "text-xl",
    medium: "text-2xl",
    large: "text-4xl"
  };

  const LogoComponent = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  } : {};

  return (
    <LogoComponent
      className={`font-inter font-black ${sizes[size]} ${className}`}
      {...animationProps}
    >
      <span 
        className={theme === 'dark' ? 'text-white' : 'text-black'}
        style={{
          letterSpacing: '-0.8px',
          fontWeight: 900
        }}
      >
        Favor
      </span>
      <span 
        className="text-favorr-orange"
        style={{
          letterSpacing: '-0.8px',
          fontWeight: 900
        }}
      >
        r
      </span>
    </LogoComponent>
  );
}

export function LogoIcon({ className = "", size = 32 }: { className?: string, size?: number }) {
  return (
    <div 
      className={`inline-flex items-center justify-center bg-favorr-orange rounded-lg font-inter font-black text-white ${className}`}
      style={{ 
        width: size, 
        height: size,
        fontSize: Math.round(size * 0.6)
      }}
    >
      F
    </div>
  );
}