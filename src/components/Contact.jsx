'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Clock, Download, 
  Linkedin, Github, Check, Copy, Send 
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kumaraditya1814@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-bg-app text-text-app py-24 relative overflow-hidden"
    >
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-semibold tracking-[0.25em] text-[#a771ee] font-mono uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-app">
            Let's Build Something Great
          </h3>
          <p className="text-text-muted-app text-sm mt-3 max-w-md mx-auto">
            Have an exciting contract, full-time role, or project idea? Feel free to drop a message or reach out on socials.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <div className="glassmorphism rounded-2xl p-6 md:p-8 flex flex-col gap-6">
              <h4 className="text-xl font-bold font-display text-text-app">
                Contact Information
              </h4>
              
              {/* Quick Copy Email Card */}
              <div className="flex items-center justify-between p-3.5 bg-badge-app border border-border-app rounded-xl">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <div className="overflow-hidden">
                    <p className="text-[10px] text-text-muted-app uppercase font-mono tracking-wider">Email Address</p>
                    <p className="text-sm text-text-app font-mono truncate">kumaraditya1814@gmail.com</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-card-app text-text-muted-app hover:text-text-app transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location and Info */}
              <div className="flex flex-col gap-4.5 mt-2">
                <div className="flex items-center gap-3.5 text-sm text-text-muted-app">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Pune, India</span>
                </div>
                <div className="flex items-center gap-3.5 text-sm text-text-muted-app">
                  <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Mon - Sat, 10:00 AM - 8:00 PM IST</span>
                </div>
              </div>

              {/* Connect LinkedIn Button */}
              <div className="mt-4">
                <a
                  href="https://www.linkedin.com/in/kumar-aditya-098202257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-badge-app border border-border-app hover:border-purple-500/30 hover:bg-purple-500/5 text-text-app font-medium py-3 rounded-xl transition-all duration-300 group"
                >
                  <Linkedin className="w-4.5 h-4.5 text-purple-500 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://www.linkedin.com/in/kumar-aditya-098202257/"
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5 hover:-translate-y-1.5 group transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                <span className="text-xs font-mono text-text-muted-app group-hover:text-[#0077b5]">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Kumaraditya18"
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism rounded-xl p-4 flex flex-col items-center gap-2 hover:border-text-app/20 hover:bg-text-app/5 hover:-translate-y-1.5 group transition-all duration-300"
              >
                <Github className="w-5 h-5 text-text-app" />
                <span className="text-xs font-mono text-text-muted-app group-hover:text-text-app">GitHub</span>
              </a>
              <a
                href="https://leetcode.com/u/kumar_aditya18/"
                target="_blank"
                rel="noopener noreferrer"
                className="glassmorphism rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#ffa116]/30 hover:bg-[#ffa116]/5 hover:-translate-y-1.5 group transition-all duration-300"
              >
                <SiLeetcode className="w-5 h-5 text-[#ffa116]" />
                <span className="text-xs font-mono text-text-muted-app group-hover:text-[#ffa116]">Leetcode</span>
              </a>
            </div>

          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism rounded-2xl p-6 md:p-8">
              <h4 className="text-xl font-bold font-display text-text-app mb-6">
                Send a Message
              </h4>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-text-muted-app uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="bg-badge-app border border-border-app focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-text-app placeholder-text-muted-app/60 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-text-muted-app uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="johndoe@example.com"
                      className="bg-badge-app border border-border-app focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-text-app placeholder-text-muted-app/60 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-text-muted-app uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-badge-app border border-border-app focus:border-purple-500/50 rounded-xl px-4 py-3 text-sm text-text-app placeholder-text-muted-app/60 focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl w-full hover:shadow-lg hover:shadow-purple-500/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 cursor-pointer animate-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
                        Sending Message...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="border-t border-border-app mt-16 pt-8 text-center text-xs text-text-muted-app font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kumar Aditya. All rights reserved.</p>
          <blockquote className="italic text-text-muted-app/70 hidden sm:block">
            "Code is like humor. When you have to explain it, it’s bad."
          </blockquote>
        </div>

      </div>
    </section>
  );
};

export default Contact;
