const STRAPI_MEDIA_URL = "https://delightful-health-e9807e9626.media.strapiapp.com";
export function getStrapiImage(inputUrl?: string): string {
  if (!inputUrl) return "";
  if (inputUrl.startsWith("http")) return inputUrl;
  return `${STRAPI_MEDIA_URL}${inputUrl}`;
}