'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slideInFromLeft = {
  hidden: { 
    x: -100,
    opacity: 0 
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const slideInFromRight = {
  hidden: { 
    x: 100,
    opacity: 0 
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const statsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
};

const statsItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromLeft}
          >
            <h2 className="text-4xl font-bold mb-6 text-black">About <span className="text-red-600">Web Moose</span></h2>
            <p className="text-black text-lg mb-8">
              At Web Moose, we&apos;re more than just web developers – we&apos;re your digital growth partners. 
              Since 2021, we&apos;ve been crafting websites that don&apos;t just look beautiful but actively 
              work to grow our clients&apos; businesses. Our approach combines creative design with 
              data-driven strategies to deliver websites that truly sell.
            </p>
            <motion.div 
              className="grid grid-cols-3 gap-4  md:gap-8 text-center"
              variants={statsContainer}
            >
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600"
                variants={statsItem}
              >
                <h3 className="text-3xl font-bold text-red-600">50+</h3>
                <p className="text-black">Projects Completed</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600"
                variants={statsItem}
              >
                <h3 className="text-3xl font-bold text-red-600">95%</h3>
                <p className="text-black">Client Satisfaction</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600"
                variants={statsItem}
              >
                <h3 className="text-3xl font-bold text-red-600">4+</h3>
                <p className="text-black">Years Experience</p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 relative w-full overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromRight}
          >
            <div className="relative w-full max-w-full mx-auto">
              <Image 
                src="/moose-evolution.webp" 
                alt="Web Moose Evolution" 
                width={500} 
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 