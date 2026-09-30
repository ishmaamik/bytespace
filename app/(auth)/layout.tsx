"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const isRegister = usePathname() === "/register";

  return (
    <main className="min-h-screen bg-[#003AE2] px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1180px] items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
        <div className="flex flex-col justify-center">
          <div className="mx-auto mb-16 max-w-[552px] text-white -mt-16">
            <h2 className="text-lg font-semibold sm:text-xl ">
              {isRegister ? "Sign up and come in" : "Sign in with ease"}
            </h2>
            <p className="mt-2 max-w-[500px] text-xs leading-5 text-white/90 sm:text-sm">
              {isRegister
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>
          </div>
          <Image src="/LoginDesign.svg" alt="ByteSpace learning platform" width={552} height={585} className="h-auto w-full max-w-[552px]" priority />
        </div>
        <div className="flex justify-center">{children}</div>
      </div>
    </main>
  );
}
