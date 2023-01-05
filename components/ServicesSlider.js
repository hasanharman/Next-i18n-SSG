import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
//These are Third party packages for smooth slideshow
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import Property from "../public/images/Home/property.jpg";
import Accounting from "../public/images/Home/accounting.jpg";
import Structure from "../public/images/Home/structuring.jpg";

const styles = {
  h1: "text-5xl font-bold font-playflair",
  h3: "text-xl font-light	font-montserrat",
  head: "text-2xl  font-montserrat",
  text: "font-light text-xl font-montserrat",
  listingImage: "w-[100vw] object-contain",
  outlineButton:
    "border border-black px-4 py-2 hover:bg-black hover:text-white",
  activeTab:
    "inline-block rounded-sm py-2 px-4 bg-black hover:bg-gray-800 text-white",
  regularTab:
    "inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200 py-2 px-4",
};

const ServicesSlider = () => {
  const { t } = useTranslation("common");

  const zoomInProperties = {
    indicators: true,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <AiFillCaretLeft className="text-2xl" />,
    nextArrow: <AiFillCaretRight className="text-2xl" />,
  };

  return (
    <div className="mt-5">
      <Fade {...zoomInProperties}>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Property}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <h1 className={styles.head}>{t("service1title")}​</h1>
            <p className={styles.text}> {t("service1text")}</p>
          </div>
        </div>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Accounting}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <h1 className={styles.head}>{t("service2title")}​</h1>
            <p className={styles.text}>{t("service2text")}</p>
          </div>
        </div>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Structure}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <h1 className={styles.head}>{t("service3title")}​</h1>
            <p className={styles.text}>{t("service3text")}</p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ServicesSlider;
