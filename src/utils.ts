import { browserLanguages } from "./constants";

export const getBrowserLanguageCode = (): string =>
  (navigator.languages && navigator.languages[0]) || navigator.language;

export const getBrowserLanguageName = (code: string): string => {
  const browserLanguage = browserLanguages.find(
    (language) => language.code.toLocaleLowerCase() === code.toLocaleLowerCase()
  );
  return browserLanguage?.name ?? "Unknown";
};
