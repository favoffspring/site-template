import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-md">
        <Image
          src="/logo.svg"
          alt="ScreenSpace logo"
          width={72}
          height={72}
          priority
        />
      </div>
      <h1 className="text-4xl font-semibold">Website Starter Kit</h1>
    </main>
  );
}
