import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "OripioFin | Institutional Precision",
  description:
    "High-precision financial terminal designed for clarity. OripioFin strips away the noise, leaving you with institutional-grade data and execution tools.",
};

export default function LandingPage() {
  return (
    <div className="selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="flex items-center justify-between px-xl w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-md h-16 border-b border-outline-variant">
        <div className="flex items-center gap-md">
          <span className="font-headline-md text-headline-md font-bold text-primary">OripioFin</span>
          <div className="hidden md:flex items-center gap-lg ml-xl">
            <Link href="/dashboard" className="font-label-md text-label-md text-primary font-bold">Dashboard</Link>
            <Link href="/analytics" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Analytics</Link>
            <Link href="/subscription" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
            <input className="bg-surface-container-low border border-outline-variant rounded-full pl-10 pr-4 py-1 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64" placeholder="Search markets..." type="text" />
          </div>
          <button className="material-symbols-outlined hover:bg-surface-container-highest rounded-full p-2 text-on-surface-variant transition-colors">notifications</button>
          <button className="material-symbols-outlined hover:bg-surface-container-highest rounded-full p-2 text-on-surface-variant transition-colors">help</button>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container">JS</div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-margin overflow-hidden data-grid-pattern">
          <div className="max-w-max-width mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-primary-container/20 border border-primary/30 mb-lg">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Institutional Grade Environment</span>
            </div>
            <h1 className="font-headline-lg text-6xl md:text-7xl mb-md max-w-4xl tracking-tight">
              Invest without <span className="text-primary italic">distraction</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-xl">
              High-precision financial terminal designed for clarity. OripioFin strips away the noise, leaving you with institutional-grade data and execution tools.
            </p>
            <div className="flex flex-wrap justify-center gap-md mb-32">
              <Link href="/dashboard" className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/10">
                Launch Terminal
              </Link>
              <button className="px-xl py-md border border-outline-variant text-on-surface rounded-xl font-bold hover:bg-surface-container transition-all">
                View Institutions
              </button>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative w-full max-w-5xl group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
              <div className="glass-panel relative rounded-2xl p-sm shadow-2xl overflow-hidden">
                <div className="grid grid-cols-12 gap-sm h-[500px]">
                  {/* Sidebar Mock */}
                  <div className="col-span-1 bg-surface-container-high rounded-lg flex flex-col items-center py-md gap-lg">
                    <span className="material-symbols-outlined text-primary">grid_view</span>
                    <span className="material-symbols-outlined text-on-surface-variant">monitoring</span>
                    <span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
                    <span className="material-symbols-outlined text-on-surface-variant mt-auto">settings</span>
                  </div>
                  {/* Main Chart Mock */}
                  <div className="col-span-8 bg-surface-container-lowest rounded-lg p-lg relative overflow-hidden">
                    <div className="flex justify-between items-center mb-xl">
                      <div>
                        <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Global Index Performance</h3>
                        <p className="font-headline-sm text-headline-sm text-primary">$42,984.12 <span className="text-sm font-normal text-on-surface-variant ml-sm">+2.4%</span></p>
                      </div>
                      <div className="flex gap-xs">
                        <div className="px-sm py-1 bg-primary-container text-on-primary-container text-[10px] rounded">1D</div>
                        <div className="px-sm py-1 hover:bg-surface-container text-[10px] rounded">1W</div>
                        <div className="px-sm py-1 hover:bg-surface-container text-[10px] rounded">1M</div>
                      </div>
                    </div>
                    <div className="h-64 w-full flex items-end gap-1">
                      {[50, 66, 33, 75, 50, 83, 60, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t" style={{ height: `${h}%` }} />
                      ))}
                      <div className="flex-1 bg-primary/30 hover:bg-primary/50 transition-all rounded-t h-4/5 border-t-2 border-primary" />
                      <div className="flex-1 bg-primary/20 hover:bg-primary/40 transition-all rounded-t h-1/2" />
                    </div>
                  </div>
                  {/* Right Stats Mock */}
                  <div className="col-span-3 flex flex-col gap-sm">
                    <div className="flex-1 bg-surface-container-high rounded-lg p-md">
                      <p className="font-label-md text-label-md text-on-surface-variant mb-sm">Active Orders</p>
                      <div className="space-y-sm">
                        <div className="flex justify-between text-[11px] border-b border-outline-variant pb-1"><span>BTC/USD</span><span className="text-primary">BUY</span></div>
                        <div className="flex justify-between text-[11px] border-b border-outline-variant pb-1"><span>ETH/USD</span><span className="text-error">SELL</span></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-surface-container-high rounded-lg p-md">
                      <p className="font-label-md text-label-md text-on-surface-variant mb-sm">Portfolio Health</p>
                      <div className="w-20 h-20 rounded-full border-4 border-primary border-t-transparent mx-auto relative flex items-center justify-center">
                        <span className="font-data-tabular text-sm">84%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-32 px-margin bg-surface-container-lowest">
          <div className="max-w-max-width mx-auto">
            <div className="mb-xl text-center md:text-left">
              <h2 className="font-headline-md text-headline-md mb-sm">Precision Engineering</h2>
              <p className="font-body-md text-on-surface-variant">Automated systems for the disciplined investor.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {/* Feature 1: DCA Reminders */}
              <div className="md:col-span-2 glass-panel rounded-2xl p-xl flex flex-col md:flex-row gap-xl items-center">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-xl flex items-center justify-center mb-md">
                    <span className="material-symbols-outlined">repeat</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-sm">DCA Precision Reminders</h3>
                  <p className="font-body-md text-on-surface-variant">Set your schedule and let OripioFin handle the timing. Non-intrusive notifications exactly when the market metrics align.</p>
                </div>
                <div className="flex-1 w-full bg-surface-container rounded-xl p-md border border-outline-variant">
                  <div className="flex items-center justify-between mb-md">
                    <span className="font-label-md text-label-md">Next Order</span>
                    <span className="px-sm py-xs bg-primary/10 text-primary rounded text-[10px]">T-MINUS 14H</span>
                  </div>
                  <div className="space-y-sm">
                    <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3" />
                    </div>
                    <div className="flex justify-between text-[10px] text-on-surface-variant">
                      <span>$5,000 Monthly Goal</span>
                      <span>$3,340 Reached</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="glass-panel rounded-2xl p-xl">
                <div className="w-12 h-12 bg-tertiary-container text-on-tertiary-container rounded-xl flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined">summarize</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-sm">Condensed Recaps</h3>
                <p className="font-body-md text-on-surface-variant mb-lg">Zero fluff. Weekly AI-driven summaries of global flows and institutional sentiment.</p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Macro Trend Analysis</li>
                  <li className="flex items-center gap-sm text-sm text-on-surface-variant"><span className="material-symbols-outlined text-primary text-lg">check_circle</span>Whale Wallet Tracking</li>
                </ul>
              </div>
              {/* Feature 3 */}
              <div className="glass-panel rounded-2xl p-xl">
                <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-xl flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined">notifications_active</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-sm">Volatility Silencers</h3>
                <p className="font-body-md text-on-surface-variant">Suppress minor noise. Only get alerted when the market reaches your critical support or resistance levels.</p>
              </div>
              {/* Feature 4 */}
              <div className="md:col-span-2 glass-panel rounded-2xl p-xl flex flex-col justify-center">
                <div className="flex flex-col md:flex-row gap-lg">
                  <div className="flex-1">
                    <h3 className="font-headline-sm text-headline-sm mb-sm">Modular Interface</h3>
                    <p className="font-body-md text-on-surface-variant">Arrange your workspace with institutional-grade widgets. Heatmaps, order books, and correlation matrices.</p>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-sm">
                    <div className="aspect-video bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined opacity-20 text-4xl">grid_on</span>
                    </div>
                    <div className="aspect-video bg-surface-container rounded-lg border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined opacity-20 text-4xl">pie_chart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 px-margin relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-xl">
              <h2 className="font-headline-lg text-headline-lg mb-sm">Institutional Access</h2>
              <p className="font-body-md text-on-surface-variant">Choose the level of precision your portfolio demands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              {/* Free Plan */}
              <div className="glass-panel rounded-2xl p-xl flex flex-col">
                <div className="mb-xl">
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase mb-xs">Individual</p>
                  <h3 className="font-headline-sm text-headline-sm mb-md">Self-Directed</h3>
                  <div className="flex items-baseline gap-xs">
                    <span className="font-headline-md text-headline-md text-on-surface">$0</span>
                    <span className="text-on-surface-variant font-label-md">/ FOREVER</span>
                  </div>
                </div>
                <ul className="space-y-md mb-xl flex-grow">
                  {["Real-time basic market data", "Standard DCA scheduling", "1 Dashboard workspace"].map((f) => (
                    <li key={f} className="flex items-center gap-sm font-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary">check</span>{f}
                    </li>
                  ))}
                  <li className="flex items-center gap-sm font-body-md text-on-surface-variant opacity-50 line-through">
                    <span className="material-symbols-outlined">close</span>Institutional Flow Analysis
                  </li>
                </ul>
                <button className="w-full py-md border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-all">Start Free</button>
              </div>
              {/* Pro Plan */}
              <div className="glass-panel rounded-2xl p-xl flex flex-col relative ring-2 ring-primary bg-surface-container-high shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-md px-md py-1 rounded-full uppercase tracking-widest text-[10px]">Recommended</div>
                <div className="mb-xl">
                  <p className="font-label-md text-label-md text-primary uppercase mb-xs">Professional</p>
                  <h3 className="font-headline-sm text-headline-sm mb-md">Asset Manager</h3>
                  <div className="flex items-baseline gap-xs">
                    <span className="font-headline-md text-headline-md text-on-surface">$49</span>
                    <span className="text-on-surface-variant font-label-md">/ MONTHLY</span>
                  </div>
                </div>
                <ul className="space-y-md mb-xl flex-grow">
                  {["High-frequency market data", "Smart volatility reminders", "Unlimited modular workspaces", "Institutional Flow & Sentiment", "Priority 24/7 Desk Support"].map((f) => (
                    <li key={f} className="flex items-center gap-sm font-body-md">
                      <span className="material-symbols-outlined text-primary">check_circle</span>{f}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all">Go Pro</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-margin text-center">
          <div className="max-w-2xl mx-auto glass-panel p-xl rounded-3xl border-dashed border-2 border-outline-variant">
            <h2 className="font-headline-md text-headline-md mb-md">Ready for absolute clarity?</h2>
            <p className="font-body-md text-on-surface-variant mb-xl">Join over 12,000 institutional and high-net-worth investors managing their portfolios with OripioFin.</p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <input className="bg-surface-container border border-outline-variant rounded-xl px-md py-md focus:ring-2 focus:ring-primary outline-none min-w-[300px]" placeholder="Enter professional email" type="email" />
              <button className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold whitespace-nowrap">Get Access</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
