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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = links.map((link) => link.href.replace("#", ""));

  useEffect(() => {
    const updateActiveSection = () => {
      setActiveId(getActiveSection(sectionIds));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [sectionIds]);

  useEffect(() => {
    const syncMenuWithViewport = () => {
      if (window.innerWidth > 760) {
        setIsMobileMenuOpen(false);
      }
    };

    syncMenuWithViewport();
    window.addEventListener("resize", syncMenuWithViewport);

    return () => window.removeEventListener("resize", syncMenuWithViewport);
  }, []);

  return (
    <nav className="nav-shell" aria-label="Primary">
      <div className="nav-top-row">
        <a className="brand" href="#home" aria-label="Brian Cheng home">
          Brian Cheng
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        id="primary-navigation"
        className={isMobileMenuOpen ? "nav-list mobile-open" : "nav-list"}
      >
        {links.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = activeId === id;

          return (
            <li key={link.href}>
              <a
                className={isActive ? "nav-link active" : "nav-link"}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
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
