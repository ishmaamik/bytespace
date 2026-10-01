"use client";
import "../app/home/home.css"
import Image from "next/image";
import { authCardText } from "./text-files/authCard";

type AuthCardProps = {
  mode: "login" | "register";
};

export default function AuthCard({ mode }: AuthCardProps) {
  const isRegister = mode === "register";

  return (
    <div className="auth-right lg:mb-0 mb-10 flex min-h-[800px] lg:min-h-[784px] w-full max-w-[579px] flex-col rounded-[18px] bg-white px-8 py-12 shadow-[0_20px_50px_rgba(0,0,0,0.14)] sm:px-14 sm:py-16">
      <p className="text-sm text-[#0757df]">{isRegister ? authCardText.registerEyebrow : authCardText.loginEyebrow}</p>
      <h1 className="mt-2 text-4xl font-semibold leading-tight text-[#222222] sm:text-5xl">
        {isRegister ? authCardText.registerHeading : authCardText.loginHeading}
      </h1>

      <form className="mt-12 space-y-7" onSubmit={(event) => event.preventDefault()} data-tutorial="auth-details">
        {isRegister && (
          <div>
            <label className="mb-2 block text-sm text-[#555555]" htmlFor="full-name">{authCardText.fullNameLabel}</label>
            <input id="full-name" type="text" placeholder={authCardText.fullNamePlaceholder} className="h-12 w-full rounded-md border border-[#e1e1e1] px-4 text-sm text-[#222222] outline-none focus:border-[#0757df]" />
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm text-[#555555]" htmlFor="auth-email">{authCardText.emailLabel}</label>
          <input id="auth-email" type="email" placeholder={authCardText.emailPlaceholder} className="h-12 w-full rounded-md border border-[#e1e1e1] px-4 text-sm text-[#222222] outline-none focus:border-[#0757df]" />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[#555555]" htmlFor="auth-password">{authCardText.passwordLabel}</label>
          <input id="auth-password" type="password" placeholder={authCardText.passwordPlaceholder} className="h-12 w-full rounded-md border border-[#e1e1e1] px-4 text-sm text-[#222222] outline-none focus:border-[#0757df]" />
        </div>

        <button type="submit" className="ml-auto block rounded-full bg-[#c8ff16] px-7 py-3 text-sm font-medium text-[#111827] transition-transform hover:scale-105">
          {isRegister ? authCardText.continueButton : authCardText.signInButton}
        </button>
      </form>

      {!isRegister && (
        <div className="mt-auto flex items-center justify-center gap-4 border-t border-[#eeeeee] pt-8">
          <button type="button" aria-label={authCardText.facebookSignIn} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e1e1] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
            <Image src="/icons/facebook.png" alt="" width={24} height={24} />
          </button>
          <button type="button" aria-label={authCardText.googleSignIn} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e1e1e1] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
            <Image src="/icons/google.png" alt="" width={24} height={24} />
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-sm text-[#777777]">
        {isRegister ? authCardText.existingAccount : authCardText.newAccount}
        <a href={isRegister ? "/login" : "/register"} className="text-[#0757df] hover:underline" data-tutorial="auth-switch">
          {isRegister ? authCardText.loginLink : authCardText.createAccountLink}
        </a>
      </p>
    </div>
  );
}
