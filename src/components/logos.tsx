const brands = [
  "Loreva",
  "Northbound",
  "Kovan",
  "Atreo",
  "Vesta Dijital",
  "Helsa",
  "Doruk",
  "Marsel",
];

function Mark({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-8 text-muted transition-colors hover:text-fg">
      <svg
        viewBox="0 0 32 32"
        className="size-7"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="currentColor"
          fontFamily="var(--font-sans)"
        >
          {name[0]}
        </text>
      </svg>
      <span className="whitespace-nowrap text-base font-medium tracking-tight">
        {name}
      </span>
    </div>
  );
}

export function Logos() {
  return (
    <section className="border-y border-line py-12">
      <p className="mx-auto mb-9 max-w-7xl px-5 text-center text-sm text-faint sm:px-8">
        Büyümesine destek olduğumuz markalar
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max">
          {[...brands, ...brands].map((b, i) => (
            <Mark key={i} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
