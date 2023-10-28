import { getErrorMessage } from "@/lib/utils";

export function appwriteError(
  className: string,
  funcName: string,
  error: unknown
) {
  const errMsg = getErrorMessage(error);
  const msg = `Appwrite :: ${className} Service :: ${funcName} :: ERROR :: ${errMsg}`;
  return msg;
}
