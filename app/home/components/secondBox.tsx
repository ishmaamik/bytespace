
import CoursePage from "../../../components/coursePage";
import { courseDetails } from "../../../common/courseDetails";
import { categories } from "../../../common/courseCategories"
import LearningBox from "../../../components/learningBox";

export default function SecondBox() {
    return (
        <>
            <div className="relative z-10 flex flex-col items-center gap-6 px-6 lg:pt-24 pt-16">
                <h1 className="text-center text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
                    Discover Your Passion,<br />
                    Build Your Skills
                </h1>

                <h2 className="max-w-6xl text-center font-normal leading-relaxed text-[#82868E] sm:text-lg">
                    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br />
                    fields, from technology to the arts, and make a difference in your career and life.
                </h2>
            </div>

            <CoursePage
                courses={courseDetails}
                showCategoryFilters
                categoryOptions={categories}
                coursesPerPage={6}
                showPagination
            />

            <div className="relative z-10 flex flex-col items-center gap-6 px-6 lg:pt-16 pt-16">
                <h2 className="text-center font-bold leading-tight text-black sm:text-5xl lg:text-4xl">
                    Explore Diverse Learning Paths at Bytespace
                </h2>

                <h2 className="max-w-6xl text-center font-normal leading-relaxed text-[#82868E] sm:text-lg">
                    At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br />
                    fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
                </h2>
            </div>

            <LearningBox />
        </>
    );
}
