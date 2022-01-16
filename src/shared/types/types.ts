export type ProjectCardContent = Readonly<{
  imageUrl: string,
  headline: string,
  flairText: string,
  shortDescription: string,
  dialogContent: DialogContent,
}>;

export type DialogContent = Readonly<{
  keyPoints: string[];
  linkText: string;
  linkUrl: string;
}>;
