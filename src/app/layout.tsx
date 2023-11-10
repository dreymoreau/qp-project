import "./globals.css";
import type { Metadata } from "next";
import NavBar from "../../components/navbar/NavBar";
import { Inter } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";  // TODO: this is part of testing basic session set up
import { getServerSession } from "next-auth";    // TODO: this is part of testing basic session set up
import { Provider } from "../../context/provider";   // TODO: this is part of testing basic session set up

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);   // TODO: this is part of testing basic server session set up
  console.log('session', session);   // TODO: this is part of testing basic server session set up
    // TODO:  <Provider> tags is part of testing basic session set up
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          {children}
          {/* todo****** : prop currentUser needs to be added  */}
          <NavBar />
        </body>
      </Provider>
    </html>
  );
}
