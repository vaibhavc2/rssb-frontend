import { getErrorMessage } from ".";

export const fetchJSON = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  returnErrorMessage = true
): Promise<JSON | unknown | string> => {
  try {
    const response = await fetch(input, init);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    if (returnErrorMessage) return getErrorMessage(error);
    return error;
  }
};
