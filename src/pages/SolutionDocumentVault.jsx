import { Link } from "react-router";
import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import CTASection from "../components/sections/CTASection";
import { modules } from "../data/modules";

const mod = modules.find((m) => m.id === "document-vault");
const otherModules = modules.filter((m) => m.id !== "document-vault");

export default function SolutionDocumentVault() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
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

      {/* Features */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection direction="left">
            <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
              Functionaliteiten
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
              Uw organisatie&apos;s collectieve geheugen
            </h2>
            <p className="text-slate-500 leading-relaxed">
              {mod.fullDescription}
            </p>
          </AnimatedSection>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mod.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-heading font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </SectionWrapper>

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

      <CTASection />
    </PageTransition>
  );
}
