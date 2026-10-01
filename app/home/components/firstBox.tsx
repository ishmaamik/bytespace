import "../home.css";
import Image from "next/image";

export default function FirstBox() {
  return (
    <section className="relative overflow-hidden bg-[#003AE2]">
      <div className="z-0 relative mx-auto lg:flex lg:h-full w-full max-w-[1440px] hidden lg:h-full">

        <Image
          className="hero-left hero-left-delay-1 pointer-events-none absolute top-[477px] left-[233px] hidden w-[175px] lg:block xl:w-[175px]"
          src="/home/left-white.svg"
          alt=""
          width={175}
          height={175}
        />
        <Image
          className="hero-left hero-left-delay-2 pointer-events-none absolute left-0 top-[221px] hidden w-[180px] lg:block xl:w-[385px]"
          src="/home/left-green.png"
          alt=""
          width={385}
          height={385}
        />
        <Image
          className="hero-right hero-right-delay-3 pointer-events-none absolute right-[146px] top-[464px] hidden w-[150px] lg:block xl:w-[188px]"
          src="/home/right-white.svg"
          alt=""
          width={188}
          height={188}
        />
        <Image
          className="hero-right hero-right-delay-4 pointer-events-none absolute -right-30 top-[221px] hidden w-full lg:block xl:w-[370px]"
          src="/home/right-greeny.png"
          alt=""
          width={370}
          height={370}
        />
        <Image
          className="hero-left hero-left-delay-2 pointer-events-none absolute top-[642px] z-10 left-[18px] hidden w-[250px] lg:block xl:w-[342px]"
          src="/home/bottomleft-white.svg"
          alt=""
          width={342}
          height={342}
        />
        <Image
          className="hero-right hero-right-delay-3 pointer-events-none absolute top-[603px] -right-[17px] hidden w-[260px] lg:block xl:w-[330px]"
          src="/home/bottomright-white.svg"
          alt=""
          width={330}
          height={330}
        />
        <Image
          className="hero-bottom-ellipse pointer-events-none absolute top-[582px] left-1/2 w-[1149px] h-[1149px] -translate-x-1/2"
          src="/home/bottom-green.png"
          alt=""
          width={1149}
          height={442}
        />
      </div>

      <div className="relative z-10 flex justify-center px-6 pt-12 lg:pt-12">
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
            src="/icons/search.svg"
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

      <div className="hero-bottom-man relative z-10 flex justify-center pt-4">
        <Image
          src="/home/man-bg.svg"
          alt=""
          width={722}
          height={515}
          className="h-auto w-[min(722px,92vw)]"
        />
      </div>

    </section>
  );
}
