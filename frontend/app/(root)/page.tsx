import Image from "next/image";
import { SignIn } from '@clerk/nextjs'
import HeroText from "./shared/HeroText";

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/homepage.jpg" }}
    >
      <HeroText />
    </div>
  );
}
