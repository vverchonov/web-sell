export default function ContactUs() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#6F1D1B]">Get In Touch</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border-2 border-[#BB9457]">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#432818] mb-2">
                Name
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-[#BB9457] focus:ring-2 focus:ring-[#99582A] focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#432818] mb-2">
                Email
              </label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-[#BB9457] focus:ring-2 focus:ring-[#99582A] focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#432818] mb-2">
                Message
              </label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 rounded-lg border border-[#BB9457] focus:ring-2 focus:ring-[#99582A] focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#6F1D1B] hover:bg-[#99582A] text-[#FFE6A7] py-4 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 