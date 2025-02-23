import { Metadata } from "next";
import ConstructionImage from "../components/home/ConstructionImage";

export const metadata: Metadata = {
  title: "Contacts",
};

export default function Events() {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center">
      <h1 className="text-5xl font-fredericka text-center mb-6">Family Contacts Directory</h1>
      <ConstructionImage />
    </div>
    
  )
}