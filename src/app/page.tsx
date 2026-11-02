import { Hero, Nav } from "@/components/Hero";
import { Closing, Community, Principles, Tools } from "@/components/Sections";
import { COMPANY } from "@/lib/company";

// Structured data: the company, its website and its live products. Contact details appear once confirmed in lib/company.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.alastella.com/#org",
      name: COMPANY.tradingName,
      legalName: COMPANY.legalName,
      alternateName: ["Hazardsecurity", "Hazard Security", "hazardsecurity.xyz"],
      url: "https://www.alastella.com",
      logo: "https://www.alastella.com/icon.svg",
      description: "A software company building focused tools for everyday jobs.",
      sameAs: ["https://github.com/hazardsecurity"],
      ...(COMPANY.email && {
        email: COMPANY.email,
        contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: COMPANY.email, url: "https://www.alastella.com/support" },
      }),
    },
    { "@type": "WebSite", "@id": "https://www.alastella.com/#site", url: "https://www.alastella.com", name: "Alastella", alternateName: ["Hazardsecurity", "Hazard Security"], publisher: { "@id": "https://www.alastella.com/#org" } },
    {
      "@type": "SoftwareApplication",
      name: "HazardSign AI",
      url: "https://sign.alastella.com/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web browser",
      offers: { "@type": "Offer", price: "500", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.alastella.com/#org" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Eyeline Studio",
      url: "https://eyeline.alastella.com/",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web browser",
      offers: { "@type": "Offer", price: "3000", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.alastella.com/#org" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Eyeline Float",
      url: "https://eyeline.alastella.com/float",
      description: "An AI co-pilot for live interviews and calls, on a strip under your webcam that stays hidden from screen sharing.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "macOS, Windows",
      offers: { "@type": "Offer", price: "5000", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.alastella.com/#org" },
    },
    {
      "@type": "SoftwareApplication",
      name: "meetadev",
      url: "https://www.meetadev.xyz/",
      description: "Free networking app for DevFest and GDG events, made by Alastella as a community project.",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "Web browser",
      offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.alastella.com/#org" },
    },
    {
      "@type": "SoftwareApplication",
      name: "You Wrapped",
      url: "https://wrapped.alastella.com/",
      description: "Free yearly wrap of your GitHub, LinkedIn and X activity, made by Alastella as a community project.",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "Web browser",
      offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.alastella.com/#org" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Community />
        <Principles />
      </main>
      <Closing />
    </>
  );
}
