import { Metadata } from "next";
import Fees from "../components/pricing";

export const metadata: Metadata = {
  title: "Fees",
};

export default function Events() {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center">
      <Fees />
    </div>
    
  )
}