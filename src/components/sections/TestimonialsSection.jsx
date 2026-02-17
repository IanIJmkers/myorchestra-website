import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <SectionWrapper bg="surface">
      <SectionHeading
        eyebrow="Wat Klanten Zeggen"
        title="Vertrouwd door stichtingen en verenigingen"
        subtitle="Ontdek hoe onze klanten MyOrchestra inzetten voor hun dagelijkse werkzaamheden."
      />

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            {/* Quote mark */}
            <span className="block text-5xl font-heading text-indigo-200 leading-none mb-4">
              &ldquo;
            </span>

            <blockquote className="text-slate-700 text-base leading-relaxed mb-6">
              {testimonial.quote}
            </blockquote>

            <div className="h-px bg-linear-to-r from-indigo-200 to-teal-200 mb-4" />

            <div>
              <div className="text-sm font-semibold text-slate-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-slate-400">
                {testimonial.role}, {testimonial.organization}
              </div>
            </div>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
