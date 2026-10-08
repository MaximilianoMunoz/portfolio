import type { CSSProperties, ReactNode } from "react";

/** Shared button styles, usable on <a>, <Link> or <button>. */
export function buttonClasses(variant: "primary" | "secondary" | "ghost" = "primary", size: "md" | "lg" = "md") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const sizes = {
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-7 text-base",
  };
  const variants = {
    primary: "bg-accent-solid text-white hover:bg-accent-solid-hover",
    secondary:
      "border border-border bg-surface text-foreground hover:border-foreground/30 hover:bg-surface-muted",
    ghost: "text-foreground hover:bg-surface-muted",
  };
  return `${base} ${sizes[size]} ${variants[variant]}`;
}

/** Props that make an element fade in when scrolled into view (see RevealObserver). */
export function reveal(delayMs = 0) {
  return {
    "data-reveal": "",
    style: { "--reveal-delay": `${delayMs}ms` } as CSSProperties,
  };
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  id,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <header className="mb-12 max-w-2xl sm:mb-16" {...reveal()}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{intro}</p> : null}
    </header>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-muted px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
