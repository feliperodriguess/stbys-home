import { Heading } from "@/components";

interface SectionHeaderProps {
  title: string;
  viewAllLink: string;
}

export function SectionHeader({ title, viewAllLink }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-center relative lg:block">
      <Heading className="max-lg:text-center">{title}</Heading>
      <a
        className="hidden lg:inline lg:absolute top-8 right-36 text-blue-900 uppercase"
        href={viewAllLink}
        target="_blank"
      >
        View all
      </a>
    </div>
  );
}
