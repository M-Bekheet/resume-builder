import type { Metadata } from "next";
import Editor from "./components/editor";
import Viewer from "./components/viewer";

export default function IndexPage() {
  return (
    <main className="grid lg:grid-cols-2 gap-2 px-8">
      <div className="print:hidden" >
        <Editor />
      </div>
      <Viewer />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Resume Builder By Mahmoud Bekheet",
};
