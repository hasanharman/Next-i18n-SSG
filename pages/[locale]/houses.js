import Link from "../../components/Link";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import Listing from "../../components/Listing";

import House1 from "../../public/images/Home/House1.jpg";
import House2 from "../../public/images/Home/House2.jpg";
import House3 from "../../public/images/Home/House3.jpg";

const HouseInfo = [
  {
    img: House1,
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
  },
  {
    img: House2,
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
  },
];

const Houses = () => {
  const { t } = useTranslation(["houses", "common"]);

  return (
    <div>
      {/* banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/Houses/banner.jpg')] bg-cover bg-center">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("houses-title")}
          </div>
        </div>
      </div>
      {/* Content part starts here */}
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold font-playflair my-5">SAMPLE HOUSES</h1>
          {HouseInfo.map((house) => (
            <Listing key={house.name} house={house} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;

const getStaticProps = makeStaticProps(["houses", "common"]);
export { getStaticPaths, getStaticProps };
