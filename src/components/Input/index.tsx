import Image from "next/image";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: string;
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <div className="relative rounded-sm shadow-sm">
      <input
        className={`
          block border-0 min-w-[80%] md:min-w-[400px] pl-2 py-2 rounded-sm pr-10 w-full 
          text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 
          focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6`}
        type="text"
        {...props}
      />
      {!!icon && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <Image
            alt=""
            className="fill-gray-400"
            height={20}
            src={icon}
            width={20}
          />
        </div>
      )}
    </div>
  );
}
