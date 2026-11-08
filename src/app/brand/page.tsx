import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Brand: Alastella",
  description: "Download the Alastella logo and mark as SVG or PNG, with the brand colours and typefaces.",
  alternates: { canonical: "/brand" },
};

// Files live in public/brand. They're outlined from the site's own Wordmark, so they match the nav exactly.
const LOGOS = [
  { file: "alastella-logo", name: "Logo", note: "For light backgrounds.", ground: "light", wide: true },
  { file: "alastella-logo-reversed", name: "Logo, reversed", note: "For dark backgrounds.", ground: "dark", wide: true },
  { file: "alastella-logo-black", name: "One colour, black", note: "For print or when colour isn't available.", ground: "light", wide: true },
  { file: "alastella-logo-white", name: "One colour, white", note: "For photos and dark single-colour print.", ground: "dark", wide: true },
  { file: "alastella-mark", name: "Mark", note: "For small spaces and app icons.", ground: "light" },
  { file: "alastella-mark-reversed", name: "Mark, reversed", note: "For dark backgrounds.", ground: "dark" },
] as const;

const COLOURS = [
  { name: "Ink", hex: "#0F0F0E", use: "Text and the mark's stripes." },
  { name: "Bone", hex: "#EFEDE6", use: "Backgrounds." },
  { name: "Caution yellow", hex: "#FFD400", use: "The one accent. Use it sparingly." },
];

export default function Brand() {
  return (
    <LegalPage
      eyebrow="Brand"
      title="Alastella brand"
      lead="Logos, colours and type for writing or talking about Alastella. Download what you need."
    >
      <a className="btn kit__all" href="/brand/alastella-brand-kit.zip" download>Download everything (.zip)</a>

      <h2 className="legal__h">Logos</h2>
      <p>SVG for screens and print at any size, PNG with a transparent background for everything else.</p>
      <div className="kit">
        {LOGOS.map((l) => (
          <figure key={l.file} className="kit__card" data-wide={"wide" in l ? "" : undefined}>
            <div className="kit__show" data-ground={l.ground}>
              {/* eslint-disable-next-line @next/next/no-img-element -- the downloadable file itself, shown as is */}
              <img src={`/brand/${l.file}.svg`} alt={`Alastella ${l.name.toLowerCase()}`} />
            </div>
            <figcaption>
              <strong>{l.name}</strong>
              <span>{l.note}</span>
              <span className="kit__dl">
                <a href={`/brand/${l.file}.svg`} download>SVG</a>
                <a href={`/brand/${l.file}.png`} download>PNG</a>
              </span>
            </figcaption>
          </figure>
        ))}
        <figure className="kit__card">
          <div className="kit__show" data-ground="light">
            {/* eslint-disable-next-line @next/next/no-img-element -- the downloadable file itself, shown as is */}
            <img src="/brand/alastella-avatar.png" alt="Alastella profile picture" className="kit__avatar" />
          </div>
          <figcaption>
            <strong>Profile picture</strong>
            <span>1024 × 1024, for social accounts.</span>
            <span className="kit__dl"><a href="/brand/alastella-avatar.png" download>PNG</a></span>
          </figcaption>
        </figure>
      </div>

      <h2 className="legal__h">Using the logo</h2>
      <ul>
        <li>Leave clear space around it at least half the height of the mark.</li>
        <li>Use the reversed logo on dark backgrounds and the one-colour logos when only one colour is possible.</li>
        <li>Don&apos;t stretch, rotate, recolour or add effects to it, and don&apos;t change the stripes.</li>
        <li>The logo is lowercase. In writing, the name is Alastella, with a capital A.</li>
      </ul>

      <h2 className="legal__h">Colours</h2>
      <div className="swatches">
        {COLOURS.map((c) => (
          <div key={c.hex} className="swatch">
            <span className="swatch__chip" style={{ background: c.hex }} />
            <strong>{c.name}</strong>
            <code>{c.hex}</code>
            <span>{c.use}</span>
          </div>
        ))}
      </div>

      <h2 className="legal__h">Type</h2>
      <ul>
        <li><strong>Bricolage Grotesque</strong> for headings, text and the logo (Bold).</li>
        <li><strong>Geist Mono</strong> for small labels, in capitals.</li>
      </ul>
      <p>Both are free on Google Fonts.</p>

      {COMPANY.email && (
        <p>For press or partnership questions, email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>
      )}

      <style>{`
        .legal .kit__all { padding: 0 1.4em; text-decoration: none; }
        .kit { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1em; width: 100%; }
        .kit__card { display: grid; border-radius: 1em; overflow: hidden; background: #faf9f5;
          border: 1px solid color-mix(in srgb, var(--ink) 10%, transparent); }
        .kit__card[data-wide] { grid-column: 1 / -1; }
        .kit__show { display: grid; place-items: center; height: 11em; padding: 2em; border-bottom: 1px solid color-mix(in srgb, var(--ink) 8%, transparent); }
        .kit__show[data-ground="light"] { background: #fff; }
        .kit__show[data-ground="dark"] { background: var(--ink); }
        .kit__show img { max-height: 4.5em; width: auto; }
        .kit__card[data-wide] .kit__show img { max-height: 3.5em; }
        .kit__show img.kit__avatar { max-height: 6em; border-radius: .6em; }
        .kit__card figcaption { display: grid; gap: .25em; padding: 1em 1.25em 1.2em; font-size: 1em; }
        .kit__card figcaption span { color: var(--ink-3); }
        .kit__dl { display: flex; gap: .5em; margin-top: .5em; }
        .legal .kit__dl a { text-decoration: none; font-family: var(--f-mono); font-size: .8em; letter-spacing: .06em; padding: .45em .9em;
          border-radius: 99em; box-shadow: inset 0 0 0 1px var(--ink); color: var(--ink); transition: background .2s var(--ease); }
        .legal .kit__dl a:hover { background: var(--tape); }
        .swatches { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1em; width: 100%; }
        .swatch { display: grid; gap: .2em; font-size: 1em; }
        .swatch__chip { height: 5em; border-radius: .8em; margin-bottom: .5em; box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 12%, transparent); }
        .swatch code { font-family: var(--f-mono); font-size: .85em; }
        .swatch span:last-child { color: var(--ink-3); }
        @media (max-width: 600px) {
          .kit { grid-template-columns: 1fr; }
          .kit__card[data-wide] { grid-column: auto; }
          .kit__card[data-wide] .kit__show img { max-height: 2.6em; }
          .swatches { grid-template-columns: 1fr; }
        }
      `}</style>
    </LegalPage>
  );
}
