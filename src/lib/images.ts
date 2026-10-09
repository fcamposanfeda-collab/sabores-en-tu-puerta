import fs from "fs";
import path from "path";

export function publicImage(src: string) {
  const relative = src.replace(/^\//, "");
  const file = path.join(process.cwd(), "public", relative);
  return fs.existsSync(file) ? `/${relative}` : null;
}
