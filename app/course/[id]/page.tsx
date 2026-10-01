import { notFound } from "next/navigation";
import CourseView from "../../../components/courseView";
import { courseDetails } from "../../../common/courseDetails";

type CourseDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { id } = await params;
  const course = courseDetails.find((courseDetail) => courseDetail.id === id);

  if (!course) {
    notFound();
  }

  return <CourseView course={course} />;
}
