import { Metadata } from "next";
// import ConstructionImage from "../components/home/ConstructionImage";
import WorkProgress from "../components/progress";

export const metadata: Metadata = {
  title: "Progress",
};

export default function Events() {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center">
      <WorkProgress />
    </div>
    
  )
}