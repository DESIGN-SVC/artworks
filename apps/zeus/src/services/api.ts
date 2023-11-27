import createClient from "openapi-fetch";


export const api = createClient({
    baseUrl: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json"
    }
})