"use client";
import React from "react";
import Link from "next/link";

import Logo from "@/public/images/img_logo_text.png";
import Image from "next/image";
const Header = () => {
  return (
    <Link href="/">
      <header className="textlogo-header">
        <Image src={Logo} alt="logo" layout="fill" objectFit="cover" />
      </header>
    </Link>
  );
};

export default Header;
