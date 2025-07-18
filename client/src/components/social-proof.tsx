import { motion } from "framer-motion";

export default function SocialProof() {
  const companies = [
    { name: 'McKinsey', width: 'w-24' },
    { name: 'EY', width: 'w-12' },
    { name: 'ABN AMRO', width: 'w-28' },
    { name: 'De Brauw', width: 'w-24' },
    { name: 'Unilever', width: 'w-24' },
    { name: 'Adyen', width: 'w-20' },
    { name: 'Deloitte', width: 'w-24' }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-favorr-orange rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-semibold text-favorr-orange uppercase tracking-wider mb-3">
            IN ONS NETWERK <span className="text-white">(🤞)</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white/90 leading-tight">
            Experts van de absolute topbedrijven per sector
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`${company.width} h-8 bg-white/60 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-white/80`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-black font-bold text-sm tracking-tight">
                  {company.name}
                </span>
              </motion.div>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-favorr-orange/20 blur-sm -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
