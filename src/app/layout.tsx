import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReduxProvider from "./components/ReduxProvider";
import WhatsAppButton from "./components/WhatsAppButton";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Robiz",
  description: "Fashion for Every Moment, Quality for Every Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F7F7F7]`}
      >
        <ReduxProvider>
          {children}
          <WhatsAppButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
