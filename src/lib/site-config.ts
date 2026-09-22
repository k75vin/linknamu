export type LinkItem = {
  id: string;
  label: string;
  href: string;
};

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  avatarUrl: undefined as string | undefined,
  avatarInitial: "K",
};

export const links: LinkItem[] = [
  { id: "blog", label: "블로그", href: "https://example.com/blog" },
  { id: "portfolio", label: "포트폴리오", href: "https://example.com/portfolio" },
  { id: "instagram", label: "인스타그램", href: "https://instagram.com" },
];
