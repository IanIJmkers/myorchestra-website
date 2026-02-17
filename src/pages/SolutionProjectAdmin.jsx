import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import FeatureShowcase from "../components/sections/FeatureShowcase";
import ProcessFlow from "../components/sections/ProcessFlow";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import { modules } from "../data/modules";

const mod = modules.find((m) => m.id === "project-administration");
const otherModules = modules.filter((m) => m.id !== "project-administration");

export default function SolutionProjectAdmin() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            {mod.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-indigo-200 max-w-2xl"
          >
            {mod.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Key Features */}
      <SectionWrapper bg="white">
        <SectionHeading
          eyebrow="Kernfunctionaliteiten"
          title="Alles voor uw projectbeheer"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mod.keyFeatures.map((feature, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5">
                <span className="text-indigo-600 font-heading font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Detailed Feature Sections */}
      {mod.detailedFeatures.map((feature, i) => (
        <FeatureShowcase
          key={i}
          eyebrow={feature.eyebrow}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.image}
          imageAlt={feature.title}
          reverse={i % 2 !== 0}
          bg={i % 2 === 0 ? "surface" : "white"}
        />
      ))}

      {/* Process Flow */}
      <ProcessFlow
        eyebrow="Werkproces"
        title="Zo werkt de projectadministratie"
        steps={mod.processSteps}
      />

      {/* FAQ */}
      <FAQAccordion
        eyebrow="Veelgestelde Vragen"
        title="Heeft u vragen?"
        items={mod.faq}
      />

      {/* Other Modules */}
      <SectionWrapper bg="surface" size="md">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            Ontdek ook onze andere modules
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherModules.map((m) => (
            <Link
              key={m.id}
              to={m.path}
              className="group block bg-white border border-slate-200/60 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-heading font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2">
                {m.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title="Direct advies van een specialist?"
        subtitle="Maak nu een afspraak met een van onze MyOrchestra-specialisten. Dan kijken we samen hoe we uw rust en overzicht aanzienlijk kunnen verhogen."
      />
    </PageTransition>
  );
}
