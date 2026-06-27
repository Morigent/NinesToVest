"use client";

import { useState } from "react";
import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

const assetRows = [
  { icon: "currency_bitcoin", color: "text-primary",   name: "Bitcoin",  ticker: "BTC / Tier 1", weight: "45.2%", balance: "$564,273.18", perf: "+2.45%", pos: true },
  { icon: "diamond",          color: "text-tertiary",   name: "Ethereum", ticker: "ETH / Tier 1", weight: "28.8%", balance: "$359,537.01", perf: "+1.12%", pos: true },
  { icon: "token",            color: "text-secondary",  name: "Solana",   ticker: "SOL / Tier 2", weight: "12.5%", balance: "$156,049.05", perf: "-0.84%", pos: false },
];

export default function DashboardPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppShell searchPlaceholder="Search markets, assets, reports...">
        <main className="p-xl flex-grow max-w-[1440px] mx-auto w-full">
          {/* Hero Stats Bento */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-xl">
            {/* Main Portfolio Value */}
            <div className="md:col-span-8 bento-card p-xl rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-lg opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">monitoring</span>
              </div>
              <div className="relative z-10">
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-xs">Total Portfolio Value</p>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md tabular-nums">$1,248,392.42</h2>
                <div className="flex items-center gap-sm text-primary">
                  <span className="material-symbols-outlined">trending_up</span>
                  <span className="font-body-md text-body-md font-bold">
                    +12.4% <span className="font-normal opacity-60">vs last month</span>
                  </span>
                </div>
              </div>
              <div className="mt-xl h-48 w-full flex items-end gap-1">
                {[40, 65, 55, 80, 70, 90, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-grow bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Fast Actions */}
            <div className="md:col-span-4 flex flex-col gap-lg">
              <div className="bento-card p-lg rounded-xl flex items-center justify-between group cursor-pointer">
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Next DCA Date</p>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Oct 24, 2024</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary-container">schedule</span>
                </div>
              </div>
              <div className="bento-card p-lg rounded-xl flex-grow relative overflow-hidden bg-gradient-to-br from-surface-container to-surface-container-highest">
                <div className="relative z-10 flex flex-col h-full">
                  <p className="font-label-md text-label-md text-on-surface-variant mb-xs">Alpha Score</p>
                  <h3 className="font-headline-sm text-headline-sm text-primary">89.2</h3>
                  <div className="mt-auto">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="w-full bg-primary py-sm text-on-primary font-bold rounded-xl hover:brightness-110 transition-all"
                    >
                      Optimize Strategy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asset Table */}
          <div className="bento-card rounded-xl overflow-hidden mb-xl">
            <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm">Underlying Asset Breakdown</h3>
              <div className="flex items-center gap-md">
                <button className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-md">filter_list</span> Filter
                </button>
                <button className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-md">download</span> Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    {["Asset", "Weight", "Balance", "Performance (24h)"].map((h) => (
                      <th
                        key={h}
                        className={`px-xl py-md font-label-md text-label-md uppercase text-on-surface-variant${
                          h === "Performance (24h)" ? " text-right" : ""
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {assetRows.map((row) => (
                    <tr key={row.name} className="hover:bg-surface-container-high transition-colors">
                      <td className="px-xl py-md">
                        <div className="flex items-center gap-md">
                          <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
                            <span className={`material-symbols-outlined ${row.color}`}>{row.icon}</span>
                          </div>
                          <div>
                            <p className="font-body-md text-body-md font-bold">{row.name}</p>
                            <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{row.ticker}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-xl py-md font-data-tabular text-data-tabular">{row.weight}</td>
                      <td className="px-xl py-md font-data-tabular text-data-tabular">{row.balance}</td>
                      <td className={`px-xl py-md font-data-tabular text-data-tabular text-right ${row.pos ? "text-primary" : "text-error"}`}>
                        {row.perf}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <Footer />
      </AppShell>

      {/* DCA Reminder Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-md">
          <div className="bg-surface-container-high border border-outline rounded-xl w-full max-w-lg shadow-2xl overflow-hidden transform transition-all scale-100 opacity-100">
            <div className="relative h-32 bg-primary-container overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-primary-container text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  update
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-on-primary-container hover:bg-black/10 rounded-full p-1 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-xl">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm text-center">
                Upcoming DCA Reminder
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-center mb-xl">
                Your scheduled 0.5 BTC accumulation is set for tomorrow at 08:00 UTC. Ensure your USDT sub-account has
                sufficient liquidity to avoid execution failure.
              </p>
              <div className="bg-surface-container-highest p-md rounded-xl border border-outline-variant mb-xl flex items-center justify-between">
                <div className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant">Available USDT</p>
                    <p className="font-body-md text-body-md font-bold">$122,400.00</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-label-md text-on-surface-variant">Requirement</p>
                  <p className="font-body-md text-body-md font-bold text-error">$32,000.00</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md">
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex-grow bg-primary py-md rounded-xl text-on-primary font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  Confirm Schedule
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="flex-grow border border-outline-variant py-md rounded-xl text-on-surface hover:bg-surface-container-highest transition-colors"
                >
                  Edit Parameters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
