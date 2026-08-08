type EverestMarkProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function EverestMark({ variant = "light", className = "" }: EverestMarkProps) {
  const primary = variant === "dark" ? "#F4E8D0" : "#071E33";
  const accent = variant === "dark" ? "#D8A868" : "#C98B41";
  const panel = variant === "dark" ? "rgba(255,255,255,0.04)" : "rgba(7,30,51,0.04)";

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label="Everest Data monogram"
      className={className}
    >
      <rect x="8" y="8" width="104" height="104" rx="26" fill={panel} />
      <path
        d="M32 24V96H62.5V82H46V62H64V48H46V34H62.5V24H32Z"
        fill="none"
        stroke={primary}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62 24H74.5C88.5 24 98 33.4 98 60C98 86.6 88.5 96 74.5 96H62V24Z"
        fill="none"
        stroke={accent}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63 24V96"
        fill="none"
        stroke={accent}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
