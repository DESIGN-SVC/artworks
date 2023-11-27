import createClient from "openapi-fetch";
import { paths } from ".";

export const api = createClient<paths>({
    baseUrl: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json"
    }
})