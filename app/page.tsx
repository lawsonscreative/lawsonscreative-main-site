import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Packages from '@/components/Packages';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PortfolioShowcase />
      <Packages />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
