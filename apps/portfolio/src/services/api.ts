import createClient from "openapi-fetch";
import type { paths } from "./api.types";

export const api = createClient<paths>({
  baseUrl: import.meta.env.PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
