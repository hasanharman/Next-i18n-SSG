import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "../components/Link";
import { useRouter } from "next/router";
import Logo from "../public/images/Logo-w.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export const Footer = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();

  return (
    <footer className="py-4 bg-black sm:py-6">
      <div className="mx-auto max-w-7xl ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image src={Logo} width={120} alt="Logo" />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Pages
              </h2>
              <ul className="font-light text-white">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/houses" className="hover:underline">
                    Houses
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/testimonials" className="hover:underline">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <Link href={`/${router.query.locale}/media?tab=news`} className="hover:underline">
                    News
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href={`/${router.query.locale}/media?tab=blog`} className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white-200 sm:mx-auto border-white-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2022{" "}
            <a href="https://flowbite.com" className="hover:underline">
              PIUSA™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-xl text-white">
              <BsFacebook />
            </a>
            <a href="#" className="text-xl text-white">
              <BsInstagram />
            </a>
            <a href="#" className="text-xl text-white">
              <BsLinkedin />
            </a>
            <a href="#" className="text-xl text-white">
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
