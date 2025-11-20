import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';

// Lazy load below-the-fold components to reduce initial JS bundle
const PortfolioShowcase = dynamic(() => import('@/components/PortfolioShowcase'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />
});
const PackagesSummary = dynamic(() => import('@/components/PackagesSummary'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />
});
const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />
});
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />
});
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="section-padding" style={{ minHeight: '200px' }} />
});

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
