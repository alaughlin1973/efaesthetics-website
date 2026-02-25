export default function Home() {
  return (
    <main className="hero">

      <Image
        src="/logo.png"
        alt="EF Aesthetics"
        width={500}
        height={250}
        className="hero-logo"
      />

      <h2>Luxury Beauty & Aesthetic Studio</h2>

      <p>
        Specialising in Laser Hair Removal, Hair Styling & Professional Makeup.
      </p>

      <a
        href="https://wa.me/447741119010"
        className="btn-gold"
      >
        Book Now
      </a>

    </main>
  );
}

