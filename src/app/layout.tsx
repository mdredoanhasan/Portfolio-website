import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./components/navBer";
import Footer from "./components/footer";
import { ContactModalProvider } from "./components/contactModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redoan Hasan | Full-Stack Developer",
  description:
    "Portfolio of Redoan Hasan, a full-stack developer building fast, reliable web products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ContactModalProvider>
          <Navber />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
