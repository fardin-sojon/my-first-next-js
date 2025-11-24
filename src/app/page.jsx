import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-full font-sans dark:bg-black">
      <main className="flex w-full  max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start container mx-auto">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="my-51 text-3xl font-bold">
          My First Next JS Project
        </div>
      </main>
    </div>
  );
}
