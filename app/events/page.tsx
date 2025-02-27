import { Metadata } from "next";
import EventCalendar from "../components/events/calendar";
import NextEvent from "../components/events/upcoming";
import FAQ from "../components/events/faq";
import { FAQType } from "../lib/definitions";

export const metadata: Metadata = {
  title: "Ranch Events | Calendar",
};

const faqsData: FAQType[] = [
  {
    question: 'Who is in charge of planning?',
    answer: 'Russ Reeder and Lenora Stevens',
  },
  {
    question: 'What are the dates for the reunion?',
    answer: 'July 14-20, 2025',
  },
  {
    question: 'What is the work project?',
    answer: 'Great question! Notice the reunion planned is longer than usual?  Extra time is needed because we have several projects on the agenda. Currently the highest priority goes to the bathhouse, main cabin foundation, and the roof junction over the mobile home porch.',
  },
  {
    question: 'What activities are being planned?',
    answer: 'Discussion are still in the works, but feel free to volunteer help if you have ideas.',
  }
];

export default function Events() {
  return (
    <div>
      <div className="container mx-auto p-6 flex flex-col items-center text-center">
        <EventCalendar />
      </div>
      <div>
        <NextEvent />
      </div>
      <div>
        <FAQ faqs={faqsData ?? [] } />
      </div>
    </div>
  )
}