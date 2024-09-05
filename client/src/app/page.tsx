import React from "react";
import Landing from "../components/Landing";
import Navbar from "@/components/Navbar";
import Inicio from "./inicio/page";

export default function Home() {
  return (
    <main className="bg-white">
      <Landing />
      <Navbar />
      <Inicio />
    </main>
  );
}
