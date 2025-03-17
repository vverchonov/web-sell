'use client';

import ServiceContactUs from '@/app/components/ServiceContactUs';
import ServiceLayout from '@/app/components/ServiceLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Redesign() {
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
          <span className="text-red-600">Website Redesign</span>
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
                    <h3 className="font-semibold text-red-600">Complete Website Analysis</h3>
                    <p className="text-black">Thorough assessment of your current website&apos;s performance, user experience, and conversion rates to identify improvement areas.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Modern Design Update</h3>
                    <p className="text-black">Fresh, contemporary design that aligns with current trends while maintaining your brand identity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Performance Optimization</h3>
                    <p className="text-black">Significant improvements in loading speed, mobile responsiveness, and overall website performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">✓</span>
                  <div>
                    <h3 className="font-semibold text-red-600">Content Migration</h3>
                    <p className="text-black">Careful transfer of your existing content, ensuring no data loss during the transition.</p>
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
              <h2 className="text-3xl font-bold text-black mb-6">Our Redesign Process</h2>
              <div className="space-y-6">
                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">1. Website Audit</h3>
                  <p className="text-black group-hover:text-white transition-colors">Comprehensive analysis of your current website&apos;s strengths and weaknesses, including technical, visual, and content aspects.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">2. Strategic Planning</h3>
                  <p className="text-black group-hover:text-white transition-colors">Development of a detailed redesign strategy based on audit findings and your business objectives.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">3. Design & Development</h3>
                  <p className="text-black group-hover:text-white transition-colors">Creation of a modern, optimized website while maintaining your brand identity and improving user experience.</p>
                </div>

                <div className="bg-white border-2 border-red-600 rounded-lg p-6 transition-all duration-300 hover:bg-red-600 group">
                  <h3 className="font-semibold text-black group-hover:text-white transition-colors">4. Testing & Launch</h3>
                  <p className="text-black group-hover:text-white transition-colors">Thorough testing across devices and browsers, followed by a carefully planned launch to minimize disruption.</p>
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