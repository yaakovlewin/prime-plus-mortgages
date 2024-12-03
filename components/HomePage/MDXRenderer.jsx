"use client";

import components from "@/app/mdx-components";
import { MDXRemote } from "next-mdx-remote";

export default function MDXRenderer({ content, frontMatter }) {
  if (!content) return null;

  // Create a scope object that includes all frontMatter properties
  const scope = {
    ...frontMatter,
    slides: frontMatter.slides || [],
  };

  return <MDXRemote {...content} components={components} scope={scope} />;
}
