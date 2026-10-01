"use client";

import Image from "next/image";
import { useState } from "react";
import CreatorCard from "./creatorCard";
import type { Creator } from "../common/creatorDetails";
import { creatorsPageText } from "./text-files/creatorsPage";

export default function CreatorsPage({ creators }: { creators: Creator[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleCreators = creators.filter((creator) =>
    [creator.name, creator.role, creator.bio].some((value) => value.toLowerCase().includes(normalizedSearch)),
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#003AE2] px-6 py-12 sm:py-16">
        <div className="mx-auto flex max-w-[720px] flex-col items-center">
          <h1 className="text-center text-3xl font-semibold text-white sm:text-5xl">{creatorsPageText.heading}</h1>
          <div className="relative mt-8 w-full max-w-[460px]">
            <Image src="/icons/search.svg" alt="" width={20} height={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              aria-label={creatorsPageText.searchLabel}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={creatorsPageText.searchPlaceholder}
              className="h-12 w-full rounded-full bg-white pl-12 pr-4 text-sm text-[#222222] outline-none"
              data-tutorial="creator-search"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCreators.map((creator, index) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
                tutorialTarget={index === 0 ? "creator-result" : undefined}
              />
            ))}
          </div>
          {visibleCreators.length === 0 && <p className="py-16 text-center text-sm text-[#6f7682]">{creatorsPageText.emptyState}</p>}
        </div>
      </section>
    </main>
  );
}
