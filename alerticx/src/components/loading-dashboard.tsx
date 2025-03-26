import { Skeleton } from "@/components/ui/skeleton"

export function LoadingDashboard() {
  return (
    <>
      <div className="space-y-2">
        <Skeleton className="h-[125px] w-full" />
        <Skeleton className="h-[125px] w-full" />
        <Skeleton className="h-[125px] w-full" />
        <Skeleton className="h-[125px] w-full" />
      </div>
    </>
  )
}

