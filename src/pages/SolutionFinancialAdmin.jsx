import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import { modules } from "../data/modules";

const mod = modules.find((m) => m.id === "financial-administration");
const otherModules = modules.filter((m) => m.id !== "financial-administration");

export default function SolutionFinancialAdmin() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 bg-indigo-100/60 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-700 transition-colors mb-8"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6"
          >
            {mod.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl"
          >
            {mod.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Key Features - 3 cards */}
      <SectionWrapper bg="white">
        <SectionHeading
          eyebrow="Kernfunctionaliteiten"
          title="Compleet financieel overzicht"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {mod.features.map((feature, i) => (
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

      {/* Rapportages Section */}
      <SectionWrapper bg="surface">
        <SectionHeading
          eyebrow="Rapportages"
          title="Rapportages"
          subtitle={mod.rapportages.description}
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {mod.rapportages.images.map((image, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex justify-center"
            >
              <img
                src={image}
                alt={i === 0 ? "Balans" : "Staat van Baten en Lasten"}
                className="w-full max-w-md h-auto rounded-2xl shadow-card"
                loading="lazy"
              />
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Boekhoudmodule - Connected Timeline */}
      <SectionWrapper bg="white">
        <SectionHeading
          eyebrow="Boekhoudmodule"
          title="Stap voor stap"
        />
        <div className="relative mt-20">
          {/* Vertical connecting line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-indigo-200 via-indigo-300 to-teal-200 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {mod.detailedFeatures.map((feature, i) => {
              const isReverse = i % 2 !== 0;
              return (
                <div key={i} className="relative">
                  {/* Step number on the line (desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-300 flex items-center justify-center shadow-sm">
                      <span className="text-indigo-600 font-heading font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Image side */}
                    <AnimatedSection
                      direction={isReverse ? "right" : "left"}
                      className={isReverse ? "lg:order-2" : ""}
                    >
                      <div className="flex justify-center">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full max-w-70 lg:max-w-xs h-auto drop-shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    </AnimatedSection>

                    {/* Text side */}
                    <AnimatedSection
                      direction={isReverse ? "left" : "right"}
                      delay={0.15}
                      className={isReverse ? "lg:order-1" : ""}
                    >
                      {/* Step number (mobile) */}
                      <div className="flex items-center gap-3 mb-4 lg:hidden">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-indigo-300 flex items-center justify-center shadow-sm">
                          <span className="text-indigo-600 font-heading font-bold text-xs">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-linear-to-r from-indigo-200 to-transparent" />
                      </div>
                      <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
                        {feature.eyebrow}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <FAQAccordion
        eyebrow="Veelgestelde Vragen"
        title="Veelgestelde vragen financiële administratie"
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
        subtitle="Maak nu een afspraak met een van onze MyOrchestra-specialisten. Dan kijken we samen hoe we uw rust en overzicht aanzienlijk kunnen verhogen met de inzet van MyOrchestra."
      />
    </PageTransition>
  );
}
