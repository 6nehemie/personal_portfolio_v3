import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

/**
 * Display a contributor card with their image, name and linkedin url
 * @imageUrl - the image of the contributor
 * @fullName - the full name of the contributor
 * @linkedInUrl - the linkedin url of the contributor
 * @returns The contributor card component.
 */
const ContributorCard = ({
  imageUrl,
  fullName,
  linkedInUrl,
}: {
  imageUrl: string;
  fullName: string;
  linkedInUrl: string;
}) => {
  return (
    <Link
      href={linkedInUrl}
      target="_blank"
      className="flex items-center gap-4 w-max"
    >
      <Avatar className="size-8">
        <AvatarImage src={imageUrl} alt={fullName} />
        <AvatarFallback>
          <Skeleton className="size-full rounded-full" />
        </AvatarFallback>
      </Avatar>

      <div className="flex items-center gap-2">
        <h4 className="text-nm-gray-200 font-medium">{fullName}</h4>
      </div>
    </Link>
  );
};
export default ContributorCard;
