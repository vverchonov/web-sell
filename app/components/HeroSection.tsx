'use client';
import TypedTitle from './TypedTitle';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { 
    opacity: 0,
    y: 20
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export default function HeroSection() {
  const scrollToWhyChooseUs = () => {
    const element = document.getElementById('why-choose-us');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div 
          className="text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeInUp}>
            <TypedTitle />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-black mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Transform your digital presence with Web Moose - where innovation meets conversion. 
            We craft websites that not only look stunning but drive real business results.
          </motion.p>

          <motion.button 
            onClick={scrollToWhyChooseUs}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            variants={fadeInUp}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 