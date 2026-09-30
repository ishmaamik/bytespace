import ImageTextBox from "../common/imageTextBox";

type TestimonialCardProps = {
  avatar: string;
  name: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ avatar, name, role, quote }: TestimonialCardProps) {
  return (
    <article className="flex h-[432px] w-full max-w-[374px] flex-col rounded-[18px] bg-white px-8 py-8 shadow-[0_8px_20px_rgba(25,35,52,0.04)]">
      <div className="flex items-center gap-4">
        <ImageTextBox
          imageSrc={avatar}
          imageAlt={`${name} profile`}
          imageWidth={80}
          imageHeight={80}
          imageClassName="h-[80px] w-[80px] rounded-full object-cover"
          className="shrink-0"
        />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-[#111827]">{name}</p>
          <p className="text-xs text-[#0757df]">{role}</p>
        </div>
      </div>
      <p className="mt-10 text-sm leading-7 text-[#6f7682]">&quot;{quote}&quot;</p>
    </article>
  );
}
