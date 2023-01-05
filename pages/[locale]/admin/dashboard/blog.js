import { useEffect, useState } from "react";
import { auth, db } from "../../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsArrowBarLeft } from "react-icons/bs";
import AddBlog from "../../../../components/Admin/AddBlog";
import BlogCard from "../../../../components/Admin/BlogCard";

function Blog() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [blogs, setBlogs] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);

  async function getBlogs() {
    const collectionRef = collection(db, "blogs");
    const q = query(collectionRef, orderBy("publishDate", "desc"), limit(10));
    const unsub = onSnapshot(q, (snapshot) => {
      setBlogs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsub;
  }

  useEffect(() => {
    getBlogs();
  }, []);

  console.log('blogs',blogs);

  return (
    <div>
      <div className="w-full h-[14vh] bg-gray-800"></div>
      <div className="bg-gray-800 min-h-[70vh]">
        <div className="max-w-5xl mx-auto p-10">
          <div className="flex justify-between items-center mb-5">
            <div className="flex justify-center items-center gap-1">
              <Link href="/admin/dashboard">
                <BsArrowBarLeft className="text-3xl text-white hover:text-sky-500" />
              </Link>
              <h1 className="text-4xl font-light text-white">BLOGS</h1>
            </div>
            <button onClick={() => setOpenAdd(true)}>
              <AiFillPlusCircle className="text-4xl text-blue-600 cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </div>
      </div>
      {openAdd && <AddBlog setOpenAdd={setOpenAdd} />}
    </div>
  );
}

export default Blog;
