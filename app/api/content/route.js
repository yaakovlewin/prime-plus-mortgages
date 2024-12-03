import { updateContent } from "@/lib/mdx";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { section, slug, content, frontMatter } = await request.json();

    if (!section || !slug || !content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const success = await updateContent(section, slug, content, frontMatter);

    if (success) {
      return NextResponse.json({ message: "Content updated successfully" });
    } else {
      return NextResponse.json(
        { error: "Failed to update content" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get("section");
  const slug = searchParams.get("slug");

  if (!section || !slug) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 },
    );
  }

  try {
    const content = await getContentBySlug(section, slug);
    if (!content) {
      return NextResponse.json({ error: "Content not found" }, { status: 404 });
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
