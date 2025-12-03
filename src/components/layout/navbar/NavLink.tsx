"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
}

export default function NavLink({ href, label, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center text-sm font-medium transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      <span>{label}</span>
      <span
        className={cn(
          "pointer-events-none absolute inset-x-1 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out",
          isActive && "scale-x-100"
        )}
      />
    </Link>
  );
}
