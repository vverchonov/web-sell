import Link from 'next/link';

const services = [
  {
    title: "Custom Website Development",
    description: "Get a tailor-made website that perfectly represents your brand. We combine stunning design with strategic functionality to create a website that not only looks professional but drives results.",
    features: ["Custom Design", "Mobile Responsive", "SEO Setup", "Analytics Integration"],
    href: "/services/custom-website"
  },
  {
    title: "E-commerce Solutions",
    description: "Transform your business with a powerful online store. Our e-commerce solutions are built for smooth shopping experiences and maximum conversions.",
    features: ["Product Management", "Secure Payments", "Inventory System", "Order Tracking"],
    href: "/services/ecommerce"
  },
  {
    title: "Website Redesign",
    description: "Breathe new life into your existing website. We'll transform your current site into a modern, high-converting platform while maintaining your brand identity.",
    features: ["Modern Update", "Performance Boost", "Content Migration", "SEO Preservation"],
    href: "/services/redesign"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-red-600 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-black/80 mb-6">
                {service.description}
              </p>
              <ul className="mb-6 space-y-2 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-black/80">
                    <span className="mr-2 text-red-600">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href={service.href}
                className="w-full bg-red-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-red-700"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 