import Link from "../../components/Link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useRouter } from "next/router";

import { Banner } from "../../components/Banner";
import Slider from "../../components/Slider";
import MediaCard from "../../components/MediaCard";
import ServicesSlider from "../../components/ServicesSlider";

const styles = {
  h1: "text-5xl font-bold font-playflair",
  h3: "text-xl font-light	font-montserrat",
  head: "font-md text-xl font-montserrat",
  text: "font-light font-montserrat",
  listingImage: "w-[100vw] object-contain",
  outlineButton:
    "border border-black px-4 py-2 hover:bg-black hover:text-white",
  activeTab:
    "inline-block rounded-sm py-2 px-4 bg-black hover:bg-gray-800 text-white",
  regularTab:
    "inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4",
};

const Homepage = () => {
  const { t } = useTranslation("common");
  const [allNews, setAllNews] = useState([]);
  const router =  useRouter();

  const getNews = async () => {
    const collectionRef = collection(db, "medias");
    const q = query(collectionRef, orderBy("publishDate", "desc"), limit(3));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllNews(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Banner />
      <div className="max-w-5xl mx-auto my-5">
        {/* Featured Listings Section */}
        <h1 className="text-5xl font-bold text-center font-playflair">
          SAMPLE HOUSES
        </h1>
        <Slider />
        {/* Services Section */}

        <section className="py-10">
          <p className="mb-3 text-xl font-light text-center font-montserrat">
            {t("servicesSub")}
          </p>
          <h1 className="mb-3 text-5xl font-bold text-center font-playflair">
            {t("servicesTitle")}
          </h1>
          <ServicesSlider />
        </section>
        {/* Media Section */}
        <section className="flex flex-col gap-5 my-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-3 text-5xl font-bold font-playflair">
              {t("mediaTitle")}
            </h1>
            <p className="text-xl font-light font-montserrat">{t("mediaSub")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-5 lg:flex-nowrap">
            {allNews.map((media) => (
              <MediaCard key={media.id} media={media} linkPrefix={`/${router.query.locale}/media/news`} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/media"
              className="px-4 py-2 text-center border border-black hover:bg-black hover:text-white"
            >
              {t("seeAll")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;

const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
