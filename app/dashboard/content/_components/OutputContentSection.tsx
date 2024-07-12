"use client";
import React, { useRef, useCallback, useEffect } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

interface OutputContentSection {
  aiResultString: string;
}

const OutputContentSection: React.FC<OutputContentSection> = ({
  aiResultString,
}) => {
  const editorRef: any = useRef(null);
  console.clear();

  console.log(aiResultString);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiResultString);
  }, [aiResultString]);

  const handleFocus = useCallback(() => {}, []);
  const copyClipboardData = useCallback(() => {}, []);

  return (
    <div className=" w-full rounded-lg">
      <div className="border flex justify-between items-center p-4">
        <h2 className="font-medium text-2xl">AI generated results</h2>
        <button
          className="bg-transparent cursor-pointer"
          type="button"
          onClick={copyClipboardData}
        >
          <CopyIcon />
        </button>
      </div>

      <div className="">
        <Editor
          height="400px"
          initialEditType="wysiwyg"
          initialValue="hello"
          ref={editorRef}
          onFocus={handleFocus}
          useCommandShortcut={true}
          hideModeSwitch={true}
          onChange={() =>
            console.log(editorRef.current.getInstance().getMarkdown())
          }
        />
      </div>
    </div>
  );
};

export default OutputContentSection;
