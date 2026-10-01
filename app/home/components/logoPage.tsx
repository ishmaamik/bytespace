import ImageTextBox from "../../../common/imageTextBox";
import { partnerLogos } from "../text-files/logoPage";

export default function LogoPage() {
  return (
    <section className="flex w-full justify-center overflow-x-auto bg-[#F5F5F6] px-6 py-10">
      <div className="mx-auto flex min-w-max items-center justify-center gap-[72px]">
        {partnerLogos.map((logo) => (
          <ImageTextBox key={logo.imageSrc} {...logo} />
        ))}
      </div>
    </section>
  );
}
