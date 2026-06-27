import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Recurring DCA Settings",
  description: "Configure and manage your recurring Dollar-Cost Averaging schedule and rules.",
};

const schedules = [
  { asset: "Bitcoin",  ticker: "BTC", freq: "Bi-Weekly",  amount: "$1,600", next: "Oct 24, 2024", status: "Active",  icon: "currency_bitcoin", color: "text-primary" },
  { asset: "Ethereum", ticker: "ETH", freq: "Monthly",    amount: "$900",   next: "Nov 01, 2024", status: "Active",  icon: "diamond",          color: "text-tertiary" },
  { asset: "Solana",   ticker: "SOL", freq: "Weekly",     amount: "$250",   next: "Oct 21, 2024", status: "Paused",  icon: "token",            color: "text-secondary" },
];

export default function DcaSettingsPage() {
  return (
    <AppShell searchPlaceholder="Search recurring rules...">
      <main className="flex-grow flex flex-col h-screen overflow-y-auto">

        <div className="p-xl flex-grow max-w-[1440px] mx-auto w-full">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-xl">
            <div>
              <h2 className="font-headline-lg text-headline-lg">Recurring DCA Settings</h2>
              <p className="font-body-md text-on-surface-variant">Automate your accumulation strategy with precision scheduling.</p>
            </div>
            <button className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary rounded-xl font-label-md hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-sm">add</span>New Rule
            </button>
          </div>

          {/* Active Schedules */}
          <div className="bento-card rounded-xl overflow-hidden mb-xl">
            <div className="px-xl py-lg border-b border-outline-variant flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm">Active Schedules</h3>
              <span className="font-label-md text-label-md text-on-surface-variant">{schedules.length} rules</span>
            </div>
            <div className="divide-y divide-outline-variant/30">
              {schedules.map((s) => (
                <div key={s.asset} className="px-xl py-lg flex items-center gap-lg hover:bg-surface-container-high transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                    <span className={`material-symbols-outlined ${s.color}`}>{s.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-sm mb-xs">
                      <p className="font-body-md font-bold">{s.asset}</p>
                      <span className="text-[10px] text-on-surface-variant uppercase">{s.ticker}</span>
                    </div>
                    <div className="flex items-center gap-lg text-[11px] text-on-surface-variant">
                      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-xs">repeat</span>{s.freq}</span>
                      <span className="flex items-center gap-xs"><span className="material-symbols-outlined text-xs">schedule</span>Next: {s.next}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-headline-sm text-headline-sm font-data-tabular">{s.amount}</p>
                    <p className="text-[10px] text-on-surface-variant">per execution</p>
                  </div>
                  <span className={`px-sm py-xs rounded text-[10px] font-bold flex-shrink-0 ${s.status === "Active" ? "bg-primary/10 text-primary" : "bg-outline-variant/30 text-on-surface-variant"}`}>
                    {s.status}
                  </span>
                  <div className="flex items-center gap-xs flex-shrink-0">
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors p-1">edit</button>
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors p-1">delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Create New Rule Form */}
          <div className="bento-card rounded-xl p-xl">
            <h3 className="font-headline-sm text-headline-sm mb-lg">Create New Rule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">Asset</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-md py-md font-body-md focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                  <option>Bitcoin (BTC)</option>
                  <option>Ethereum (ETH)</option>
                  <option>Solana (SOL)</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">Amount (USD)</label>
                <input type="number" placeholder="e.g. 500" className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-md py-md font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">Frequency</label>
                <select className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-md py-md font-body-md focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                  <option>Weekly</option>
                  <option>Bi-Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">Start Date</label>
                <input type="date" className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-md py-md font-body-md focus:ring-2 focus:ring-primary outline-none transition-all" />
              </div>
            </div>
            <div className="mt-lg flex gap-md justify-end">
              <button className="px-xl py-md border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-all">Cancel</button>
              <button className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all">Save Rule</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </AppShell>
  );
}
