import { useState } from "react";
import { navbarData } from "../data/navbar.data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 flex h-14 w-full items-center justify-center border-b border-gray-200/50 bg-white/30 backdrop-blur-sm">
      <nav className="flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-0">
        <a
          href={navbarData.brand.link}
          className="text-2xl font-bold transition-opacity hover:opacity-80"
        >
          {navbarData.brand.name}
        </a>

        <ul className="hidden gap-2 text-lg md:flex">
          {navbarData.links.map((link, index) => (
            <li key={index}>
              <a
                className="rounded-lg px-4 py-2 font-semibold transition-colors hover:bg-black/5"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors hover:bg-black/5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      <div
        className={`absolute top-14 left-0 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 sm:px-6">
          {navbarData.links.map((link, index) => (
            <li key={index}>
              <a
                className="block rounded-lg px-4 py-3 text-lg font-semibold transition-colors hover:bg-black/5"
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
