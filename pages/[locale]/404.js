import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import Link from "../../components/Link";

const Homepage = () => {
  const { t } = useTranslation(["404", "common", "footer"]);

  return (
    <>
      <div className="h-screen bg-gray-900 text-white text-3xl text-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <button type="button">{t("common:back-to-home")}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps(["404", "common", "footer"]);
export { getStaticPaths, getStaticProps };
