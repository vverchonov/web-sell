'use client'
import Link from 'next/link';

export default function Footer() {
  const services = [
    { name: 'Custom Website Development', href: '/services/custom-website' },
    { name: 'E-commerce Solutions', href: '/services/ecommerce' },
    { name: 'Website Redesign', href: '/services/redesign' },
  ];

  return (
    <footer className="text-white">
      <div className="max-w-[90rem] bg-black/90 shadow-lg mx-auto rounded-tl-2xl rounded-tr-2xl">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-white">Web Moose</div>
              </Link>
              <p className="text-white/80">
                Creating powerful websites that drive business growth
              </p>
              <div className="space-y-2">
                <a 
                  href="mailto:contact.webmoose@gmail.com" 
                  className="block text-white/80 hover:text-red-500 transition-colors"
                >
                  contact.webmoose@gmail.com
                </a>
                <a 
                  href="tel:+14379813239" 
                  className="block text-white/80 hover:text-red-500 transition-colors"
                >
                  +1 (437) 981-3239
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href}
                      className="text-white/80 hover:text-red-500 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/"
                    className="text-white/80 hover:text-red-500 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('about');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-red-500 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-red-500 transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="text-center">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Web Moose. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 