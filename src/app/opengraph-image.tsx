import { ImageResponse } from "next/og";

export const alt = "Alastella: AI software built for everyday use.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STRIPES = "repeating-linear-gradient(-45deg, #0f0f0e 0px, #0f0f0e 22px, #ffd400 22px, #ffd400 44px)";

// Share card: the headline with its highlighter, and two strips of hazard tape.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#efede6", position: "relative", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "60px 64px 0", gap: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 700, color: "#0f0f0e" }}>
            <div style={{ width: 46, height: 46, borderRadius: 11, background: "repeating-linear-gradient(-45deg, #0f0f0e 0px, #0f0f0e 7px, #ffd400 7px, #ffd400 14px)", border: "3px solid #0f0f0e", display: "flex" }} />
            alastella
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 800, letterSpacing: -4, lineHeight: 1.0, color: "#0f0f0e" }}>
            <span>AI software built</span>
            <div style={{ display: "flex" }}>
              <span>for&nbsp;</span>
              <span style={{ background: "#ffd400", padding: "0 10px", borderRadius: 6 }}>everyday use.</span>
            </div>
          </div>
          <div style={{ fontSize: 28, color: "#4f4d48", display: "flex" }}>An AI software development company building AI software for everyday use.</div>
        </div>
        <div style={{ position: "absolute", left: -40, right: -40, bottom: 70, height: 56, background: STRIPES, transform: "rotate(-3deg)", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 150 }}>
          <div style={{ background: "#ffd400", padding: "6px 24px", fontSize: 22, fontWeight: 700, letterSpacing: 6, color: "#0f0f0e", display: "flex" }}>BUILT BY ALASTELLA</div>
        </div>
        <div style={{ position: "absolute", left: -40, right: -40, bottom: 34, height: 56, background: STRIPES, transform: "rotate(2.5deg)", display: "flex", alignItems: "center", justifyContent: "flex-start", paddingLeft: 150 }}>
          <div style={{ background: "#ffd400", padding: "6px 24px", fontSize: 22, fontWeight: 700, letterSpacing: 6, color: "#0f0f0e", display: "flex" }}>AI SOFTWARE FOR EVERYDAY USE</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
