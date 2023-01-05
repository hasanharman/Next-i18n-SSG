import React from "react";
import Image from "next/image";
import i18nextConfig from "../next-i18next.config";
import { useRouter } from "next/router";
// import Link from "../components/Link";
import { Timestamp } from "firebase/firestore";
import Link from "../components/Link";

export default function MediaCard(props) {
  const mediaProps = props.media;
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const formatDate = (dateString) => {
    return new Date(Timestamp.now().seconds * 1000).toLocaleDateString();
  };

  const truncate = (text) => {
    return text.length > 200 ? text.substring(0, 100) + "..." : text;
  };

  return (
    <div>
      {currentLocale == "en" && (
        <div className="w-[350px]">
          <Image
            className="w-[350px] h-[200px] object-cover rounded-t-md shadow-xl"
            src={mediaProps.coverImage}
            width={600}
            height={300}
            alt=""
          />
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[250px]">
            <p className="text-xl font-montserrat">
              {truncate(mediaProps?.en?.title)}
            </p>
            <p className="font-light font-montserrat">
              {truncate(mediaProps?.en?.summary)}
            </p>
            <div className="flex justify-between">
              <p className="font-light text-sm">
                {formatDate(mediaProps.timestamp)}
              </p>
              <Link
                // href={`/media/page?id=${mediaProps.id}`}
                // href={`/media/${mediaProps.id}`}
                // as="/media/${mediaProps.id}"
                // as={`/media/${post.slug}`}
                className="text-sm text-right text-sky-800 hover:text-sky-500"
                href={`/media/slug=${mediaProps?.id}`}
                as={`/media/${mediaProps?.id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      )}
      {currentLocale == "es" && (
        <div className="w-[350px]">
          <Image
            className="w-[350px] h-[200px] object-cover rounded-t-md shadow-xl"
            src={mediaProps.coverImage}
            width={600}
            height={300}
            alt=""
          />
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[250px]">
            <p className="text-xl font-bold font-montserrat">
              {truncate(mediaProps?.es?.title)}
            </p>
            <p className="font-light font-montserrat">
              {truncate(mediaProps?.es?.summary)}
            </p>
            <Link
              href={`/media/${mediaProps.id}`}
              className="text-sm text-right text-sky-800 hover:text-sky-500"
            >
              Read More
            </Link>
          </div>
        </div>
      )}
      {currentLocale == "pr" && (
        <div className="w-[350px]">
          <Image
            className="w-[350px] h-[200px] object-cover rounded-t-md shadow-xl"
            src={mediaProps.coverImage}
            width={600}
            height={300}
            alt=""
          />
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[250px]">
            <p className="text-xl font-bold font-montserrat">
              {truncate(mediaProps?.pr?.title)}
            </p>
            <p className="font-light font-montserrat">
              {truncate(mediaProps?.pr?.summary)}
            </p>
            <Link
              href={`/media/${mediaProps.id}`}
              className="text-sm text-right text-sky-800 hover:text-sky-500"
            >
              Read More
            </Link>
          </div>
        </div>
      )}
      {currentLocale == "tr" && (
        <div className="w-[350px]">
          <Image
            className="w-[350px] h-[200px] object-cover rounded-t-md shadow-xl"
            src={mediaProps.coverImage}
            width={600}
            height={300}
            alt=""
          />
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[250px]">
            <p className="text-xl font-bold font-montserrat">
              {truncate(mediaProps?.tr?.title)}
            </p>
            <p className="font-light font-montserrat">
              {truncate(mediaProps?.tr?.summary)}
            </p>
            <Link
              href={`/media/${mediaProps.id}`}
              className="text-sm text-right text-sky-800 hover:text-sky-500"
            >
              Devamını Oku
            </Link>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
