"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";
import { useEditorStore } from "@/store/use-editor-store";

const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
      attributes: {
        style: "padding: 24px",
        class: "focus:outline-none print:border-0 cursor-text",
      },
    },
  });

  return (
    <div className="border border-input rounded-md flex flex-col">
      <Toolbar />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
