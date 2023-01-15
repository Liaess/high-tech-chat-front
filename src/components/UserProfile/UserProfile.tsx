import Image from "next/image";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
export function UserProfile(): JSX.Element {
  return (
    <>
      <div className="min-h-screen flex pt-5">
        <div className="bg-third-color-palette w-[27.813rem] flex justify-end pt-10">
          <div className="w-[10rem]">
            <h1 className="text-light-gray"> USER SETTINGS </h1>
          </div>
        </div>
        <div className="bg-fourth-color-palette w-[calc(100%-27.813rem)] relative pl-8 pt-10">
          <h1 className="text-light-gray pb-3"> My Account </h1>
          <div className="w-[33rem] h-80 rounded-md bg-first-color-palette fixed">
            <div className="bg-light-gray h-24 w-full rounded"></div>
            <div>
              <div className="flex justify-between pl-28 pt-[1.1rem] pb-10 pr-[0.9rem]">
                <div className="bg-first-color-palette w-[5.3rem] h-[5.3rem] rounded-full flex justify-center items-center absolute left-5 top-[4.5rem]">
                  <Image
                    className="rounded-full"
                    src="/assets/cat.jpg"
                    alt="user-profile"
                    width={70}
                    height={70}
                  />
                </div>
                <h1 className="text-light-gray"> USERNAME </h1>
                <button className="bg-indigo-700 text-light-gray rounded w-32 h-7 ">
                  {" "}
                  Edit User Profile{" "}
                </button>
              </div>
              <div className="bg-third-color-palette w-[95%] h-[9.3rem] rounded-md absolute bottom-3 left-3 text-light-gray text-xs">
                <div className="flex justify-between p-3 h-12">
                  <div>
                    <h1> USERNAME </h1>
                    <h1> user name </h1>
                  </div>
                  <button className="bg-indigo-700 w-14 h-7 rounded ">
                    {" "}
                    Edit{" "}
                  </button>
                </div>
                <div className="flex justify-between p-3 h-12">
                  <div>
                    <h1> EMAIL </h1>
                    <h1> user email </h1>
                  </div>
                  <button className="bg-indigo-700 w-14 h-7 rounded">
                    {" "}
                    Edit{" "}
                  </button>
                </div>
                <div className="flex justify-between p-3 h-12">
                  <div>
                    <h1> PHONE NUMBER </h1>
                    <h1> 1234567890 </h1>
                  </div>
                  <button className="bg-indigo-700 w-14 h-7 rounded">
                    {" "}
                    Edit{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-7 left-[36.5rem] text-light-gray flex flex-col justify-center items-center">
            <Link href="/">
              <AiOutlineCloseCircle className="w-10 h-10 cursor-pointer hover:text-white" />
            </Link>
            <h1> ESC </h1>
          </div>
        </div>
      </div>
    </>
  );
}
