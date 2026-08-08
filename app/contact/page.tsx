import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SiteShell } from "../../components/site-shell";
import { ContactForm } from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Everest Data",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.22em] uppercase text-[var(--gold)]">Contact</p>
              <h1 className="text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
                Start the conversation around the work that matters.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
                Select the path that fits your priorities, then share the context that will help the Everest team respond with specificity.
              </p>
            </div>

            <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] sm:p-6">
              <Suspense fallback={<div className="rounded-[24px] border border-[var(--line)] bg-white p-6 text-sm text-[var(--muted)]">Loading inquiry experience…</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[32px] border border-[var(--line)] bg-white p-8 shadow-[0_18px_48px_rgba(7,30,51,0.06)] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Private delivery</p>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Inquiries are routed privately to the Everest team and handled with the context you share.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/data-ai" className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              Data & AI
            </Link>
            <Link href="/security" className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              Security
            </Link>
            <Link href="/agenttrace" className="inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
              AgentTrace
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
