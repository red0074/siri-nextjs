import Image from "next/image";
import pic from "../assets/pic.jpg";
import { SettingsIcon } from "lucide-react";
export default function Home() {
  return (
    <main className="">
      {/* <h1>lets build the siri</h1> */}
      {/* header */}
      <header className="flex justify-between fixed top-0 text-white w-full p-5">
        <Image
          src={pic}
          height={50}
          width={50}
          alt="picture"
          className="rounded-full aspect-square object-cover"
        />
        <SettingsIcon
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 text-black transition-all ease-in-out duration-150 hover:bg-purple-700 hover:text-white"
        />
      </header>
      {/* form */}
    </main>
  );
}
