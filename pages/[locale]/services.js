import Link from "../../components/Link";

import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const styles = {
  h1: "text-3xl font-montserrat font-bold mb-3 text-gray-900",
  h2: "text-lg font-montserrat mb-3 text-gray-700",
  text: "font-md font-montserrat text-gray-500",
};

const Services = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/Services/banner.jpg')] bg-cover bg-center">
        <div className="bg-black/[.5] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("services-title")}
          </div>
        </div>
      </div>
      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-10">
        <div className="flex flex-col gap-10">
          {/* Accounting */}
          <div className="flex justify-space-between items-center gap-5">
            <div className="flex flex-1">
              <img
                src="../../images/Home/accounting.jpg"
                alt="about banner of piusa"
                className="w-full h-full rounded-sm drop-shadow-xl p-5"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <h1 className={styles.h1}>{t("accounting-title")}</h1>
              <h2 className={styles.h2}>{t("accounting-sub")}</h2>
              <p className={styles.text}>{t("accounting-text")}</p>
            </div>
          </div>
          {/* Company Structuring */}
          <div className="flex flex-row-reverse justify-space-between items-center gap-5">
            <div className="flex flex-1">
              <img
                src="../../images/Home/structuring.jpg"
                alt="about banner of piusa"
                className="w-full h-full rounded-sm drop-shadow-xl p-5"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <h1 className={styles.h1}>{t("company-title")}</h1>
              <p className={styles.text}>{t("company-text")}</p>
            </div>
          </div>
          {/* Property Management */}
          <div className="flex justify-space-between items-center gap-5">
            <div className="flex flex-1">
              <img
                src="../../images/Home/property.jpg"
                alt="about banner of piusa"
                className="w-full h-full rounded-sm drop-shadow-xl p-5"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <h1 className={styles.h1}>{t("property-title")}</h1>
              <h2 className={styles.h2}>{t("property-sub")}</h2>
              <p className={styles.text}>{t("property-text")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
