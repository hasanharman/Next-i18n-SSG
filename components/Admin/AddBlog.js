import React, { useState, useEffect } from "react";
import ExampleTheme from "./themes/ExampleTheme";
import { $getRoot, $getSelection } from "lexical";
import { $generateHtmlFromNodes } from "@lexical/html";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import ImageToolbarPlugin from "./plugins/ImageToolbarPlugin";

import { auth, db, storage } from "../../lib/firebase";
import {
  doc,
  addDoc,
  updateDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const styles = {
  activeTab:
    "inline-block w-full p-4 bg-sky-50 hover:bg-sky-100 focus:outline-none dark:bg-sky-700 dark:hover:bg-sky-600",
  regularTab:
    "inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600",
};

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

function AddBlog({ setOpenAdd }) {
  const [selectedLang, setSelectedLang] = useState("en");

  const [coverImage, setCoverImage] = useState("");
  const [titleEN, setTitleEN] = useState("");
  const [titleES, setTitleES] = useState("");
  const [titlePR, setTitlePR] = useState("");
  const [titleTR, setTitleTR] = useState("");
  const [contentEN, setContentEN] = useState();
  const [contentES, setContentES] = useState();
  const [contentPR, setContentPR] = useState();
  const [contentTR, setContentTR] = useState();

  const onChange = (editorState, editor) => {
    // console.log(editorState);
    // console.log(editor);
    editor.update(() => {
      const raw = $generateHtmlFromNodes(editor, null);
      console.log(raw);
      switch (selectedLang) {
        case "en":
          setContentEN(raw);
          console.log("english");
          break;
        case "pr":
          setContentPR(raw);
          console.log("port");
          break;
        case "es":
          setContentES(raw);
          console.log("ess");
          break;
        case "tr":
          setContentTR(raw);
          console.log("trr");
          break;
        default:
          break;
      }
    });
  };

  async function updateImage(event) {
    event.preventDefault();

    const file = event.target.files[0];
    const storageRef = ref(storage, `/blogs/${file.name}`);
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

  async function addBlog(event) {
    event.preventDefault();
    const docRef = await addDoc(collection(db, "blogs"), {
      coverImage: coverImage,
      publishDate: serverTimestamp(),
      // content: content,
      en: {
        title: titleEN,
        content: contentEN,
      },
      es: {
        title: titleES,
        content: contentES,
      },
      pr: {
        title: titlePR,
        content: contentPR,
      },
      tr: {
        title: titleTR,
        content: contentTR,
      },
    });
    console.log("Document written with ID: ", docRef.id);

    const docReftoUpdate = doc(db, "blogs", docRef.id);
    await updateDoc(docReftoUpdate, {
      id: docRef.id,
    });
    setOpenAdd(false);
  }

  return (
    <div className="absolute top-[25%] left-[25%] bg-gray-800 w-[50vw] shadow-xl rounded-md border-gray-500 border">
      <div className="flex flex-col justify-center items-center gap-1 py-5 px-3">
        <div className="flex flex-col px-10 w-full">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-white text-xl">Add New Blog Post</h1>
            <button className="text-white" onClick={() => setOpenAdd(false)}>
              X
            </button>
          </div>

          <label
            className="block mb-2 text-sm font-light text-gray-900 dark:text-white"
            htmlFor="coverImage"
          >
            Upload Image
          </label>
          <input
            className="mb-3 block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="coverImage"
            type="file"
            onChange={updateImage}
          />
        </div>
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
              Blog Title
            </label>
            <input
              type="text"
              id="small-input"
              value={titleEN}
              onChange={(event) => setTitleEN(event.target.value)}
              className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <LexicalComposer initialConfig={editorConfig}>
              <div className="editor-container">
                <ToolbarPlugin />
                {/* <ImageToolbarPlugin /> */}
                <div className="editor-inner">
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable className="editor-input" />
                    }
                    placeholder={<Placeholder />}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <HistoryPlugin />
                  <OnChangePlugin onChange={onChange} />
                  {/* <TreeViewPlugin /> */}
                  <AutoFocusPlugin />
                  <CodeHighlightPlugin />
                  <ListPlugin />
                  <LinkPlugin />
                  <AutoLinkPlugin />
                  <ListMaxIndentLevelPlugin maxDepth={20} />
                  <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </div>
              </div>
            </LexicalComposer>
          </div>
        )}
        {/* FOR ES */}
        {selectedLang == "es" && (
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="small-input"
              value={titleES}
              onChange={(event) => setTitleES(event.target.value)}
              className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <LexicalComposer initialConfig={editorConfig}>
              <div className="editor-container">
                <ToolbarPlugin />
                {/* <ImageToolbarPlugin /> */}
                <div className="editor-inner">
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable className="editor-input" />
                    }
                    placeholder={<Placeholder />}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <HistoryPlugin />
                  <OnChangePlugin onChange={onChange} />
                  {/* <TreeViewPlugin /> */}
                  <AutoFocusPlugin />
                  <CodeHighlightPlugin />
                  <ListPlugin />
                  <LinkPlugin />
                  <AutoLinkPlugin />
                  <ListMaxIndentLevelPlugin maxDepth={20} />
                  <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </div>
              </div>
            </LexicalComposer>
          </div>
        )}
        {/* FOR PR */}
        {selectedLang == "pr" && (
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="small-input"
              value={titlePR}
              onChange={(event) => setTitlePR(event.target.value)}
              className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <LexicalComposer initialConfig={editorConfig}>
              <div className="editor-container">
                <ToolbarPlugin />
                {/* <ImageToolbarPlugin /> */}
                <div className="editor-inner">
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable className="editor-input" />
                    }
                    placeholder={<Placeholder />}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <HistoryPlugin />
                  <OnChangePlugin onChange={onChange} />
                  {/* <TreeViewPlugin /> */}
                  <AutoFocusPlugin />
                  <CodeHighlightPlugin />
                  <ListPlugin />
                  <LinkPlugin />
                  <AutoLinkPlugin />
                  <ListMaxIndentLevelPlugin maxDepth={20} />
                  <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </div>
              </div>
            </LexicalComposer>
          </div>
        )}
        {/* FOR TR */}
        {selectedLang == "tr" && (
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="small-input"
              value={titleTR}
              onChange={(event) => setTitleTR(event.target.value)}
              className="mb-3 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <LexicalComposer initialConfig={editorConfig}>
              <div className="editor-container">
                <ToolbarPlugin />
                {/* <ImageToolbarPlugin /> */}
                <div className="editor-inner">
                  <RichTextPlugin
                    contentEditable={
                      <ContentEditable className="editor-input" />
                    }
                    placeholder={<Placeholder />}
                    ErrorBoundary={LexicalErrorBoundary}
                  />
                  <HistoryPlugin />
                  <OnChangePlugin onChange={onChange} />
                  {/* <TreeViewPlugin /> */}
                  <AutoFocusPlugin />
                  <CodeHighlightPlugin />
                  <ListPlugin />
                  <LinkPlugin />
                  <AutoLinkPlugin />
                  <ListMaxIndentLevelPlugin maxDepth={20} />
                  <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </div>
              </div>
            </LexicalComposer>
          </div>
        )}
        <div className="flex gap-3">
          <button
            onClick={() => setOpenAdd(false)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Cancel
          </button>
          <button
            onClick={addBlog}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
