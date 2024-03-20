"use client";

import Conversation from "./components/Conversation";
export const runtime = "edge";
import * as FullStory from "@fullstory/browser";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    FullStory.init({ orgId: "5HWAN" });
  }, []);

  return (
    <>
      <div className="h-full overflow-hidden">
        <main className="mx-auto max-w-7xl  px-4 md:px-6 lg:px-8 h-full">
          <Conversation />
        </main>
      </div>
    </>
  );
}
