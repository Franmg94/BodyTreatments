import React from "react";
import { NAVIGATION_LINKS, PROFILE } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 lg:top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto px-8 hidden max-w-2-xl  justify-between rounded-lg gap-6 py-3 text-white lg:flex">
          <a href="/">
            <h2 className="font-bold space antialiased tracking-widest">
              Book Now
            </h2>
          </a>

          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:font-semibold hover:text-medium-blue"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <button className="pl-4 text-white">Book Now</button>
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5 text-white" />
              ) : (
                <FaBars className="m-2 h-6 w-5 text-white" />
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block w-full text-xl font-semibold text-white"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
