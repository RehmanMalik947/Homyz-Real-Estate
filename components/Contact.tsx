'use client'
import Image from "next/image";
import contact from "../Images/contact.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidMessageAlt } from "react-icons/bi";
import { ReactNode } from "react";
type ContactItem = {
  icon: ReactNode;
  title: string;
  number: string;
  button: string;
};

const contacts: ContactItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Call",
    number: "021 123 145 14",
    button: "Call now",
  },
  {
    icon: <AiFillMessage />,
    title: "Chat",
    number: "021 123 145 14",
    button: "Chat now",
  },
  {
    icon: <AiFillMessage />,
    title: "Video Call",
    number: "021 123 145 14",
    button: "Video Call now",
  },
  {
    icon: <BiSolidMessageAlt />,
    title: "Message",
    number: "021 123 145 14",
    button: "Message now",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-[#FFA500] text-2xl font-semibold mb-2">
              Our Contact Us
            </h2>
            <h3 className="text-3xl text-[#1F3E72] font-bold mb-4">
              Easy to contact us
            </h3>
            <p className="mb-6 text-[#949CA9]">
              We’re always ready to help by providing the best services for you.
              <br />
              We believe a good place to live can make your life better.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-6 flex flex-col items-start bg-white text-[#4469FF] shadow-md transition-transform duration-500 hover:scale-105"
                >
                  <div className="flex justify-center items-center gap-5">
                    <div className="text-3xl mb-2 p-2 rounded-md bg-[#eeeeff]">
                      {c.icon}
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1 text-[#1F3E72]">
                        {c.title}
                      </div>
                      <div className="text-sm mb-4 text-[#949CA9]">
                        {c.number}
                      </div>
                    </div>
                  </div>

                  <button className="mt-auto px-4 py-2 w-full rounded font-bold text-sm border bg-[#eeeeFF] text-[#4469FF] transition-transform duration-300 hover:scale-95 hover:bg-[#2f50d4] hover:text-white">
                    {c.button}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center items-start mt-0">
            <div className="relative w-[400px] h-[550px] md:w-[500px] bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden rounded-t-full shadow-xl border-8">
              <Image src={contact} alt="Contact" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
