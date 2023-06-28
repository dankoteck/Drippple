import { Inter } from "next/font/google";
import AuthProvider from "~/components/AuthProvider";
import "./globals.css";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Banner from "~/components/Banner";
import { getAuthSession } from "~/utils/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drippple",
  description: "Showcase and discover remarkable developer projects",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar session={session} />
          {!session?.user && <Banner />}

          {children}
        </AuthProvider>

        <Footer />
      </body>
    </html>
  );
}
