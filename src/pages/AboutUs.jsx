import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import CTASection from "../components/sections/CTASection";
import { siteMetadata } from "../data/siteMetadata";

const values = [
  {
    title: "Veiligheid",
    description:
      "Uw gegevens worden met de hoogste beveiligingsstandaarden beschermd. We voldoen aan alle relevante wet- en regelgeving.",
  },
  {
    title: "Transparantie",
    description:
      "Volledige openheid over onze werkwijze, kosten en processen. Geen verborgen kosten, geen verrassingen.",
  },
  {
    title: "Innovatie",
    description:
      "Continue ontwikkeling van ons platform om de beste digitale ervaring te bieden aan onze klanten.",
  },
  {
    title: "Samenwerking",
    description:
      "We werken nauw samen met onze klanten om de oplossing continu te verbeteren en af te stemmen op hun behoeften.",
  },
];

export default function AboutUs() {
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
            Over Ons
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            De kracht achter MyOrchestra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-indigo-200 max-w-2xl"
          >
            {siteMetadata.companyName} is onderdeel van Orchestra en biedt al
            meer dan 10 jaar de enige online kantooromgeving specifiek ontwikkeld
            voor stichtingen en verenigingen.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
              Onze Missie
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
              Stichtingen en verenigingen digitaal ondersteunen
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Wij geloven dat elke stichting en vereniging recht heeft op een
              professionele, veilige en betaalbare digitale werkomgeving. Te
              veel organisaties werken nog met verspreide systemen, losse
              bestanden en ondoorzichtige processen.
            </p>
            <p className="text-slate-500 leading-relaxed">
              MyOrchestra brengt al deze informatie samen op één veilige plek,
              zodat organisaties zich kunnen richten op wat echt telt: hun
              maatschappelijke missie.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "10+", label: "Jaar Ervaring" },
                { number: "100+", label: "Klanten" },
                { number: "5", label: "Geïntegreerde Modules" },
                { number: "24/7", label: "Online Toegang" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-2xl p-6 text-center border border-slate-200/60"
                >
                  <div className="text-3xl font-heading font-bold text-indigo-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="surface">
        <SectionHeading
          eyebrow="Onze Waarden"
          title="Waar wij voor staan"
          subtitle="De kernwaarden die ons dagelijks werk sturen en onze beslissingen vormen."
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-slate-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Part of Orchestra */}
      <SectionWrapper bg="white" size="md">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
            Onderdeel van Orchestra
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
            Gebouwd op een sterk fundament
          </h2>
          <p className="text-slate-500 leading-relaxed">
            MyOrchestra is onderdeel van Orchestra, een gerenommeerde
            organisatie die al jaren actief is in vermogensbeheer, administratie
            en governance voor goede doelen en stichtingen. Deze expertise vormt
            de basis van ons platform.
          </p>
        </AnimatedSection>
      </SectionWrapper>

      <CTASection
        title="Wilt u meer weten over MyOrchestra?"
        subtitle="Wij vertellen u graag meer over ons platform en hoe het uw organisatie kan helpen."
      />
    </PageTransition>
  );
}
