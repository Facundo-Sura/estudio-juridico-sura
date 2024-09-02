import React from "react";
import Landing from "./Landing";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white">
      <Landing />
      <Navbar />
    </main>
  );
}
