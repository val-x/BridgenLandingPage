import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bridgen - Our Courses";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  try {
    // Use the logo directly as a URL instead of fetching it as an ArrayBuffer
    const logoUrl = new URL(
      "/images/bridgen_logo_highres.png",
      "https://bridgentraining.com"
    ).toString();

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "linear-gradient(to bottom, #F0F5FF, #DBEAFE)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              background: "white",
              padding: 40,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              width: "90%",
              height: "85%",
            }}
          >
            {/* Logo image */}
            <img
              src={logoUrl}
              alt="Bridgen Logo"
              width={250}
              height={125}
              style={{ marginBottom: 20 }}
            />

            <div
              style={{
                fontSize: 64,
                fontWeight: "bold",
                color: "#1E40AF",
                marginBottom: 20,
              }}
            >
              Professional Design Courses
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#3B82F6",
                textAlign: "center",
                marginBottom: 40,
              }}
            >
              Bridgen
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div
                  style={{ fontSize: 24, fontWeight: "bold", color: "#1F2937" }}
                >
                  AutoCAD
                </div>
              </div>
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div
                  style={{ fontSize: 24, fontWeight: "bold", color: "#1F2937" }}
                >
                  Interior Design
                </div>
              </div>
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div
                  style={{ fontSize: 24, fontWeight: "bold", color: "#1F2937" }}
                >
                  3ds Max
                </div>
              </div>
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div
                  style={{ fontSize: 24, fontWeight: "bold", color: "#1F2937" }}
                >
                  SketchUp
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (e: any) {
    console.log(`Error generating image: ${e.message}`);
    return new Response("Error generating image", { status: 500 });
  }
}
