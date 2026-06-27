import AppShell from "@/components/AppShell";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Transaction History",
  description: "Full history of DCA transactions, purchases, and portfolio activity.",
};

const transactions = [
  { id: "TXN-8821", date: "Oct 15, 2024", type: "DCA Buy", asset: "Bitcoin", ticker: "BTC", amount: "$3,200.00", units: "0.0481 BTC", status: "Completed", statusColor: "text-primary bg-primary/10" },
  { id: "TXN-8820", date: "Oct 14, 2024", type: "DCA Buy", asset: "Ethereum", ticker: "ETH", amount: "$1,800.00", units: "0.512 ETH", status: "Completed", statusColor: "text-primary bg-primary/10" },
  { id: "TXN-8819", date: "Oct 10, 2024", type: "Rebalance", asset: "Solana", ticker: "SOL", amount: "$500.00", units: "3.28 SOL", status: "Pending", statusColor: "text-secondary bg-secondary/10" },
  { id: "TXN-8818", date: "Sep 30, 2024", type: "DCA Buy", asset: "Bitcoin", ticker: "BTC", amount: "$3,200.00", units: "0.0502 BTC", status: "Completed", statusColor: "text-primary bg-primary/10" },
  { id: "TXN-8817", date: "Sep 15, 2024", type: "DCA Buy", asset: "Ethereum", ticker: "ETH", amount: "$1,800.00", units: "0.498 ETH", status: "Completed", statusColor: "text-primary bg-primary/10" },
  { id: "TXN-8816", date: "Sep 01, 2024", type: "Withdrawal", asset: "USDT", ticker: "USDT", amount: "$10,000.00", units: "10,000 USDT", status: "Failed", statusColor: "text-error bg-error/10" },
];

export default function TransactionsPage() {
  return (
    <AppShell searchPlaceholder="Search transactions, assets, or IDs...">
      <main className="flex-grow flex flex-col min-h-screen">

        <div className="p-xl flex-grow max-w-[1440px] mx-auto w-full">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-xl">
            <div>
              <h2 className="font-headline-lg text-headline-lg">Transaction History</h2>
              <p className="font-body-md text-on-surface-variant">Complete log of all DCA purchases and portfolio activity.</p>
            </div>
            <div className="flex gap-md">
              <button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-xl font-label-md text-on-surface hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-sm">filter_list</span>Filters
              </button>
              <button className="flex items-center gap-xs px-md py-sm bg-primary-container text-on-primary-container rounded-xl font-label-md hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm">download</span>Export CSV
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg mb-xl">
            {[
              { label: "Total Invested", value: "$124,000", sub: "Lifetime DCA purchases", icon: "savings",       color: "text-primary" },
              { label: "Transactions",   value: "284",       sub: "All time",              icon: "receipt_long", color: "text-secondary" },
              { label: "Avg. DCA Size",  value: "$436.62",   sub: "Per transaction",       icon: "calculate",    color: "text-tertiary" },
            ].map((c) => (
              <div key={c.label} className="bento-card rounded-xl p-lg flex items-center gap-lg">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center">
                  <span className={`material-symbols-outlined ${c.color}`}>{c.icon}</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{c.label}</p>
                  <h3 className="font-headline-sm text-headline-sm font-data-tabular">{c.value}</h3>
                  <p className="text-[11px] text-on-surface-variant">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Transaction Table */}
          <div className="bento-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    {["ID","Date","Type","Asset","Amount","Units","Status"].map(h => (
                      <th key={h} className="px-lg py-md font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-surface-container-high transition-colors cursor-pointer">
                      <td className="px-lg py-md font-data-tabular text-on-surface-variant text-[11px]">{t.id}</td>
                      <td className="px-lg py-md font-data-tabular text-on-surface-variant text-sm">{t.date}</td>
                      <td className="px-lg py-md font-label-md text-label-md">{t.type}</td>
                      <td className="px-lg py-md">
                        <div>
                          <p className="font-body-md font-bold">{t.asset}</p>
                          <p className="text-[10px] text-on-surface-variant uppercase">{t.ticker}</p>
                        </div>
                      </td>
                      <td className="px-lg py-md font-data-tabular">{t.amount}</td>
                      <td className="px-lg py-md font-data-tabular text-on-surface-variant text-sm">{t.units}</td>
                      <td className="px-lg py-md">
                        <span className={`px-sm py-xs rounded text-[10px] font-bold ${t.statusColor}`}>{t.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-lg py-md border-t border-outline-variant flex items-center justify-between">
              <span className="font-label-md text-label-md text-on-surface-variant">Showing 6 of 284 transactions</span>
              <div className="flex gap-xs">
                <button className="px-md py-xs border border-outline-variant rounded-lg font-label-md text-on-surface-variant hover:bg-surface-container transition-colors">Previous</button>
                <button className="px-md py-xs bg-primary-container text-on-primary-container rounded-lg font-label-md hover:opacity-90">Next</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </AppShell>
  );
}
