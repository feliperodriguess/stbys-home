import Image from "next/image";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  containerClassName?: string;
  isRequired?: boolean;
  icon?: string;
}

export function Input({
  className,
  containerClassName,
  icon,
  isRequired = false,
  ...props
}: InputProps) {
  return (
    <div className={`relative rounded-sm shadow-sm ${containerClassName}`}>
      {isRequired && (
        <span className="absolute -left-[10px] text-red-500">*</span>
      )}
      <input
        className={`
          block border-0 pl-4 py-2 rounded-sm pr-10 w-full 
          text-gray-1000 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 
          focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6 ${className}`}
        type="text"
        {...props}
      />
      {!!icon && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Image
            alt=""
            className="fill-gray-400"
            height={16}
            src={icon}
            width={16}
          />
        </div>
      )}
    </div>
  );
}
