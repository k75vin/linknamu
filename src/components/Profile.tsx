import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
  avatarInitial: string;
};

export function Profile({ name, bio, avatarUrl, avatarInitial }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={name}
          width={96}
          height={96}
          className="h-24 w-24 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {avatarInitial}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
          {name}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{bio}</p>
      </div>
    </div>
  );
}
