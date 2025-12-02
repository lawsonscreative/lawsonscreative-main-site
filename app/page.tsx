import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SocialProof from '@/components/SocialProof';
import { localBusinessSchema } from '@/lib/schema';

// Lazy load below-the-fold components to reduce initial JS bundle
// ssr: false reduces initial HTML size for animation-heavy components
const ServicesSummary = dynamic(() => import('@/components/ServicesSummary'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />,
  ssr: false
});
const PortfolioShowcase = dynamic(() => import('@/components/PortfolioShowcase'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />,
  ssr: false
});
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />,
  ssr: false
});
const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />,
  ssr: false
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />,
  ssr: false
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />,
  ssr: false
});
const Sectors = dynamic(() => import('@/components/Sectors'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />,
  ssr: false
});
const Areas = dynamic(() => import('@/components/Areas'), {
  loading: () => <div className="section-padding" style={{ minHeight: '200px' }} />,
  ssr: false
});
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="section-padding" style={{ minHeight: '200px' }} />,
  ssr: false
});

export default function Home() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero with new positioning: modernise old/DIY sites for small UK service businesses */}
      <Hero />

      {/* "Is this you?" problem section - speak to pain points */}
      <ProblemSection />

      {/* Social proof - trust badges */}
      <SocialProof />

      {/* What we do - three clear service types */}
      <ServicesSummary />

      {/* Before & After / Portfolio highlight */}
      <PortfolioShowcase />

      {/* Why local small businesses work with us */}
      <WhyChooseUs />

      {/* Our process overview */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Who we work with */}
      <Sectors />

      {/* Areas we serve */}
      <Areas />

      {/* Final CTA band */}
      <FinalCTA />
    </>
  );
}
