import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lawsons Creative',
  description: 'Privacy Policy for Lawsons Creative. Learn how we collect, use, and protect your personal data in compliance with UK GDPR.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue-900 text-white">
        <div className="container-custom text-center">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200">
            Last updated: 11 November 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl prose prose-lg">
          <div className="text-slate space-y-8">
            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">Introduction</h2>
              <p>
                This Privacy Policy explains how Lawsons Enterprises Ltd (Company No: 16433965), trading as Lawsons Creative ("we", "us", or "our"), collects, uses, stores, and protects your personal data.
              </p>
              <p>
                We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy applies to all personal data we collect through our website, contact forms, booking systems, and during the provision of our services.
              </p>
              <p>
                By using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">1. Who We Are</h2>
              <p>
                <strong>Data Controller:</strong> Lawsons Enterprises Ltd, trading as Lawsons Creative
              </p>
              <p>
                <strong>Company Number:</strong> 16433965
              </p>
              <p>
                <strong>Registered in:</strong> England and Wales
              </p>
              <p>
                <strong>Contact Email:</strong> <a href="mailto:hello@lawsonscreative.co.uk" className="text-lime hover:underline">hello@lawsonscreative.co.uk</a>
              </p>
              <p>
                <strong>Location:</strong> London, United Kingdom
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">2. What Personal Data We Collect</h2>
              <p>
                We collect and process the following types of personal data:
              </p>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Information you provide directly:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Contact Form Submissions:</strong> Name, email address, phone number (optional), and any message or enquiry details you provide</li>
                <li><strong>Calendly Bookings:</strong> Name, email address, phone number (if provided), and appointment details when you book a consultation</li>
                <li><strong>Project Communications:</strong> Any information you share with us via email, phone, or other communication channels during project discussions or service delivery</li>
                <li><strong>Payment Information:</strong> Billing name, address, and payment details (processed securely through third-party payment providers—we do not store full card details)</li>
              </ul>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Information collected automatically:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, time spent on pages, and referring website</li>
                <li><strong>Cookies:</strong> We use essential cookies to ensure our website functions properly. See our Cookie Policy section below for more details.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">3. Why We Collect Your Data (Legal Basis)</h2>
              <p>
                We collect and use your personal data for the following purposes, based on these legal grounds:
              </p>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Legitimate Interests:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Responding to enquiries:</strong> To reply to contact form submissions and answer questions about our services</li>
                <li><strong>Scheduling consultations:</strong> To arrange and manage appointments booked through Calendly</li>
                <li><strong>Marketing and business development:</strong> To understand how visitors use our website and improve our services</li>
              </ul>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Contract Performance:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Service delivery:</strong> To provide website design, development, and related services as agreed in our contract with you</li>
                <li><strong>Project management:</strong> To communicate about project progress, deliverables, and timelines</li>
                <li><strong>Invoicing and payment:</strong> To process payments and maintain financial records</li>
              </ul>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Legal Obligations:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Record keeping:</strong> To comply with accounting, tax, and legal requirements</li>
                <li><strong>Dispute resolution:</strong> To defend legal claims or exercise our legal rights</li>
              </ul>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Consent (where applicable):</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Marketing communications:</strong> To send promotional emails or newsletters (you can opt out at any time)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">4. How We Store and Protect Your Data</h2>
              <p>
                <strong>Data Security:</strong> We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Secure, encrypted communication channels (HTTPS/SSL)</li>
                <li>Password-protected systems and access controls</li>
                <li>Regular security reviews and updates</li>
                <li>Secure hosting with reputable providers</li>
              </ul>

              <p className="mt-4">
                <strong>Data Storage Locations:</strong> Your personal data is stored in the United Kingdom and European Economic Area (EEA). If we transfer data outside the UK/EEA, we ensure adequate safeguards are in place in accordance with UK GDPR.
              </p>

              <p className="mt-4">
                <strong>Data Backup:</strong> We maintain regular backups of data to prevent loss. Backups are stored securely and protected with the same security measures as live data.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">5. Who We Share Your Data With</h2>
              <p>
                We do not sell, rent, or trade your personal data to third parties. However, we may share your data with the following categories of recipients:
              </p>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Essential Service Providers:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Formspree:</strong> Contact form processing service that receives form submissions (name, email, message)</li>
                <li><strong>Calendly:</strong> Appointment scheduling service that receives booking information (name, email, phone)</li>
                <li><strong>Hosting Providers:</strong> Vercel, Netlify, or similar platforms where our website and data are hosted</li>
                <li><strong>Email Services:</strong> Email service providers used to send and receive communications</li>
                <li><strong>Payment Processors:</strong> Secure payment gateways for processing invoices and payments</li>
              </ul>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Legal and Professional Advisors:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Accountants, auditors, lawyers, or other professional advisors</li>
                <li>Law enforcement or regulatory authorities (if required by law)</li>
              </ul>

              <p className="mt-4">
                All third-party service providers are required to implement appropriate security measures and only process your data as instructed by us, in compliance with UK GDPR.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">6. How Long We Keep Your Data</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Data Retention Periods:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Enquiry and consultation data:</strong> Up to 2 years from last contact (unless you request earlier deletion)</li>
                <li><strong>Client project data:</strong> 6 years from project completion (to comply with UK accounting and tax requirements)</li>
                <li><strong>Financial records:</strong> 6 years (as required by HMRC and UK tax law)</li>
                <li><strong>Marketing communications:</strong> Until you unsubscribe or request deletion</li>
                <li><strong>Website analytics:</strong> Up to 26 months (anonymized after 6 months)</li>
              </ul>

              <p className="mt-4">
                After the retention period expires, we will securely delete or anonymize your personal data. If you have not engaged with us for 2 years, we may delete your enquiry data unless there are legal or business reasons to retain it.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">7. Your Rights Under UK GDPR</h2>
              <p>
                Under UK GDPR and the Data Protection Act 2018, you have the following rights regarding your personal data:
              </p>

              <ul className="list-disc ml-6 space-y-3">
                <li>
                  <strong>Right to Access:</strong> You can request a copy of the personal data we hold about you (known as a "Subject Access Request")
                </li>
                <li>
                  <strong>Right to Rectification:</strong> You can ask us to correct inaccurate or incomplete personal data
                </li>
                <li>
                  <strong>Right to Erasure ("Right to be Forgotten"):</strong> You can request that we delete your personal data, subject to certain legal exceptions (e.g., if we need to retain data for legal or accounting purposes)
                </li>
                <li>
                  <strong>Right to Restrict Processing:</strong> You can ask us to limit how we use your personal data in certain circumstances
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You can request to receive your personal data in a structured, commonly used, machine-readable format, or ask us to transfer it to another organization
                </li>
                <li>
                  <strong>Right to Object:</strong> You can object to processing based on legitimate interests or direct marketing
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> If we process your data based on consent, you can withdraw that consent at any time
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> You can complain to the Information Commissioner&apos;s Office (ICO) if you believe we have mishandled your personal data
                </li>
              </ul>

              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:hello@lawsonscreative.co.uk" className="text-lime hover:underline">hello@lawsonscreative.co.uk</a>. We will respond to your request within one month (extendable by two months for complex requests).
              </p>

              <p className="mt-4">
                <strong>How to make a request:</strong> Please provide your full name, email address, and details of your request. We may ask for proof of identity to ensure we only disclose data to the correct person.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">8. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience and understand how visitors use our site.
              </p>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">What are cookies?</h3>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve functionality.
              </p>

              <h3 className="font-heading font-bold text-xl text-navy mb-2 mt-4">Types of cookies we use:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function properly (e.g., remembering form inputs during your session)
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our website (e.g., Google Analytics or similar tools—anonymized after 6 months)
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Remember your preferences (e.g., language settings, if applicable)
                </li>
              </ul>

              <p className="mt-4">
                <strong>Managing cookies:</strong> You can control and delete cookies through your browser settings. Note that disabling essential cookies may affect website functionality.
              </p>

              <p className="mt-4">
                <strong>Third-party cookies:</strong> Services like Calendly may set their own cookies. Please refer to their privacy policies for details.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">9. Links to Other Websites</h2>
              <p>
                Our website may contain links to third-party websites (e.g., portfolio client sites, social media, or external tools). We are not responsible for the privacy practices or content of these external sites. We recommend reviewing the privacy policies of any third-party websites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">10. Children's Privacy</h2>
              <p>
                Our services are not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at <a href="mailto:hello@lawsonscreative.co.uk" className="text-lime hover:underline">hello@lawsonscreative.co.uk</a>, and we will promptly delete it.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or business operations. Any changes will be posted on this page with an updated "Last updated" date at the top.
              </p>
              <p className="mt-4">
                If we make significant changes that materially affect your rights, we will notify you via email (if we have your email address) or by displaying a prominent notice on our website.
              </p>
              <p className="mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your personal data.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-2xl text-navy mb-3">12. How to Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:
              </p>

              <div className="bg-lightgrey rounded-xl p-6 mt-4">
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:hello@lawsonscreative.co.uk" className="text-lime hover:underline">hello@lawsonscreative.co.uk</a>
                </p>
                <p className="mb-2">
                  <strong>Company Name:</strong> Lawsons Enterprises Ltd, trading as Lawsons Creative
                </p>
                <p className="mb-2">
                  <strong>Company Number:</strong> 16433965
                </p>
                <p>
                  <strong>Location:</strong> London, United Kingdom
                </p>
              </div>

              <p className="mt-4">
                <strong>Information Commissioner's Office (ICO):</strong> If you are not satisfied with our response to your data protection concerns, you have the right to lodge a complaint with the UK's data protection authority:
              </p>
              <ul className="list-disc ml-6 space-y-1 mt-2">
                <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">ico.org.uk</a></li>
                <li>Phone: 0303 123 1113</li>
                <li>Address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
              </ul>
            </div>

            <div className="bg-lightgrey rounded-xl p-6 mt-12">
              <h3 className="font-heading font-bold text-xl text-navy mb-3">Questions about our Privacy Policy?</h3>
              <p className="mb-4">
                We're here to help. If you have any questions about how we handle your personal data or want to exercise your rights, please don't hesitate to contact us.
              </p>
              <a href="mailto:hello@lawsonscreative.co.uk" className="text-lime hover:underline font-semibold">
                hello@lawsonscreative.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
