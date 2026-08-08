import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { footerNav, legalNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-off-white/10 bg-deep-forest text-off-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Logo dark variant="full" className="w-44" />
            <div className="mt-8 flex items-center gap-5 text-[13px] tracking-wide text-off-white/60">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-off-white"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-off-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <nav
            aria-label="Footer-Navigation"
            className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
          >
            {footerNav.map((group) => (
              <div key={group.label}>
                <p className="mb-4 text-[11px] font-medium tracking-[0.14em] text-off-white/60 uppercase">
                  {group.label}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-off-white/75 transition-colors hover:text-off-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-16 text-[12px] tracking-[0.1em] text-off-white/60 uppercase">
          {siteConfig.location.city} · {siteConfig.location.country} · Est. {siteConfig.founded}
        </p>
      </div>

      <div className="border-t border-off-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col-reverse items-center justify-between gap-4 px-6 py-6 text-[13px] text-off-white/55 sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <nav aria-label="Rechtliches" className="flex items-center gap-6">
            {legalNav.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-off-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
