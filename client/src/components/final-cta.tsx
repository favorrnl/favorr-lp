import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "YES! Je staat vooraan.",
          description: "We laten je als eerste weten wanneer we live gaan.",
        });
        setEmail('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het nog eens of contacteer ons direct.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-32 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-favorr-orange rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          className="bg-white text-black p-12 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Animated corner gradient */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-favorr-orange/20 to-transparent rounded-3xl"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black letter-spacing-tight mb-4 leading-[0.9]">
              WIL JIJ
            </h2>
            <h2 className="text-5xl md:text-6xl font-black letter-spacing-tight mb-8 leading-[0.9] text-favorr-dark">
              VOORAAN IN DE RIJ?
            </h2>
            <p className="text-lg text-black/70 mb-12 max-w-2xl mx-auto">
              Eerste toegang zodra we live gaan. Geen spam, alleen de echte launch.
            </p>
            
          </motion.div>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto relative z-10">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-stretch">
                <div className="flex-1 relative">
                  <Input
                    type="email"
                    placeholder="test@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required
                    className={`w-full px-6 py-4 border-2 rounded-xl text-black placeholder:text-black/50 bg-white transition-all ${
                      isFocused 
                        ? 'border-favorr-dark shadow-lg shadow-favorr-dark/20' 
                        : 'border-gray-200 hover:border-favorr-dark/50'
                    }`}
                  />
                  
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-favorr-dark/20 to-favorr-dark/5 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isFocused ? 1 : 0,
                      scale: isFocused ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-8 py-4 bg-true-blue text-white rounded-xl font-bold disabled:opacity-50 overflow-hidden shadow-lg h-full flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 20px 40px rgba(68, 100, 173, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="relative z-10 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 8px rgba(68, 100, 173, 0.4)"
                    }}
                  >
                    {isSubmitting ? 'BEZIG...' : "Let's Go"}
                  </motion.span>
                  
                  {/* Pulsing core */}
                  <motion.div
                    className="absolute inset-0 bg-true-blue rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  
                  {/* Energy rings */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    whileHover="pulse"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-xl border-2 border-true-blue/40"
                        variants={{
                          pulse: {
                            scale: [1, 1.5, 2],
                            opacity: [0.6, 0.2, 0]
                          }
                        }}
                        transition={{ 
                          duration: 1, 
                          delay: i * 0.2,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </motion.div>
                  

                  
                  {/* Sparkle effects */}
                  <motion.div
                    className="absolute top-2 right-3 w-1.5 h-1.5 bg-white rounded-full opacity-0"
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  />
                  
                  <motion.div
                    className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full opacity-0"
                    whileHover={{ 
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                  
                  {/* Enhanced shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  />
                </motion.button>
              </div>
            </motion.div>
            
            <p className="text-sm text-black/50 mt-4 text-center">
              Door je in te schrijven ga je akkoord met ons{" "}
              <a href="/privacy" className="text-favorr-dark hover:underline">
                privacybeleid
              </a>{" "}
              en{" "}
              <a href="/terms" className="text-favorr-dark hover:underline">
                voorwaarden
              </a>
              . Je kunt je altijd uitschrijven.
            </p>
          </form>
        </motion.div>
      </div>
      
      {/* Expert Signup Banner */}
      <motion.div 
        className="max-w-4xl mx-auto px-6 mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Ben je een bedrijf of expert die favors wil aanbieden?
              </h3>
              <p className="text-gray-300 text-sm">
                Wij maken graag 20 minuten voor je vrij
              </p>
            </div>
            <a 
              href="/contact"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer relative z-10 no-underline"
              style={{ 
                pointerEvents: 'auto',
                position: 'relative',
                zIndex: 10,
                textDecoration: 'none'
              }}
            >
              <span>Let's Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
