import type { supportedLang } from "../../types/types";

type copyStructure = {
  metaTitle: string;
  metaDescription: string;
  headline: string;

};

export const rsvpCopy: Record<supportedLang, copyStructure> = {
  'en': { 
    metaTitle: '30/60 Birthday Bash',
    metaDescription: 'RSVP for the 30th and 60th birthday of the Gougeons',
    headline: 'Hello',
  },
  'fr': {
    metaTitle: '',
    metaDescription: '',
    headline: 'Bonjour',
  }
};
