import path from "path";

import sizeOf from "image-size";

function getImageDimensions(imagePath: string) {
  const result = sizeOf(path.join(process.cwd(), "public", imagePath));
  return result;
}

export default getImageDimensions;
