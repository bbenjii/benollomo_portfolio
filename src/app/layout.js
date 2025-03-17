import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Benollomo Portfolio",
  description: "",
};

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // Choose weights needed
    variable: "--font-roboto",
    display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
