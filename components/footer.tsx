"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { footerText } from "./text-files/footer";

const hiddenRoutes = new Set(["/login", "/register", "/signin", "/signup"]);

export default function Footer() {
  const pathname = usePathname();

  if (hiddenRoutes.has(pathname)) {
    return null;
  }

  return (
    <footer className="border-t border-[#e5e7eb] bg-white text-[#222222]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1.25fr_1fr] lg:px-16 lg:py-16">
        <div className="max-w-[390px]">
          <Image src="/icons/byteblack.png" alt={footerText.logoAlt} width={171} height={37} className="h-auto w-[140px]" />
          <p className="mt-5 text-xs leading-5 text-[#4b4b4b]">
            {footerText.newsletterDescription}
          </p>

          <form className="mt-6 flex max-w-[350px] gap-3" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="footer-email">{footerText.emailLabel}</label>
            <input
              id="footer-email"
              type="email"
              placeholder={footerText.emailPlaceholder}
              className="h-11 min-w-0 flex-1 rounded-full border border-[#d7d7d7] px-4 text-xs text-[#222222] outline-none placeholder:text-[#777777] focus:border-[#0757df]"
            />
            <button type="submit" className="h-11 rounded-full bg-[#c8ff16] px-5 text-xs font-medium text-[#111827] transition-transform hover:scale-105">
              {footerText.subscribeButton}
            </button>
          </form>

          <p className="mt-5 max-w-[350px] text-[10px] leading-4 text-[#777777]">
            {footerText.consentNotice}
          </p>
        </div>

        <nav className="relative top-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3" aria-label={footerText.navigationLabel}>
          {footerText.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-5">
              {column.map((link) => (
                <a key={link} href="#" className="block text-xs text-[#4b4b4b] transition-colors hover:text-[#0757df]">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-[#e5e7eb]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-5 text-[10px] text-[#4b4b4b] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>{footerText.copyright}</p>
          <div className="flex flex-wrap gap-5">
            {footerText.legalLinks.map((link) => <a key={link} href="#" className="hover:text-[#0757df]">{link}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
