import Link from "next/link";
import { FAQ, HELP, JOBS, SERVICES, SKILLS, STATS, STEPS, TICKER } from "@/data/content";
import { LINKS } from "@/data/site";
import { isReal } from "@/lib/utils";
import { AskButton } from "./AskButton";
import { CopyButton } from "./CopyButton";
import { CountUp } from "./CountUp";
import { Icon, Logo } from "./Icon";

export function Ticker() {
  return (
    <div className="ticker" aria-label="Technologies I use">
      <div className="track">
        {[...TICKER, ...TICKER].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function Proof() {
  return (
    <section id="proof">
      <div className="sec-head">
        <p className="eyebrow">Proof, from real projects</p>
        <h2>Built, measured, tested.</h2>
      </div>
      <div className="stats-band">
        {STATS.map((s) => (
          <div className="stat hv" key={s.l}>
            <div className="ibox">
              <Icon name={s.ic} />
            </div>
            <CountUp value={s.n} delay={100} whenVisible />
            <span>{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const HELP_ICONS = ["lock", "gauge", "live", "headset"];

export function Help() {
  return (
    <section id="help">
      <div className="sec-head">
        <p className="eyebrow">What I bring to a team</p>
        <h2>Four problems I solve well.</h2>
        <p>Each one comes from work I have already done.</p>
      </div>
      <div className="pgrid">
        {HELP.map((h, i) => (
          <div className="pcard hv" key={h.q}>
            <div className="ibox">
              <Icon name={HELP_ICONS[i] ?? "shield"} />
            </div>
            <p className="q">{h.q}</p>
            <p className="a">{h.a}</p>
            <p className="proof">{h.proof}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services">
      <div className="sec-head">
        <p className="eyebrow">Services</p>
        <h2>What I can build for you.</h2>
      </div>
      <div className="sgrid">
        {SERVICES.map((s) => (
          <div className="scard hv" key={s.t}>
            <div className="ibox">
              <Icon name={s.ic} />
            </div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <ul className="tags">
              {s.tags.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process">
      <div className="sec-head">
        <p className="eyebrow">How I work</p>
        <h2>From first call to release.</h2>
      </div>
      <div className="steps">
        {STEPS.map((s, i) => (
          <div className="step" key={s.t}>
            <span className="no">0{i + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <div className="sec-head">
        <p className="eyebrow">Skills</p>
        <h2>What I work with.</h2>
        <p>Grouped the way a project is built.</p>
      </div>
      <dl className="skills">
        {SKILLS.map(([group, items, soft]) => (
          <div className="srow" key={group}>
            <dt>{group}</dt>
            <dd>
              {items.map((item) => (
                <span key={item} className={soft ? "soft" : undefined}>
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <div className="sec-head">
        <p className="eyebrow">Experience</p>
        <h2>Where I have worked.</h2>
      </div>
      <div className="tl">
        {JOBS.map((j) => (
          <div className="job" key={j.when}>
            <div className="when">{j.when}</div>
            <div>
              <h3>{j.title}</h3>
              <p className="org">{j.org}</p>
              <ul>
                {j.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about">
      <div className="sec-head">
        <p className="eyebrow">About</p>
        <h2>A little more about me.</h2>
      </div>
      <div className="about">
        <div>
          <p className="eyebrow">Based in</p>
          <h3>Pakistan</h3>
          <p>Open to roles in Pakistan and remote work abroad.</p>
        </div>
        <div>
          <p className="eyebrow">Education</p>
          <h3>BSc Computer Science</h3>
          <p>BSCS, GPA 3.33 / 4.00. Strong in OOP, data structures and algorithms.</p>
        </div>
        <div>
          <p className="eyebrow">Languages</p>
          <h3>Urdu · English</h3>
          <p>Urdu (native). English (professional working proficiency).</p>
        </div>
        <div>
          <p className="eyebrow">Looking for</p>
          <h3>Full stack, frontend, React</h3>
          <p>Product teams that care about clean APIs and fast interfaces.</p>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq">
      <div className="sec-head">
        <p className="eyebrow">FAQ</p>
        <h2>Quick answers.</h2>
      </div>
      <div className="faq">
        {FAQ.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      <div className="faq-ask">
        <AskButton>Ask the AI assistant</AskButton>
        <span className="sub">Or email me and I will reply.</span>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact">
      <div className="closing">
        <p className="eyebrow">Contact</p>
        <h2>Looking for a developer? Let us talk.</h2>
        <p>I am open to full stack, frontend and React roles. Send me a message and I will reply by email.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${LINKS.email}`}>
            Email me
          </a>
          {isReal(LINKS.whatsapp) && (
            <a className="btn" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
          {isReal(LINKS.linkedin) && (
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
        <div className="mail-line">
          <span>
            <span>{LINKS.email}</span> <CopyButton text={LINKS.email} />
          </span>
          <span>
            <span>{LINKS.phone}</span> <CopyButton text={LINKS.phone} />
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const connect: [string, string][] = [
    ["GitHub", LINKS.github],
    ["LinkedIn", LINKS.linkedin],
    ["X", LINKS.x],
    ["WhatsApp", LINKS.whatsapp],
    ["Resume", LINKS.resume],
  ];
  return (
    <footer>
      <div>
        <Link className="logo" href="/">
          <Logo />
          <span className="lt">
            Mudassir<span>.</span>
          </span>
        </Link>
        <p>Full stack developer building secure, fast web apps with React, Node.js and AI.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          {["work", "services", "process", "skills", "experience", "faq"].map((id) => (
            <li key={id}>
              <Link href={`/#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Connect</h4>
        <ul>
          {connect
            .filter(([, url]) => isReal(url))
            .map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className="copy">
        <span>© {new Date().getFullYear()} Muhammad Mudassir</span>
        <span>Pakistan</span>
      </div>
    </footer>
  );
}
