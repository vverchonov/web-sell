
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

export default function WhyChooseUs() {
  return (
    <>
      <section id="why-choose-us" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-16">
            Why Companies Choose <span className="text-red-600">Web Moose</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-red-600 group hover:bg-red-600">
                <div className="text-4xl mb-4 group-hover:text-white transition-colors">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-white transition-colors">{benefit.title}</h3>
                <p className="text-black group-hover:text-white transition-colors">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
} 