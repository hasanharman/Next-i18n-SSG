import {
  doc,
  getDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";

export async function getAllNews() {
  let values = [];
  const collectionRef = collection(db, "medias");
  const q = query(collectionRef, orderBy("publishDate", "desc"));
  onSnapshot(q, (snapshot) => {
    snapshot.docs.map((doc) => {
      const data = doc.data();
      values.push(data);
    });
  });
  return values;
}

export async function getPostByName(id) {
  try {
    let value = {};
    const docRef = doc(db, "medias", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      value = docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("error!", error);
  }
}
