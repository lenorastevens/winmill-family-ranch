import { useState } from "react";
import { Close, MenuOpen, Cabin, Event, Newspaper, EventSeat, RequestQuote, WorkHistory, Collections, ContactPage } from '@mui/icons-material';
import NavItem from "./NavItem";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return(
    <div className="lg:hidden">
      <div className="flex items-center justify-end p-4">
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
          <NavItem href="/" icon={<Cabin />} label="Home"/>
          <NavItem href="/events" icon={<Event />} label="Events"/>
          <NavItem href="/rsvp" icon={<EventSeat />} label="RSVP"/>
          <NavItem href="/contacts" icon={<ContactPage />} label="Contacts"/>
          <NavItem href="/fees" icon={<RequestQuote />} label="Fees"/>
          <NavItem href="/news" icon={<Newspaper />} label="News"/>
          <NavItem href="/progress" icon={<WorkHistory />} label="Progress"/>
          <NavItem href="/gallery" icon={<Collections />} label="Gallery"/>
      </div>
    </div>
    {isOpen && (
      <div className='fixed inset-0 bg-background opacity-50 lg:hidden z-40' onClick={toggleMenu}></div>
    )}
  </div>
  )
}