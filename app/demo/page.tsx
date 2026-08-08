import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, ShieldAlert, Workflow } from "lucide-react";
import { SiteShell } from "../../components/site-shell";

const events = [
  { time: "11:02", label: "Agent started", status: "expected" },
  { time: "11:03", label: "Customer lookup", status: "expected" },
  { time: "11:04", label: "Fraud check", status: "expected" },
  { time: "11:05", label: "Refund $231", status: "expected" },
  { time: "11:06", label: "payroll-reader acquired", status: "drift" },
  { time: "11:06", label: "finance-admin MCP invoked", status: "drift" },
  { time: "11:07", label: "bulk export of customer records", status: "violation" },
  { time: "11:07", label: "External transfer", status: "critical" },
];

export default function DemoPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Interactive demo</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
              Detecting the moment an agent crossed its operating boundary.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              A realistic incident narrative showing how AgentTrace reconstructs identity drift, intent violation, and blast radius from scattered runtime signals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                Explore AgentTrace
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Request a briefing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-5 flex items-center gap-3">
              <Workflow className="h-5 w-5 text-[var(--gold)]" />
              <h2 className="text-xl font-semibold text-[var(--text)]">CustomerRefundAgent</h2>
            </div>
            <div className="space-y-4">
              {events.map(({ time, label, status }) => (
                <div key={`${time}-${label}`} className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-3">
                  <div className="w-14 text-sm font-medium text-[var(--muted)]">{time}</div>
                  <div className="flex-1 text-base text-[var(--text)]">{label}</div>
                  <div className="min-w-[110px] text-right text-xs font-semibold uppercase tracking-[0.16em]">
                    {status === "expected" ? (
                      <span className="text-[#1d6a55]">Expected</span>
                    ) : status === "drift" ? (
                      <span className="text-[#b8742a]">Identity drift</span>
                    ) : status === "violation" ? (
                      <span className="text-[#9d4d2c]">Intent violation</span>
                    ) : (
                      <span className="text-[#a31e1e]">Critical</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--navy)] p-6 text-[var(--soft)]">
              <div className="mb-5 flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-[var(--gold)]" />
                <h3 className="text-xl font-semibold text-white">Agent identity drift detected</h3>
              </div>
              <p className="text-4xl font-semibold tracking-tight text-white">Risk: 97</p>
              <div className="mt-6 grid gap-4 text-sm text-[var(--muted-light)] sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Events</p>
                  <p className="mt-2 text-lg text-white">42</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Identities</p>
                  <p className="mt-2 text-lg text-white">7</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Executions</p>
                  <p className="mt-2 text-lg text-white">1</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6">
              <div className="mb-5 flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-[var(--gold)]" />
                <h3 className="text-xl font-semibold text-[var(--text)]">What the system saw</h3>
              </div>
              <ul className="space-y-3 text-base leading-7 text-[var(--muted)]">
                <li><strong className="text-[var(--text)]">Expected:</strong> refund-role, stripe-refund, customer-profile-mcp</li>
                <li><strong className="text-[var(--text)]">Observed:</strong> refund-role, stripe-refund, customer-profile-mcp, payroll-reader, finance-admin-mcp, bulk-export-token</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <CheckCircle2 className="mb-4 h-5 w-5 text-[#1d6a55]" />
              <h3 className="text-xl font-semibold text-[var(--text)]">Identity drift</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">The agent acquired permissions and tools outside its intended operating envelope.</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <AlertTriangle className="mb-4 h-5 w-5 text-[#b8742a]" />
              <h3 className="text-xl font-semibold text-[var(--text)]">Intent violation</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">The runtime behavior diverged from the declared business purpose and allowed actions.</p>
            </div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6">
              <ShieldAlert className="mb-4 h-5 w-5 text-[#a31e1e]" />
              <h3 className="text-xl font-semibold text-[var(--text)]">Blast radius</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">Seven identities mapped to one compromised autonomous execution with real downstream impact.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
