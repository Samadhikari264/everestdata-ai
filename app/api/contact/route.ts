import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type InquiryType =
  | "DATA_AI"
  | "SECURITY_LAKEWATCH"
  | "AGENTTRACE_DEMO"
  | "AGENTTRACE_DESIGN_PARTNER"
  | "INVESTOR_STRATEGIC"
  | "GENERAL";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  role?: unknown;
  message?: unknown;
  linkedIn?: unknown;
  inquiryType?: unknown;
  projectType?: unknown;
  projectStage?: unknown;
  securityNeed?: unknown;
  currentSecurityPlatform?: unknown;
  agentEnvironment?: unknown;
  agentStage?: unknown;
  agentConcern?: unknown;
  agentValidation?: unknown;
  conversationType?: unknown;
  website?: unknown;
};

const VALID_INQUIRY_TYPES = new Set<InquiryType>([
  "DATA_AI",
  "SECURITY_LAKEWATCH",
  "AGENTTRACE_DEMO",
  "AGENTTRACE_DESIGN_PARTNER",
  "INVESTOR_STRATEGIC",
  "GENERAL",
]);

function normalizeInquiryType(value: unknown): InquiryType {
  const normalized = String(value ?? "").trim().toLowerCase();

  switch (normalized) {
    case "data-ai":
    case "data_ai":
    case "data ai":
    case "dataai":
      return "DATA_AI";
    case "security":
    case "security-lakewatch":
    case "security_lakewatch":
    case "lakewatch":
      return "SECURITY_LAKEWATCH";
    case "agenttrace-demo":
    case "agenttrace_demo":
    case "agenttrace demo":
    case "demo":
      return "AGENTTRACE_DEMO";
    case "design-partner":
    case "design_partner":
    case "design partner":
    case "agenttrace-design-partner":
    case "agenttrace_design_partner":
      return "AGENTTRACE_DESIGN_PARTNER";
    case "strategic":
    case "investor":
    case "investor-strategic":
    case "investor_strategic":
    case "investor strategic":
    case "platform-partnership":
    case "platform_partnership":
    case "technology-collaboration":
    case "technology_collaboration":
      return "INVESTOR_STRATEGIC";
    default:
      return "GENERAL";
  }
}

function sanitizeText(value: unknown, maxLength = 2000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function validatePayload(payload: ContactPayload) {
  const errors: Record<string, string> = {};
  const values = {
    name: sanitizeText(payload.name, 80),
    email: sanitizeText(payload.email, 160),
    company: sanitizeText(payload.company, 160),
    role: sanitizeText(payload.role, 120),
    message: sanitizeText(payload.message, 2000),
    linkedIn: sanitizeText(payload.linkedIn, 200),
    inquiryType: normalizeInquiryType(payload.inquiryType),
    projectType: sanitizeText(payload.projectType, 160),
    projectStage: sanitizeText(payload.projectStage, 160),
    securityNeed: sanitizeText(payload.securityNeed, 160),
    currentSecurityPlatform: sanitizeText(payload.currentSecurityPlatform, 160),
    agentEnvironment: sanitizeText(payload.agentEnvironment, 160),
    agentStage: sanitizeText(payload.agentStage, 160),
    agentConcern: sanitizeText(payload.agentConcern, 160),
    agentValidation: sanitizeText(payload.agentValidation, 400),
    conversationType: sanitizeText(payload.conversationType, 160),
  };

  if (typeof payload.website === "string" && payload.website.trim()) {
    errors.website = "Malformed submission.";
  }

  if (!values.name) errors.name = "Please share your name.";
  else if (values.name.length > 80) errors.name = "Please keep the name under 80 characters.";
  if (!values.email) errors.email = "Please provide a work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.company) errors.company = "Please share your company or organization.";
  else if (values.company.length > 160) errors.company = "Please keep the company name under 160 characters.";
  if (!values.role) errors.role = "Please share your role.";
  else if (values.role.length > 120) errors.role = "Please keep the role under 120 characters.";
  if (!values.message) errors.message = "Please tell us a bit more about the request.";
  else if (values.message.length > 2000) errors.message = "Please keep the message under 2000 characters.";

  if (values.inquiryType === "DATA_AI") {
    if (!values.projectType) errors.projectType = "Please choose a project type.";
    if (!values.projectStage) errors.projectStage = "Please choose a project stage.";
  }

  if (values.inquiryType === "SECURITY_LAKEWATCH") {
    if (!values.securityNeed) errors.securityNeed = "Please choose the security need.";
    if (!values.currentSecurityPlatform) errors.currentSecurityPlatform = "Please choose the current security data platform.";
  }

  if (values.inquiryType === "AGENTTRACE_DEMO" || values.inquiryType === "AGENTTRACE_DESIGN_PARTNER") {
    if (!values.agentEnvironment) errors.agentEnvironment = "Please choose the agent environment.";
    if (!values.agentStage) errors.agentStage = "Please choose the current stage.";
    if (!values.agentConcern) errors.agentConcern = "Please choose the primary concern.";
  }

  if (values.inquiryType === "INVESTOR_STRATEGIC") {
    if (!values.conversationType) errors.conversationType = "Please choose the conversation type.";
  }

  if (!VALID_INQUIRY_TYPES.has(values.inquiryType)) {
    errors.inquiryType = "Please select a valid inquiry type.";
  }

  return { values, errors };
}

function getSubject(values: ReturnType<typeof validatePayload>["values"]): string {
  const company = values.company || values.name;
  switch (values.inquiryType) {
    case "DATA_AI":
      return `[Everest Data] Data & AI Inquiry — ${company}`;
    case "SECURITY_LAKEWATCH":
      return `[Everest Data] Security / Lakewatch Inquiry — ${company}`;
    case "AGENTTRACE_DEMO":
      return `[Everest Data] AgentTrace Demo Request — ${company}`;
    case "AGENTTRACE_DESIGN_PARTNER":
      return `[Everest Data] AgentTrace Design Partner — ${company}`;
    case "INVESTOR_STRATEGIC":
      return `[Everest Data] Investor / Strategic Inquiry — ${company}`;
    default:
      return `[Everest Data] General Inquiry — ${company}`;
  }
}

function getSuccessMessage(inquiryType: InquiryType) {
  switch (inquiryType) {
    case "DATA_AI":
      return "Thanks — your Data & AI inquiry has been received. We'll review the context and follow up if there is a strong fit.";
    case "SECURITY_LAKEWATCH":
      return "Thanks — your security inquiry has been received. We'll review your environment and the problem you're trying to solve.";
    case "AGENTTRACE_DEMO":
      return "Thanks — your AgentTrace demo request has been received. We'll review your agent environment and use case.";
    case "AGENTTRACE_DESIGN_PARTNER":
      return "Thanks for your interest in helping shape AgentTrace. We'll review your environment, stage, and security priorities.";
    case "INVESTOR_STRATEGIC":
      return "Thanks — your message has been received. We'll review the context and follow up where there is a relevant strategic fit.";
    default:
      return "Thanks — your message has been received.";
  }
}

function buildEmailBody(values: ReturnType<typeof validatePayload>["values"]) {
  const lines = [
    "EVEREST DATA — NEW WEBSITE INQUIRY",
    "",
    "Inquiry Type:",
    values.inquiryType === "DATA_AI"
      ? "Data & AI"
      : values.inquiryType === "SECURITY_LAKEWATCH"
        ? "Security / Lakewatch"
        : values.inquiryType === "AGENTTRACE_DEMO"
          ? "AgentTrace Demo Request"
          : values.inquiryType === "AGENTTRACE_DESIGN_PARTNER"
            ? "AgentTrace Design Partner"
            : values.inquiryType === "INVESTOR_STRATEGIC"
              ? "Investor / Strategic"
              : "General",
    "",
    "Name:",
    values.name || "N/A",
    "",
    "Company:",
    values.company || "N/A",
    "",
    "Role:",
    values.role || "N/A",
    "",
    "Work Email:",
    values.email || "N/A",
  ];

  if (values.linkedIn) {
    lines.push("", "LinkedIn:", values.linkedIn);
  }

  if (values.inquiryType === "DATA_AI") {
    lines.push("", "Project Type:", values.projectType || "N/A", "", "Project Stage:", values.projectStage || "N/A");
  }

  if (values.inquiryType === "SECURITY_LAKEWATCH") {
    lines.push("", "Security Need:", values.securityNeed || "N/A", "", "Current Security Data Platform:", values.currentSecurityPlatform || "N/A");
  }

  if (values.inquiryType === "AGENTTRACE_DEMO" || values.inquiryType === "AGENTTRACE_DESIGN_PARTNER") {
    lines.push(
      "",
      "Agent Environment:",
      values.agentEnvironment || "N/A",
      "",
      "Current Stage:",
      values.agentStage || "N/A",
      "",
      "Primary Concern:",
      values.agentConcern || "N/A",
    );

    if (values.inquiryType === "AGENTTRACE_DESIGN_PARTNER" && values.agentValidation) {
      lines.push("", "What would you like to validate with AgentTrace?:", values.agentValidation);
    }
  }

  if (values.inquiryType === "INVESTOR_STRATEGIC") {
    lines.push("", "Conversation Type:", values.conversationType || "N/A");
  }

  lines.push("", "Message:", values.message || "N/A", "", "Submitted from:", "EverestData.ai");

  return lines.join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const { values, errors } = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, message: "Please complete the required fields.", errors }, { status: 400 });
    }

    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL?.trim();
    const providerApiKey = process.env.EMAIL_PROVIDER_API_KEY?.trim();

    if (!destinationEmail || !providerApiKey) {
      return NextResponse.json(
        { ok: false, message: "Contact delivery is not configured in this environment." },
        { status: 503 },
      );
    }

    const subject = getSubject(values);
    const body = buildEmailBody(values);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${providerApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Everest Data <onboarding@resend.dev>",
        to: [destinationEmail],
        reply_to: values.email || destinationEmail,
        subject,
        text: body,
        html: `<pre style="font-family:Arial, sans-serif; white-space:pre-wrap;">${body}</pre>`,
      }),
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("Contact delivery failure", response.status, responseText);
      return NextResponse.json(
        { ok: false, message: "Contact delivery is not configured in this environment." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: getSuccessMessage(values.inquiryType) });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Contact delivery is not configured in this environment." },
      { status: 503 },
    );
  }
}
