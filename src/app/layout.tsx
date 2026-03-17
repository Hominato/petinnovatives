import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import NotificationProvider from "../components/NotificationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet Innovatives | Science-Backed Pet Wellness & Rescue",
  description: "Join Pet Innovatives in revolutionizing pet care through open-source science and Web3 rescue missions. Shop premium wellness products and fund life-saving research for strays worldwide.",
  keywords: ["pet care", "stray rescue", "veterinary science", "animal welfare", "Web3 donations", "pet health research", "science-backed pet products"],
  openGraph: {
    title: "Pet Innovatives | Advancing Pet Science",
    description: "The global hub for veterinary innovation and stray pet rescue. Shop with a mission, fund a breakthrough.",
    images: [{ url: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <NotificationProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </NotificationProvider>
      </body>
    </html>
  );
}
