import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import FavorSection from "@/components/favor-section";
import HowItWorks from "@/components/how-it-works";
import DemoBooking from "@/components/demo-booking";
import WhyCompanies from "@/components/why-companies";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-rich-black text-white">
      <Navigation />
      <Hero />
      <SocialProof />
      <div className="hairline-divider"></div>
      <FavorSection />
      <div className="hairline-divider"></div>
      <HowItWorks />
      <div className="hairline-divider"></div>
      <DemoBooking />
      <div className="hairline-divider"></div>
      <WhyCompanies />
      <FinalCTA />
      <Footer />
    </div>
  );
}
