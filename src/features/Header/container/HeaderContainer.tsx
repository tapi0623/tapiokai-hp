import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import NextImage from "next/image";
import tapiocaIcon from "@/../public/tapioca_mono.png";
import { Spacer } from "@nextui-org/spacer";
import Image from "next/image";

export function HeaderContainer() {
  return (
    <>
      <Navbar height={50} className="border-b-2 border-gray-280">
        <NavbarBrand>
          <>
            <NextImage src={tapiocaIcon} alt="タピオカの白黒アイコン" height={30} />
            <Spacer x={1} />
            <p className="font-bold text-inherit text-2xl italic">tapiokai.net</p>
          </>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <NextLink href="https://komenezumi.net">
              <Link color="foreground">
                <Image
                  src="https://komenezumi.net/banner/komenezumi.gif"
                  alt="komenezumi.netへのリンク"
                  height={50}
                  width={200}
                />
              </Link>
            </NextLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" isExternal href="/live" variant="flat">
              Live
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Spacer y={5} />
    </>
  );
}
