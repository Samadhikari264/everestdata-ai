import Link from "next/link";
import { ArrowRight, Compass, Layers3, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { SiteShell } from "../../components/site-shell";
import {
  CompanyHeroVisual,
  CompanyRoadmapVisual,
  CompanyShiftVisual,
  CompanyStrategyVisual,
  CompanyTechMapVisual,
  CompanyVerticalsVisual,
} from "../../components/company-visuals";

const principles = [
  { icon: Compass, title: "Data before AI", text: "AI quality depends on the quality, governance, and context of enterprise data." },
  { icon: LockKeyhole, title: "Security must follow the actor", text: "Security cannot stop at credentials when autonomous agents operate across multiple identity systems." },
  { icon: ShieldCheck, title: "Open data beats another silo", text: "Where practical, security analytics should operate on the enterprise data platform rather than forcing another proprietary copy." },
  { icon: Sparkles, title: "Engineering over hype", text: "Everest builds measurable, explainable systems rather than generic AI features." },
];

const operatingModel = [
  { title: "Discover", text: "Understand architecture, data, identity, and business context." },
  { title: "Design", text: "Create governed target architectures for data and security." },
  { title: "Build", text: "Implement production-grade systems with technical rigor." },
  { title: "Prove", text: "Use working prototypes and technical validation to de-risk delivery." },
  { title: "Operationalize", text: "Support CI/CD, governance, monitoring, security, and optimization." },
];

export default function CompanyPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest Data</p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
                Infrastructure for the agentic enterprise.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                Everest Data builds the governed data foundations and runtime security systems needed for autonomous enterprise systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact?inquiry=strategic" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                  Talk to Everest Data
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  Explore AgentTrace
                </Link>
              </div>
            </div>
            <CompanyHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Why Everest exists</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              The enterprise architecture is changing.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              The shift from human-led workflows to agent-led execution creates a new infrastructure requirement: enterprises need governed data that AI can safely operate on, and security systems that can understand autonomous actors.
            </p>
            <p>
              Everest exists to build that foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Architecture shift</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            From human → application → data to human → agent → tools / APIs / agents → enterprise data.
          </h2>
        </div>
        <CompanyShiftVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Two verticals, one mission</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Data & AI and Security are two parts of the same infrastructure challenge.
            </h2>
          </div>
          <CompanyVerticalsVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Our point of view</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            A disciplined point of view for the agentic era.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }) => (
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

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">How we build</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              An engineering workflow built for complex enterprise systems.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-5">
            {operatingModel.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-[var(--line)] bg-white p-5">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                  <Layers3 className="h-4 w-4" />
                  {index + 1}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-[var(--text)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Product + services strategy</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Services create context. Context creates reusable product capability.
          </h2>
        </div>
        <CompanyStrategyVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">AgentTrace flagship</p>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
                Runtime identity security for AI agents.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                One agent. Many identities. One trace.
              </p>
              <div className="mt-6">
                <Link href="/agenttrace" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                  Explore AgentTrace
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-[var(--line)] bg-white p-6 text-lg leading-8 text-[var(--muted)]">
              AgentTrace reconstructs cloud identities, workload identities, OAuth tokens, MCP credentials, service accounts, tools, delegated agents, and data principals into one accountable runtime execution.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Technical DNA</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            The technical breadth required to build for the agentic enterprise.
          </h2>
        </div>
        <CompanyTechMapVisual />
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Where we are going</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Our direction for the next phase of platform development.
            </h2>
          </div>
          <CompanyRoadmapVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Company story</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Everest Data was founded from hands-on experience building enterprise data, security telemetry, and AI-observability systems.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
              The company thesis emerged from a practical gap: enterprises are investing rapidly in AI agents, but the underlying data, identity, and security infrastructure is not evolving at the same speed. Everest Data is being built to close that gap.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Principles</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              How Everest approaches complex systems.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Build what can be explained",
              "Security by architecture",
              "Data with context",
              "Cloud-agnostic by design",
              "Prove before scale",
            ].map((principle) => (
              <div key={principle} className="rounded-[24px] border border-[var(--line)] bg-white p-5 text-sm font-medium text-[var(--text)]">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[0_18px_48px_rgba(7,30,51,0.06)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Ready to build</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)]">Build the infrastructure for what comes next.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?inquiry=strategic" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
              Talk to Everest Data
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
