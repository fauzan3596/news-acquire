export default function TopStoriesSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 mt-5 pb-10">
      {[...Array(4)].map((_, index) => (
        <div className="flex w-full flex-col gap-4" key={index}>
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
}
