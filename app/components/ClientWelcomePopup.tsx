"use client";

import dynamic from "next/dynamic";

// Dynamically import the WelcomePopup component with no SSR
const WelcomePopup = dynamic(() => import("./WelcomePopup"), { ssr: false });

export default function ClientWelcomePopup() {
  return <WelcomePopup />;
}
