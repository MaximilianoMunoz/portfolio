import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { getMessages, hasLocale, locales } from "@/lib/i18n";

export const alt = "Maximiliano Muñoz López — Senior Flutter Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getMessages(hasLocale(lang) ? lang : "es");
  const stack = ["Flutter", "Dart", "Firebase", "Stripe", "Agora", "Next.js"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0b0b0c",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(192,57,43,0.35), transparent 55%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 56px 56px, 56px 56px",
          color: "#ededec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#C0392B",
              color: "#fff",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            MM
          </div>
          <div style={{ fontSize: 26, color: "#e5533f", letterSpacing: 4, textTransform: "uppercase" }}>
            {t.hero.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>{siteConfig.name}</div>
          <div style={{ marginTop: 24, fontSize: 34, color: "#a1a19c", maxWidth: 950, lineHeight: 1.3 }}>
            {t.hero.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {stack.map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #2e2e33",
                fontSize: 22,
                color: "#d4d4d0",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
