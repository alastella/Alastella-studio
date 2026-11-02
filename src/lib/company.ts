/**
 * The registered company behind Alastella. Every page reads its public details from here.
 * The RC number, registered office and phone number are deliberately not published on any site.
 * A value left as null isn't shown anywhere: the sentence or row that needs it is left out.
 */
export const COMPANY = {
  legalName: "Alastella Technologies Limited",
  tradingName: "Alastella",
  /** Public contact address at our own domain. */
  email: null as string | null,
  /** How quickly support replies, e.g. "within two working days". */
  supportResponse: null as string | null,
  /** The refund policy, in a sentence or two. */
  refundPolicy: null as string | null,
  /** Whether prices include VAT, e.g. "Prices include VAT." */
  vat: null as string | null,
};
