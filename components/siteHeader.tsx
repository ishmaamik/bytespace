"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteHeaderText } from "./text-files/siteHeader";

const hiddenRoutes = new Set(["/login", "/register", "/signin", "/signup"]);

export default function SiteHeader() {
  const pathname = usePathname();

  if (hiddenRoutes.has(pathname)) {
    return null;
  }

  return (
    <header className="bg-[#003AE2] sticky top-0 z-40">
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-wrap items-center lg:justify-between justify-center gap-6 px-6 py-6 lg:px-12">
        <Link href="/home" aria-label={siteHeaderText.homeLabel}>
          <Image src="/icons/bytelogo.png" alt={siteHeaderText.logoAlt} width={171} height={37} />
        </Link>

        <nav className="flex gap-5 sm:gap-8" aria-label={siteHeaderText.navigationLabel} data-tutorial="site-navigation">
          <Link href="/home" className="text-white">{siteHeaderText.home}</Link>
          <Link href="/course" className="text-white">{siteHeaderText.courses}</Link>
          <Link href="/creators" className="text-white">{siteHeaderText.creators}</Link>
        </nav>

        <div className="flex items-center gap-5 sm:gap-8" data-tutorial="account-links">
          <Link href="/login" className="text-white">{siteHeaderText.signIn}</Link>
          <Link href="/register" className="text-white">{siteHeaderText.signUp}</Link>
          <Image src="/icons/bag.png" alt={siteHeaderText.shoppingBagAlt} width={24} height={24} />
        </div>
      </div>
    </header>
  );
}
