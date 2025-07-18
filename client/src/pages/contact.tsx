import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Bericht verzonden!",
          description: "We nemen zo snel mogelijk contact met je op.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het nog eens of mail direct naar info@favorr.nl",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-6">
        <Link href="/" className="text-favorr-orange hover:text-white transition-colors">
          ← Terug naar Favorr
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black mb-4">Contact</h1>
            <p className="text-gray-300 text-lg">
              Vragen, feeling generous, of op zoek naar een favor? We horen graag van je.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                    Naam *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-300 text-black py-3 text-lg"
                    placeholder="Je naam"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-300 text-black py-3 text-lg"
                    placeholder="je@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">
                  Onderwerp *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-gray-300 text-black py-3 text-lg"
                  placeholder="Waar gaat je bericht over?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                  Bericht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="bg-gray-50 border-gray-300 text-black resize-none text-lg p-4"
                  placeholder="Waar kunnen we je mee helpen?"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-favorr-orange hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-300 text-center">
              <p className="text-gray-600 text-sm mb-2">
                Of mail direct naar:
              </p>
              <a 
                href="mailto:info@favorr.nl" 
                className="text-true-blue hover:text-blue-700 transition-colors font-medium"
              >
                info@favorr.nl
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}