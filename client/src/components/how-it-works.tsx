import { motion } from "framer-motion";
import { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'KIES FAVOR',
      subtitle: 'Selecteer expertise',
      description: 'Scroll door onze experts. Kies de perfecte match voor jouw vraag.',
      detail: 'Elk profiel toont expertise, ervaring en beschikbaarheid'
    },
    {
      number: '02',
      title: '20-MINUTEN VIDEOCALL',
      subtitle: 'Realtime advies',
      description: 'Direct contact met een echte expert. Geen chatbots, geen geautomatiseerde antwoorden.',
      detail: 'Stel vragen, krijg antwoorden, maak een plan'
    },
    {
      number: '03',
      title: 'STAP VERDER',
      subtitle: 'Concrete actie',
      description: 'Loop weg met kristalheldere volgende stappen. Geen verwarring meer.',
      detail: 'Jouw pad naar succes is nu 100% duidelijk'
    }
  ];

  return (
    <section id="hoe-werkt" className="py-32 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-favorr-orange rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full" />
        <div className="absolute top-2/3 left-2/3 w-0.5 h-0.5 bg-favorr-orange rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black letter-spacing-tight mb-6">
            HOW IT
          </h2>
          <h2 className="text-5xl md:text-6xl font-black letter-spacing-tight text-favorr-orange mb-8">
            WORKS
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Van vraag naar kristalheldere volgende stap in 20 minuten.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Connection line to next step */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-favorr-orange/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  viewport={{ once: true }}
                />
              )}

              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center mx-auto relative overflow-hidden cursor-pointer"
                  whileHover={{ borderColor: 'hsl(21, 100%, 48%)' }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg font-bold z-10 relative">
                    {step.number}
                  </span>
                  
                  {/* Hover background fill */}
                  <motion.div
                    className="absolute inset-0 bg-favorr-orange"
                    initial={{ scale: 0 }}
                    animate={{ scale: activeStep === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Pulsing ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-favorr-orange"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: activeStep === index ? 1.3 : 0,
                    opacity: activeStep === index ? 0.5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-lg font-black tracking-wider">
                  {step.title}
                </h3>
                <p className="text-sm text-favorr-orange font-medium uppercase tracking-wider">
                  {step.subtitle}
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Expandable detail */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeStep === index ? 'auto' : 0,
                    opacity: activeStep === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-sm text-favorr-orange font-medium">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
