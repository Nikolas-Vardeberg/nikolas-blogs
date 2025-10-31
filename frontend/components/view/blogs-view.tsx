"use client";

import { ApiMethods, useApiHook } from "@/hooks/useApiHook";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "../ui/empty";
import SkeletonLoader from "../Skeleton-loader";

export default function BlogsView() {
  const {
    data: blogs,
    loading: loading,
    axiosCall: getBlogs,
  } = useApiHook<any[], undefined>({
    method: ApiMethods.GET,
    url: "blogs",
  });

  const handleFetchBlogs = async () => {
    await getBlogs();
  };

  useEffect(() => {
    handleFetchBlogs();
  }, []);

  if (loading) {
    return <SkeletonLoader elements={10} height={100} className="w-full" />;
  }

  if (!loading && blogs === null) {
    return (
      <Empty className="h-screen">
        <EmptyHeader>
          <EmptyTitle>No Blogs Found</EmptyTitle>
          <EmptyDescription>
            No blogs found maybe wait for me to publish something...
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {blogs?.map((blog) => (
        <pre key={blog?.id}>{JSON.stringify(blog, undefined, 2)}</pre>
      ))}
    </div>
  );
}
