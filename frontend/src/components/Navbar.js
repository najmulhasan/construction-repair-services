import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../images/service Logo3.jpg";
import useAuth from "../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [colorScheme, setColorScheme] = useState({
    background: "bg-white",
    text: "text-gray-700",
    shadow: "shadow-lg",
    hover: "hover:text-blue-600",
    activeLink: "text-blue-600",
    logo: "filter-none",
    mobileBg: "bg-white",
  });

  // Contact information
  const contactInfo = {
    phone: "+6586187859",
    whatsapp: "+6586187859",
  };

  // Define color schemes based on routes - with more contrast
  const routeColorSchemes = {
    // Default scheme (white background, dark text)
    default: {
      background: "bg-white",
      text: "text-gray-700",
      shadow: "shadow-lg",
      hover: "hover:text-blue-600",
      activeLink: "text-blue-600 font-bold",
      logo: "filter-none",
      mobileBg: "bg-white",
    },
    // Home page at top (dark transparent background with white text)
    home: {
      background: "bg-home-nav",
      text: "text-white",
      shadow: "shadow-none",
      hover: "hover:text-yellow-300",
      activeLink: "text-yellow-300 font-bold",
      logo: "brightness-0 invert",
      mobileBg: "bg-gray-800",
    },
    // Services page (blue background)
    services: {
      background: "bg-blue-600",
      text: "text-white",
      shadow: "shadow-md",
      hover: "hover:text-yellow-200",
      activeLink: "text-yellow-200 font-bold",
      logo: "brightness-0 invert",
      mobileBg: "bg-blue-600",
    },
    // Contact page (dark background)
    contact: {
      background: "bg-gray-900",
      text: "text-gray-100",
      shadow: "shadow-xl",
      hover: "hover:text-green-300",
      activeLink: "text-green-300 font-bold",
      logo: "brightness-0 invert",
      mobileBg: "bg-gray-900",
    },
    // About page (green background)
    about: {
      background: "bg-green-600",
      text: "text-white",
      shadow: "shadow-md",
      hover: "hover:text-yellow-200",
      activeLink: "text-yellow-200 font-bold",
      logo: "brightness-0 invert",
      mobileBg: "bg-green-600",
    },
    // Blogs page (purple background)
    blogs: {
      background: "bg-purple-600",
      text: "text-white",
      shadow: "shadow-md",
      hover: "hover:text-yellow-200",
      activeLink: "text-yellow-200 font-bold",
      logo: "brightness-0 invert",
      mobileBg: "bg-purple-600",
    },
    // Scrolled state (white background with shadow)
    scrolled: {
      background: "bg-white",
      text: "text-gray-700",
      shadow: "shadow-md",
      hover: "hover:text-blue-600",
      activeLink: "text-blue-600 font-bold",
      logo: "filter-none",
      mobileBg: "bg-white",
    },
  };

  useEffect(() => {
    // Determine initial color scheme based on route
    updateColorScheme();

    // Handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Update color scheme whenever scroll state or route changes
  useEffect(() => {
    updateColorScheme();
  }, [scrolled, location.pathname]);

  const updateColorScheme = () => {
    // If scrolled, use scrolled color scheme
    if (scrolled) {
      setColorScheme(routeColorSchemes.scrolled);
      return;
    }

    // Otherwise, set color scheme based on route
    if (location.pathname === "/") {
      setColorScheme(routeColorSchemes.home);
    } else if (location.pathname.includes("/services")) {
      setColorScheme(routeColorSchemes.services);
    } else if (location.pathname.includes("/contact")) {
      setColorScheme(routeColorSchemes.contact);
    } else if (location.pathname.includes("/about")) {
      setColorScheme(routeColorSchemes.about);
    } else if (location.pathname.includes("/blogs")) {
      setColorScheme(routeColorSchemes.blogs);
    } else {
      setColorScheme(routeColorSchemes.default);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServiceMenu = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  const serviceCategories = [
    {
      name: "Plumbing",
      path: "plumbing-service",
    },
    { name: "Electrical", path: "electrical-service" },
    { name: "Painting", path: "painting-service" },
    {
      name: "AC Repairing",
      path: "ac-repairing",
    },
    { name: "Construction Work", path: "construction-work" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {user?.email && (
        <div className="bg-blue-600 text-white py-1 px-4">
          <div className="max-w-7xl mx-auto flex justify-end items-center">
            <div className="text-sm">
              Welcome, <span className="font-semibold">{user.name}</span>
            </div>
          </div>
        </div>
      )}

      {/* Page indicator badge */}
      <div className="fixed top-5 right-5 z-50 px-3 py-1 rounded-full text-sm font-bold shadow-md page-indicator hidden md:block">
        {location.pathname === "/" && (
          <span className="text-white bg-blue-600 px-3 py-1 rounded-full">
            Home
          </span>
        )}
        {location.pathname.includes("/services") && (
          <span className="text-white bg-blue-600 px-3 py-1 rounded-full">
            Services
          </span>
        )}
        {location.pathname.includes("/contact") && (
          <span className="text-white bg-gray-900 px-3 py-1 rounded-full">
            Contact
          </span>
        )}
        {location.pathname.includes("/about") && (
          <span className="text-white bg-green-600 px-3 py-1 rounded-full">
            About
          </span>
        )}
        {location.pathname.includes("/blogs") && (
          <span className="text-white bg-purple-600 px-3 py-1 rounded-full">
            Blogs
          </span>
        )}
      </div>

      <nav
        className={`${colorScheme.background} ${colorScheme.shadow} transition-all duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className={`h-8 w-auto ${colorScheme.logo} transition-all duration-300`}
                  src={logo}
                  alt="Construction and Repair Service"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${colorScheme.text} ${
                    isActive ? colorScheme.activeLink : colorScheme.hover
                  } 
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${colorScheme.text} ${
                    isActive ? colorScheme.activeLink : colorScheme.hover
                  } 
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`
                }
              >
                About
              </NavLink>
              <div className="relative">
                <button
                  onClick={toggleServiceMenu}
                  className={`${colorScheme.text} ${colorScheme.hover} 
                  px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-300`}
                >
                  Services
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServiceOpen && (
                  <div className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.path}
                          to={`/services/${category.path}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsServiceOpen(false)}
                        >
                          <div className="flex items-center">
                            {category.image && (
                              <div className="w-10 h-10 mr-3 rounded overflow-hidden">
                                <img
                                  src={category.image}
                                  alt={category.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <span>{category.name}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `${colorScheme.text} ${
                    isActive ? colorScheme.activeLink : colorScheme.hover
                  } 
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${colorScheme.text} ${
                    isActive ? colorScheme.activeLink : colorScheme.hover
                  } 
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`
                }
              >
                Contact
              </NavLink>

              {/* Contact and WhatsApp links */}
              <a
                href={`tel:${contactInfo.phone}`}
                className={`${colorScheme.text} ${colorScheme.hover} 
                px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(
                  /\D/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colorScheme.text} ${colorScheme.hover} 
                px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md ${colorScheme.text} ${colorScheme.hover} hover:bg-opacity-20 focus:outline-none transition-colors duration-300`}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            colorScheme.mobileBg
          } border-t border-gray-200 shadow-md text-${
            colorScheme.text === "text-white" ? "white" : "gray-700"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                colorScheme.text === "text-white"
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } hover:text-blue-600`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                colorScheme.text === "text-white"
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } hover:text-blue-600`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={toggleServiceMenu}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  colorScheme.text === "text-white"
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                } hover:text-blue-600 inline-flex items-center justify-between`}
              >
                Services
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isServiceOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                  />
                </svg>
              </button>
              {isServiceOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={`/services/${category.path}`}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        colorScheme.text === "text-white"
                          ? "text-white hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100"
                      } hover:text-blue-600`}
                      onClick={() => {
                        setIsServiceOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      <div className="flex items-center">
                        {category.image && (
                          <div className="w-10 h-10 mr-3 rounded overflow-hidden">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <span>{category.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/blogs"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                colorScheme.text === "text-white"
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } hover:text-blue-600`}
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                colorScheme.text === "text-white"
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } hover:text-blue-600`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href={`tel:${contactInfo.phone}`}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                colorScheme.text === "text-white"
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } hover:text-blue-600 flex items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us: {contactInfo.phone}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                colorScheme.text === "text-white"
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100"
              } hover:text-blue-600 flex items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
