"use client";

import components from "@/app/mdx-components";
import { MDXRemote } from "next-mdx-remote";

export default function MDXPreview({ content }) {
  if (!content) return null;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  );
}
