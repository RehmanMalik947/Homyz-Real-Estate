"use client";
import { useState } from 'react';
import Image from 'next/image';
import homeImg from '../Images/value.png';
import { MdGppGood } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiCellSignalHighBold } from "react-icons/pi";
const accordionData = [
  {
    icon: <MdGppGood />,
    title: 'Best interest rates on the market',
    desc: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
  },
  {
    icon: <RxCrossCircled />,
    title: 'Prevent unstable prices',
    desc: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
  },
  {
    icon: <PiCellSignalHighBold />,
    title: 'Best price on the market',
    desc: 'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.'
  }
];

export default function Value() {
  const [open, setOpen] = useState(0);

  return (
    <section id="value" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">

   
        <div className="relative flex items-center justify-center mt-10 md:mt-0">
          <div className="relative w-[400px] h-[450px] md:w-[500px] md:h-[550px] bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden rounded-t-full shadow-xl border-8 border-[#EAEAEA]">
            <Image
              src={homeImg}
              alt="Modern Home"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[#FFA500] text-2xl font-semibold mb-2">Our Value</h2>
          <h3 className="text-3xl text-[#1F3E72] font-bold mb-4">Value We Give to You</h3>
          <p className="mb-6 text-[#949CA9]">
            We always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          <div className="space-y-4">
            {accordionData.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 ${
                  open === idx ? 'bg-blue-50 shadow-lg' : 'bg-white'
                }`}
              >
                <button
                  className="flex items-center w-full px-6 py-4 focus:outline-none"
                  onClick={() => setOpen(open === idx ? -1 : idx)}
                >
                  <span className="text-2xl mr-4 rounded-md bg-[#EEEEFF] p-1 text-[#4066FF]">{item.icon}</span>
                  <span className="font-extrabold text-lg flex justify-center text-[#1F3E72] flex-1 text-left">
                    {item.title}
                  </span>
                  
                  <MdOutlineArrowDropDown
                    className={`text-3xl text-[#4066FF] transform transition-transform duration-300 rounded-md bg-[#EEEEFF] p-1${
                      open === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open === idx && (
                  <div className="px-6 pb-4 text-[#949CA9] text-sm">{item.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
