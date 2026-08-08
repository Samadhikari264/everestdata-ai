"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Database, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const cardBase = "rounded-[22px] border border-[rgba(7,30,51,0.1)] bg-white/90 px-4 py-4 shadow-[0_16px_40px_rgba(7,30,51,0.08)]";

export function DataAiHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const flowPoints = ["Sources", "Ingestion", "Lakehouse", "Governance", "AI", "Agents"];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,#f9fcff_0%,#eef6fb_100%)] p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,110,168,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,51,0.03)_1px,transparent_1px),linear-gradient(rgba(7,30,51,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white/75 p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3 rounded-full border border-[rgba(7,30,51,0.08)] bg-white/80 px-3 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Enterprise data platform</p>
          <div className="rounded-full border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.08)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
            Governed by design
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-6">
          {flowPoints.map((label, index) => {
            const isLast = index === flowPoints.length - 1;
            return (
              <motion.div
                key={label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={`${cardBase} text-center ${isLast ? "border-[rgba(210,162,97,0.2)] bg-[rgba(210,162,97,0.08)]" : ""}`}
              >
                <div className="mb-2 flex justify-center text-[var(--blue)]">
                  {index === 0 ? <Database className="h-4 w-4" /> : index === 1 ? <Workflow className="h-4 w-4" /> : index === 2 ? <Layers3 className="h-4 w-4" /> : index === 3 ? <ShieldCheck className="h-4 w-4" /> : index === 4 ? <Sparkles className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{index + 1}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">{label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-4 rounded-[22px] border border-[rgba(7,30,51,0.08)] bg-[rgba(7,30,51,0.02)] p-4">
          <div className="flex flex-wrap gap-2">
            {[
              "APIs / SaaS / Databases",
              "Lakeflow / Auto Loader",
              "Unity Catalog / Lineage",
              "BI / ML / GenAI / Agents",
            ].map((item) => (
              <span key={item} className="rounded-full border border-[rgba(29,110,168,0.16)] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DataAiProblemVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[28px] border border-[var(--line)] bg-white p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Databases", "Operational DBs"],
          ["SaaS", "Finance / CRM"],
          ["Files", "Exports / logs"],
          ["Streaming", "Events / telemetry"],
        ].map(([label, value], index) => (
          <motion.div
            key={label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[20px] border border-[rgba(7,30,51,0.08)] bg-[var(--panel)] p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">{label}</p>
            <p className="mt-2 text-sm font-semibold text-[var(--text)]">{value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-[20px] border border-[rgba(196,95,77,0.16)] bg-[rgba(196,95,77,0.06)] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--red)]">Fragmented state</p>
        <p className="mt-2 text-sm font-semibold text-[var(--text)]">Disconnected ETL jobs, duplicated data, weak lineage, and unclear ownership.</p>
      </div>
    </div>
  );
}

export function DataAiPlatformVisual() {
  const prefersReducedMotion = useReducedMotion();
  const layers = [
    { title: "Sources", items: ["Databases", "APIs", "SaaS", "Events", "Files"] },
    { title: "Ingestion", items: ["Lakeflow", "Auto Loader", "Batch", "Streaming"] },
    { title: "Lakehouse", items: ["Delta", "Bronze", "Silver", "Gold"] },
    { title: "Governance", items: ["Unity Catalog", "Lineage", "Quality", "Policies"] },
    { title: "Consumption", items: ["BI", "ML", "GenAI", "Agents"] },
    { title: "Operations", items: ["CI/CD", "Observability", "Cost", "Performance"] },
  ];

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#eef6fb_100%)] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 rounded-full border border-[rgba(7,30,51,0.08)] bg-white/80 px-3 py-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Everest platform model</p>
        <div className="rounded-full border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.08)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
          Layered by purpose
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-6">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[22px] border border-[rgba(7,30,51,0.08)] bg-white/85 p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{layer.title}</p>
            <div className="mt-3 space-y-2">
              {layer.items.map((item) => (
                <div key={item} className="rounded-full border border-[rgba(29,110,168,0.14)] bg-[rgba(29,110,168,0.06)] px-3 py-2 text-center text-[11px] font-medium text-[var(--text)]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function DataToAiVisual() {
  const prefersReducedMotion = useReducedMotion();
  const stages = [
    { title: "Data", body: "Customer, order, policy, and operational context" },
    { title: "Governance", body: "Lineage, quality, access, and policy controls" },
    { title: "Context", body: "Reliable enterprise context for AI and agents" },
    { title: "AI", body: "Applications, copilots, and retrieval flows" },
    { title: "Agents", body: "Autonomous action with telemetry and guardrails" },
  ];

  return (
    <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-5">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[20px] border border-[rgba(7,30,51,0.08)] bg-white p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{stage.title}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{stage.body}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 rounded-[20px] border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-4 text-sm text-[var(--muted)]">
        The same governed foundation that powers AI also creates the telemetry and context needed to secure autonomous execution.
      </div>
    </div>
  );
}
