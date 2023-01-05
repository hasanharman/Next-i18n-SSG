import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
//These are Third party packages for smooth slideshow
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";

import HouseImage1 from "../public/images/Home/House1.jpg";
import HouseImage2 from "../public/images/Home/House2.jpg";
import HouseImage3 from "../public/images/Home/House3.jpg";

const styles = {
  h1: "text-4xl font-bold font-playflair",
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

const House1 = {
  img: HouseImage1,
  price: "120,000",
  name: "LYNDALE AVENUE",
  bed: 3,
  bath: 2,
  montly: {
    rent: "1,280",
    management: "128",
    tax: "65",
    insuarence: "54",
    profit: "1,033",
    percentProfit: "0.68",
    roi: "116",
  },
  yearly: {
    rent: "15,360",
    management: "1,536",
    tax: "780",
    insuarence: "650",
    profit: "12,394",
    percentProfit: "10.33",
    roi: "9.7",
  },
};
const House2 = {
  img: HouseImage2,
  price: "130,000",
  name: "ELMLEY AVENUE",
  bed: 1,
  bath: 1,
  montly: {
    rent: "1,280",
    management: "128",
    tax: "65",
    insuarence: "54",
    profit: "1,033",
    percentProfit: "0.68",
    roi: "116",
  },
  yearly: {
    rent: "15,360",
    management: "1,536",
    tax: "780",
    insuarence: "650",
    profit: "12,394",
    percentProfit: "10.33",
    roi: "9.7",
  },
};
const House3 = {
  img: HouseImage3,
  price: "188,000",
  name: "NEW AVENUE",
  bed: 3,
  bath: 3,
  montly: {
    rent: "1,280",
    management: "128",
    tax: "65",
    insuarence: "54",
    profit: "1,033",
    percentProfit: "0.68",
    roi: "116",
  },
  yearly: {
    rent: "15,360",
    management: "1,536",
    tax: "780",
    insuarence: "650",
    profit: "12,394",
    percentProfit: "10.33",
    roi: "9.7",
  },
};

const Slider = () => {
  const { t } = useTranslation(["houses", "common"]);

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <AiFillCaretLeft className="text-2xl" />,
    nextArrow: <AiFillCaretRight className="text-2xl" />,
  };
  return (
    <div className="my-10">
      <Fade {...zoomInProperties}>
        <div className="flex justify-center items-start gap-5 px-10">
          {/* House1 */}
          <div className="flex flex-1 flex-col items-start gap-5">
            <button className={styles.outlineButton}>
              {t("sale")} {House1.price}
            </button>
            <h1 className={styles.h1}>{House1.name}</h1>
            <img
              src={House1.img.src}
              alt="House Image"
              className="w-full h-[300px] object-cover rounded-sm drop-shadow-xl"
            />
            <h3 className={styles.h3}>
              <b>{t("m-net-prof")}:</b> ${House1.montly.profit}
            </h3>
            <h3 className={styles.h3}>
              <b>{t("y-net-prof")}:</b> ${House1.yearly.profit}
            </h3>
            <div className="flex divide-x gap-3">
              <div className="flex items-center gap-3 font-light">
                <BiBed className="text-2xl" />{" "}
                {House1.bed == 1
                  ? `${House1.bed} Bedroom`
                  : `${House1.bed} Bedrooms`}
              </div>
              <div className="flex items-center gap-3 font-light pl-3">
                <BiBath className="text-2xl" />{" "}
                {House1.bath == 1
                  ? `${House1.bath} Bathroom`
                  : `${House1.bath} Bathrooms`}
              </div>
            </div>
          </div>
          {/* House2 */}
          <div className="flex flex-1 flex-col items-start gap-5">
            <button className={styles.outlineButton}>
              {t("sale")} {House2.price}
            </button>
            <h1 className={styles.h1}>{House2.name}</h1>
            <img
              src={House2.img.src}
              alt="House Image"
              className="w-full h-[300px] object-cover rounded-sm drop-shadow-xl"
            />
            <h3 className={styles.h3}>
              <b>{t("m-net-prof")}:</b> ${House2.montly.profit}
            </h3>
            <h3 className={styles.h3}>
              <b>{t("y-net-prof")}:</b> ${House2.yearly.profit}
            </h3>
            <div className="flex divide-x gap-3">
              <div className="flex items-center gap-3 font-light">
                <BiBed className="text-2xl" />{" "}
                {House2.bed == 1
                  ? `${House2.bed} Bedroom`
                  : `${House2.bed} Bedrooms`}
              </div>
              <div className="flex items-center gap-3 font-light pl-3">
                <BiBath className="text-2xl" />{" "}
                {House2.bath == 1
                  ? `${House2.bath} Bathroom`
                  : `${House2.bath} Bathrooms`}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start gap-5 px-10">
          {/* House3 */}
          <div className="flex flex-1 flex-col items-start gap-5">
            <button className={styles.outlineButton}>
              {t("sale")} {House3.price}
            </button>
            <h1 className={styles.h1}>{House3.name}</h1>
            <img
              src={House3.img.src}
              alt="House Image"
              className="w-full h-[300px] object-cover rounded-sm drop-shadow-xl"
            />
            <h3 className={styles.h3}>
              <b>{t("m-net-prof")}:</b> ${House3.montly.profit}
            </h3>
            <h3 className={styles.h3}>
              <b>{t("y-net-prof")}:</b> ${House3.yearly.profit}
            </h3>
            <div className="flex divide-x gap-3">
              <div className="flex items-center gap-3 font-light">
                <BiBed className="text-2xl" />{" "}
                {House3.bed == 1
                  ? `${House3.bed} Bedroom`
                  : `${House3.bed} Bedrooms`}
              </div>
              <div className="flex items-center gap-3 font-light pl-3">
                <BiBath className="text-2xl" />{" "}
                {House3.bath == 1
                  ? `${House3.bath} Bathroom`
                  : `${House3.bath} Bathrooms`}
              </div>
            </div>
          </div>
          {/* House4 */}
          <div className="flex flex-1 flex-col items-start gap-5">
            <button className={styles.outlineButton}>
              {t("sale")} {House1.price}
            </button>
            <h1 className={styles.h1}>{House1.name}</h1>
            <img
              src={House1.img.src}
              alt="House Image"
              className="w-full h-[300px] object-cover rounded-sm drop-shadow-xl"
            />
            <h3 className={styles.h3}>
              <b>{t("m-net-prof")}:</b> ${House1.montly.profit}
            </h3>
            <h3 className={styles.h3}>
              <b>{t("y-net-prof")}:</b> ${House1.yearly.profit}
            </h3>
            <div className="flex divide-x gap-3">
              <div className="flex items-center gap-3 font-light">
                <BiBed className="text-2xl" />{" "}
                {House1.bed == 1
                  ? `${House1.bed} Bedroom`
                  : `${House1.bed} Bedrooms`}
              </div>
              <div className="flex items-center gap-3 font-light pl-3">
                <BiBath className="text-2xl" />{" "}
                {House1.bath == 1
                  ? `${House1.bath} Bathroom`
                  : `${House1.bath} Bathrooms`}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slider;
