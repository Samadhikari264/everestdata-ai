"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, ShieldCheck, Waypoints } from "lucide-react";

const identityBreakdown = {
  human: ["User", "SSO", "Cloud Identity", "Application", "Data"],
  agent: ["Agent", "Cloud Role", "Token", "MCP", "Delegated Agent", "SaaS Identity", "Database Principal", "Tools"],
};

const heroNodes = [
  { label: "Cloud Identity", x: 20, y: 52, tone: "blue" },
  { label: "OAuth", x: 39, y: 52, tone: "navy" },
  { label: "MCP", x: 61, y: 52, tone: "gold" },
  { label: "Workload Identity", x: 20, y: 70, tone: "blue" },
  { label: "Service Account", x: 39, y: 70, tone: "cyan" },
  { label: "Delegated Agent", x: 61, y: 70, tone: "gold" },
  { label: "Data Principal", x: 50, y: 82, tone: "navy" },
] as const;

export function AgentTraceHeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--navy)] text-[10px] font-bold text-[var(--gold)]">ED</span>
          Runtime identity graph
        </div>
        <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          Live trace
        </span>
      </div>

      <div className="relative h-[430px] overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#f9fbff_0%,#edf4fb_100%)]">
        <svg viewBox="0 0 620 430" className="absolute inset-0 h-full w-full">
          <path d="M310 82V140M310 140V202M310 202V248M220 140H310M310 140H410M180 202H260M310 202H430M310 248H310" stroke="rgba(7,30,51,0.16)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M120 202L120 234M200 202L200 234M310 202L310 234M420 202L420 234M510 202L510 234M310 248L310 312" stroke="rgba(29,110,168,0.25)" strokeWidth="2" fill="none" strokeDasharray="7 8" strokeLinecap="round" />
          <circle cx="310" cy="82" r="7" fill="#071E33" className="brand-signal" />
          <circle cx="120" cy="202" r="5" fill="#1D6EA8" className="flow-dot" />
          <circle cx="200" cy="202" r="5" fill="#1D6EA8" className="flow-dot" />
          <circle cx="420" cy="202" r="5" fill="#D2A261" className="flow-dot" />
          <circle cx="510" cy="202" r="5" fill="#D2A261" className="flow-dot" />
          <circle cx="310" cy="312" r="7" fill="#071E33" className="brand-signal" />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="absolute left-1/2 top-[10%] -translate-x-1/2 rounded-full border border-[rgba(7,30,51,0.15)] bg-white/90 px-5 py-3 shadow-[0_18px_32px_rgba(7,30,51,0.08)]"
        >
          <div className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">CustomerRefundAgent</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="absolute left-1/2 top-[24%] -translate-x-1/2 rounded-full border border-[rgba(7,30,51,0.12)] bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--navy)]"
        >
          Runtime execution
        </motion.div>

        {heroNodes.map((node) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span
              className={[
                "inline-flex max-w-[140px] rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-center",
                node.tone === "blue" && "border-[rgba(29,110,168,0.2)] bg-[rgba(29,110,168,0.08)] text-[var(--blue)]",
                node.tone === "navy" && "border-[rgba(7,30,51,0.15)] bg-white/85 text-[var(--navy)]",
                node.tone === "gold" && "border-[rgba(210,162,97,0.25)] bg-[rgba(210,162,97,0.08)] text-[var(--gold-strong)]",
                node.tone === "cyan" && "border-[rgba(138,215,240,0.3)] bg-[rgba(138,215,240,0.08)] text-[var(--blue)]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {node.label}
            </span>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="absolute left-1/2 top-[78%] -translate-x-1/2 rounded-full border border-[rgba(7,30,51,0.2)] bg-[var(--navy)] px-5 py-3 text-center shadow-[0_18px_32px_rgba(7,30,51,0.14)]"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Agent Execution Identity</div>
          <div className="mt-1 text-lg font-semibold text-white">EXE-883901</div>
        </motion.div>
      </div>

      <div className="mt-5 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
        Eight identity surfaces. One autonomous actor.
      </div>
    </motion.div>
  );
}

export function IdentityBreakdownGraphic() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[28px] border border-[var(--line)] bg-white p-6"
      >
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Human</p>
        <div className="flex flex-wrap items-center gap-2">
          {identityBreakdown.human.map((item, idx) => (
            <div key={item} className="flex items-center gap-2">
              <div className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-sm font-medium text-[var(--text)]">
                {item}
              </div>
              {idx < identityBreakdown.human.length - 1 && <ArrowRightLeft className="h-4 w-4 text-[var(--muted)]" />}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        className="rounded-[28px] border border-[var(--line)] bg-[var(--navy)] p-6 text-[var(--soft)] shadow-[var(--shadow-soft)]"
      >
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">AI Agent</p>
        <div className="flex flex-wrap items-center gap-2">
          {identityBreakdown.agent.map((item, idx) => (
            <div key={item} className="flex items-center gap-2">
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white">{item}</div>
              {idx < identityBreakdown.agent.length - 1 && <ArrowRightLeft className="h-4 w-4 text-[var(--muted-light)]" />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function RuntimeIdentityGraph() {
  const nodes = [
    { label: "Human / Workflow", x: 18, y: 12, tone: "navy" },
    { label: "AI Agent", x: 34, y: 30, tone: "blue" },
    { label: "Execution", x: 50, y: 46, tone: "gold" },
    { label: "Cloud Identity", x: 18, y: 68, tone: "blue" },
    { label: "OAuth", x: 34, y: 68, tone: "navy" },
    { label: "MCP", x: 52, y: 68, tone: "gold" },
    { label: "Workload Identity", x: 18, y: 83, tone: "blue" },
    { label: "Service Account", x: 34, y: 83, tone: "cyan" },
    { label: "Delegated Agent", x: 52, y: 83, tone: "gold" },
    { label: "Data Principal", x: 72, y: 83, tone: "navy" },
  ] as const;

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-6">
      <div className="relative h-[420px] overflow-hidden rounded-[22px] border border-[var(--line)] bg-[linear-gradient(180deg,#f9fbff_0%,#edf4fb_100%)]">
        <svg viewBox="0 0 760 420" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
          <path d="M150 60L260 120M260 120L360 170M360 170L520 220" stroke="rgba(7,30,51,0.18)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M360 170L360 250M260 120L260 250M150 60L150 250M520 220L520 250M150 250L150 315M260 250L260 315M360 250L360 315M520 250L520 315M360 315L520 315" stroke="rgba(29,110,168,0.24)" strokeWidth="2" fill="none" strokeDasharray="7 8" strokeLinecap="round" />
          <circle cx="150" cy="60" r="8" fill="#071E33" className="brand-signal" />
          <circle cx="260" cy="120" r="8" fill="#1D6EA8" className="flow-dot" />
          <circle cx="360" cy="170" r="9" fill="#D2A261" className="brand-signal" />
          <circle cx="520" cy="220" r="9" fill="#8AD7F0" className="flow-dot" />
          <circle cx="520" cy="315" r="8" fill="#071E33" className="brand-signal" />
        </svg>

        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span
              className={[
                "inline-flex max-w-[160px] rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-center",
                node.tone === "blue" && "border-[rgba(29,110,168,0.18)] bg-[rgba(29,110,168,0.08)] text-[var(--blue)]",
                node.tone === "navy" && "border-[rgba(7,30,51,0.14)] bg-white/90 text-[var(--navy)]",
                node.tone === "gold" && "border-[rgba(210,162,97,0.24)] bg-[rgba(210,162,97,0.08)] text-[var(--gold-strong)]",
                node.tone === "cyan" && "border-[rgba(138,215,240,0.28)] bg-[rgba(138,215,240,0.08)] text-[var(--blue)]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {node.label}
            </span>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="absolute right-[8%] top-[46%] -translate-y-1/2 rounded-full border border-[rgba(7,30,51,0.15)] bg-[var(--navy)] px-4 py-3 text-center shadow-[0_18px_32px_rgba(7,30,51,0.14)]"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">AgentTrace Correlation</div>
          <div className="mt-1 text-base font-semibold text-white">EXE-883901</div>
        </motion.div>
      </div>

      <div className="mt-6 rounded-[20px] border border-[var(--line)] bg-white p-4">
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Identity evidence</span>
          <span className="text-[var(--gold)]">→</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">AgentTrace correlation</span>
          <span className="text-[var(--gold)]">→</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Agent Execution Identity</span>
        </div>
      </div>
    </div>
  );
}

export function AgentPassportCard() {
  return (
    <div className="rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] p-5 shadow-[0_25px_45px_rgba(7,30,51,0.05)] sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Agent Passport</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">CustomerRefundAgent</h3>
        </div>
        <div className="rounded-full border border-[rgba(210,162,97,0.25)] bg-[rgba(210,162,97,0.08)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">
          Risk: High
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Identity</p>
          <div className="mt-3 space-y-3 text-sm text-[var(--text)]">
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Agent ID</span><span className="mt-1 block font-medium">AGT-00982</span></div>
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Environment</span><span className="mt-1 block font-medium">Production</span></div>
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Framework</span><span className="mt-1 block font-medium">AWS AgentCore</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Ownership</p>
          <div className="mt-3 space-y-3 text-sm text-[var(--text)]">
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Human Owner</span><span className="mt-1 block font-medium">Alice Smith</span></div>
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Business Purpose</span><span className="mt-1 block font-medium">Process customer refunds under $500</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Runtime surface</p>
          <div className="mt-3 space-y-3 text-sm text-[var(--text)]">
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Identity Surfaces</span><span className="mt-1 block font-medium">7</span></div>
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Connected Tools</span><span className="mt-1 block font-medium">5</span></div>
            <div><span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Delegated Agents</span><span className="mt-1 block font-medium">2</span></div>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 md:col-span-2 xl:col-span-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Security</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Observed Behavior</span>
              <div className="mt-1 rounded-2xl border border-[var(--line)] bg-white p-3 text-sm font-medium text-[var(--text)]">Refund approval path + finance context</div>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Risk</span>
              <div className="mt-1 rounded-2xl border border-[rgba(210,162,97,0.25)] bg-[rgba(210,162,97,0.08)] p-3 text-sm font-medium text-[var(--gold-strong)]">High: expanded runtime scope</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          "Identity",
          "Purpose",
          "Permissions",
          "Tools",
          "Data Access",
          "Delegation",
          "Observed Behavior",
        ].map((item) => (
          <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IdentityDriftPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div className="rounded-[26px] border border-[var(--line)] bg-white p-5">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Expected identity surface</p>
        <div className="space-y-3 text-sm text-[var(--muted)]">
          {[
            "refund-service",
            "stripe-refund",
            "customer-profile-mcp",
          ].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">
              <span>{item}</span>
              <span className="font-medium text-[var(--navy)]">✓</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border border-[var(--line)] bg-[linear-gradient(135deg,#fffdf9_0%,#f8f1e5_40%,#f3e0cd_100%)] p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-strong)]">Observed runtime identity</p>
          <span className="rounded-full border border-[rgba(196,95,77,0.25)] bg-[rgba(196,95,77,0.08)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--red)]">
            Identity drift detected
          </span>
        </div>
        <div className="space-y-3 text-sm text-[var(--text)]">
          {[
            ["refund-service", "expected", "var(--blue)", "rgba(29,110,168,0.08)", "rgba(29,110,168,0.15)"],
            ["stripe-refund", "expected", "var(--blue)", "rgba(29,110,168,0.08)", "rgba(29,110,168,0.15)"],
            ["customer-profile-mcp", "expected", "var(--blue)", "rgba(29,110,168,0.08)", "rgba(29,110,168,0.15)"],
            ["payroll-reader", "new", "var(--amber)", "rgba(240,177,95,0.08)", "rgba(240,177,95,0.18)"],
            ["finance-admin-mcp", "new", "var(--amber)", "rgba(240,177,95,0.08)", "rgba(240,177,95,0.18)"],
            ["bulk-export-token", "high", "var(--red)", "rgba(196,95,77,0.08)", "rgba(196,95,77,0.2)"],
          ].map(([label, state, color, bg, border]) => (
            <div key={label} className="flex items-center justify-between rounded-2xl border px-3 py-2" style={{ background: bg, borderColor: border }}>
              <span>{label}</span>
              <div className="flex items-center gap-2">
                <span className="rounded-full border px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.14em]" style={{ color, borderColor: border }}>{state}</span>
                <span className="font-medium" style={{ color }}>{state === "high" ? "⚠" : state === "new" ? "+" : "✓"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function IntentViolationPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[28px] border border-[var(--line)] bg-white p-6">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Declared purpose</p>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 text-base font-medium text-[var(--text)]">
          “Process customer refunds under $500.”
        </div>

        <div className="mt-6 rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-4">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Allowed actions</p>
          <div className="space-y-3 text-sm text-[var(--muted)]">
            <div className="rounded-2xl border border-[var(--line)] bg-white px-3 py-2">customer_lookup</div>
            <div className="rounded-2xl border border-[var(--line)] bg-white px-3 py-2">fraud_check</div>
            <div className="rounded-2xl border border-[var(--line)] bg-white px-3 py-2">refund_create</div>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-[rgba(196,95,77,0.2)] bg-[linear-gradient(180deg,#fffdfd_0%,#f8efef_100%)] p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--red)]">Observed actions</p>
          <span className="rounded-full border border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--red)]">Outside scope</span>
        </div>
        <div className="space-y-3 text-sm text-[var(--text)]">
          <div className="rounded-2xl border border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] px-3 py-2 text-[var(--red)] font-medium">payroll_access</div>
          <div className="rounded-2xl border border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] px-3 py-2 text-[var(--red)] font-medium">bulk_export</div>
          <div className="rounded-2xl border border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] px-3 py-2 text-[var(--red)] font-medium">finance_admin</div>
        </div>

        <div className="mt-6 rounded-[22px] border border-[rgba(196,95,77,0.15)] bg-white/60 p-3 text-xs font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
          This is not generic anomaly detection. It is a deviation from the agent&apos;s declared business purpose.
        </div>
      </div>
    </div>
  );
}

export function ExecutionTimeline() {
  type TimelineTone = "normal" | "drift" | "violation" | "critical";

  const items: Array<{ time: string; event: string; tone: TimelineTone }> = [
    { time: "11:02", event: "Agent started", tone: "normal" },
    { time: "11:03", event: "customer_lookup", tone: "normal" },
    { time: "11:04", event: "fraud_check", tone: "normal" },
    { time: "11:05", event: "refund($231)", tone: "normal" },
    { time: "11:06", event: "payroll-reader acquired", tone: "drift" },
    { time: "11:06", event: "finance-admin MCP invoked", tone: "drift" },
    { time: "11:07", event: "bulk export requested", tone: "violation" },
    { time: "11:07", event: "external transfer", tone: "critical" },
  ];

  const toneMap: Record<TimelineTone, { dot: string; card: string; text: string }> = {
    normal: { dot: "bg-[var(--blue)]", card: "border-[var(--line)] bg-[var(--panel)]", text: "text-[var(--text)]" },
    drift: { dot: "bg-[var(--amber)]", card: "border-[rgba(240,177,95,0.2)] bg-[rgba(240,177,95,0.06)]", text: "text-[var(--text)]" },
    violation: { dot: "bg-[var(--gold)]", card: "border-[rgba(210,162,97,0.2)] bg-[rgba(210,162,97,0.06)]", text: "text-[var(--text)]" },
    critical: { dot: "bg-[var(--red)]", card: "border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.06)]", text: "text-[var(--red)]" },
  };

  return (
    <div className="rounded-[30px] border border-[var(--line)] bg-white p-5 sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Execution trace</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">One explainable execution story.</h3>
        </div>
        <div className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Synthetic demo scenario
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={`${item.time}-${item.event}`} className={`flex items-start gap-4 rounded-2xl border px-4 py-3 ${toneMap[item.tone].card}`}>
            <div className="min-w-[56px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">{item.time}</div>
            <div className={`mt-1.5 h-3 w-3 rounded-full ${toneMap[item.tone].dot}`} />
            <div className={`text-sm font-medium ${toneMap[item.tone].text}`}>{item.event}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">42 raw events</span>
        <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">7 identity surfaces</span>
        <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">1 autonomous execution</span>
      </div>
    </div>
  );
}

export function BlastRadiusMap() {
  const flow = [
    { label: "CustomerRefundAgent", tone: "navy" },
    { label: "IDENTITIES", tone: "blue", values: ["refund-service", "stripe-refund", "finance-admin"] },
    { label: "TOOLS", tone: "gold", values: ["customer_lookup", "refund_create", "bulk_export"] },
    { label: "DATA", tone: "navy", values: ["customer_profiles", "financial_records"] },
    { label: "DELEGATION", tone: "gold", values: ["FraudAgent"] },
    { label: "DOWNSTREAM SYSTEM", tone: "red", values: ["Finance Platform"] },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-5 sm:p-6">
      <div className="space-y-4">
        {flow.map((stage, idx) => (
          <div key={stage.label} className="relative">
            <div className="flex flex-col items-center gap-3">
              <div
                className={[
                  "rounded-full border px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em]",
                  stage.tone === "navy" && "border-[rgba(7,30,51,0.15)] bg-white text-[var(--navy)]",
                  stage.tone === "blue" && "border-[rgba(29,110,168,0.2)] bg-[rgba(29,110,168,0.08)] text-[var(--blue)]",
                  stage.tone === "gold" && "border-[rgba(210,162,97,0.24)] bg-[rgba(210,162,97,0.08)] text-[var(--gold-strong)]",
                  stage.tone === "red" && "border-[rgba(196,95,77,0.24)] bg-[rgba(196,95,77,0.08)] text-[var(--red)]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {stage.label}
              </div>

              {stage.values && (
                <div className="flex flex-wrap justify-center gap-2">
                  {stage.values.map((item) => (
                    <span
                      key={item}
                      className={[
                        "rounded-full border px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em]",
                        stage.tone === "blue" && "border-[rgba(29,110,168,0.2)] bg-[rgba(29,110,168,0.08)] text-[var(--blue)]",
                        stage.tone === "gold" && "border-[rgba(210,162,97,0.24)] bg-[rgba(210,162,97,0.08)] text-[var(--gold-strong)]",
                        stage.tone === "red" && "border-[rgba(196,95,77,0.24)] bg-[rgba(196,95,77,0.08)] text-[var(--red)]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {idx < flow.length - 1 && (
              <div className="flex justify-center py-2">
                <div className="h-7 w-px bg-gradient-to-b from-[rgba(7,30,51,0.18)] via-[rgba(210,162,97,0.9)] to-[rgba(7,30,51,0.18)]" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[22px] border border-[var(--line)] bg-white p-4 text-center">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Potential blast radius</div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">3 identities</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">4 tools</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">2 data domains</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">1 delegated agent</span>
        </div>
        <p className="mt-3 text-xs text-[var(--muted)]">Synthetic demo values only.</p>
      </div>
    </div>
  );
}

export function LakewatchArchitecture() {
  const layers = [
    { title: "Stage 1", subtitle: "Identity + runtime signals", items: ["Cloud Identity", "OAuth", "MCP", "Agent Runtime", "OTel", "SaaS", "Data Access"] },
    { title: "Stage 2", subtitle: "Security data plane", items: ["Databricks", "Delta", "OCSF", "Lakewatch"] },
    { title: "Stage 3", subtitle: "AgentTrace", items: ["Identity Correlation", "Execution Identity", "Identity Drift", "Intent Violation"] },
    { title: "Stage 4", subtitle: "Outcome", items: ["Explainable Incident", "Blast Radius", "Investigation", "Policy Insight"] },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-4">
        {layers.map((layer, index) => (
          <motion.div
            key={layer.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[26px] border border-[var(--line)] bg-white p-5 shadow-[0_16px_32px_rgba(7,30,51,0.04)]"
          >
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">{layer.title}</p>
            <h3 className="mb-4 text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">{layer.subtitle}</h3>
            <div className="space-y-2 text-sm text-[var(--muted)]">
              {layer.items.map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2">{item}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Lakewatch</span>
          <span className="text-[var(--gold)]">=</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">scale + analytics</span>
          <span className="text-[var(--gold)]">|</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">AgentTrace</span>
          <span className="text-[var(--gold)]">=</span>
          <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">identity intelligence</span>
        </div>
      </div>
    </div>
  );
}

export function SignalPath() {
  return (
    <div className="rounded-[22px] border border-[var(--line)] bg-white p-4">
      <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Signals</span>
        <Waypoints className="h-4 w-4 text-[var(--gold)]" />
        <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">AgentTrace</span>
        <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
        <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5">Execution identity</span>
      </div>
    </div>
  );
}
