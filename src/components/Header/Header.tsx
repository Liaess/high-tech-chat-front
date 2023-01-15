import { useIcons } from "@/hooks/useIcons";

export function Header(): JSX.Element {
  const Minus = () => useIcons("minus", "text-light-gray mx-1");
  const Window = () => useIcons("window", "text-light-gray mx-1");
  const Close = () => useIcons("close", "text-light-gray mx-1");

  return (
    <>
      <div className="bg-first-color-palette w-full h-5 flex justify-end items-center fixed left-0 top-0">
        <Minus />
        <Window />
        <Close />
      </div>
    </>
  );
}
