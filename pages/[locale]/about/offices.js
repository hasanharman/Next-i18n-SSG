import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

const styles = {
  h1: "text-3xl font-playflair mb-3",
  text: "font-light font-montserrat mb-2",
};

const Offices = () => {
  const { t } = useTranslation(["about", "common"]);

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[70vh] bg-[url('../public/images/About/team.jpg')] bg-cover bg-center">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("int-offices")}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto py-10">
        {/* Turkey Office */}
        <div className="flex items-center flex-col mb-5">
          <h1 className="font-montserrat text-3xl mb-5">
            {t("turkey-office")}
          </h1>
          <div class="flex gap-5">
            {/* Person 1 */}
            <div class="text-center text-gray-500">
              <img
                class="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
                src="../../../images/About/ElifBayirli.jpeg"
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {t("turkey-person-1")}
              </h3>
              <p>{t("turkey-title-1")}</p>
            </div>
            {/* Person 2 */}
            <div class="text-center text-gray-500">
              <img
                class="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
                src="../../../images/About/avatar.webp"
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {t("turkey-person-2")}
              </h3>
              <p>{t("turkey-title-2")}</p>
            </div>
          </div>
        </div>
        {/* Dominic Office */}
        <div className="flex items-center flex-col mb-5">
          <h1 className="font-montserrat text-3xl mb-5">
            {t("dominic-office")}
          </h1>
          <div class="flex gap-5">
            {/* Person 1 */}
            <div class="text-center text-gray-500">
              <img
                class="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
                src="../../../images/About/GUSTAVOGUZMAN.png"
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {t("dominic-person-1")}
              </h3>
              <p>{t("dominic-title-1")}</p>
            </div>
          </div>
        </div>
        {/* Mexico Office */}
        <div className="flex items-center flex-col mb-5">
          <h1 className="font-montserrat text-3xl mb-5">
            {t("mexico-office")}
          </h1>
          <div class="flex gap-5">
            {/* Person 1 */}
            <div class="text-center text-gray-500">
              <img
                class="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
                src="../../../images/About/LUIS.png"
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {t("mexico-person-1")}
              </h3>
              <p>{t("mexico-title-1")}</p>
            </div>
            {/* Person 2 */}
            <div class="text-center text-gray-500">
              <img
                class="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
                src="../../../images/About/EVA.png"
                alt="Bonnie Avatar"
              />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
                {t("mexico-person-2")}
              </h3>
              <p>{t("mexico-title-2")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offices;

const getStaticProps = makeStaticProps(["about", "common"]);
export { getStaticPaths, getStaticProps };
