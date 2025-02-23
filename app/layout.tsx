import type { Metadata } from "next";
import { Rancho, Bigshot_One } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/layout/NavMenu";

const rancho = Rancho({
  weight: "400",
  subsets:['latin'], 
})

const bigShot = Bigshot_One({
  weight: "400",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: "Winmill Family Ranch | %s",
    default: "Winmill Family Ranch",
  },
  description: "A site containing information important for maintenance and upkeep for family land and reunions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rancho} ${bigShot} antialiased`}
      >
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
