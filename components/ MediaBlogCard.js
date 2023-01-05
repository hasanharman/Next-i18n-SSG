import React from "react";
import Image from "next/image";
import i18nextConfig from "../next-i18next.config";
import { useRouter } from "next/router";
import { Timestamp } from "firebase/firestore";
import Link from "../components/Link";

function MediaBlogCard(props) {
  const mediaProps = props.blog;
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const formatDate = (dateString) => {
    return new Date(Timestamp.now().seconds * 1000).toLocaleDateString();
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
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[100px]">
            <p className="text-xl font-montserrat">{mediaProps?.en?.title}</p>
            <div className="flex justify-between">
              <p className="font-light text-sm">
                {formatDate(mediaProps.timestamp)}
              </p>
              <Link
                href={`/media/blog/${mediaProps.id}`}
                className="text-sm text-right text-sky-800 hover:text-sky-500"
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
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[100px]">
            <p className="text-xl font-bold font-montserrat">
              {mediaProps?.es?.title}
            </p>
            <Link
              href={`/media/blog/${mediaProps.id}`}
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
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[100px]">
            <p className="text-xl font-bold font-montserrat">
              {mediaProps?.pr?.title}
            </p>
            <Link
              href={`/media/blog/${mediaProps.id}`}
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
          <div className="bg-gray-100 p-5 flex flex-col justify-between gap-1 rounded-b-md shadow-md min-h-[100px]">
            <p className="text-xl font-bold font-montserrat">
              {mediaProps?.tr?.title}
            </p>
            <Link
              href={`/media/blog/${mediaProps.id}`}
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

export default MediaBlogCard;
