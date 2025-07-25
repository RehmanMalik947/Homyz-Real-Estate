'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo1 from '../Images/logo1.png';

export default function Navbar(): JSX.Element {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollY = window.scrollY;
        setShowNavbar(scrollY < heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 transition-all duration-500 ${
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } bg-[#302E2E]/90 backdrop-blur-2xl shadow-lg`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image src={logo1} width={100} alt="logo1" />

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-12 text-white items-center">
          <li><a href="#residencies">Residencies</a></li>
          <li><a href="#value">Our Value</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#get-started">Get Started</a></li>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}
