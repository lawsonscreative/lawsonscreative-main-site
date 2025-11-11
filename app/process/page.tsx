import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Process | Lawsons Creative',
  description: 'From idea to live website in 1-2 weeks. See our streamlined website design and development process.',
};

export default function ProcessPage() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      duration: 'Day 1-2',
      description:
        'We start by understanding your business, goals, and customers. What makes you different? Who are you trying to reach? What actions do you want visitors to take?',
      deliverable: 'Strategic brief and sitemap',
      whatWeNeed: [
        'Information about your business and services',
        'Target audience and competitors',
        'Business goals and success metrics',
        'Brand assets (logo, colors if available)',
        'Examples of websites you like/dislike',
      ],
      whatYouGet: [
        'Clear understanding of project scope',
        'Sitemap showing all pages and structure',
        'Strategic recommendations',
        'Timeline and next steps',
      ],
    },
    {
      number: '02',
      title: 'Design',
      duration: 'Day 3-5',
      description:
        "We design a modern, mobile-first website that reflects your brand and speaks to your customers. You'll see mockups and provide feedback before we build anything.",
      deliverable: 'Visual designs for approval',
      whatWeNeed: [
        'Approval of strategic brief',
        'Content (text, images) or collaboration on content',
        'Feedback on initial design concepts',
        'Any specific design preferences or requirements',
      ],
      whatYouGet: [
        'Full-page mockups (mobile and desktop)',
        'Typography and color palette defined',
        'Layout and navigation structure',
        'Opportunity to request revisions',
      ],
    },
    {
      number: '03',
      title: 'Build',
      duration: 'Day 6-10',
      description:
        'We build your site using modern, fast technology. Every page is optimized for mobile, tested for speed, and built to convert visitors into customers.',
      deliverable: 'Fully-functional website on staging URL',
      whatWeNeed: [
        'Approval of final designs',
        'All remaining content and images',
        'Login credentials for any integrations',
        'Feedback during build process',
      ],
      whatYouGet: [
        'Fully functional website',
        'Staging URL to review and test',
        'Mobile-responsive across all devices',
        'Fast loading speeds',
        'SEO optimization',
        'Forms and features working',
      ],
    },
    {
      number: '04',
      title: 'Launch',
      duration: 'Day 11-14',
      description:
        "After your final approval, we launch your site, set up analytics, and provide training on managing content. You're live and ready to grow.",
      deliverable: 'Live website + training session',
      whatWeNeed: [
        'Final approval of staging site',
        'Domain name access (or we can purchase)',
        'Any final content changes',
        'Confirmation of launch date',
      ],
      whatYouGet: [
        'Live website on your domain',
        'Analytics configured and tracking',
        'Training on content management',
        'Documentation for future reference',
        'Post-launch support (depends on package)',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            From Idea to Live Website in 1-2 Weeks
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Here's exactly how we'll work together, what to expect at each stage, and how we deliver quality websites fast.
          </p>
        </div>
      </section>

      {/* Detailed Steps */}
      {steps.map((step, index) => (
        <section
          key={step.number}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-lightgrey'}`}
        >
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Step Info */}
              <div>
                <div className="bg-lime text-navy w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-3xl mb-4">
                  {step.number}
                </div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-3">
                  {step.title}
                </h2>
                <div className="text-lime font-semibold text-lg mb-6">{step.duration}</div>
                <p className="text-slate text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="bg-navy/5 rounded-lg p-4">
                  <div className="font-semibold text-navy mb-1">Deliverable:</div>
                  <div className="text-slate">{step.deliverable}</div>
                </div>
              </div>

              {/* Requirements & Deliverables */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-heading font-bold text-xl text-navy mb-4">
                    What We Need From You
                  </h3>
                  <ul className="space-y-2">
                    {step.whatWeNeed.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-lime mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                        <span className="text-slate text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-heading font-bold text-xl text-navy mb-4">
                    What You'll Get
                  </h3>
                  <ul className="space-y-2">
                    {step.whatYouGet.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-slate text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Info */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading font-bold text-4xl mb-12 text-center">
            What You Can Expect From Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Clear Communication</h3>
              <p className="text-gray-200">
                Email, Slack, or phone—your choice. We keep you updated at every stage and respond to questions quickly.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Regular Updates</h3>
              <p className="text-gray-200">
                You'll see progress throughout the project. No disappearing for weeks and surprising you with something you didn't expect.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Proactive Problem-Solving</h3>
              <p className="text-gray-200">
                If we spot an issue or opportunity, we'll tell you. We're here to make your site work, not just tick boxes.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">On-Time Delivery</h3>
              <p className="text-gray-200">
                We commit to realistic timelines and hit them. If something changes, we'll communicate immediately.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-200 italic mb-4">
              Timeline may vary based on package and complexity. We'll provide a detailed schedule during discovery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-lightgrey">
        <div className="container-custom text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate mb-8 max-w-3xl mx-auto">
            Book your free consultation and let's discuss your project. We'll walk you through the process and answer any questions.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
