import SkeletonCard from "@/components/skeleton-card";

export default function loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] gap-20">
      {Array.from({ length: 6 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
}
