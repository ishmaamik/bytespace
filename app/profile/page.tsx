import CreatorProfile from "../../components/creatorProfile";
import { creatorDetails } from "../../common/creatorDetails";

export default function ProfilePage() {
  return <CreatorProfile creator={creatorDetails[0]} />;
}
