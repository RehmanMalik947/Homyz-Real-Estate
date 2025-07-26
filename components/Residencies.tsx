'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

import logo1 from '../Images/prologis.png';
import logo2 from '../Images/tower.png';
import logo3 from '../Images/equinix.png';
import logo4 from '../Images/realty.png';
import r1 from '../Images/r1.png';
import r2 from '../Images/r2.png';
import r3 from '../Images/r3.png';

interface Card {
  price: string;
  title: string;
  location: string;
  image: any;
}

const cards: Card[] = [
  { price: '35,853', title: 'Citralan Puri Serang', location: 'Serang, Banten', image: r1 },
  { price: '47,043', title: 'Aliva Priva Jardin', location: 'Jakarta Timur', image: r2 },
  { price: '66,353', title: 'Asatti Garden City', location: 'Depok, Jawa Barat', image: r3 },
  { price: '35,853', title: 'Citralan Puri Serang', location: 'Serang, Banten', image: r1 },
  { price: '47,043', title: 'Aliva Priva Jardin', location: 'Jakarta Timur', image: r2 },
  { price: '66,353', title: 'Asatti Garden City', location: 'Depok, Jawa Barat', image: r3 },
];

export default function Residencies(): JSX.Element {
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) setVisibleCount(4);
    else if (width >= 768) setVisibleCount(3);
    else if (width >= 640) setVisibleCount(2);
    else setVisibleCount(1);
    setStartIndex(0); // reset index on resize
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const endIndex = startIndex + visibleCount;
  const currentCards = cards.slice(startIndex, endIndex);

  const goToNext = () => {
    if (endIndex < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section id="residencies" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Logo Row */}
        <div className="flex flex-wrap justify-around items-center gap-10 mb-16">
          <Image src={logo1} alt="logo1" width={150} height={150} />
          <Image src={logo2} alt="logo2" width={150} height={150} />
          <Image src={logo3} alt="logo3" width={150} height={50} />
          <Image src={logo4} alt="logo4" width={150} height={50} />
        </div>

        {/* Headings and Arrows */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl text-[#FFA500] font-semibold mb-1">Best Choices</h2>
            <h3 className="text-3xl font-extrabold text-[#1F3E72]">Popular Residencies</h3>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={goToPrevious}
              disabled={startIndex === 0}
              className="p-2 bg-white rounded-md text-xl shadow-md text-[#030EFF] disabled:opacity-50"
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button
              onClick={goToNext}
              disabled={endIndex >= cards.length}
              className="p-2 bg-white rounded-md text-xl shadow-md text-[#030EFF] disabled:opacity-50"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className={`grid gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        `}>
          {currentCards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:bg-blue-400/20"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={192}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />
              <p className="text-lg font-semibold mb-1 text-gray-500">
                <span className="text-yellow-500">$</span>{card.price}
              </p>
              <h4 className="text-2xl font-bold mb-1 text-[#1F3E72]">{card.title}</h4>
              <p className="text-xs text-gray-500">{card.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
