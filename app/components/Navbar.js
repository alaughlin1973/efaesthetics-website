import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>EF Aesthetics</h2>
      <div>
        <Link href="/">Home</Link>
        <Link href="/services">Treatments</Link>
        <Link href="/results">Results</Link>
        <Link href="/about">About</Link>
        <Link href="/book">Book</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

