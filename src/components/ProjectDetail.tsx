import type { Project } from "@/data/projects";
import { isReal, lightCover } from "@/lib/utils";
import { External } from "./Icon";
import { CountUp } from "./CountUp";

/** Image that follows the colour mode: the dark file in dark mode, the light twin in light mode. */
export function Cover({ project, lazy = false }: { project: Project; lazy?: boolean }) {
  const loading = lazy ? "lazy" : undefined;
  const alt = `${project.title} interface preview`;
  return (
    <>
      <img className="m-dark" src={project.cover} alt={alt} width={1100} height={688} loading={loading} decoding="async" />
      <img className="m-light" src={lightCover(project.cover)} alt={alt} width={1100} height={688} loading={loading} decoding="async" />
      <span className="prev">UI preview</span>
    </>
  );
}

/** The project story. Used inside the slide-over sheet and on the /projects/[slug] page. */
export function ProjectDetail({ project, asPage = false }: { project: Project; asPage?: boolean }) {
  const p = project;
  const Title = asPage ? "h1" : "h2";
  const links: [string, string, boolean][] = [
    ["Live demo", p.links.live, true],
    ["Source code", p.links.code, false],
    ["Full case study", p.links.case, false],
  ];
  const realLinks = links.filter(([, url]) => isReal(url));

  return (
    <>
      <p className="route">
        <b>GET</b> /projects/{p.slug}
      </p>
      <Title id="d-title">{p.title}</Title>
      <p className="tagline">{p.tagline}</p>
      <div className="cover">
        <Cover project={p} />
      </div>
      {p.stats.length > 0 && (
        <div className="stats">
          {p.stats.map(([n, label]) => (
            <div key={label}>
              <CountUp value={n} delay={200} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
      <h4>Overview</h4>
      <p className="body-p">{p.overview}</p>
      <h4>Highlights</h4>
      <ul className="hl">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <h4>My role</h4>
      <p className="body-p">{p.role}</p>
      <h4>Tech stack</h4>
      <ul className="tags">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      {realLinks.length > 0 && (
        <>
          <h4>Links</h4>
          <div className="plinks">
            {realLinks.map(([label, url, primary]) => (
              <a key={label} className={primary ? "btn primary" : "btn"} href={url} target="_blank" rel="noopener noreferrer">
                {label} <External />
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
