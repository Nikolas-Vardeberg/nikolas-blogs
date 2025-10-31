"use client";

import BlogsView from "@/components/view/blogs-view";

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto flex py-5 flex-col gap-3">
      <BlogsView />
    </div>
  );
}
