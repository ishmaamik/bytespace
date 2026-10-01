"use client";

import { useState } from "react";
import Image from "next/image";
import CourseBox from "../common/courseBox";
import type { ComponentProps } from "react";

type Course = ComponentProps<typeof CourseBox> & {
	category?: string;
	level?: string;
};

type CoursePageProps = {
	courses: Course[];
	showFilters?: boolean;
	showCategoryFilters?: boolean;
	categoryOptions?: string[];
	showSearch?: boolean;
	searchTitle?: string;
	showPagination?: boolean;
	coursesPerPage?: number;
};

const allLevels = ["All levels", "Beginner", "Intermediate", "Advanced"];

export default function CoursePage({
	courses,
	showFilters = false,
	showCategoryFilters = false,
	categoryOptions,
	showSearch = false,
	searchTitle = "Find Your Next Course",
	showPagination = false,
	coursesPerPage = 6,
}: CoursePageProps) {
	const [level, setLevel] = useState("All levels");
	const [category, setCategory] = useState("All categories");
	const [sortBy, setSortBy] = useState("Most relevant");
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [pageTransition, setPageTransition] = useState<"idle" | "exit-left" | "exit-right" | "enter-left" | "enter-right">("idle");

	const categories = [
		"All categories",
		...(categoryOptions ?? Array.from(
			new Set(courses.map((course) => course.category).filter(Boolean) as string[]),
		)),
	];

	const filteredCourses = courses
		.filter((course) => {
			const searchValue = searchTerm.trim().toLowerCase();
			return !searchValue || [course.title, course.byWhom, course.category].some((value) => value?.toLowerCase().includes(searchValue));
		})
		.filter((course) => level === "All levels" || (course.level ?? course.friendly) === level)
		.filter((course) => category === "All categories" || course.category === category)
		.sort((firstCourse, secondCourse) => {
			if (sortBy === "Price: low to high") {
				return Number.parseFloat(firstCourse.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(secondCourse.price.replace(/[^0-9.]/g, ""));
			}

			if (sortBy === "Rating") {
				return Number.parseFloat(secondCourse.rating) - Number.parseFloat(firstCourse.rating);
			}

			return 0;
		});

	const pageCount = Math.max(1, Math.ceil(filteredCourses.length / coursesPerPage));
	const safePage = Math.min(currentPage, pageCount);
	const visibleCourses = showPagination
		? filteredCourses.slice((safePage - 1) * coursesPerPage, safePage * coursesPerPage)
		: filteredCourses.slice(0, coursesPerPage);

	function updateLevel(nextLevel: string) {
		transitionGrid(() => {
			setLevel(nextLevel);
			setCurrentPage(1);
		});
	}

	function updateCategory(nextCategory: string) {
		transitionGrid(() => {
			setCategory(nextCategory);
			setCurrentPage(1);
		});
	}

	function updateSort(nextSort: string) {
		transitionGrid(() => {
			setSortBy(nextSort);
			setCurrentPage(1);
		});
	}

	function transitionGrid(update: () => void) {
		if (pageTransition !== "idle") return;

		setPageTransition("exit-left");
		window.setTimeout(() => {
			update();
			setPageTransition("enter-right");
			window.setTimeout(() => setPageTransition("idle"), 360);
		}, 300);
	}

	function changePage(nextPage: number) {
		if (nextPage === safePage || pageTransition !== "idle") return;

		const enteringFrom = nextPage > safePage ? "right" : "left";
		setPageTransition(nextPage > safePage ? "exit-left" : "exit-right");

		window.setTimeout(() => {
			setCurrentPage(nextPage);
			setPageTransition(`enter-${enteringFrom}`);
			window.setTimeout(() => setPageTransition("idle"), 360);
		}, 300);
	}

	return (
		<>
			{showSearch && (
				<section className="bg-[#003AE2] px-6 py-10 sm:py-14">
					<div className="mx-auto flex max-w-[720px] flex-col items-center">
						<h1 className="text-center text-2xl font-semibold text-white sm:text-4xl">{searchTitle}</h1>
						<div className="relative mt-7 w-full max-w-[460px]">
							<Image src="/icons/search.svg" alt="" width={20} height={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2" />
							<input
								aria-label="Search courses"
								value={searchTerm}
								onChange={(event) => { setSearchTerm(event.target.value); setCurrentPage(1); }}
								placeholder="Search courses"
								className="h-12 w-full rounded-full bg-white pl-12 pr-4 text-sm text-[#222222] outline-none"
							/>
						</div>
					</div>
				</section>
			)}

		<section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-[1180px]">
				{showFilters && (
					<div className="mb-5 flex flex-wrap items-center justify-between gap-4">
						<div className="flex flex-wrap gap-3">
							<button type="button" className="flex items-center gap-2 rounded-full border border-[#e3e3e3] bg-white px-4 py-2 text-sm text-[#555555]">
								<Image src="/filter.png" alt="" width={16} height={16} />
								Filter
							</button>

							<label className="sr-only" htmlFor="course-level">Filter by level</label>
							<div className="flex items-center gap-2 rounded-full border border-[#e3e3e3] bg-white px-4 py-2">
								<Image src="/level.png" alt="" width={16} height={16} />
								<select id="course-level" value={level} onChange={(event) => updateLevel(event.target.value)} className="bg-transparent text-sm text-[#555555] outline-none">
									<option value="All levels">Level</option>
									{allLevels.filter((levelOption) => levelOption !== "All levels").map((levelOption) => <option key={levelOption}>{levelOption}</option>)}
								</select>
							</div>

							<label className="sr-only" htmlFor="course-category">Filter by category</label>
							<div className="flex items-center gap-2 rounded-full border border-[#e3e3e3] bg-white px-4 py-2">
								<Image src="/category.png" alt="" width={16} height={16} />
								<select id="course-category" value={category} onChange={(event) => updateCategory(event.target.value)} className="bg-transparent text-sm text-[#555555] outline-none">
									<option value="All categories">Category</option>
									{categories.filter((categoryOption) => categoryOption !== "All categories").map((categoryOption) => <option key={categoryOption}>{categoryOption}</option>)}
								</select>
							</div>
						</div>

						<label className="sr-only" htmlFor="course-sort">Sort courses</label>
						<div className="flex items-center gap-2 rounded-full border border-[#e3e3e3] bg-white px-4 py-2">
							<Image src="/most-relevant.png" alt="" width={16} height={16} />
							<select id="course-sort" value={sortBy} onChange={(event) => updateSort(event.target.value)} className="bg-transparent text-sm text-[#555555] outline-none">
								<option>Most relevant</option>
								<option>Price: low to high</option>
								<option>Rating</option>
							</select>
						</div>
					</div>
				)}

				{showCategoryFilters && (
					<div className="mb-8 flex flex-wrap justify-center gap-3">
						<button type="button" onClick={() => updateCategory("All categories")} className={`rounded-full px-4 py-2 text-sm ${category === "All categories" ? "bg-[#c8ff16] text-[#222222]" : "bg-[#f5f5f6] text-[#555555]"}`}>
							Featured
						</button>
						{categories.filter((categoryOption) => categoryOption !== "All categories").map((categoryOption) => (
							<button key={categoryOption} type="button" onClick={() => updateCategory(categoryOption)} className={`rounded-full px-4 py-2 text-sm ${category === categoryOption ? "bg-[#c8ff16] text-[#222222]" : "bg-[#f5f5f6] text-[#555555]"}`}>
								{categoryOption}
							</button>
						))}
					</div>
				)}

				<div className={`course-page-grid grid grid-cols-1 justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 ${pageTransition !== "idle" ? `course-page-${pageTransition}` : ""}`}>
					{visibleCourses.map((course) => (
						<CourseBox key={`${course.title}-${course.imageSrc}`} {...course} />
					))}
				</div>

				{showPagination && pageCount > 1 && (
					<nav className="mt-10 flex items-center justify-center gap-2" aria-label="Course pages">
						<button
							type="button"
							aria-label="Previous page"
							disabled={safePage === 1}
							onClick={() => changePage(Math.max(1, safePage - 1))}
							className="h-8 w-8 rounded-full border border-[#e3e3e3] text-[#555555] disabled:cursor-not-allowed disabled:opacity-40"
						>
							&lt;
						</button>
						{Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
							<button
								key={page}
								type="button"
								aria-label={`Page ${page}`}
								aria-current={safePage === page ? "page" : undefined}
								onClick={() => changePage(page)}
								className={`h-8 min-w-8 rounded-full px-2 text-sm ${safePage === page ? "bg-[#0757df] text-white" : "text-[#555555]"}`}
							>
								{page}
							</button>
						))}
						<button
							type="button"
							aria-label="Next page"
							disabled={safePage === pageCount}
							onClick={() => changePage(Math.min(pageCount, safePage + 1))}
							className="h-8 w-8 rounded-full border border-[#e3e3e3] text-[#555555] disabled:cursor-not-allowed disabled:opacity-40"
						>
							&gt;
						</button>
					</nav>
				)}
			</div>
		</section>
		</>
	);
}
