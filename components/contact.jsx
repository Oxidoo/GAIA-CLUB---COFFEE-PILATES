// Contact Page
function ContactPage({ setPage }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ firstName: '', lastName: '', email: '', phone: '', subject: 'Général', message: '' });
  const onChange = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="page-root">
      <section className="contact-hero" data-screen-label="Contact Hero">
        <div className="eyebrow" style={{ marginBottom: 24, opacity: 0.6 }}>Nous rencontrer</div>
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

      <div className="contact-grid">
        <div className="contact-info">
          <div className="eyebrow" style={{ marginBottom: 16, opacity: 0.6 }}>Le Club</div>
          <h2>GAIA <span className="script">Club</span></h2>

          <div className="info-block">
            <h4>Adresse</h4>
            <p>79 Avenue Ledru Rollin<br/>75012 — Paris</p>
          </div>
          <div className="info-block">
            <h4>Horaires — Club & Coffee Shop</h4>
            <p>Du lundi au dimanche<br/>7h15 — 21h30</p>
          </div>
          <div className="info-block">
            <h4>Nous écrire</h4>
            <p>
              <a href="mailto:contact@gaia-club.com">contact@gaia-club.com</a><br/>
              <a href="tel:+33180880560">01 80 88 05 60</a>
            </p>
          </div>
          <div className="info-block">
            <h4>Réseaux</h4>
            <p><a href="#" onClick={(e) => e.preventDefault()}>@gaiaclub.paris</a></p>
          </div>
          <div className="info-block">
            <h4>S'y rendre</h4>
            <div className="info-transport">
              Métro · Ledru Rollin<br/>
              Bus · Ligne 61 — N16 — N34<br/>
              Vélib' · Station à 100 m<br/>
              Parking · Q-Park Bastille Saint-Antoine
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Nous écrire</h3>
          <p>Une question, une demande particulière ? Nous vous répondons sous 24h.</p>
          {sent ? (
            <div style={{ padding: '60px 0', textAlign: 'center' }}>
              <div className="script" style={{ fontSize: 56, color: 'var(--marron)', marginBottom: 16 }}>Merci !</div>
              <p style={{ color: 'var(--marron-soft)' }}>Votre message a bien été envoyé.<br/>Nous revenons vers vous très vite.</p>
              <button className="btn btn-outline" style={{ marginTop: 32 }} onClick={() => setSent(false)}>Envoyer un autre message</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-field"><label>Prénom</label><input type="text" value={form.firstName} onChange={onChange('firstName')} required /></div>
                <div className="form-field"><label>Nom</label><input type="text" value={form.lastName} onChange={onChange('lastName')} required /></div>
              </div>
              <div className="form-row">
                <div className="form-field"><label>Email</label><input type="email" value={form.email} onChange={onChange('email')} required /></div>
                <div className="form-field"><label>Téléphone</label><input type="tel" value={form.phone} onChange={onChange('phone')} /></div>
              </div>
              <div className="form-field">
                <label>Sujet</label>
                <select value={form.subject} onChange={onChange('subject')}>
                  <option>Général</option>
                  <option>Cours & planning</option>
                  <option>Abonnements & offres</option>
                  <option>Coffee shop</option>
                  <option>Privatisation</option>
                </select>
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea value={form.message} onChange={onChange('message')} required placeholder="Dites-nous tout…" />
              </div>
              <button className="btn btn-primary" type="submit">Envoyer le message</button>
            </form>
          )}
        </div>
      </div>

      <section className="coffee-banner">
        <div className="coffee-banner-img" />
        <div className="coffee-banner-content">
          <div className="eyebrow">Un lieu de vie</div>
          <h2>Le <span className="script">Coffee Shop</span></h2>
          <p>Ouvert à tous, pour un café avant la séance ou une pause en fin de journée. Options saines, matcha, boissons fermentées et pâtisseries maison.</p>
          <div><button className="btn btn-outline">Voir le menu</button></div>
        </div>
      </section>

      <section className="map-block">
        <h2>Venir au <span style={{ fontFamily: 'var(--font-script)' }}>studio</span></h2>
        <div className="map-frame">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.3775%2C48.8485%2C2.3825%2C48.8515&amp;layer=mapnik&amp;marker=48.8500%2C2.3800"
            title="Carte GAIA"
            loading="lazy"
          />
        </div>
      </section>

      <Outro setPage={setPage} />
    </div>
  );
}

window.ContactPage = ContactPage;
