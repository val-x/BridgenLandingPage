"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  GA_MEASUREMENT_ID?: string;
}

export default function Analytics({
  GA_MEASUREMENT_ID = "G-XXXXXXXXXX",
}: AnalyticsProps) {
  useEffect(() => {
    // Track page views
    const handleRouteChange = () => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", GA_MEASUREMENT_ID, {
          page_location: window.location.href,
          page_title: document.title,
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const trackScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = Math.round(
          (scrollTop / (docHeight - winHeight)) * 100
        );

        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          trackEvent("Scroll Depth", `${scrollPercent}%`, scrollPercent);
        }
      };

      window.addEventListener("scroll", trackScroll, { passive: true });
      return () => window.removeEventListener("scroll", trackScroll);
    };

    handleRouteChange();
    const removeScrollTracker = trackScrollDepth();

    return () => {
      removeScrollTracker();
    };
  }, [GA_MEASUREMENT_ID]);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            // Enhanced ecommerce settings
            custom_map: {
              'custom_parameter_1': 'course_interest',
              'custom_parameter_2': 'placement_success'
            }
          });

          // Enhanced measurement for forms and interactions
          gtag('config', '${GA_MEASUREMENT_ID}', {
            enhanced_measurement: {
              scrolls: true,
              outbound_clicks: true,
              site_search: true,
              video_engagement: true,
              file_downloads: true
            }
          });
        `}
      </Script>

      {/* Facebook Pixel (Optional) */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          fbq('init', 'YOUR_PIXEL_ID'); // Replace with your pixel ID
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Hotjar (Optional - for user behavior analysis) */}
      <Script id="hotjar" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6}; // Replace with your Hotjar ID
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
}

// Utility functions for tracking events
export const trackEvent = (
  action: string,
  category: string,
  value?: number
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      value: value,
    });
  }
};

export const trackConversion = (
  conversionType:
    | "course_inquiry"
    | "phone_call"
    | "whatsapp_click"
    | "form_submit"
) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "conversion", {
      send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // Replace with your conversion tracking
      event_category: "Lead Generation",
      event_label: conversionType,
    });
  }
};

export const trackCourseInterest = (courseName: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "course_interest", {
      event_category: "Course Engagement",
      event_label: courseName,
      custom_parameter_1: courseName,
    });
  }
};

export const trackPlacementSuccess = (studentData?: any) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", "placement_success", {
      event_category: "Business Outcome",
      event_label: "Student Placement",
      custom_parameter_2: "placement_achieved",
    });
  }
};
