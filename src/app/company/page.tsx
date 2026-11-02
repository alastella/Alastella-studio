import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { PRODUCTS } from "@/components/ui";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Company: Alastella",
  description: `Alastella is the trading name of ${COMPANY.legalName}, the company that builds and operates HazardSign AI, Eyeline Studio and Eyeline Float.`,
  alternates: { canonical: "/company" },
};

export default function Company() {
  return (
    <LegalPage
      eyebrow="Company"
      title="Who runs Alastella"
      lead={`Alastella is the trading name of ${COMPANY.legalName}. The company builds and operates the products below and is the party you deal with when you use or pay for them.`}
    >
      <dl className="legal__facts">
        <dt>Legal name</dt><dd>{COMPANY.legalName}</dd>
        <dt>Trading name</dt><dd>{COMPANY.tradingName}</dd>
        {COMPANY.email && <><dt>Email</dt><dd><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></dd></>}
      </dl>
      <h2 className="legal__h">Products we operate</h2>
      <ul>
        <li><a href={PRODUCTS.hazardsign} target="_blank" rel="noreferrer">HazardSign AI</a></li>
        <li><a href={PRODUCTS.eyeline} target="_blank" rel="noreferrer">Eyeline Studio</a></li>
        <li><a href={PRODUCTS.eyelineFloat} target="_blank" rel="noreferrer">Eyeline Float</a></li>
      </ul>
      <p>
        Hazardsecurity (hazardsecurity.xyz) is a former name of Alastella. Each product has its own privacy policy and terms, linked
        from inside the product.
      </p>
      <h2 className="legal__h">Getting in touch</h2>
      <p>
        For help with a product, see <Link href="/support">Support</Link>. For questions about your data, see <Link href="/privacy">Privacy</Link>.
      </p>
    </LegalPage>
  );
}
