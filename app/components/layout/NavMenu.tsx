'use client';

import Image from "next/image";
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import NavItem from "./NavItem";
import { Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

export default function NavMenu() {
  return (
    <nav className="py-4">
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <Link href="/" className="lg:hidden">
          <Image
            src="/images/wfr-logo.png"
            alt="Winfmill Family Ranch Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-x-6 w-1/3 justify-start">
          <NavItem href="/" icon={<Cabin/>} label="Home" />
          <NavItem href="/events" icon={<Event />} label="Events"/>          
          <NavItem href="/news" icon={<Newspaper />} label="News" />
          <NavItem href="/rsvp" icon={<EventSeat />} label="RSVP"/>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
          <Link href="/">
            <Image
              src="/images/wfr-logo.png"
              alt="Winmill Family Ranch Logo"
              width={110}
              height={110}
              className="mx-4" 
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-x-6 w-1/3 justify-end">
          <NavItem href="/fees" icon={<RequestQuote />} label="Fees"/>
          <NavItem href="/progress" icon={<WorkHistory />} label="Progress"/>
          <NavItem href="/gallery" icon={<Collections />} label="Gallery"/>
          <NavItem href="/contacts" icon={<ContactPage />} label="Contacts"/>
        </div>

        <div className="lg:hidden flex">
          <HamburgerMenu />
        </div>

      </div>
    </nav>
  )
}