export type ProjectCardContent = Readonly<{
  headline: string,
  flairText: string,
  shortDescription: string,
  keyPoints: string[];
  images: ImageContent[];
  link?: LinkContent;
}>;

export type ImageContent = Readonly<{
  url: string;
  altText: string;
}>;

export type LinkContent = Readonly<{
  text: string;
  url: string;
}>;
