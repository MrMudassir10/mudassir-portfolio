import { LINKS } from "@/data/site";
import { isReal } from "@/lib/utils";
import { CountUp } from "./CountUp";

export function Hero() {
  return (
    <div className="hero">
      <div>
        <span className="pill">Open to work · 200 OK</span>
        <h1>
          I build fast, secure <em>full stack</em> web apps.
        </h1>
        <p className="lede">
          I am <b>Muhammad Mudassir</b>, a Full Stack Developer working with React.js, Next.js, Node.js and TypeScript. I design
          secure REST APIs, real-time features and AI-powered tools on the MERN and PERN stacks. I am open to full stack, frontend
          and React roles, in Pakistan or remote.
        </p>
        <div className="cta">
          <a className="btn primary" href="#contact">
            Get in touch
          </a>
          <a className="btn" href="#work">
            View my work
          </a>
          {isReal(LINKS.resume) && (
            <a className="btn" href={LINKS.resume} target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
          )}
        </div>
        <p className="trust">
          <span>
            <CountUp value="2+" delay={300} /> years of experience
          </span>
          <span>
            <CountUp value="80" delay={300} /> REST APIs built
          </span>
          <span>
            <CountUp value="16" delay={300} />
            -person Agile team
          </span>
        </p>
      </div>
      <div className="avatar-col">
        <div className="avatar">
          <div className="avatar-in">
            <img src="/avatar.jpg" alt="Muhammad Mudassir" width={480} height={480} />
          </div>
        </div>
        <p className="avatar-cap">Muhammad Mudassir · Pakistan</p>
      </div>
    </div>
  );
}
