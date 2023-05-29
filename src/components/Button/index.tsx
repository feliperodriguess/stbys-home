interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  className,
  fullWidth = false,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const className_ = [
    classNames.base,
    classNames[variant],
    fullWidth && classNames.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={className_} type={type} {...props}>
      {children}
    </button>
  );
}

const classNames = {
  base: "font-semibold max-w-xs py-4 px-8 rounded-sm uppercase disabled:opacity-80 disabled:cursor-not-allowed",
  primary: "bg-yellow-1000 text-cyan-1000 hover:text-blue-900",
  secondary: "bg-transparent border-[1.5px] border-cyan-1000 text-cyan-1000",
  tertiary: "bg-gray-700 text-white",
  fullWidth: "!max-w-full w-full",
};
