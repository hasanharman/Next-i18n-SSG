import { useTranslation } from "next-i18next";

export const Banner = () => {
  const { t } = useTranslation("common");

  return (
    <div className="">
      <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        <div className="relative z-30 bg-black/[.45] p-4 w-full h-full flex items-center justify-center">
          <div className="lg:w-2/3 text-center text-white tracking-wide	text-5xl lg:text-6xl font-bold drop-shadow-xl animate-sliding animate-text-slide">
            {t("title")}
          </div>
        </div>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="../images/Home/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
