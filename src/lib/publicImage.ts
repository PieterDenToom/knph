import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Returns the path if the file exists under /public, otherwise undefined.
 * Lets pages reference planned photos that haven't been added yet without
 * rendering broken images.
 */
export function publicImage(path: string): string | undefined {
  return existsSync(join(process.cwd(), "public", path)) ? path : undefined;
}
