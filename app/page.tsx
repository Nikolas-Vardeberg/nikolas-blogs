import { ToggleTheme } from "@/components/toggle-theme";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto flex py-5 flex-col gap-3">
      <Skeleton className="w-full h-14" />

      <Skeleton className="w-full h-96" />
      <Skeleton className="w-full h-96" />
      <Skeleton className="w-full h-96" />
    </div>
  );
}
