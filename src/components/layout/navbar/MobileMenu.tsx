"use client";

import { Menu } from "lucide-react";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";
import { NavLinkItem, NavbarUser } from "./types";

interface MobileMenuProps {
  title: string;
  links: NavLinkItem[];
  cta?: ReactNode;
  footer?: ReactNode;
  user?: NavbarUser | null;
}

export default function MobileMenu({ title, links, cta, footer, user }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open navigation menu">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0">
        <SheetHeader className="border-b p-4 text-left">
          <SheetTitle className="text-lg font-semibold">
            {title}
          </SheetTitle>
          {user ? (
            <div className="text-muted-foreground text-sm">
              Signed in as <span className="font-medium text-foreground">{user.name}</span>
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">Welcome to Collabnova</p>
          )}
        </SheetHeader>

        <div className="flex flex-col gap-2 px-4 py-6">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} className="text-base" />
          ))}
        </div>

        {cta ? <div className="px-4 pb-4">{cta}</div> : null}

        <Separator />

        <SheetFooter className="flex flex-col gap-4 px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          {footer}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
