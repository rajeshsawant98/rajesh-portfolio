import { contactData } from "@/data/data";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const contactItems = [
  { icon: FaPhone, label: "Phone", value: contactData.phone },
  { icon: FaEnvelope, label: "Email", value: contactData.email },
  { icon: FaMap, label: "Address", value: contactData.address },
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {contactItems.map((item) => (
        <div key={item.label} className="flex items-center space-x-8">
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 flex items-center justify-center">
            <item.icon className="text-2xl md:text-3xl text-white" />
          </div>
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold">{item.label}</h3>
            <p className="text-base sm:text-lg text-white opacity-70">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
