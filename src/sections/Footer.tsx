'use client';

import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/Zkyarpan",
  },
  {
    title: "PeerList",
    href: "https://peerlist.io/zkyyarpan",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/arpan-karki-b5351a286/",
  },
  {
    title: "Twitter",
    href: "https://x.com/zkyarpan?s=21",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Place CV.pdf in your public folder
    link.download = 'Arpan_Karki_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="relative overflow-x-clip bg-[#0a192f] border-t border-white/10">
      {/* Background gradient matching your design */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 pointer-events-none bg-gradient-to-t from-emerald-500/5 to-transparent"></div>
      
      {/* Large Text Background */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="text-[12rem] md:text-[18rem] font-bold text-white/10 text-center leading-none pb-8">
          ARPAN
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Top Section - CV Download + Social Links */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Download CV Section */}
          <div className="flex flex-col items-center md:items-start gap-4 max-w-md">
            <h3 className="text-white font-semibold text-xl">Download My Resume</h3>
            <p className="text-white/60 text-sm text-center md:text-left">
              Get a detailed overview of my skills, experience, and accomplishments
            </p>
            <button
              onClick={handleDownloadCV}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-900 rounded-lg font-semibold hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download CV
            </button>
          </div>

          {/* Social Links - Matching your current design */}
          <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-white/70 hover:text-emerald-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-medium text-sm md:text-base">{link.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="text-white/40 text-sm text-center">
            © {currentYear}. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};