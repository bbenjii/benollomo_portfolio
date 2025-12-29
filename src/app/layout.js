import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import Head from 'next/head'
import Header from "@/components/header";
import ChatbotProvider from "@/components/chatbotProvider";

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
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body style={{maxWidth: "100%", width: "auto"}}
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.variable}`}
      >
          {/*<ChatbotProvider>*/}
              <div className="lg:min-w-200 lg:max-w-200 h-full mx-auto pt-15 w-full">
                  <Header navigation={[{}]}/>
                  {children}
              </div>
          {/*</ChatbotProvider>*/}
      </body>
      </html>
  );
}
