"use client";

import Link from "next/link";

import Logo from "@/public/images/img_logo_text.png";
import Image from "next/image";
const Header = () => {
  return (
    <Link href="/">
      <header className="textlogo-header">
        <Image
          src={Logo}
          alt="logo"
          fill
          sizes="(max-width: 300px) 100vw, 300px"
          style={{ objectFit: "cover" }}
          priority
        />
      </header>
    </Link>
  );
};

export default Header;
