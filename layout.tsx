import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammed Mehfil M M — Data Analyst & AI/ML Student",
  description:
    "Portfolio of Mohammed Mehfil M M — Data Analyst, AI & ML student, and Maths tutor crafting clean data stories and intelligent systems.",
  authors: [{ name: "Mohammed Mehfil M M" }],
  openGraph: {
    title: "Mohammed Mehfil M M — Data Analyst & AI/ML Student",
    description:
      "Data Analyst, AI & ML student, and Maths tutor. Explore projects, experience, and skills.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mehfil M M — Data Analyst & AI/ML Student",
    description:
      "Portfolio of Mohammed Mehfil M M — Data Analyst, AI & ML student, and Maths tutor.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
