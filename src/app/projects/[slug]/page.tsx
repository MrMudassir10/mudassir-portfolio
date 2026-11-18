import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChatWidget } from "@/components/ChatWidget";
import { Header } from "@/components/Header";
import { Arrow } from "@/components/Icon";
import { ProjectDetail } from "@/components/ProjectDetail";
import { PROJECTS } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.tagline, images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="wrap" id="top">
        <div className="sheet page">
          <p style={{ marginBottom: 20 }}>
            <Link className="btn" href="/#work">
              <span style={{ display: "inline-flex", transform: "rotate(180deg)" }}>
                <Arrow />
              </span>{" "}
              All projects
            </Link>
          </p>
          <ProjectDetail project={project} asPage />
        </div>
      </main>
      <ChatWidget />
    </>
  );
}
