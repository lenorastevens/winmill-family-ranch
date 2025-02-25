'use client';

import Image from "next/image";
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';
import NavItem from "./NavItem";
import { Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

export default function NavMenu() {
  return (
    <nav className="py-2 lg:py-6">
      <div className="container mx-auto px-4 grid sm:grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center lg:h-32 gap-x-0 xl:gap-x-20">
         
        <div className="hidden lg:flex justify-end gap-x-1 xl:gap-x-9 min-w-0">
          <NavItem href="/" icon={<Cabin/>} label="Home" />
          <NavItem href="/events" icon={<Event />} label="Events"/>          
          <NavItem href="/rsvp" icon={<EventSeat />} label="RSVP"/>
          <NavItem href="/contacts" icon={<ContactPage />} label="Contacts"/>
        </div>

        <div className="hidden lg:flex justify-center">
          <Link href="/" className="mx-2">
            <Image
              src="/images/wfr-logo.png"
              alt="Winmill Family Ranch Logo"
              width={150}
              height={150}
              className="h-20 w-auto lg:h-32 lg:my-2" 
            />
          </Link>
        </div>

        <div className="hidden lg:flex justify-start gap-x-1 xl:gap-x-9 min-w-0">
          <NavItem href="/fees" icon={<RequestQuote />} label="Fees"/>
          <NavItem href="/news" icon={<Newspaper />} label="News" />
          <NavItem href="/progress" icon={<WorkHistory />} label="Progress"/>
          <NavItem href="/gallery" icon={<Collections />} label="Gallery"/>
        </div>

        <div className="lg:hidden flex justify-between w-full">
          <Link href="/">
            <Image
              src="/images/wfr-logo.png"
              alt="Winfmill Family Ranch Logo"
              width={90}
              height={90}
            />
          </Link>
          <HamburgerMenu />
        </div>

      </div>
    </nav>
  )
}