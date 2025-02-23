'use client';

import Image from "next/image";
import Link from 'next/link';
import { Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

export default function NavMenu() {
  return (
    <nav className="py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="hidden lg:flex items-center gap-x-16">
          <Link
            href="/"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <Cabin /> Home
          </Link>
          <Link
            href="/events"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <Event /> Events
          </Link>
          <Link
            href="/news"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <Newspaper /> News
          </Link>
          <Link
            href="/rsvp"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <EventSeat /> RSVP
          </Link>
          <Link href="/" className="mx-2">
          <Image
            src="/images/wfr-logo.png"
            alt="RTTR Logo"
            width={110}
            height={110} 
          />
          </Link>
          <Link
            href="/fees"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <RequestQuote /> Fees
          </Link>
          <Link
            href="/progress"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <WorkHistory /> Progress
          </Link>
          <Link
            href="/gallery"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <Collections /> Gallery
          </Link>
          <Link
            href="/contacts"
            className="text-foreground text-2xl font-rancho hover:text-accent2 hover:bg-accent1 p-2 flex items-center gap-3"
          >
            <ContactPage /> Contacts
          </Link>
        </div>
      </div>
    </nav>
  )
}