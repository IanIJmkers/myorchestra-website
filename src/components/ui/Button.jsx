import { Link } from "react-router";
import { motion } from "motion/react";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 border border-indigo-600 hover:border-indigo-500",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 hover:border-slate-800",
  outline:
    "bg-transparent text-slate-900 border border-slate-300 hover:bg-slate-50 hover:border-slate-400",
  "outline-light":
    "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 border border-transparent",
  gradient:
    "bg-linear-to-r from-indigo-600 to-teal-500 text-white border-0 hover:from-indigo-500 hover:to-teal-400",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center font-body font-semibold rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={href} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
