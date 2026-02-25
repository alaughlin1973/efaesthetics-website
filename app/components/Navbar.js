"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2>EF Aesthetics</h2>

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

