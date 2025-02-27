import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { Cabin, MenuOpen, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-32 bg-background sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button type="button" title="Open Menu" className="inline-flex items-center md:hidden"
              onClick={toggle}>
                <MenuOpen fontSize="large"/>
            </button>
            <ul className="ml-2 hidden md:flex gap-x-8 text-foreground xl:text-2xl xl:gap-x-10 font-rancho">
              <li>
                <Link href="/">
                  <Cabin /><span> Home</span>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <Event /><span> Events</span>
                </Link>
              </li>
              <li>
                <Link href="/rsvp">
                  <EventSeat /><span> RSVP</span>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <ContactPage /><span> Contacts</span>
                </Link>
              </li>
              <li>
                <Link href="/fees">
                  <RequestQuote /><span> Fees</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <Newspaper /><span> Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/progress">
                  <WorkHistory /><span> Progress</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <Collections /><span> Gallery</span>
                </Link>
              </li>
            </ul>
            <div className="hidden ml-2 md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;