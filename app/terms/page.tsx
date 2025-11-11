import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Lawsons Creative',
  description: 'Terms of service for Lawsons Creative website design and development services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-200">Last updated: November 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl prose prose-lg">
          <div className="text-slate space-y-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">1. Services Provided</h2>
              <p>
                Lawsons Creative (trading name of Lawsons Enterprises Ltd) provides website design, development, and related digital services to small businesses and organizations. All services are subject to these terms and the specific details outlined in your project proposal or agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">2. Payment Terms</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Deposit:</strong> A 50% deposit is required before work begins on your project.
                </li>
                <li>
                  <strong>Final Payment:</strong> The remaining 50% is due upon completion and before the website is launched or files are handed over.
                </li>
                <li>
                  <strong>Payment Methods:</strong> We accept bank transfer and major credit/debit cards.
                </li>
                <li>
                  <strong>Late Payments:</strong> Late payments may incur additional charges and delay project delivery.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">3. Revision Policy</h2>
              <p>
                Each package includes a specified number of revision rounds as outlined in your proposal:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Starter package: 1 round of revisions</li>
                <li>Professional package: 2 rounds of revisions</li>
                <li>Premium package: 3 rounds of revisions</li>
              </ul>
              <p>
                Additional revisions beyond the included rounds may incur extra charges. Major scope changes will be quoted separately.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">4. Project Timeline</h2>
              <p>
                We commit to delivering your project within the timeframe specified in your proposal. Timelines may be extended if:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Client feedback or approvals are delayed</li>
                <li>Required content or materials are not provided on time</li>
                <li>Scope changes are requested mid-project</li>
                <li>Unforeseen technical issues arise</li>
              </ul>
              <p>
                We will communicate any timeline changes immediately and work to minimize delays.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">5. Client Responsibilities</h2>
              <p>To ensure timely project completion, clients must provide:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>All required content (text, images, logos) in a timely manner</li>
                <li>Feedback and approvals within agreed timeframes</li>
                <li>Access to necessary accounts, hosting, or domains</li>
                <li>Clear communication and decision-making authority</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">6. Cancellation Policy</h2>
              <p>
                <strong>By Client:</strong> If you cancel the project after work has begun, the deposit is non-refundable. If cancellation occurs after 50% project completion, the full project cost is due.
              </p>
              <p>
                <strong>By Lawsons Creative:</strong> We reserve the right to terminate a project if payment terms are not met or if the working relationship becomes unworkable. Any payments made will be refunded minus the cost of work completed.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">7. Intellectual Property</h2>
              <p>
                <strong>Ownership:</strong> Upon receipt of full payment, you own the completed website and its content. However, we retain rights to any code frameworks, plugins, or tools we've developed that may be reused in other projects.
              </p>
              <p>
                <strong>Portfolio Use:</strong> We reserve the right to display your completed website in our portfolio, case studies, and marketing materials unless otherwise agreed in writing.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">8. Hosting and Maintenance</h2>
              <p>
                Website hosting is not included unless specifically stated in your package. We can recommend hosting providers and assist with setup. Ongoing maintenance and support are available as add-on services and are not included in the base project cost unless specified.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">9. Website Content</h2>
              <p>
                You are responsible for ensuring all content provided (text, images, videos) is legally yours to use or properly licensed. Lawsons Creative is not liable for any copyright or licensing issues related to client-provided content.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">10. Warranties and Liability</h2>
              <p>
                <strong>Website Functionality:</strong> We warrant that your website will function as designed at the time of launch. We do not guarantee compatibility with future browser updates, plugins, or third-party services unless covered by a maintenance agreement.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> Our liability is limited to the total amount paid for the project. We are not liable for any indirect, consequential, or incidental damages.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">11. Confidentiality</h2>
              <p>
                We will not disclose any confidential information shared during the project to third parties. This includes business plans, customer data, and proprietary information.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">12. Governing Law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be resolved in the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">13. Changes to Terms</h2>
              <p>
                We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Existing projects are governed by the terms in effect when the project agreement was signed.
              </p>
            </div>

            <div className="bg-lightgrey rounded-xl p-6 mt-12">
              <h3 className="font-heading font-bold text-xl text-navy mb-3">Questions about our terms?</h3>
              <p className="mb-4">
                If you have any questions about these terms of service, please contact us:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@lawsonscreative.co.uk" className="text-lime hover:underline">
                  hello@lawsonscreative.co.uk
                </a>
              </p>
              <p className="mt-4 text-sm">
                <strong>Company:</strong> Lawsons Enterprises Ltd<br />
                <strong>Location:</strong> London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
