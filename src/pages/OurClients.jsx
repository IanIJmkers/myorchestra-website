import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import ClientLogoCard from "../components/ui/ClientLogoCard";
import CTASection from "../components/sections/CTASection";
import { testimonials } from "../data/testimonials";
import { clientOrgs } from "../data/clients";

export default function OurClients() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-xs font-body font-semibold tracking-wide uppercase bg-white/10 text-teal-300 px-4 py-1.5 rounded-full backdrop-blur-sm mb-6"
          >
            Onze Klanten
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            Vertrouwd door 100+ organisaties
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-indigo-200 max-w-2xl"
          >
            Van kleine stichtingen tot grote landelijke fondsen — MyOrchestra
            ondersteunt organisaties van elke omvang bij het digitaliseren van
            hun werkprocessen.
          </motion.p>
        </div>
      </section>

      {/* Client Organizations */}
      <SectionWrapper bg="white">
        <SectionHeading
          eyebrow="Onze Klanten"
          title="Organisaties die op ons vertrouwen"
          subtitle="Een selectie van de stichtingen en verenigingen die MyOrchestra dagelijks gebruiken."
        />
        <StaggerChildren className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {clientOrgs.map((org) => (
            <motion.div key={org.name} variants={staggerItem}>
              <ClientLogoCard
                name={org.name}
                logo={org.logo}
                url={org.url}
              />
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper bg="surface">
        <SectionHeading
          eyebrow="Ervaringen"
          title="Wat onze klanten zeggen"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-card"
            >
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

      <CTASection
        title="Wilt u ook onderdeel worden van onze klantenkring?"
        subtitle="Neem contact met ons op voor een vrijblijvende demonstratie van het MyOrchestra platform."
      />
    </PageTransition>
  );
}
