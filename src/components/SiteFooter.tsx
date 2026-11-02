import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { Wordmark, GITHUB, PRODUCTS } from "./ui";

/** Footer for every page: links, then the company's legal line. */
export function SiteFooter({ home = false }: { home?: boolean }) {
  const anchor = (id: string) => (home ? `#${id}` : `/#${id}`);
  return (
    <footer className="foot">
      <div className="foot__row">
        <Wordmark />
        <nav className="foot__links" aria-label="Footer">
          <a href={anchor("tools")}>Products</a>
          <a href={anchor("community")}>Community</a>
          <a href={PRODUCTS.hazardsign} target="_blank" rel="noreferrer">HazardSign AI</a>
          <a href={PRODUCTS.eyeline} target="_blank" rel="noreferrer">Eyeline Studio</a>
          <a href={PRODUCTS.eyelineFloat} target="_blank" rel="noreferrer">Eyeline Float</a>
          <Link href="/about">About</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/company">Company</Link>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
      <div className="foot__legal">
        <p>
          {COMPANY.tradingName} is the trading name of {COMPANY.legalName}.
          {COMPANY.email && <> Contact: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</>}
        </p>
        <p className="mono foot__c">© 2026 {COMPANY.legalName}. All rights reserved.</p>
      </div>
      <style>{`
        .foot { display: grid; gap: 2em; padding: 3em 0 1em; }
        .foot__row { display: flex; justify-content: space-between; align-items: center; gap: 2em; flex-wrap: wrap; }
        .foot__links { display: flex; gap: 2em; flex-wrap: wrap; font-size: .95em; color: var(--ink-3); }
        .foot__links a:hover { color: var(--ink); }
        .foot__legal { display: grid; gap: .6em; padding-top: 1.5em; border-top: 1px solid color-mix(in srgb, var(--ink) 10%, transparent);
          font-size: .85em; line-height: 1.6; color: var(--ink-3); max-width: 62em; }
        .foot__legal a { text-decoration: underline; text-underline-offset: .2em; }
        .foot__c { font-size: .85em; color: var(--muted); }
        @media (max-width: 767px) { .foot__links { gap: 1em 1.5em; } }
      `}</style>
    </footer>
  );
}
