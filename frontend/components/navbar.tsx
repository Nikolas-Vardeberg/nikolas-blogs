"use client";

import { Home, LucideIcon, Newspaper, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ToggleTheme } from "./toggle-theme";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <div className="max-w-[1200px] mx-auto flex py-2 justify-between items-center">
        <Link href={"/"}>Blogs</Link>
        <nav className="">
          <ul className="flex gap-1">
            <NavbarTooltip Icon={Home} label="Home" href={"/"} />
            <NavbarTooltip Icon={Newspaper} label="Blogs" href={"/blogs"} />
            <NavbarTooltip Icon={Search} label="Search" href={"/search"} />
          </ul>
        </nav>
        <ToggleTheme />
      </div>
    </header>
  );
}

const NavbarTooltip = ({
  Icon,
  label,
  href,
}: {
  Icon: LucideIcon;
  label: string;
  href: Route;
}) => {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href}>
          <Button
            variant="ghost"
            className={clsx(
              pathname === href && "border-b border-white rounded-none"
            )}
          >
            <Icon />
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
};
