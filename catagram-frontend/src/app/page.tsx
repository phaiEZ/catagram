import Image from "next/image";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-row w-full gap-4 justify-center">
      <div className="flex flex-col p-16 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
