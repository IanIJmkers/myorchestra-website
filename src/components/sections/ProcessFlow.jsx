import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { motion } from "motion/react";

export default function ProcessFlow({ eyebrow, title, steps = [] }) {
  return (
    <SectionWrapper bg="surface">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <StaggerChildren className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={staggerItem}
            className="relative bg-white border border-slate-200/60 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-3">
              <span className="text-indigo-600 font-heading font-bold text-sm">
                {String(step.number).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-heading font-bold text-slate-900 text-sm mb-2">
              {step.title}
            </h3>
            {step.description && (
              <p className="text-xs text-slate-500 leading-relaxed">
                {step.description}
              </p>
            )}
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
