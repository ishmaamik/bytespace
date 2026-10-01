import Image from "next/image";
import Link from "next/link";

type CourseProps = {
    id: string;
    imageSrc: string;
    title: string;
    byWhom: string;
    rating: string;
    ratingLogo: string;
    friendly: string;
    boughtBy: string[];
    price: string;
    lessons?: string;
    duration?: string;
    comments?: string;
};

export default function CourseBox({
    id,
    imageSrc,
    title,
    byWhom,
    rating,
    ratingLogo,
    friendly,
    boughtBy,
    price,
    lessons = "17 Lessons",
    duration = "2 hours 16 mins",
    comments = "59 Comments",
}: CourseProps) {
    return (
        <article className="w-full max-w-[373px] rounded-[22px] border border-[#d7d7d7] bg-white p-[14px] shadow-[0_8px_24px_rgba(25,35,52,0.08)]">
            <div className="relative overflow-hidden rounded-[13px]">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={340}
                    height={196}
                    className="h-auto w-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-xs text-[#4b4b4b]">
                    <span className="rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm">{lessons}</span>
                    <span className="rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm">{duration}</span>
                    <span className="rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm">{comments}</span>
                </div>
            </div>

            <div className="px-0.5 pt-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="truncate text-[20px] font-semibold leading-6 text-[#111111]">{title}</h3>
                        <p className="pt-1 text-xs text-[#777777]">
                            by <span className="text-[#7556e8]">{byWhom}</span>
                        </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 text-sm text-[#555555]">
                        <span>{rating}</span>
                        <Image src={ratingLogo} alt="Rating" width={20} height={20} />
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 rounded-full bg-[#f7f7f8] px-3 py-2 text-xs text-[#555555]">
                        <Image src="/signal.png" alt="" width={18} height={18} />
                        <span>{friendly}</span>
                    </div>

                    <div className="flex items-center">
                        {boughtBy.slice(0, 4).map((avatar, index) => (
                            <Image
                                key={`${avatar}-${index}`}
                                src={avatar}
                                alt=""
                                width={30}
                                height={30}
                                className="-ml-1.5 rounded-full border-2 border-white object-cover first:ml-0"
                            />
                        ))}
                        {boughtBy.length > 4 && (
                            <span className="-ml-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white bg-[#c8ff16] text-[11px] text-[#222222]">
                                {boughtBy.length - 4}+
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex items-end justify-between gap-3 pt-4">
                    <p className="text-[20px] font-semibold text-[#0757df]">{price}<span className="ml-1 text-xs font-normal text-[#777777]">/lifetime</span></p>
                    <Link href={`/course/${id}`} className="rounded-full bg-[#c8ff16] px-3 py-2 text-xs font-medium text-[#111827] transition-transform hover:scale-105">
                        View Course
                    </Link>
                </div>
            </div>
        </article>
    );
}