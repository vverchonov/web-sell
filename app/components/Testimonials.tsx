import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    company: "Stacked Burger",
    website: "https://www.stackedburger.ca/",
    logo: "/clients/burger.jpg",
    quote: "Web Moose completely transformed our online presence. Their focus on conversion optimization increased our leads by 150% within the first month!",
    role: "Marketing Director"
  },
  {
    company: "Fast Banners",
    website: "https://cheapbannersgta.vercel.app/",
    logo: "/clients/fastbanners.webp",
    quote: "The attention to detail and strategic approach to web design made all the difference. Our e-commerce sales have doubled since the launch.",
    role: "CEO"
  },
  {
    company: "Retail Plus",
    website: "https://www.luxurydesignsigns.com/",
    logo: "/clients/luxury_signs.jpg",
    quote: "Best investment we've made for our business. The new website has become our primary sales channel, generating 70% of our total revenue.",
    role: "Operations Manager"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-black">Businesses Who </span>
          <span className="text-red-600">Trust Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#BB9457]">
              <div className="flex flex-col items-center mb-6">
                <Link 
                  href={testimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-64 h-32 relative mb-4 hover:opacity-90 transition-opacity"
                >
                  <Image 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`} 
                    fill
                    className="object-contain"
                  />
                </Link>
                <div className="text-center">
                  <Link 
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#6F1D1B] hover:text-[#99582A] transition-colors"
                  >
                    {testimonial.company}
                  </Link>
                  <p className="text-[#99582A]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#432818] italic text-center">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 