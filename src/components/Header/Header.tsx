import { useIcons } from "@/hooks/useIcons";

export function Header(): JSX.Element {
  const { minus, window, close } = useIcons();
  return (
    <>
      <div className="bg-first-color-palette w-full h-5 flex justify-end items-center fixed left-0 top-0 z-9">
        {minus}
        {window}
        {close}
      </div>
      <div className="border-b border-first-color-palette w-screen h-10 flex fixed left-0 top-5 z-6 pl-16">
        <div className="bg-second-color-palette w-48"></div>
        <div className="bg-third-color-palette w-[calc(100%-12rem)]"></div>
      </div>
    </>
  );
}