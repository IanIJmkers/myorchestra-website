export default function ClientLogoCard({ name, logo, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-slate-200/60 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-36 flex items-center justify-center mb-3">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <span className="block text-sm font-medium text-slate-700 text-center">
        {name}
      </span>
    </a>
  );
}
