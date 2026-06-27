import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio Analytics",
  description: "Deep-dive performance metrics and risk exposure analysis for your NinesToVest portfolio.",
};

export default function AnalyticsPage() {
  return (
    <AppShell searchPlaceholder="Search assets, markers...">
      <main className="flex-grow flex flex-col min-h-screen">
        <div className="p-xl space-y-xl max-w-max-width mx-auto w-full">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-md">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Portfolio Analytics</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Deep-dive performance metrics and risk exposure analysis.</p>
            </div>
            <div className="flex gap-sm">
              <button className="px-md py-sm rounded-xl bg-surface-container border border-outline-variant font-label-md text-label-md text-on-surface hover:border-primary transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>Last 12 Months
              </button>
              <button className="px-md py-sm rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md hover:opacity-90 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">download</span>Export Report
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-lg auto-rows-min">
            {/* Net Growth Chart */}
            <section className="md:col-span-8 bento-card rounded-xl p-lg flex flex-col gap-md h-[400px]">
              <div className="flex justify-between items-center">
                <h3 className="font-headline-sm text-headline-sm">Net Growth</h3>
                <span className="px-sm py-xs rounded bg-primary-container/20 text-primary font-label-md text-label-md">+24.8% YTD</span>
              </div>
              <div className="flex-grow relative overflow-hidden">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 800 240">
                  <line className="chart-grid-line" x1="0" x2="800" y1="40" y2="40" />
                  <line className="chart-grid-line" x1="0" x2="800" y1="100" y2="100" />
                  <line className="chart-grid-line" x1="0" x2="800" y1="160" y2="160" />
                  <line className="chart-grid-line" x1="0" x2="800" y1="220" y2="220" />
                  <path d="M0,240 L0,200 C100,180 150,220 200,160 C250,100 300,130 400,80 C500,30 600,100 700,40 C750,20 800,45 800,45 L800,240 Z" fill="url(#grad1)" fillOpacity="0.2" />
                  <path d="M0,200 C100,180 150,220 200,160 C250,100 300,130 400,80 C500,30 600,100 700,40 C750,20 800,45 800,45" fill="none" stroke="#8bd6b6" strokeWidth="3" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#8bd6b6", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#8bd6b6", stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute bottom-0 left-0 w-full flex justify-between font-label-md text-label-md text-on-surface-variant opacity-50 px-2 pb-2">
                  {["JAN","MAR","MAY","JUL","SEP","NOV"].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </section>

            {/* Key Metrics */}
            <div className="md:col-span-4 grid grid-cols-1 gap-lg">
              {[
                { label: "Sharpe Ratio", value: "2.41", icon: "trending_up", color: "text-primary", note: "Excellent risk-adjusted return relative to benchmark (1.8)." },
                { label: "Annualized ROI", value: "18.6%", icon: "payments", color: "text-secondary", note: "Exceeding institutional target of 12.5% p.a." },
              ].map((m) => (
                <section key={m.label} className="bento-card rounded-xl p-lg flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{m.label}</p>
                      <h4 className="font-headline-lg text-headline-lg font-data-tabular">{m.value}</h4>
                    </div>
                    <span className={`material-symbols-outlined ${m.color} text-[32px]`}>{m.icon}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">{m.note}</p>
                </section>
              ))}
            </div>

            {/* Performance Table */}
            <section className="md:col-span-12 bento-card rounded-xl overflow-hidden">
              <div className="p-lg flex justify-between items-center bg-surface-container-high/50">
                <h3 className="font-headline-sm text-headline-sm">Historical Performance Breakdown</h3>
                <span className="font-label-md text-label-md text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">circle</span> Benchmark: MSCI World
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-body-md border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant">
                      {["Period","Portfolio Return","Benchmark","Alpha","Max Drawdown","Status"].map(h => (
                        <th key={h} className="p-lg font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="font-data-tabular">
                    {[
                      { period: "Q4 2023", ret: "+8.4%",  bench: "+5.2%", alpha: "+3.2%", draw: "-1.2%", status: "OUTPERFORM", sc: "bg-primary/10 text-primary" },
                      { period: "Q3 2023", ret: "+4.1%",  bench: "+4.8%", alpha: "-0.7%", draw: "-2.4%", status: "NEUTRAL",     sc: "bg-outline-variant/30 text-on-surface-variant" },
                      { period: "Q2 2023", ret: "+12.2%", bench: "+7.1%", alpha: "+5.1%", draw: "-0.8%", status: "OUTPERFORM", sc: "bg-primary/10 text-primary" },
                      { period: "Q1 2023", ret: "-2.1%",  bench: "-1.5%", alpha: "-0.6%", draw: "-5.4%", status: "UNDERPERFORM",sc: "bg-error/10 text-error" },
                    ].map((row) => (
                      <tr key={row.period} className="border-b border-outline-variant hover:bg-surface-container transition-colors">
                        <td className="p-lg font-bold">{row.period}</td>
                        <td className={`p-lg ${row.ret.startsWith("+") ? "text-primary" : "text-error"}`}>{row.ret}</td>
                        <td className="p-lg">{row.bench}</td>
                        <td className={`p-lg ${row.alpha.startsWith("+") ? "text-primary" : "text-error"}`}>{row.alpha}</td>
                        <td className="p-lg text-error">{row.draw}</td>
                        <td className="p-lg"><span className={`px-sm py-xs rounded text-[10px] font-bold ${row.sc}`}>{row.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </AppShell>
  );
}
