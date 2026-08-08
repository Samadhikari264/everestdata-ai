"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Menu, ShieldCheck, X } from "lucide-react";
import { EverestMark } from "./everest-mark";

const navItems = [
  { href: "/data-ai", label: "Data & AI" },
  { href: "/security", label: "Security" },
  { href: "/agenttrace", label: "AgentTrace™" },
  { href: "/demo", label: "Demo" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(244,241,235,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text)]">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--panel)] p-1.5 shadow-[0_10px_20px_rgba(7,30,51,0.06)]">
              <EverestMark variant="light" className="h-full w-full" />
            </span>
            <span className="hidden sm:inline">Everest Data</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-2.5 py-1.5 transition duration-200 ${isActive ? "bg-white/80 text-[var(--text)]" : "hover:bg-white/60 hover:text-[var(--text)]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/agenttrace"
              className="hidden rounded-full border border-[var(--line)] bg-white/70 px-3.5 py-2 text-xs font-medium text-[var(--text)] transition duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)] sm:inline-flex sm:text-sm"
            >
              Explore AgentTrace™
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-[var(--brand-deep)]"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white/80 text-[var(--text)] lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[var(--line)] bg-[rgba(244,241,235,0.98)] px-4 py-4 sm:px-6 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-[var(--muted)]">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-3 py-2 ${isActive ? "bg-white text-[var(--text)]" : "hover:bg-white/70 hover:text-[var(--text)]"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--line)] bg-[var(--navy)] text-[var(--soft)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr] lg:px-8 lg:py-24">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--soft)]">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1.5">
                <EverestMark variant="dark" className="h-full w-full" />
              </span>
              Everest Data
            </div>
            <p className="max-w-md text-sm leading-7 text-[var(--muted-light)]">
              Enterprise data, AI, and runtime security for the agentic enterprise.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Company</p>
            <ul className="space-y-3 text-sm text-[var(--muted-light)]">
              <li><Link href="/company" className="transition hover:text-white">About</Link></li>
              <li><Link href="/data-ai" className="transition hover:text-white">Data & AI</Link></li>
              <li><Link href="/security" className="transition hover:text-white">Security</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Products</p>
            <ul className="space-y-3 text-sm text-[var(--muted-light)]">
              <li><Link href="/agenttrace" className="transition hover:text-white">AgentTrace™</Link></li>
              <li><Link href="/demo" className="transition hover:text-white">Demo</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Inquiries</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Connect</p>
            <div className="flex items-center gap-3 text-sm text-[var(--muted-light)]">
              <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
              <Link href="/contact" className="transition hover:text-white">Contact Everest</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
