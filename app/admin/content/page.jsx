import { getAllContent } from "@/lib/mdx";
import Link from "next/link";

export default async function ContentManagement() {
  // Get content from different sections
  const homeContent = await getAllContent("home");
  const servicesContent = await getAllContent("services");
  const aboutContent = await getAllContent("about");

  const sections = [
    { name: "Home", content: homeContent },
    { name: "Services", content: servicesContent },
    { name: "About", content: aboutContent },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">Content Management</h1>

      <div className="space-y-8">
        {sections.map((section) => (
          <div
            key={section.name}
            className="rounded-lg border border-gray-200 p-6"
          >
            <h2 className="mb-4 text-2xl font-semibold">{section.name}</h2>

            {section.content.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.content.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/admin/content/${section.name.toLowerCase()}/${
                      item.slug
                    }`}
                    className="block rounded-lg border border-gray-200 p-4 transition-colors hover:border-blue-500 hover:bg-blue-50"
                  >
                    <h3 className="font-medium text-blue-600">{item.slug}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Last modified:{" "}
                      {new Date(
                        item.frontMatter?.lastModified || Date.now(),
                      ).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No content files found in this section.
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-semibold">Add New Content</h2>
        <p className="mb-4 text-gray-600">
          To add new content, create a .mdx file in the appropriate section
          directory under /content. The file will automatically appear here once
          created.
        </p>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Available sections:</p>
          <ul className="list-inside list-disc">
            <li>/content/home/</li>
            <li>/content/services/</li>
            <li>/content/about/</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
