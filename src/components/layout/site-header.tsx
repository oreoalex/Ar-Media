"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { mainNav, type NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Menü schließt sich automatisch bei Routenwechsel — Zustand wird während
  // des Renderns angepasst statt in einem Effect (vermeidet kaskadierende
  // Re-Renders, siehe react-hooks/set-state-in-effect).
  const [previousPathname, setPreviousPathname] = React.useState(pathname);
  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const handleEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(label);
  };

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 120);
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-off-white/90 backdrop-blur supports-backdrop-filter:bg-off-white/80">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Logo className="w-14 shrink-0" />

        {/* Desktop-Navigation */}
        <nav
          aria-label="Hauptnavigation"
          className="hidden lg:block"
          onMouseLeave={handleLeave}
        >
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.menuType && handleEnter(item.label)}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.menuType ? "true" : undefined}
                  aria-expanded={item.menuType ? openMenu === item.label : undefined}
                  onFocus={() => item.menuType && handleEnter(item.label)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-[13px] tracking-wide transition-colors",
                    item.cta
                      ? "font-semibold text-charcoal hover:text-deep-forest"
                      : "font-medium text-charcoal/80 hover:text-charcoal",
                  )}
                >
                  {item.label}
                  {item.menuType && (
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-3 transition-transform duration-200",
                        openMenu === item.label && "rotate-180",
                      )}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {mainNav
              .filter((item) => item.menuType && openMenu === item.label)
              .map((item) => (
                <DesktopPanel
                  key={item.label}
                  item={item}
                  onClose={() => setOpenMenu(null)}
                  onMouseEnter={() => handleEnter(item.label)}
                  onMouseLeave={handleLeave}
                />
              ))}
          </AnimatePresence>
        </nav>

        {/* Mobile Trigger — size-11 (44px) statt size-9 (36px): Touch-Target-
            Mindestmaß, das Icon selbst bleibt bei size-5 für die gewohnte
            optische Größe, nur die klickbare Fläche wächst. */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex size-11 items-center justify-center text-charcoal lg:hidden"
          aria-label="Menü öffnen"
        >
          <Menu aria-hidden className="size-5" />
        </button>
      </div>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          showCloseButton={false}
          className="w-full max-w-none border-0 bg-off-white p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-none"
        >
          <SheetHeader className="flex-row items-center justify-between border-b border-charcoal/10 p-6">
            <SheetTitle render={<Logo className="w-14" />} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex size-11 items-center justify-center text-charcoal"
              aria-label="Menü schließen"
            >
              <X aria-hidden className="size-5" />
            </button>
          </SheetHeader>
          <MobileNav onNavigate={() => setMobileOpen(false)} />
        </SheetContent>
      </Sheet>
    </header>
  );
}

function DesktopPanel({
  item,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute inset-x-0 top-full border-t border-charcoal/10 bg-off-white shadow-[0_16px_40px_-24px_rgba(13,43,36,0.25)]"
    >
      <div className="mx-auto max-w-[1400px] px-10 py-10">
        {item.menuType === "mega" && item.groups ? (
          <div className="grid grid-cols-[1fr_1fr_1fr_280px] gap-10">
            {item.groups.map((group) => (
              <div key={group.label}>
                <p className="mb-4 text-[11px] font-medium tracking-[0.14em] text-charcoal/75 uppercase">
                  {group.label}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="text-[15px] text-charcoal/85 transition-colors hover:text-deep-forest"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="relative aspect-3/4 w-full overflow-hidden">
              <Image
                src="/images/home/gabelung-unternehmen.jpg"
                alt=""
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <ul className="grid max-w-xs gap-3">
            {item.links?.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="text-[15px] text-charcoal/85 transition-colors hover:text-deep-forest"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = React.useState<string | null>(null);

  return (
    <nav aria-label="Mobile Hauptnavigation" className="flex-1 overflow-y-auto px-6 py-4">
      <ul className="divide-y divide-charcoal/10">
        {mainNav.map((item) => (
          <li key={item.label} className="py-1">
            {item.menuType ? (
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={cn(
                      "flex-1 py-3 text-[17px] text-charcoal",
                      item.cta && "font-semibold",
                    )}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    aria-expanded={expanded === item.label}
                    aria-label={`Untermenü ${item.label} ${expanded === item.label ? "schließen" : "öffnen"}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center text-charcoal"
                  >
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-4 transition-transform duration-200",
                        expanded === item.label && "rotate-180",
                      )}
                    />
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {expanded === item.label && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {(item.groups
                        ? item.groups.flatMap((g) => g.links)
                        : item.links ?? []
                      ).map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={onNavigate}
                            className="block py-2.5 text-[15px] text-charcoal/75"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block py-3 text-[17px] text-charcoal"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
