import { useEffect, useState } from "react";
import { auth, db } from "../../../../lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { useRouter } from "next/router";
import Link from "next/link";

function Dashboard() {
  const router = useRouter();

  const [user, loading] = useAuthState(auth);
  const [contacts, setContacts] = useState([]);
  const [medias, setMedias] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [admins, setAdmins] = useState([]);

  async function getContacts() {
    const collectionRef = collection(db, "contacts");
    const q = query(collectionRef, orderBy("timestamp", "desc"), limit(10));
    const unsub = onSnapshot(q, (snapshot) => {
      setContacts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }
  async function getMedias() {
    const collectionRef = collection(db, "medias");
    const q = query(collectionRef, orderBy("publishDate", "desc"), limit(10));
    const unsub = onSnapshot(q, (snapshot) => {
      setMedias(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }
  async function getBlogs() {
    const collectionRef = collection(db, "blogs");
    const q = query(collectionRef, orderBy("publishDate", "desc"), limit(10));
    const unsub = onSnapshot(q, (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }

  async function getAdmins() {
    console.log("lol");
  }

  const logout = () => {
    signOut(auth).then(() => {
      router.push("/admin");
    });
  };

  const formatDate = (dateString) => {
    return new Date(Timestamp.now().seconds * 1000).toLocaleDateString();
  };

  const truncate = (text) => {
    return text.length > 140 ? text.substring(0, 50) + "..." : text;
  };

  useEffect(() => {
    // if (!user) {
    //   router.push("/admin");
    // } else {
    //   getAdmins();
    //   getContacts();
    //   getMedias();
    // }
    getAdmins();
    getContacts();
    getMedias();
    getBlogs();
  }, []);

  return (
    <div>
      <div className="w-full h-[14vh] bg-gray-800"></div>
      <div className="bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3 pt-10 pb-3">
            <div className="flex flex-col gap-3">
              {/* UserCard */}
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Welcome! {user?.email}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here you can edit users, medias and contacts using this panel.
                  Before edit anything.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read Docs
                  </a>
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Admin List
                  </h5>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    View all
                  </a>
                </div>
                <div className="flow-root">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $320
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $3467
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $67
                        </div>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $367
                        </div>
                      </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          $2367
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contacts */}
            <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Messages
                </h5>
                <Link
                  href="/admin/dashboard/contact"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </Link>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {contacts?.map((contact) => (
                    <div key={contact.timestamp}>
                      <li className="py-3 sm:py-4" key={contact.timestamp}>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {contact.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {contact.email}
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                            {formatDate(contact.timestamp)}
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            {/* Medias */}
            <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Latest Medias
                </h5>
                <Link
                  href="/admin/dashboard/media"
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  View all
                </Link>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {medias.map((media) => (
                    <div key={media.id}>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {media.en.title}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {truncate(media.en.summary)}
                            </p>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto pb-5">
          <div className="w-full max-w-xl p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Latest Blog Posts
              </h5>
              <Link
                href="/admin/dashboard/blog"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </Link>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                {blogs.map((blogs) => (
                  <div key={blogs.id}>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {blogs.en.title}
                          </p>
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
