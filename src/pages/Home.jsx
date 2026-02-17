import PageTransition from "../components/animation/PageTransition";
import HeroSection from "../components/sections/HeroSection";
import StatsBar from "../components/sections/StatsBar";
import ClientLogos from "../components/sections/ClientLogos";
import ModulesShowcase from "../components/sections/ModulesShowcase";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TrustBadges from "../components/sections/TrustBadges";
import CTASection from "../components/sections/CTASection";
import SectionWrapper from "../components/layout/SectionWrapper";
import AnimatedSection from "../components/animation/AnimatedSection";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsBar />
      <ClientLogos />

      {/* About Section */}
      <SectionWrapper bg="surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection direction="left">
            <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-4">
              Uw Online Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 mb-6">
              De enige online kantooromgeving voor stichtingen en verenigingen
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              MyOrchestra biedt centrale toegang tot al uw financiën, facturen,
              projecten, documenten en vergaderstukken. Organisatie-informatie
              blijft eigendom van de instelling — niet van individuele
              bestuursleden.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Met ingebouwde governance kaders en het vier-ogen-principe zorgt
              MyOrchestra ervoor dat uw organisatie voldoet aan alle eisen, tegen
              een vast jaarlijks tarief.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-card p-8 lg:p-12">
              <div className="space-y-6">
                {[
                  {
                    title: "Centraal Beheer",
                    desc: "Alle informatie op één veilige plek, altijd en overal toegankelijk.",
                  },
                  {
                    title: "Governance & Compliance",
                    desc: "Voldoe aan alle eisen met het vier-ogen-principe en audit trails.",
                  },
                  {
                    title: "Vast Tarief",
                    desc: "Voorspelbare kosten met een vast jaarlijks tarief, zonder verrassingen.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
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
                    <div>
                      <h3 className="font-heading font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      <ModulesShowcase />
      <TestimonialsSection />
      <TrustBadges />
      <CTASection />
    </PageTransition>
  );
}
