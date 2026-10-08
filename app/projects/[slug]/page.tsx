import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectData } from "@/data/data";
import ProjectInspect from "@/components/Project/ProjectInspect";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title.split(" — ")[0]} | Rajesh Sawant`,
    description: project.description,
    openGraph: { images: [project.images[0]] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projectData.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  return <ProjectInspect key={slug} index={index} />;
}
