"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UserButton, useUser, useAuth } from "@clerk/nextjs";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import { FiAlignJustify } from "react-icons/fi";
import MobileNavMenu from "./MobileNavMenu";
import { navItems } from "@/lib/constance";

export default function Navbar() {
  const pathName = usePathname();
  const { user } = useUser();
  const { userId } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleCloseNav = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-white/40 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
      <div className="wrapper navbar-height py-4 px-2 flex justify-between items-center">
        <Link href="/" className="flex gap-0.5 items-center">
          {/* <Image
            src="/assets/logo.png"
            alt="Bookified"
            width={42}
            height={26}
          /> */}
          <span className="text-lg md:text-2xl font-bold">CityWeather</span>
        </Link>

        <nav className="w-fit flex gap-7.5 items-center px-2">
          {!isMobile &&
            navItems
              .filter((item) => {
                if (item.label === "Sign In" && user?.firstName) return false;
                return true;
              })
              .map(({ label, href }) => {
                const isActive =
                  pathName === href ||
                  (href !== "/" && pathName.startsWith(href));

                return (
                  <Link
                    href={href}
                    key={label}
                    className={cn(
                      "nav-link-base",
                      isActive
                        ? "nav-link-active"
                        : "text-black hover:opacity-70",
                    )}
                  >
                    {label}
                  </Link>
                );
              })}

          <div className="flex gap-2.5 items-center">
            {/* <SignInButton mode="modal" /> */}
            <UserButton />
            {isMobile && (
              <div className="relative">
                <Button
                  variant="text"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <FiAlignJustify size={30} />
                </Button>
                {isMenuOpen && (
                  <MobileNavMenu menuitem={navItems} onClose={handleCloseNav} />
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
