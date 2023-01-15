import clsx from "clsx";
import { FormEvent, InputHTMLAttributes } from "react";

export type InputProps = {
  label: string;
  handleChange(_event: FormEvent<HTMLInputElement>): void;
  isDisabled: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  label,
  type = "text",
  value,
  name,
  className,
  isDisabled,
  handleChange,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col items-start w-11/12 mt-5">
      <label className="text-gray-400 font-bold" htmlFor={label}>
        {label}
        <span className="text-red-600"> *</span>
      </label>
      <input
        {...props}
        disabled={isDisabled}
        value={value}
        name={name}
        className={clsx(
          "w-full p-2 rounded-[3px] mt-2 focus:outline-none bg-first-color-palette disabled:cursor-not-allowed",
          className
        )}
        required
        type={type}
        onChange={handleChange}
      ></input>
    </div>
  );
}
