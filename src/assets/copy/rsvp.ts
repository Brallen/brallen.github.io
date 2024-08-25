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
  groupSize: string;
  submit: string;
  successText: string;
  errorText: string;
};

export const rsvpCopy: Record<supportedLang, copyStructure> = {
  en: {
    metaTitle: "30/60 Birthday Bash",
    metaDescription: "RSVP for the 30th and 60th birthday of the Gougeons",
    headline: "Birthday Bash",
    where: "Where",
    address: "France",
    when: "When",
    date: "Today",
    name: "Name",
    email: "Email",
    rsvp: "RSVP",
    yes: "Yes",
    no: "No",
    groupSize: "Number of people in party",
    submit: "Submit",
    successText: "Thanks for your submission",
    errorText: "Something went wrong. Please try again",
  },
  fr: {
    metaTitle: "",
    metaDescription: "",
    headline: `Fête d'anniversaire`,
    where: "Où",
    address: "France",
    when: "Quand",
    date: `Aujourd'hui`,
    name: "Nom",
    email: "Email",
    rsvp: "Réponse",
    yes: "Oui",
    no: "Non",
    groupSize: "Nombre de personnes dans le groupe",
    submit: "Soumettre",
    successText: "Merci pour votre réponse",
    errorText: "Quelque chose s'est mal passé. Veuillez réessayer",
  },
};
