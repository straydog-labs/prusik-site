import { NAV, SITE } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-chalk/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-page items-end justify-between gap-6 px-7 pb-[18px] pt-5 max-sm:gap-4 max-sm:px-5 max-sm:pb-3.5 max-sm:pt-4">
        <a href="#top" className="block min-w-0 no-underline">
          <div className="hero-rise font-display text-[clamp(3.6rem,8.5vw,5.6rem)] font-extrabold leading-[0.88] tracking-[0.04em] text-ink">
            {SITE.wordmark}
          </div>
          <div className="hero-rise hero-rise-delay-1 mt-3 font-body text-[0.98rem] font-medium uppercase tracking-[0.08em] text-ink max-sm:text-[0.9rem]">
            {SITE.subtitle}
          </div>
        </a>
        <nav
          aria-label="Page"
          className="hero-rise hero-rise-delay-2 mb-2 flex shrink-0 flex-wrap gap-x-7 gap-y-2 pb-2 text-base max-sm:mb-0 max-sm:pb-1 max-sm:text-[0.92rem]"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-0.5 text-muted no-underline transition-colors duration-150 hover:border-sandstone hover:text-ink motion-reduce:transition-none"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
