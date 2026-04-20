// Shared UI: Nav, Footer, Mobile Menu
const NAV_LINKS = [
  { id: 'club', label: 'Le Club' },
  { id: 'cours', label: 'Cours' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'contact', label: 'Contact' },
];

function Nav({ page, setPage, variant = 'solid' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const go = (id) => { setPage(id); setMobileOpen(false); window.scrollTo(0, 0); };

  return (
    <>
      <header className={`nav ${variant === 'light' ? 'light' : ''} ${scrolled ? 'scrolled' : ''} ${variant === 'solid' ? 'solid' : ''}`}>
        <a className="nav-logo" href="#" onClick={(e) => { e.preventDefault(); go('home'); }} aria-label="GAIA — Accueil">
          <img src="assets/logo-jaune.png" alt="GAIA" className="nav-logo-img" />
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(l => (
            <a key={l.id} href="#" className={page === l.id ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); go(l.id); }}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); go('tarifs'); }}>
          Réserver
        </a>
        <button className={`nav-burger ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }}>Accueil</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go('club'); }}>Le Club</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go('cours'); }}>Cours</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go('tarifs'); }}>Tarifs</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>Contact</a>
          <a href="#" className="script-tag" onClick={(e) => { e.preventDefault(); go('tarifs'); }}>Réserver</a>
        </nav>
        <div>
          <a href="#" className="mobile-menu-cta" onClick={(e) => { e.preventDefault(); go('tarifs'); }}>
            Vivre ma séance
          </a>
          <div className="mobile-menu-footer">
            <div>79 Av. Ledru Rollin · 75012 Paris</div>
            <div>7h15 — 21h30 · 7/7</div>
            <div>contact@gaia-club.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <h3>Inscrivez-vous à notre <span className="script">newsletter</span></h3>
        <div>
          <p>Pour recevoir nos actualités, nos offres exclusives et bénéficier d'avantages fidélité.</p>
          <form className="newsletter-form" style={{ marginTop: 24 }} onSubmit={(e) => { e.preventDefault(); alert('Merci, vous êtes inscrit·e.'); }}>
            <input type="email" placeholder="Votre adresse e-mail" required />
            <button type="submit">Je m'inscris</button>
          </form>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <img src="assets/logo-footer-marron.svg" alt="GAIA" />
          <p>Un lieu où mouvement et pause coexistent, au cœur du 12<sup>e</sup> arrondissement de Paris.</p>
        </div>
        <div className="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); go('club'); }}>Le Club</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); go('cours'); }}>Cours</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); go('tarifs'); }}>Tarifs</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); go('contact'); }}>Contact</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Shop</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>Planning</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Le Club</h4>
          <address>
            79 Avenue Ledru Rollin<br/>
            75012 — Paris<br/><br/>
            Du lundi au dimanche<br/>
            7h15 — 21h30
          </address>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:contact@gaia-club.com">contact@gaia-club.com</a></li>
            <li><a href="tel:+33180880560">01 80 88 05 60</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()}>@gaiaclub.paris</a></li>
          </ul>
          <div className="footer-socials" style={{ marginTop: 20 }}>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Instagram">
              <img src="assets/insta.png" alt="" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="TikTok">
              <img src="assets/tiktok.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 GAIA Club — Tous droits réservés</div>
        <div className="footer-legal">
          <a href="#" onClick={(e) => e.preventDefault()}>Mentions légales</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Cookies</a>
          <a href="#" onClick={(e) => e.preventDefault()}>CGV</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Retour produit</a>
        </div>
      </div>
    </footer>
  );
}

function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>Elevated Movement</span>
        <span>Refined Rituals</span>
        <span>Timeless Harmony</span>
        <span>Elevated Movement</span>
        <span>Refined Rituals</span>
        <span>Timeless Harmony</span>
        <span>Elevated Movement</span>
        <span>Refined Rituals</span>
        <span>Timeless Harmony</span>
      </div>
    </div>
  );
}

function Outro({ setPage }) {
  return (
    <section className="outro">
      <h2>À bientôt<br/>chez Gaia</h2>
      <p>Votre espace pour bouger, respirer et ralentir.</p>
      <button className="btn btn-primary" onClick={() => { setPage('tarifs'); window.scrollTo(0,0); }}>
        M'inscrire
      </button>
    </section>
  );
}

Object.assign(window, { Nav, Footer, Marquee, Outro, NAV_LINKS });
