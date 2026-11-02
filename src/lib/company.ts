/**
 * The registered company behind Alastella. Every page reads its legal details from here.
 * A value that is still null hasn't been confirmed: pages show it as a [bracketed] placeholder,
 * so a missing detail is obvious rather than invented. Copy values exactly as on the certificate.
 */
export const COMPANY = {
  legalName: "Alastella Technologies Limited",
  tradingName: "Alastella",
  rcNumber: null as string | null,
  registeredOffice: null as string | null,
  email: null as string | null,
  phone: null as string | null,
  /** How quickly support replies, e.g. "within two working days". */
  supportResponse: null as string | null,
};

/** The confirmed value, or a visible placeholder naming what is missing. */
export const filled = (value: string | null, label: string) => value ?? `[${label}]`;

export const rc = () => filled(COMPANY.rcNumber, "RC number");
export const office = () => filled(COMPANY.registeredOffice, "registered office");
export const email = () => filled(COMPANY.email, "contact email");
