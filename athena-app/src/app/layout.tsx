import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/components/Navbar";
import { ClientSessionProvider } from "~/components/ClientSessionProvider";

export const metadata: Metadata = {
  title: "EventMaster",
  description: "EventMaster helps you organize conferences, weddings, and corporate events effortlessly. Input your event details, and we'll suggest the best vendors, venues, and services tailored to your needs. Manage budgets, schedules, and invitations all in one place.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ClientSessionProvider>
          <Navbar />
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
