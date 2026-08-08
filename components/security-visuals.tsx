"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Layers3 } from "lucide-react";

const card = "rounded-[22px] border border-[rgba(7,30,51,0.1)] bg-white/90 px-4 py-4 shadow-[0_16px_40px_rgba(7,30,51,0.08)]";

export function SecurityHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const leftSources = ["Cloud", "Identity", "Endpoint", "SaaS", "OTel", "Agent Runtime", "MCP", "Data Access"];
  const rightLayers = ["Detection", "Correlation", "AgentTrace", "Investigation"];

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[linear-gradient(135deg,#f9fcff_0%,#eef6fb_100%)] p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,110,168,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,51,0.03)_1px,transparent_1px),linear-gradient(rgba(7,30,51,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 grid gap-3 lg:grid-cols-[1fr_0.8fr_1fr]">
        <div className="space-y-3">
          <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white/80 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Telemetry sources</p>
            <div className="mt-3 grid gap-2">
              {leftSources.map((label, index) => (
                <motion.div
                  key={label}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className={`${card} text-sm font-medium text-[var(--text)]`}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[rgba(7,30,51,0.96)] p-4 text-[var(--soft)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Security data plane</p>
            <div className="mt-3 space-y-2">
              {[
                ["Databricks", "Lakehouse runtime"],
                ["Delta", "Storage and replay"],
                ["OCSF", "Normalized events"],
                ["Lakewatch", "Operational security platform"],
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

        <div className="space-y-3">
          <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white/80 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Everest Security</p>
            <div className="mt-3 grid gap-2">
              {rightLayers.map((label, index) => (
                <motion.div
                  key={label}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`${card} flex items-center justify-between text-sm font-medium text-[var(--text)]`}
                >
                  <span>{label}</span>
                  <ArrowRight className="h-4 w-4 text-[var(--blue)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SecurityProblemVisual() {
  const prefersReducedMotion = useReducedMotion();
  const sources = ["CloudTrail", "Okta / Entra", "CrowdStrike", "Wiz", "Snyk", "SaaS logs", "APIs", "OTel", "Agent logs", "Databases"];

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {sources.map((source, index) => (
          <motion.div
            key={source}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="rounded-[20px] border border-[rgba(7,30,51,0.08)] bg-white p-3 text-center text-sm font-medium text-[var(--muted)]"
          >
            {source}
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {[
          ["Duplicated pipelines", "Signals move through multiple, overlapping ingestion paths."],
          ["Siloed schemas", "Events arrive in incompatible shapes and retention windows."],
          ["Hard-to-correlate identities", "Identity and business context remain disconnected."],
          ["AI-agent telemetry", "Autonomous actions add a new layer of runtime signal."],
        ].map(([label, detail]) => (
          <div key={label} className="rounded-[20px] border border-[rgba(196,95,77,0.16)] bg-[rgba(196,95,77,0.06)] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--red)]">{label}</p>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SecurityPlatformVisual() {
  const prefersReducedMotion = useReducedMotion();
  const layers = [
    { title: "Sources", items: ["Cloud", "Identity", "Endpoint", "SaaS", "Agent", "Data"] },
    { title: "Collection", items: ["Batch", "Streaming", "APIs", "Cloud storage", "OTel"] },
    { title: "Normalization", items: ["Bronze", "Silver", "OCSF", "Common identity fields"] },
    { title: "Security data plane", items: ["Databricks", "Delta", "Unity Catalog", "Lakewatch"] },
    { title: "Security intelligence", items: ["Detections", "Correlation", "Threat hunting", "Investigation", "AgentTrace"] },
  ];

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#eef6fb_100%)] p-4 sm:p-5">
      <div className="grid gap-3 lg:grid-cols-5">
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

export function SecurityDetectionVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Detection lifecycle</p>
          <div className="mt-4 space-y-2">
            {[
              "Telemetry",
              "Normalization",
              "Detection-as-Code",
              "Testing",
              "Backtesting",
              "Deployment",
              "Monitoring / Tuning",
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                className="flex items-center gap-3 rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-[var(--panel)] px-3 py-2 text-sm font-medium text-[var(--text)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--navy)] text-[10px] font-semibold text-[var(--gold)]">{index + 1}</span>
                {step}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6fb_100%)] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Illustrative detection object</p>
          <div className="mt-4 rounded-[20px] border border-[rgba(7,30,51,0.08)] bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">Detection: AI Agent Credential Abuse</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Illustrative / synthetic</p>
              </div>
              <div className="rounded-full border border-[rgba(196,95,77,0.18)] bg-[rgba(196,95,77,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--red)]">High</div>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
              <div className="rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-[var(--panel)] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">Sources</p>
                <p className="mt-2">Agent Runtime / Cloud Identity</p>
              </div>
              <div className="rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-[var(--panel)] p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">MITRE</p>
                <p className="mt-2">Credential Access / Valid Accounts</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Tests: 18 / 18",
                "Backtest: Passed",
                "Deployment: Ready",
              ].map((item) => (
                <span key={item} className="rounded-full border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SecurityIncidentVisual() {
  const prefersReducedMotion = useReducedMotion();
  const stages = ["Raw events", "Correlation", "One incident"];

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-3">
        {stages.map((stage, index) => (
          <motion.div
            key={stage}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            className="rounded-[22px] border border-[rgba(7,30,51,0.08)] bg-white p-4 text-center"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{index === 0 ? "Raw events" : index === 1 ? "Correlation" : "One incident"}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--text)]">{stage}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6fb_100%)] p-4">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Cloud identity event", "OAuth token misuse"],
            ["MCP event", "Tool invocation from delegated agent"],
            ["Agent runtime event", "Unexpected credential use"],
            ["Data access event", "Restricted records accessed"],
          ].map(([label, detail]) => (
            <div key={label} className="rounded-[18px] border border-[rgba(7,30,51,0.08)] bg-white p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">{label}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-[20px] border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-4 text-sm text-[var(--muted)]">
          Example: one delegated agent accessed restricted financial records through an unexpected workload identity and an MCP path.
        </div>
      </div>
    </div>
  );
}

export function SecurityAgentTraceVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-3 md:grid-cols-5">
        {[
          ["Cloud Identity", "OAuth"],
          ["Workload Identity", "Service principal"],
          ["MCP", "Delegated tool path"],
          ["Data Principal", "Restricted data context"],
          ["AgentTrace", "Agent execution identity"],
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
      <div className="mt-4 rounded-[20px] border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-4 text-sm text-[var(--muted)]">
        AgentTrace is being designed around runtime identity, delegated action, sensitive data access, and blast-radius understanding.
      </div>
    </div>
  );
}

export function SecurityBusinessContextVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Security event</p>
          <div className="mt-3 space-y-2">
            {[
              "customer_financial_records",
              "Classification: Restricted",
              "Contains: PII / Financial Data",
              "Business owner: Customer Analytics",
            ].map((item) => (
              <div key={item} className="rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-[var(--panel)] px-3 py-2 text-sm text-[var(--text)]">
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6fb_100%)] p-4"
        >
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            <Layers3 className="h-4 w-4" />
            Business context
          </div>
          <div className="mt-4 space-y-3">
            {[
              ["Data resource", "Restricted finance dataset"],
              ["Unity Catalog / metadata context", "Sensitivity + owner + criticality"],
              ["Security interpretation", "Access should be understood in business impact terms"],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-[16px] border border-[rgba(7,30,51,0.08)] bg-white p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">{label}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
