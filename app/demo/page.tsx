import type { Metadata } from "next";
import { SiteShell } from "../../components/site-shell";
import { DemoExperience } from "../../components/demo-experience";

export const metadata: Metadata = {
  title: "AgentTrace Demo | Everest Data",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <SiteShell>
      <section className="bg-[var(--page-bg)] text-[var(--text)]">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-14">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Interactive demo</p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-[var(--text)] md:text-6xl">
              Watch one agent become one accountable execution.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              This synthetic incident simulation shows how AgentTrace correlates scattered runtime identities into a single autonomous actor and explains the resulting blast radius.
            </p>
          </div>
        </div>
      </section>

      <DemoExperience />
    </SiteShell>
  );
}
