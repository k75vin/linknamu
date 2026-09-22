import { Profile } from "@/components/Profile";
import { LinkList } from "@/components/LinkList";
import { profile, links } from "@/lib/site-config";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#fffaf3] via-[#fff2e2] to-[#ffe2c4] px-6 py-20 dark:from-[#15110d] dark:via-[#1c1611] dark:to-[#2a1d15]">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
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
