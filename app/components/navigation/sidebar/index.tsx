import Link from "next/link";
import { JSX } from 'react';
import { Close, Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className={`sidebar-container fixed w-64 h-full overflow-hidden justify-center bg-background grid pt-[120px] right-0 z-10 transition-all duration-300 ${
            isOpen ? "opacity-100 top-0" : "opacity-0 -top-full"}`}
      >
        <button type="button" title="Close Menu" className="absolute right-0 p-5" onClick={toggle}>
          <Close fontSize="large"/>
        </button>

        <ul className="sidebar-nav text-left font-rancho leading-relaxed text-3xl">
          <li>
            <Link href="/" onClick={toggle}><Cabin /><span> Home</span></Link>
          </li>  
          <li>
            <Link href="/events" onClick={toggle}><Event/><span> Events</span></Link>
          </li>
          <li>
            <Link href="/rsvp" onClick={toggle}><EventSeat /><span> RSVP</span></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><ContactPage /><span> Contacts</span></Link>
          </li>
          <li>
            <Link href="/fees" onClick={toggle}><RequestQuote /><span> Fees</span></Link>
          </li>
          <li>
            <Link href="/news" onClick={toggle}><Newspaper /><span> News</span></Link>
          </li>
          <li>
            <Link href="/progress" onClick={toggle}><WorkHistory /><span> Progress</span></Link>
          </li>
          <li>
            <Link href="/gallery" onClick={toggle}><Collections /><span> Gallery</span></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;