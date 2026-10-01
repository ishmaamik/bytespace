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
      <Image src="/colors.png" alt="" width={1440} height={1460} className="lg:flex hidden pointer-events-none absolute inset-0 -z-10 h-[1460px] w-full object-cover " priority />

      <div className="mx-auto max-w-[1440px] lg:px-16 lg:py-8 py-12">
        <div className="grid lg:text-left text-center items-center lg:justify-left justify-center gap-12 lg:grid-cols-[minmax(577px,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-[577px] " data-tutorial="growth-overview">
            <h2 className="max-w-[577px] text-4xl font-semibold leading-[1.08] text-[#111827] sm:text-5xl">
              <span className="block lg:whitespace-nowrap">Your Path to Professional</span>
              <span className="block">Growth Starts Here!</span>
            </h2>
            <p className="mt-7 max-w-[520px] text-sm leading-6 text-[#6f7682] sm:text-base">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="mt-9 flex lg:text-left text-center lg:justify-left justify-center gap-8 sm:gap-12">
              <div><p className="text-2xl font-semibold text-[#0757df] sm:text-3xl">12K</p><p className="mt-1 text-xs text-[#6f7682] sm:text-sm">Students</p></div>
              <div><p className="text-2xl font-semibold text-[#0757df] sm:text-3xl">70+</p><p className="mt-1 text-xs text-[#6f7682] sm:text-sm">Courses</p></div>
              <div><p className="text-2xl font-semibold text-[#0757df] sm:text-3xl">16</p><p className="mt-1 text-xs text-[#6f7682] sm:text-sm">Creators</p></div>
            </div>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[510px] ">
            <Image src="/thirdBox/Professional1.png" alt="Professional learning" width={577} height={540} className="absolute top-3 right-0 z-10 h-auto " />
            <Image src="/thirdBox/Professional2.png" alt="Learning progress" width={232} height={138} className="absolute right-10 top-[155px] z-20 " />
            <Image src="/thirdBox/Professional3.png" alt="Decorative accent" width={217} height={216} className="lg:flex hidden absolute left-130 top-5 z-30 " />
            <Image src="/thirdBox/Professional4.png" alt="Course Box" width={343} height={144} className="absolute lg:left-[120px] left-[10px]  z-5 " />

          </div>
        </div>

        <div className="mt-16 grid sm:justify-center   gap-12 lg:mt-8 lg:left-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative min-h-[420px]  sm:min-h-[560px] sm:text-center sm:justify-center sm:items-center">
            <Image src="/thirdBox/customercare1.png" alt="Customer support professional" width={579} height={719} className="absolute bottom-0   left-1/2 z-10 h-auto w-[min(75vw,540px)] -translate-x-1/2" />
            <Image src="/thirdBox/customercare2.png" alt="Revenue dashboard" width={232} height={119} className="absolute lg:left-0 left-1 -top-15 z-5 w-[min(34vw,232px)]" />
            <Image src="/thirdBox/customercare3.png" alt="Happy students" width={134} height={135} className="absolute top-[100px]  lg:left-0 left-90 z-7 w-[min(24vw,134px)]" />
            <Image src="/thirdBox/customercare4.png" alt="Growth accent" width={217} height={216} className="lg:flex hidden absolute top-0 right-[100px] z-12 w-[min(25vw,217px)]" />
          </div>

          <div className="max-w-[520px] lg:pb-16 sm: lg:text-left text-center" data-tutorial="creator-tools">
            <h2 className="text-4xl font-semibold leading-[1.08] text-[#111827] sm:text-5xl">Create &amp; Manage Courses Easily.</h2>
            <p className="mt-7 text-sm leading-6 text-[#6f7682]">ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex justify-center gap-3 text-sm text-[#222222] sm:text-base lg:justify-start"
                >
                  <Image src="/icons/bluetick.png" alt="" width={24} height={24} />
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
