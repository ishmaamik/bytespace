import Image from "next/image";
import Link from "next/link";
import type { Creator } from "../common/creatorDetails";
import { creatorCardText } from "./text-files/creatorCard";

export default function CreatorCard({
  creator,
  tutorialTarget,
}: {
  creator: Creator;
  tutorialTarget?: string;
}) {
  return (
    <article data-tutorial={tutorialTarget} className="flex min-h-[250px] w-full max-w-[280px] flex-col items-center justify-between rounded-2xl border border-[#d7dce2] bg-white p-6 text-center shadow-[0_8px_20px_rgba(25,35,52,0.05)]">
      <div>
        <Image src={creator.avatar} alt={creator.name} width={88} height={88} className="mx-auto h-[88px] w-[88px] rounded-full object-cover" />
        <h2 className="mt-4 text-lg font-semibold text-[#111827]">{creator.name}</h2>
        <p className="mt-1 text-xs leading-5 text-[#6f7682]">{creator.role}</p>
      </div>
      <Link href={`/creators/${creator.id}`} className="mt-5 rounded-full bg-[#c8ff16] px-5 py-2 text-xs font-medium text-[#111827] transition-transform hover:scale-105">
        {creatorCardText.profileLink}
      </Link>
    </article>
  );
}
