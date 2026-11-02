import type { Metadata } from "next";
import { AnalyticsChoice } from "@/components/AnalyticsChoice";
import { LegalPage } from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy: Alastella",
  description: "What the Alastella website collects when you visit, and how to turn it off.",
  alternates: { canonical: "/privacy" },
};

// This page covers www.hazardsecurity.xyz only. Each product (HazardSign AI, Eyeline Studio, Eyeline Float, meetadev) has its own policy.
export default function Privacy() {
  const mail = COMPANY.email && <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;
  return (
    <LegalPage
      eyebrow="Last updated 2 November 2026"
      title="Privacy on this website"
      lead="This page is about www.hazardsecurity.xyz only. Each of our products has its own privacy policy, linked from inside the product."
    >
      <h2 className="legal__h">Who is responsible</h2>
      <p>
        This website is run by {COMPANY.legalName}, trading as Alastella. The company decides how the data described here is used,
        and is responsible for it.{mail && <> Contact: {mail}.</>}
      </p>
      <h2 className="legal__h">What we collect</h2>
      <p>
        We use PostHog to understand how people use this website, so we can improve it: the pages you open, what you click, how far
        you scroll, your device and browser type, the site that sent you here, and a rough location from your IP address. Some visits
        are recorded as screen replays, with anything you type hidden.
      </p>
      <h2 className="legal__h">What we don&apos;t collect</h2>
      <p>
        We don&apos;t ask for your name or email on this website, and we don&apos;t sell data or use it for advertising.
      </p>
      <h2 className="legal__h">Storage and how long we keep it</h2>
      <p>
        PostHog keeps a random ID in your browser&apos;s local storage so repeat visits count once. Usage data is kept for up to 12 months
        and replays for up to 30 days. PostHog processes it for us in the United States.
      </p>
      <h2 className="legal__h">Turning it off</h2>
      <p>If your browser sends Do Not Track, none of this is collected. You can also switch it off for this browser here:</p>
      <AnalyticsChoice />
      {mail && (
        <>
          <h2 className="legal__h">Your data, on request</h2>
          <p>
            You can ask us for a copy of the data we hold about your visits, or ask us to delete it. Email {mail} with the subject
            &ldquo;Privacy request&rdquo;. Analytics data doesn&apos;t include your name, so we may not be able to match it to you; if we can,
            we&apos;ll send it or delete it. For any other privacy question, use the same address.
          </p>
        </>
      )}
    </LegalPage>
  );
}
