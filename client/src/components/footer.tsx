import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Footer() {
  const navItems = [
    { label: 'Contact', href: '/contact', isRoute: true },
    { label: 'Privacy', href: '/privacy', isRoute: true },
    { label: 'Voorwaarden', href: '/terms', isRoute: true }
  ];

  return (
    <footer className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="hairline-divider mb-8"></div>
        
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm opacity-60 mb-4 md:mb-0">
            © 2025 Favorr – Built for good.
          </div>
          
          <div className="flex space-x-8 text-sm">
            {navItems.map((item) => 
              item.isRoute ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover-orange transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover-orange transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
