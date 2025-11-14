import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import PackagesSummary from '@/components/PackagesSummary';
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
      <PackagesSummary />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
