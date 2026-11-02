import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { Wordmark } from "./ui";

/** Plain text page (company, support, privacy): wordmark, title, prose, footer. */
export function LegalPage({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead: string; children: React.ReactNode }) {
  return (
    <>
      <main className="section legal">
        <div className="wrap legal__in">
          <Link href="/" aria-label="Alastella home"><Wordmark /></Link>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h2">{title}</h1>
          <p className="lead">{lead}</p>
          {children}
        </div>
      </main>
      <div className="wrap"><SiteFooter /></div>
      <style>{`
        .legal { padding-bottom: 4em; }
        .legal__in { display: grid; gap: 1.4em; justify-items: start; max-width: 48em; }
        .legal__in > p, .legal__in li { font-size: 1.1em; line-height: 1.6; color: var(--ink-2); max-width: 40em; }
        .legal__in ul { display: grid; gap: .5em; padding-left: 1.2em; }
        .legal__h { font-size: 1.6em; font-weight: 700; letter-spacing: -0.02em; margin-top: 1em; }
        .legal__facts { display: grid; grid-template-columns: max-content 1fr; gap: .7em 2em; font-size: 1.05em; padding: 1.5em; border-radius: 1em;
          background: #faf9f5; box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent); width: 100%; }
        .legal__facts dt { font-family: var(--f-mono); font-size: .8em; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); padding-top: .2em; }
        .legal__facts dd { color: var(--ink); }
        .legal a { text-decoration: underline; text-underline-offset: 0.2em; }
        @media (max-width: 600px) { .legal__facts { grid-template-columns: 1fr; gap: .2em; } .legal__facts dd { margin-bottom: .8em; } }
      `}</style>
    </>
  );
}
