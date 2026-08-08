import { ArrowRight, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { SiteShell } from "../../components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Contact</p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-6xl">
                Start the conversation on the platform behind your AI program.
              </h1>
              <div className="mt-8 space-y-5 text-lg leading-8 text-[var(--muted)]">
                <p>Tell us where you are in your data, AI, or security roadmap.</p>
                <p>We help enterprises design, modernize, secure, and operationalize the systems behind autonomous business operations.</p>
              </div>
            </div>

            <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[var(--shadow-soft)]">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="text-sm text-[var(--muted)]">
                    <span className="mb-2 block font-medium text-[var(--text)]">Name</span>
                    <input className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Your name" />
                  </label>
                  <label className="text-sm text-[var(--muted)]">
                    <span className="mb-2 block font-medium text-[var(--text)]">Work email</span>
                    <input className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="you@company.com" />
                  </label>
                </div>

                <label className="block text-sm text-[var(--muted)]">
                  <span className="mb-2 block font-medium text-[var(--text)]">Company</span>
                  <input className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Company name" />
                </label>

                <label className="block text-sm text-[var(--muted)]">
                  <span className="mb-2 block font-medium text-[var(--text)]">Primary need</span>
                  <select className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                    <option>Data & AI platform strategy</option>
                    <option>Lakewatch / security modernization</option>
                    <option>AgentTrace evaluation</option>
                    <option>Other enterprise AI / security initiative</option>
                  </select>
                </label>

                <label className="block text-sm text-[var(--muted)]">
                  <span className="mb-2 block font-medium text-[var(--text)]">Project details</span>
                  <textarea rows={5} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Share your goals, architecture context, and security or AI requirements." />
                </label>

                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                  Send inquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <Mail className="mb-4 h-5 w-5 text-[var(--gold)]" />
            <h3 className="mb-3 text-xl font-semibold text-white">Design partners</h3>
            <p className="text-base leading-7 text-[var(--muted-light)]">For strategic platform work, data modernization programs, and security architecture engagements.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <MessageSquareText className="mb-4 h-5 w-5 text-[var(--gold)]" />
            <h3 className="mb-3 text-xl font-semibold text-white">Security briefings</h3>
            <p className="text-base leading-7 text-[var(--muted-light)]">Discuss Lakewatch design, runtime identity security, and AI-agent monitoring opportunities.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
            <ShieldCheck className="mb-4 h-5 w-5 text-[var(--gold)]" />
            <h3 className="mb-3 text-xl font-semibold text-white">Product evaluation</h3>
            <p className="text-base leading-7 text-[var(--muted-light)]">Request a technical review of AgentTrace and use cases for autonomous identity defense.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
