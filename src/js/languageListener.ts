const LANG_STORAGE_KEY = "portfolio-lang";

const isSupportedLang = (lang: string | null): lang is "es" | "en" =>
   lang === "es" || lang === "en";

const getInitialLanguage = (): "es" | "en" => {
   const stored = localStorage.getItem(LANG_STORAGE_KEY);
   if (isSupportedLang(stored)) {
      return stored;
   }

   const current = document.documentElement.lang;
   if (isSupportedLang(current)) {
      return current;
   }

   const browserLang = navigator.language.toLowerCase();
   return browserLang.startsWith("es") ? "es" : "en";
};

const applyLanguage = (lang: "es" | "en") => {
   document.documentElement.lang = lang;
   localStorage.setItem(LANG_STORAGE_KEY, lang);

   document.querySelectorAll<HTMLElement>("[data-lang]").forEach((node) => {
      node.hidden = node.dataset.lang !== lang;
   });

   const button = document.querySelector<HTMLButtonElement>("#lang-toggle");
   if (!button) {
      return;
   }

   const nextLang = lang === "es" ? "en" : "es";
   const label = button.querySelector<HTMLElement>("[data-lang-label]");
   if (label) {
      label.textContent = lang.toUpperCase();
   }

   button.setAttribute(
      "aria-label",
      nextLang === "en" ? "Switch to English" : "Cambiar a espanol",
   );
};

const initLanguageToggle = () => {
   const button = document.querySelector<HTMLButtonElement>("#lang-toggle");
   const initialLanguage = getInitialLanguage();
   applyLanguage(initialLanguage);

   if (!button) {
      return;
   }

   button.addEventListener("click", () => {
      const currentLang = document.documentElement.lang === "en" ? "en" : "es";
      const nextLang = currentLang === "es" ? "en" : "es";
      applyLanguage(nextLang);
   });
};

if (document.readyState === "loading") {
   document.addEventListener("DOMContentLoaded", initLanguageToggle);
} else {
   initLanguageToggle();
}
