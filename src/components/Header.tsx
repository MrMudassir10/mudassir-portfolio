import Link from "next/link";
import { Logo } from "./Icon";
import { ModeToggle } from "./ModeToggle";

const NAV = [
  ["work", "Work"],
  ["services", "Services"],
  ["process", "Process"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["faq", "FAQ"],
] as const;

export function Header() {
  return (
    <header className="top">
      <div className="top-in">
        <Link className="logo" href="/">
          <Logo />
          <span className="lt">
            Mudassir<span>.</span>
          </span>
        </Link>
        <nav aria-label="Sections">
          {NAV.map(([id, label]) => (
            <Link key={id} className="nl" href={`/#${id}`}>
              {label}
            </Link>
          ))}
          <ModeToggle />
          <Link className="btn primary" href="/#contact">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
