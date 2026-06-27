"use client";

import { useState } from "react";
import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

const recaps = [
  {
    id: 1,
    date: "June 27, 2026",
    summary: "Bitcoin surges past previous ATH amid new institutional inflows",
    content: "Today marked a significant milestone as Bitcoin officially surpassed its previous all-time high, driven by a fresh wave of institutional capital following the approval of several new sovereign wealth fund mandates. Market analysts point to a combination of tightening supply on exchanges and increased geopolitical uncertainty as key catalysts for this price action. Ethereum and Solana also saw sympathetic rallies, though Bitcoin's dominance continued to increase. We expect this momentum to carry into the upcoming week as options expiry approaches.",
  },
  {
    id: 2,
    date: "June 26, 2026",
    summary: "Federal Reserve hints at upcoming rate cuts during FOMC",
    content: "The Federal Open Market Committee concluded its highly anticipated two-day meeting today, leaving rates unchanged but heavily signaling that rate cuts are on the horizon for late Q3. In his press conference, Chairman Powell noted that inflation has sustainably trended toward the 2% target. Risk assets reacted positively to the dovish tone, with major indices closing up and crypto markets seeing a modest bump. This macro shift provides a supportive backdrop for continued DCA strategies over the medium term.",
  },
  {
    id: 3,
    date: "June 25, 2026",
    summary: "Major regulatory clarity achieved in the European Union",
    content: "The European Parliament formally passed the revised MiCA framework today, providing long-awaited regulatory clarity for digital asset service providers operating within the bloc. This legislative milestone is expected to open the floodgates for traditional European banks to offer custody and trading services for top-tier crypto assets. As a result of this news, several major European institutions announced new digital asset initiatives. Market sentiment in the Eurozone is exceptionally bullish, contrasting with the more cautious approach currently seen in US regulatory circles.",
  }
];

function truncateWords(text, limit) {
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
}

function RecapCard({ recap }) {
  const [expanded, setExpanded] = useState(false);
  const wordLimit = 30;

  const words = recap.content.split(" ");
  const needsTruncation = words.length > wordLimit;

  return (
    <div 
      onClick={() => setExpanded(!expanded)}
      className="bento-card p-xl rounded-2xl cursor-pointer hover:bg-surface-container-high transition-all group"
    >
      <div className="flex justify-between items-start mb-md">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">{recap.date}</h2>
          <h3 className="font-headline-md text-headline-md text-on-surface">{recap.summary}</h3>
        </div>
        {needsTruncation && (
          <button 
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors flex-shrink-0"
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            <span className="material-symbols-outlined">
              {expanded ? "expand_less" : "expand_more"}
            </span>
          </button>
        )}
      </div>
      
      <div className="relative">
        <p className={`font-body-md text-body-md text-on-surface-variant leading-relaxed transition-all duration-300 ${expanded ? "" : "opacity-80"}`}>
          {expanded ? recap.content : truncateWords(recap.content, wordLimit)}
        </p>
        {!expanded && needsTruncation && (
          <span className="text-primary font-bold text-sm mt-sm inline-block group-hover:underline">
            Read full recap
          </span>
        )}
      </div>
    </div>
  );
}

export default function DailyRecapPage() {
  return (
    <AppShell searchPlaceholder="Search daily recaps...">
      <main className="flex-grow flex flex-col min-h-screen">
        <div className="p-xl flex-grow max-w-[900px] mx-auto w-full">
          {/* Page Header */}
          <div className="mb-xl">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Daily Recap</h1>
            <p className="font-body-md text-on-surface-variant">Market news and insights, summarized for institutional clarity.</p>
          </div>

          {/* Recap Feed */}
          <div className="flex flex-col gap-lg">
            {recaps.map((recap) => (
              <RecapCard key={recap.id} recap={recap} />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </AppShell>
  );
}
