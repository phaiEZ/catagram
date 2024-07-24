import Image from "next/image";
import { CatProfile } from "./components/CatProfile";
import { Profilebar } from "./components/profileBar";

export default function Home() {
  return (
    <div className="flex flex-row w-full gap-4 justify-center">
      <div className="flex flex-col w-full">
        <div className="text-center">hall of meow</div>
        <Profilebar />
        <div className="flex flex-col  ">
          <CatProfile />
        </div>
      </div>
    </div>
  );
}
