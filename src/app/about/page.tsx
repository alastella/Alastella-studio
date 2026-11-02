import type { Metadata } from "next";
import Link from "next/link";
import { FloatCta } from "@/components/FloatCta";
import { LegalPage } from "@/components/LegalPage";
import { PRODUCTS } from "@/components/ui";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About: Alastella",
  description: "Alastella builds focused tools that each do one job properly: Eyeline Studio, Eyeline Float and HazardSign AI. Private by default, fairly priced in naira.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <LegalPage
      eyebrow="About"
      title="About Alastella"
      lead="Alastella builds focused tools that each do one job properly: private by default, quick to learn and fairly priced."
    >
      <h2 className="legal__h">Who&apos;s behind it</h2>
      <p>
        Hi, I&apos;m Michael. I&apos;m the son of a cocoa farmer, so naturally I ended up writing code instead of making chocolate.
        One day I&apos;ll retire to the farm and trade my keyboard for a cutlass. Until then, my job is to build software that solves
        real problems and to make sure the people who use it are well looked after.
      </p>

      <h2 className="legal__h">What we make</h2>
      <ul>
        <li><a href={PRODUCTS.eyelineFloat} target="_blank" rel="noreferrer">Eyeline Float</a>: an AI co-pilot for live interviews and calls, on Mac and Windows.</li>
        <li><a href={PRODUCTS.eyeline} target="_blank" rel="noreferrer">Eyeline Studio</a>: a teleprompter under your camera that records your takes on your device.</li>
        <li><a href={PRODUCTS.hazardsign} target="_blank" rel="noreferrer">HazardSign AI</a>: sign PDFs, photos and any other file in your browser, without the document leaving your device.</li>
      </ul>

      <h2 className="legal__h">How we build</h2>
      <ul>
        <li><strong>One job, done properly.</strong> Each tool solves a single everyday task from start to finish.</li>
        <li><strong>Private by default.</strong> We keep as little of your data as the job allows.</li>
        <li><strong>Fair, local pricing.</strong> Simple monthly prices in naira. Cancel whenever you like.</li>
        <li><strong>Shipped, then sharpened.</strong> Tools go out when they&apos;re useful, then improve based on how people actually use them.</li>
      </ul>

      <h2 className="legal__h">The company</h2>
      <p>
        {COMPANY.tradingName} is the trading name of {COMPANY.legalName}, and was formerly known as Hazardsecurity. The legal details are
        on the <Link href="/company">Company</Link> page.{COMPANY.email && <> To get in touch, email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</>}
      </p>

      <FloatCta />
    </LegalPage>
  );
}
