'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const benefits = [
  {
    title: "Modern Design",
    description: "Stand out with cutting-edge designs that reflect your brand's unique identity",
    icon: "🎨"
  },
  {
    title: "Conversion Focused",
    description: "Strategic layouts and CTAs that turn visitors into loyal customers",
    icon: "📈"
  },
  {
    title: "Fast & Responsive",
    description: "Lightning-fast websites that work flawlessly on all devices",
    icon: "⚡"
  },
  {
    title: "SEO Optimized",
    description: "Built to rank higher and attract more organic traffic",
    icon: "🎯"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.6
    }
  }
};

const item = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0,
    y: -20
  },
  show: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center text-black mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          Why Companies Choose <span className="text-red-600">Web Moose</span>
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-600 group hover:bg-red-600"
              variants={item}
            >
              <div className="text-4xl mb-4 group-hover:text-white transition-colors">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-white transition-colors">{benefit.title}</h3>
              <p className="text-black group-hover:text-white transition-colors">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link 
            href="/#services"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg hover:scale-105"
          >
            View Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 