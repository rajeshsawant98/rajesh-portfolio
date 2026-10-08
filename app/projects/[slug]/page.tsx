import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaFileAlt, FaGithub } from "react-icons/fa";
import { projectData } from "@/data/data";
import ProjectImageCarousel from "@/components/Home/Projects/ProjectImageCarousel";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Rajesh Sawant`,
    description: project.highlights.join(" "),
    openGraph: { images: [project.images[0]] },
  };
}

const linkClass =
  "flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-accent-purple text-sm font-semibold transition-colors";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projectData.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projectData[index];
  const prev = projectData[(index - 1 + projectData.length) % projectData.length];
  const next = projectData[(index + 1) % projectData.length];

  return (
    <main className="bg-primary-bg min-h-screen pt-[14vh] pb-20">
      <article className="w-[85%] max-w-5xl mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent-purple-light mb-8">
          <FaArrowLeft className="text-xs" /> All projects
        </Link>

        {/* Header */}
        <p className="text-accent-purple-light text-xs font-semibold tracking-[0.25em] uppercase mb-3">{project.badge}</p>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{project.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{project.subtitle}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {[project.period, project.role].filter(Boolean).join(" · ")}
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          {project.url && project.url !== project.githubLink && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaExternalLinkAlt className="text-xs" /> Live site
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaGithub /> Code
            </a>
          )}
          {project.paperUrl && (
            <a href={project.paperUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaFileAlt className="text-xs" /> Paper (IEEE Xplore)
            </a>
          )}
        </div>

        {/* Screenshots */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-card-dark mb-12">
          <ProjectImageCarousel images={project.images} alt={project.title} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-4">Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="text-accent-purple mt-0.5">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              <p className="leading-relaxed">{project.description}</p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">Architecture</h2>
              <ul className="space-y-3">
                {project.architecturePoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent-purple flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside>
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light text-xs px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {/* Prev / next */}
        <nav className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between gap-4 text-sm" aria-label="More projects">
          <Link href={`/projects/${prev.slug}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-purple-light">
            <FaArrowLeft className="text-xs" /> {prev.title.split(" — ")[0]}
          </Link>
          <Link href={`/projects/${next.slug}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent-purple-light text-right">
            {next.title.split(" — ")[0]} <FaArrowRight className="text-xs" />
          </Link>
        </nav>
      </article>
    </main>
  );
}
