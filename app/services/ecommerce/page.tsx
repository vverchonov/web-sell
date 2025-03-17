import ServiceContactUs from '@/app/components/ServiceContactUs';
import Link from 'next/link';

export default function Ecommerce() {
  return (
    <main className="pt-16">
      <div className="bg-white text-black py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Link href="/#services" className="hover:text-red-600 transition-colors">Services</Link>
            <span className="text-red-600">/</span>
            <span>E-commerce Solutions</span>
          </h1>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">What We Offer</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Custom E-commerce Development</h3>
                    <p className="text-black">Tailored online stores built with modern e-commerce platforms, optimized for your specific business needs and growth goals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Secure Payment Integration</h3>
                    <p className="text-black">Integration with trusted payment gateways and implementation of robust security measures to protect your customers&apos; data.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Inventory Management System</h3>
                    <p className="text-black">Efficient inventory tracking and management tools to streamline your operations and prevent overselling.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Mobile-First Shopping Experience</h3>
                    <p className="text-black">Responsive design ensuring seamless shopping experience across all devices, especially mobile.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <a 
                  href="#contact" 
                  className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold border-2 border-red-600 hover:bg-red-700 hover:border-red-700 transition-all duration-300"
                >
                  Get Estimate
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our E-commerce Process</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">1. Store Planning & Strategy</h3>
                  <p className="text-black group-hover:text-white transition-colors">Detailed analysis of your products, target market, and competition to create a strategic plan for your online store.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">2. Custom Store Development</h3>
                  <p className="text-black group-hover:text-white transition-colors">Building your store with optimized product layouts, seamless checkout process, and powerful backend management tools.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">3. Payment & Shipping Setup</h3>
                  <p className="text-black group-hover:text-white transition-colors">Integration of secure payment gateways and shipping solutions to provide a smooth purchasing experience.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">4. Launch & Growth Support</h3>
                  <p className="text-black group-hover:text-white transition-colors">Continuous support for your growing online store, including updates, optimization, and scalability solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceContactUs />
    </main>
  );
} 