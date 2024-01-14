"use client";
import { logout } from "@libs/api";
import {
  NavbarBrand,
  NavbarContent,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Button, Image } from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { ThemeSwitch } from "./Theme-switch";

type Props = {
  mode?: string;
};

export default function Navbar({ mode }: Props) {
  const router = useRouter();
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-2 mt-2 "
            href="/"
          >
            <Image
              width={32}
              height={32}
              alt=""
              src="/icons/android-chrome-192x192.png"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Button
          variant="bordered"
          size="sm"
          onClick={() => {
            logout();
            mode === "admin"
              ? router.replace("/admin/login")
              : router.replace("/login");
          }}
        >
          ออกจากระบบ
        </Button>
      </NavbarContent>
    </NextUINavbar>
  );
}
