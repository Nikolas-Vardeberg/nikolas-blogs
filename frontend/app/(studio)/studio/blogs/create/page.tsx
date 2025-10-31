"use client";

import Editor from "@/components/rich-text/editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEditorStore } from "@/store/use-editor-store";

export default function Page() {
  const { editor } = useEditorStore();

  const handlePublish = () => {
    if (!editor) {
      console.warn("Editor not ready yet!");
      return;
    }

    console.log(editor.getHTML());
  };

  return (
    <div className="max-w-[800px] mx-auto flex flex-col py-5 gap-5">
      <Input className="w-full" placeholder="Tittel" />
      <div className="flex gap-1">
        <Input className="w-full" placeholder="www.nikolas-blogs/blogs/" />
        <Button>Generate</Button>
      </div>
      <Editor />

      <Button onClick={handlePublish} className="mt-3">
        Publish
      </Button>
    </div>
  );
}
