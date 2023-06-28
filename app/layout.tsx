import { Inter } from "next/font/google";
import AuthProvider from "~/components/AuthProvider";
import "./globals.css";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Banner from "~/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drippple",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <Banner />
          {children}
        </AuthProvider>

        <Footer />
      </body>
    </html>
  );
}
