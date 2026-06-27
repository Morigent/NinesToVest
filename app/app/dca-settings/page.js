"use client";

import { useState } from "react";
import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

// Static data — no client state needed here
const schedules = [
  { asset: "Bitcoin",  ticker: "BTC", freq: "Bi-Weekly", amount: "$1,600", next: "Oct 24, 2024", status: "Active",  icon: "currency_bitcoin", color: "text-primary" },
  { asset: "Ethereum", ticker: "ETH", freq: "Monthly",   amount: "$900",   next: "Nov 01, 2024", status: "Active",  icon: "diamond",          color: "text-tertiary" },
  { asset: "Solana",   ticker: "SOL", freq: "Weekly",    amount: "$250",   next: "Oct 21, 2024", status: "Paused",  icon: "token",            color: "text-secondary" },
];

// ─── Field-level error message ─────────────────────────────────────────────
function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-xs mt-xs text-[11px] text-error font-medium" role="alert">
      <span className="material-symbols-outlined text-[14px]">error</span>
      {message}
    </p>
  );
}

// ─── Create New Rule form with validation ──────────────────────────────────
function CreateRuleForm() {
  const [amount, setAmount]   = useState("");
  const [date,   setDate]     = useState("");
  const [errors, setErrors]   = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const next = {};
    if (!amount || Number(amount) <= 0)
      next.amount = "Amount is required and must be greater than $0.";
    if (!date)
      next.date = "Please select a start date.";
    else if (new Date(date) < new Date(new Date().toDateString()))
      next.date = "Start date cannot be in the past.";
    return next;
  }

  function handleSave(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setAmount("");
      setDate("");
      setTimeout(() => setSuccess(false), 3000);
    }
  }

  function handleCancel() {
    setAmount("");
    setDate("");
    setErrors({});
    setSuccess(false);
  }

  // Input base class + error variant
  const inputBase = "w-full bg-surface-container-low border rounded-xl px-md py-md font-body-md focus:ring-2 outline-none transition-all";
  const inputOk   = "border-outline-variant focus:ring-primary";
  const inputErr  = "border-error focus:ring-error bg-error/5";

  return (
    <div className="bento-card rounded-xl p-xl">
      <h3 className="font-headline-sm text-headline-sm mb-lg">Create New Rule</h3>

      {/* ── Success banner ─── */}
      {success && (
        <div className="flex items-center gap-md mb-lg px-md py-sm bg-primary/10 border border-primary/30 rounded-xl text-primary text-sm font-medium" role="status">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          DCA rule saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">

          {/* Asset — select always has a value, no validation needed */}
          <div>
            <label htmlFor="rule-asset" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">
              Asset
            </label>
            <select
              id="rule-asset"
              className={`${inputBase} ${inputOk} appearance-none`}
            >
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>
          </div>

          {/* Amount — required, > 0 */}
          <div>
            <label htmlFor="rule-amount" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">
              Amount (USD)
            </label>
            <input
              id="rule-amount"
              type="number"
              min="1"
              placeholder="e.g. 500"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                if (errors.amount) setErrors((p) => ({ ...p, amount: "" }));
              }}
              aria-invalid={!!errors.amount}
              aria-describedby="rule-amount-error"
              className={`${inputBase} ${errors.amount ? inputErr : inputOk}`}
            />
            <FieldError message={errors.amount} />
          </div>

          {/* Frequency — select always has a value */}
          <div>
            <label htmlFor="rule-freq" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">
              Frequency
            </label>
            <select
              id="rule-freq"
              className={`${inputBase} ${inputOk} appearance-none`}
            >
              <option>Weekly</option>
              <option>Bi-Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          {/* Start Date — required, not in the past */}
          <div>
            <label htmlFor="rule-date" className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block mb-sm">
              Start Date
            </label>
            <input
              id="rule-date"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                if (errors.date) setErrors((p) => ({ ...p, date: "" }));
              }}
              aria-invalid={!!errors.date}
              aria-describedby="rule-date-error"
              className={`${inputBase} ${errors.date ? inputErr : inputOk}`}
            />
            <FieldError message={errors.date} />
          </div>
        </div>

        <div className="mt-lg flex gap-md justify-end">
          <button
            type="button"
            onClick={handleCancel}
            className="px-xl py-md border border-outline-variant rounded-xl font-bold hover:bg-surface-container transition-all"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-xl py-md bg-primary text-on-primary rounded-xl font-bold hover:brightness-110 transition-all"
          >
            Save Rule
          </button>
        </div>
      </form>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
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

          {/* Create New Rule Form — with validation */}
          <CreateRuleForm />
        </div>

        <Footer />
      </main>
    </AppShell>
  );
}
