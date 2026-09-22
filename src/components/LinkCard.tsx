import { recordLinkClick } from "@/lib/actions";

type LinkCardProps = {
  id: string;
  label: string;
  href: string;
};

export function LinkCard({ id, label, href }: LinkCardProps) {
  const trackAndRedirect = recordLinkClick.bind(null, id, href);

  return (
    <form action={trackAndRedirect} className="w-full">
      <button
        type="submit"
        className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
      >
        {label}
      </button>
    </form>
  );
}
