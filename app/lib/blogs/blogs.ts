import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app/data/blogs.json");

export async function getBlogs() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function saveBlogs(blogs: any) {
  await fs.writeFile(filePath, JSON.stringify(blogs, null, 2), "utf-8");
}
