import Image from "next/image";
import { SignIn } from '@clerk/nextjs'

export default function Home() {
  return (
    <div
      className="flex flex-col flex-1 items-end justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/homepage.jpg" }}
    >
      <div className="sm:absolute sm:right-0 top-0 w-full sm:w-1/2 h-full backdrop-blur-[10px] flex flex-col items-center justify-center">
      <SignIn />
      </div>
    </div>
  );
}
