import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Alisha</h1>
      <p className="mt-4 text-lg">
        A clothing store for all your needs
      </p>
      <Image
        src="/images/store.jpg"
        alt="Store Image"
        width={500}
        height={300}
        className="mt-8 rounded-lg"
      />
    </main>
  );
}
