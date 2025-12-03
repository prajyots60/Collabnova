"use client";

import Link from "next/link";
import { Bell, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import { NavLinkItem, NavbarUser, UserRole } from "./types";

interface NavbarAuthedProps {
  role: UserRole;
  scrolled: boolean;
  user: NavbarUser;
  unreadMessages?: number;
}

const navItemsByRole: Record<UserRole, NavLinkItem[]> = {
  creator: [
    { label: "Dashboard", href: "/dashboard/creator" },
    { label: "My Deals", href: "/dashboard/creator/deals" },
    { label: "Messages", href: "/dashboard/messages" },
  ],
  sponsor: [
    { label: "Dashboard", href: "/dashboard/sponsor" },
    { label: "Create Campaign", href: "/dashboard/sponsor/create" },
    { label: "My Campaigns", href: "/dashboard/sponsor/campaigns" },
    { label: "Messages", href: "/dashboard/messages" },
  ],
  admin: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Campaigns", href: "/admin/campaigns" },
    { label: "Users", href: "/admin/users" },
  ],
};

export default function NavbarAuthed({ role, scrolled, user, unreadMessages = 3 }: NavbarAuthedProps) {
  const navItems = navItemsByRole[role];

  const ctaButton =
    role === "sponsor" ? (
      <Button size="sm" asChild>
        <Link href="/dashboard/sponsor/create">Create campaign</Link>
      </Button>
    ) : null;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-background/40"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/dashboard" className="text-lg font-semibold">
          Collabnova
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {role === "sponsor" && ctaButton}
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="size-4" />
            <span className="sr-only">Notifications</span>
            <Badge className="absolute -right-1 -top-1 size-4 justify-center rounded-full text-[10px]">
              2
            </Badge>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Messages" className="relative">
            <MessageCircle className="size-4" />
            <span className="sr-only">Messages</span>
            {unreadMessages ? (
              <Badge className="absolute -right-1 -top-1 size-4 justify-center rounded-full text-[10px]">
                {unreadMessages}
              </Badge>
            ) : null}
          </Button>
          <UserMenu user={user} />
        </div>

        <div className="md:hidden">
          <MobileMenu
            title="Dashboard menu"
            links={navItems}
            cta={ctaButton}
            user={user}
            footer={
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Signed in</span>
                <Link href="/dashboard/settings" className="text-primary font-medium">
                  Settings
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </header>
  );
}
