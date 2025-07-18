import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";

export default function DemoBooking() {
  const [step, setStep] = useState(0);
  const [selectedSituation, setSelectedSituation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    situation: '',
    selectedDate: '',
    selectedTime: ''
  });

  const situations = [
    {
      id: 'business',
      title: 'Van idee naar echte business',
      company: 'MCKINSEY',
      category: 'Consultancy',
      favors: 2,
      bullets: [
        'Goed idee, maar dan?',
        'Businessmodel onduidelijk?',
        'Klaar om te pitchen?'
      ],
      points: [
        'Waar zit de échte waarde in jouw idee volgens een consultant?',
        'Wat zou een businessmodel kunnen zijn dat bij jou past?',
        'Wat mis je nog om dit serieus te kunnen pitchen?'
      ]
    },
    {
      id: 'juridisch',
      title: 'Juridische basis op orde',
      company: 'DE BRAUW BLACKSTONE',
      category: 'Legal',
      favors: 3,
      bullets: [
        'Welke rechtsvorm kiezen?',
        'Wat nu goed regelen?',
        'Juridische valkuilen vermijden?'
      ],
      points: [
        'Welke rechtsvorm past het beste bij jouw start-up?',
        'Wat moet je nú goed regelen om later geen spijt te krijgen?',
        'Wat zien zij vaak misgaan bij bedrijven in deze sector?'
      ]
    },
    {
      id: 'huizen',
      title: 'Een eigen huis of pand binnen handbereik?',
      company: 'ABN AMRO',
      category: 'Finance',
      favors: 9,
      bullets: [
        'Budget nog niet genoeg?',
        'Weet niet waar te beginnen?',
        'Onduidelijk wat mogelijk is?'
      ],
      points: [
        'Wat zou er wél kunnen, nu of binnenkort?',
        'Welke stappen maken écht verschil in jouw situatie?',
        'Welke routes zijn er die je misschien nog niet kent?'
      ]
    },
    {
      id: 'branding',
      title: 'Je merk kan sterker',
      company: 'UNILEVER',
      category: 'Branding',
      favors: 4,
      bullets: [
        'Geen onderscheidend verhaal?',
        'Te algemeen en vaag?',
        'Niet memorable genoeg?'
      ],
      points: [
        'Wat maakt jouw merkverhaal wél onderscheidend?',
        'Hoe haak je in op wat mensen écht voelen of nodig hebben?',
        'Wat moet je nú aanscherpen om te groeien zonder ruis?'
      ]
    },

    {
      id: 'strategy',
      title: 'Groei overzichtelijk én winstgevend houden',
      company: 'DELOITTE',
      category: 'Strategy',
      favors: 3,
      bullets: [
        'Groei loopt uit de hand?',
        'Winstgevendheid onder druk?',
        'Organisatie wordt chaotisch?'
      ],
      points: [
        'Waar loopt het vaak spaak bij bedrijven zoals de jouwe?',
        'Wat moet je strak organiseren vóór je verder schaalt?',
        'Hoe ziet een groeistrategie eruit die bij jou past?'
      ]
    },
    {
      id: 'ai',
      title: 'AI slim inzetten',
      company: 'ACCENTURE',
      category: 'Technology',
      favors: 5,
      bullets: [
        'Waar te beginnen met AI?',
        'Welke processen automatiseren?',
        'Valkuilen vermijden?'
      ],
      points: [
        'Welke processen kun je nu al automatiseren?',
        'Hoe gebruik je AI zonder mogelijke downsides?',
        'Wat zou jij morgen kunnen testen in jouw bedrijf?'
      ]
    },
    {
      id: 'funding',
      title: 'Geld ophalen voor start-up, waar beginnen?',
      company: 'HENQ',
      category: 'Investment',
      favors: 2,
      bullets: [
        'Geen idee waar te beginnen?',
        'Pitch nog niet investor-ready?',
        'Onbekend met investeerders?'
      ],
      points: [
        'Wat moet écht kloppen vóór je überhaupt kunt pitchen?',
        'Hoe denken investeerders over jouw type business?',
        'Waar haken ze meestal op af bij first-time founders?'
      ]
    },
    {
      id: 'product',
      title: 'Je app/tool werkt, maar gebruikers snappen het niet',
      company: 'BYNDER',
      category: 'Product',
      favors: 6,
      bullets: [
        'Gebruikers haken af onverwacht?',
        'UX voelt niet intuïtief?',
        'Onduidelijk waar het hapert?'
      ],
      points: [
        'Waar haken gebruikers vaak af zonder dat je het merkt?',
        'Wat zou jij kunnen verbeteren met 1 kleine tweak?',
        'Welke designkeuzes helpen jouw specifieke doelgroep?'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing budget in, maar groei blijft uit',
      company: 'TBWA',
      category: 'Marketing',
      favors: 7,
      bullets: [
        'Budget weggegooid gevoel?',
        'Geen echte merkgroei?',
        'Algoritmes wel, mensen niet?'
      ],
      points: [
        'Wat werkt op dit moment écht in jouw markt?',
        'Welke boodschap raakt mensen, niet alleen algoritmes?',
        'Even iemand die meekijkt in je ad account?'
      ]
    },
    {
      id: 'sales',
      title: 'Verkoop groeit, maar niet snel genoeg',
      company: 'SALESFORCE',
      category: 'Sales',
      favors: 8,
      bullets: [
        'Te veel pushen, te weinig verkopen?',
        'Propositie niet overtuigend?',
        'Premium pricing uitleggen?'
      ],
      points: [
        'Hoe verkoop je zonder te pushen, maar wel premium?',
        'Wat maakt een B2B pitch wél overtuigend?',
        'Wat zou je nú moeten aanpassen aan je propositie?'
      ]
    },
    {
      id: 'hiring',
      title: 'Eerste medewerkers aannemen',
      company: 'PERSONIO',
      category: 'HR',
      favors: 4,
      bullets: [
        'Wie écht eerst aannemen?',
        'Cultuur fit testen?',
        'Valkuilen bij eerste hires?'
      ],
      points: [
        'Hoe bepaal je wie je écht nodig hebt als eerste hire?',
        'Wat gaat er vaak mis bij jonge teams met personeel?',
        'Hoe test je of iemand bij je cultuur past?'
      ]
    },
    {
      id: 'belasting',
      title: 'Belasting optimaal regelen',
      company: 'ERNST & YOUNG',
      category: 'Taxes',
      favors: 1,
      bullets: [
        'Welke voordelen mis je als starter?',
        'Veelgemaakte fouten voorkomen?',
        'Maximaal besparen als ondernemer?'
      ],
      points: [
        'Welke aftrekposten mag je in jouw situatie gebruiken?',
        'Wat zijn veelgemaakte fouten bij soortgelijke zelfstandigen?',
        'Hoe zorg je dat je geen geld laat liggen én geen risico loopt?'
      ]
    },
    {
      id: 'ip-protection',
      title: 'Intellectueel eigendom beschermen',
      company: 'SIMMONS & SIMMONS',
      category: 'Legal',
      favors: 2,
      bullets: [
        'Wat moet je beschermen?',
        'Welke stappen zijn essentieel voor nu?',
        'Kosten vs. baten afwegen?'
      ],
      points: [
        'Welke onderdelen van jouw business zijn écht beschermbaar?',
        'Wat zijn de must-do stappen om je intellectueel eigendom veilig te stellen?',
        'Wanneer zijn de kosten van bescherming het waard en wanneer niet?'
      ]
    },
    {
      id: 'asml-career',
      title: 'Insider advice: een potentiële ASML-carriëre?',
      company: 'ASML',
      category: 'Career',
      favors: 3,
      bullets: [
        'Van twijfel naar helder toekomstbeeld',
        'Is dit écht wat bij jou past?',
        'Hoe kom je er überhaupt binnen?'
      ],
      points: [
        'Wat moet je echt leuk vinden aan dit werk en wat juist niet?',
        'Wat heb je nodig om hier binnen te komen?',
        'Wat zijn slimme stappen om jezelf nu al richting dit werk te bewegen?'
      ]
    }
  ];

  const availableDates = [
    { date: '2025-01-20', display: 'Ma 20 jan' },
    { date: '2025-01-21', display: 'Di 21 jan' },
    { date: '2025-01-22', display: 'Wo 22 jan' },
    { date: '2025-01-23', display: 'Do 23 jan' },
    { date: '2025-01-24', display: 'Vr 24 jan' },
    { date: '2025-01-27', display: 'Ma 27 jan' },
    { date: '2025-01-28', display: 'Di 28 jan' },
    { date: '2025-01-29', display: 'Wo 29 jan' },
  ];

  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const handleSubmit = () => {
    setStep(4);
  };

  // Filter situations based on search term
  const filteredSituations = situations.filter(situation => 
    situation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    situation.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    situation.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    situation.bullets.some(bullet => bullet.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold text-favorr-orange uppercase tracking-wider mb-4">
            PROBEER HET UIT
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            BOOK JE <span className="text-favorr-orange">FAVOR</span>
          </h2>
          <p className="text-xl text-white/70">
            Zie hoe makkelijk het gaat zijn om een expert te spreken
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {step === 0 && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  Kies je situatie
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Waarvoor heb je een expert nodig?
                </p>
                
                {/* Search functionality */}
                <div className="max-w-md mx-auto mb-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Zoek bijvoorbeeld 'belasting', 'marketing', 'juridisch'..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-favorr-orange focus:border-transparent text-black placeholder:text-gray-500"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <span className="text-gray-400">🔍</span>
                    </div>
                  </div>
                  {searchTerm && (
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      {filteredSituations.length} resultaten gevonden
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-8">
                {/* Scroll hint */}
                <div className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500">
                  <span>Scroll voor meer opties</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex gap-1"
                  >
                    <span>→</span>
                  </motion.div>
                </div>
                
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                  {(searchTerm ? filteredSituations : situations).map((situation) => (
                    <motion.div
                      key={situation.id}
                      className="min-w-[320px] p-6 border-2 border-gray-200 rounded-xl hover:border-favorr-orange hover:bg-orange-50 transition-all group cursor-pointer snap-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedSituation(situation.id);
                        setStep(1);
                      }}
                    >
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <button className="bg-white border border-gray-300 text-black px-3 py-1 rounded-lg text-xs font-medium">
                            {situation.category}
                          </button>
                        </div>
                        <p className="text-gray-700 font-medium mb-2 text-sm leading-tight">{situation.title}</p>
                        <span className="text-xs font-bold text-favorr-orange uppercase tracking-wider">
                          POWERED BY {situation.company}
                        </span>
                      </div>
                      
                      <div className="space-y-1 mb-4">
                        {situation.bullets.map((bullet, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span className="text-gray-600 text-xs">{bullet}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-true-blue font-medium">
                          💬 Nog {situation.favors} favor{situation.favors !== 1 ? 's' : ''} beschikbaar
                        </span>
                        <span className="text-favorr-orange group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-favorr-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">Je situatie</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {situations.find(s => s.id === selectedSituation)?.title || situations[0].title}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {(situations.find(s => s.id === selectedSituation)?.points || situations[0].points).map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <span className="text-blue-500 mt-1">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-favorr-orange uppercase tracking-wider">
                    POWERED BY {situations.find(s => s.id === selectedSituation)?.company || situations[0].company}
                  </span>
                  <span className="text-xs text-gray-500">
                    💬 Nog {situations.find(s => s.id === selectedSituation)?.favors || situations[0].favors} favor{(situations.find(s => s.id === selectedSituation)?.favors || situations[0].favors) !== 1 ? 's' : ''} beschikbaar
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setStep(0)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Andere situatie
                  </motion.button>
                  <motion.button
                    onClick={() => setStep(2)}
                    className="flex-2 bg-favorr-orange text-white py-3 px-6 rounded-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ➝ PLAN MIJN GESPREK
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  * Dit is een demo - geen echte booking
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-favorr-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">Wanneer past het jou?</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Kies een datum en tijd die jou uitkomt
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-6">
                {availableDates.map((date) => (
                  <motion.button
                    key={date.date}
                    onClick={() => setFormData({...formData, selectedDate: date.date})}
                    className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.selectedDate === date.date 
                        ? 'border-favorr-orange bg-favorr-orange text-white' 
                        : 'border-gray-200 hover:border-favorr-orange text-black'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {date.display}
                  </motion.button>
                ))}
              </div>

              {formData.selectedDate && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3 text-black">Beschikbare tijden:</p>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map((time) => (
                      <motion.button
                        key={time}
                        onClick={() => setFormData({...formData, selectedTime: time})}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          formData.selectedTime === time 
                            ? 'border-favorr-orange bg-favorr-orange text-white' 
                            : 'border-gray-200 hover:border-favorr-orange text-black'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {time}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <motion.button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Terug
                </motion.button>
                <motion.button
                  onClick={() => setStep(3)}
                  disabled={!formData.selectedDate || !formData.selectedTime}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    formData.selectedDate && formData.selectedTime
                      ? 'bg-favorr-orange text-white hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={formData.selectedDate && formData.selectedTime ? { scale: 1.02 } : {}}
                  whileTap={formData.selectedDate && formData.selectedTime ? { scale: 0.98 } : {}}
                >
                  Volgende
                </motion.button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-favorr-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-black">Je gegevens</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Vertel ons over je situatie zodat de expert zich kan voorbereiden
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Naam *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-favorr-orange focus:outline-none text-black"
                    placeholder="Je volledige naam"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-favorr-orange focus:outline-none text-black"
                    placeholder="je.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Jouw situatie (max 500 karakters) *</label>
                  <textarea
                    value={formData.situation}
                    onChange={(e) => setFormData({...formData, situation: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-favorr-orange focus:outline-none text-black"
                    rows={4}
                    placeholder="Beschrijf kort je situatie en wat je wilt weten over huizenfinancering..."
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.situation.length}/500 karakters</p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Terug
                </motion.button>
                <motion.button
                  onClick={handleSubmit}
                  disabled={!formData.name || !formData.email || !formData.situation}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    formData.name && formData.email && formData.situation
                      ? 'bg-favorr-orange text-white hover:scale-105'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  whileHover={formData.name && formData.email && formData.situation ? { scale: 1.02 } : {}}
                  whileTap={formData.name && formData.email && formData.situation ? { scale: 0.98 } : {}}
                >
                  Bevestig gesprek
                </motion.button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-16 h-16 bg-favorr-orange rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-2xl text-white">✓</span>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4 text-black">Demo voltooid!</h3>
              <p className="text-gray-600 mb-6">
                Je gesprek zou geboekt zijn voor {availableDates.find(d => d.date === formData.selectedDate)?.display} om {formData.selectedTime}.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  📧 <strong>Dit is een demo.</strong> In het echte platform ontvang je binnen 5 minuten een bevestiging in je mailbox.
                </p>
              </div>
              
              {/* Favorr logo */}
              <div className="mb-6">
                <Logo size="medium" theme="light" />
              </div>
              
              <motion.button
                onClick={() => {
                  setStep(0);
                  setSelectedSituation('');
                  setFormData({ name: '', email: '', situation: '', selectedDate: '', selectedTime: '' });
                }}
                className="bg-favorr-orange text-white py-3 px-6 rounded-lg font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Einde voorbeeld
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}