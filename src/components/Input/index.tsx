import { Icon } from "@phosphor-icons/react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  Icon?: Icon;
}

export function Input({ Icon, ...props }: InputProps) {
  return (
    <div className="relative rounded-md shadow-sm">
      <input
        className={`
          block border-0 min-w-[80%] md:min-w-[400px] pl-2 py-2 rounded-md pr-10 w-full 
          text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 
          focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6`}
        type="text"
        {...props}
      />
      {!!Icon && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
    </div>
  );
}
