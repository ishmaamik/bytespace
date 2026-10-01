import CoursePage from "../../components/coursePage";
import { courseCategories } from "../../common/text-files/courseCategories";
import { courseDetails } from "../../common/courseDetails";
import { coursePageText } from "../../components/text-files/coursePage";

export default function CourseListingPage() {
  return (
    <main>
      <CoursePage
        courses={courseDetails}
        showSearch
        searchTitle={coursePageText.searchTitle}
        showCategoryFilters
        categoryOptions={courseCategories}
        showFilters
        showPagination
        coursesPerPage={6}
      />
    </main>
  );
}
