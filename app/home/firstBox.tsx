import "./home.css";
import Image from "next/image"

export default function FirstBox() {
  return (
    <div className="bg-[#003AE2] h-[1024px] w-[1440px]">

      <div className="flex items-center gap-[322px] pl-[122px] pt-[35px] h-[120px]">
        <Image src="/bytelogo.png" alt="logo" width={171} height={37} />

        <div className="flex gap-8">
          <p className="text-white">Home</p>
          <p className="text-white">Courses</p>
          <p className="text-white">Creators</p>
        </div>

        <div className="flex gap-8">
          <p className="text-white">Sign In</p>
          <p className="text-white">Sign Up</p>
          <Image src="/bag.png" alt="logo" width={24} height={24} />
        </div>

      </div>

      <div className="flex justify-center pt-[49px]">
        <b className="text-center leading-relaxed text-[45px] text-white">
          Get Access to Hundreds<br />
          Courses Available
        </b>
      </div>

      <p className="flex justify-center pt-[32px] text-white"> Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>

      <div className="relative z-10 flex justify-center pt-[60px]">
        <div className="relative w-[461px]">
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

      <Image className="relative -top-[250px]" src="/art.png" alt="logo" width={1719} height={1510}/>
    </div>
  );
}
