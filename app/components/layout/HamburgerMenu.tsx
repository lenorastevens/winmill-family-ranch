import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Close, MenuOpen, Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className="lg:hidden">
      <div className="flex items-center justify-between p-4">
        <Image
            src="/images/wfr-logo.png"
            alt="RTTR Logo"
            width={60}
            height={60}
        />
        <MenuOpen className="cursor-pointer text-foreground" onClick={toggleMenu}/>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background shadow-lg transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
        transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <Close className="cursor-pointer text-foreground" onClick={toggleMenu}/>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Link href="/" className="text-foreground text-2xl hover:text-accent2 " onClick={toggleMenu}>
            <Cabin /> Home
          </Link>
          <Link href="/about" className="text-foreground text-2xl hover:text-accent2 " onClick={toggleMenu}>
            <Event /> Events
          </Link>
          <Link href="/recipes" className="text-foreground text-2xl hover:text-accent2 " onClick={toggleMenu}>
            <Newspaper /> News
          </Link>
          <Link href="/meal-plan" className="text-foreground hover:text-accent2 " onClick={toggleMenu}>
            <EventSeat /> RSVP
          </Link>
          <Link href="/" className="text-foreground text-2xl hover:text-accent2 " onClick={toggleMenu}>
            <RequestQuote /> Fees
          </Link>
          <Link href="/about" className="text-foreground text-2xl hover:text-accent2 " onClick={toggleMenu}>
            <WorkHistory /> Progress
          </Link>
          <Link href="/recipes" className="text-foreground text-2xl hover:text-accent2 " onClick={toggleMenu}>
            <Collections /> Gallery
          </Link>
          <Link href="/meal-plan" className="text-foreground hover:text-accent2 " onClick={toggleMenu}>
            <ContactPage /> Contacts
          </Link>
      </div>
    </div>
    {isOpen && (
      <div className='fixed inset-0 bg-background opacity-50 lg:hidden z-40' onClick={toggleMenu}></div>
    )}
  </div>
  )
}