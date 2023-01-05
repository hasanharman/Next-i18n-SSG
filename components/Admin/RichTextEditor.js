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

function RichTextEditor() {
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState();

  // async function onChange(editorState) {
  //   editorState.read(() => {
  //     // Read the contents of the EditorState here.
  //     const root = $getRoot();
  //     const selection = $getSelection();
  //   });
  // }

  const onChange = (editorState, editor) => {
    // console.log(editorState);
    // console.log(editor);
    editor.update(() => {
      const raw = $generateHtmlFromNodes(editor, null);
      console.log(raw);
      setContent(raw);
      // setHtml(raw)
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
      content: content,
      // en: {
      //   title: titleEN,
      //   summary: summaryEN,
      // },
      // es: {
      //   title: titleES,
      //   summary: summaryES,
      // },
      // pr: {
      //   title: titlePR,
      //   summary: summaryPR,
      // },
      // tr: {
      //   title: titleTR,
      //   summary: summaryTR,
      // },
    });
    console.log("Document written with ID: ", docRef.id);

    const docReftoUpdate = doc(db, "blogs", docRef.id);
    await updateDoc(docReftoUpdate, {
      id: docRef.id,
    });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div>
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
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          {/* <ImageToolbarPlugin /> */}
          <div className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
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
      <button
        onClick={addBlog}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add
      </button>{" "}
    </div>
  );
}

export default RichTextEditor;
