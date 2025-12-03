"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import NavbarAuthed from "./NavbarAuthed";
import NavbarDashboard from "./NavbarDashboard";
import NavbarPublic from "./NavbarPublic";
import { NavbarUser, UserRole } from "./types";

interface RouteMeta {
  variant: "public" | "authed" | "dashboard";
  role: UserRole;
  isAuthenticated: boolean;
}

function getRouteMeta(pathname: string | null): RouteMeta {
  const currentPath = pathname ?? "/";
  const publicPrefixes = ["/", "/creators", "/campaigns"];
  const isAuthPage = currentPath.startsWith("/login") || currentPath.startsWith("/register");
  const isMarketing = publicPrefixes.some((route) =>
    route === "/" ? currentPath === "/" : currentPath.startsWith(route)
  );
  const isDashboard = currentPath.startsWith("/dashboard");

  const role: UserRole = currentPath.includes("sponsor")
    ? "sponsor"
    : currentPath.includes("admin")
    ? "admin"
    : "creator";

  const isAuthenticated = !isMarketing && !isAuthPage;
  const variant: RouteMeta["variant"] = !isAuthenticated
    ? "public"
    : isDashboard
    ? "dashboard"
    : "authed";

  return { variant, role, isAuthenticated };
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { variant, role, isAuthenticated } = useMemo(() => getRouteMeta(pathname), [pathname]);

  if (!isAuthenticated || variant === "public") {
    return <NavbarPublic scrolled={scrolled} />;
  }

  const mockUser: NavbarUser = {
    name: role === "sponsor" ? "Maya Patel" : "Ava Carter",
    email: role === "sponsor" ? "maya@novabrands.com" : "ava@creatorstudio.com",
    role,
    title: role === "sponsor" ? "Brand Strategist" : "UGC Specialist",
    avatarUrl:
      role === "sponsor"
        ? "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=96&h=96&auto=format&fit=crop"
        : "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&h=96&auto=format&fit=crop",
  };

  if (variant === "dashboard") {
    return <NavbarDashboard user={mockUser} />;
  }

  return <NavbarAuthed role={role} scrolled={scrolled} user={mockUser} />;
}
