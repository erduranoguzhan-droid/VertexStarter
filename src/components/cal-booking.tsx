"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { site } from "@/lib/site";

export function CalBooking() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: true,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#2dd4a7" },
          dark: { "cal-brand": "#2dd4a7" },
        },
      });
    })();
  }, []);

  return (
    <div className="overflow-hidden rounded-card bg-surface ring-line">
      <Cal
        calLink={site.calLink}
        style={{ width: "100%", height: "100%", minHeight: "640px", overflow: "auto" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
