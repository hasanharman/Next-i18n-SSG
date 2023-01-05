import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const styles = {
  h1: "text-3xl font-playflair mb-3",
  text: "font-light font-montserrat mb-2",
};

const Testimonials = () => {
  const { t } = useTranslation(["common"]);

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/About/banner.jpeg')] bg-cover bg-top">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("testimonials-title")}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto py-10">
        <figure class="flex flex-col items-center justify-center p-8 text-center">
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 class="text-lg font-semibold text-gray-900">
              Very easy this was to integrate
            </h3>
            <p class="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-gray-500">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testimonials;

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
