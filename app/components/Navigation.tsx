'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { // scroll down & scrolled past 100px
        setIsVisible(false);
      } else { // scroll up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    if (pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 64; // height of nav bar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on any other page, navigate to home page with the section hash
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 64; // height of nav bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const services = [
    { name: 'Custom Website Development', href: '/services/custom-website' },
    { name: 'E-commerce Solutions', href: '/services/ecommerce' },
    { name: 'Website Redesign', href: '/services/redesign' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="bg-transparent">
        <div className="bg-black/90 shadow-lg max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 rounded-bl-2xl rounded-br-2xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link 
                href="/" 
                className="flex-shrink-0 cursor-pointer flex items-center gap-1 sm:gap-2"
              >
                <Image 
                  src="/moose.webp" 
                  alt="Web Moose Logo" 
                  width={32} 
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-white hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    Home
                  </Link>
                  
                  {/* Services Dropdown */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="text-white hover:text-red-500 transition-colors font-medium flex items-center h-20 text-lg"
                    >
                      Services
                      <svg 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`absolute left-0 w-64 bg-black/90 backdrop-blur-md shadow-lg transition-all duration-200 rounded-b-2xl ${
                        isServicesOpen 
                          ? 'opacity-100 visible translate-y-0' 
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                      style={{ top: '100%' }}
                    >
                      {services.map((service, index) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`block px-4 py-3 text-white hover:text-red-500 transition-colors cursor-pointer text-lg ${
                            index === services.length - 1 ? 'rounded-b-2xl' : ''
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-white hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    About Us
                  </button>
                  <button
                    onClick={scrollToContact}
                    className="text-white hover:text-red-500 transition-colors font-medium text-lg"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white hover:text-red-500 p-1 sm:p-2"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMounted && (
          <div 
            className={`md:hidden fixed inset-0 transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
            }`}
          >
            <div className="h-[100vh] backdrop-blur-sm flex flex-col bg-black/80">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between px-4 h-20">
                <Link 
                  href="/" 
                  className="flex-shrink-0 cursor-pointer flex items-center gap-1 sm:gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image 
                    src="/moose.webp" 
                    alt="Web Moose Logo" 
                    width={32} 
                    height={32}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-red-500 p-1 sm:p-2"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="flex flex-col px-8 pt-20">
                <Link
                  href="/"
                  className="text-white hover:text-red-600 transition-colors text-4xl font-medium mb-12"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Services List Mobile - Always Visible */}
                <div className="mb-12">
                  <div className="text-white text-4xl font-medium mb-4 flex items-center">
                    Services
                    <svg 
                      className="ml-2 h-8 w-8 text-red-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="border-l-2 border-red-600 pl-6 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-white hover:text-red-600 transition-colors text-[2.5rem] leading-normal font-medium mb-6"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-red-600 transition-colors text-4xl font-medium mb-12 text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => {
                    scrollToContact();
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-red-600 transition-colors text-4xl font-medium text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 