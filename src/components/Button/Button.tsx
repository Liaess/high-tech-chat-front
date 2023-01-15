import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { ThreeDots } from "react-loader-spinner";

export type ButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  isLoading,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={clsx(
        `bg-user-color text-white p-2 rounded-[3px] hover:opacity-90 " ${
          isLoading &&
          "cursor-not-allowed opacity-90 no-animation hover:bg-primary"
        }}`,
        className
      )}
      onClick={onClick}
    >
      {isLoading ? (
        <ThreeDots
          height="24"
          width="24"
          radius="9"
          data-testid="three-dots-loading"
          color="#FFFF"
          ariaLabel="three-dots-loading"
          wrapperClass={"flex justify-center items-center"}
        />
      ) : (
        children
      )}
    </button>
  );
}
