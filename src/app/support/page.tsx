import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRODUCTS } from "@/components/ui";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Support: Alastella",
  description: "How to get help with HazardSign AI, Eyeline Studio and Eyeline Float.",
  alternates: { canonical: "/support" },
};

export default function Support() {
  const mail = COMPANY.email && <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;
  return (
    <LegalPage
      eyebrow="Support"
      title="Get help"
      lead={`Support for every Alastella product is handled by ${COMPANY.legalName}.`}
    >
      {mail && (
        <dl className="legal__facts">
          <dt>Email</dt><dd>{mail}</dd>
          {COMPANY.supportResponse && <><dt>Response time</dt><dd>{COMPANY.supportResponse}</dd></>}
        </dl>
      )}
      <h2 className="legal__h">What to include</h2>
      <ul>
        <li>Which product you are using: HazardSign AI, Eyeline Studio or Eyeline Float.</li>
        <li>The email address on your account, if you have one.</li>
        <li>What you expected to happen, what happened instead, and a screenshot if you can.</li>
      </ul>
      <h2 className="legal__h">Billing and accounts</h2>
      <p>
        You can manage or cancel your subscription from inside{" "}
        <a href={PRODUCTS.hazardsign} target="_blank" rel="noreferrer">HazardSign AI</a> and{" "}
        <a href={PRODUCTS.eyeline} target="_blank" rel="noreferrer">Eyeline Studio</a>, and delete your account from each product&apos;s
        Delete account page.{mail && <> For anything else about a payment or your account, email {mail} from the address on your account.</>}
      </p>
    </LegalPage>
  );
}
