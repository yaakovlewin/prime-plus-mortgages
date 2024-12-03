"use client";

import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MDXPreview from "./MDXPreview";

export default function ContentEditor({
  initialContent,
  section,
  slug,
  onSave,
}) {
  const [preview, setPreview] = useState(false);
  const [previewContent, setPreviewContent] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      content: initialContent || "",
    },
  });

  const currentContent = watch("content");

  const generatePreview = async (content) => {
    try {
      const { data: frontMatter, content: markdownContent } = matter(content);
      const remarkGfm = (await import("remark-gfm")).default;

      const mdxSource = await serialize(markdownContent, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          development: process.env.NODE_ENV === "development",
        },
        scope: frontMatter,
      });

      setPreviewContent(mdxSource);
    } catch (error) {
      console.error("Error generating preview:", error);
    }
  };

  const togglePreview = async () => {
    if (!preview && currentContent) {
      await generatePreview(currentContent);
    }
    setPreview(!preview);
  };

  const onSubmit = async (data) => {
    try {
      // Parse front matter and content
      const { data: frontMatter, content } = matter(data.content);

      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section,
          slug,
          content,
          frontMatter,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save content");
      }

      if (onSave) {
        onSave();
      }
    } catch (error) {
      console.error("Error saving content:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          Edit Content: {section}/{slug}
        </h1>
        <div className="space-x-2">
          <button
            onClick={togglePreview}
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            {preview ? "Edit" : "Preview"}
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={!isDirty}
            className={`rounded px-4 py-2 ${
              isDirty
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="rounded border border-gray-300">
        {preview ? (
          <div className="p-4">
            <MDXPreview content={previewContent} />
          </div>
        ) : (
          <textarea
            {...register("content", { required: true })}
            className="h-[calc(100vh-200px)] w-full resize-none rounded p-4 font-mono"
            placeholder="Enter your markdown content here..."
          />
        )}
      </div>

      {errors.content && (
        <p className="mt-2 text-sm text-red-500">Content is required</p>
      )}
    </div>
  );
}
