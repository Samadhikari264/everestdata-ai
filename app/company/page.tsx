import Link from "next/link";
import { ArrowRight, Compass, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { SiteShell } from "../../components/site-shell";

const principles = [
  { icon: Compass, title: "Govern before autonomy", text: "Trustworthy AI does not start at the model. It starts at the governance layer." },
  { icon: LockKeyhole, title: "Control runtime identity", text: "The critical challenge is not credential validity but autonomous behavior and accountability." },
  { icon: ShieldCheck, title: "Design for enterprise reality", text: "Production systems must work inside complex regulated and operational environments." },
  { icon: Sparkles, title: "Explain every action", text: "Investigation should be understandable to the people making the decisions." },
];

export default function CompanyPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Everest Data</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
              Building the governed data foundation behind the autonomous enterprise.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Everest brings together enterprise data architecture, AI platform engineering, and runtime security to help organizations scale AI responsibly.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                Partner with Everest
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/data-ai" className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                Explore our capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Why now</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
              AI is moving from assistants to autonomous execution.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              Organizations are rapidly moving from copilots to decision-support and action-taking systems. That creates a new requirement for secure, observable, governed operations.
            </p>
            <p>
              The companies that win will be the ones that can connect platform design, governance, and runtime security into a single system of trust.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Principles</p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            A disciplined approach to operating in the agentic era.
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

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Mission</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Make enterprise AI safe, observable, and governable.
              </h2>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/3 p-6 text-lg leading-8 text-[var(--muted-light)]">
              <p>
                Everest exists to help organizations build the data, AI, and security infrastructure required to operate with confidence in the agentic enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
