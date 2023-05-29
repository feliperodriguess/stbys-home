import { Heading } from "@/components";

interface SectionHeaderProps {
  title: string;
  viewAllLink: string;
}

export function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="relative">
      <Heading>{title}</Heading>
      <a
        className="absolute top-8 right-36 text-blue-900 uppercase"
        href={viewAllLink}
        target="_blank"
      >
        View all
      </a>
    </div>
  );
}
