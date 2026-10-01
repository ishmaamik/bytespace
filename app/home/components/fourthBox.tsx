import Image from "next/image";

export default function FourthBox() {
  return (
    <section className="relative isolate flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-[#003AE2] sm:min-h-[420px]">
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="relative h-full w-full max-w-[1440px]">
          <Image
            src="/shapes.png"
            alt=""
            fill
            className="object-cover object-center lg:flex hidden"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[720px] flex-col items-center px-6 py-20 text-center sm:py-24" data-tutorial="creator-call-to-action">
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h1>

        <p className="mt-6 max-w-[680px] text-xs leading-5 text-white sm:text-sm sm:leading-6">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-7 rounded-full bg-[#c8ff16] px-5 py-2 text-xs font-medium text-[#111827] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#003AE2]"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
