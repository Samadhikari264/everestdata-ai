import Link from "next/link";
import { ArrowRight, DatabaseZap, ShieldAlert } from "lucide-react";
import { SiteShell } from "../../components/site-shell";
import {
  SecurityAgentTraceVisual,
  SecurityBusinessContextVisual,
  SecurityDetectionVisual,
  SecurityHeroVisual,
  SecurityIncidentVisual,
  SecurityPlatformVisual,
  SecurityProblemVisual,
} from "../../components/security-visuals";

const lakewatchCaps = [
  "Security telemetry onboarding",
  "Connector engineering",
  "Bronze / Silver / Gold pipelines",
  "OCSF normalization",
  "Detection engineering",
  "Detection-as-code",
  "Correlation",
  "Threat-hunting datasets",
  "Dashboards and investigations",
  "Data quality and governance",
  "CI/CD",
  "Custom customer security workflows",
];

const solutionPatterns = [
  { title: "Security lake modernization", text: "Cloud, SaaS, and endpoint telemetry into Databricks, OCSF, and Lakewatch-based detections." },
  { title: "Agent security analytics", text: "Agent runtime, identity, MCP, and OTel signals into correlated investigation workflows." },
  { title: "Detection-as-code platform", text: "Git-based detection YAML and SQL flowing through testing, backtesting, and deployment automation." },
];

const deliverySteps = [
  { title: "Assess", text: "Telemetry architecture, source inventory, detection gaps, and agent risk review." },
  { title: "Build", text: "Connectors, pipelines, OCSF, Lakewatch, and detection content." },
  { title: "Operationalize", text: "CI/CD, testing, backtesting, governance, dashboards, and investigations." },
  { title: "Expand", text: "AgentTrace, identity context, investigation, and automation." },
];

export default function SecurityPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest Security</p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
                Security infrastructure for the agentic enterprise.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Everest Security helps enterprises build governed cyber analytics on modern data platforms and adds runtime identity intelligence for autonomous AI agents.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                  Explore AgentTrace
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  Talk to a Security Architect
                </Link>
              </div>
            </div>
            <SecurityHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">The problem</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Security data is everywhere. Context is not.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              Modern security telemetry arrives from cloud, identity, endpoint, SaaS, APIs, OTel, agent runtime systems, and data platforms. It is abundant, but rarely operationally coherent.
            </p>
            <p>
              That creates duplicated pipelines, siloed schemas, inconsistent retention, fragmented detections, and a growing problem when autonomous agents introduce new runtime identities.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Security data foundation</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Turn fragmented telemetry into a durable security data plane.
          </h2>
        </div>
        <SecurityPlatformVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest + Lakewatch</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Turn Databricks Lakewatch into an operational cybersecurity platform.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {lakewatchCaps.map((item) => (
              <div key={item} className="rounded-[24px] border border-[var(--line)] bg-white p-5 text-[var(--text)] shadow-[0_18px_38px_rgba(10,25,35,0.05)]">
                <p className="text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-6 text-lg leading-8 text-[var(--muted)]">
            Lakewatch provides the scalable security data plane. Everest contributes implementation, detection content, and custom cyber solutions designed for heterogeneous enterprise environments.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Detection engineering</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Build detection content that is testable, backtestable, and operational.
          </h2>
        </div>
        <SecurityDetectionVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Security content library</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Designed as reusable security-content packs for common enterprise environments.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Cloud Security",
              "Identity Security",
              "AI-Agent Security",
              "SaaS Security",
              "Vulnerability Telemetry",
              "Application / API Security",
            ].map((label) => (
              <div key={label} className="rounded-[24px] border border-[var(--line)] bg-white p-5 text-sm font-medium text-[var(--text)]">
                {label}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[24px] border border-[rgba(210,162,97,0.18)] bg-[rgba(210,162,97,0.08)] p-5 text-sm leading-7 text-[var(--muted)]">
            Initial content roadmap. Designed as reusable packs rather than fixed, prebuilt coverage claims.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">From alerts to incidents</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            One correlated incident is more useful than a hundred disconnected alerts.
          </h2>
        </div>
        <SecurityIncidentVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">AgentTrace bridge</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Security telemetry tells you what happened. AgentTrace tells you which autonomous actor did it.
            </h2>
          </div>
          <SecurityAgentTraceVisual />
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
              Explore AgentTrace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">AI-agent security</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              AgentTrace is being designed around runtime security problems for autonomous systems.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              The focus is on agent discovery, runtime identity, credential use, tool invocation, MCP activity, delegated agents, identity drift, intent violation, sensitive data access, and blast radius.
            </p>
          </div>
          <div className="space-y-6">
            <SecurityProblemVisual />
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                <ShieldAlert className="h-4 w-4" />
                Runtime focus
              </div>
              <p className="mt-3 text-lg leading-8 text-[var(--muted)]">
                This is not a generic LLM security page. The emphasis remains on the operational security of agent behavior inside enterprise systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Security + business context</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Understand not only that data was accessed, but what it means to the business.
            </h2>
          </div>
          <SecurityBusinessContextVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Representative solution architectures</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Three architecture patterns that show how the platform can be applied.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {solutionPatterns.map((pattern) => (
            <div key={pattern.title} className="rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[0_18px_40px_rgba(10,25,35,0.06)]">
              <h3 className="text-xl font-semibold text-[var(--text)]">{pattern.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{pattern.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Delivery model</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Engage Everest Security from assessment through expansion.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((step) => (
              <div key={step.title} className="rounded-[24px] border border-[var(--line)] bg-white p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--navy)] p-8 text-[var(--soft)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Connection to Data & AI</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Security works better when it understands the data platform.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--soft)]/90">
                Everest Data & AI builds governed enterprise context. Everest Security uses that context for detection and investigation. AgentTrace adds autonomous actor identity.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <DatabaseZap className="h-5 w-5 text-[var(--gold)]" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Platform bridge</span>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  "Everest Data & AI builds governed context",
                  "Everest Security uses that context for detection and investigation",
                  "AgentTrace resolves autonomous actor identity",
                ].map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-3 text-sm text-[var(--soft)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[0_18px_48px_rgba(7,30,51,0.06)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Ready to build</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">Build a security data plane ready for autonomous systems.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
              Talk to a Security Architect
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/agenttrace" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              Explore AgentTrace
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
