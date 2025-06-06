import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bridgen - Interior Design & CAD Courses";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#003366",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Background patterns */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "80%",
              height: "100%",
              backgroundImage:
                "radial-gradient(circle at 70% 40%, #4cc9f0 0%, transparent 35%)",
              opacity: 0.3,
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "70%",
              height: "70%",
              backgroundImage:
                "radial-gradient(circle at 30% 80%, #2a9d8f 0%, transparent 40%)",
              opacity: 0.3,
            }}
          />

          {/* Content container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "86%",
              height: "86%",
              borderLeft: "6px solid #e63946",
              borderRight: "6px solid #2a9d8f",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              position: "relative",
              padding: "60px 40px",
              zIndex: 10,
            }}
          >
            {/* Logo substitute */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  fontSize: 120,
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #003366, #4cc9f0)",
                  backgroundClip: "text",
                  color: "transparent",
                  letterSpacing: "-2px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                BRIDGEN
              </div>
            </div>

            <div
              style={{
                width: "60%",
                height: "4px",
                background: "linear-gradient(to right, #e63946, #2a9d8f)",
                marginBottom: 40,
              }}
            />

            <div
              style={{
                fontSize: 48,
                color: "#3d4247",
                textAlign: "center",
                marginBottom: 20,
                fontWeight: 500,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Bridge to next Generation
            </div>

            <div
              style={{
                fontSize: 36,
                color: "#2a9d8f",
                textAlign: "center",
                fontWeight: 600,
                padding: "0 20px",
                maxWidth: "90%",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Expert-led courses in Interior Design & CAD
            </div>

            {/* Decorative elements */}
            <div
              style={{
                position: "absolute",
                bottom: 30,
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: "#003366",
                  fontWeight: 600,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                bridgentraining.com
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#e63946",
                  }}
                />
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#2a9d8f",
                  }}
                />
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    background: "#4cc9f0",
                  }}
                />
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
