
import { Metadata } from "next";

export const SITE_METADATA = {
  title: "Default Title | Crown Electric",
  description: "Default description for Crown Electric Mobility",
};

export const getMetadata = ({
  title = SITE_METADATA.title,
  description = SITE_METADATA.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata => ({
  title,
  description,
  metadataBase: new URL("https://crownelectricmobility.com"),
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: `https://crownelectricmobility.com${path}`,
    siteName: "Crown Electric Mobility",
    type: "website",
  },
});