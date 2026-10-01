import { notFound } from "next/navigation";
import CreatorProfile from "../../../components/creatorProfile";
import { creatorDetails } from "../../../common/creatorDetails";

type CreatorDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CreatorDetailPage({ params }: CreatorDetailPageProps) {
  const { id } = await params;
  const creator = creatorDetails.find((creatorDetail) => creatorDetail.id === id);

  if (!creator) {
    notFound();
  }

  return <CreatorProfile creator={creator} />;
}
