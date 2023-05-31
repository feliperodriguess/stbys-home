interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Heading({ className, children, ...props }: HeadingProps) {
  return (
    <h2
      className={`font-display mb-8 text-gray-1000 text-2xl lg:text-4xl lg:ml-[120px] ${afterClassName} ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

const afterClassName =
  "lg:after:content-[''] lg:after:block lg:after:mt-2 lg:after:bg-yellow-1000 lg:after:h-[2px] lg:after:w-[91px]";
