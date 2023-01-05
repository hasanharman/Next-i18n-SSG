import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

const styles = {
  h1: "text-4xl font-bold font-playflair mb-3",
  text: "font-light font-montserrat mb-2",
};

const About = () => {
  const { t } = useTranslation(["about", "common"]);

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/About/banner.jpeg')] bg-cover bg-center">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("about-title")}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto py-10">
      <div className="flex justify-space-between items-center gap-5">
        <div className="flex flex-1">
          <img
            src="../../images/About/about-main.JPG"
            alt="about banner of piusa"
            className="w-full h-full px-5 rounded-sm drop-shadow-xl saturate-[.75] hover:saturate-100 ease-in duration-500"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div>
            <h1 className={styles.h1}>{t("who")}</h1>
            <p className={styles.text}>{t("who-text-1")}</p>
            <p className={styles.text}>{t("who-text-2")}</p>
          </div>
          <div>
            <h1 className={styles.h1}>{t("mission")}</h1>
          </div>
          <p className={styles.text}>{t("mission-text")}</p>
          <div>
            <h1 className={styles.h1}>{t("vision")}</h1>
            <p className={styles.text}>{t("vision-text")}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

const getStaticProps = makeStaticProps(["about", "common"]);
export { getStaticPaths, getStaticProps };
