import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          alt="banner"
          src="/images/banner.png"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full aspect-auto object-cover"
        />
      </section>
    </main>
  );
}
