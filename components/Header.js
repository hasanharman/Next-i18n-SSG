import Head from "next/head";
import Image from "next/image";
import Link from "../components/Link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Logo from "../public/images/Logo-w.png";
import LanguageSwitchLink from "./LanguageSwitchLink";
import i18nextConfig from "../next-i18next.config";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

const styles = {
  topLevelAdj: "absolute w-full z-50",
  container: "max-w-7xl mx-auto flex justify-between items-center lg:items-center lg:py-5",
  logo: "object-contain",
  menuItems: "lg:flex items-center gap-5 hidden",
  menuItem: "group text-white transition duration-300",
  underline:
    "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white",
  outlineButton: "px-6 py-2 border-black border-2",
  mobileMenu: "lg:hidden",
};

export const Header = ({
  heading,
  about,
  houses,
  services,
  faq,
  media,
  contact,
  clientportal,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const [isActive, setIsActive] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const onClick = () => setIsActive(!isActive);
  const onClickMenu = () => setIsMobileMenu(!isMobileMenu);

  return (
    <div>
      <Head>
        <title>{heading}</title>
      </Head>
      <div className={styles.topLevelAdj}>
        <div className={styles.container}>
          <Link href="/">
            <Image
              src={Logo}
              width={120}
              height={100}
              alt="PIUSA logo"
              className={styles.logo}
            />
          </Link>
          <div className="lg:flex items-start gap-5 hidden">
            <Link
              href="/about"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="group relative text-white text-center"
            >
              {about}
              <span className={styles.underline}></span>
              {isShown && (
                <div className="group-hover:block absolute hidden h-auto ">
                  <ul className="flex flex-col mt-2 px-2 bg-white/30 shadow text-left whitespace-nowrap">
                    <Link
                      className="py-1 hover:text-sky-700"
                      href="/about/our-team"
                    >
                      OUR TEAM
                    </Link>
                    <Link
                      className="py-1 hover:text-sky-700"
                      href="/about/offices"
                    >
                      INTERNATIONAL OFFICES
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link href="/houses" className={styles.menuItem}>
              {houses}
              <span className={styles.underline}></span>
            </Link>
            <Link href="/services" className={styles.menuItem}>
              {services}
              <span className={styles.underline}></span>
            </Link>
            <Link
              href="/media"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="group relative text-white text-center"
            >
              {media}
              <span className={styles.underline}></span>
              {isShown && (
                <div className="group-hover:block absolute hidden h-auto ">
                  <ul className="flex flex-col mt-2 px-2 bg-white/30 shadow text-left whitespace-nowrap">
                    <Link
                      className="py-1 hover:text-sky-700"
                      href="/media/news"
                    >
                      NEWS
                    </Link>
                    <Link
                      className="py-1 hover:text-sky-700"
                      href="/media/blog"
                    >
                      BLOG
                    </Link>
                  </ul>
                </div>
              )}
            </Link>
            <Link href="/faq" className={styles.menuItem}>
              {faq}
              <span className={styles.underline}></span>
            </Link>
            <Link href="/contact" className={styles.menuItem}>
              {contact}
              <span className={styles.underline}></span>
            </Link>
            <Link
              href="https://propertyinvestusa.clientportal.com/#/login"
              target="_blank"
              className={styles.menuItem}
            >
              {clientportal}
              <span className={styles.underline}></span>
            </Link>
            <div
              href="/about"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className="group relative text-white text-center"
            >
              {t(`${currentLocale}`)}
              <span className={styles.underline}></span>
              {isShown && (
                <div className="group-hover:block absolute hidden h-auto -ml-5 ">
                  <ul className="mt-2 px-1 bg-white/30 shadow text-left">
                    {i18nextConfig.i18n.locales.map((locale) => {
                      if (locale === currentLocale) return null;
                      return (
                        <li
                          key={locale}
                          className="py-1 hover:text-sky-700 whitespace-nowrap"
                        >
                          <LanguageSwitchLink
                            locale={locale}
                            key={locale}
                            className="block"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={styles.mobileMenu}>
            {isMobileMenu ? (
              <AiOutlineCloseSquare
                className="text-3xl absolute right-5 top-5"
                onClick={onClickMenu}
              />
            ) : (
              <AiOutlineMenu className="text-3xl mx-10" onClick={onClickMenu} />
            )}
            {isMobileMenu ? (
              <div className="w-[300px] h-screen bg-white p-10 flex flex-col gap-3 divide-y">
                <Link href={"/about"} className={styles.menuItem}>
                  {about}
                  <span className={styles.underline}></span>
                </Link>
                <Link href={"/houses"} className={styles.menuItem}>
                  {houses}
                  <span className={styles.underline}></span>
                </Link>
                <Link href={"/services"} className={styles.menuItem}>
                  {services}
                  <span className={styles.underline}></span>
                </Link>
                <Link href={"/faq"} className={styles.menuItem}>
                  {faq}
                  <span className={styles.underline}></span>
                </Link>
                <Link href={"/media"} className={styles.menuItem}>
                  {media}
                  <span className={styles.underline}></span>
                </Link>
                <Link href={"/contact"} className={styles.menuItem}>
                  {contact}
                  <span className={styles.underline}></span>
                </Link>
                <Link
                  href="https://propertyinvestusa.clientportal.com/#/login"
                  target="_blank"
                  className={styles.menuItem}
                >
                  {clientportal}
                  <span className={styles.underline}></span>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
