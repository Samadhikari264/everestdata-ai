import Link from "next/link";
import { ArrowRight, DatabaseZap, Layers3, Search, ShieldAlert } from "lucide-react";
import { SiteShell } from "../../components/site-shell";

const capabilities = [
  "Security telemetry onboarding",
  "Security data engineering",
  "Custom connectors",
  "Bronze / Silver / Gold security pipelines",
  "OCSF normalization",
  "Detection engineering",
  "Detection-as-code",
  "Correlation and security analytics",
  "Investigation workflows",
  "AI-agent telemetry ingestion",
];

const stack = [
  { icon: DatabaseZap, title: "Security telemetry", text: "Collect and normalize runtime signals across cloud, SaaS, and data platforms." },
  { icon: Layers3, title: "Lakehouse security data plane", text: "Operationalize telemetry in a scalable security data environment." },
  { icon: Search, title: "Identity and behavior analytics", text: "Correlate activity to distinguish valid credentials from compromised autonomous actions." },
  { icon: ShieldAlert, title: "Investigation and response", text: "Turn fragmented events into a clear, explainable security narrative." },
];

export default function SecurityPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest Security</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
              Security infrastructure for modern data platforms and autonomous AI.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              We help organizations operationalize Lakewatch and build the security intelligence layer needed to understand agent behavior, runtime identity, and real risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                Request a security briefing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                See AgentTrace
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Lakewatch security solutions</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Data-rich security operations for the age of autonomous systems.
            </h2>
          </div>
          <div className="mt-6 text-lg leading-8 text-[var(--muted)] lg:mt-0">
            <p>
              The security challenge is no longer just identity verification. It is runtime story reconstruction: understanding who actually acted, which identities were used, whether behavior deviated from intent, and what data or downstream systems were affected.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Capabilities</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Turn Lakehouse telemetry into operational cyber intelligence.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--line)] bg-[rgba(255,255,255,0.55)] p-5 text-[var(--text)]">
              <p className="text-base leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">System design</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Lakewatch tells you what happened at scale. AgentTrace tells you which agent did it.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stack.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/3 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-base leading-7 text-[var(--muted-light)]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Operational value</p>
              <h3 className="text-3xl font-semibold tracking-tight text-[var(--text)]">Security that explains behavior, not just events.</h3>
            </div>
            <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
              <p>We help enterprises operationalize signals from cloud, data, and AI systems into a single, investable security story.</p>
              <p>That means better threat detection, faster investigations, and a clearer understanding of autonomous risk before it becomes material.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
