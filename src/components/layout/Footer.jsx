import { Link } from "react-router";
import { siteMetadata } from "../../data/siteMetadata";

export default function Footer() {
  const quickLinks = [
    { label: "Oplossingen", path: "/Oplossingen/project-administration" },
    { label: "Onze Klanten", path: "/clients" },
    { label: "Over Ons", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { label: "Algemene Voorwaarden", href: "#" },
    { label: "Privacyverklaring", href: "#" },
    { label: "Cookieverklaring", href: "#" },
  ];

  return (
    <footer className="bg-indigo-950">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-heading font-bold text-white">
                {siteMetadata.companyName}
              </span>
            </div>
            <p className="text-indigo-300 text-sm leading-relaxed">
              {siteMetadata.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-teal-400 mb-6">
              Ontdek
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-indigo-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-teal-400 mb-6">
              Juridisch
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-indigo-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase text-teal-400 mb-6">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-indigo-300">
              <p>
                {siteMetadata.address.street}
                <br />
                {siteMetadata.address.postalCode} {siteMetadata.address.city}
              </p>
              <p>
                <a
                  href={`tel:${siteMetadata.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteMetadata.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteMetadata.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-indigo-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-indigo-400">
              &copy; {new Date().getFullYear()} {siteMetadata.fullName}. Alle
              rechten voorbehouden. KVK {siteMetadata.kvk} Den Haag.
            </p>
            <p className="text-xs text-indigo-500">
              {siteMetadata.companyName} is onderdeel van{" "}
              <a
                href={siteMetadata.parentSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-white transition-colors"
              >
                {siteMetadata.parentCompany}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
