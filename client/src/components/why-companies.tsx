import { motion } from "framer-motion";
import { useState } from "react";

export default function WhyCompanies() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const benefits = [
    {
      title: 'MAATSCHAPPELIJKE IMPACT',
      subtitle: 'Betekenisvolle hulp in korte tijd',
      description: 'Je team helpt ondernemers bij momenten die ertoe doen. Zichtbare impact voor je organisatie, zonder langdurige commitments.',
      impact: 'Authentieke CSR die opvalt'
    },
    {
      title: 'CSR TARGETS',
      subtitle: 'Voldoen aan targets zonder vinkjes',
      description: 'Structurele indeling van CSR-uren die écht waarde toevoegen aan startende bedrijven. Regels naleven zonder dat het aanvoelt als afvinken.',
      impact: 'Efficient voldoen aan CSR-verplichtingen'
    },
    {
      title: 'SUBTIELE ZICHTBAARHEID',
      subtitle: 'Kwaliteit laten spreken',
      description: 'Jonge, kleine, en startende ondernemers ervaren jullie expertise firsthand. Geen directe verkoop, wel een blijvende indruk van de waarde die jullie hen later kunnen bieden.',
      impact: 'Natuurlijke doorverwijzingen'
    }
  ];

  return (
    <section id="waarom" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-favorr-orange uppercase tracking-wider mb-4">
            WAAROM BEDRIJVEN MEEDOEN
          </p>
          <h2 className="text-6xl md:text-7xl font-black letter-spacing-tight mb-6">
            CSR THAT ACTUALLY
          </h2>
          <h2 className="text-6xl md:text-7xl font-black letter-spacing-tight text-favorr-orange">
            LANDS.
          </h2>
          <p className="text-xl text-white/70 mt-8 max-w-2xl mx-auto">
            Wanneer je expertise écht impact heeft, werkt CSR voor iedereen.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative bg-white text-black p-8 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background gradient that animates on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-favorr-dark/10 to-favorr-dark/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="text-xs font-bold text-favorr-dark tracking-wider mb-3">
                  {benefit.title}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {benefit.subtitle}
                </h3>
                <p className="text-sm leading-relaxed text-black/80 mb-4">
                  {benefit.description}
                </p>
                
                <motion.div
                  className="border-t border-black/10 pt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: activeCard === index ? 1 : 0,
                    y: activeCard === index ? 0 : 10
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xs font-semibold text-true-blue">
                    {benefit.impact}
                  </div>
                </motion.div>
              </div>
              
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-8 h-8 bg-favorr-dark"
                initial={{ scale: 0, borderRadius: '0 0 0 100%' }}
                animate={{ 
                  scale: activeCard === index ? 1 : 0,
                  borderRadius: activeCard === index ? '0 0 0 100%' : '0 0 0 0%'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
