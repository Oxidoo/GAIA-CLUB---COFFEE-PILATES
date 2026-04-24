// Contact Page
function ContactPage({ setPage }) {
  return (
    <div className="page-root">
      <section className="contact-hero" data-screen-label="Contact Hero">
        <div className="contact-hero-bg" />
        <div className="eyebrow" style={{ marginBottom: 24, opacity: 0.8 }}>Nous rencontrer</div>
        <h1><span className="script">Contact</span></h1>
        <p>
          Venez bouger, respirer et prendre le temps chez GAIA. Retrouvez ici toutes
          les informations pour organiser votre visite.
        </p>
        <div className="contact-tags">
          <span>Adresse</span>
          <span>Horaires</span>
          <span>Contact</span>
        </div>
      </section>

      <section className="contact-duo">
        <div className="contact-duo-card">
          <img src="contact/contact-2.jpg" alt="Le Club" />
          <div className="contact-duo-label"><span className="script">Club</span></div>
        </div>
        <div className="contact-duo-card">
          <img src="contact/contact-3.jpg" alt="Le Coffee Shop" />
          <div className="contact-duo-label"><span className="script">Coffee Shop</span></div>
        </div>
      </section>

      <section className="contact-infos">
        <div className="contact-infos-top">
          <div className="eyebrow" style={{ fontSize: 13, letterSpacing: '0.28em' }}>GAIA CLUB</div>
          <p className="contact-infos-address">79 Avenue Ledru Rollin, 75012 — Paris</p>
        </div>
        <div className="contact-infos-cols">
          <div className="contact-infos-col">
            <h4>Horaires du club &amp; coffee shop</h4>
            <p>Du lundi au dimanche 7h15 — 21h30</p>
          </div>
          <div className="contact-infos-sep" />
          <div className="contact-infos-col">
            <h4>Contact</h4>
            <p>
              Email : <a href="mailto:contact@gaia-club.com">contact@gaia-club.com</a> — <a href="tel:+33180880560">01 80 88 05 60</a><br/>
              Instagram : <a href="#" onClick={e => e.preventDefault()}>@gaiaclub.paris</a>
            </p>
          </div>
        </div>
        <a href="mailto:contact@gaia-club.com" className="btn btn-primary">Nous écrire</a>
      </section>

      <section className="contact-photo-block">
        <img src="contact/contact-4.jpg" alt="GAIA Studio" />
      </section>

      <Marquee />

      <Outro setPage={setPage} />
    </div>
  );
}

window.ContactPage = ContactPage;
