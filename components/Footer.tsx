'use client'

import Image from "next/image";
import logo2 from "../Images/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        {/* Logo and Description */}
        <div className="relative flex flex-col items-start justify-start">
          <Image
            src={logo2}
            alt="logo2"
            width={100}
          />
          <div className="max-w-sm mt-4">
            <p className="text-gray-600">
              Our vision is to make all people <br /> the best place to live for them.
            </p>
          </div>
        </div>

        {/* Info and Navigation */}
        <div className="text-left mt-6 md:mt-0">
          <h4 className="text-4xl font-bold text-[#1F3E72]">Information</h4>
          <p className="text-gray-600">145 New York, FL 5467, USA</p>
          <div className="mt-3 space-x-4 flex flex-row">
            <p className="font-bold">Property</p>
            <p className="font-bold">Services</p>
            <p className="font-bold">Product</p>
            <p className="font-bold">About Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
