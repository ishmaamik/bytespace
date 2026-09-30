import Image from "next/image";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function ThirdBox() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fbff]">
      <Image src="/colors.png" alt="" width={1440} height={1460} className="pointer-events-none absolute inset-0 -z-10 h-[1460px] w-full object-cover" priority />

      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(577px,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-[577px]">
            <h2 className="max-w-[577px] text-4xl font-semibold leading-[1.08] text-[#111827] sm:text-5xl">
              <span className="block lg:whitespace-nowrap">Your Path to Professional</span>
              <span className="block">Growth Starts Here!</span>
            </h2>
            <p className="mt-7 max-w-[520px] text-sm leading-6 text-[#6f7682] sm:text-base">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="mt-9 flex gap-8 sm:gap-12">
              <div><p className="text-2xl font-semibold text-[#0757df] sm:text-3xl">12K</p><p className="mt-1 text-xs text-[#6f7682] sm:text-sm">Students</p></div>
              <div><p className="text-2xl font-semibold text-[#0757df] sm:text-3xl">70+</p><p className="mt-1 text-xs text-[#6f7682] sm:text-sm">Courses</p></div>
              <div><p className="text-2xl font-semibold text-[#0757df] sm:text-3xl">16</p><p className="mt-1 text-xs text-[#6f7682] sm:text-sm">Creators</p></div>
            </div>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[510px]">
            <Image src="/Professional1.png" alt="Professional learning" width={577} height={540} className="absolute top-3 right-0 z-10 h-auto " />
            <Image src="/Professional2.png" alt="Learning progress" width={232} height={138} className="absolute right-10 top-[155px] z-20 " />
            <Image src="/Professional3.png" alt="Decorative accent" width={217} height={216} className="absolute left-130 top-5 z-30 " />
            <Image src="/Professional4.png" alt="Course Box" width={343} height={144} className="absolute left-[120px]  z-5 " />

          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:mt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative min-h-[420px] sm:min-h-[560px]">
            <Image src="/customercare1.png" alt="Customer support professional" width={579} height={719} className="absolute bottom-0 left-1/2 z-10 h-auto w-[min(75vw,540px)] -translate-x-1/2" />
            <Image src="/customercare2.png" alt="Revenue dashboard" width={232} height={119} className="absolute left-10 -top-15 z-5 w-[min(34vw,232px)]" />
            <Image src="/customercare3.png" alt="Happy students" width={134} height={135} className="absolute top-[100px] left-10 z-7 w-[min(24vw,134px)]" />
            <Image src="/customercare4.png" alt="Growth accent" width={217} height={216} className="absolute top-0 right-[100px] z-12 w-[min(25vw,217px)]" />
          </div>

          <div className="max-w-[520px] lg:pb-16">
            <h2 className="text-4xl font-semibold leading-[1.08] text-[#111827] sm:text-5xl">Create &amp; Manage Courses Easily.</h2>
            <p className="mt-7 text-sm leading-6 text-[#6f7682] sm:text-base">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 text-sm text-[#222222] sm:text-base">
                  <Image src="/bluetick.png" alt="" width={24} height={24} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
