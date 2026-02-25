export default function Contact() {
  return (
    <main className="page">
      <h1>Contact EF Aesthetics</h1>

      <div className="contact-info">
        <p><strong>Address:</strong><br/>
        Calle Alemania 1<br/>
        Torreón Golf Centro<br/>
        29630</p>

        <p><strong>WhatsApp:</strong><br/>
        +44 7741 119010</p>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps?q=Calle+Alemania+1,+Torreón+Golf+Centro,+29630&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </main>
  );
}


