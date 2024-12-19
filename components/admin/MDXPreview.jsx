"use client";

import { MDXRemote } from "next-mdx-remote";
import { useMDXComponents } from "../../app/mdx-components";

export default function MDXPreview({ content }) {
  const components = useMDXComponents({});

  if (!content) return null;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...content} components={components} />
    </div>
  );
}
