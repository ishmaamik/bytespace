import Image from "next/image";
import Link from "next/link";
import { notFoundText } from "../components/text-files/notFound";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#003AE2] px-6 py-16 text-center sm:min-h-[620px]">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:58px_58px]" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        <Image
          src="/404.svg"
          alt={notFoundText.imageAlt}
          width={896}
          height={357}
          className="h-auto w-full max-w-[896px]"
          priority
        />
        <h1 className="-mt-12 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {notFoundText.heading[0]} <br/>
          {notFoundText.heading[1]}
        </h1>
        <p className="mt-5 max-w-md text-sm text-white/80">
          {notFoundText.description}
        </p>
        <Link href="/home" className="mt-8 rounded-full bg-[#c8ff16] px-6 py-3 text-sm font-medium text-[#111827] transition-transform hover:scale-105">
          {notFoundText.homeLink}
        </Link>
      </div>
    </main>
  );
}
