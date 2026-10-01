"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const hiddenRoutes = new Set(["/login", "/register", "/signin", "/signup"]);

export default function SiteHeader() {
  const pathname = usePathname();

  if (hiddenRoutes.has(pathname)) {
    return null;
  }

  return (
    <header className="bg-[#003AE2] sticky top-0 z-40">
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-wrap items-center lg:justify-between justify-center gap-6 px-6 py-6 lg:px-12">
        <Link href="/home" aria-label="ByteSpace home">
          <Image src="/icons/bytelogo.png" alt="ByteSpace" width={171} height={37} />
        </Link>

        <nav className="flex gap-5 sm:gap-8" aria-label="Main navigation" data-tutorial="site-navigation">
          <Link href="/home" className="text-white">Home</Link>
          <Link href="/course" className="text-white">Courses</Link>
          <Link href="/creators" className="text-white">Creators</Link>
        </nav>

        <div className="flex items-center gap-5 sm:gap-8" data-tutorial="account-links">
          <Link href="/login" className="text-white">Sign In</Link>
          <Link href="/register" className="text-white">Sign Up</Link>
          <Image src="/icons/bag.png" alt="Shopping bag" width={24} height={24} />
        </div>
      </div>
    </header>
  );
}
