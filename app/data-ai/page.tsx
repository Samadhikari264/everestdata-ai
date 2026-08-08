import Link from "next/link";
import { ArrowRight, Database, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { SiteShell } from "../../components/site-shell";

const pillars = [
  { icon: Database, title: "Lakehouse architecture", text: "Modern data platforms designed for scale, governance, and AI readiness." },
  { icon: Workflow, title: "Data platform modernization", text: "Operationalize data engineering, lineage, and platform transformation without rework." },
  { icon: ShieldCheck, title: "Governed AI foundations", text: "Treat governance and observability as the foundation of trustworthy enterprise AI." },
  { icon: Sparkles, title: "Agentic AI infrastructure", text: "Prepare the data and access layers so autonomous systems can operate safely and predictably." },
];

export default function DataAIPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest Data & AI</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
              Build the governed data foundation underneath enterprise AI.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              We help organizations modernize their data platforms so AI can scale with governance, trust, and operational control.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                Speak with Everest
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Explore AgentTrace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">The foundation problem</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              AI that can’t trust the data behind it will not scale.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              Enterprises are moving from isolated experimentation to production-grade AI systems. That creates a new requirement: the data layer must be governed, observable, and operationally resilient.
            </p>
            <p>
              Everest designs the platform architecture, engineering workflows, and governance model needed to support AI at enterprise scale without creating new compliance, access, or trust problems.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Core capabilities</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Data platform capability at the speed of enterprise AI.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.56)] p-6 shadow-[0_20px_45px_rgba(10,25,35,0.06)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--gold)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[var(--text)]">{title}</h3>
              <p className="leading-7 text-[var(--muted)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">How we work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                From platform strategy to production engineering.
              </h2>
            </div>
            <div className="space-y-6">
              {[
                "Architecture and platform design for Lakehouse and AI operating environments",
                "Databricks implementation across engineering, governance, and observability",
                "Governance and lineage design to support responsible AI deployment",
                "Operational enablement for teams building customer-facing AI products",
              ].map((item, idx) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/3 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--gold)]/15 text-sm font-semibold text-[var(--gold)]">
                    {idx + 1}
                  </div>
                  <p className="text-base leading-7 text-[var(--soft)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Outcomes</p>
              <h3 className="text-3xl font-semibold tracking-tight text-[var(--text)]">AI that is scalable, governed, and trusted.</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["Platform readiness", "Governed foundations for AI and data products"],
                ["Operational visibility", "Lineage, access, and control from data to model"],
                ["Velocity without chaos", "Faster delivery with less governance drift"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gold)]">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
