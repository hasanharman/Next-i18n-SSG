import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href || pName; // ? `/${locale}${rest.href}` : pName;
  }
  console.log("test", locale);
  return (
    <Link href={href} locale={locale} className="mr-3">
      <button onClick={() => languageDetector.cache(locale)}>
        {t(`${locale}`)}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
