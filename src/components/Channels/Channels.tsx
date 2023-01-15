import { useState } from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { useParams } from "react-router-dom";

export function Channels(): JSX.Element {
  // const { id } = useParams();
  const [collapseChannels, setCollapseChannels] = useState(false);
  // const [channels, setChannels] = useState([]);

  const channels: { id: number; name: string }[] = [
    {
      id: 1,
      name: "general",
    },
    {
      id: 2,
      name: "anime",
    },
    {
      id: 3,
      name: "games",
    },
  ];

  return (
    <div className="bg-third-color-palette w-[11.938rem]">
      <div className="flex items-center w-full h-12 pl-6 pr-3 border-b border-first-color-palette">
        <h1 className="text-light-gray font-bold"> Server Name </h1>
      </div>
      <div
        className={`overflow-hidden transition-[height] ease-in-out duration-[2ms] ${
          collapseChannels ? "h-12" : ""
        }`}
      >
        <div className="flex items-center h-11">
          {collapseChannels ? (
            <IoIosArrowUp
              onClick={() => setCollapseChannels(!collapseChannels)}
              className="text-white m-1 cursor-pointer"
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setCollapseChannels(!collapseChannels)}
              className="text-white m-1 cursor-pointer"
            />
          )}
          <h1 className="text-light-gray"> Text Channels </h1>
        </div>
        {channels.map((e) => (
          <div
            key={e.id}
            // eslint-disable-next-line no-console
            onClick={() => console.log("changing chats")}
            className="flex items-center pl-6 pr-3 my-1 h-8 rounded cursor-pointer text-light-gray hover:bg-fourth-color-palette"
          >
            <BsFillChatLeftFill />
            <h1 className="pl-2 pb-1"> {e.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
