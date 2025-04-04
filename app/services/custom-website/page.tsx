'use client';

import ServiceContactUs from '@/app/components/ServiceContactUs';
import ServiceLayout from '@/app/components/ServiceLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CustomWebsite() {
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
          <span className="text-red-600">Custom Website Development</span>
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
                    <h3 className="font-semibold text-red-600">100% Custom Development</h3>
                    <p className="text-black">We build truly unique websites from scratch - no templates, no page builders, just pure custom code tailored to your specific needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">High-Performance Technology</h3>
                    <p className="text-black">Using cutting-edge frameworks and best practices to ensure your website loads lightning-fast and performs flawlessly.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Complete Domain & Hosting Management</h3>
                    <p className="text-black">We handle all technical aspects - from domain purchase to hosting setup and ongoing maintenance, making the process hassle-free for you.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Responsive Design</h3>
                    <p className="text-black">Websites that work perfectly on all devices and screen sizes, ensuring great user experience everywhere.</p>
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
              <h2 className="text-3xl font-bold text-black mb-6">Our Development Process</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">1. Discovery & Analysis</h3>
                  <p className="text-black group-hover:text-white transition-colors">Comprehensive analysis of your business domain, target audience, and market positioning to ensure the website aligns perfectly with your industry standards and business objectives.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">2. Strategic Design Phase</h3>
                  <p className="text-black group-hover:text-white transition-colors">Creating an optimized design that combines conversion-focused layouts with SEO best practices. Includes two rounds of refinements to perfectly capture your vision and brand identity.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">3. Development & Iteration</h3>
                  <p className="text-black group-hover:text-white transition-colors">Building your website using cutting-edge technologies and development practices. Includes two rounds of revisions after the initial demo to ensure every feature meets your expectations.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">4. Ongoing Partnership</h3>
                  <p className="text-black group-hover:text-white transition-colors">We maintain a lasting relationship with our clients, providing continuous support, updates, and scalability options for your growing business needs.</p>
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