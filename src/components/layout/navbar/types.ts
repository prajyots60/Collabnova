export type UserRole = "creator" | "sponsor" | "admin";

export interface NavbarUser {
  name: string;
  email: string;
  role: UserRole;
  title?: string;
  avatarUrl?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  description?: string;
  badge?: string | number;
}
