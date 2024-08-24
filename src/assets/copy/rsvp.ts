import type { supportedLang } from "../../types/types";

type copyStructure = {
  headline: string;

};

export const rsvpCopy: Record<supportedLang, copyStructure> = {
  'en': { 
    'headline': 'Hello',
  },
  'fr': {
    'headline': 'Bonjour',
  }
};
