import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientSessionProvider from "../providers/SessionProvider"; // Import client-side component
import { Toaster } from "@/components/ui/sonner"
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
  title: "Quick Chat",
  description: "To chat quick and possibly faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Render the client-side provider */}
        <ClientSessionProvider>
          <Toaster richColors duration={10000}/>
          {children}</ClientSessionProvider>
      </body>
    </html>
  );
}
