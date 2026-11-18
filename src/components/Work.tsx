"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PROJECTS, TABS } from "@/data/projects";
import { isReal } from "@/lib/utils";
import { Arrow, External } from "./Icon";
import { Cover } from "./ProjectDetail";

export function Work() {
  const router = useRouter();
  const [tab, setTab] = useState("All");
  const list = PROJECTS.filter((p) => tab === "All" || p.cats.includes(tab));

  return (
    <section id="work">
      <div className="sec-head">
        <p className="eyebrow">Selected work</p>
        <h2>Projects</h2>
        <p>Open any project to see what I built, how, and the numbers behind it.</p>
      </div>

      <div className="tabs" role="group" aria-label="Filter projects">
        {TABS.map((t) => (
          <button key={t} type="button" aria-pressed={t === tab} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid">
        {list.map((p) => (
          <article
            className="card"
            key={p.id}
            onClick={(e) => {
              // Clicking anywhere on the card opens the full project page.
              // Real links inside the card (Live, Code, Case study) keep their own behaviour.
              if ((e.target as HTMLElement).closest("a")) return;
              router.push(`/projects/${p.slug}`);
            }}
          >
            <div className="pcover">
              <Cover project={p} lazy />
            </div>
            <div className="cbody">
              <h3>{p.title}</h3>
              <p>{p.tagline}</p>
              <ul className="tags">
                {p.stack.slice(0, 4).map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="crow">
                <span className="ls">
                  {isReal(p.links.live) && (
                    <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                      Live <External />
                    </a>
                  )}
                  {isReal(p.links.code) && (
                    <a href={p.links.code} target="_blank" rel="noopener noreferrer">
                      Code <External />
                    </a>
                  )}
                </span>
                <Link className="more" href={`/projects/${p.slug}`} aria-label={`Case study: ${p.title}`}>
                  Case study <Arrow />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
