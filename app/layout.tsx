import type { Metadata } from "next";
import { Rancho, Bigshot_One, Fredericka_the_Great } from "next/font/google";
import "./globals.css";
// import NavMenu from "./components/layout/NavMenu";
import Footer from "./components/home/Footer";
import Navigation from "./components/navigation";

const rancho = Rancho({
  variable: "--font-rancho",
  weight: "400",
  subsets:['latin'], 
})

const bigShot = Bigshot_One({
  variable: "--font-bigshot",
  weight: "400",
  subsets: ['latin'],
})

const fredericka = Fredericka_the_Great({
  variable: "--font-fredericka",
  weight: "400",
  subsets: ['latin'],
  style: "normal",
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
        className={`${rancho.variable} ${fredericka.variable} ${bigShot.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
