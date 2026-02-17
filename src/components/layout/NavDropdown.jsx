import { Link } from "react-router";
import { motion } from "motion/react";

export default function NavDropdown({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-slate-200/60 py-2 mt-1"
    >
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-5 py-3 hover:bg-surface transition-colors duration-150 group"
        >
          <span className="block text-sm font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">
            {item.label}
          </span>
          {item.description && (
            <span className="block text-xs text-slate-400 mt-0.5">
              {item.description}
            </span>
          )}
        </Link>
      ))}
    </motion.div>
  );
}
