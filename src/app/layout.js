import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Playfair_Display,
  Lato,
} from "next/font/google";
import "./globals.css";
// import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import PageWithLoader from "./components/PageWithLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"], // 👈 Mention the available weights you want
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "White Horse World | Event Managment in Ranchi",
  description: "White Horse World is Event Managment in Ranchi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${playfairDisplay.variable} ${lato.variable} antialiased`}
      >
        <PageWithLoader>{children}</PageWithLoader>
      </body>
    </html>
  );
}
