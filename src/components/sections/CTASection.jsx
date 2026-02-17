import SectionWrapper from "../layout/SectionWrapper";
import AnimatedSection from "../animation/AnimatedSection";
import Button from "../ui/Button";

export default function CTASection({
  title = "Klaar om uw organisatie te digitaliseren?",
  subtitle = "Ontdek hoe MyOrchestra uw stichting of vereniging kan ondersteunen met een veilige, centrale online omgeving.",
}) {
  return (
    <SectionWrapper bg="gradient">
      <AnimatedSection className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-indigo-200 mb-10">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" variant="gradient" size="lg">
            Neem Contact Op
          </Button>
          <Button href="/about" variant="outline-light" size="lg">
            Over MyOrchestra
          </Button>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
