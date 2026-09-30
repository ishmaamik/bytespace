
import Image from "next/image";

type LogoIpsumProps = {
  imageSrc: string;
  imageLogo: string;
  logoWidth?: number;
  imageAlt: string;
  text?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function LogoIpsum({
  imageSrc,
  imageLogo,
  logoWidth = 86,
  imageAlt,
  text,
  imageWidth = 40,
  imageHeight = 40,
}: LogoIpsumProps) {
  return (
    <div aria-label={text ?? imageAlt} className="flex shrink-0 items-center gap-[8.53px]">
      <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
      <Image src={imageLogo} alt={imageAlt} width={logoWidth} height={imageHeight} />
    </div>
  );
}
