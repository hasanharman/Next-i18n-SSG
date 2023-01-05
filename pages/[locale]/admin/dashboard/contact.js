import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { getStaticPaths, makeStaticProps } from "../../../../lib/getStatic";
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
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { BsArrowBarLeft } from "react-icons/bs";
import Link from "next/link";

function Contact() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [user, loading] = useAuthState(auth);
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    const collectionRef = collection(db, "contacts");
    const q = query(collectionRef, orderBy("timestamp", "desc"), limit(10));
    const unsub = onSnapshot(q, (snapshot) => {
      setContacts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }

  const formatDate = (dateString) => {
    return new Date(Timestamp.now().seconds * 1000).toLocaleDateString();
  };

  async function deleteMessage(id) {
    await deleteDoc(doc(db, "contacts", id));
  }

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <div className="w-full h-[14vh] bg-gray-800"></div>
      <div className="bg-gray-800">
        <div className="max-w-5xl mx-auto p-10 min-h-[70vh]">
          <div className="flex items-center gap-1 mb-5">
            <Link href="/admin/dashboard">
              <BsArrowBarLeft className="text-3xl text-white hover:text-sky-500" />
            </Link>
            <h1 className="text-4xl font-light text-white">MESSAGES</h1>
          </div>{" "}
          <div>
            {contacts.map((contact) => (
              <div key={contact.timestamp}>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="pb-3 sm:pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {contact.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {contact.email}
                        </p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {contact.subject}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {formatDate(contact.timestamp)}
                        </p>
                      </div>
                      <button className="nline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Open Message
                      </button>
                      <button
                        onClick={() => deleteMessage(contact.id)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
const getStaticProps = makeStaticProps("common");
export { getStaticPaths, getStaticProps };
