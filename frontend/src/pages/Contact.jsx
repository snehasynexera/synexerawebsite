import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section 
      id="contact" 
      className="relative w-full min-h-screen py-20 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #0d1330 25%, #0a0e27 50%, #0d1330 75%, #0a0e27 100%)",
      }}
    >
      {/* Gradient Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0DBCC1]/10 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0DBCC1]/10 rounded-full blur-[100px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0DBCC1]/10 border border-[#0DBCC1]/30 backdrop-blur-sm mb-12">
          <svg className="w-4 h-4 text-[#0DBCC1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
          <span className="text-[#0DBCC1] text-sm font-medium">Get in Touch</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Let's Create</span>
              <br />
              <span 
                className="bg-gradient-to-r from-[#0DBCC1] via-[#0aa5aa] to-[#088f8f] bg-clip-text text-transparent"
              >
                Something
              </span>
              <br />
              <span 
                className="bg-gradient-to-r from-[#0aa5aa] via-[#0DBCC1] to-[#0cc2c7] bg-clip-text text-transparent"
              >
                Amazing
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Have a project in mind? We'd love to hear about it. Drop us a message and let's start building something extraordinary together.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              <div className="px-5 py-2.5 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                <span className="text-gray-300 text-sm font-medium">Fast Response</span>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                <span className="text-gray-300 text-sm font-medium">24/7 Support</span>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                <span className="text-gray-300 text-sm font-medium">Expert Team</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12">
              <div>
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#0DBCC1] mb-1">24h</div>
                <div className="text-gray-400 text-sm">Response</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            {/* Glassmorphic Form Container */}
            <div 
              className="relative rounded-3xl p-8 backdrop-blur-xl border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#0DBCC1]/20 to-[#0aa5aa]/20 blur-2xl opacity-50 -z-10"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0DBCC1]/50 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0DBCC1]/50 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0DBCC1]/50 focus:border-transparent transition-all"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project or inquiry..."
                    rows="4"
                    className="w-full px-4 py-3.5 rounded-xl bg-gray-900/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0DBCC1]/50 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#0DBCC1]/25"
                  style={{
                    background: "linear-gradient(90deg, #0DBCC1 0%, #0aa5aa 50%, #088f8f 100%)",
                  }}
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-[#0DBCC1]" />
                  <span>Your information is safe with us</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
