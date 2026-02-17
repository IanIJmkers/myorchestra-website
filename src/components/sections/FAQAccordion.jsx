import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../animation/AnimatedSection";

export default function FAQAccordion({ eyebrow, title, items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper bg="white">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <AnimatedSection className="mt-16 max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-2xl transition-colors duration-300 ${
                isOpen
                  ? "border-indigo-200 bg-white shadow-card"
                  : "border-slate-200/60 bg-white"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-bold text-slate-900 pr-4">
                  {item.question}
                </span>
                <motion.svg
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-5 h-5 shrink-0 text-indigo-500"
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
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-slate-500 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </AnimatedSection>
    </SectionWrapper>
  );
}
