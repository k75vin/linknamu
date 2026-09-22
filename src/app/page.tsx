import { Profile } from "@/components/Profile";
import { LinkList } from "@/components/LinkList";
import { profile, links } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-6">
        <Profile
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
          avatarInitial={profile.avatarInitial}
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
