import ContentEditor from "@/components/admin/ContentEditor";
import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";

export default async function EditContent({ params }) {
  const { section, slug } = params;
  let content = "";

  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      section,
      `${slug}.mdx`,
    );
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    notFound();
  }

  if (!content) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <ContentEditor initialContent={content} section={section} slug={slug} />
    </div>
  );
}

// Generate static params for existing content
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const sections = ["home", "services", "about"];
  const params = [];

  for (const section of sections) {
    const sectionPath = path.join(contentDir, section);

    try {
      if (fs.existsSync(sectionPath)) {
        const files = fs.readdirSync(sectionPath);

        for (const file of files) {
          if (file.endsWith(".mdx")) {
            params.push({
              section,
              slug: file.replace(".mdx", ""),
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${sectionPath}:`, error);
    }
  }

  return params;
}
