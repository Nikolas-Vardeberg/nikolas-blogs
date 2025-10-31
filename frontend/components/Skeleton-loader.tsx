import clsx from "clsx";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonLoader({
  elements,
  height,
  className,
}: {
  elements: number;
  height: number;
  className?: string;
}) {
  return (
    <>
      {Array.from({ length: elements }).map((_, i) => (
        <Skeleton key={i} className={clsx(`h-[${height}px]`, className)} />
      ))}
    </>
  );
}
