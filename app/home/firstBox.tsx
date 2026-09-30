import "./home.css";
import Image from "next/image"

export default function FirstBox() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#003AE2]">

      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6 lg:px-12">
        <Image src="/bytelogo.png" alt="logo" width={171} height={37} />

        <div className="flex gap-5 sm:gap-8">
          <p className="text-white">Home</p>
          <p className="text-white">Courses</p>
          <p className="text-white">Creators</p>
        </div>

        <div className="flex items-center gap-5 sm:gap-8">
          <p className="text-white">Sign In</p>
          <p className="text-white">Sign Up</p>
          <Image src="/bag.png" alt="logo" width={24} height={24} />
        </div>

      </div>

      <div className="relative z-10 flex justify-center px-6 pt-12 sm:pt-16">
        <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Get Access to Hundreds<br />
          Courses Available
        </h1>
      </div>

      <p className="relative z-10 mx-auto max-w-2xl px-6 pt-8 text-center text-sm text-white sm:text-base">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

      <div className="relative z-10 flex justify-center px-6 pt-12 sm:pt-16">
        <div className="relative w-full max-w-[461px]">
          <Image
            className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2"
            src="/search.svg"
            alt=""
            width={24}
            height={24}
          />
          <input
            type="text"
            placeholder="Course, topic, creators"
            className="h-[52px] w-full rounded-[50px] bg-white pl-12 pr-4 text-black"
          />
        </div>
      </div>

      <div className="relative z-0 lg:-mt-100 mt-8">
        <Image
          className="h-auto w-full"
          src="/art.png"
          alt=""
          width={1719}
          height={1510}
        />
      </div>
    </section>
  );
}
