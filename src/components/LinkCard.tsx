"use client";

import { recordLinkClick } from "@/lib/actions";

type LinkCardProps = {
  id: string;
  label: string;
  href: string;
};

export function LinkCard({ id, label, href }: LinkCardProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <a
      href={href}
      onClick={() => {
        recordLinkClick(id);
      }}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/50 px-5 py-4 text-sm font-medium text-[#2b2320] shadow-[0_8px_20px_-10px_rgba(146,84,34,0.35)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_12px_24px_-10px_rgba(146,84,34,0.45)] dark:border-white/10 dark:bg-white/5 dark:text-[#f3ece5] dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
