import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../lib/getStatic";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const { t } = useTranslation(["common", "footer", "about", "houses"]);

  return (
    <div>
      <Header
        heading={t("heading")}
        about={t("ABOUT")}
        houses={t("HOUSES")}
        services={t("SERVICES")}
        faq={t("FAQ")}
        media={t("MEDIA")}
        contact={t("CONTACT")}
        clientportal={t("CLIENT PORTAL")}
      />{" "}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default appWithTranslation(MyApp);

const getStaticProps = makeStaticProps(["common", "footer", "about", "houses"]);
export { getStaticPaths, getStaticProps };
