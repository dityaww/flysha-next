import "../../globals.css";

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Ticket } from "lucide-react";
import { User } from "lucide-react";
import ButtonLogout from "./components/button-logout";
import { getUser } from "@/lib/auth";

import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { user, session } = await getUser()

  if (session === null || user.role === 'CUSTOMER') {
    redirect('dashboard/login')
  }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <section>
          <nav className="border-b border-muted p-5">
            <div className="flex flex-row items-center justify-between">
              <span className="font-bold text-primary">FlySha Dashboard</span>
            </div>
          </nav>

          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5">
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              </div>

              <div className="space-y-2">
                <div className="uppercase text-xs font-bold">Master Data</div>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/airplanes"}>
                    <Plane className="mr-2 w-4 h-4" />
                    Airplanes
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/flights"}>
                    <BookOpenText className="mr-2 w-4 h-4" />
                    Flights
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/tickets"}>
                    <Ticket className="mr-2 w-4 h-4" />
                    Tickets
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start"
                >
                  <Link href={"/dashboard/users"}>
                    <User className="mr-2 w-4 h-4" />
                    Users
                  </Link>
                </Button>
              </div>

              <ButtonLogout />
            </section>

            <section className="grow mr-5 mt-5 h-[87vh] overflow-y-auto">
              {children}
            </section>
          </section>
        </section>
      </body>
    </html>
  );
}
