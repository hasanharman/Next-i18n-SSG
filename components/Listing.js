import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";

const styles = {
  h1: "text-4xl font-bold font-playflair",
  h3: "text-xl font-light	font-montserrat",
  head: "font-bold text-xl font-playflair",
  text: "font-light font-montserrat",
  listingImage: "w-full object-contain rounded-sm drop-shadow-xl",
  outlineButton:
    "border border-black px-4 py-2 hover:bg-black hover:text-white",
  listItem: "font-light leading-6",
};

export default function Listing(props) {
  const houseProps = props.house;
  const { t } = useTranslation(["houses", "common"]);

  return (
    <div className="w-full flex flex-row justify-between items-center flex-wrap lg:flex-nowrap px-5 lg:px-0 gap-5 mt-5 mb-10">
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className={styles.outlineButton}>
          <h3 className={styles.h3}>
            {t("sale")} ${houseProps.price}
          </h3>
        </div>
        <h1 className={styles.h1}>{houseProps.name}</h1>
        <div className="flex gap-10">
          <div className="flex flex-col gap-1">
            <p className="mb-1">
              <b>{t("properties")}</b>
            </p>
            <ul className={styles.listItem}>
              <li>{t("gross-rent")}:</li>
              <li>{t("prop-management")}:</li>
              <li>{t("prop-tax")}:</li>
              <li>{t("prop-insuarence")}:</li>
              <li>{t("net-prof")}:</li>
              <li>{t("net-prof-percent")}:</li>
              <li>{t("roi")}:</li>
            </ul>
          </div>
          <div>
            <p className="mb-1">
              <b>{t("montly")}</b>
            </p>
            <ul className={styles.listItem}>
              <li>${houseProps.montly.rent}</li>
              <li>${houseProps.montly.management}</li>
              <li>${houseProps.montly.tax}</li>
              <li>${houseProps.montly.insuarence}</li>
              <li>${houseProps.montly.profit}</li>
              <li> {houseProps.montly.percentProfit}%</li>
              <li> {houseProps.montly.roi}</li>
            </ul>
          </div>
          <div>
            <p className="mb-1">
              <b>{t("yearly")}</b>
            </p>
            <ul className={styles.listItem}>
              <li>${houseProps.yearly.rent}</li>
              <li>${houseProps.yearly.management}</li>
              <li>${houseProps.yearly.tax}</li>
              <li>${houseProps.yearly.insuarence}</li>
              <li>${houseProps.yearly.profit}</li>
              <li> {houseProps.yearly.percentProfit}%</li>
              <li> {houseProps.yearly.roi}</li>
            </ul>
          </div>
        </div>
        <div className="flex divide-x gap-3">
                <div className="flex items-center gap-3 font-light">
                  <BiBed className="text-2xl" />{" "}
                  {houseProps.bed == 1
                    ? `${houseProps.bed} Bedroom`
                    : `${houseProps.bed} Bedrooms`}
                </div>
                <div className="flex items-center gap-3 font-light pl-3">
                  <BiBath className="text-2xl" />{" "}
                  {houseProps.bath == 1
                    ? `${houseProps.bath} Bathroom`
                    : `${houseProps.bath} Bathrooms`}
                </div>
              </div>
      </div>
      <div className="flex flex-1">
        <Image
          src={houseProps.img.src}
          width={300}
          height={300}
          alt="House Image"
          className={styles.listingImage}
        />
      </div>
    </div>
  );
}
