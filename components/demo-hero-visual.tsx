"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type HeroStage = 0 | 1 | 2 | 3 | 4 | 5;

const stageLabels: Record<HeroStage, string> = {
  0: "AGENT ONLINE",
  1: "EXPECTED IDENTITIES",
  2: "SIGNAL PATH",
  3: "DRIFT DETECTED",
  4: "TRACE CONVERGED",
  5: "ONE TRACE",
};

export function DemoHeroVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [stage, setStage] = useState<HeroStage>(prefersReducedMotion ? 5 : 0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const durations: Record<HeroStage, number> = {
      0: 900,
      1: 900,
      2: 1000,
      3: 900,
      4: 900,
      5: 1800,
    };

    const timer = window.setTimeout(() => {
      setStage((current) => (current >= 5 ? 0 : ((current + 1) as HeroStage)));
    }, durations[stage]);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion, stage]);

  const cardClasses = "rounded-[22px] border border-[rgba(7,30,51,0.12)] bg-white/95 px-4 py-3 shadow-[0_10px_35px_rgba(7,30,51,0.08)]";
  const activeCardClasses = "border-[rgba(29,110,168,0.22)]";

  const helperLabel = useMemo(() => stageLabels[stage], [stage]);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#f7fbff_0%,#eef6fb_100%)] p-4 sm:p-5 lg:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,110,168,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,51,0.04)_1px,transparent_1px),linear-gradient(rgba(7,30,51,0.04)_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3 rounded-full border border-[rgba(7,30,51,0.08)] bg-white/80 px-3 py-2 backdrop-blur">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Live identity correlation</p>
            <p className="mt-1 text-sm font-semibold text-[var(--text)]">{helperLabel}</p>
          </div>
          <div className="rounded-full border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.08)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
            Enterprise view
          </div>
        </div>

        <div className="relative rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-white/70 p-4 sm:p-5">
          <svg viewBox="0 0 640 360" className="absolute inset-0 h-full w-full">
            <path d="M320 78L320 122" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
            <path d="M320 122L150 196" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
            <path d="M320 122L320 196" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
            <path d="M320 122L490 196" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
            <path d="M150 196L150 260" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
            <path d="M320 196L320 260" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
            <path d="M490 196L490 260" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
            <path d="M150 260L320 260" stroke="rgba(29,110,168,0.2)" strokeWidth="2" />
            <path d="M320 260L490 260" stroke="rgba(29,110,168,0.2)" strokeWidth="2" />
            <path d="M320 260L320 318" stroke="rgba(29,110,168,0.2)" strokeWidth="2" />
            {stage >= 2 && (
              <motion.circle
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.2, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: 0.2 }}
                cx="320"
                cy="122"
                r="6"
                fill="#1d6ea8"
              />
            )}
            {stage >= 3 && (
              <motion.circle
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.1, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: 0.15 }}
                cx="150"
                cy="196"
                r="5"
                fill="#d2a261"
              />
            )}
            {stage >= 4 && (
              <motion.circle
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.05, repeat: prefersReducedMotion ? 0 : Infinity, repeatDelay: 0.1 }}
                cx="320"
                cy="260"
                r="5"
                fill="#071e33"
              />
            )}
          </svg>

          <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
            <div className="flex flex-col items-center gap-4 lg:col-span-3">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: stage >= 0 ? 1 : 0, y: stage >= 0 ? 0 : 10 }}
                className={`${cardClasses} ${activeCardClasses} min-w-[220px] max-w-[280px] text-center`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Agent</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">CustomerRefundAgent</p>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
                className={`${cardClasses} min-w-[220px] max-w-[280px] text-center`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Execution</p>
                <p className="mt-2 text-sm font-semibold text-[var(--text)]">EXE-883901</p>
              </motion.div>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
              className={`${cardClasses} min-h-[96px] text-center`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Cloud</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">refund-service</p>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
              className={`${cardClasses} min-h-[96px] text-center`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">OAuth</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">stripe-refund</p>
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
              className={`${cardClasses} min-h-[96px] text-center`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">MCP</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">customer-profile-mcp</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : 10 }}
              className={`${cardClasses} border-[rgba(240,177,95,0.25)] bg-[rgba(240,177,95,0.1)] text-center lg:col-start-2`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Unexpected identity</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">payroll-reader</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: stage >= 4 ? 1 : 0, y: stage >= 4 ? 0 : 10 }}
              className={`${cardClasses} border-[rgba(29,110,168,0.2)] bg-[rgba(29,110,168,0.07)] text-center lg:col-span-3`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">AgentTrace</p>
              <p className="mt-2 text-sm font-semibold text-[var(--text)]">One execution, one accountable trace</p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: stage >= 5 ? 1 : 0, y: stage >= 5 ? 0 : 8 }}
              className="lg:col-span-3"
            >
              <div className="mx-auto max-w-[320px] rounded-[24px] border border-[rgba(7,30,51,0.08)] bg-[rgba(7,30,51,0.96)] px-5 py-4 text-center text-white shadow-[0_14px_40px_rgba(7,30,51,0.16)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">Final state</p>
                <p className="mt-2 text-base font-semibold tracking-[-0.02em]">ONE AGENT</p>
                <p className="text-base font-semibold tracking-[-0.02em]">MANY IDENTITIES</p>
                <p className="text-base font-semibold tracking-[-0.02em]">ONE TRACE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
