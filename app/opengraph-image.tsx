import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Genuitech — Building AI Agents That Work Like Real Employees";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const logoData = readFileSync(join(process.cwd(), "public", "Genuitech Favicon.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#07091a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "30%",
            width: 700,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(0,212,255,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 44 }}>
          <img src={logoSrc} width={72} height={72} />
          <span style={{ color: "#f1f5f9", fontSize: 44, fontWeight: 700, letterSpacing: "-0.5px" }}>
            Genuitech
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 800,
            color: "#f8fafc",
            lineHeight: 1.1,
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <span>Building AI Agents That</span>
          <span
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #818cf8 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Work Like Real Employees
          </span>
        </div>

        {/* Subtext */}
        <div style={{ color: "#94a3b8", fontSize: 26, marginBottom: 52, display: "flex" }}>
          Custom AI applications for SMBs — deployed in weeks, not months
        </div>

        {/* URL pill */}
        <div
          style={{
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: 999,
            padding: "10px 28px",
            color: "#00d4ff",
            fontSize: 22,
            display: "flex",
          }}
        >
          genuitech.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
