"use client";

import "../home/home.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authLayoutText } from "../../components/text-files/authLayout";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isRegister = usePathname() === "/register";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#003AE2] px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto grid max-w-[1180px] gap-10 md:min-h-[calc(100vh-6rem)] md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
        
        {/* Left Side */}
        <div className="auth-left hidden lg:flex lg:flex-col lg:justify-center">
          <div className="mx-auto mb-16 -mt-16 max-w-[552px] text-white">
            <h2 className="text-lg font-semibold sm:text-xl">
              {isRegister ? authLayoutText.registerHeading : authLayoutText.loginHeading}
            </h2>

            <p className="mt-2 max-w-[500px] text-xs leading-5 text-white/90 sm:text-sm">
              {isRegister ? authLayoutText.registerDescription : authLayoutText.loginDescription}
            </p>
          </div>

          <Image
            src="/LoginDesign.svg"
            alt={authLayoutText.imageAlt}
            width={552}
            height={585}
            className="h-auto w-full max-w-[552px]"
            priority
          />
        </div>

        {/* Auth Card */}
        <div className="flex w-full justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}