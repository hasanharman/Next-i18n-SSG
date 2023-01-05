import { useTranslation } from "next-i18next";
import { useState } from "react";
import PersonInfoModal from "../../../components/personInfoModal";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

const styles = {
  h1: "text-3xl font-playflair mb-3",
  text: "font-light font-montserrat mb-2",
};

const Ourteam = () => {
  const [openAdd, setOpenAdd] = useState();
  const [person, setPerson] = useState({});

  const { t } = useTranslation(["about", "common"]);

  const Person1 = {
    photo: "../../../images/About/CengizBayirli.jpg",
    name: t("person-1"),
    title: t("title-1"),
    summary: t("summary-1"),
  };

  function openDetails() {
    setOpenAdd(true);
    setPerson(Person1);
  }

  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[40vh]  bg-[url('../public/images/About/banner.jpeg')] bg-center">
        <div className="bg-black/[.33] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 lg:w-1/2 text-center text-white font-playflair leading-10 tracking-wide	text-5xl lg:text-6xl  drop-shadow-xl">
            {t("our-team")}
          </div>
        </div>
      </div>
      {/* Content */}
      <section className="max-w-5xl mx-auto my-10">
        <p className="font-light text-gray-500 sm:text-xl mb-10">
          Whether you are buying or selling a home, land or commercial property,
          the team at Property Invest USA can help you navigate our unique real
          estate market with confidence and ease. Our carefully selected agents
          possess historical and current market knowledge, extensive sales and
          marketing experience, proven track records and an unwavering
          commitment to client satisfaction — the hallmark of our firm.
        </p>
        <div className="flex justify-center gap-10 py-5">
          {/* Person 1 */}

          <div className="text-center text-gray-500">
            <img
              className="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
              src="../../../images/About/CengizBayirli.jpg"
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
              {t("person-1")}
            </h3>
            <p>{t("title-1")}</p>
            <button
              onClick={openDetails}
              className="bg-transparent border-2 border-black py-1 px-3 mt-3 text-black hover:bg-black hover:text-white"
            >
              More Info
            </button>
          </div>
          {openAdd ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Modal Title</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        I always felt like I could do anything. That’s the main
                        thing people are controlled by! Thoughts- their
                        perception of themselves! They're slowed down by their
                        perception of themselves. If you're taught you can’t do
                        anything, you won’t do anything. I was taught I could do
                        everything.
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {/* Person 2 */}
          <div className="text-center text-gray-500">
            <img
              className="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
              src="../../../images/About/GiovannaGuzman.jpg"
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
              {t("person-2")}
            </h3>
            <p>{t("title-2")}</p>
          </div>
        </div>
        <div className="flex justify-center gap-10 py-5">
          {/* Person 3 */}
          <div className="text-center text-gray-500">
            <img
              className="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
              src="../../../images/About/AshleyAlvarez.jpg"
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
              {t("person-3")}
            </h3>
            <p>{t("title-3")}</p>
          </div>
          {/* Person 4 */}
          <div className="text-center text-gray-500">
            <img
              className="mx-auto mb-4 h-64 w-64 rounded-full object-cover object-top"
              src="../../../images/About/DavidGarcia.jpg"
              alt="Bonnie Avatar"
            />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
              {t("person-5")}
            </h3>
            <p>{t("title-5")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourteam;

const getStaticProps = makeStaticProps(["about", "common"]);
export { getStaticPaths, getStaticProps };
