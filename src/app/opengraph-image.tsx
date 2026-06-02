import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bricknclick — A digital agency that ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          <div style={{ width: 10, height: 10, background: "#ff6b1a", borderRadius: 999 }} />
          A digital agency that ships
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 144, fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 0.9, display: "flex" }}>
            We don't just build.
          </div>
          <div style={{ fontSize: 144, fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 0.9, display: "flex" }}>
            We <span style={{ color: "#ff6b1a", marginLeft: 24 }}>own it.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-0.04em", display: "flex" }}>
            brick<span style={{ color: "#ff6b1a", fontStyle: "italic" }}>n</span>click
          </div>
          <div style={{ fontSize: 22, color: "#9a9a9a", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Ads · Web · Content
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
