import type { Metadata } from "next";
import Link from "next/link";
import { FloatCta } from "@/components/FloatCta";
import { LegalPage } from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Careers: Alastella",
  description: "Work with Alastella, the company behind Eyeline Studio, Eyeline Float and HazardSign AI. See whether we're hiring and how to introduce yourself.",
  alternates: { canonical: "/careers" },
};

// Only roles that really exist go here. Until then, the page says so plainly.
export default function Careers() {
  return (
    <LegalPage
      eyebrow="Careers"
      title="Careers at Alastella"
      lead="We don't have any open roles right now."
    >
      {COMPANY.email && (
        <>
          <h2 className="legal__h">Introduce yourself</h2>
          <p>
            If you&apos;d like to work on software that solves everyday problems, email{" "}
            <a href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("Introducing myself")}`}>{COMPANY.email}</a> and tell us what you
            do, what you&apos;ve built, and which of our products you&apos;d improve first.
          </p>
        </>
      )}
      <p>
        Read <Link href="/about">about Alastella</Link> to see what we make and how we build.
      </p>

      <FloatCta heading="While you're here, try Eyeline Float" />
    </LegalPage>
  );
}
