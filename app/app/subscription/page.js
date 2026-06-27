import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Subscription Management",
  description: "Manage your OripioFin subscription plan and billing details.",
};

export default function SubscriptionPage() {
  return (
    <AppShell searchPlaceholder="Search billing or plan details...">
      <main className="flex-grow flex flex-col min-h-screen">

        <div className="p-xl flex-grow max-w-[1440px] mx-auto w-full">
          {/* Page Header */}
          <div className="mb-xl">
            <h2 className="font-headline-lg text-headline-lg">Subscription Management</h2>
            <p className="font-body-md text-on-surface-variant">Manage your plan and billing details.</p>
          </div>

          {/* Current Plan Banner */}
          <div className="relative bento-card rounded-xl p-xl mb-xl overflow-hidden border-primary/40 ring-1 ring-primary/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-lg">
              <div>
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest">Current Plan</span>
                <h3 className="font-headline-md text-headline-md mt-xs">Asset Manager Pro</h3>
                <p className="font-body-md text-on-surface-variant mt-xs">
                  Renews on <strong className="text-on-surface">November 1, 2024</strong> · $49 / month
                </p>
              </div>
              <div className="flex gap-md flex-shrink-0">
                <button className="px-xl py-md border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-all text-on-surface">Change Plan</button>
                <button className="px-xl py-md bg-error/10 text-error rounded-xl font-bold hover:bg-error/20 transition-all">Cancel</button>
              </div>
            </div>
          </div>

          {/* Plan Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
            {[
              { name: "Self-Directed", price: "$0",  period: "/ FOREVER",  badge: null,        active: false, features: ["Real-time basic data","Standard DCA scheduling","1 workspace","—","—"] },
              { name: "Asset Manager", price: "$49", period: "/ MONTHLY",  badge: "YOUR PLAN", active: true,  features: ["High-frequency data","Smart volatility alerts","Unlimited workspaces","Institutional Flow","Priority Support"] },
              { name: "Enterprise",    price: "Custom", period: "",         badge: null,        active: false, features: ["Everything in Pro","Dedicated account manager","API Access","White-label options","SLA Guarantee"] },
            ].map((plan) => (
              <div key={plan.name} className={`glass-panel rounded-2xl p-xl flex flex-col relative ${plan.active ? "ring-2 ring-primary bg-surface-container-high" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-md px-md py-1 rounded-full uppercase tracking-widest text-[10px]">{plan.badge}</div>
                )}
                <p className={`font-label-md text-label-md uppercase mb-xs ${plan.active ? "text-primary" : "text-on-surface-variant"}`}>{plan.name}</p>
                <div className="flex items-baseline gap-xs mb-xl">
                  <span className="font-headline-md text-headline-md text-on-surface">{plan.price}</span>
                  {plan.period && <span className="text-on-surface-variant font-label-md">{plan.period}</span>}
                </div>
                <ul className="space-y-md mb-xl flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`flex items-center gap-sm font-body-md ${f === "—" ? "text-on-surface-variant opacity-40" : "text-on-surface-variant"}`}>
                      <span className="material-symbols-outlined text-primary text-sm">{f === "—" ? "remove" : "check_circle"}</span>{f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-md rounded-xl font-bold transition-all ${plan.active ? "bg-primary text-on-primary hover:brightness-110" : "border border-outline-variant hover:bg-surface-container"}`}>
                  {plan.active ? "Current Plan" : "Select Plan"}
                </button>
              </div>
            ))}
          </div>

          {/* Billing History */}
          <div className="bento-card rounded-xl overflow-hidden">
            <div className="px-xl py-lg border-b border-outline-variant">
              <h3 className="font-headline-sm text-headline-sm">Billing History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    {["Date","Description","Amount","Status","Receipt"].map(h => (
                      <th key={h} className="px-xl py-md font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {[
                    { date: "Oct 1, 2024",  desc: "Asset Manager Pro — Monthly", amount: "$49.00", status: "Paid" },
                    { date: "Sep 1, 2024",  desc: "Asset Manager Pro — Monthly", amount: "$49.00", status: "Paid" },
                    { date: "Aug 1, 2024",  desc: "Asset Manager Pro — Monthly", amount: "$49.00", status: "Paid" },
                    { date: "Jul 1, 2024",  desc: "Asset Manager Pro — Monthly", amount: "$49.00", status: "Paid" },
                  ].map((r) => (
                    <tr key={r.date} className="hover:bg-surface-container-high transition-colors">
                      <td className="px-xl py-md font-data-tabular text-on-surface-variant text-sm">{r.date}</td>
                      <td className="px-xl py-md font-body-md">{r.desc}</td>
                      <td className="px-xl py-md font-data-tabular">{r.amount}</td>
                      <td className="px-xl py-md"><span className="px-sm py-xs rounded bg-primary/10 text-primary text-[10px] font-bold">{r.status}</span></td>
                      <td className="px-xl py-md">
                        <button className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-sm">download</span>PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </AppShell>
  );
}
