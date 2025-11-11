import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Lawsons Creative
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Modern, effective websites for small service businesses. Built fast, without the agency price tag.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lime">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lime">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Website Design</li>
              <li className="text-gray-300">Website Development</li>
              <li className="text-gray-300">Website Maintenance</li>
              <li className="text-gray-300">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lime">Get in touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@lawsonscreative.co.uk"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  hello@lawsonscreative.co.uk
                </a>
              </li>
              <li className="text-gray-300">London, UK</li>
              <li className="text-gray-300">Serving businesses UK-wide</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lawsons Enterprises Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
