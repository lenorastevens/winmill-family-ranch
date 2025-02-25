// import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-background text-foreground py-6">
        <div className="container mx-auto flex flex-col items-center text-center">
          <Image
            src="/images/rttr-logo.png"
            alt="Ranch Motto Logo"
            width={150}
            height={55}
            className="mb-4"
          >
          </Image>
          <p className="text-sm font-bigShot">&copy; {new Date().getFullYear()} Winmill Family Ranch. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
          {/* <Link href="/privacy-policy" className="hover:text-[var(--color-primary)]">Privacy Policy </Link>
          <Link href="/terms-of-service" className="hover:text-[var(--color-primary)]">Terms of Service </Link>
          <Link href="/contact" className="hover:text-[var(--color-primary)]">Contact Us </Link> */}
          </div>
        </div>
      </footer>
    );
  }