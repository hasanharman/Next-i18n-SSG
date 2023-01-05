import React from "react";
import { useTranslation } from "next-i18next";
//These are Third party packages for smooth slideshow
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

import Office1 from "../public/images/Home/miami.jpg";
import Office3 from "../public/images/Home/mexico.jpg";
import Office4 from "../public/images/Home/turkey.jpg";
import Office5 from "../public/images/Home/dominic.jpg";
import Image from "next/image";

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

const OfficeSlider = () => {
  const { t } = useTranslation("common");

  const zoomInProperties = {
    indicators: true,
    autoplay: false,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <AiFillCaretLeft className="text-2xl" />,
    nextArrow: <AiFillCaretRight className="text-2xl" />,
  };

  return (
    <div className="my-10">
      <Fade {...zoomInProperties}>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Office1}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <h1 className="text-xl font-bold">HEADQUARTERS</h1>
            <div className="px-4 py-2 border border-black">MIAMI</div>
            <a
              href="tel:+13059083899"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlinePhone className="text-2xl" /> +1.305.908.3899
            </a>
            <a
              href="https://wa.me/+13059425316"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineWhatsApp className="text-2xl" /> +1.305.942.5316
            </a>
            <a
              href="mailto:office@propertyinvestusa.com"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineMail className="text-2xl" />{" "}
              office@propertyinvestusa.com
            </a>
            <a
              href="https://www.google.com/maps/place/Property+Invest+USA/@25.7649598,-80.1914436,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b779cfebe8b5:0xc76879457a34c681!8m2!3d25.7649598!4d-80.1914436"
              target="_blank"
              className="flex items-center gap-3"
            >
              <SlLocationPin className="text-2xl" /> 848 BRICKELL AVE PH1,
              MIAMI, FL 33131
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Office4}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <div className="px-4 py-2 border border-black">{t("turkey")}</div>
            <a
              href="tel:+905320588036"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlinePhone className="text-2xl" /> +90.532.058.8036
            </a>
            <a
              href="https://wa.me/+905320588036"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineWhatsApp className="text-2xl" /> +905320588036
            </a>
            <a
              href="mailto:officetr@propertyinvestusa.com"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineMail className="text-2xl" />{" "}
              officetr@propertyinvestusa.com
            </a>
            <a
              href="https://www.google.com/maps/search/Zorlu+Center+R2+Tower,+Teras+Evler+K:2+D:211,+Be%C5%9Fikta%C5%9F,+%C4%B0stanbul/@41.0430407,28.7851415,12z/data=!3m1!4b1"
              target="_blank"
              className="flex items-center gap-3"
            >
              <SlLocationPin className="text-2xl" />
              ZORLU CENTER R2 TOWER, TERAS EVLER K:2 D:211, BEŞIKTAŞ, İSTANBUL
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Office3}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <div className="px-4 py-2 border border-black">{t("mexico")}</div>
            <a
              href="tel:+525547444872"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlinePhone className="text-2xl" /> +52.55.4744.4872 / 4879 /
              4880
            </a>
            <a
              href="https://wa.me/+525563320754"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineWhatsApp className="text-2xl" /> +52.55.6332.0754
            </a>
            <a
              href="mailto:mexico@propertyinvestusa.com"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineMail className="text-2xl" />{" "}
              mexico@propertyinvestusa.com
            </a>
            <a
              href="https://www.google.com/maps/place/Prado+Sur+274-piso+6,+Lomas+-+Virreyes,+Lomas+de+Chapultepec,+Miguel+Hidalgo,+11000+Ciudad+de+M%C3%A9xico,+CDMX,+Meksika/@19.4269641,-99.207255,17z/data=!3m1!4b1!4m5!3m4!1s0x85d201f5cd8fb213:0x76a3755339d9e33c!8m2!3d19.4269647!4d-99.2072501"
              target="_blank"
              className="flex items-center gap-3"
            >
              <SlLocationPin className="text-2xl" />
              PRADO SUR 274 PISO 6, LOMAS DE CHAPULTEPEC, 11000, CDMX, MEXICO.
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center flex-wrap lg:flex-nowrap gap-5 px-10">
          <div>
            <Image
              src={Office5}
              alt="House Image"
              className="w-[475px] h-[350px] object-cover rounded-sm drop-shadow-xl"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-5">
            <div className="px-4 py-2 border border-black">{t("dominic")}</div>
            <a
              href="tel:+18097700161"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlinePhone className="text-2xl" /> +1.809.770.0161
            </a>
            {/* <a
              href="https://wa.me/+905320588036"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineWhatsApp className="text-2xl" /> +905320588036
            </a> */}
            <a
              href="mailto:dr@propertyinvestusa.com"
              target="_blank"
              className="flex items-center gap-3"
            >
              <AiOutlineMail className="text-2xl" /> dr@propertyinvestusa.com
            </a>
            <a
              href="https://www.google.com/maps/place/Novo+Centro/@18.4732094,-69.9334432,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf89dd603e9501:0x80f0d676dcd7ad3!8m2!3d18.4732043!4d-69.9312545"
              target="_blank"
              className="flex items-center gap-3"
            >
              <SlLocationPin className="text-2xl" />
              AV. LOPE DE VEGA NO. 29, TORRE NOVO-CENTRO, SUITE A-17, STO. DGO.
              10125, D.R.
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default OfficeSlider;
