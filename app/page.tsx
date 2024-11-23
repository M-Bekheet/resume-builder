import type { Metadata } from "next";
import Editor from "./components/editor";
import Viewer from "./components/viewer";

export default function IndexPage() {
  return (
    <main>
      <Editor />
      <Viewer />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
