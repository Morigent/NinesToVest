import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AI Smart Allocation",
  description: "AI-powered investment allocation picker with risk parameters and performance simulation.",
};

export default function AllocationPage() {
  return (
    <>
      <AppShell searchPlaceholder="Search markets or portfolios...">
        <main className="flex-grow flex flex-col h-screen overflow-y-auto">

        <div className="p-xl flex-grow max-w-[1440px] mx-auto w-full">
          {/* Page Title */}
          <div className="flex justify-between items-end mb-xl">
            <div>
              <nav className="flex items-center gap-xs text-on-surface-variant mb-xs">
                <span className="font-label-md uppercase tracking-wider">Investments</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="font-label-md uppercase tracking-wider text-primary">Smart Allocation</span>
              </nav>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">AI-Smart Allocation Picker</h2>
            </div>
            <div className="flex gap-md">
              <button className="px-md py-sm border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-container transition-colors">Save Simulation</button>
              <button className="px-md py-sm bg-primary text-on-primary font-label-md rounded-xl hover:opacity-90 transition-opacity">Deploy Strategy</button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-lg h-auto">
            {/* Strategy Sliders */}
            <section className="col-span-12 lg:col-span-5 flex flex-col gap-lg">
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                <div className="flex items-center justify-between mb-lg">
                  <h3 className="font-headline-sm text-headline-sm">Strategy Parameters</h3>
                  <span className="material-symbols-outlined text-primary cursor-help">info</span>
                </div>
                {/* AI Toggle */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-md mb-lg flex items-center justify-between">
                  <div className="flex items-center gap-md">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    </div>
                    <div>
                      <p className="font-label-md text-primary">AI Dynamic Balancing</p>
                      <p className="text-xs text-on-surface-variant">Real-time risk adjustment active</p>
                    </div>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full" />
                  </div>
                </div>
                {/* Sliders */}
                <div className="space-y-xl">
                  {[
                    { label: "Risk Appetite",     value: "Aggressive (8.5/10)", min: 1,   max: 10,  step: 0.1, val: 8.5 },
                    { label: "Volatility Ceiling", value: "12.4%",              min: 1,   max: 25,  step: 0.1, val: 12.4 },
                    { label: "Growth vs. Income",  value: "70 / 30",            min: 0,   max: 100, step: 1,   val: 70 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between items-center mb-md">
                        <label className="font-label-md text-on-surface uppercase tracking-wider">{s.label}</label>
                        <span className="font-data-tabular text-primary text-body-lg">{s.value}</span>
                      </div>
                      <input className="w-full h-1.5 cursor-pointer" type="range" min={s.min} max={s.max} step={s.step} defaultValue={s.val} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Sentiment */}
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                <h3 className="font-label-md text-on-surface-variant uppercase tracking-widest mb-md">Current Market Sentiment</h3>
                <div className="flex items-center gap-xl">
                  <div className="text-headline-lg font-headline-lg text-primary">Bullish</div>
                  <div className="flex-grow">
                    <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[74%] rounded-full shadow-[0_0_15px_rgba(139,214,182,0.4)]" />
                    </div>
                    <div className="flex justify-between mt-xs font-label-md text-[10px] text-on-surface-variant">
                      <span>BEARISH</span><span>BULLISH</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Portfolio Donut + Breakdown */}
            <section className="col-span-12 lg:col-span-7 flex flex-col gap-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg h-full">
                {/* Donut Chart */}
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col items-center justify-center relative min-h-[400px]">
                  <h3 className="absolute top-lg left-lg font-headline-sm text-headline-sm">Portfolio Breakdown</h3>
                  <div className="relative w-64 h-64">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" fill="transparent" r="40" stroke="#8bd6b6" strokeDasharray="251.2" strokeDashoffset="138.16" strokeWidth="12" />
                      <circle cx="50" cy="50" fill="transparent" r="40" stroke="#b9c7e0" strokeDasharray="251.2" strokeDashoffset="213.52" strokeWidth="12" style={{ transform: "rotate(162deg)", transformOrigin: "center" }} />
                      <circle cx="50" cy="50" fill="transparent" r="40" stroke="#495468" strokeDasharray="251.2" strokeDashoffset="188.4" strokeWidth="12" style={{ transform: "rotate(216deg)", transformOrigin: "center" }} />
                      <circle cx="50" cy="50" fill="transparent" r="40" stroke="#065f46" strokeDasharray="251.2" strokeDashoffset="213.52" strokeWidth="12" style={{ transform: "rotate(306deg)", transformOrigin: "center" }} />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs font-label-md text-on-surface-variant">TOTAL VALUE</span>
                      <span className="text-headline-md font-headline-md text-on-surface">$2.48M</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-md mt-lg w-full">
                    {[["bg-primary","Equity (45%)"],["bg-secondary","Crypto (15%)"],["bg-tertiary-container","Real Estate (25%)"],["bg-primary-container","Cash/Alt (15%)"]].map(([c,l]) => (
                      <div key={l} className="flex items-center gap-xs">
                        <div className={`w-3 h-3 rounded-sm ${c}`} />
                        <span className="font-label-md text-on-surface-variant">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Asset Allocation List */}
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm mb-lg">Asset Allocation Breakdown</h3>
                  <div className="space-y-md flex-grow">
                    {[
                      { icon: "monitoring",        color: "text-primary",   name: "Tech Growth Index",  sub: "NASDAQ Equity",   val: "$1,116,000", apy: "+12.4% Est. APY" },
                      { icon: "currency_bitcoin",  color: "text-secondary", name: "DeFi Yield Strategy",sub: "Digital Assets",   val: "$372,000",   apy: "+18.2% Est. APY" },
                      { icon: "apartment",         color: "text-tertiary",  name: "Global REITs",       sub: "Real Estate",     val: "$620,000",   apy: "+5.8% Est. APY"  },
                      { icon: "savings",           color: "text-on-primary-container", name: "Liquid Treasury", sub: "Cash Reserves", val: "$372,000", apy: "+4.1% Est. APY" },
                    ].map((a) => (
                      <div key={a.name} className="flex items-center justify-between p-md bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer">
                        <div className="flex items-center gap-md">
                          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center">
                            <span className={`material-symbols-outlined ${a.color}`}>{a.icon}</span>
                          </div>
                          <div>
                            <p className="font-body-md text-on-surface">{a.name}</p>
                            <p className="text-[10px] text-on-surface-variant uppercase">{a.sub}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-data-tabular text-on-surface">{a.val}</p>
                          <p className="text-[10px] text-primary">{a.apy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-lg pt-lg border-t border-outline-variant">
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-on-surface-variant uppercase">Weighted Projected Return</span>
                      <span className="font-headline-md text-headline-md text-primary">+11.65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Simulation Chart */}
            <section className="col-span-12">
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                <div className="flex items-center justify-between mb-xl">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm">Performance Simulation</h3>
                    <p className="text-body-md text-on-surface-variant">5-Year Growth Projection based on current AI strategy</p>
                  </div>
                  <div className="flex bg-surface-container rounded-lg p-1">
                    <button className="px-md py-1 bg-primary text-on-primary rounded-md font-label-md text-xs">1Y</button>
                    <button className="px-md py-1 text-on-surface-variant rounded-md font-label-md text-xs">5Y</button>
                    <button className="px-md py-1 text-on-surface-variant rounded-md font-label-md text-xs">10Y</button>
                  </div>
                </div>
                <div className="h-64 w-full relative flex items-end gap-1">
                  {[30, 42, 38, 55, 68, 62, 75, 88, 95, 85, 92, 100].map((h, i) => (
                    <div key={i} className={`flex-grow rounded-t-lg relative group transition-all hover:opacity-90`}
                      style={{ height: `${h}%`, backgroundColor: `rgba(139, 214, 182, ${0.2 + i * 0.07})` }}>
                      {i === 11 && <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-sm py-xs rounded text-[10px] font-bold">$3.42M</div>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-md font-label-md text-[10px] text-on-surface-variant px-md">
                  {["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
        </main>
      </AppShell>

      {/* FAB */}
      <button className="fixed bottom-xl right-xl w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
      </button>
    </>
  );
}
