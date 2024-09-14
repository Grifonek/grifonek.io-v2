import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
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
          <ReactCountryFlag countryCode="CZ" style={{ fontSize: "2rem" }} />
        </button>
      ) : (
        <button
          onClick={() => {
            handleLanguageChange("en");
            setLanguage("en");
          }}
          className="flex gap-x-1"
        >
          <ReactCountryFlag countryCode="GB" style={{ fontSize: "2rem" }} />
        </button>
      )}
    </div>
  );
}

export default LanguageSwitcher;
