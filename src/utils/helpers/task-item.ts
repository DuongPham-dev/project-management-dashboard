// Types
import { FileType } from "@app/types";
// Constants
import { FileExtensionType } from "@app/constants";

export const findFirstImageInFiles = (
  files: FileType[]
): FileType | undefined =>
  files.find(
    ({ fileType }) => !!fileType && fileType.includes(FileExtensionType.PNG)
  );
