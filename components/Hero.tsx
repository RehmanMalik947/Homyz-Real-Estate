'use client'

import React from 'react'
import Image from 'next/image'
import HeroImg from '/Images/hero-image.png'
import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-[radial-gradient(circle_at_10%_20%,_gray_1%,_#131110_25%,_#131110_100%)] text-white pt-32 pb-16 px-4 sm:px-8 lg:px-24 overflow-hidden">

      <div
        className="absolute w-16 h-16 rounded-full opacity-70 z-0"
        style={{
          background: 'linear-gradient(70.86deg, #ffb978 3.16%, #ff922d 96.75%)',
          top: '9rem',
          left: '22rem',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div className="w-full">
          <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="relative inline-block pr-4">Discover</span>
            <br />
            Most Suitable
            <br />
            Property
          </h1>

          <p className="mb-8 text-gray-300 text-lg leading-relaxed max-w-lg">
            Find a variety of properties that suit you very easily<br />
            Forget all difficulties in finding a residence for you
          </p>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row items-stretch mb-12 bg-white rounded-md overflow-hidden shadow-lg max-w-md w-full">
            <div className="flex items-center px-4 py-3 bg-white">
              <FaLocationDot className="text-blue-600 text-xl" />
            </div>
            <input
              type="text"
              className="flex-1 px-4 py-3 text-gray-800 focus:outline-none bg-white"
              placeholder="Enter location"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium transition-colors m-2 rounded-md">
              Search
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="text-3xl font-bold">9,000<span className="text-orange-400">+</span></p>
              <p className="text-gray-300 text-sm mt-1">Premium Product</p>
            </div>
            <div>
              <p className="text-3xl font-bold">2,000<span className="text-orange-400">+</span></p>
              <p className="text-gray-300 text-sm mt-1">Honest Customer</p>
            </div>
            <div>
              <p className="text-3xl font-bold">28<span className="text-orange-400">+</span></p>
              <p className="text-gray-300 text-sm mt-1">Awards Winning</p>
            </div>
          </div>
        </div>

        {/* Right Image Box */}
        <div className="relative flex items-center justify-center mt-10 md:mt-0">
          <div className="relative w-[400px] h-[450px] md:w-[500px] md:h-[550px] bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden rounded-t-full shadow-xl border-8 border-[#302E2E]">
            <Image
              src={HeroImg}
              alt="Modern Property"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
