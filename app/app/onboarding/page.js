import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Onboarding",
  description: "Set up your personalized OripioFin investment profile and DCA strategy.",
};

const steps = [
  { id: 1, label: "Profile",    icon: "person" },
  { id: 2, label: "Risk",       icon: "analytics" },
  { id: 3, label: "Assets",     icon: "currency_bitcoin" },
  { id: 4, label: "Schedule",   icon: "calendar_month" },
  { id: 5, label: "Review",     icon: "task_alt" },
];

export default function OnboardingPage() {
  const currentStep = 2;

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      {/* Header */}
      <header className="flex items-center justify-between px-xl h-16 border-b border-outline-variant bg-surface/80 backdrop-blur-md sticky top-0 z-50">
        <span className="font-headline-sm text-headline-sm font-bold text-primary">OripioFin</span>
        <Link href="/" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Exit Setup</Link>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-xl">
        <div className="w-full max-w-2xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-xl relative">
            <div className="absolute top-5 left-0 right-0 h-px bg-outline-variant z-0" />
            {steps.map((step) => {
              const done = step.id < currentStep;
              const active = step.id === currentStep;
              return (
                <div key={step.id} className="flex flex-col items-center gap-xs relative z-10">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${done ? "bg-primary text-on-primary" : active ? "bg-primary-container text-on-primary-container ring-2 ring-primary" : "bg-surface-container text-on-surface-variant"}`}>
                    {done
                      ? <span className="material-symbols-outlined text-sm">check</span>
                      : <span className="material-symbols-outlined text-sm">{step.icon}</span>
                    }
                  </div>
                  <span className={`font-label-md text-label-md ${active ? "text-primary" : "text-on-surface-variant"}`}>{step.label}</span>
                </div>
              );
            })}
          </div>

          {/* Step Card */}
          <div className="glass-panel rounded-2xl p-xl">
            <h2 className="font-headline-md text-headline-md mb-xs">Define Your Risk Profile</h2>
            <p className="font-body-md text-on-surface-variant mb-xl">Our AI uses this to calibrate your allocation strategy in real time.</p>

            <div className="space-y-xl">
              {/* Risk Appetite */}
              <div>
                <div className="flex justify-between items-center mb-md">
                  <label className="font-label-md text-on-surface uppercase tracking-wider">Risk Appetite</label>
                  <span className="font-data-tabular text-primary">Moderate (6.0 / 10)</span>
                </div>
                <input type="range" min="1" max="10" step="0.5" defaultValue="6" className="w-full h-1.5 cursor-pointer" />
                <div className="flex justify-between mt-sm text-[10px] text-on-surface-variant uppercase">
                  <span>Conservative</span><span>Aggressive</span>
                </div>
              </div>

              {/* Investment Horizon */}
              <div>
                <label className="font-label-md text-on-surface uppercase tracking-wider block mb-md">Investment Horizon</label>
                <div className="grid grid-cols-3 gap-md">
                  {[["< 1 Year","Short-term"],["1–5 Years","Mid-term"],["5+ Years","Long-term"]].map(([val, sub], i) => (
                    <button key={val} className={`p-md rounded-xl border text-center transition-all ${i === 2 ? "border-primary bg-primary/10" : "border-outline-variant hover:border-primary/50"}`}>
                      <p className="font-label-md text-on-surface">{val}</p>
                      <p className="text-[10px] text-on-surface-variant">{sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Goal */}
              <div>
                <label className="font-label-md text-on-surface uppercase tracking-wider block mb-md">Primary Goal</label>
                <div className="space-y-sm">
                  {[
                    { icon: "trending_up", label: "Capital Growth",   sub: "Maximize long-term asset appreciation" },
                    { icon: "balance",     label: "Balanced Growth",  sub: "Mix of growth and income generation" },
                    { icon: "savings",     label: "Income & Stability",sub: "Preserve capital with steady income" },
                  ].map((g, i) => (
                    <div key={g.label} className={`flex items-center gap-md p-md rounded-xl border cursor-pointer transition-all ${i === 0 ? "border-primary bg-primary/10" : "border-outline-variant hover:border-primary/30"}`}>
                      <span className={`material-symbols-outlined ${i === 0 ? "text-primary" : "text-on-surface-variant"}`}>{g.icon}</span>
                      <div>
                        <p className="font-body-md font-bold">{g.label}</p>
                        <p className="text-[11px] text-on-surface-variant">{g.sub}</p>
                      </div>
                      {i === 0 && <span className="material-symbols-outlined text-primary ml-auto">check_circle</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-xl pt-xl border-t border-outline-variant">
              <button className="px-xl py-md border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-all">Back</button>
              <Link href="/dashboard" className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all">Continue</Link>
            </div>
          </div>

          <p className="text-center font-label-md text-label-md text-on-surface-variant mt-lg">Step {currentStep} of {steps.length}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
