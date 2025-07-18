import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentExample, setCurrentExample] = useState(0);
  
  const examples = [
    { static: "Niet iedereen heeft een", dynamic: "bankier", suffix: "in hun netwerk." },
    { static: "Niet iedereen heeft een", dynamic: "jurist", suffix: "in hun netwerk." },
    { static: "Niet iedereen heeft een", dynamic: "accountant", suffix: "in hun netwerk." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % examples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      const offsetTop = waitlistSection.offsetTop - 100; // 100px offset from top
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      // Focus on the email input after scroll completes
      setTimeout(() => {
        const emailInput = document.querySelector('#waitlist form input[type="email"]') as HTMLInputElement;
        if (emailInput) {
          emailInput.focus();
          emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 800);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-peach-yellow rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-1 h-1 bg-true-blue rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Mobile-optimized rotating text */}
        <motion.div
          className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-wide mb-6 sm:mb-8 font-bold min-h-[3rem] sm:min-h-[2.5rem] flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white/80 text-center sm:inline">
            {examples[currentExample].static}
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentExample}
              className="text-favorr-orange mx-0 sm:mx-2 text-center font-black"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {examples[currentExample].dynamic}
            </motion.span>
          </AnimatePresence>
          <span className="text-white/80 text-center sm:inline">
            {examples[currentExample].suffix}
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WAT ALS JE ZE TÓCH<br />
          <span className="text-favorr-orange">EVEN KON BELLEN?</span>
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Gratis hulp voor 20 minuten. Van experts, voor jonge ondernemers.
        </motion.p>
        
        <motion.p
          className="text-base sm:text-lg md:text-xl font-normal mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-white/70 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Geen verplichtingen. Gewoon even iemand die weet wat jij (nog) niet weet.
        </motion.p>
        
        <motion.button
          onClick={scrollToWaitlist}
          className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg border-2 border-white text-white rounded-lg font-semibold overflow-hidden mx-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ 
            scale: 1.05, 
            y: -6,
            boxShadow: "0 25px 50px rgba(255, 107, 53, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="relative z-10 transition-colors duration-300 group-hover:text-white"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 8px rgba(255,255,255,0.3)"
            }}
          >
            BOVENAAN OP DE WACHTLIJST?
          </motion.span>
          
          {/* Liquid morphing background */}
          <motion.div
            className="absolute inset-0 bg-favorr-orange rounded-lg"
            initial={{ 
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" 
            }}
            whileHover={{ 
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" 
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          
          {/* Ripple waves */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            whileHover="wave"
          >
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-lg border-2 border-favorr-orange/30"
                variants={{
                  wave: {
                    scale: [1, 1.4, 1.8],
                    opacity: [0.8, 0.3, 0]
                  }
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
          

          

        </motion.button>
      </div>
    </section>
  );
}
