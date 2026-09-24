import { FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-chalk py-7">
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-4 px-7 text-[0.9rem] text-muted max-sm:px-5">
        <div>{FOOTER.legal}</div>
        <div>
          <a
            href={FOOTER.mailto}
            className="underline decoration-line underline-offset-2 hover:text-ink"
          >
            {FOOTER.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
