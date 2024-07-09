"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  // Consider conditional rendering or CSS media queries for screen size detection
  const isMobile = true; // Assuming mobile screen for this example

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      {isMobile && ( // Conditionally render scrollable content for mobile screens
        <SheetContent className="flex flex-col overflow-auto h-screen">
          <div className="m-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">Oscar Medrano.</h1>
            </Link>
          </div>
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent capitalize"
                    : "text-xl capitalize hover:text-accent transition-all"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default MobileNav;
