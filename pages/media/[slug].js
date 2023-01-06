import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Redirect } from "../../lib/redirect";
import nextI18nextConfig from "../../next-i18next.config";
export default Redirect;

export async function getStaticPaths() {
  const posts = collection(db, "medias");
  const entries = [];
  const snapshot = await getDocs(posts);

  snapshot.forEach((doc) => {
    const data = doc.data();
    entries.push({ ...data });
  });

  const paths = entries.map((p) => ({ params: { slug: p.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context?.params?.slug;

  const docRef = doc(db, "medias", slug);
  const docSnap = await getDoc(docRef);
  return {
    props: {
      media: JSON.stringify(docSnap.data()) || null,
    },
  };
}
