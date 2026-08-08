"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";

const card = "rounded-[22px] border border-[rgba(7,30,51,0.1)] bg-white/90 px-4 py-4 shadow-[0_16px_40px_rgba(7,30,51,0.08)]";

export function CompanyHeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,#f9fcff_0%,#eef6fb_100%)] p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,110,168,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,51,0.03)_1px,transparent_1px),linear-gradient(rgba(7,30,51,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white/80 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Everest Data</p>
          <div className="mt-4 space-y-3">
            {[
              ["Data & AI", "Governed data platforms for enterprise AI"],
              ["Security", "Runtime security for autonomous systems"],
              ["AgentTrace", "Flagship runtime identity security product"],
            ].map(([label, detail], index) => (
              <motion.div
                key={label}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`${card} flex items-center justify-between gap-3`}
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">{label}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{detail}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-[var(--blue)]" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[rgba(7,30,51,0.95)] p-4 text-[var(--soft)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Company architecture</p>
          <div className="mt-4 space-y-3">
            {[
              ["Human", "Operator"],
              ["AI Agent", "Execution layer"],
              ["Tools / APIs / Other Agents", "Connected systems"],
              ["Enterprise Data", "Shared platform context"],
            ].map(([label, detail], index) => (
              <motion.div
                key={label}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[18px] border border-white/10 bg-white/8 p-3"
              >
                <p className="text-sm font-semibold">{label}</p>
                <p className="mt-1 text-xs text-[var(--muted-light)]">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompanyShiftVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Before</p>
          <div className="mt-4 space-y-3">
            {[
              ["Human", "Operator"],
              ["Application", "Workflow tool"],
              ["Data", "Enterprise source"],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-[var(--panel)] px-3 py-2 text-sm text-[var(--muted)]">
                {label} — {detail}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6fb_100%)] p-4"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Today</p>
          <div className="mt-4 space-y-3">
            {[
              ["Human", "Operator"],
              ["AI Agent", "Execution layer"],
              ["Tools / APIs / Other Agents", "Connected systems"],
              ["Enterprise Data", "Shared context"],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-white px-3 py-2 text-sm text-[var(--muted)]">
                {label} — {detail}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function CompanyVerticalsVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        {["Everest Data & AI", "Everest Security"].map((title, index) => (
          <motion.div
            key={title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{title}</p>
            <div className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              {index === 0 ? (
                <>
                  <p>Governed data foundations for enterprise AI.</p>
                  <p>Databricks, governance, AI engineering, agentic infrastructure.</p>
                </>
              ) : (
                <>
                  <p>Runtime security for autonomous enterprise systems.</p>
                  <p>Lakewatch, detection engineering, AI-agent security, AgentTrace.</p>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function CompanyStrategyVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-4">
        {[
          ["Engineering services", "Deep implementation work"],
          ["Enterprise problems", "Real operational pain"],
          ["Reusable IP", "Detection logic, architecture, content"],
          ["Software products", "AgentTrace and beyond"],
        ].map(([label, detail], index) => (
          <motion.div
            key={label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-[20px] border border-[rgba(7,30,51,0.08)] bg-white p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{label}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function CompanyTechMapVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6fb_100%)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Data platform", ["Databricks", "Delta", "Lakeflow", "Streaming", "APIs"]],
          ["Governance", ["Unity Catalog", "Lineage", "Data Quality", "Access Control"]],
          ["AI", ["GenAI", "Agents", "RAG", "Model / Agent Telemetry"]],
          ["Security", ["Lakewatch", "OCSF", "Detection-as-Code", "Runtime Identity", "AgentTrace"]],
        ].map(([title, items], index) => (
          <motion.div
            key={title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-[22px] border border-[rgba(7,30,51,0.08)] bg-white/80 p-4"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{title}</p>
            <div className="mt-3 space-y-2">
              {items.map((item) => (
                <div key={item} className="rounded-full border border-[rgba(29,110,168,0.14)] bg-[rgba(29,110,168,0.06)] px-3 py-2 text-center text-[11px] font-medium text-[var(--text)]">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 rounded-[20px] border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-4 text-sm text-[var(--muted)]">
        Designed for heterogeneous enterprise environments, with a cloud-agnostic architecture stance.
      </div>
    </div>
  );
}

export function CompanyRoadmapVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {[
          ["Now", "Data & AI engineering, security data engineering, Lakewatch solutions, AgentTrace prototype"],
          ["Next", "Design partners, live AgentTrace pilots, multi-environment identity correlation, reusable security content"],
          ["Long term", "A control and intelligence layer for autonomous enterprise systems"],
        ].map(([label, detail], index) => (
          <motion.div
            key={label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[22px] border border-[rgba(7,30,51,0.08)] bg-white p-4"
          >
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
              <Layers3 className="h-4 w-4" />
              {label}
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">{detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
