import type { Metadata } from "next";
import Editor from "./components/editor";
import Viewer from "./components/viewer";

export default function IndexPage() {
  return (
    <main className="grid lg:grid-cols-2 gap-4">
      <div className='p-10'>
        <Editor />
      </div>
      <div className='p-10'>
        <Viewer />
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Resume Builder By Mahmoud Bekheet",
};
