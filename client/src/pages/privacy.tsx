import { motion } from "framer-motion";
import { Link } from "wouter";

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-black mb-8">Privacybeleid</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Welke gegevens verzamelen we?</h2>
              <p>
                Bij Favorr verzamelen we minimale gegevens die nodig zijn voor onze service:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Email adres:</strong> Voor waitlist registratie en communicatie</li>
                <li><strong>Geen tracking cookies:</strong> We gebruiken geen tracking of advertentie cookies</li>
                <li><strong>Geen persoonlijke profielen:</strong> We bouwen geen uitgebreide profielen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Waarom verzamelen we deze gegevens?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Om je te informeren wanneer Favorr live gaat</li>
                <li>Om je prioriteit te geven bij vroege toegang</li>
                <li>Om belangrijke updates over de service te delen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Hoe gebruiken we je gegevens?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Geen spam:</strong> We sturen alleen relevante updates over Favorr</li>
                <li><strong>Geen verkoop:</strong> We verkopen je gegevens nooit aan derden</li>
                <li><strong>Geen marketing partners:</strong> We delen niet met adverteerders</li>
                <li><strong>Minimale opslag:</strong> We bewaren alleen wat nodig is</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Je rechten (AVG/GDPR)</h2>
              <p>Je hebt de volgende rechten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Inzage:</strong> Zie welke gegevens we van je hebben</li>
                <li><strong>Correctie:</strong> Verbeter onjuiste gegevens</li>
                <li><strong>Verwijdering:</strong> Verwijder al je gegevens</li>
                <li><strong>Uitschrijven:</strong> Stop alle communicatie direct</li>
              </ul>
              <p className="mt-4">
                <strong>Contact:</strong> Stuur een email naar{" "}
                <a href="mailto:privacy@favorr.nl" className="text-favorr-orange hover:text-white transition-colors">
                  privacy@favorr.nl
                </a>{" "}
                voor al je privacy vragen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Beveiliging</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Je gegevens worden veilig opgeslagen in Europa (GDPR compliant)</li>
                <li>We gebruiken moderne beveiligingsstandaarden</li>
                <li>Toegang is beperkt tot noodzakelijk personeel</li>
                <li>We monitoren toegang en activiteit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Updates</h2>
              <p>
                Dit privacybeleid kan worden bijgewerkt. Belangrijke wijzigingen communiceren we 
                via email. Laatste update: {new Date().toLocaleDateString('nl-NL')}.
              </p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-favorr-orange mb-4">Kort samengevat</h2>
              <p className="text-white">
                We vragen alleen je email, gebruiken het alleen voor Favorr updates, 
                verkopen niets aan derden, en je kunt altijd alles verwijderen. 
                Simpel en eerlijk.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}