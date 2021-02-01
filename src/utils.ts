import { isoLanguages } from "./constants";

// returns a BCP 47 tag (e.g. "en-US" on desktop Chrome or "en-us" on mobile Safari)
// the language tag "en-US" is composed 2 subtags separated by the "-" character.
// the value "en" is the language subtag for English and the value "US" is the region subtag for the United States.
export const getBrowserLanguageCode = (): string =>
  (navigator.languages && navigator.languages[0]) || navigator.language;

// matches BCP 47 (e.g. "en-US" or "en-us") with ISO 639-1 (e.g. "en")
export const getBrowserLanguageName = (code: string): string => {
  const browserLanguage = isoLanguages.find(
    (language) => language.code === code.split("-")[0]
  );
  return browserLanguage?.name ?? "Unknown";
};
