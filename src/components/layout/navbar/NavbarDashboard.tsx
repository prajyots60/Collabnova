"use client";

import Link from "next/link";
import { Bell, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";
import UserMenu from "./UserMenu";
import { NavLinkItem, NavbarUser } from "./types";

interface NavbarDashboardProps {
  user: NavbarUser;
  notifications?: number;
  messages?: number;
}

const dashboardQuickLinks: NavLinkItem[] = [
  { label: "Overview", href: "/dashboard" },
  { label: "Campaigns", href: "/dashboard/sponsor/campaigns" },
  { label: "Deals", href: "/dashboard/creator/deals" },
];

export default function NavbarDashboard({
  user,
  notifications = 4,
  messages = 1,
}: NavbarDashboardProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="font-semibold tracking-tight">
            Collabnova Workspace
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            {dashboardQuickLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} className="text-xs uppercase tracking-wide" />
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="size-4" />
            {notifications ? (
              <Badge className="absolute -right-1 -top-1 size-4 justify-center rounded-full text-[10px]">
                {notifications}
              </Badge>
            ) : null}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Messages" className="relative">
            <MessageCircle className="size-4" />
            {messages ? (
              <Badge className="absolute -right-1 -top-1 size-4 justify-center rounded-full text-[10px]">
                {messages}
              </Badge>
            ) : null}
          </Button>
          <UserMenu user={user} />
        </div>

        <div className="md:hidden">
          <MobileMenu
            title="Workspace"
            links={dashboardQuickLinks}
            user={user}
            footer={
              <div className="flex justify-between text-sm">
                <Link href="/dashboard/settings/profile" className="text-primary">
                  Profile
                </Link>
                <Link href="/dashboard/messages" className="text-muted-foreground">
                  Messages
                </Link>
              </div>
            }
          />
        </div>
      </div>
    </header>
  );
}
