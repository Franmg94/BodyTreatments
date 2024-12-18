import React from "react";
import { NAVIGATION_LINKS, PROFILE } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import { useFormContext } from "./FormContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { toggleForm } = useFormContext();

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
      <nav className="absolute left-0 right-0 lg:top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto px-8 hidden max-w-2-xl  justify-between rounded-lg gap-6 py-3 text-white lg:flex">
          <button
            onClick={toggleForm}
            className=" hover:font-semibold hover:text-light-gray space antialiased tracking-widest"
          >
            Book Now
          </button>

          <div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:font-semibold hover:text-light-gray"
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
        <div className="fixed w-full bg-white shadow-md lg:hidden">
          <div className="flex items-center justify-between">
            <button onClick={toggleForm} className=" button-nav--mobile">
              Book Now
            </button>
            <button
              className="focus:outline-none lg:hidden"
              onClick={toggleMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5 text-black" />
              ) : (
                <FaBars className="m-2 h-6 w-5 text-black" />
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <>
              <div className="border-t border-gray-200"></div>
              <ul className="ml-4  p-4 flex flex-col gap-4 ">
                {NAVIGATION_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="block w-full text-xl font-semibold text-black"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
