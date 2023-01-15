import { ReactElement, ReactNode } from "react";

export type ComponentProps<T> = {
  children?: ReactNode;
  className?: string;
} & T;

export type Component<T> = (_props: ComponentProps<T>) => ReactElement | null;
