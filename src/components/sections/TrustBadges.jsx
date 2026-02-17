import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";

const regulators = [
  { abbreviation: "DNB", name: "De Nederlandsche Bank", description: "Toezichthouder" },
  { abbreviation: "AFM", name: "Autoriteit Financiële Markten", description: "Gedragstoezicht" },
  { abbreviation: "AP", name: "Autoriteit Persoonsgegevens", description: "Privacytoezicht" },
  { abbreviation: "DSI", name: "Dutch Securities Institute", description: "Kwaliteitsregister" },
  { abbreviation: "KiFiD", name: "Klachteninstituut Financiële Dienstverlening", description: "Geschillenbeslechting" },
];

export default function TrustBadges() {
  return (
    <SectionWrapper bg="white" size="md">
      <AnimatedSection className="text-center">
        <span className="inline-block text-xs font-body font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 mb-6">
          Vertrouwen Staat Voorop
        </span>
        <p className="text-slate-500 text-sm mb-10 max-w-2xl mx-auto">
          Orchestra opereert onder toezicht van alle belangrijke toezichthouders
          en voldoet aan de strengste eisen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {regulators.map((reg) => (
            <div
              key={reg.abbreviation}
              className="group cursor-default"
              title={reg.name}
            >
              <div className="text-lg font-heading font-bold text-slate-300 group-hover:text-indigo-600 transition-colors duration-300">
                {reg.abbreviation}
              </div>
              <div className="text-[10px] text-slate-300 group-hover:text-slate-500 transition-colors duration-300 mt-1 max-w-[120px] mx-auto leading-tight">
                {reg.description}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
