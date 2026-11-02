import { ButtonLink, PRODUCTS } from "./ui";

/** The closing call to action on the About and Careers pages: Eyeline Float. */
export function FloatCta({ heading = "Try Eyeline Float" }: { heading?: string }) {
  return (
    <aside className="float-cta" aria-label="Eyeline Float">
      <div>
        <span className="eyebrow">Eyeline Float</span>
        <h2 className="float-cta__h">{heading}</h2>
        <p className="float-cta__p">An AI co-pilot for live interviews and calls. It hears the question you&apos;re asked and puts the answer on a thin strip under your webcam, hidden from screen sharing, on Mac and Windows.</p>
      </div>
      <ButtonLink href={PRODUCTS.eyelineFloat} variant="ink" external>Get Eyeline Float</ButtonLink>
      <style>{`
        .float-cta { display: grid; gap: 1.4em; justify-items: start; width: 100%; margin-top: 1.5em; padding: 2em; border-radius: 1.25em;
          background: #faf9f5; box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent); }
        .float-cta__h { font-size: 1.8em; font-weight: 700; letter-spacing: -0.025em; margin-top: .3em; }
        .float-cta__p { font-size: 1.05em; line-height: 1.6; color: var(--ink-2); max-width: 36em; margin-top: .5em; }
        @media (max-width: 600px) { .float-cta { padding: 1.5em; } }
      `}</style>
    </aside>
  );
}
