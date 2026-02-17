import { motion } from "motion/react";
import SectionWrapper from "../layout/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import StaggerChildren, { staggerItem } from "../animation/StaggerChildren";
import { modules } from "../../data/modules";
import { Link } from "react-router";

const icons = {
  ClipboardDocumentListIcon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  CurrencyEuroIcon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4" />
    </svg>
  ),
  UsersIcon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  CalendarDaysIcon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  ),
  LockClosedIcon: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
};

export default function ModulesShowcase() {
  return (
    <SectionWrapper bg="white">
      <SectionHeading
        eyebrow="Modulaire Oplossing"
        title="Alles-in-één platform, modulair opgebouwd"
        subtitle="Vijf krachtige modules die naadloos samenwerken voor een complete kantooromgeving."
      />

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {modules.map((mod) => (
          <motion.div key={mod.id} variants={staggerItem}>
            <Link to={mod.path} className="group block h-full">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group-hover:border-indigo-200">
                <div className="text-indigo-500 mb-6">
                  {icons[mod.icon]}
                </div>
                <h3 className="text-xl lg:text-2xl font-heading font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {mod.title}
                </h3>
                <p className="text-slate-500 leading-relaxed grow">
                  {mod.shortDescription}
                </p>
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-500 transition-colors">
                    Meer informatie &rarr;
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
