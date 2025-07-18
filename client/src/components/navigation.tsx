import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./logo";

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md transition-transform duration-300 border-b border-white/5 ${
        isHidden ? 'nav-hide' : 'nav-show'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button 
            onClick={() => window.location.reload()}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="medium" />
          </motion.button>
          
          <div className="hidden md:flex space-x-8">
            <motion.button 
              onClick={() => scrollToSection('wat-is-favor')} 
              className="text-white/80 hover:text-favorr-orange transition-colors font-medium"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Wat is een Favor?
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('hoe-werkt')} 
              className="text-white/80 hover:text-favorr-orange transition-colors font-medium"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Hoe het werkt
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('waarom')} 
              className="text-white/80 hover:text-favorr-orange transition-colors font-medium"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              Waarom
            </motion.button>
          </div>
          
          <motion.button 
            onClick={() => scrollToSection('waitlist')}
            className="group relative px-6 py-2 border border-white/30 text-white rounded-lg transition-all font-medium overflow-hidden"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:scale-105">
              WAITLIST
            </span>
            
            {/* Orange fill animation */}
            <motion.div
              className="absolute inset-0 bg-favorr-orange"
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-favorr-orange/30 rounded-lg blur-sm -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.3 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Sparkle effect */}
            <motion.div
              className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full opacity-0"
              whileHover={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
