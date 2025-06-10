import { contactData } from "@/data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 flex items-center justify-center flex-col">
          <FaPhone className="text-2xl md:text-3xl text-white" />
        </div>
        <div>
          <h1 className="text-white text-lg sm:text-xl font-bold">Phone</h1>
          <h1 className="text-base sm:text-lg text-white opacity-70 ">{contactData.phone}</h1>
        </div>
      </div>
      <div className="flex items-center space-x-8 my-8 ">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 flex items-center justify-center flex-col">
          <FaEnvelope className="text-2xl md:text-3xl text-white" />
        </div>
        <div>
          <h1 className="text-white text-lg sm:text-xl font-bold">Email</h1>
          <h1 className="text-base sm:text-lg text-white opacity-70 ">{contactData.email}</h1>
        </div>
      </div>
      <div className="flex items-center space-x-8 my-8">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 flex items-center justify-center flex-col">
          <FaMap className="text-2xl md:text-3xl text-white" />
        </div>
        <div>
          <h1 className="text-white text-lg sm:text-xl font-bold">Address</h1>
          <h1 className="text-base sm:text-lg text-white opacity-70 ">{contactData.address}</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
