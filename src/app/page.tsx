"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Prices } from "@/components/Prices";
import { Resume } from "@/components/Resume";
import { Barbers } from "@/components/Barbers";
import { Gallery } from "@/components/Gallery";
import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import packageJson from "../../package.json";

console.log("project version: ", packageJson.version);

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Prices />
      <Resume />
      <Barbers />
      <Gallery />
      <Contacts />
      <Footer />
    </main>
  );
}
