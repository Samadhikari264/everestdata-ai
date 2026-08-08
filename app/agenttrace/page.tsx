import Link from "next/link";
import { ArrowRight, Binary, Blocks, BrainCircuit, GanttChartSquare, ShieldAlert, Waypoints } from "lucide-react";
import { SiteShell } from "../../components/site-shell";

const concepts = [
  { icon: Waypoints, title: "Agent Discovery", text: "Identify autonomous actors operating across enterprise systems and workflows." },
  { icon: Blocks, title: "Agent Passport", text: "Track identity, ownership, purpose, environment, tool access, and risk posture." },
  { icon: Binary, title: "Agent Principal", text: "Create a normalized identity independent of any single IAM provider." },
  { icon: GanttChartSquare, title: "Runtime Identity Graph", text: "Map the complete execution chain from owner to role, token, tool, delegated agent, and data access." },
  { icon: BrainCircuit, title: "Identity Drift", text: "Compare expected versus observed behavior and permissions during execution." },
  { icon: ShieldAlert, title: "Intent Violation", text: "Detect when the agent acts outside its declared purpose or operating boundaries." },
];

export default function AgentTracePage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest AgentTrace™</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
              IAM identifies credentials. AgentTrace identifies autonomous actors.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Runtime identity security for AI agents, designed to reconstruct the real execution story behind autonomous actions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                View demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Request a briefing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">The problem</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              Traditional identity systems cannot answer who the agent really was.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              AI agents do not maintain a single, stable identity. During a single autonomous execution, the same agent may operate through cloud IAM roles, temporary STS credentials, OAuth tokens, MCP credentials, database identities, delegated agents, and tool-specific credentials.
            </p>
            <p>
              Security systems can often see each credential individually, but they cannot reliably answer: which autonomous agent actually performed this action?
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">How AgentTrace works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            Correlating scattered runtime signals into one execution identity.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {concepts.map(({ icon: Icon, title, text }) => (
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
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Identity story</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                A single execution story from owner to attack surface.
              </h2>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/3 p-6">
              <ul className="space-y-3 text-base leading-7 text-[var(--muted-light)]">
                {[
                  "Human Owner",
                  "AI Agent",
                  "Runtime Session",
                  "IAM Role",
                  "OAuth Token",
                  "MCP Identity",
                  "Delegated Agent",
                  "Enterprise Data",
                ].map((item, idx) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gold)]/15 text-xs font-semibold text-[var(--gold)]">
                      {idx + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Key outcome</p>
              <h3 className="text-3xl font-semibold tracking-tight text-[var(--text)]">Credentials were valid. Behavior was not.</h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["7 identities", "Same agent appeared across runtime systems"],
                ["1 execution", "A single autonomous action reconstructed end-to-end"],
                ["97 risk score", "Identity drift and intent violation exposed the blast radius"],
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
