export default function SectionSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-10 mt-5 pb-10">
      {[...Array(4)].map((_, index) => (
        <div className="flex w-full md:flex-row flex-col gap-4 items-center" key={index}>
          <div className="skeleton h-40 w-40"></div>
          <div className="flex flex-col gap-5 w-full">
            <div className="skeleton h-4 md:w-80 w-40"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
