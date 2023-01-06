import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import i18nextConfig from "../../../../next-i18next.config";

export default function MediaDetails() {
  const router = useRouter();
  const slug = router.query?.slug;
  // const { t } = useTranslation("common");
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  const [media, setMedia] = useState();

  // const media = JSON.parse(props.media);
  console.log("slug", slug);

  async function getMediaWithId() {
    try {
      const docRef = doc(db, "medias", router.query.slug);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMedia(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("error!", error);
    }
  }

  useEffect(() => {
    getMediaWithId();
  }, []);

  if (router.isFallback) {
    return <h2>The Page is loading...</h2>; //you can add any styles or have a custom page
  }
  if (typeof media === "undefined") return <h2>The Page is loading...</h2>;

  // useEffect(() => {}, [router.query.slug, router.isReady]);

  // const mediaContent = JSON.parse(media);

  return (
    <div>
      {/* Banner */}
      <div
        style={{ backgroundImage: `url(${media?.coverImage})` }}
        className="w-full h-[60vh] saturate-[.75] bg-cover bg-center"
      >
        <div className="bg-black/[.5] p-4 w-full h-full flex items-center justify-center">
          <div className="px-5 text-5xl leading-10 tracking-wide text-center text-white lg:w-1/2 font-playflair lg:text-6xl drop-shadow-xl">
            {currentLocale == "en" && media?.en?.title}
            {currentLocale == "es" && media?.es?.title}
            {currentLocale == "pr" && media?.pr?.title}
            {currentLocale == "tr" && media?.tr?.title}
          </div>
        </div>
      </div>
      <section className="max-w-5xl py-10 mx-auto">
        {currentLocale == "en" && (
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-montserrat font-gray-900">
              {media?.en?.title}
            </h1>
            <p className="text-gray-500">{media?.en?.summary}</p>
            <i className="font-light text-gray-500"> {media?.source}</i>
            <iframe
              src={media?.videoSource}
              allowFullScreen
              height={500}
              className="rounded shadow-md"
            ></iframe>
          </div>
        )}
        {currentLocale == "es" && (
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-montserrat font-gray-900">
              {media?.es?.title}
            </h1>
            <p className="font-light">{media?.es?.summary}</p>
            <i className="font-light text-gray-500"> {media?.source}</i>
            <iframe
              src={media?.videoSource}
              allowFullScreen
              height={500}
              className="rounded shadow-md"
            ></iframe>
          </div>
        )}
        {currentLocale == "pr" && (
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-montserrat font-gray-900">
              {media?.pr?.title}
            </h1>
            <p className="font-light">{media?.pr?.summary}</p>
            <i className="font-light text-gray-500"> {media?.source}</i>
            <iframe
              src={media?.videoSource}
              allowFullScreen
              height={500}
              className="rounded shadow-md"
            ></iframe>
          </div>
        )}
        {currentLocale == "tr" && (
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-montserrat font-gray-900">
              {media?.tr?.title}
            </h1>
            <p className="font-light">{media?.tr?.summary}</p>
            <i className="font-light text-gray-500"> {media?.source}</i>
            <iframe
              src={media?.videoSource}
              allowFullScreen
              height={500}
              className="rounded shadow-md"
            ></iframe>
          </div>
        )}
      </section>
    </div>
  );
}

// export async function getStaticPaths({ locales }) {
//   const posts = await getAllNews();
//   const entries = Object.entries(posts);

//   console.log(locales);

//   // const posts = collection(db, "medias");
//   // const entries = [];
//   // const snapshot = await getDocs(posts);
//   // snapshot.forEach((doc) => {
//   //   const data = doc.data();
//   //   entries.push({ ...data });
//   // });

//   const paths = entries.map((p) =>
//     locales
//       .map((l) => ({
//         params: { slug: p.id },
//         locale: l,
//       }))
//       .flat()
//   );

//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps(context) {
//   const slug = context?.params?.slug;
//   const locale = context?.params?.locale;

//   const docRef = doc(db, "medias", slug);
//   const docSnap = await getDoc(docRef);

//   return {
//     props: {
//       media: JSON.stringify(docSnap.data()) || null,
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }
