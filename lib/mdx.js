import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

// Directory where content files are stored
const contentDirectory = path.join(process.cwd(), "content");

export async function getContentBySlug(section, slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(contentDirectory, section, `${realSlug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Dynamic import of remark-gfm
    const remarkGfm = (await import("remark-gfm")).default;

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        development: process.env.NODE_ENV === "development",
      },
      scope: data,
    });

    return {
      slug: realSlug,
      frontMatter: data,
      content: mdxSource,
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;
  }
}

export async function getAllContent(section) {
  const sectionPath = path.join(contentDirectory, section);

  try {
    if (!fs.existsSync(sectionPath)) {
      return [];
    }

    const files = fs.readdirSync(sectionPath);
    const contents = await Promise.all(
      files.map(async (file) => {
        const content = await getContentBySlug(
          section,
          file.replace(/\.mdx$/, ""),
        );
        return content;
      }),
    );

    return contents.filter(Boolean);
  } catch (error) {
    console.error(`Error reading directory ${sectionPath}:`, error);
    return [];
  }
}

export async function updateContent(section, slug, content, frontMatter) {
  const filePath = path.join(contentDirectory, section, `${slug}.mdx`);
  const directory = path.dirname(filePath);

  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    const fileContent = matter.stringify(content, frontMatter);
    fs.writeFileSync(filePath, fileContent);
    return true;
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    return false;
  }
}
