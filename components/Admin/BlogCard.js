import React from "react";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import EditModal from "./EditModal";

function BlogCard({ blog }) {
  console.log(blog);
  const [openEdit, setOpenEdit] = useState(false);

  async function deleteBlog(id) {
    await deleteDoc(doc(db, "blogs", id));
  }

  const formatDate = (dateString) => {
    return new Date(Timestamp.now().seconds * 1000).toLocaleDateString();
  };

  const truncate = (text) => {
    return text.length > 140 ? text.substring(0, 50) + "..." : text;
  };

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-[300px]"
      key={blog?.id}
    >
      <img
        className="rounded-t-lg w-[300px] h-[200px] object-cover"
        src={blog?.coverImage}
        alt=""
      />
      <div className="p-3 min-h-[150px]">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {blog?.en?.title}
          </h5>
        </a>
        <div className="flex gap-3">
          <button
            onClick={() => setOpenEdit(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit
          </button>
          <button
            onClick={()=> deleteBlog(blog.id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
          {openEdit && (
            <EditModal className="" setOpenEdit={setOpenEdit} blog={blog} />
          )}

        </div>
      </div>
    </div>
  );
}

export default BlogCard;
