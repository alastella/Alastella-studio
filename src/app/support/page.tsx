import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { PRODUCTS } from "@/components/ui";
import { COMPANY, email, filled } from "@/lib/company";

export const metadata: Metadata = {
  title: "Support: Alastella",
  description: "How to get help with HazardSign AI, Eyeline Studio and Eyeline Float.",
  alternates: { canonical: "/support" },
};

export default function Support() {
  const mail = COMPANY.email ? <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> : email();
  return (
    <LegalPage
      eyebrow="Support"
      title="Get help"
      lead={`Support for every Alastella product is handled by ${COMPANY.legalName}. Email us and we'll reply.`}
    >
      <dl className="legal__facts">
        <dt>Email</dt><dd>{mail}</dd>
        <dt>Response time</dt><dd>{filled(COMPANY.supportResponse, "response time")}</dd>
      </dl>
      <h2 className="legal__h">What to include</h2>
      <ul>
        <li>Which product you are using: HazardSign AI, Eyeline Studio or Eyeline Float.</li>
        <li>The email address on your account, if you have one.</li>
        <li>What you expected to happen, what happened instead, and a screenshot if you can.</li>
      </ul>
      <h2 className="legal__h">Billing and accounts</h2>
      <p>
        For questions about a payment, cancelling a subscription or deleting your account, email {mail} from the address on your account so
        we can find it. You can also manage your subscription from inside{" "}
        <a href={PRODUCTS.hazardsign} target="_blank" rel="noreferrer">HazardSign AI</a> and{" "}
        <a href={PRODUCTS.eyeline} target="_blank" rel="noreferrer">Eyeline Studio</a>.
      </p>
    </LegalPage>
  );
}
