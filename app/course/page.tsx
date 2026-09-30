import CoursePage from "../../components/coursePage";
import { categories } from "../../common/courseCategories";
import { courseDetails } from "../../common/courseDetails";

export default function CourseListingPage() {
  return (
    <main>
      <CoursePage
        courses={courseDetails}
        showSearch
        searchTitle="Find Your Next Course"
        showCategoryFilters
        categoryOptions={categories}
        showFilters
        showPagination
        coursesPerPage={6}
      />
    </main>
  );
}
