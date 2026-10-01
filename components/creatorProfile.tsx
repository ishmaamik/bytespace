import Image from "next/image";
import CoursePage from "./coursePage";
import { courseDetails } from "../common/courseDetails";
import { categories } from "../common/courseCategories";
import type { Creator } from "../common/creatorDetails";

export default function CreatorProfile({ creator }: { creator: Creator }) {
  return (
    <main>
      <section className="bg-[#003AE2] px-6 py-8 text-white sm:px-10 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <Image src={creator.avatar} alt={creator.name} width={88} height={88} className="h-[88px] w-[88px] rounded-full border-4 border-white/30 object-cover" />
              <div>
                <h1 className="text-3xl font-semibold sm:text-4xl">{creator.name}</h1>
                <p className="mt-1 text-sm text-white/80">{creator.role}</p>
              </div>
            </div>
            <button type="button" className="w-fit rounded-full bg-[#c8ff16] px-6 py-3 text-sm font-medium text-[#111827] transition-transform hover:scale-105">Follow</button>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-white/85">{creator.bio}</p>
          <div className="mt-7 flex flex-wrap gap-3 text-xs text-[#111827]">
            <span className="rounded-full bg-white px-4 py-2">{creator.products}</span>
            <span className="rounded-full bg-white px-4 py-2">{creator.followers}</span>
          </div>
        </div>
      </section>

      <CoursePage courses={courseDetails} showCategoryFilters categoryOptions={categories} showPagination coursesPerPage={6} />
    </main>
  );
}
