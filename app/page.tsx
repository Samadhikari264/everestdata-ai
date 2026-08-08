import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  BeforeAfterFlow,
  HeroArchitectureDiagram,
  IdentityGraph,
  VerticalCardsGrid,
} from "../components/homepage-visuals";
import { SiteShell } from "../components/site-shell";

const legacySystems = [
  {
    label: "Data & AI",
    title: "Everest Data & AI",
    description:
      "Governed data platforms, Lakehouse architecture, AI engineering, and enterprise modernization for production-ready AI.",
    bullets: ["Databricks", "Lakehouse", "Data engineering", "Governance", "AI enablement"],
    href: "/data-ai",
  },
  {
    label: "Security",
    title: "Everest Security",
    description:
      "Lakewatch-powered security intelligence for data platforms and the runtime identity layer protecting autonomous systems.",
    bullets: ["Lakewatch", "Runtime security", "AgentTrace", "Identity drift", "Threat analytics"],
    href: "/security",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-[var(--page-bg)] text-[var(--text)]">
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">
                Enterprise Data, AI and Runtime Security
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:text-7xl">
                Build the data foundation.<br />
                Secure the autonomous enterprise.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Enterprise Data, AI and Runtime Security for the Agentic Era.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?inquiry=agenttrace-demo"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-[var(--brand-deep)]"
                >
                  Request AgentTrace Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/data-ai"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--text)] transition duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  Data & AI Solutions
                </Link>
              </div>
            </div>

            <HeroArchitectureDiagram />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">The enterprise shift</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
              Enterprise architecture is moving from static systems to autonomous execution.
            </h2>
          </div>

          <BeforeAfterFlow />

          <div className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            Everest builds the infrastructure for both sides of that transition: the governed enterprise data and AI foundation, and the runtime security layer that keeps autonomous systems accountable.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Two connected verticals</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
            One parent company. Two operating models. One enterprise mission.
          </h2>
        </div>

        <VerticalCardsGrid items={legacySystems} />
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">AgentTrace spotlight</p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Identity systems know the credential.<br />
                AgentTrace knows the autonomous actor.
              </h2>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-lg leading-8 text-[var(--muted-light)]">
                One autonomous execution can stretch across cloud identity, OAuth sessions, MCP credentials, workload identities, delegated agents, and data principals. AgentTrace correlates these surfaces into a single execution identity so the system can answer who actually acted.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <IdentityGraph />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Identity drift</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
            Credentials were valid. Behavior was not.
          </h2>
        </div>

        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="rounded-[26px] border border-[var(--line)] bg-white p-5">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Expected identity surface</p>
              <div className="space-y-3 text-sm text-[var(--muted)]">
                <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">
                  <span>Cloud role</span>
                  <span className="font-medium text-[var(--navy)]">refund-service</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">
                  <span>OAuth</span>
                  <span className="font-medium text-[var(--navy)]">stripe-refund</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">
                  <span>MCP</span>
                  <span className="font-medium text-[var(--navy)]">customer-profile</span>
                </div>
              </div>
            </div>

            <div className="rounded-[26px] border border-[var(--line)] bg-[linear-gradient(135deg,#fffdf9_0%,#f8f1e5_40%,#f3e0cd_100%)] p-5">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-strong)]">Runtime identity anomaly</p>
                <span className="rounded-full border border-[rgba(196,95,77,0.25)] bg-[rgba(196,95,77,0.08)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--red)]">
                  Drift detected
                </span>
              </div>
              <div className="space-y-3 text-sm text-[var(--text)]">
                <div className="flex items-center justify-between rounded-2xl border border-[rgba(210,162,97,0.2)] bg-[rgba(210,162,97,0.08)] px-3 py-2">
                  <span>workload</span>
                  <span className="font-medium text-[var(--gold-strong)]">payroll-reader</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[rgba(240,177,95,0.2)] bg-[rgba(240,177,95,0.08)] px-3 py-2">
                  <span>MCP</span>
                  <span className="font-medium text-[var(--amber)]">finance-admin</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[rgba(196,95,77,0.25)] bg-[rgba(196,95,77,0.08)] px-3 py-2">
                  <span>token</span>
                  <span className="font-medium text-[var(--red)]">bulk-export</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Security data foundation</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
            Lakewatch provides the scale. AgentTrace provides the identity story.
          </h2>
        </div>

        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr_1fr]">
            <div className="rounded-[26px] border border-[var(--line)] bg-white p-5">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Identity + runtime signals</p>
              <div className="space-y-3 text-sm text-[var(--muted)]">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">Cloud</div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">OAuth</div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">MCP</div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">Agent runtime</div>
              </div>
            </div>

            <div className="rounded-[26px] border border-[var(--line)] bg-[linear-gradient(180deg,#eff7ff_0%,#edf4fb_100%)] p-5">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">Security data plane</p>
              <div className="space-y-3 text-sm text-[var(--text)]">
                <div className="rounded-2xl border border-[rgba(29,110,168,0.14)] bg-white/80 px-3 py-2">Databricks</div>
                <div className="rounded-2xl border border-[rgba(29,110,168,0.14)] bg-white/80 px-3 py-2">Delta</div>
                <div className="rounded-2xl border border-[rgba(29,110,168,0.14)] bg-white/80 px-3 py-2">OCSF</div>
                <div className="rounded-2xl border border-[rgba(29,110,168,0.14)] bg-white/80 px-3 py-2">Lakewatch</div>
              </div>
            </div>

            <div className="rounded-[26px] border border-[var(--line)] bg-[var(--navy)] p-5 text-[var(--soft)]">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">AgentTrace</p>
              <div className="space-y-3 text-sm text-[var(--muted-light)]">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Runtime identity</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Correlation</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Identity drift</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Intent violation</div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[22px] border border-[var(--line)] bg-white p-4">
            <div className="flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Signals</span>
              <ArrowRight className="h-4 w-4 text-[var(--gold)]" />
              <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Lakewatch</span>
              <ArrowRight className="h-4 w-4 text-[var(--gold)]" />
              <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">AgentTrace</span>
              <ArrowRight className="h-4 w-4 text-[var(--gold)]" />
              <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Investigation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--navy)] px-6 py-8 text-[var(--soft)] sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Everest Data</p>
              <h3 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Infrastructure for the agentic enterprise.
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/contact?inquiry=agenttrace-demo" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--navy)] transition duration-200 hover:brightness-110">
                Request AgentTrace Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/data-ai" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Data & AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
