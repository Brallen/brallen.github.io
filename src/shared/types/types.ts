export type ProjectCardContent = Readonly<{
  imageUrl: string,
  headline: string,
  flairText: string,
  shortDescription: string,
  dialogContent: DialogContent,
}>;

export type DialogContent = Readonly<{
  text: string;
  linkText: string;
  linkUrl: string;
}>;
