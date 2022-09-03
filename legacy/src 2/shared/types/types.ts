export type ProjectCardContent = Readonly<{
  image: ImageContent,
  headline: string,
  flairText: string,
  shortDescription: string,
  dialogContent: DialogContent,
}>;

export type DialogContent = Readonly<{
  headline: string,
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
