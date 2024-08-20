import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          bricolageGrotesque.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
