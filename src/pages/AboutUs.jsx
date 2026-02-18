import { motion } from "motion/react";
import PageTransition from "../components/animation/PageTransition";
import AnimatedSection from "../components/animation/AnimatedSection";
import SectionWrapper from "../components/layout/SectionWrapper";
import SectionHeading from "../components/ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../components/animation/StaggerChildren";
import CTASection from "../components/sections/CTASection";
import { siteMetadata } from "../data/siteMetadata";
import { team } from "../data/team";

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

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join("")
    .toUpperCase();
}

export default function AboutUs() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-linear-to-br from-indigo-950 via-indigo-900 to-indigo-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-100 h-100 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-75 h-75 bg-indigo-500/15 rounded-full blur-3xl" />
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

      {/* Team */}
      <SectionWrapper bg="white" size="lg">
        <SectionHeading
          eyebrow="Ons Team"
          title="De mensen achter Orchestra"
          subtitle="Ons team van specialisten staat klaar om uw organisatie te ondersteunen."
          align="center"
        />
        <StaggerChildren className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              {member.photo ? (
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-2 ring-slate-200/60 group-hover:ring-indigo-300 transition-all duration-300">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-indigo-950 flex items-center justify-center mx-auto group-hover:bg-indigo-900 transition-colors duration-300">
                  <span className="text-3xl font-heading text-teal-400">
                    {getInitials(member.name)}
                  </span>
                </div>
              )}

              <h3 className="mt-6 text-xl font-heading font-bold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-body font-semibold text-indigo-600 uppercase tracking-wider">
                {member.role}
              </p>

              {(member.email || member.phone || member.linkedin) && (
                <div className="mt-6 h-px bg-slate-200/60" />
              )}

              {(member.email || member.phone || member.linkedin) && (
                <div className="mt-6 space-y-3">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span className="truncate">{member.email}</span>
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      <span>{member.phone}</span>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Part of Orchestra */}
      <SectionWrapper bg="surface" size="md">
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
