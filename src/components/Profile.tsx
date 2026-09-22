import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
  avatarInitial: string;
};

export function Profile({ name, bio, avatarUrl, avatarInitial }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-white/70 to-transparent blur-lg dark:from-white/10" />
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={name}
            width={112}
            height={112}
            className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_12px_28px_-8px_rgba(146,84,34,0.45)] dark:ring-white/10"
          />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd9a8] to-[#ffb877] text-3xl font-semibold text-white ring-4 ring-white/80 shadow-[0_12px_28px_-8px_rgba(146,84,34,0.45)] dark:from-[#3a2a1c] dark:to-[#523522] dark:ring-white/10">
            {avatarInitial}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-[#2b2320] dark:text-[#f3ece5]">
          {name}
        </h1>
        <p className="text-sm text-[#8a7a6d] dark:text-[#c9b8a8]">{bio}</p>
      </div>
    </div>
  );
}
