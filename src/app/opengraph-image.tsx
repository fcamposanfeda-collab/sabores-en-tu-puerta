import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sabores en tu Puerta, comida casera a domicilio en Ciudad Real y Puertollano";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F3EC",
          color: "#0E3318",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            background: "#1B5E2A",
            color: "#F6F3EC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 64,
          }}
        >
          S
        </div>
        <div style={{ marginTop: 28, fontSize: 68, fontWeight: 700 }}>Sabores en tu Puerta</div>
        <div style={{ marginTop: 16, fontSize: 32 }}>Comida casera, como en casa.</div>
      </div>
    ),
    size,
  );
}
