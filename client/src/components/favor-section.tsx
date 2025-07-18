import { motion } from "framer-motion";
import { useState } from "react";

export default function FavorSection() {
  const [hoveredFavor, setHoveredFavor] = useState<number | null>(null);

  const favors = [
    {
      category: "CONSULTANCY",
      question: "Mijn idee lijkt sterk. Is het ook een business?",
      outcome: "Loop weg met een concreet plan van aanpak",
      context: "McKinsey consultant"
    },
    {
      category: "LAW",
      question: "Welke rechtsvorm voorkomt gedoe later?",
      outcome: "Kristalheldere volgende stappen zonder juridisch risico",
      context: "De Brauw advocaat"
    },
    {
      category: "BANKING",
      question: "Hoe krijg ik die hypotheek rond?",
      outcome: "Weet precies wat je moet doen om je huis of pand te krijgen",
      context: "ABN AMRO bankier"
    },
    {
      category: "BRANDING",
      question: "Hoe zorg ik dat mijn merk niet klinkt als iedereen?",
      outcome: "Een onderscheidende merkstrategie die écht werkt",
      context: "Brandstrateeg bij Unilever"
    },

    {
      category: "TAXES",
      question: "Kan ik die aftrekpost echt gebruiken?",
      outcome: "Geen zorgen meer over de belastingaangifte",
      context: "EY fiscalist"
    },

  ];

  return (
    <section id="wat-is-favor" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black letter-spacing-tight leading-[0.9] mb-8">
              <span className="block">HET IS GEEN DIENST.</span>
              HET IS EEN <span className="text-favorr-orange">FAVOR.</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Jouw volgende stap kristalhelder maken.<br />
              Op momenten die ertoe doen.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {favors.map((favor, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 border border-white/10 rounded-xl hover:border-favorr-orange/50 transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredFavor(index)}
                  onMouseLeave={() => setHoveredFavor(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-xs font-bold text-true-blue tracking-wider mb-2">
                    {favor.category}
                  </div>
                  <div className="text-lg font-medium mb-3">
                    "{favor.question}"
                  </div>
                  <div className="text-sm text-favorr-readable mb-3 flex items-center">
                    <span className="text-favorr-orange mr-2">→</span>
                    {favor.context}
                  </div>
                  <motion.div
                    className="text-sm text-white/60 font-medium"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredFavor === index ? 1 : 0,
                      height: hoveredFavor === index ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {favor.outcome}
                  </motion.div>
                  
                  {/* Animated dot */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-2 h-2 bg-favorr-orange rounded-full"
                    initial={{ scale: 0, x: -12 }}
                    animate={{ 
                      scale: hoveredFavor === index ? 1 : 0,
                      x: hoveredFavor === index ? -12 : -8
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
