import AnimatedSection from "../animation/AnimatedSection";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <AnimatedSection className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full ${
            light
              ? "bg-white/10 text-teal-300"
              : "bg-indigo-50 text-indigo-600"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-linear-to-r from-indigo-500 to-teal-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-indigo-200" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
