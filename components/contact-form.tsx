"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

type InquiryPath = "data-ai" | "security" | "agenttrace" | "strategic";
type AgentTraceMode = "demo" | "design";

type FormValues = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  linkedIn?: string;
  extra?: string;
  stage?: string;
  securityNeed?: string;
  currentPlatform?: string;
  agentEnvironment?: string;
  agentStage?: string;
  agentConcern?: string;
  agentValidation?: string;
  conversationType?: string;
  website?: string;
};

const paths = [
  {
    id: "data-ai" as const,
    title: "Data & AI Project",
    eyebrow: "Data & AI",
    description: "Modernize data platforms and build governed AI infrastructure.",
    examples: ["Databricks", "Lakehouse", "Governance", "AI Engineering"],
    cta: "Start Data & AI Inquiry",
    accent: "bg-[var(--brand)] text-white",
    cardClass: "border-[var(--line)] bg-white",
  },
  {
    id: "security" as const,
    title: "Security / Lakewatch",
    eyebrow: "Security",
    description: "Build the security data plane, detection engineering, and Lakewatch workflows.",
    examples: ["Lakewatch", "OCSF", "Detection Engineering", "Security Data"],
    cta: "Start Security Inquiry",
    accent: "bg-[var(--navy)] text-white",
    cardClass: "border-[var(--line)] bg-white",
  },
  {
    id: "agenttrace" as const,
    title: "AgentTrace",
    eyebrow: "AgentTrace",
    description: "Explore runtime identity security for autonomous AI agents.",
    examples: ["Agent Identity", "MCP", "Runtime Security", "Identity Drift"],
    cta: "Request AgentTrace Inquiry",
    accent: "bg-[var(--gold)] text-[var(--navy)]",
    cardClass: "border-[var(--gold)]/35 bg-[rgba(210,162,97,0.08)]",
  },
  {
    id: "strategic" as const,
    title: "Investor / Strategic",
    eyebrow: "Strategic",
    description: "Discuss investment, advisory, platform, or strategic collaboration.",
    examples: ["Investor", "Advisor", "Partnership", "Technology"],
    cta: "Start a Conversation",
    accent: "border-[var(--line)] bg-[var(--panel)] text-[var(--text)]",
    cardClass: "border-[var(--line)] bg-[var(--panel)]",
  },
];

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
  website: "",
};

function mapQueryToSelection(searchParams: URLSearchParams) {
  const inquiry = searchParams.get("inquiry")?.toLowerCase() ?? "";
  if (inquiry.includes("data")) return { path: "data-ai" as const, mode: "design" as const };
  if (inquiry.includes("security") || inquiry.includes("lakewatch")) return { path: "security" as const, mode: "design" as const };
  if (inquiry.includes("agenttrace") && inquiry.includes("demo")) return { path: "agenttrace" as const, mode: "demo" as const };
  if (inquiry.includes("design") || inquiry.includes("partner")) return { path: "agenttrace" as const, mode: "design" as const };
  if (inquiry.includes("strategic") || inquiry.includes("investor")) return { path: "strategic" as const, mode: "design" as const };
  return { path: "data-ai" as const, mode: "design" as const };
}

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (values.website?.trim()) errors.website = "Malformed submission.";
  if (!values.name.trim()) errors.name = "Please share your name.";
  else if (values.name.trim().length > 80) errors.name = "Please keep the name under 80 characters.";
  if (!values.email.trim()) errors.email = "Please provide a work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.company.trim()) errors.company = "Please share your company.";
  else if (values.company.trim().length > 160) errors.company = "Please keep the company name under 160 characters.";
  if (!values.role.trim()) errors.role = "Please share your role.";
  else if (values.role.trim().length > 120) errors.role = "Please keep the role under 120 characters.";
  if (!values.message.trim()) errors.message = "Please tell us a bit more about the request.";
  else if (values.message.trim().length > 2000) errors.message = "Please keep the message under 2000 characters.";

  return errors;
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedPath, setSelectedPath] = useState<InquiryPath>("data-ai");
  const [agentTraceMode, setAgentTraceMode] = useState<AgentTraceMode>("design");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverMessage, setServerMessage] = useState<string>("");

  useEffect(() => {
    const selection = mapQueryToSelection(new URLSearchParams(searchParams.toString()));
    setSelectedPath(selection.path);
    if (selection.path === "agenttrace") {
      setAgentTraceMode(selection.mode);
    }
  }, [searchParams]);

  const currentPath = useMemo(() => paths.find((path) => path.id === selectedPath)!, [selectedPath]);
  const inquiryTitle = selectedPath === "agenttrace" && agentTraceMode === "demo" ? "AgentTrace Demo Request" : selectedPath === "agenttrace" ? "AgentTrace Design Partner" : currentPath.title;
  const inquirySummary = selectedPath === "agenttrace"
    ? agentTraceMode === "demo"
      ? "We will review your agent environment and runtime identity needs."
      : "We will review your environment, stage, and security priorities."
    : selectedPath === "data-ai"
      ? "We will review your project context and determine the most relevant next step."
      : selectedPath === "security"
        ? "We will review the security architecture and use case you shared."
        : "We will review the context and follow up where there is a relevant strategic fit.";

  function updateField(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function selectPath(path: InquiryPath, mode: AgentTraceMode = "design") {
    setSelectedPath(path);
    if (path === "agenttrace") {
      setAgentTraceMode(mode);
    }
    setIsSubmitted(false);
    setServerMessage("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setServerMessage("");

    try {
      const inquiryType =
        selectedPath === "data-ai"
          ? "DATA_AI"
          : selectedPath === "security"
            ? "SECURITY_LAKEWATCH"
            : selectedPath === "agenttrace" && agentTraceMode === "demo"
              ? "AGENTTRACE_DEMO"
              : selectedPath === "agenttrace"
                ? "AGENTTRACE_DESIGN_PARTNER"
                : "INVESTOR_STRATEGIC";

      const payload = {
        name: values.name,
        email: values.email,
        company: values.company,
        role: values.role,
        message: values.message,
        linkedIn: values.linkedIn ?? "",
        inquiryType,
        projectType: values.extra ?? "",
        projectStage: values.stage ?? "",
        securityNeed: values.securityNeed ?? "",
        currentSecurityPlatform: values.currentPlatform ?? "",
        agentEnvironment: values.agentEnvironment ?? "",
        agentStage: values.agentStage ?? "",
        agentConcern: values.agentConcern ?? "",
        agentValidation: values.agentValidation ?? "",
        conversationType: values.conversationType ?? "",
        website: values.website ?? "",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setIsSubmitted(true);
      setServerMessage(result.message);
    } catch {
      setServerMessage("Contact delivery is not configured in this environment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
    setServerMessage("");
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
        {paths.map((path) => {
          const active = path.id === selectedPath;
          return (
            <button
              key={path.id}
              type="button"
              onClick={() => selectPath(path.id as InquiryPath, "design")}
              className={`rounded-[24px] border p-5 text-left transition-all ${path.cardClass} ${active ? "border-[var(--brand)] shadow-[0_18px_40px_rgba(10,25,35,0.08)]" : "opacity-95"}`}
            >
              <div className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${path.accent}`}>
                {path.eyebrow}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">{path.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{path.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {path.examples.map((example) => (
                  <span key={example} className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[11px] text-[var(--muted)]">
                    {example}
                  </span>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)]">
                {path.cta}
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="rounded-[32px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Selected inquiry</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text)]">{inquiryTitle}</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{inquirySummary}</p>
          </div>
          <div className="rounded-full border border-[var(--line)] bg-white px-3 py-2 text-sm text-[var(--muted)]">
            {currentPath.cta}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-[24px] border border-[rgba(29,110,168,0.16)] bg-[rgba(29,110,168,0.06)] p-6"
              >
                <div className="flex items-center gap-3 text-[var(--text)]">
                  <CheckCircle2 className="h-5 w-5 text-[var(--blue)]" />
                  <p className="text-lg font-semibold">Thanks — your inquiry has been received.</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{serverMessage || (selectedPath === "data-ai" ? "We’ll review your project context and determine the most relevant next step." : selectedPath === "security" ? "We’ll review the security architecture and use case you shared." : selectedPath === "agenttrace" ? "We’ll review your agent environment and runtime identity needs." : "We’ll review the context and follow up where there is a relevant strategic fit.")}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="button" onClick={resetForm} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
                    Submit another inquiry
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a href="/" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)]">
                    Return to Everest Data
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key={`${selectedPath}-${agentTraceMode}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {selectedPath === "agenttrace" ? (
                  <div className="flex flex-wrap gap-2 rounded-full border border-[var(--line)] bg-white p-1.5">
                    <button type="button" onClick={() => setAgentTraceMode("demo")} className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${agentTraceMode === "demo" ? "bg-[var(--brand)] text-white" : "text-[var(--muted)]"}`}>
                      Demo request
                    </button>
                    <button type="button" onClick={() => setAgentTraceMode("design")} className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${agentTraceMode === "design" ? "bg-[var(--brand)] text-white" : "text-[var(--muted)]"}`}>
                      Design partner
                    </button>
                  </div>
                ) : null}

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm text-[var(--muted)]">
                    <span className="mb-2 flex items-center gap-2 font-medium text-[var(--text)]">Name <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">Required</span></span>
                    <input value={values.name} onChange={(event) => updateField("name", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Your name" aria-invalid={Boolean(errors.name)} />
                    {errors.name ? <span className="mt-2 block text-xs text-[var(--red)]">{errors.name}</span> : null}
                  </label>
                  <label className="text-sm text-[var(--muted)]">
                    <span className="mb-2 flex items-center gap-2 font-medium text-[var(--text)]">Work email <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">Required</span></span>
                    <input type="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="you@company.com" aria-invalid={Boolean(errors.email)} />
                    {errors.email ? <span className="mt-2 block text-xs text-[var(--red)]">{errors.email}</span> : null}
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="text-sm text-[var(--muted)]">
                    <span className="mb-2 flex items-center gap-2 font-medium text-[var(--text)]">Company <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">Required</span></span>
                    <input value={values.company} onChange={(event) => updateField("company", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Company name" aria-invalid={Boolean(errors.company)} />
                    {errors.company ? <span className="mt-2 block text-xs text-[var(--red)]">{errors.company}</span> : null}
                  </label>
                  <label className="text-sm text-[var(--muted)]">
                    <span className="mb-2 flex items-center gap-2 font-medium text-[var(--text)]">Role <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)]">Required</span></span>
                    <input value={values.role} onChange={(event) => updateField("role", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="CTO, data lead, security engineer..." aria-invalid={Boolean(errors.role)} />
                    {errors.role ? <span className="mt-2 block text-xs text-[var(--red)]">{errors.role}</span> : null}
                  </label>
                </div>

                <label className="block text-sm text-[var(--muted)]">
                  <span className="mb-2 flex items-center justify-between gap-2 font-medium text-[var(--text)]">LinkedIn URL <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">Optional</span></span>
                  <input value={values.linkedIn ?? ""} onChange={(event) => updateField("linkedIn", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="https://www.linkedin.com/in/your-name" />
                </label>

                {selectedPath === "data-ai" ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm text-[var(--muted)]">
                      <span className="mb-2 block font-medium text-[var(--text)]">What are you working on?</span>
                      <select value={values.extra ?? ""} onChange={(event) => updateField("extra", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                        <option value="">Select an option</option>
                        <option>Databricks implementation</option>
                        <option>Data platform modernization</option>
                        <option>Data migration</option>
                        <option>Governance</option>
                        <option>Data engineering</option>
                        <option>AI engineering</option>
                        <option>Agentic AI</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block text-sm text-[var(--muted)]">
                      <span className="mb-2 block font-medium text-[var(--text)]">Project stage</span>
                      <select value={values.stage ?? ""} onChange={(event) => updateField("stage", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                        <option value="">Select a phase</option>
                        <option>Exploring</option>
                        <option>Planning</option>
                        <option>Actively building</option>
                        <option>Production modernization</option>
                      </select>
                    </label>
                  </div>
                ) : null}

                {selectedPath === "security" ? (
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm text-[var(--muted)]">
                      <span className="mb-2 block font-medium text-[var(--text)]">Security need</span>
                      <select value={values.securityNeed ?? ""} onChange={(event) => updateField("securityNeed", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                        <option value="">Select a need</option>
                        <option>Lakewatch implementation</option>
                        <option>Security data engineering</option>
                        <option>OCSF normalization</option>
                        <option>Detection engineering</option>
                        <option>Security connectors</option>
                        <option>Agent security</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="block text-sm text-[var(--muted)]">
                      <span className="mb-2 block font-medium text-[var(--text)]">Current security data platform</span>
                      <select value={values.currentPlatform ?? ""} onChange={(event) => updateField("currentPlatform", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                        <option value="">Select an option</option>
                        <option>Databricks</option>
                        <option>Splunk</option>
                        <option>Microsoft Sentinel</option>
                        <option>Elastic</option>
                        <option>Snowflake</option>
                        <option>Other</option>
                        <option>Not sure</option>
                      </select>
                    </label>
                  </div>
                ) : null}

                {selectedPath === "agenttrace" ? (
                  <div className="space-y-5">
                    <label className="block text-sm text-[var(--muted)]">
                      <span className="mb-2 block font-medium text-[var(--text)]">What agent environment are you using?</span>
                      <select value={values.agentEnvironment ?? ""} onChange={(event) => updateField("agentEnvironment", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                        <option value="">Select an environment</option>
                        <option>AWS AgentCore</option>
                        <option>Azure-based agents</option>
                        <option>Google Cloud agents</option>
                        <option>Databricks agents</option>
                        <option>MCP-based systems</option>
                        <option>Custom agent platform</option>
                        <option>Still evaluating</option>
                      </select>
                    </label>
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block text-sm text-[var(--muted)]">
                        <span className="mb-2 block font-medium text-[var(--text)]">Current stage</span>
                        <select value={values.agentStage ?? ""} onChange={(event) => updateField("agentStage", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                          <option value="">Select a stage</option>
                          <option>Prototype</option>
                          <option>Internal testing</option>
                          <option>Production pilot</option>
                          <option>Production</option>
                          <option>Exploring</option>
                        </select>
                      </label>
                      <label className="block text-sm text-[var(--muted)]">
                        <span className="mb-2 block font-medium text-[var(--text)]">What security problem are you most concerned about?</span>
                        <select value={values.agentConcern ?? ""} onChange={(event) => updateField("agentConcern", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                          <option value="">Select a concern</option>
                          <option>Agent discovery</option>
                          <option>Runtime identity</option>
                          <option>Credential use</option>
                          <option>Tool / MCP access</option>
                          <option>Identity drift</option>
                          <option>Data access</option>
                          <option>Delegated agents</option>
                          <option>Auditability</option>
                          <option>Other</option>
                        </select>
                      </label>
                    </div>
                    {agentTraceMode === "design" ? (
                      <label className="block text-sm text-[var(--muted)]">
                        <span className="mb-2 block font-medium text-[var(--text)]">What would you like to validate with AgentTrace?</span>
                        <textarea rows={3} value={values.agentValidation ?? ""} onChange={(event) => updateField("agentValidation", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Share the workflow, hypothesis, or scenario you want to validate." />
                      </label>
                    ) : null}
                  </div>
                ) : null}

                {selectedPath === "strategic" ? (
                  <label className="block text-sm text-[var(--muted)]">
                    <span className="mb-2 block font-medium text-[var(--text)]">Conversation type</span>
                    <select value={values.conversationType ?? ""} onChange={(event) => updateField("conversationType", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--text)] outline-none transition focus:border-[var(--gold)]">
                      <option value="">Select an option</option>
                      <option>Investor</option>
                      <option>Advisor</option>
                      <option>Platform partnership</option>
                      <option>Technology collaboration</option>
                      <option>Other</option>
                    </select>
                  </label>
                ) : null}

                <label className="block text-sm text-[var(--muted)]">
                  <span className="mb-2 block font-medium text-[var(--text)]">Message</span>
                  <textarea rows={5} value={values.message} onChange={(event) => updateField("message", event.target.value)} className="w-full rounded-xl border border-[var(--line)] bg-white px-4 py-3 outline-none transition focus:border-[var(--gold)]" placeholder="Share your goals, architecture context, and security or AI requirements." aria-invalid={Boolean(errors.message)} />
                  {errors.message ? <span className="mt-2 block text-xs text-[var(--red)]">{errors.message}</span> : null}
                </label>

                <label className="hidden" aria-hidden="true">
                  <span className="sr-only">Leave this empty</span>
                  <input tabIndex={-1} autoComplete="off" value={values.website ?? ""} onChange={(event) => updateField("website", event.target.value)} className="hidden" />
                </label>

                <div className="flex flex-wrap items-center gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                        Saving inquiry
                      </>
                    ) : (
                      <>
                        Submit inquiry
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="rounded-[24px] border border-[var(--line)] bg-white p-5 shadow-[0_12px_30px_rgba(7,30,51,0.05)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">What happens next</p>
            <div className="mt-5 space-y-4">
              {[
                { title: "Share your context", text: "Tell us what you are building, what problem you are solving, and the environment you are working in." },
                { title: "Everest reviews the fit", text: "We review the technical or strategic relevance before moving into a deeper conversation." },
                { title: "We continue where it matters", text: "If there is a strong fit, the next step is shaped around your use case rather than a generic follow-up." },
              ].map((step, index) => (
                <div key={step.title} className="rounded-[20px] border border-[var(--line)] bg-[var(--panel)] p-4">
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--text)]">0{index + 1}</span>
                    {step.title}
                  </div>
                  <p className="text-sm leading-7 text-[var(--muted)]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
