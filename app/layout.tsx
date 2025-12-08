import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: "Сүүн Мөнгөн Цацал",
  description: "Premium Mongolian handcrafted product with history and tradition.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen pt-16 bg-gray-50">
        <head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          />
        </head>
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}