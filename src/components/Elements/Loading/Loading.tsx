import { Skeleton } from "../Skeleton";

<div role="status" className="max-w-screen  inset-0 h-screen overflow-hidden">
  <div className="flex h-full flex-col items-center justify-center text-center">
    <div className="max-w-[500px]">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </div>
  <span className="sr-only">Loading...</span>
</div>;
