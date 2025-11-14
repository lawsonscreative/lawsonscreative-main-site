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
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Introduction</h2>
              <p>
                These terms apply to services provided by Lawsons Enterprises Ltd (Company No: 16433965), trading as Lawsons Creative.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of services provided by us ("we", "us", or "Lawsons Creative"). By engaging our services, you ("Client", "you", or "your") agree to be bound by these Terms.
              </p>
              <p>
                Please read these Terms carefully before engaging our services. If you do not agree to these Terms, you should not proceed with our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">1. Services Provided</h2>
              <p>
                Lawsons Creative provides professional website design, development, and related digital services including but not limited to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Custom website design and development</li>
                <li>Responsive mobile-first web design</li>
                <li>Website redesign and modernization</li>
                <li>Search engine optimization (SEO)</li>
                <li>Website maintenance and support</li>
                <li>Content updates and modifications</li>
                <li>Website hosting setup and configuration</li>
              </ul>
              <p>
                All services are subject to these Terms and the specific details outlined in your project proposal, quote, or written agreement. Services are provided as part of three main packages: Starter, Professional, and Premium, as detailed on our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">2. Payment Terms</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Deposit:</strong> A non-refundable deposit of 50% of the total project cost is required before work commences. No work will begin until the deposit has been received and cleared.
                </li>
                <li>
                  <strong>Final Payment:</strong> The remaining 50% is due upon project completion and before the website is launched, files are handed over, or full access is granted. We reserve the right to withhold delivery until payment is received in full.
                </li>
                <li>
                  <strong>Custom Payment Plans:</strong> For larger projects, alternative payment schedules may be arranged in writing. Unless otherwise agreed, the standard 50/50 split applies.
                </li>
                <li>
                  <strong>Payment Methods:</strong> We accept payment via bank transfer (BACS), credit card, or debit card. All payments must be made in British Pounds (GBP).
                </li>
                <li>
                  <strong>Invoice Terms:</strong> Invoices are payable within 7 days of issue unless otherwise stated. Late payments may incur interest at a rate of 8% per annum above the Bank of England base rate, as permitted under the Late Payment of Commercial Debts (Interest) Act 1998.
                </li>
                <li>
                  <strong>Additional Costs:</strong> The project quote covers services as specified. Any additional work, features, or scope changes requested after the agreement will be quoted separately and invoiced accordingly.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">3. What's Included and Not Included</h2>
              <p>
                <strong>Included in Project Cost:</strong>
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Website design and development as per the agreed specification</li>
                <li>Mobile-responsive design across all standard devices</li>
                <li>Basic SEO setup (meta tags, sitemap, basic optimization)</li>
                <li>Contact form integration</li>
                <li>Website deployment to hosting platform</li>
                <li>Basic training on content management (where applicable)</li>
                <li>Specified number of revision rounds (package-dependent)</li>
              </ul>
              <p className="mt-4">
                <strong>Not Included (Available as Add-ons):</strong>
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Domain name registration (typically £10-15/year)</li>
                <li>Website hosting fees (often free or £5-20/month)</li>
                <li>Premium stock photography (if required, £10-50)</li>
                <li>Third-party plugin licenses or premium tools</li>
                <li>Ongoing website maintenance and support</li>
                <li>Content writing or copywriting services</li>
                <li>Advanced SEO or marketing services</li>
                <li>Email hosting or setup</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">4. Revision Policy</h2>
              <p>
                Each package includes a specified number of revision rounds as outlined in your proposal:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Starter package:</strong> 1 round of revisions</li>
                <li><strong>Professional package:</strong> 2 rounds of revisions</li>
                <li><strong>Premium package:</strong> 3 rounds of revisions</li>
              </ul>
              <p className="mt-4">
                A revision round allows for feedback and changes to the design or functionality within the agreed project scope. Revisions must be submitted as a consolidated list. Additional revisions beyond the included rounds may incur extra charges at our standard hourly rate of £40-60 per hour. Major scope changes (new pages, significant functionality additions) will be quoted separately as a change request.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">5. Project Process and Timeline</h2>
              <p>
                We commit to delivering your project within the timeframe specified in your written proposal or agreement. Standard project timelines are:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Starter package:</strong> 1 week</li>
                <li><strong>Professional package:</strong> 1–2 weeks</li>
                <li><strong>Premium package:</strong> 2 weeks</li>
              </ul>
              <p className="mt-4">
                Timelines are calculated from the date of deposit receipt and receipt of all required materials. Timelines may be extended if:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Client feedback or approvals are delayed beyond 3 business days</li>
                <li>Required content, materials, or access credentials are not provided on time</li>
                <li>Scope changes are requested mid-project</li>
                <li>Technical issues arise with third-party services or integrations</li>
                <li>Circumstances beyond our reasonable control occur (force majeure)</li>
              </ul>
              <p className="mt-4">
                We will communicate any timeline changes promptly and work diligently to minimize delays. Projects paused for more than 30 days due to client delays may be subject to re-scoping and additional fees.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">6. Client Responsibilities</h2>
              <p>To ensure timely and successful project completion, clients are responsible for:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Providing all required content (text, images, logos, videos) in a timely manner and in usable formats</li>
                <li>Ensuring all content provided is legally owned or properly licensed for use</li>
                <li>Providing feedback and approvals within 3 business days of requests</li>
                <li>Providing access to necessary accounts, hosting platforms, domain registrars, or third-party services</li>
                <li>Ensuring a single point of contact with decision-making authority</li>
                <li>Testing the website thoroughly before final sign-off</li>
                <li>Maintaining backups of the website after launch (if managing own hosting)</li>
              </ul>
              <p className="mt-4">
                Failure to meet these responsibilities may result in project delays, additional costs, or project termination.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">7. Cancellation and Termination</h2>
              <p>
                <strong>Cancellation by Client:</strong> You may cancel the project at any time by providing written notice. However:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The 50% deposit is non-refundable once work has commenced</li>
                <li>If cancellation occurs after 50% of work is completed, the full project cost becomes due</li>
                <li>Work completed up to cancellation may be provided at our discretion, but source files will only be released upon full payment</li>
              </ul>
              <p className="mt-4">
                <strong>Termination by Lawsons Creative:</strong> We reserve the right to terminate a project with immediate effect if:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Payment terms are not met (including late payment of deposit or final invoice)</li>
                <li>The client breaches these Terms</li>
                <li>The working relationship becomes unworkable or abusive</li>
                <li>The client requests us to perform illegal or unethical work</li>
              </ul>
              <p className="mt-4">
                In the event of termination by us due to non-payment or client breach, no refunds will be provided. In the event of termination due to circumstances within our control, payments received will be refunded minus reasonable compensation for work completed to date.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">8. Intellectual Property Rights</h2>
              <p>
                <strong>Your Content:</strong> You retain all intellectual property rights in content you provide (text, images, logos, branding). By providing content, you grant us a license to use it for the purposes of completing your project.
              </p>
              <p className="mt-4">
                <strong>Website Ownership:</strong> Upon receipt of full and final payment, you own the completed website design and custom code created specifically for your project. This includes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Custom designs and graphics created for your website</li>
                <li>Custom code written specifically for your project</li>
                <li>Content provided by you or created specifically for you</li>
              </ul>
              <p className="mt-4">
                <strong>Our Retained Rights:</strong> We retain intellectual property rights in:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Code frameworks, libraries, and development tools we use</li>
                <li>Reusable code components, functions, or modules</li>
                <li>Pre-existing intellectual property and proprietary methods</li>
                <li>General knowledge and techniques applied during development</li>
              </ul>
              <p className="mt-4">
                <strong>Third-Party Components:</strong> The website may include third-party open-source software, frameworks (such as React, Next.js, Tailwind CSS), fonts, or plugins. These components are subject to their respective licenses, which you must comply with.
              </p>
              <p className="mt-4">
                <strong>Portfolio Use:</strong> We reserve the right to display your completed website in our portfolio, case studies, marketing materials, and on our website unless you specifically request otherwise in writing. We may also use screenshots and describe the project scope for promotional purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">9. Hosting and Domain Names</h2>
              <p>
                Website hosting and domain name registration are not included in the project cost unless explicitly stated in your quote. We can:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Recommend suitable hosting providers (typically Vercel, Netlify, or similar)</li>
                <li>Assist with hosting account setup and configuration</li>
                <li>Deploy your website to your chosen hosting platform</li>
                <li>Provide guidance on domain name registration and DNS configuration</li>
              </ul>
              <p className="mt-4">
                You remain responsible for hosting fees and domain renewal. Ongoing website maintenance, security updates, and technical support are available as add-on services and are not included in the base project cost unless specifically stated in your agreement.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">10. Website Content and Legal Compliance</h2>
              <p>
                <strong>Content Ownership and Licensing:</strong> You are solely responsible for ensuring that all content you provide (text, images, videos, logos, audio) is:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Legally owned by you, or</li>
                <li>Properly licensed for use on your website, or</li>
                <li>Used with appropriate permissions and attributions</li>
              </ul>
              <p className="mt-4">
                <strong>Indemnification:</strong> You agree to indemnify and hold harmless Lawsons Creative from any claims, damages, losses, or legal fees arising from copyright infringement, trademark violations, or other intellectual property issues related to content you provided.
              </p>
              <p className="mt-4">
                <strong>Legal Compliance:</strong> You are responsible for ensuring your website complies with all applicable laws and regulations, including but not limited to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>UK GDPR and Data Protection Act 2018</li>
                <li>Privacy and Electronic Communications Regulations (PECR)</li>
                <li>Consumer protection laws</li>
                <li>Accessibility requirements (where applicable)</li>
                <li>Industry-specific regulations</li>
              </ul>
              <p className="mt-4">
                While we can provide basic privacy policy templates or GDPR-compliant cookie consent tools, you should seek independent legal advice to ensure full compliance with your specific regulatory requirements.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">11. Warranties and Disclaimers</h2>
              <p>
                <strong>Our Warranty:</strong> We warrant that:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>The website will function substantially as specified at the time of launch</li>
                <li>The website will be delivered using professional standards and best practices</li>
                <li>We will fix any bugs or defects in custom code we wrote for 30 days after launch (Premium package only, or as otherwise agreed)</li>
              </ul>
              <p className="mt-4">
                <strong>Limitations:</strong> We do not warrant or guarantee:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Compatibility with future browser updates, operating system changes, or third-party plugin updates unless covered by a maintenance agreement</li>
                <li>Uninterrupted website availability (this depends on your hosting provider)</li>
                <li>That the website will be error-free or completely secure from malicious attacks</li>
                <li>Specific search engine rankings or traffic levels</li>
                <li>Any specific business outcomes, sales, or revenue results</li>
              </ul>
              <p className="mt-4">
                <strong>Third-Party Services:</strong> The website may rely on third-party services (hosting, payment processors, APIs, plugins). We are not responsible for failures, downtime, or changes to these services beyond our control.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Total Liability:</strong> Our total liability under these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, is limited to the total fees paid by you for the specific project giving rise to the claim.</li>
                <li><strong>Excluded Losses:</strong> We shall not be liable for any indirect, consequential, special, or incidental losses or damages, including but not limited to: loss of profits, loss of revenue, loss of business, loss of data, loss of goodwill, or business interruption.</li>
                <li><strong>Time Limit:</strong> Any claim against us must be brought within 6 months of the date you became aware (or should reasonably have become aware) of the issue.</li>
              </ul>
              <p className="mt-4">
                Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under English law.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">13. Confidentiality and Data Protection</h2>
              <p>
                <strong>Confidentiality:</strong> We will keep confidential any proprietary or sensitive business information you share with us during the project. This includes business plans, financial information, customer data, trade secrets, and any information marked as confidential.
              </p>
              <p className="mt-4">
                <strong>Data Protection:</strong> We process personal data in accordance with UK GDPR and the Data Protection Act 2018. We will:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Only process personal data necessary to deliver services</li>
                <li>Keep personal data secure using appropriate technical and organizational measures</li>
                <li>Not share personal data with third parties except as necessary to deliver services (e.g., hosting providers)</li>
                <li>Retain data only as long as necessary for the project and legal obligations</li>
              </ul>
              <p className="mt-4">
                For more information on how we handle personal data, please see our Privacy Policy (if applicable).
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">14. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performing our obligations under these Terms where such failure or delay results from circumstances beyond our reasonable control, including but not limited to: acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, epidemics, pandemics, government regulations, internet or telecommunications failures, or failures of third-party services.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">15. Governing Law and Jurisdiction</h2>
              <p>
                These Terms, and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims), shall be governed by and construed in accordance with the law of England and Wales.
              </p>
              <p className="mt-4">
                Both parties irrevocably agree that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms or their subject matter or formation.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">16. General Terms</h2>
              <p>
                <strong>Entire Agreement:</strong> These Terms, together with any written proposal or quote we provide, constitute the entire agreement between you and Lawsons Creative and supersede all previous agreements, understandings, and representations.
              </p>
              <p className="mt-4">
                <strong>Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations to a successor business entity.
              </p>
              <p className="mt-4">
                <strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, that provision shall be severed and the remaining provisions shall remain in full force and effect.
              </p>
              <p className="mt-4">
                <strong>Waiver:</strong> No waiver of any term shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right under these Terms shall not constitute a waiver of that right.
              </p>
              <p className="mt-4">
                <strong>Third-Party Rights:</strong> These Terms are between you and Lawsons Creative only. No third party shall have any rights to enforce any terms under the Contracts (Rights of Third Parties) Act 1999.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">17. Changes to These Terms</h2>
              <p>
                We reserve the right to update or modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date at the top of the page.
              </p>
              <p className="mt-4">
                Existing projects and agreements are governed by the version of these Terms that was in effect when your project agreement was signed or when you paid your deposit (whichever is earlier). Updated Terms apply to new projects commenced after the update date.
              </p>
            </div>

            <div className="bg-lightgrey rounded-xl p-6 mt-12">
              <h3 className="font-heading font-bold text-xl text-navy mb-3">Questions about our terms?</h3>
              <p className="mb-4">
                If you have any questions about these terms of service, please contact us:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@lawsonscreative.co.uk" className="text-blue-600 hover:underline">
                  hello@lawsonscreative.co.uk
                </a>
              </p>
              <p className="mt-4 text-sm">
                <strong>Company:</strong> Lawsons Enterprises Ltd<br />
                <strong>Location:</strong> Kent, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
