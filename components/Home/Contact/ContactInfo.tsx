import { BaseInfo, contactData } from "@/data/data";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

// Each channel is a Destiny-style emblem banner: colored backdrop, square icon plate, two text lines.
const channels = [
  { icon: FaEnvelope, label: "Email", value: contactData.email, href: `mailto:${contactData.email}`, color: "#e0601c" },
  { icon: FaLinkedin, label: "LinkedIn", value: "in/rajesh-sawant11", href: "https://www.linkedin.com/in/rajesh-sawant11/", external: true, color: "#2f6fd0" },
  { icon: FaGithub, label: "GitHub", value: "rajeshsawant98", href: "https://github.com/rajeshsawant98", external: true, color: "#7d4fc4" },
  { icon: FaPhone, label: "Phone", value: contactData.phone, href: `tel:${contactData.phone.replace(/[^+\d]/g, "")}`, color: "#1f8a55" },
  { icon: FaDownload, label: "Resume", value: "Download PDF", href: "/Rajesh_Sawant_Resume.pdf", download: true, color: "#b8902a" },
  { icon: FaMapMarkerAlt, label: "Location", value: contactData.address, color: "#4a5568" },
];

const ContactInfo = () => {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-green-300 mb-6">
        <span className="relative flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
          <span className="relative w-2 h-2 rounded-full bg-green-400" />
        </span>
        {BaseInfo.availabilityBadge}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
        {channels.map(({ icon: Icon, label, value, href, external, download, color }) => {
          const body = (
            <>
              <div className="w-14 h-14 shrink-0 bg-black/35 border-r border-white/20 flex items-center justify-center">
                <Icon className="text-xl text-white" />
              </div>
              <div className="min-w-0 px-4">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">{label}</p>
                <p className="text-xs !text-white/75 truncate">{value}</p>
              </div>
              <span className="d2-shine" aria-hidden />
            </>
          );
          const cls = "d2-emblem-banner d2-tile relative flex items-center overflow-hidden border border-white/15";
          const style = { background: `linear-gradient(100deg, ${color} 0%, ${color}aa 45%, #0d1117 100%)` };
          return href ? (
            <a
              key={label}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              {...(download && { download: true })}
              className={cls}
              style={style}
            >
              {body}
            </a>
          ) : (
            <div key={label} className={cls} style={style}>
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
