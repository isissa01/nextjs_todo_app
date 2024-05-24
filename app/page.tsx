import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Hello Next!!</h1>
      <Image src = "/logo.svg" alt = "Next.js Logo" width = {120} height = {120} />
    </div>
  );
}