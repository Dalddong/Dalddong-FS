"use client";
import React from "react";
import Link from "next/link";

import sd from "@/public/images/img_logo_text.png";
import Image from "next/image";
const Header = () => {
  return (
    <Link href="/">
      <header className="textlogo-header">
        <Image src={sd} alt="ff" layout="fill" objectFit="cover" />
      </header>
    </Link>
  );
};

export default Header;
