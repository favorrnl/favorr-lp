import { motion } from "framer-motion";
import { Link } from "wouter";

export default function TermsPage() {
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
          <h1 className="text-4xl font-black mb-8">Algemene Voorwaarden</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Over Favorr</h2>
              <p>
                Favorr is een platform dat mensen verbindt met experts van topbedrijven voor 
                korte adviesgesprekken van 20 minuten. Deze voorwaarden gelden voor alle 
                diensten van Favorr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Gebruik van de service</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Eerlijk gebruik:</strong> Gebruik Favorr alleen voor legitieme zakelijke vragen</li>
                <li><strong>Respect:</strong> Behandel experts respectvol tijdens gesprekken</li>
                <li><strong>Geen misbruik:</strong> Gebruik de service niet voor spam of ongepaste content</li>
                <li><strong>Privé informatie:</strong> Deel geen vertrouwelijke bedrijfsinformatie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Waitlist en vroege toegang</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>De waitlist geeft geen garantie op vroege toegang</li>
                <li>We bepalen zelf wie wanneer toegang krijgt</li>
                <li>Je kunt je altijd uitschrijven van de waitlist</li>
                <li>We sturen alleen relevante updates, geen spam</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectueel eigendom</h2>
              <p>
                Alle content op Favorr (tekst, design, logo's) is eigendom van Favorr. 
                Je mag deze niet gebruiken zonder toestemming.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Aansprakelijkheid</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Advies:</strong> Experts geven persoonlijke meningen, geen juridisch/financieel advies</li>
                <li><strong>Beslissingen:</strong> Je bent zelf verantwoordelijk voor zakelijke beslissingen</li>
                <li><strong>Schade:</strong> Favorr is niet aansprakelijk voor indirecte schade</li>
                <li><strong>Service:</strong> We garanderen geen 100% uptime of beschikbaarheid</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Betalingen (toekomstig)</h2>
              <p>
                Wanneer Favorr betaalde diensten introduceert:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Prijzen worden duidelijk gecommuniceerd</li>
                <li>Betalingen via veilige providers</li>
                <li>Refundbeleid wordt apart gecommuniceerd</li>
                <li>Automatische verlengingen worden vooraf gemeld</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Wijzigingen</h2>
              <p>
                We kunnen deze voorwaarden wijzigen. Belangrijke wijzigingen communiceren 
                we 30 dagen vooraf via email. Door het blijven gebruiken van Favorr 
                ga je akkoord met nieuwe voorwaarden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Nederlands recht</h2>
              <p>
                Op deze voorwaarden is Nederlands recht van toepassing. Geschillen 
                worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact</h2>
              <p>
                Vragen over deze voorwaarden? Mail naar{" "}
                <a href="mailto:info@favorr.nl" className="text-favorr-orange hover:text-white transition-colors">
                  info@favorr.nl
                </a>
              </p>
            </section>

            <section className="bg-gray-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-favorr-orange mb-4">Kort samengevat</h2>
              <p className="text-white">
                Gebruik Favorr respectvol voor zakelijke vragen, experts geven persoonlijke meningen, 
                jij bent verantwoordelijk voor je beslissingen, en we houden ons aan Nederlandse wet.
              </p>
            </section>

            <div className="text-sm text-gray-500 mt-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}