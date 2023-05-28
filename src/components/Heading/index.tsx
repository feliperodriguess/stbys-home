interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Heading({ className, children, ...props }: HeadingProps) {
  return (
    <h2
      className={`ml-[120px] mb-8 text-slate-900 text-4xl ${afterClassName} ${className}`}
      {...props}
    >
      {/* Update font family */}
      {children}
    </h2>
  );
}

const afterClassName =
  "after:content-[''] after:block after:mt-2 after:bg-yellow-1000 after:h-[2px] after:w-[91px]";
