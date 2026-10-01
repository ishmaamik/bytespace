"use client";

import Image from "next/image";
import { useState } from "react";
import { courseViewText } from "../app/course/[id]/text-files/courseView";

type CourseViewProps = {
    course: {
        title: string;
        byWhom: string;
        rating: string;
        tagline?: string;
        friendly: string;
        price: string;
        lessons?: string;
        duration?: string;
        comments?: string;
        description?: string[];
        keyPoints?: string[];
        lessonOverview?: string;
        lessonContent?: string;
        lessonProgress?: number;
        lessonModules?: { title: string; description: string; duration: string }[];
    };
};

type Tab = "about" | "lessons" | "reviews";

export default function CourseView({ course }: CourseViewProps) {
    const [activeTab, setActiveTab] = useState<Tab>("about");
    const [reviewFilter, setReviewFilter] = useState<number | null>(null);

    return (
        <main className="bg-white">
            <section className="relative z-20 overflow-visible px-6 pb-10 pt-8 text-white sm:px-10 lg:px-16">
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[760px] bg-[#003AE2] sm:h-[620px] lg:h-[770px]" />
                <div className="relative z-10 mx-auto max-w-[1180px]">

                    <h1 data-tutorial="course-title" className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">{course.title}</h1>
                    {course.tagline && (
                        <h2 className="mt-1 max-w-3xl text-xl font-semibold leading-tight sm:text-xl">
                            {course.tagline}
                        </h2>
                    )}
                    <p className="mt-5 text-sm text-white/80">{courseViewText.creatorPrefix} <span className="text-yellow-200">{course.byWhom}</span></p>

                    <div className="relative mt-4 grid items-start gap-8 lg:grid-cols-[1.35fr_0.65fr]">
                        <div className="relative overflow-hidden rounded-2xl bg-white/10 ">
                            <Image src="/course/coursegirl.svg" alt={courseViewText.previewAlt} width={700} height={379} className=" w-full" priority />
                            <button type="button" aria-label={courseViewText.playPreviewLabel} className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#003AE2] ">
                                ▶
                            </button>
                        </div>

                        <aside className="rounded-2xl bg-white p-6 text-[#222222] shadow-[0_10px_10px_rgba(0,0,0,0.10)] lg:absolute lg:right-0 lg:top-0 lg:z-30 lg:w-[374px]">
                            <h2 className="text-sm font-semibold">{course.lessons ?? courseViewText.fallbackLessonCount} ({course.duration ?? courseViewText.fallbackDuration})</h2>
                            <div className="mt-5 space-y-4 text-xs">
                                {(course.lessonModules ?? courseViewText.fallbackLessons).slice(0, 3).map((lesson, index) => (
                                    <div key={lesson.title} className="flex items-start gap-3">
                                        <span className="text-[#333333]">0{index + 1}</span>
                                        <span className="flex-1 text-[#333333]">{lesson.title}</span>
                                        <span className="text-[#0757df]">{lesson.duration}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-xs text-[#777777]">{courseViewText.moreVideos}</p>
                            <p className="mt-6 text-xs leading-5 text-[#777777]">{courseViewText.enrollmentPrompt}</p>
                            <p data-tutorial="course-pricing" className="mt-5 text-3xl font-semibold text-[#0757df]">{course.price}<span className="text-sm font-normal text-[#777777]">{courseViewText.lifetime}</span></p>
                            <button type="button" className="mt-5 w-full rounded-full bg-[#c8ff16] px-5 py-3 text-sm font-medium text-[#111827]">{courseViewText.enrollButton}</button>

                            <h3 className="mt-6 text-sm font-semibold">{courseViewText.includesHeading}</h3>
                            <ul className="mt-4 space-y-3 text-xs text-[#777777]">
                                {courseViewText.includedFeatures.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Image src="/icons/bluetick.png" alt="" width={16} height={16} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 flex items-center gap-3 border-t border-[#eeeeee] pt-5">
                                <Image src="/reviewers/reviewer1.svg" alt={courseViewText.creatorAlt} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                                <div>
                                    <p className="text-sm font-semibold">{course.byWhom}</p>
                                    <p className="text-xs text-[#777777]">{courseViewText.creatorRole}</p>
                                </div>
                            </div>
                            <p className="mt-5 text-xs leading-5 text-[#777777]">{courseViewText.enrollmentPrompt}</p>
                            <button type="button" className="mt-4 rounded-full border border-[#d7d7d7] px-4 py-2 text-xs text-[#555555]">{courseViewText.viewProfileButton}</button>
                        </aside>
                    </div>
                </div>
            </section>

            <div className="relative z-10 mx-auto max-w-[1180px] px-0 py-10 sm:px-10 lg:px-0">
                <nav className="flex flex-wrap gap-3" aria-label={courseViewText.detailsNavigationLabel} data-tutorial="course-tabs">
                    {courseViewText.tabs.map((tab: Tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`rounded-full px-5 py-2 text-sm capitalize ${activeTab === tab ? "bg-[#c8ff16] text-[#222222]" : "bg-[#f5f5f6] text-[#555555]"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>

                <div className="pt-10">
                    {activeTab === "about" && (
                        <div className="space-y-10 max-w-3xl">
                            <div>
                                <h2 className="text-2xl font-semibold text-[#111827]">{courseViewText.descriptionHeading}</h2>
                                <div className="mt-4 max-w-3xl space-y-5 text-sm leading-7 text-[#6f7682]">
                                    {(course.description ?? [courseViewText.descriptionFallback]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-[#111827]">{courseViewText.sneakPeekHeading}</h2>
                                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                                    {[1, 2, 3, 4].map((peek) => <Image key={peek} src={`/sneak-peek/sneakpeak${peek}.svg`} alt={`${courseViewText.sneakPeekAlt} ${peek}`} width={280} height={160} className="h-auto w-full rounded-xl border border-[#e5e7eb]" />)}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-[#111827]">{courseViewText.keyPointsHeading}</h2>
                                <ul className="mt-5 grid max-w-3xl gap-4 text-sm text-[#6f7682]">
                                    {(course.keyPoints ?? []).map((point) => (
                                        <li key={point} className="flex items-center gap-3">
                                            <Image src="/icons/bluetick.png" alt="" width={20} height={20} />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "lessons" && (
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-semibold text-[#111827]">{courseViewText.modulesHeading}</h2>
                            <p className="mt-4 text-sm leading-7 text-[#6f7682]">{course.lessonOverview ?? courseViewText.modulesFallback}</p>
                            <h3 className="mt-8 text-lg font-semibold text-[#111827]">{courseViewText.lessonListHeading}</h3>
                            <div className="mt-5 divide-y divide-[#e5e7eb] rounded-xl border border-[#e5e7eb]">
                                {(course.lessonModules ?? courseViewText.fallbackLessons).map((lesson, index) => (
                                    <div key={lesson.title} className="flex items-start gap-4 px-5 py-4">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c8ff16] text-sm font-semibold">{index + 1}</span>
                                        <div><p className="text-sm font-medium text-[#333333]">{courseViewText.moduleLabel} {index + 1}: {lesson.title}</p><p className="mt-1 text-xs leading-5 text-[#6f7682]">{lesson.description}</p></div>
                                        <span className="ml-auto shrink-0 text-xs text-[#0757df]">{lesson.duration}</span>
                                    </div>
                                ))}
                            </div>
                            <h3 className="mt-8 text-lg font-semibold text-[#111827]">{courseViewText.lessonContentHeading}</h3>
                            <p className="mt-4 text-sm leading-7 text-[#6f7682]">{course.lessonContent ?? courseViewText.lessonContentFallback}</p>
                            <div className="mt-8">
                                <div className="flex justify-between text-sm"><span>{courseViewText.progressLabel}</span><span>{course.lessonProgress ?? 55}%</span></div>
                                <div className="mt-2 h-2 rounded-full bg-[#eeeeee]"><div className="h-2 rounded-full bg-[#c8ff16]" style={{ width: `${course.lessonProgress ?? 55}%` }} /></div>
                            </div>
                        </div>
                    )}

                    {activeTab === "reviews" && (
                        <div className="max-w-3xl">
                            <h2 className="text-2xl max-w-lg font-semibold text-[#111827]">{courseViewText.reviewsHeading}</h2>
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6f7682]">{courseViewText.reviewsDescription}</p>

                            <div className="mt-6 grid items-center gap-10 rounded-2xl border border-[#d7dce2] p-10 lg:grid-cols-[186px_minmax(0,1fr)] lg:gap-16">
                                <div className="flex h-[116px] w-[186px] flex-col items-center justify-center rounded-lg bg-[#c8ff16] text-[#222222]">
                                    <span className="text-xs">{courseViewText.ratingSummaryLabel}</span>
                                    <strong className="text-4xl">{courseViewText.ratingAverage}</strong>
                                </div>
                                <div className="space-y-3">
                                    {courseViewText.ratingDistribution.map(({ rating, count, width }) => (
                                        <div key={rating} className="flex items-center gap-4">
                                            <div className="h-2 flex-1 rounded-full bg-[#e5e7eb]"><div className={`h-2 rounded-full bg-[#c8ff16] ${width}`} /></div>
                                            <Image src={`/rating/${rating}-star.svg`} alt={`${rating} ${courseViewText.reviewRatingAlt}`} width={104} height={20} className="h-5 w-[104px]" />
                                            <span className="w-8 text-right text-sm text-[#6f7682]">{count}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3 className="mt-8 text-xl font-semibold text-[#111827]">{courseViewText.reviewsListHeading}</h3>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <button type="button" onClick={() => setReviewFilter(null)} className={`rounded-full px-4 py-2 text-sm ${reviewFilter === null ? "bg-[#c8ff16] text-[#222222]" : "bg-[#f5f5f6] text-[#555555]"}`}>{courseViewText.allRatingsFilter}</button>
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <button key={rating} type="button" onClick={() => setReviewFilter(rating)} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm ${reviewFilter === rating ? "bg-[#c8ff16] text-[#222222]" : "bg-[#f5f5f6] text-[#555555]"}`}>
                                        <Image src={`/rating/1-star.svg`} alt="" width={20} height={20} className="h-4 w-4 object-contain" /> {rating}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 space-y-5">
                                {courseViewText.reviews.filter((review) => reviewFilter === null || review.rating === reviewFilter).map((review) => (
                                    <article key={review.name} className="rounded-2xl border border-[#d7dce2] p-8">
                                        <div className="flex items-start gap-3">
                                            <Image src={`/reviewers/reviewer${review.reviewer}.svg`} alt={review.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                                            <div><p className="text-sm font-semibold text-[#222222]">{review.name}</p><p className="text-sm text-[#6f7682]">{review.role}</p></div>
                                            <span className="ml-auto text-sm text-[#6f7682]">{review.date}</span>
                                        </div>
                                        <Image src={`/rating/${review.rating}-star.svg`} alt={`${review.rating} ${courseViewText.reviewStarAlt}`} width={104} height={20} className="mt-7 h-5 w-[104px]" />
                                        <p className="mt-6 text-sm leading-6 text-[#6f7682]">&quot;{review.text}&quot;</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
