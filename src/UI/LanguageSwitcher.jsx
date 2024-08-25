import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  function handleLanguageChange(lng) {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      {language === "en" ? (
        <button
          onClick={() => {
            handleLanguageChange("cz");
            setLanguage("cz");
          }}
          className="flex gap-x-1"
        >
          (
          <img
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CZ.svg"
          />
          )
        </button>
      ) : (
        <button
          onClick={() => {
            handleLanguageChange("en");
            setLanguage("en");
          }}
          className="flex gap-x-1"
        >
          (
          <img
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"
          />
          )
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
