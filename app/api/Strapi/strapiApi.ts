import axios from "axios";

const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "https://delightful-health-e9807e9626.strapiapp.com";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "d10592703686dec3f2058828f20521a44a1baade1d80428186a9a1cf3567e5c1534026e71dd3abeda20a8ed8ef468eafa5ea8d53581628c6938e528d5d3eec5ff44ccf2d6a515cc57dab667108bb7c787e413a8798707c4d6091c35957f14d37f1b54f9edbf9d586d9c6d39345e562b35c6277b8a0a5b4e4530c33b52dac452e";

export const strapiApi = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api`,
  headers: STRAPI_API_TOKEN
    ? {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      }
    : {},
});
