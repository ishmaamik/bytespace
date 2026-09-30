
import Image from "next/image";

export type ImageTextBoxProps = {
  imageSrc: string;
  imageAlt: string;
  text?: string;
  imageLogo?: string;
  logoWidth?: number;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
  textClassName?: string;
  className?: string;
};

export default function ImageTextBox({
  imageSrc,
  imageAlt,
  text,
  imageLogo,
  logoWidth = 86,
  imageWidth = 40,
  imageHeight = 40,
  imageClassName = "",
  textClassName = "",
  className = "",
}: ImageTextBoxProps) {
  return (
    <div aria-label={text ?? imageAlt} className={`flex shrink-0 items-center gap-[8.53px] ${className}`}>
      <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} className={imageClassName} />
      {imageLogo ? (
        <Image src={imageLogo} alt="" width={logoWidth} height={imageHeight} />
      ) : text ? (
        <span className={`whitespace-nowrap ${textClassName}`}>{text}</span>
      ) : null}
    </div>
  );
}
