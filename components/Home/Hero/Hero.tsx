"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { type IconType } from "react-icons";
import { FaDownload } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import {
  GiPistolGun,
  GiLaserBlast,
  GiRocket,
  GiCrestedHelmet,
  GiGauntlet,
  GiChestArmor,
  GiLegArmor,
} from "react-icons/gi";
import { BaseInfo, projectData, experienceData, educationData, researchData, focusAreas } from "@/data/data";
import AnimateIn from "@/components/Helper/AnimateIn";
import HeroPhotoStack from "./HeroPhotoStack";
import FocusAreaPage, { areaStyle } from "./FocusAreaPage";
import { projectRarity, type Rarity } from "@/components/Project/ProjectInspect";


interface Slot {
  slot: string;
  SlotIcon: IconType;
  name: string;
  type: string;
  meta: string;
  rarity: Rarity;
  img?: string;
  desc: string;
  perks: string[];
  tab: string;
  href?: string;
}

// Left column = projects, right column = career + education + publication.
const weapons: Slot[] = projectData.map((p, i) => ({
  slot: "Project",
  SlotIcon: [GiPistolGun, GiLaserBlast, GiRocket][i],
  name: p.title.split(" — ")[0],
  type: p.subtitle,
  meta: p.badge,
  rarity: projectRarity(p.badge),
  img: p.images[0],
  desc: p.description,
  perks: p.techStack.slice(0, 4),
  tab: "projects",
  href: `/projects/${p.slug}`,
}));

const [job1, job2] = experienceData;
const [ms, be] = educationData;
const paper = researchData[0];

const armor: Slot[] = [
  { slot: job1.role.split(" — ")[0], SlotIcon: GiCrestedHelmet, name: job1.initials, type: job1.role, meta: job1.period, rarity: "d2-exotic", img: job1.logo, desc: job1.highlights[0], perks: job1.highlights.slice(1, 3), tab: "experience" },
  { slot: job2.role, SlotIcon: GiGauntlet, name: job2.organization.split(" ")[0], type: job2.role, meta: job2.period, rarity: "d2-legendary", img: job2.logo, desc: job2.highlights[0], perks: job2.highlights.slice(1, 3), tab: "experience" },
  { slot: ms.degree.split(" — ")[0], SlotIcon: GiChestArmor, name: ms.initials, type: ms.degree, meta: ms.period, rarity: "d2-legendary", img: ms.logo, desc: ms.highlights.join(" · "), perks: [], tab: "experience" },
  { slot: be.degree.split(" — ")[0], SlotIcon: GiLegArmor, name: "MIT Pune", type: be.degree, meta: be.period, rarity: "d2-rare", img: be.logo, desc: be.highlights.join(" · "), perks: [], tab: "experience" },
  { slot: "Publication", SlotIcon: SiIeee, name: paper.venue, type: paper.title, meta: paper.type, rarity: "d2-exotic", desc: paper.description, perks: paper.topics.slice(0, 4), tab: "research", href: paper.url },
];

const SlotTile = ({ s, side, onJump }: { s: Slot; side: "left" | "right"; onJump?: (tab: string) => void }) => {
  const router = useRouter();
  return (
  <button
    onClick={() => {
      if (!s.href) onJump?.(s.tab);
      else if (s.href.startsWith("http")) window.open(s.href, "_blank", "noopener,noreferrer");
      else router.push(s.href);
    }}
    className={`group relative flex flex-col items-center gap-2 w-20 shrink-0 text-center cursor-pointer lg:flex-row lg:gap-3 lg:w-full lg:text-left ${side === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}
  >
    <div className="d2-tile relative w-16 h-16 shrink-0 border border-white/30 bg-black/50 overflow-hidden">
      {s.img ? (
        <Image src={s.img} alt="" fill sizes="64px" className={s.img.includes("/orgs/") ? "object-contain p-2 bg-white/90" : "object-cover"} />
      ) : (
        <div className="absolute inset-0 bg-white/90"><s.SlotIcon className="absolute inset-0 m-auto w-12 h-12 text-[#00629B]" /></div>
      )}
      <span className={`absolute bottom-0 inset-x-0 h-1 ${s.rarity}`} />
    </div>
    <div className="min-w-0 w-full lg:w-auto">
      <p className={`hidden lg:flex whitespace-nowrap text-[11px] uppercase tracking-[0.18em] !text-white/55 items-center gap-1.5 ${side === "right" ? "lg:justify-end" : ""}`}>
        {s.slot}
      </p>
      <p className="text-[11px] leading-tight lg:text-sm font-semibold uppercase tracking-wider text-white line-clamp-2 lg:truncate">{s.name}</p>
      <p className="hidden lg:block text-xs !text-[#e8d36a] truncate">{s.meta}</p>
    </div>

    {/* D2 item tooltip */}
    <div
      className={`pointer-events-none absolute z-30 top-0 w-80 hidden lg:block opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 transition duration-150 text-left shadow-2xl ${
        side === "left" ? "left-[calc(100%+12px)]" : "right-[calc(100%+12px)]"
      }`}
    >
      <div className={`${s.rarity} px-4 py-2.5`}>
        <p className="text-white font-bold uppercase tracking-wider text-base leading-tight">{s.name}</p>
        <p className="!text-white/75 text-[11px] uppercase tracking-widest">{s.slot} · {s.meta}</p>
      </div>
      <div className="bg-[#0d1117]/95 border border-white/10 border-t-0 px-4 py-3 space-y-3">
        <p className="!text-white/90 text-xs font-semibold">{s.type}</p>
        <p className="!text-white/60 text-xs leading-relaxed line-clamp-4">{s.desc}</p>
        {s.perks.length > 0 && (
          <ul className="space-y-1.5 border-t border-white/10 pt-2.5">
            {s.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2 text-[11px] text-white/80">
                <span className="mt-0.5 w-3 h-3 shrink-0 rounded-full border border-white/50 bg-[#5076a3]/60" />
                <span className="line-clamp-2">{perk}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="text-[10px] uppercase tracking-[0.2em] !text-white/40">Click for details</p>
      </div>
    </div>
  </button>
  );
};

const Hero = ({ onJump }: { onJump?: (tab: string) => void }) => {
  const [sub, setSub] = useState(0);
  const [open, setOpen] = useState(false);
  const eq = areaStyle[focusAreas[sub].name];

  return (
    <section className="w-full flex-1 flex items-center">
      <div className="w-[92%] max-w-7xl mx-auto py-8 lg:py-6">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Weapons */}
          <div className="order-2 lg:order-1 space-y-5 lg:space-y-6 lg:max-w-[280px] lg:justify-self-end w-full min-w-0">
            <AnimateIn animation="fade" direction="left">
              {/* Selected focus area */}
              <button onClick={() => setOpen(true)} className="group flex flex-col items-center gap-5 mx-auto pt-2 cursor-pointer text-center lg:flex-row lg:gap-6 lg:mx-0 lg:pt-0 lg:pl-3 lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sub}
                    initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
                    animate={{ rotate: 45, scale: 1, opacity: 1 }}
                    exit={{ rotate: 135, scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-14 h-14 shrink-0"
                    style={{ "--glow": eq.color } as React.CSSProperties}
                  >
                    <div className="absolute -inset-1.5 border border-white/25" />
                    <div className={`d2-pulse absolute inset-0 border border-white bg-gradient-to-br ${eq.bg} flex items-center justify-center`}>
                      <eq.Icon className="-rotate-45 w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-wider text-white">{focusAreas[sub].name}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] !text-white/60 group-hover:!text-white transition-colors">View skills ›</p>
                </div>
              </button>
              {/* Selector */}
              <div className="flex justify-center gap-5 mt-6 lg:justify-start lg:pl-2" role="radiogroup" aria-label="Focus area">
                {focusAreas.map((c, i) => {
                  const el = areaStyle[c.name];
                  return (
                    <button
                      key={c.name}
                      role="radio"
                      aria-checked={i === sub}
                      aria-label={c.name}
                      title={c.name}
                      onClick={() => {
                        setSub(i);
                        setOpen(true);
                      }}
                      className={`w-7 h-7 rotate-45 cursor-pointer border bg-gradient-to-br ${el.bg} flex items-center justify-center transition-all duration-150 hover:scale-110 hover:opacity-100 ${
                        i === sub ? "border-white opacity-100" : "border-white/20 opacity-50"
                      }`}
                    >
                      <el.Icon className="-rotate-45 w-4 h-4 text-white" />
                    </button>
                  );
                })}
              </div>
            </AnimateIn>
            <p className="lg:hidden text-[11px] uppercase tracking-[0.25em] !text-white/60 pt-2">Projects</p>
            {/* Phones: horizontal inventory strip. lg: vertical slot column (overflow visible for tooltips). */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-1 px-1 lg:flex-col lg:gap-5 lg:overflow-visible lg:m-0 lg:p-0">
              {weapons.map((s, i) => (
                <AnimateIn key={`${s.slot}-${s.name}`} animation="fade" direction="left" delay={0.08 * (i + 1)} className="relative hover:z-40 focus-within:z-40">
                  <SlotTile s={s} side="left" onJump={onJump} />
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Guardian */}
          <div className="order-1 lg:order-2 flex flex-col items-center text-center">
            <AnimateIn animation="zoom">
              <div className="relative">
                <div className="absolute inset-0 -z-10 blur-3xl bg-[radial-gradient(circle,rgba(232,211,106,0.25),transparent_65%)]" />
                <HeroPhotoStack images={BaseInfo.heroImages} />
              </div>
            </AnimateIn>
            <AnimateIn animation="fade" direction="up" delay={0.15}>
              <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.15em] mt-8">{BaseInfo.name}</h1>
              <p className="text-[#e8d36a] text-sm sm:text-base font-semibold tracking-wide mt-2">
                {BaseInfo.position} — {BaseInfo.specialty}
              </p>
              <p className="!text-white/85 text-base max-w-md mx-auto mt-3 leading-relaxed">{BaseInfo.tagline}</p>
              <p className="!text-white/60 text-xs sm:text-sm mt-3">{BaseInfo.proofPoints.join(" · ")}</p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                <button
                  onClick={() => onJump?.("projects")}
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/85 transition-colors cursor-pointer"
                >
                  View Projects
                </button>
                <a
                  href="/Rajesh_Sawant_Resume.pdf"
                  download
                  className="d2-tile inline-flex items-center gap-2 px-5 py-2.5 border border-white/50 bg-white/5 text-white text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  <FaDownload className="text-[10px]" /> Resume
                </a>
              </div>
              <p className="!text-white/45 text-xs mt-4">Tempe, AZ · MS Software Engineering, ASU</p>
            </AnimateIn>
          </div>

          {/* Armor */}
          <div className="order-3 space-y-5 lg:max-w-[280px] w-full min-w-0">
            <p className="lg:hidden text-[11px] uppercase tracking-[0.25em] !text-white/60">Background</p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-1 px-1 lg:flex-col lg:gap-7 lg:overflow-visible lg:m-0 lg:p-0">
              {armor.map((s, i) => (
                <AnimateIn key={`${s.slot}-${s.name}`} animation="fade" direction="right" delay={0.08 * i} className="relative hover:z-40 focus-within:z-40">
                  <SlotTile s={s} side="right" onJump={onJump} />
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {open && <FocusAreaPage index={sub} onIndex={setSub} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
