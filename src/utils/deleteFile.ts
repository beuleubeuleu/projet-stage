import * as fs from "fs";

export async function deleteFile(filePath: string) {
  await fs.unlink(filePath, (err) => {
    console.error(err)
  });
}