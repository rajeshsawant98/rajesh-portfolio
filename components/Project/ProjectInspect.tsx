"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaFileAlt, FaGithub } from "react-icons/fa";
import { LuArrowLeft, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { projectData, skillsGroups, focusSkillGroups } from "@/data/data";

export type Rarity = "d2-exotic" | "d2-legendary" | "d2-rare";

export const projectRarity = (badge: string): Rarity =>
  badge === "PRODUCTION" ? "d2-exotic" : badge === "IEEE COMPSAC 2025" ? "d2-legendary" : "d2-rare";

// Tech stack names → existing skill icons. Exact name match first, then a few aliases.
const iconByName = new Map<string, { icon: string; darkIcon?: boolean }>();
for (const g of [...skillsGroups, ...focusSkillGroups])
  for (const sk of g.skills as { name: string; icon?: string; darkIcon?: boolean }[])
    if (sk.icon) iconByName.set(sk.name.toLowerCase(), { icon: sk.icon, darkIcon: sk.darkIcon });
const aliases: Record<string, string> = {
  "aws s3": "aws",
  "aws sqs": "aws",
  "openai batch api": "openai api",
  "rdf/ttl": "rdf",
  "semantic web": "rdf",
  "google sso": "firebase",
};
const techIcon = (t: string) => iconByName.get(t.toLowerCase()) ?? iconByName.get(aliases[t.toLowerCase()] ?? "");
const extraIcons: Record<string, string> = { mapbox: "/images/skills/mapbox.svg" };

const ProjectInspect = ({ index }: { index: number }) => {
  const router = useRouter();
  const project = projectData[index];
  const prev = projectData[(index - 1 + projectData.length) % projectData.length];
  const next = projectData[(index + 1) % projectData.length];
  const rarity = projectRarity(project.badge);
  const [shot, setShot] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) return;
      const k = e.key.toLowerCase();
      if (k === "escape") router.push("/#projects");
      else if (k === "q") router.push(`/projects/${prev.slug}`);
      else if (k === "e") router.push(`/projects/${next.slug}`);
      else if (k === "arrowleft") setShot((s) => (s - 1 + project.images.length) % project.images.length);
      else if (k === "arrowright") setShot((s) => (s + 1) % project.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prev.slug, next.slug, project.images.length]);

  return (
    <main className="d2-bg relative min-h-dvh w-full overflow-x-hidden">
      {/* Top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between gap-4 px-4 sm:px-8 py-3 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <Link href="/#projects" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white">
          <LuArrowLeft /> Projects <span className="d2-key hidden sm:inline-flex">Esc</span>
        </Link>
        <nav className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]" aria-label="Other projects">
          <Link href={`/projects/${prev.slug}`} className="flex items-center gap-2 text-white/60 hover:text-white" aria-label={`Previous: ${prev.title}`}>
            <span className="d2-key hidden sm:inline-flex">Q</span>
            <LuChevronLeft className="sm:hidden" />
          </Link>
          <span className="text-white/40">
            {index + 1} / {projectData.length}
          </span>
          <Link href={`/projects/${next.slug}`} className="flex items-center gap-2 text-white/60 hover:text-white" aria-label={`Next: ${next.title}`}>
            <LuChevronRight className="sm:hidden" />
            <span className="d2-key hidden sm:inline-flex">E</span>
          </Link>
        </nav>
      </header>

      <motion.div
        key={project.slug}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 lg:gap-12"
      >
        {/* Screenshot viewer */}
        <div className="min-w-0">
          <div className="relative aspect-video border border-white/20 bg-black/60 overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={shot}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.images[shot]}
                  alt={`${project.title} screenshot ${shot + 1}`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <span className={`absolute bottom-0 inset-x-0 h-1 ${rarity}`} />
          </div>
          <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
            {project.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setShot(i)}
                aria-label={`Show screenshot ${i + 1}`}
                className={`d2-tile relative w-24 h-14 shrink-0 border overflow-hidden cursor-pointer ${
                  i === shot ? "border-white" : "border-white/15 opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>
          <p className="hidden sm:block mt-2 text-[10px] uppercase tracking-[0.25em] text-white/30">
            <span className="d2-key mr-1">←</span>
            <span className="d2-key mr-2">→</span> Browse screenshots
          </p>
        </div>

        {/* Item details */}
        <div className="min-w-0">
          <div className={`${rarity} px-5 py-4`}>
            <h1 className="text-white text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-tight">{project.title.split(" — ")[0]}</h1>
            <p className="!text-white/80 text-xs uppercase tracking-[0.2em] mt-1">
              {project.badge}
            </p>
          </div>
          <div className="bg-[#0d1117]/90 border border-white/10 border-t-0 px-5 py-5 space-y-6">
            <div>
              <p className="!text-white/90 text-sm font-semibold">{project.subtitle}</p>
              <p className="!text-white/65 text-sm leading-relaxed mt-2">{project.description}</p>
            </div>

            {(project.url || project.githubLink || project.paperUrl) && (
              <div className="flex flex-wrap gap-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/60 text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live
                  </a>
                )}
                {project.paperUrl && (
                  <a
                    href={project.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/60 text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
                  >
                    <FaFileAlt className="text-[10px]" /> Paper
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/25 text-white/80 text-xs font-semibold uppercase tracking-[0.2em] hover:border-white hover:text-white transition-colors"
                  >
                    <FaGithub /> Source
                  </a>
                )}
              </div>
            )}

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] !text-white/50 pb-2 mb-3 border-b border-white/10">Architecture</p>
              <ul className="space-y-3">
                {project.architecturePoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                    <span className="mt-0.5 w-4 h-4 shrink-0 rounded-full border border-white/50 bg-[#5076a3]/60" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] !text-white/50 pb-2 mb-3 border-b border-white/10">Built With</p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((t) => {
                  const ic = techIcon(t);
                  const src = ic?.icon ?? extraIcons[t.toLowerCase()];
                  // Logo tiles get a caption; logo-less tech is a single text chip (no duplicated name).
                  return src ? (
                    <div key={t} className="flex flex-col items-center gap-1.5 w-[68px]">
                      <div className="d2-tile w-12 h-12 border border-white/20 bg-black/50 p-2 flex items-center justify-center">
                        <Image
                          src={src}
                          alt=""
                          width={32}
                          height={32}
                          className={`w-full h-full object-contain ${ic?.darkIcon ? "invert brightness-200" : ""}`}
                        />
                      </div>
                      <span className="text-[11px] text-center leading-tight text-white/75">{t}</span>
                    </div>
                  ) : (
                    <span key={t} className="self-start mt-2 px-3 py-1.5 border border-white/20 bg-black/40 text-xs text-white/80">
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default ProjectInspect;
