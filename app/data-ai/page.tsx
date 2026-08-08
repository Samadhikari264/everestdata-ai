import Link from "next/link";
import { ArrowRight, Database, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { SiteShell } from "../../components/site-shell";
import { DataAiHeroVisual, DataAiPlatformVisual, DataAiProblemVisual, DataToAiVisual } from "../../components/data-ai-visuals";

const pillars = [
  { icon: Database, title: "Lakehouse architecture", text: "Modern data platforms designed for scale, governance, and AI readiness." },
  { icon: Workflow, title: "Data platform modernization", text: "Operationalize data engineering, lineage, and platform transformation without rework." },
  { icon: ShieldCheck, title: "Governed AI foundations", text: "Treat governance and observability as the foundation of trustworthy enterprise AI." },
  { icon: Sparkles, title: "Agentic AI infrastructure", text: "Prepare the data and access layers so autonomous systems can operate safely and predictably." },
];

const journeySteps = [
  "Assess the current platform, data estate, and AI ambition across business and engineering teams.",
  "Design an enterprise-grade architecture for ingestion, governance, access, and consumption.",
  "Implement the operating model with Databricks, lineage, quality controls, and deployment automation.",
  "Enable the first AI and agentic workloads with observability, guardrails, and measurable ROI.",
];

const solutionPatterns = [
  { title: "Customer 360", text: "Unify transaction, product, and service data so copilots and analytics can reason across the full lifecycle." },
  { title: "Operations intelligence", text: "Connect telemetry and process data to create alerting, forecasting, and workflow automation for enterprise teams." },
  { title: "Knowledge copilots", text: "Ground retrieval and reasoning systems in governed enterprise context instead of fragmented documents." },
];

export default function DataAIPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest Data & AI</p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
                Build the governed data foundation underneath enterprise AI.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                We help organizations modernize their data platforms so AI can scale with governance, trust, and operational control.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact?inquiry=data-ai" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                  Speak with Everest
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  Explore AgentTrace
                </Link>
              </div>
            </div>
            <DataAiHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
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
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Platform model</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            A layered platform that turns fragmented data into an operating system for AI.
          </h2>
        </div>
        <DataAiPlatformVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Modernization journey</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Move from data sprawl to a durable operating model.
            </h2>
            <div className="mt-6 space-y-4">
              {journeySteps.map((item, idx) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[var(--line)] bg-white/70 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-semibold text-[var(--gold)]">
                    {idx + 1}
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,#fdfcf8_0%,#f7f8fc_100%)] p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                <Layers3 className="h-4 w-4" />
                Databricks focus
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">Engineering-native delivery with governance baked in.</h3>
              <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
                We design around Databricks as the operational core for medallion architectures, data pipelines, quality controls, AI feature stores, and secure analytics experiences.
              </p>
            </div>
            <DataAiProblemVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Data to AI bridge</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              The same trusted foundation that powers analytics also powers copilots and agents.
            </h2>
          </div>
          <DataToAiVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--navy)] p-8 text-[var(--soft)]">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Delivery model</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A practical path from assessment to production.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--soft)]/90">
              Everest combines advisory, architecture, implementation, and enablement so teams can move from blueprint to live workloads with less noise and better control.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {solutionPatterns.map((pattern) => (
              <div key={pattern.title} className="rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(10,25,35,0.06)]">
                <h3 className="text-xl font-semibold text-[var(--text)]">{pattern.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{pattern.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Security bridge</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
                Governed data and AI are a single control story.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
                From identity and access patterns to lineage and observability, Everest ensures the same controls strengthening data quality also strengthen trust in AI and agentic systems.
              </p>
            </div>
            <div className="rounded-[28px] border border-[var(--line)] bg-white p-6">
              <div className="flex items-start gap-3 rounded-2xl border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-[var(--blue)]" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">Trust by design</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">Access, lineages, approvals, and monitoring are not bolted on later; they become the operating fabric from the start.</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Identity-aware access",
                  "Policy-driven governance",
                  "Telemetry for AI ops",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--muted)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--page-bg)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-[32px] border border-[var(--line)] bg-white p-8 text-center shadow-[0_18px_48px_rgba(7,30,51,0.06)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Ready to build</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">Bring structure to your data estate and momentum to your AI roadmap.</h2>
            </div>
            <Link href="/contact?inquiry=data-ai" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
              Start the conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
