"use client";

import { motion, useReducedMotion } from "framer-motion";

type DemoRuntimeGraphProps = {
  progress: number;
  prefersReducedMotion?: boolean | null;
};

export function DemoRuntimeGraph({ progress, prefersReducedMotion }: DemoRuntimeGraphProps) {
  const reducedMotion = useReducedMotion();
  const shouldReduceMotion = (prefersReducedMotion ?? reducedMotion) ?? false;

  const visibleNodes = [
    { id: "agent", title: "CustomerRefundAgent", subtitle: "Agent", tone: "dark", visible: true },
    { id: "execution", title: "Execution", subtitle: "EXE-883901", tone: "dark", visible: true },
    { id: "cloud", title: "Cloud ID", subtitle: "refund-service", tone: "blue", visible: true },
    { id: "oauth", title: "OAuth", subtitle: "stripe-refund", tone: "blue", visible: true },
    { id: "mcp", title: "MCP", subtitle: "customer-profile-mcp", tone: "blue", visible: true },
    { id: "payroll", title: "Unexpected identity", subtitle: "payroll-reader", tone: "gold", visible: progress >= 7 },
    { id: "finance", title: "High-risk identity", subtitle: "finance-admin-mcp", tone: "gold", visible: progress >= 8 },
    { id: "bulk", title: "High-risk identity", subtitle: "bulk-export-token", tone: "red", visible: progress >= 9 },
  ];

  const cardClassMap = {
    dark: "border-[rgba(7,30,51,0.14)] bg-[rgba(7,30,51,0.96)] text-white",
    blue: "border-[rgba(29,110,168,0.18)] bg-[rgba(29,110,168,0.08)] text-[var(--text)]",
    gold: "border-[rgba(240,177,95,0.24)] bg-[rgba(240,177,95,0.1)] text-[var(--text)]",
    red: "border-[rgba(196,95,77,0.2)] bg-[rgba(196,95,77,0.08)] text-[var(--text)]",
  } as const;

  return (
    <div className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fbff_0%,#eef5fb_100%)] p-4 sm:p-5">
      <div className="relative">
        <svg viewBox="0 0 640 360" className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block">
          <path d="M320 78L320 124" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
          <path d="M320 124L170 190" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
          <path d="M320 124L320 190" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
          <path d="M320 124L470 190" stroke="rgba(7,30,51,0.16)" strokeWidth="2" />
          <path d="M170 230L170 286" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
          <path d="M320 230L320 286" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
          <path d="M470 230L470 286" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
          <path d="M170 190L170 230" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
          <path d="M320 190L320 230" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
          <path d="M470 190L470 230" stroke="rgba(7,30,51,0.14)" strokeWidth="2" />
          <circle cx="320" cy="124" r="5" fill="#1d6ea8" />
          {progress >= 7 && <circle cx="170" cy="230" r="5" fill="#d2a261" />}
          {progress >= 8 && <circle cx="320" cy="230" r="5" fill="#d2a261" />}
          {progress >= 9 && <circle cx="470" cy="230" r="5" fill="#c45f4d" />}
        </svg>

        <div className="relative z-10 space-y-4">
          <div className="flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`w-full max-w-[320px] rounded-[22px] border px-4 py-3 text-center ${cardClassMap.dark}`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Agent</p>
              <p className="mt-2 text-sm font-semibold">CustomerRefundAgent</p>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className={`w-full max-w-[320px] rounded-[22px] border px-4 py-3 text-center ${cardClassMap.dark}`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Execution</p>
              <p className="mt-2 text-sm font-semibold">EXE-883901</p>
            </motion.div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {visibleNodes.filter((node) => ["cloud", "oauth", "mcp"].includes(node.id)).map((node) => (
              <motion.div
                key={node.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className={`rounded-[20px] border px-3 py-3 text-center ${cardClassMap.blue}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{node.title}</p>
                <p className="mt-2 text-sm font-semibold">{node.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {visibleNodes.filter((node) => ["payroll", "finance", "bulk"].includes(node.id)).map((node) => {
              if (!node.visible) {
                return null;
              }
              return (
                <motion.div
                  key={node.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className={`rounded-[20px] border px-3 py-3 text-center ${cardClassMap[node.tone as keyof typeof cardClassMap]}`}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{node.title}</p>
                  <p className="mt-2 text-sm font-semibold">{node.subtitle}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
