
import CoursePage from "../../../components/coursePage";
import { courseDetails } from "../../../common/courseDetails";
import { courseCategories } from "../../../common/text-files/courseCategories"
import LearningBox from "./learningBox";
import { courseDiscovery } from "../text-files/secondBox";

export default function SecondBox() {
    return (
        <>
            <div className="relative z-10 flex flex-col items-center gap-6 px-6 lg:pt-24 pt-16">
                <h1 className="text-center text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-6xl">
                    {courseDiscovery.heading[0]}<br />
                    {courseDiscovery.heading[1]}
                </h1>

                <h2 className="max-w-6xl text-center font-normal leading-relaxed text-[#82868E] sm:text-lg">
                    {courseDiscovery.description}
                </h2>
            </div>

            <CoursePage
                courses={courseDetails}
                showCategoryFilters
                categoryOptions={courseCategories}
                coursesPerPage={6}
                showPagination
            />

            <div className="relative z-10 flex flex-col items-center gap-6 px-6 lg:pt-16 pt-16">
                <h2 className="text-center font-bold leading-tight text-black sm:text-5xl lg:text-4xl">
                    {courseDiscovery.learningPathsHeading}
                </h2>

                <h2 className="max-w-6xl text-center font-normal leading-relaxed text-[#82868E] sm:text-lg">
                    {courseDiscovery.learningPathsDescription}
                </h2>
            </div>

            <LearningBox />
        </>
    );
}
