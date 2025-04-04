'use client';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fadeIn = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const slideInFromLeft = {
  hidden: { 
    x: -100,
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ServiceContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if email is provided and valid
      if (!formData.email) {
        throw new Error('Please provide your email address');
      }

      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Send the form data to our API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }

      // Success toast
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      // Error toast
      toast.error(error instanceof Error ? error.message : 'Something went wrong. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="contact" className="bg-white py-20 px-4">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-black mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Ready to <span className="text-red-600">Get Started</span>
          </motion.h2>
          <motion.p 
            className="text-black/80 text-xl max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            Let&apos;s turn your vision into reality. Whether you prefer a quick call, email, or detailed message - 
            we&apos;re here to help you take the next step towards your digital success.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Methods */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
          >
            <motion.div 
              className="bg-red-50 p-6 rounded-xl text-center group hover:bg-red-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              variants={slideInFromLeft}
            >
              <h3 className="text-black font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">Call Us</h3>
              <p className="text-black/80 mb-4 group-hover:text-black transition-colors">Get immediate answers to your questions</p>
              <a 
                href="tel:+14379813239" 
                className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
              >
                +1 (437) 981-3239
              </a>
            </motion.div>
            
            <motion.div 
              className="bg-red-50 p-6 rounded-xl text-center group hover:bg-red-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              variants={slideInFromLeft}
            >
              <h3 className="text-black font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">Email Us</h3>
              <p className="text-black/80 mb-4 group-hover:text-black transition-colors">Send us your inquiries anytime</p>
              <a 
                href="mailto:contact.webmoose@gmail.com" 
                className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
              >
                contact.webmoose@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className="bg-red-50 p-6 rounded-xl text-center group hover:bg-red-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              variants={slideInFromLeft}
            >
              <h3 className="text-black font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">Business Hours</h3>
              <p className="text-black/80 group-hover:text-black transition-colors">Monday - Friday</p>
              <p className="text-black/80 group-hover:text-black transition-colors">9:00 AM - 6:00 PM EST</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-red-600 p-8 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-white text-black placeholder-black/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Your name (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email <span className="text-white/80">*</span>
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-white text-black placeholder-black/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-white border-2 border-white text-black placeholder-black/60 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                  placeholder="Tell us about your project (optional)"
                ></textarea>
              </div>
              <button 
                disabled={isSubmitting}
                className={`w-full bg-white text-red-600 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-red-700 hover:text-white border-2 border-white ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 