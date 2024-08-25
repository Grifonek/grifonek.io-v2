import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="text-white xl:text-4xl px-2 xl:px-0">
      <h1 className="text-4xl xl:text-5xl mb-4 font-bold">
        {t("headingMain")}
      </h1>
      <h2 className="text-2xl xl:text-3xl">
        {t("headingText.first")}{" "}
        <span className="font-bold">{t("headingText.second")}, </span>
        {t("headingText.third")}.
      </h2>
    </div>
  );
}

export default Header;
