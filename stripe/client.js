import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import imageConfigDefault from "next/dist/shared/lib/image-config";

export const client = sanityClient({
  projectId: "rujkw2ld",
  dataset: "production",
  apiVersion: "2023-08-04",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
