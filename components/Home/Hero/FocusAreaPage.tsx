"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { type IconType } from "react-icons";
import { LuCodeXml, LuBrainCircuit, LuCloudCog, LuArrowLeft } from "react-icons/lu";
import { focusAreas, focusSkillGroups, projectData } from "@/data/data";

// Color + icon per focus area (keyed by focusAreas[].name). Colors are Destiny's three Light elements.
export const areaStyle: Record<string, { Icon: IconType; color: string; bg: string }> = {
  "Full Stack Development": { Icon: LuCodeXml, color: "#f5873b", bg: "from-[#e0601c] to-[#3d1608]" }, // Solar
  "AI Engineering": { Icon: LuBrainCircuit, color: "#b48ef0", bg: "from-[#7d4fc4] to-[#1f1036]" }, // Void
  "Cloud & DevOps": { Icon: LuCloudCog, color: "#7fd6f5", bg: "from-[#2f8fd0] to-[#0c2236]" }, // Arc
};

interface Props {
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}

// Full-screen "subclass" page. Portaled to <body> because the tab panel is transformed,
// which would otherwise trap `position: fixed` inside it.
const FocusAreaPage = ({ index, onIndex, onClose }: Props) => {
  const area = focusAreas[index];
  const style = areaStyle[area.name];
  const groups = focusSkillGroups.filter((g) => area.categories.includes(g.category));
  const projects = projectData.filter((p) => area.projects.includes(p.id));
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    backRef.current?.focus();
    // Capture phase so Q/E/arrows switch areas here instead of switching the tabs underneath.
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const n = focusAreas.length;
      if (k === "escape") onClose();
      else if (k === "q" || k === "arrowleft") onIndex((index - 1 + n) % n);
      else if (k === "e" || k === "arrowright") onIndex((index + 1) % n);
      else return;
      e.stopPropagation();
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [index, onIndex, onClose]);

  return createPortal(
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={area.name}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-[#07090d]/95 backdrop-blur-md overflow-y-auto d2-scroll"
      style={{ backgroundImage: `radial-gradient(60% 80% at 22% 50%, ${style.color}2e, transparent 70%)` }}
    >
      {/* Top bar: back + area picker */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-4 sm:px-10 py-4 border-b border-white/10 bg-black/30 backdrop-blur-md">
        <button
          ref={backRef}
          onClick={onClose}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white cursor-pointer"
        >
          <LuArrowLeft /> Back <span className="d2-key hidden sm:inline-flex">Esc</span>
        </button>
        <div className="flex items-center gap-6" role="radiogroup" aria-label="Focus area">
          <span className="d2-key hidden sm:inline-flex">Q</span>
          {focusAreas.map((c, i) => {
            const el = areaStyle[c.name];
            return (
              <button
                key={c.name}
                role="radio"
                aria-checked={i === index}
                aria-label={c.name}
                title={c.name}
                onClick={() => onIndex(i)}
                className={`w-8 h-8 rotate-45 cursor-pointer border bg-gradient-to-br ${el.bg} flex items-center justify-center transition-all duration-150 hover:scale-110 hover:opacity-100 ${
                  i === index ? "border-white opacity-100 scale-110" : "border-white/20 opacity-50"
                }`}
              >
                <el.Icon className="-rotate-45 w-4 h-4 text-white" />
              </button>
            );
          })}
          <span className="d2-key hidden sm:inline-flex">E</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
          className="max-w-7xl mx-auto px-6 sm:px-10 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 lg:gap-20 items-start"
        >
          {/* Emblem + summary */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ rotate: -45, scale: 0.6 }}
              animate={{ rotate: 45, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 lg:ml-8 my-8"
              style={{ "--glow": style.color } as React.CSSProperties}
            >
              <div className="absolute -inset-3 border border-white/20" />
              <div className="absolute -inset-6 border border-white/5" />
              <div className={`d2-pulse absolute inset-0 border-2 border-white bg-gradient-to-br ${style.bg} flex items-center justify-center`}>
                <style.Icon className="-rotate-45 w-16 h-16 sm:w-20 sm:h-20 text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-[0.15em] mt-6" style={{ color: style.color }}>
              {area.name}
            </h2>
            <p className="!text-white/70 text-sm sm:text-base leading-relaxed mt-4 max-w-md">{area.description}</p>
            <p className="text-[11px] uppercase tracking-[0.25em] !text-white/40 mt-6">
              {groups.reduce((n, g) => n + g.skills.length, 0)} skills · {groups.length} {groups.length === 1 ? "group" : "groups"}
            </p>
            <div className="w-full max-w-md mt-8 text-left">
              <p className="text-xs uppercase tracking-[0.25em] !text-white/60 pb-2 mb-3 border-b border-white/10">In Practice</p>
              <ul className="space-y-3">
                {area.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + 0.06 * i, duration: 0.25 }}
                    className="flex items-start gap-3 text-sm text-white/80 leading-relaxed"
                  >
                    <span className="mt-1.5 w-2 h-2 shrink-0 rotate-45" style={{ background: style.color }} />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skill sockets */}
          <div className="space-y-8">
            {groups.map((g, gi) => (
              <div key={g.category}>
                <p className="text-xs uppercase tracking-[0.25em] !text-white/60 pb-2 mb-3 border-b border-white/10">{g.category}</p>
                <div className="flex flex-wrap gap-3">
                  {g.skills.map((sk, si) => (
                    <motion.div
                      key={sk.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * gi + 0.03 * si, duration: 0.25 }}
                      className="w-[72px] flex flex-col items-center gap-1.5"
                    >
                      <div className="d2-tile w-14 h-14 border border-white/25 bg-black/50 p-2.5 flex items-center justify-center">
                        {sk.icon ? (
                          <Image
                            src={sk.icon}
                            alt=""
                            width={36}
                            height={36}
                            className={`w-full h-full object-contain ${(sk as { darkIcon?: boolean }).darkIcon ? "invert brightness-200" : ""}`}
                          />
                        ) : (
                          <span className="text-[9px] font-bold tracking-wide text-center leading-tight" style={{ color: style.color }}>{sk.name}</span>
                        )}
                      </div>
                      <span className="text-[10px] text-center leading-tight text-white/70">{sk.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] !text-white/60 pb-2 mb-3 border-b border-white/10">Built With It</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.slug}`}
                    className="d2-tile flex items-center gap-3 border border-white/15 bg-black/40 p-2 text-left"
                  >
                    <div className="relative w-16 h-12 shrink-0 overflow-hidden border border-white/10">
                      <Image src={p.images[0]} alt="" fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white truncate">{p.title.split(" — ")[0]}</p>
                      <p className="text-[11px] !text-white/50 truncate">{p.subtitle}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>,
    document.body
  );
};

export default FocusAreaPage;
