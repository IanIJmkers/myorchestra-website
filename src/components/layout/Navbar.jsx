import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { navigation } from "../../data/navigation";
import { siteMetadata } from "../../data/siteMetadata";
import useScrollDirection from "../../hooks/useScrollDirection";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();
  const location = useLocation();

  const isScrolled = scrollY > 20;
  const isHidden = scrollDirection === "down" && scrollY > 200;

  const isHomePage = location.pathname === "/";
  const useTransparent = isHomePage && !isScrolled;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useTransparent
            ? "bg-transparent"
            : "bg-white/80 backdrop-blur-xl shadow-nav"
        }`}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-600 to-teal-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">M</span>
              </div>
              <span
                className={`text-xl font-heading font-bold ${
                  useTransparent ? "text-white" : "text-slate-900"
                }`}
              >
                {siteMetadata.companyName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setOpenDropdown(item.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                        useTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                      } ${
                        location.pathname === item.path
                          ? useTransparent
                            ? "text-white"
                            : "text-slate-900"
                          : ""
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 transition-transform duration-200 origin-left ${
                          location.pathname === item.path
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  ) : (
                    <button
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                        useTransparent
                          ? "text-white/90 hover:text-white"
                          : "text-slate-600 hover:text-slate-900"
                      } ${
                        location.pathname.startsWith("/Oplossingen")
                          ? useTransparent
                            ? "text-white"
                            : "text-slate-900"
                          : ""
                      }`}
                    >
                      {item.label}
                      <svg
                        className="inline-block ml-1 w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 transition-transform duration-200 origin-left ${
                          location.pathname.startsWith("/Oplossingen")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <NavDropdown items={item.children} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteMetadata.loginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-colors duration-200"
              >
                Mijn Orchestra
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className={`w-6 h-6 ${
                  useTransparent ? "text-white" : "text-slate-900"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
