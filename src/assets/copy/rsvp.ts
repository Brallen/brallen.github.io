import type { supportedLang } from "../../types/types";

type copyStructure = {
  metaTitle: string;
  metaDescription: string;
  headline: string;
  where: string;
  address: string;
  when: string;
  date: string;
  name: string;
  email: string;
  rsvp: string;
  yes: string;
  no: string;
  groupNames: string;
  submit: string;
  successText: string;
  errorText: string;
};

export const rsvpCopy: Record<supportedLang, copyStructure> = {
  en: {
    metaTitle: "30/60 Birthday Bash",
    metaDescription: "RSVP for the 30th and 60th birthday of the Gougeons",
    headline: "Double the fun! Turning 30 and 60.",
    where: "Where",
    address: "Parigné-sur-Braye France",
    when: "When",
    date: "6pm July 5th, 2025",
    name: "Name",
    email: "Email",
    rsvp: "RSVP",
    yes: "Yes",
    no: "No",
    groupNames: "Names of people in your party",
    submit: "Submit",
    successText: "Thanks for your submission",
    errorText: "Something went wrong. Please try again",
  },
  fr: {
    metaTitle: "",
    metaDescription: "",
    headline: ``,
    where: "Où",
    address: "Parigné-sur-Braye France",
    when: "Quand",
    date: "18h, 5 Juillet 2025",
    name: "Nom",
    email: "Email",
    rsvp: "Réponse",
    yes: "Oui",
    no: "Non",
    groupNames: "Noms des personnes de votre groupe",
    submit: "Soumettre",
    successText: "Merci pour votre réponse",
    errorText: "Quelque chose s'est mal passé. Veuillez réessayer",
  },
};
