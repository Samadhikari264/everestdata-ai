"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightLeft, Database, ShieldCheck } from "lucide-react";

const beforeSequence = ["Human", "Application", "Data"];

const heroNodes = [
  { label: "Everest Data", x: "50%", y: "13%", tone: "navy" },
  { label: "Data & AI", x: "18%", y: "48%", tone: "blue" },
  { label: "Security", x: "80%", y: "48%", tone: "gold" },
  { label: "Agentic Enterprise", x: "50%", y: "84%", tone: "navy" },
] as const;

const agentNodes = [
  { label: "AWS / Azure / GCP", className: "left-[8%] top-[8%]" },
  { label: "OAuth", className: "left-[18%] top-[72%]" },
  { label: "Service Account", className: "left-[31%] top-[18%]" },
  { label: "Workload", className: "right-[30%] top-[18%]" },
  { label: "MCP", className: "right-[14%] top-[68%]" },
  { label: "Delegated Agent", className: "right-[8%] top-[14%]" },
  { label: "Data Principal", className: "left-[42%] bottom-[8%]" },
] as const;

export function HeroArchitectureDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[var(--shadow-soft)] sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--navy)] text-[10px] font-bold text-[var(--gold)]">ED</span>
          Everest architecture
        </div>
        <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
          Agentic era
        </span>
      </div>

      <div className="relative h-[380px] overflow-hidden rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8fafc_0%,#eef4fb_100%)]">
        <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--line)] bg-white/30" />

        <svg viewBox="0 0 360 360" className="absolute inset-0 h-full w-full">
          <path d="M180 70V130M180 230V290M110 130L90 175M250 130L270 175M80 180H280" stroke="rgba(13,41,72,0.18)" strokeWidth="2" strokeDasharray="6 8" fill="none" />
          <path d="M90 180H110M250 180H270" stroke="rgba(210,162,97,0.74)" strokeWidth="2" strokeDasharray="5 8" fill="none" />
          <path d="M130 110H180V150H230M130 250H180V210H230" stroke="rgba(29,110,168,0.38)" strokeWidth="2" strokeDasharray="6 8" fill="none" />
          <circle className="flow-dot" cx="180" cy="180" r="6" fill="#D2A261" />
          <circle className="brand-signal" cx="90" cy="180" r="4" fill="#1D6EA8" />
          <circle className="brand-signal" cx="270" cy="180" r="4" fill="#D2A261" />
          <circle className="brand-signal" cx="180" cy="70" r="4" fill="#071E33" />
          <circle className="brand-signal" cx="180" cy="290" r="4" fill="#071E33" />
        </svg>

        {heroNodes.map((node) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <span
              className={[
                "inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]",
                node.tone === "blue" && "border-[rgba(29,110,168,0.18)] bg-[rgba(29,110,168,0.08)] text-[var(--blue)]",
                node.tone === "gold" && "border-[rgba(210,162,97,0.24)] bg-[rgba(210,162,97,0.08)] text-[var(--gold-strong)]",
                node.tone === "navy" && "border-[rgba(7,30,51,0.15)] bg-white/80 text-[var(--navy)]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function BeforeAfterFlow() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[28px] border border-[var(--line)] bg-white p-6 sm:p-8"
      >
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Before</p>
        <div className="flex flex-wrap items-center gap-3">
          {beforeSequence.map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text)]">
                {item}
              </div>
              {index < beforeSequence.length - 1 && <ArrowRightLeft className="h-4 w-4 text-[var(--muted)]" />}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        className="rounded-[28px] border border-[var(--line)] bg-[var(--navy)] p-6 text-[var(--soft)] shadow-[var(--shadow-soft)] sm:p-8"
      >
        <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Now</p>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">Human</div>
            <ArrowRightLeft className="h-4 w-4 text-[var(--muted-light)]" />
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">AI Agent</div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pl-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white">Tools</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white">APIs</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white">Other Agents</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-[rgba(255,255,255,0.25)] via-[rgba(210,162,97,0.8)] to-[rgba(255,255,255,0.25)]" />
            <div className="rounded-full border border-[rgba(210,162,97,0.35)] bg-[rgba(210,162,97,0.08)] px-4 py-2 text-sm font-medium text-[var(--gold-soft)]">Enterprise Data</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function VerticalCardsGrid({
  items,
}: {
  items: Array<{ label: string; title: string; description: string; bullets: string[]; href: string }>;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,94,143,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-[var(--line)] bg-white px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--navy)]">
            Everest
          </div>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="absolute left-1/2 top-1/2 hidden h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[rgba(29,110,168,0.25)] via-[rgba(7,30,51,0.35)] to-[rgba(210,162,97,0.25)] lg:block" />
          {items.map(({ label, title, description, bullets, href }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[28px] border border-[var(--line)] bg-white p-6 sm:p-8 shadow-[0_20px_40px_rgba(7,30,51,0.03)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{label}</p>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--gold)]">
                  {title.includes("Security") ? <ShieldCheck className="h-5 w-5" /> : <Database className="h-5 w-5" />}
                </div>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-3xl">{title}</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-[var(--muted)]">{description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {bullets.map((item) => (
                  <li key={item} className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                    {item}
                  </li>
                ))}
              </ul>

              <Link href={href} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--text)] transition duration-200 hover:text-[var(--gold)]">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
          Data foundation + runtime security for the autonomous enterprise
        </div>
      </div>
    </div>
  );
}

export function IdentityGraph() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-8">
      <div className="relative h-[360px] overflow-hidden rounded-[22px] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(210,162,97,0.12),rgba(7,30,51,0.2)_45%,rgba(7,30,51,0.6)_70%)]">
        <svg viewBox="0 0 640 360" className="absolute inset-0 h-full w-full">
          <path d="M200 80C270 80 300 110 320 160L350 180C390 220 420 220 470 220" stroke="rgba(210,162,97,0.6)" strokeWidth="2" strokeDasharray="7 8" fill="none" />
          <path d="M180 260C230 240 260 220 320 180C350 160 420 160 470 180" stroke="rgba(138,215,240,0.7)" strokeWidth="2" strokeDasharray="7 8" fill="none" />
          <path d="M320 180L468 180" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeDasharray="7 8" fill="none" />
          <circle className="flow-dot" cx="320" cy="180" r="9" fill="#D2A261" />
          <circle className="flow-dot" cx="470" cy="180" r="10" fill="#8AD7F0" />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
          <div className="rounded-full border border-[rgba(210,162,97,0.5)] bg-[rgba(210,162,97,0.12)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-soft)]">
            AgentTrace
          </div>
          <div className="rounded-full border border-white/15 bg-[var(--navy)] px-5 py-3 text-base font-semibold text-white">EXE-883901</div>
        </div>

        {agentNodes.map((node) => (
          <div key={node.label} className={`absolute ${node.className}`}>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--muted-light)]">
              {node.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
