import { useState } from "react";
import { auth, db, storage } from "../../lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const styles = {
  activeTab:
    "inline-block w-full p-4 bg-sky-50 hover:bg-sky-100 focus:outline-none dark:bg-sky-700 dark:hover:bg-sky-600",
  regularTab:
    "inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600",
};

function EditModal({ setOpenEdit, media }) {
  const [selectedLang, setSelectedLang] = useState("en");

  const [coverImage, setCoverImage] = useState(media?.coverImage);
  const [source, setSource] = useState(media?.source);
  const [titleEN, setTitleEN] = useState(media?.en?.title || "");
  const [summaryEN, setSummaryEN] = useState(media?.en?.summary || "");
  const [titleES, setTitleES] = useState(media?.es?.title || "");
  const [summaryES, setSummaryES] = useState(media?.es?.summary || "");
  const [titlePR, setTitlePR] = useState(media?.pr?.title || "");
  const [summaryPR, setSummaryPR] = useState(media?.pr?.summary || "");
  const [titleTR, setTitleTR] = useState(media?.tr?.title || "");
  const [summaryTR, setSummaryTR] = useState(media?.tr?.summary || "");

  async function updateImage(event) {
    event.preventDefault();

    const oldFile = ref(storage, coverImage);
    deleteObject(oldFile)
      .then(() => {
        console.log("Old File Deleted");
      })
      .catch((error) => {
        console.log(error);
      });

    const file = event.target.files[0];
    const storageRef = ref(storage, `/news/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setCoverImage(downloadURL);
        });
      }
    );
  }

  async function updateNews(event) {
    event.preventDefault();
    const docRef = doc(db, "medias", media.id);
    await updateDoc(docRef, {
      coverImage: coverImage,
      source: source,
      en: {
        title: titleEN,
        summary: summaryEN,
      },
      es: {
        title: titleES,
        summary: summaryES,
      },
      pr: {
        title: titlePR,
        summary: summaryPR,
      },
      tr: {
        title: titleTR,
        summary: summaryTR,
      },
    })
      .then(() => {
        setOpenEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="absolute top-[25%] left-[25%] bg-gray-800 w-[50vw] h-[50vh] shadow-xl rounded-md border-gray-500 border">
      <div className="flex flex-col justify-center items-center gap-1 py-5">
        <div className="flex flex-col px-10 w-full">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-white text-xl">Edit News</h1>
            <button className="text-white" onClick={() => setOpenEdit(false)}>
              X
            </button>
          </div>

          <form onSubmit={updateNews}>
            <label
              className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
              htmlFor="coverImage"
            >
              Upload file to override excisting image
            </label>
            <input
              className="mb-3 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              id="coverImage"
              type="file"
              onChange={updateImage}
            />
            <div>
              <label
                htmlFor="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Source Link of the News
              </label>
              <input
                type="text"
                id="small-input"
                value={media.source}
                onChange={(event) => setSource(event.target.value)}
                className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="w-full bg-white border shadow-md dark:bg-gray-800 dark:border-gray-700 mb-3">
                <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 sm:flex dark:divide-gray-600 dark:text-gray-400">
                  <li className="w-full">
                    <div
                      onClick={() => setSelectedLang("en")}
                      className={
                        selectedLang == "en"
                          ? `${styles.activeTab}`
                          : `${styles.regularTab}`
                      }
                    >
                      EN
                    </div>
                  </li>
                  <li className="w-full">
                    <div
                      onClick={() => setSelectedLang("es")}
                      className={
                        selectedLang == "es"
                          ? `${styles.activeTab}`
                          : `${styles.regularTab}`
                      }
                    >
                      ES
                    </div>
                  </li>
                  <li className="w-full">
                    <div
                      onClick={() => setSelectedLang("pr")}
                      className={
                        selectedLang == "pr"
                          ? `${styles.activeTab}`
                          : `${styles.regularTab}`
                      }
                    >
                      PR
                    </div>
                  </li>
                  <li className="w-full">
                    <div
                      onClick={() => setSelectedLang("tr")}
                      className={
                        selectedLang == "tr"
                          ? `${styles.activeTab}`
                          : `${styles.regularTab}`
                      }
                    >
                      TR
                    </div>
                  </li>
                </ul>
              </div>
              {/* FOR EN */}
              {selectedLang == "en" && (
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Title
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={titleEN}
                    placeholder={media?.en?.title}
                    onChange={(event) => setTitleEN(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Summary
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={summaryEN}
                    placeholder={media?.en?.summary}
                    onChange={(event) => setSummaryEN(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              )}
              {/* FOR ES */}
              {selectedLang == "es" && (
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Title
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={titleES}
                    placeholder={media?.es?.title}
                    onChange={(event) => setTitleES(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Summary
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={summaryES}
                    placeholder={media?.es?.summary}
                    onChange={(event) => setSummaryES(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              )}
              {/* FOR PR */}
              {selectedLang == "pr" && (
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Title
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={titlePR}
                    placeholder={media?.pr?.title}
                    onChange={(event) => setTitlePR(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Summary
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={summaryPR}
                    placeholder={media?.pr?.summary}
                    onChange={(event) => setSummaryPR(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              )}
              {/* FOR TR */}
              {selectedLang == "tr" && (
                <div>
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Title
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={titleTR}
                    placeholder={media?.tr?.title}
                    onChange={(event) => setTitleTR(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    htmlFor="small-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Media Summary
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    value={summaryTR}
                    placeholder={media?.tr?.summary}
                    onChange={(event) => setSummaryTR(event.target.value)}
                    className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => setOpenEdit(false)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
