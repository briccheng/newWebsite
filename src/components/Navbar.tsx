import { useEffect, useState } from "react";
import type { NavLink } from "../data/site";

type NavbarProps = {
  links: NavLink[];
};

const getActiveSection = (ids: string[]) => {
  const scrollOffset = window.scrollY + 160;

  for (let index = ids.length - 1; index >= 0; index -= 1) {
    const section = document.getElementById(ids[index]);

    if (section && section.offsetTop <= scrollOffset) {
      return ids[index];
    }
  }

  return ids[0] ?? "";
};

export default function Navbar({ links }: NavbarProps) {
  const [activeId, setActiveId] = useState("home");
  const sectionIds = links.map((link) => link.href.replace("#", ""));

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveId(getActiveSection(sectionIds));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [sectionIds]);

  return (
    <nav className="nav-shell" aria-label="Primary">
      <a className="brand" href="#home" aria-label="Brian Cheng home">
        Brian Cheng
      </a>
      <ul className="nav-list">
        {links.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = activeId === id;

          return (
            <li key={link.href}>
              <a
                className={isActive ? "nav-link active" : "nav-link"}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
