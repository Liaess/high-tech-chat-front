import TextareaAutosize from "react-autosize-textarea";

export default function Chat(): JSX.Element {
  return (
    <div className="bg-third-color-palette w-[calc(100%-24rem)] pt-[3.75rem]">
      <div className="p-3">
        <h1 className="text-light-gray"> messages </h1>
      </div>
      <div className="flex justify-center fixed bottom-5 w-[calc(100%-28rem)]">
        <TextareaAutosize
          placeholder="Message"
          className="w-[97.4%] h-9 outline-none border-none bg-fourth-color-palette text-light-gray rounded-lg pl-10 pr-[8.45rem] py-1.5 resize-none"
        />
      </div>
    </div>
  );
}
