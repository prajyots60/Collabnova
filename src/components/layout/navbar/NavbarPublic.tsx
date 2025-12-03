"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { NavLinkItem } from "./types";

interface NavbarPublicProps {
  scrolled: boolean;
}

const publicLinks: NavLinkItem[] = [
  { label: "Explore Creators", href: "/creators" },
  { label: "Explore Campaigns", href: "/campaigns" },
];

export default function NavbarPublic({ scrolled }: NavbarPublicProps) {
  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-background/5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold">
          Collabnova
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {publicLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Sign up</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileMenu
            title="Navigate"
            links={[...publicLinks, { label: "Login", href: "/login" }]}
            cta={
              <div className="flex flex-col gap-2">
                <Button asChild>
                  <Link href="/register">Get started</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/login">Already have an account?</Link>
                </Button>
              </div>
            }
          />
        </div>
      </div>
    </header>
  );
}
