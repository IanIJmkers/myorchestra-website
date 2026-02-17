import { Link } from "react-router";

export default function Card({
  icon,
  title,
  description,
  href,
  ctaText = "Meer informatie",
  accentTop = false,
  className = "",
  children,
}) {
  const content = (
    <div
      className={`bg-white border border-slate-200/60 rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
        accentTop
          ? "border-t-4 border-t-transparent bg-clip-padding"
          : ""
      } group-hover:border-indigo-200 ${className}`}
      style={
        accentTop
          ? {
              borderImage: "linear-gradient(to right, #6366F1, #14B8A6) 1",
              borderImageSlice: "1 0 0 0",
            }
          : undefined
      }
    >
      {icon && <div className="mb-6 text-indigo-500">{icon}</div>}
      {title && (
        <h3 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 mb-4">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-slate-500 leading-relaxed grow">{description}</p>
      )}
      {children}
      {href && (
        <div className="mt-6 pt-4 border-t border-slate-100">
          <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-500 transition-colors">
            {ctaText} &rarr;
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="group block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
