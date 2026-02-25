"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">

      <Link href="/">
        <Image
          src="/logo.png"
          alt="EF Aesthetics"
          width={120}
          height={60}
          className="logo"
        />
      </Link>

      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/book">Book</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}


