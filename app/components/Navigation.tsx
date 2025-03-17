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
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) { // scroll down & scrolled past 100px
          setIsVisible(false);
        } else { // scroll up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
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
      <div className="bg-black/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
                className="w-7 h-7 sm:w-8 sm:h-8"
              />
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-red-500 transition-colors font-medium"
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
                    className="text-white hover:text-red-500 transition-colors font-medium flex items-center h-16"
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
                    className={`absolute left-0 w-64 bg-black/90 backdrop-blur-md shadow-lg transition-all duration-200 ${
                      isServicesOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-1'
                    }`}
                    style={{ top: '64px' }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-white hover:text-red-500 transition-colors cursor-pointer"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-red-500 transition-colors font-medium"
                >
                  About Us
                </button>
                <button
                  onClick={scrollToContact}
                  className="text-white hover:text-red-500 transition-colors font-medium"
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

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-black/90 backdrop-blur-md`}
        >
          <div className="px-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block w-full text-left px-3 py-2 text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Services Dropdown Mobile */}
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="block w-full text-left px-3 py-2 text-white hover:text-red-500 transition-colors"
            >
              Services
            </button>
            <div 
              className={`transition-all duration-200 ${
                isServicesOpen ? 'max-h-48' : 'max-h-0'
              } overflow-hidden bg-black/90 backdrop-blur-md`}
            >
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-3 py-2 text-white hover:text-red-500 transition-colors text-sm"
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
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-white hover:text-red-500 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={scrollToContact}
              className="block w-full text-left px-3 py-2 text-white hover:text-red-500 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 