import HeroSection from "./components/home/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Winmill Family Ranch | Home",
};

export default function Home() {
  return (
    <>
    <HeroSection />
    </>
  );
}
