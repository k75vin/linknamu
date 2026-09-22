export type LinkItem = {
  id: string;
  label: string;
  href: string;
};

export const profile = {
  name: "카라미",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많음",
  avatarUrl: "https://placehold.co/150x150/orange/white.png",
  avatarInitial: "K",
};

export const links: LinkItem[] = [
  { id: "github", label: "🐙 깃허브", href: "https://github.com/k75vin" },
  { id: "blog", label: "✍️ 블로그", href: "https://blog.naver.com/jini7504" },
  {
    id: "email",
    label: "📧 이메일",
    href: "mailto:moeunkevin0201@gmail.com",
  },
];
