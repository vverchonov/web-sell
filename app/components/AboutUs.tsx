import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 text-black">About <span className="text-red-600">Web Moose</span></h2>
            <p className="text-black text-lg mb-8">
              At Web Moose, we&apos;re more than just web developers – we&apos;re your digital growth partners. 
              Since 2021, we&apos;ve been crafting websites that don&apos;t just look beautiful but actively 
              work to grow our clients&apos; businesses. Our approach combines creative design with 
              data-driven strategies to deliver websites that truly sell.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600">
                <h3 className="text-3xl font-bold text-red-600">50+</h3>
                <p className="text-black">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600">
                <h3 className="text-3xl font-bold text-red-600">95%</h3>
                <p className="text-black">Client Satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-600">
                <h3 className="text-3xl font-bold text-red-600">4+</h3>
                <p className="text-black">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <Image 
              src="/moose.webp" 
              alt="About Web Moose" 
              width={500} 
              height={500}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 