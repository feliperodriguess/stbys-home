interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[classNames.base, classNames[variant], className].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

const classNames = {
  base: "font-semibold max-w-xs py-4 px-8 rounded-sm uppercase",
  primary: "bg-yellow-1000 text-cyan-1000 hover:text-blue-900",
  secondary: "bg-transparent border-[1.5px] border-cyan-1000 text-cyan-1000",
};
