const API_URL = "http://localhost:3001/api";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export async function api<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const json: ApiResponse<T> = await response.json();

  return json.data;
}