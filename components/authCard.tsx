"use client";

import Image from "next/image";

type AuthCardProps = {
  mode: "login" | "register";
};

export default function AuthCard({ mode }: AuthCardProps) {
  const isRegister = mode === "register";

  return (
    <div className="flex min-h-[784px] w-full max-w-[579px] flex-col rounded-[18px] bg-white px-8 py-12 shadow-[0_20px_50px_rgba(0,0,0,0.14)] sm:px-14 sm:py-16">
      <p className="text-sm text-[#0757df]">{isRegister ? "Create an Account" : "Sign In"}</p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight text-[#222222] sm:text-5xl">
        {isRegister ? "Welcome to ByteSpace" : "Welcome Back"}
      </h1>

      <form className="mt-12 space-y-7" onSubmit={(event) => event.preventDefault()}>
        {isRegister && (
          <div>
            <label className="mb-2 block text-sm text-[#555555]" htmlFor="full-name">Full Name</label>
            <input id="full-name" type="text" placeholder="Jamie Davis" className="h-12 w-full rounded-md border border-[#e1e1e1] px-4 text-sm text-[#222222] outline-none focus:border-[#0757df]" />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm text-[#555555]" htmlFor="auth-email">Email</label>
          <input id="auth-email" type="email" placeholder="designer@example.com" className="h-12 w-full rounded-md border border-[#e1e1e1] px-4 text-sm text-[#222222] outline-none focus:border-[#0757df]" />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[#555555]" htmlFor="auth-password">Password</label>
          <input id="auth-password" type="password" placeholder="••••••••" className="h-12 w-full rounded-md border border-[#e1e1e1] px-4 text-sm text-[#222222] outline-none focus:border-[#0757df]" />
        </div>

        <button type="submit" className="ml-auto block rounded-full bg-[#c8ff16] px-7 py-3 text-sm font-medium text-[#111827] transition-transform hover:scale-105">
          {isRegister ? "Continue" : "Sign In"}
        </button>
      </form>

      {!isRegister && (
        <div className="mt-auto flex items-center justify-center gap-4 border-t border-[#eeeeee] pt-8">
          <button type="button" aria-label="Continue with Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e1e1] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
            <Image src="/facebook.png" alt="" width={24} height={24} />
          </button>
          <button type="button" aria-label="Continue with Google" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e1e1] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
            <Image src="/google.png" alt="" width={24} height={24} />
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-[#777777]">
        {isRegister ? "Already have an account? " : "New user? "}
        <a href={isRegister ? "/login" : "/register"} className="text-[#0757df] hover:underline">
          {isRegister ? "Login" : "Create an account"}
        </a>
      </p>
    </div>
  );
}
