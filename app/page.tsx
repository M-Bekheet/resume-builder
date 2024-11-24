import type { Metadata } from "next";
import Editor from "./components/editor";
import Viewer from "./components/viewer";
import { Button } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <main>
      <Editor />
      <Viewer />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Resume Builder By Mahmoud Bekheet",
};
