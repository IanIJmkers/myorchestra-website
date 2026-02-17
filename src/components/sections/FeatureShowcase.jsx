import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";

export default function FeatureShowcase({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  bg = "white",
}) {
  return (
    <SectionWrapper bg={bg}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <AnimatedSection
          direction={reverse ? "right" : "left"}
          className={reverse ? "lg:order-2" : ""}
        >
          <div className="rounded-2xl overflow-hidden border border-slate-200/60 shadow-card">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
        <AnimatedSection
          direction={reverse ? "left" : "right"}
          delay={0.15}
          className={reverse ? "lg:order-1" : ""}
        >
          {eyebrow && (
            <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
            {title}
          </h2>
          <p className="text-slate-500 leading-relaxed">{description}</p>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
