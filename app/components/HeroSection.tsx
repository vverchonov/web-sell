'use client';

export default function HeroSection() {
  const scrollToWhyChooseUs = () => {
    const element = document.getElementById('why-choose-us');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-16 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            We Build Websites That <span className="text-red-600">Sell</span>
          </h1>
          <p className="text-lg md:text-xl text-black mb-8 max-w-3xl mx-auto">
            Transform your digital presence with Web Moose - where innovation meets conversion. 
            We craft websites that not only look stunning but drive real business results.
          </p>
          <button 
            onClick={scrollToWhyChooseUs}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
} 