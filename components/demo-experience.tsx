"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Play,
  Repeat2,
  RotateCcw,
  ScanSearch,
  ShieldAlert,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { DemoHeroVisual } from "./demo-hero-visual";
import { DemoRuntimeGraph } from "./demo-runtime-graph";

type DemoEventType = "normal" | "drift" | "violation" | "critical";
type DemoPhase = "idle" | "running" | "identity_drift" | "intent_violation" | "critical" | "correlated";

const simulationEvents = [
  {
    id: "start",
    time: "11:02:00",
    label: "Agent execution started",
    detail: "CustomerRefundAgent began a refund workflow in production.",
    type: "normal" as DemoEventType,
    status: "NORMAL",
  },
  {
    id: "cloud",
    time: "11:02:08",
    label: "refund-service attached",
    detail: "Cloud identity surfaced as expected for the refund workflow.",
    type: "normal" as DemoEventType,
    status: "EXPECTED",
  },
  {
    id: "oauth",
    time: "11:02:14",
    label: "stripe-refund linked",
    detail: "OAuth identity aligned with the declared refund intent.",
    type: "normal" as DemoEventType,
    status: "EXPECTED",
  },
  {
    id: "mcp",
    time: "11:02:21",
    label: "customer_profile_mcp accessed",
    detail: "The MCP identity was used to read customer profile context.",
    type: "normal" as DemoEventType,
    status: "EXPECTED",
  },
  {
    id: "fraud",
    time: "11:02:30",
    label: "fraud_check invoked",
    detail: "The expected fraud check completed inside the approved workflow.",
    type: "normal" as DemoEventType,
    status: "EXPECTED",
  },
  {
    id: "refund",
    time: "11:02:39",
    label: "refund_create($231)",
    detail: "A compliant refund approval was issued for the requested amount.",
    type: "normal" as DemoEventType,
    status: "EXPECTED",
  },
  {
    id: "drift-1",
    time: "11:02:48",
    label: "payroll-reader acquired",
    detail: "AgentTrace identified a new runtime identity outside the expected surface.",
    type: "drift" as DemoEventType,
    status: "IDENTITY DRIFT",
  },
  {
    id: "drift-2",
    time: "11:02:55",
    label: "finance-admin-mcp acquired",
    detail: "An additional MCP identity appeared during the execution.",
    type: "drift" as DemoEventType,
    status: "IDENTITY DRIFT",
  },
  {
    id: "drift-3",
    time: "11:03:04",
    label: "bulk-export-token acquired",
    detail: "A privileged token was attached late in the execution lifecycle.",
    type: "drift" as DemoEventType,
    status: "IDENTITY DRIFT",
  },
  {
    id: "violation-1",
    time: "11:03:11",
    label: "payroll_access invoked",
    detail: "The runtime action fell outside the declared refund purpose.",
    type: "violation" as DemoEventType,
    status: "INTENT VIOLATION",
  },
  {
    id: "violation-2",
    time: "11:03:18",
    label: "bulk_export(184,392 rows)",
    detail: "Customer financial records were exported in a high-risk sequence.",
    type: "violation" as DemoEventType,
    status: "HIGH RISK",
  },
  {
    id: "critical",
    time: "11:03:28",
    label: "external transfer initiated",
    detail: "An outbound transfer was routed to an unknown external endpoint.",
    type: "critical" as DemoEventType,
    status: "CRITICAL",
  },
  {
    id: "correlation",
    time: "11:03:31",
    label: "AgentTrace correlation completed",
    detail: "The execution was reduced to one accountable autonomous actor.",
    type: "critical" as DemoEventType,
    status: "CORRELATED",
  },
];

const toneStyles: Record<DemoEventType, { dot: string; card: string; text: string }> = {
  normal: {
    dot: "bg-[var(--blue)]",
    card: "border-[var(--line)] bg-[var(--panel)]",
    text: "text-[var(--text)]",
  },
  drift: {
    dot: "bg-[var(--amber)]",
    card: "border-[rgba(240,177,95,0.2)] bg-[rgba(240,177,95,0.08)]",
    text: "text-[var(--text)]",
  },
  violation: {
    dot: "bg-[var(--gold)]",
    card: "border-[rgba(210,162,97,0.2)] bg-[rgba(210,162,97,0.06)]",
    text: "text-[var(--text)]",
  },
  critical: {
    dot: "bg-[var(--red)]",
    card: "border-[rgba(196,95,77,0.18)] bg-[rgba(196,95,77,0.06)]",
    text: "text-[var(--red)]",
  },
};

const allowedActions = ["customer_lookup", "fraud_check", "refund_create"];

export function DemoExperience() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isInvestigating, setIsInvestigating] = useState(false);
  const [activeInvestigationTab, setActiveInvestigationTab] = useState("overview");
  const [expandedBlastCategory, setExpandedBlastCategory] = useState<string | null>("identities");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    if (progress >= simulationEvents.length) {
      return;
    }

    const interval = progress === 6 ? 1500 : 1100;
    const timer = window.setTimeout(() => {
      setProgress((value) => {
        const nextValue = value + 1;
        if (nextValue >= simulationEvents.length) {
          setIsRunning(false);
        }
        return nextValue;
      });
    }, interval);

    return () => window.clearTimeout(timer);
  }, [isRunning, progress]);

  const displayedEvents = useMemo(() => simulationEvents.slice(0, progress), [progress]);
  const correlationBurst = progress === simulationEvents.length;

  const phase: DemoPhase = useMemo(() => {
    if (progress === 0) {
      return "idle";
    }
    if (progress < 7) {
      return "running";
    }
    if (progress < 10) {
      return "identity_drift";
    }
    if (progress < 12) {
      return "intent_violation";
    }
    if (progress < simulationEvents.length) {
      return "critical";
    }
    return "correlated";
  }, [progress]);

  const identitySurface = useMemo(() => {
    const base = ["refund-service", "stripe-refund", "customer-profile-mcp"];
    if (progress >= 7) {
      base.push("payroll-reader");
    }
    if (progress >= 8) {
      base.push("finance-admin-mcp");
    }
    if (progress >= 9) {
      base.push("bulk-export-token");
    }
    return base;
  }, [progress]);

  const newIdentityCount = Math.max(identitySurface.length - 3, 0);
  const canInvestigate = progress >= simulationEvents.length;

  const observedActions = useMemo(() => {
    const next = [...allowedActions];
    if (progress >= 10) {
      next.push("payroll_access");
    }
    if (progress >= 11) {
      next.push("bulk_export");
    }
    return next;
  }, [progress]);

  const statusMessage = useMemo(() => {
    switch (phase) {
      case "idle":
        return { label: "AGENTTRACE STATUS", detail: "READY" };
      case "running":
        return { label: "AGENTTRACE STATUS", detail: "OBSERVING EXECUTION" };
      case "identity_drift":
        return { label: "AGENTTRACE STATUS", detail: "IDENTITY DRIFT DETECTED" };
      case "intent_violation":
        return { label: "AGENTTRACE STATUS", detail: "INTENT VIOLATION" };
      case "critical":
        return { label: "AGENTTRACE STATUS", detail: "CRITICAL BEHAVIOR" };
      case "correlated":
        return { label: "AGENTTRACE STATUS", detail: "INCIDENT RECONSTRUCTED" };
      default:
        return { label: "AGENTTRACE STATUS", detail: "READY" };
    }
  }, [phase]);

  const startSimulation = () => {
    setProgress(0);
    setIsInvestigating(false);
    setIsRunning(true);
  };

  const resetSimulation = () => {
    setProgress(0);
    setIsRunning(false);
    setIsInvestigating(false);
    setExpandedBlastCategory("identities");
    setActiveInvestigationTab("overview");
  };

  const replaySimulation = () => {
    startSimulation();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
              Synthetic demo scenario
            </p>
            <h1 className="text-3xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-4xl lg:text-5xl">
              AgentTrace Live Incident Simulation
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Watch one agent move from expected behavior to identity drift, intent violation, and a correlated security incident.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">Agent: CustomerRefundAgent</span>
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">Environment: Production</span>
              <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">Purpose: Refunds under $500</span>
            </div>
          </div>

          <div className="w-full">
            <DemoHeroVisual />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={startSimulation}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]"
            >
              <Play className="h-4 w-4" />
              Run Simulation
            </button>
            <button
              type="button"
              onClick={resetSimulation}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              type="button"
              onClick={replaySimulation}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <Repeat2 className="h-4 w-4" />
              Replay
            </button>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_100%)] p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">AgentTrace Runtime Correlation</p>
              <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {statusMessage.detail}
              </span>
            </div>
            <svg viewBox="0 0 420 180" className="h-[180px] w-full">
              <path d="M210 24L210 56" stroke="rgba(7,30,51,0.17)" strokeWidth="2" />
              <path d="M210 56L120 98M210 56L210 98M210 56L300 98" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
              {progress >= 7 && <path d="M120 98L120 140" stroke="rgba(240,177,95,0.25)" strokeWidth="2" strokeDasharray="6 6" />}
              {progress >= 8 && <path d="M210 98L210 140" stroke="rgba(240,177,95,0.25)" strokeWidth="2" strokeDasharray="6 6" />}
              {progress >= 9 && <path d="M300 98L300 140" stroke="rgba(240,177,95,0.25)" strokeWidth="2" strokeDasharray="6 6" />}
              <path d="M120 98L210 98L300 98" stroke="rgba(29,110,168,0.16)" strokeWidth="2" />
              <circle cx="210" cy="24" r="12" fill="#071e33" />
              <circle cx="210" cy="98" r="10" fill="#1d6ea8" />
              <circle cx="120" cy="98" r="9" fill="#1d6ea8" />
              <circle cx="300" cy="98" r="9" fill="#1d6ea8" />
              {progress >= 7 && <circle cx="120" cy="140" r="8" fill="#d2a261" />}
              {progress >= 8 && <circle cx="210" cy="140" r="8" fill="#d2a261" />}
              {progress >= 9 && <circle cx="300" cy="140" r="8" fill="#d2a261" />}
              <circle cx="210" cy="98" r="18" fill="none" stroke="#d2a261" strokeWidth="2" strokeDasharray="4 4" opacity={progress >= 7 ? 1 : 0.25} />
              <rect x="132" y="148" width="156" height="20" rx="10" fill="rgba(255,255,255,0.9)" stroke="rgba(7,30,51,0.12)" />
              <text x="210" y="161" textAnchor="middle" fontSize="11" fontWeight="600" fill="#13253a">
                {progress >= simulationEvents.length ? "ONE AUTONOMOUS ACTOR" : "MANY IDENTITIES\nONE EXECUTION"}
              </text>
            </svg>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--line)] bg-white p-4 sm:p-6">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 rounded-[20px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Live demo status</p>
                  <p className="mt-1 text-sm font-medium text-[var(--text)]">{statusMessage.detail}</p>
                </div>
                <div className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  {progress === 0 ? "Ready" : progress >= simulationEvents.length ? "Correlated" : "Observing"}
                </div>
              </div>
            </motion.div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Execution timeline</p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--text)]">Live runtime events</h2>
              </div>
              <div className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                {phase === "idle" ? "READY" : phase.replace("_", " ").toUpperCase()}
              </div>
            </div>

            <div className="space-y-3">
              <AnimatePresence initial={false}>
                {displayedEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.24 }}
                    className={`flex items-start gap-3 rounded-2xl border px-3 py-3 ${toneStyles[event.type].card}`}
                  >
                    <div className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${toneStyles[event.type].dot}`} />
                    <div className="min-w-[72px] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                      {event.time}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[var(--text)]">{event.label}</div>
                      <div className="mt-1 text-sm text-[var(--muted)]">{event.detail}</div>
                    </div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      {event.status}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {progress === 0 && (
                <div className="rounded-2xl border border-dashed border-[var(--line)] bg-[var(--panel)] px-4 py-4 text-sm text-[var(--muted)]">
                  Simulation is idle. The first event will appear when the run button is pressed.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--navy)] p-5 text-[var(--soft)] sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Identity surface</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">Current runtime view</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                  {phase === "idle" ? "Ready" : phase === "correlated" ? "Correlated" : "Live"}
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">Expected</p>
                  <p className="mt-2 text-2xl font-semibold text-white">3</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">Current</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{identitySurface.length}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">Change</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{newIdentityCount === 0 ? "0" : `+${newIdentityCount}`}</p>
                </div>
              </div>

              <div className="mt-5 rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Agent identity envelope</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[var(--soft)]">
                    {progress >= 7 ? "Envelope expanded" : "Expected envelope"}
                  </span>
                </div>
                <div className="mt-4">
                  <svg viewBox="0 0 320 140" className="h-[140px] w-full">
                    <path d="M58 44C58 29 70 18 86 18H234C251 18 264 31 264 46V95C264 109 252 122 236 122H84C68 122 58 111 58 97Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
                    <circle cx="92" cy="68" r="8" fill="#1d6ea8" />
                    <circle cx="132" cy="68" r="8" fill="#1d6ea8" />
                    <circle cx="174" cy="68" r="8" fill="#1d6ea8" />
                    {progress >= 7 && <circle cx="222" cy="68" r="8" fill="#d2a261" />}
                    {progress >= 8 && <circle cx="258" cy="68" r="8" fill="#d2a261" />}
                    {progress >= 9 && <circle cx="292" cy="68" r="8" fill="#d2a261" />}
                    {progress >= 7 && <path d="M174 68C190 68 206 68 222 68" stroke="rgba(240,177,95,0.28)" strokeWidth="2" strokeDasharray="5 5" />}
                  </svg>
                </div>
              </div>
              {progress >= 7 && (
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-2xl border border-[rgba(210,162,97,0.2)] bg-[rgba(210,162,97,0.08)] p-4 text-sm text-[var(--soft)]"
                >
                  <div className="flex items-center gap-2 text-[var(--gold)]">
                    <AlertTriangle className="h-4 w-4" />
                    Identity drift detected.
                  </div>
                  <p className="mt-2 text-sm text-[var(--soft)]">The agent&apos;s effective identity just expanded.</p>
                </motion.div>
              )}
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-[var(--gold)]">
                <ShieldAlert className="h-4 w-4" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Intent panel</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Declared purpose</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">Process customer refunds under $500.</p>
                <div className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-3">
                  <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    <span>Intended boundary</span>
                    <span>Expected operations</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {allowedActions.map((item) => (
                      <span key={item} className="rounded-full border border-[rgba(29,110,168,0.18)] bg-[rgba(29,110,168,0.08)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--blue)]">
                        {item}
                      </span>
                    ))}
                  </div>
                  {progress >= 10 && (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 rounded-2xl border border-[rgba(210,162,97,0.2)] bg-[rgba(210,162,97,0.08)] p-3"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Outside the intended boundary</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {observedActions.filter((item) => !allowedActions.includes(item)).map((item) => (
                          <span key={item} className="rounded-full border border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--red)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Allowed</p>
                    <div className="mt-2 space-y-2">
                      {allowedActions.map((item) => (
                        <div key={item} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-sm text-[var(--text)]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">Observed</p>
                    <div className="mt-2 space-y-2">
                      {observedActions.map((item) => (
                        <div
                          key={item}
                          className={`rounded-2xl border px-3 py-2 text-sm ${observedActions.indexOf(item) >= allowedActions.length ? "border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] text-[var(--red)]" : "border-[var(--line)] bg-[var(--panel)] text-[var(--text)]"}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Runtime identity graph</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">One execution, many surfaces</h2>
            </div>
            <div className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              {progress >= simulationEvents.length ? "Correlated" : "Live update"}
            </div>
          </div>

          <DemoRuntimeGraph progress={progress} prefersReducedMotion={prefersReducedMotion ?? false} />
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
            <div className="flex items-center gap-2 text-[var(--gold)]">
              <Cpu className="h-4 w-4" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Incident summary</p>
            </div>

            <div className="mt-5 rounded-[24px] border border-[var(--line)] bg-white p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Critical incident</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">Potential Agent Identity Compromise</h3>
                </div>
                <div className="rounded-full border border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--red)]">
                  Risk 97/100
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-[20px] border border-[var(--line)] bg-[var(--panel)] p-4">
                <AnimatePresence initial={false}>
                  {correlationBurst ? (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      className="absolute inset-0 z-10 flex items-center justify-center rounded-[20px] bg-white/90"
                    >
                      <div className="flex flex-wrap justify-center gap-2 px-6">
                        {[
                          "42 EVENTS",
                          "7 IDENTITIES",
                          "1 AUTONOMOUS ACTOR",
                          "EXE-883901",
                        ].map((item) => (
                          <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Events</p>
                    <p className="mt-2 text-lg font-semibold text-[var(--text)]">42</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Identities</p>
                    <p className="mt-2 text-lg font-semibold text-[var(--text)]">7</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--line)] bg-white p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Execution</p>
                    <p className="mt-2 text-lg font-semibold text-[var(--text)]">1</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Events</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text)]">42</p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Identities</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text)]">7</p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Execution</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--text)]">1</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsInvestigating(true)}
                  disabled={!canInvestigate}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ScanSearch className="h-4 w-4" />
                  Investigate Incident
                </button>
                <span className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Synthetic demo values
                </span>
              </div>
            </div>
          </div>

          {isInvestigating && (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[32px] border border-[var(--line)] bg-[var(--navy)] p-5 text-[var(--soft)] shadow-[var(--shadow-soft)] sm:p-6"
            >
              <div className="flex items-center gap-2 text-[var(--gold)]">
                <Sparkles className="h-4 w-4" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">AgentTrace investigation</p>
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">What happened?</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--soft)]">
                CustomerRefundAgent began inside its expected refund-processing identity envelope. During execution, it acquired payroll-reader, finance-admin-mcp, and bulk-export-token, enabling actions outside its declared purpose against the synthetic customer_financial_records dataset.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "OVERVIEW",
                  "IDENTITY",
                  "INTENT",
                  "DATA",
                  "BLAST RADIUS",
                  "TIMELINE",
                ].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveInvestigationTab(tab.toLowerCase())}
                    className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${activeInvestigationTab === tab.toLowerCase() ? "border-[rgba(210,162,97,0.25)] bg-[rgba(210,162,97,0.08)] text-[var(--gold)]" : "border-white/10 bg-white/5 text-[var(--soft)]"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Why AgentTrace flagged this</p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--soft)]">
                    <li>01. Identity surface expanded beyond the declared envelope.</li>
                    <li>02. New identities provided access unrelated to refund operations.</li>
                    <li>03. Observed tools violated the declared business intent.</li>
                    <li>04. Sensitive data access followed privilege expansion.</li>
                    <li>05. External transfer followed bulk export.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{activeInvestigationTab.toUpperCase()}</p>
                  <div className="mt-3 space-y-2 text-sm text-[var(--soft)]">
                    {activeInvestigationTab === "overview" && (
                      <>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Expected execution → identity drift → intent violation → potential exfiltration.</div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">One execution was reconstructed from seven identity surfaces.</div>
                      </>
                    )}
                    {activeInvestigationTab === "identity" && (
                      <>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">refund-service, stripe-refund, customer-profile-mcp</div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">payroll-reader, finance-admin-mcp, bulk-export-token</div>
                      </>
                    )}
                    {activeInvestigationTab === "intent" && (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">The agent later invoked payroll_access and bulk_export, which fall outside the declared refund workflow.</div>
                    )}
                    {activeInvestigationTab === "data" && (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Customer profile and refund history were followed by customer_financial_records access and an outbound transfer.</div>
                    )}
                    {activeInvestigationTab === "blast radius" && (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">The suspected impact extended from the agent to finance systems and then to an external endpoint.</div>
                    )}
                    {activeInvestigationTab === "timeline" && (
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">11:02 expected refund operations → 11:02 drift → 11:03 violation → 11:03 critical transfer.</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="mb-5 flex items-center gap-2 text-[var(--gold)]">
            <CheckCircle2 className="h-4 w-4" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Identity evidence</p>
          </div>
          <div className="rounded-[24px] border border-[var(--line)] bg-white p-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Agent</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">CustomerRefundAgent</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Execution</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">EXE-883901</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">Identity evidence</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {identitySurface.map((item) => (
                  <span key={item} className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--text)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-6">
          <div className="mb-5 flex items-center gap-2 text-[var(--gold)]">
            <AlertTriangle className="h-4 w-4" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Blast radius</p>
          </div>
          <div className="rounded-[24px] border border-[var(--line)] bg-white p-5">
            <div className="space-y-3">
              {[
                { key: "identities", label: "Identities", values: ["refund-service", "payroll-reader", "finance-admin-mcp", "bulk-export-token"], tone: "blue" },
                { key: "tools", label: "Tools", values: ["customer_lookup", "refund_create", "payroll_access", "bulk_export"], tone: "gold" },
                { key: "data", label: "Data", values: ["customer_profile", "refund_history", "customer_financial_records"], tone: "navy" },
                { key: "downstream", label: "Downstream", values: ["Finance system", "External endpoint"], tone: "red" },
              ].map((item) => {
                const isOpen = expandedBlastCategory === item.key;
                return (
                  <div key={item.key} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] px-3 py-3">
                    <button
                      type="button"
                      onClick={() => setExpandedBlastCategory(isOpen ? null : item.key)}
                      className="flex w-full items-center justify-between gap-3 text-left"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</span>
                      <ChevronRight className={`h-4 w-4 text-[var(--gold)] transition ${isOpen ? "rotate-90" : "rotate-0"}`} />
                    </button>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-3 flex flex-wrap gap-2">
                        {item.values.map((value) => (
                          <span key={value} className="rounded-full border border-[var(--line)] bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text)]">
                            {value}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 text-sm text-[var(--muted)]">
              <p className="font-semibold text-[var(--text)]">Potential blast radius</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">7 identity surfaces</span>
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">5 tools</span>
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">3 data domains</span>
                <span className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5">2 downstream targets</span>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">Synthetic scenario</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-2 text-[var(--gold)]">
          <Workflow className="h-4 w-4" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em]">Product explanation</p>
        </div>
        <div className="rounded-[24px] border border-[var(--line)] bg-white p-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Agent runtime", body: "Identity and execution context" },
              { title: "Security data plane", body: "Databricks / Delta / OCSF" },
              { title: "AgentTrace", body: "Execution identity + drift detection" },
              { title: "Investigation", body: "Intent, blast radius, and response" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{item.title}</p>
                <p className="mt-2 text-sm text-[var(--text)]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[22px] border border-[var(--line)] bg-[var(--panel)] p-4">
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Without AgentTrace</p>
                <p className="mt-2 text-sm text-[var(--text)]">42 disconnected events, separated credential identities, and manual investigation.</p>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-[var(--navy)] p-4 text-[var(--soft)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">With AgentTrace</p>
                <p className="mt-2 text-sm">One execution identity, identity drift explained, intent violation contextualized, and blast radius reconstructed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
