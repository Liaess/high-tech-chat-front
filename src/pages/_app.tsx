import type { AppProps } from "next/app";
import "@/styles/tailwind.css";
import { queryClient } from "@/libs/ReactQuery";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}
