import axios from "axios";

const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export const strapiApi = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api`,
  headers: STRAPI_API_TOKEN
    ? {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      }
    : {},
});