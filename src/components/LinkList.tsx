import { LinkCard } from "@/components/LinkCard";
import type { LinkItem } from "@/lib/site-config";

export function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.id} id={link.id} label={link.label} href={link.href} />
      ))}
    </div>
  );
}
