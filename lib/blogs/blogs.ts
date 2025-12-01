import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";

const filePath = path.join(process.cwd(), "data/blogs.json");
export const revalidate = 10;

export const getBlogs = cache(async () => {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
});

export async function saveBlogs(blogs: any) {
  await fs.writeFile(filePath, JSON.stringify(blogs, null, 2), "utf-8");
}
