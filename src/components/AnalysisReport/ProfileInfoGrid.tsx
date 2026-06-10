import InfoItem from "./InfoItem";

const ProfileInfoGrid = ({location, company, blog, top_language, github_created_at, github_updated_at, className}: {location: String, company: String, blog: String, top_language: String, github_created_at: Date, github_updated_at: Date, className: String}) => {
  return (
    <div className={`mb-4 p-2 lg:mr-[10%] bg-surface rounded-xl border-theme sm:border-0 ${className}`}>
      <InfoItem iconSrc="/icons/location.svg" label="Location" value={`${location}`} />
      <InfoItem iconSrc="/icons/company.svg" label="Company" value={`${company}`} />
      <InfoItem iconSrc="/icons/link.svg" label="Blog" value={`${blog}`} />
      <InfoItem iconSrc="/icons/top_language.svg" label="Top Language" value={`${top_language}`} />
      <InfoItem iconSrc="/icons/github_created.svg" label="Github Created At" value={`${github_created_at}`.split(' ')[0]} />
      <InfoItem iconSrc="/icons/github_updated.svg" label="Github Updated At" value={`${github_updated_at}`.split(' ')[0]} />
    </div>
  );
};

export default ProfileInfoGrid;
