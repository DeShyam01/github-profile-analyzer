import InfoItem from "./InfoItem";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProfileInfoGrid = ({
  location,
  company,
  blog,
  top_language,
  github_created_at,
  github_updated_at,
  className,
}: {
  location: string;
  company: string;
  blog: string;
  top_language: string;
  github_created_at: Date;
  github_updated_at: Date;
  className: string;
}) => {
  const blogURL = (
    <a
      href={`${blog}`}
      target="_blank"
      className="text-blue-600/90 text-[12px] flex items-center gap-1"
    >
      <FaExternalLinkAlt size={12} className="shrink-0" />
      <span className="truncate">{blog}</span>
    </a>
  );
  return (
    <div className={`mb-4 p-2 lg:mr-[10%] rounded-xl sm:border-0 ${className}`}>
      {location && (
        <InfoItem
          iconSrc="/icons/location.svg"
          label="Location"
          value={`${location}`}
        />
      )}
      {company && (
        <InfoItem
          iconSrc="/icons/company.svg"
          label="Company"
          value={`${company}`}
        />
      )}
      {blog && (
        <InfoItem iconSrc="/icons/link.svg" label="Blog" value={blogURL} />
      )}
      {top_language && (
        <InfoItem
          iconSrc="/icons/top_language.svg"
          label="Top Language"
          value={`${top_language}`}
        />
      )}
      <InfoItem
        iconSrc="/icons/github_created.svg"
        label="Github Created At"
        value={`${github_created_at}`.split(" ")[0]}
      />
      <InfoItem
        iconSrc="/icons/github_updated.svg"
        label="Github Updated At"
        value={`${github_updated_at}`.split(" ")[0]}
      />
    </div>
  );
};

export default ProfileInfoGrid;
