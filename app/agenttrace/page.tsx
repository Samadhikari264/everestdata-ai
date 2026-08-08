import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AgentPassportCard,
  AgentTraceHeroGraphic,
  BlastRadiusMap,
  ExecutionTimeline,
  IdentityBreakdownGraphic,
  IdentityDriftPanel,
  IntentViolationPanel,
  LakewatchArchitecture,
  RuntimeIdentityGraph,
  SignalPath,
} from "../../components/agenttrace-visuals";
import { SiteShell } from "../../components/site-shell";

export default function AgentTracePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-[var(--page-bg)] text-[var(--text)]">
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--line)]" />
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Everest AgentTrace™</p>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] md:text-6xl">
                Every AI agent needs an accountable identity.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
                AI agents operate through changing chains of cloud identities, tokens, tools, MCP servers, service accounts, delegated agents, and data permissions. AgentTrace reconstructs them into one runtime identity.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#identity-graph" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                  Explore the Identity Graph
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/demo" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                  Run Demo
                </Link>
              </div>
            </div>

            <AgentTraceHeroGraphic />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">The problem</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
              AI agents do not have one stable identity.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              During a single execution, an agent may act through AWS, Azure, or Google Cloud identities, workload identities, service accounts, temporary cloud credentials, OAuth or OIDC identities, API keys, MCP credentials, delegated agents, database principals, SaaS identities, and data-platform identities.
            </p>
            <p>
              Security products may see each identity independently. The missing question is simple: which autonomous agent actually performed this action? AgentTrace reconstructs those identity surfaces into one agent execution identity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Why identity breaks</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
            The credentials can all be valid while accountability is still lost.
          </h2>
        </div>

        <IdentityBreakdownGraphic />
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Agent passport</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              The runtime identity layer for autonomous operations.
            </h2>
          </div>

          <AgentPassportCard />
        </div>
      </section>

      <section id="identity-graph" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Runtime identity graph</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
            AgentTrace does not replace cloud identity providers. It correlates the runtime evidence they emit.
          </h2>
        </div>

        <RuntimeIdentityGraph />

        <div className="mt-6">
          <SignalPath />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Identity drift</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
            Credentials were valid. Behavior was not.
          </h2>
        </div>

        <IdentityDriftPanel />
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Intent violation</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
              AgentTrace compares what an agent was intended to do against what it actually did.
            </h2>
          </div>

          <IntentViolationPanel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Execution trace</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
            One explainable execution story from runtime to investigation.
          </h2>
        </div>

        <ExecutionTimeline />
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Blast radius</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              AgentTrace helps determine the full downstream impact of an autonomous action.
            </h2>
          </div>

          <BlastRadiusMap />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Architecture</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] md:text-4xl">
            Lakewatch provides the scale. AgentTrace provides the identity intelligence.
          </h2>
        </div>

        <LakewatchArchitecture />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--navy)] px-6 py-8 text-[var(--soft)] sm:px-8 sm:py-10 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">AgentTrace</p>
              <h3 className="max-w-xl text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Give every autonomous agent an accountable runtime identity.
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-medium text-[var(--navy)] transition hover:brightness-110">
                Run the AgentTrace Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact?inquiry=design-partner" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Become a Design Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
