"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BaseInfo, contactData } from "@/data/data";
import Hero from "./Hero/Hero";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Research from "./Research/Research";
import Contact from "./Contact/Contact";

// Destiny-style tab menu. `id` matches the old section anchors so #projects etc. still deep-link.
const tabs = [
  { id: "home", label: "Overview", sub: "Character", Panel: Hero },
  { id: "experience", label: "Experience", sub: "Quests", Panel: Experience },
  { id: "projects", label: "Projects", sub: "Collections", Panel: Projects },
  { id: "research", label: "Research", sub: "Triumphs", Panel: Research },
  { id: "skills", label: "Skills", sub: "Inventory", Panel: Skills },
  { id: "contact", label: "Contact", sub: "Comms", Panel: Contact },
];

const Key = ({ children }: { children: React.ReactNode }) => (
  <span className="d2-key">{children}</span>
);

const Home = () => {
  const [[index, dir], setState] = useState([0, 0]);

  const go = useCallback((next: number) => {
    setState(([cur]) => {
      const i = (next + tabs.length) % tabs.length;
      return i === cur ? [cur, 0] : [i, i > cur ? 1 : -1];
    });
  }, []);

  // Deep link in, and keep the hash in sync on the way out.
  useEffect(() => {
    const i = tabs.findIndex((t) => `#${t.id}` === window.location.hash);
    if (i > 0) setState([i, 0]);
  }, []);
  useEffect(() => {
    history.replaceState(null, "", `#${tabs[index].id}`);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("input, textarea, select, [contenteditable]") || e.metaKey || e.ctrlKey) return;
      if (e.key === "q" || e.key === "Q" || e.key === "ArrowLeft") go(index - 1);
      if (e.key === "e" || e.key === "E" || e.key === "ArrowRight") go(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go]);

  // Every panel stays in the DOM (crawlers + Ctrl+F see all content); inactive ones are hidden.
  // React 19.1 only knows boolean `hidden`, so upgrade to "until-found" by hand: Chrome's find-in-page
  // can then match inside a hidden tab and fires `beforematch`, which switches to it.
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Keep the active tab visible in the (narrow-screen) scrolling tab bar. Scroll only the bar itself:
  // scrollIntoView would also scroll the overflow-hidden <main> and push the whole UI off-screen.
  const tablistRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bar = tablistRef.current;
    const tab = bar?.children[index] as HTMLElement | undefined;
    if (bar && tab) bar.scrollTo({ left: tab.offsetLeft - (bar.clientWidth - tab.offsetWidth) / 2, behavior: "smooth" });
  }, [index]);
  useEffect(() => {
    const cleanups = panelRefs.current.map((el, i) => {
      if (!el) return () => {};
      if (i === index) el.removeAttribute("hidden");
      else el.setAttribute("hidden", "until-found");
      const onMatch = () => go(i);
      el.addEventListener("beforematch", onMatch);
      return () => el.removeEventListener("beforematch", onMatch);
    });
    return () => cleanups.forEach((c) => c());
  }, [index, go]);

  return (
    <MotionConfig reducedMotion="user">
      <main className="d2-bg relative h-dvh w-full overflow-hidden flex flex-col">
        {/* Header: emblem + tab director */}
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-20 shrink-0 border-b border-white/10 bg-black/30 backdrop-blur-md"
        >
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-4 px-4 sm:px-8 pt-3 lg:pt-0">
            <div className="flex items-center gap-2 min-w-0 lg:w-56 shrink-0">
              <div className="relative w-16 h-10 shrink-0">
                {/* logo art has wide transparent margins; object-cover crops the top/bottom ones */}
                <Image src="/images/logo.png" alt="RS" fill sizes="64px" className="object-cover" priority />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold tracking-[0.2em] uppercase text-xs leading-tight truncate">
                  {BaseInfo.name}
                </p>
                <p className="!text-white/50 text-[9px] leading-tight tracking-[0.25em] uppercase truncate">
                  {BaseInfo.position}
                </p>
              </div>
            </div>
            <nav className="order-last w-full lg:order-none lg:w-auto lg:flex-1 min-w-0 flex items-center justify-center gap-2 sm:gap-4 pt-2 lg:pt-3" aria-label="Sections">
              <button onClick={() => go(index - 1)} className="hidden sm:block cursor-pointer" aria-label="Previous tab">
                <Key>Q</Key>
              </button>
              <div ref={tablistRef} className="d2-tabfade flex overflow-x-auto no-scrollbar" role="tablist">
                {tabs.map((t, i) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={i === index}
                    onClick={() => go(i)}
                    className={`relative shrink-0 px-3 sm:px-5 lg:px-3 2xl:px-5 pt-2 pb-3 cursor-pointer uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                      i === index ? "text-white" : "text-white/55 hover:text-white"
                    }`}
                  >
                    {t.label}
                    <span className="block text-[10px] tracking-[0.15em] font-normal text-white/45 normal-case">{t.sub}</span>
                    {i === index && (
                      <motion.span
                        layoutId="d2-tab-underline"
                        className="absolute left-2 right-2 bottom-0 h-[3px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <button onClick={() => go(index + 1)} className="hidden sm:block cursor-pointer" aria-label="Next tab">
                <Key>E</Key>
              </button>
            </nav>
            <div className="flex items-center gap-4 text-white/60 lg:w-56 lg:justify-end shrink-0">
              <a href="https://www.linkedin.com/in/rajesh-sawant11/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedin /></a>
              <a href="https://github.com/rajeshsawant98" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors"><FaGithub /></a>
              <a href={`mailto:${contactData.email}`} aria-label="Email" className="hover:text-white transition-colors"><FaEnvelope /></a>
            </div>
          </div>
        </motion.header>

        {/* Sliding panels */}
        <div className="relative flex-1 min-h-0">
          {tabs.map(({ id, Panel }, i) => {
            const content = i === 0 ? <Hero onJump={(tab) => go(tabs.findIndex((t) => t.id === tab))} /> : <Panel />;
            return (
              <div
                key={id}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                hidden={i !== index}
                role="tabpanel"
                aria-label={tabs[i].label}
                // "until-found" hides contents but keeps the box, so inactive panels must not catch scroll/touch.
                className={`absolute inset-0 overflow-y-auto d2-scroll ${i === index ? "z-10" : "pointer-events-none"}`}
              >
                {i === index ? (
                  <motion.div
                    initial={dir === 0 ? false : { x: dir * 120, opacity: 0, filter: "blur(6px)" }}
                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="min-h-full flex flex-col"
                  >
                    {content}
                  </motion.div>
                ) : (
                  <div className="min-h-full flex flex-col">{content}</div>
                )}
              </div>
            );
          })}
          {/* Light sweep on tab change */}
          <motion.div
            key={`sweep-${index}`}
            initial={{ x: "-100%", opacity: 0.6 }}
            animate={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>

      </main>
    </MotionConfig>
  );
};

export default Home;
