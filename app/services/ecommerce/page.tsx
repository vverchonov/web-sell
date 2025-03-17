'use client';

import ServiceContactUs from '@/app/components/ServiceContactUs';
import ServiceLayout from '@/app/components/ServiceLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Ecommerce() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ServiceLayout>
      <div className="max-w-7xl mx-auto">
        <motion.h1 variants={itemVariants} className="text-4xl font-bold flex items-center gap-3">
          <Link href="/#services" className="hover:text-red-600 transition-colors">Services</Link>
          <span className="">/</span>
          <span className="text-red-600">E-commerce Solutions</span>
        </motion.h1>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-black mb-6">What We Offer</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Custom E-commerce Development</h3>
                    <p className="text-black">Tailored online stores built with modern e-commerce platforms, optimized for your specific business needs and scalability requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Secure Payment Integration</h3>
                    <p className="text-black">Integration with trusted payment gateways and implementation of robust security measures to protect customer data and transactions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Inventory Management</h3>
                    <p className="text-black">Advanced inventory tracking systems with real-time updates, automated alerts, and seamless integration with your existing systems.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Mobile-First Shopping Experience</h3>
                    <p className="text-black">Responsive design optimized for mobile devices, ensuring a smooth shopping experience across all platforms.</p>
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
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-black mb-6">Our E-commerce Process</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">1. Business Analysis</h3>
                  <p className="text-black group-hover:text-white transition-colors">Understanding your products, target market, and business operations to create an e-commerce solution that aligns with your goals.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">2. Platform Selection & Design</h3>
                  <p className="text-black group-hover:text-white transition-colors">Choosing the right e-commerce platform and creating a user-friendly design that maximizes conversions and customer satisfaction.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">3. Development & Integration</h3>
                  <p className="text-black group-hover:text-white transition-colors">Building your online store with secure payment processing, inventory management, and other essential e-commerce features.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">4. Testing & Launch</h3>
                  <p className="text-black group-hover:text-white transition-colors">Rigorous testing of all features and functionalities, followed by a strategic launch plan to ensure a smooth transition.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ServiceContactUs />
    </ServiceLayout>
  );
} 