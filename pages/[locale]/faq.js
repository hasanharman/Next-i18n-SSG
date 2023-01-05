import Link from "../../components/Link";

import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { Container } from "../../components/Container";
import Accordion from "../../components/Accordion";
import LinkComponent from "../../components/Link";

const Faq = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/Faq/banner.jpg')] bg-cover bg-top">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("faq-title")}
          </div>
        </div>
      </div>
      {/* Content Section */}
      <section className="max-w-5xl mx-auto py-10">
        <p className="font-montserrat text-xl text-gray-500 mb-5">
          Here you can find answers to many questions. However, if your question
          is not here or unclear, do not hesitate to
          <Link href="/contact" className="underline ml-1">contact us</Link>
        </p>

        {[...Array(17)].map((x, i) => (
          <Accordion
            key={i}
            question={t(`faq-q-${i}`)}
            answer={t(`faq-a-${i}`)}
          />
        ))}
      </section>
    </div>
  );
};

export default Faq;

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
