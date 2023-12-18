import {SanityClient, createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const client = createClient({
  projectId: "9y6k2hea",
  dataset: "production",
  apiVersion: "2023-12-08",
  useCdn: false
});
const builder: ImageUrlBuilder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source)
}
export default client;