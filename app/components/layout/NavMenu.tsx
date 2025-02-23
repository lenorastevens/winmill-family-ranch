'use client';

import Image from "next/image";
import Link from 'next/link';
import { Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

export default function NavMenu() {
  return (
    <nav className="py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <Cabin /> Home
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <Event /> Events
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <Newspaper /> News
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <EventSeat /> RSVP
          </Link>
          <Link href="/">
          <Image
            src="/images/wfr-logo.png"
            alt="RTTR Logo"
            width={100}
            height={100} 
          />
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <RequestQuote /> Fees
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <WorkHistory /> Progress
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <Collections /> Gallery
          </Link>
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2"
          >
            <ContactPage /> Contacts
          </Link>
        </div>
      </div>
    </nav>
  )
}