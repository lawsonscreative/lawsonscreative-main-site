import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';

// Lazy load below-the-fold components to reduce initial JS bundle
// ssr: false reduces initial HTML size for animation-heavy components
const PortfolioShowcase = dynamic(() => import('@/components/PortfolioShowcase'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />,
  ssr: false
});
const PackagesSummary = dynamic(() => import('@/components/PackagesSummary'), {
  loading: () => <div className="section-padding" style={{ minHeight: '400px' }} />,
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
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />,
  ssr: false
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section-padding" style={{ minHeight: '300px' }} />,
  ssr: false
});
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="section-padding" style={{ minHeight: '200px' }} />,
  ssr: false
});
const MidPageCTA = dynamic(() => import('@/components/MidPageCTA'), {
  loading: () => <div className="section-padding" style={{ minHeight: '200px' }} />,
  ssr: false
});

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <PortfolioShowcase />
      <MidPageCTA />
      <PackagesSummary />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
