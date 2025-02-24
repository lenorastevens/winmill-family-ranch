import Link from 'next/link';
import { JSX } from 'react';

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

export default function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-4"
    >
      {icon} {label}
    </Link>
  );
}
