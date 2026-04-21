// Home Page
function HomePage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  const cours = [
    { id: 'reformer', name: 'Reformer', img: 'assets/home/cours-reformer.jpg' },
    { id: 'mat', name: 'Mat', img: 'assets/home/cours-mat.jpg' },
    { id: 'hot', name: 'Hot', img: 'assets/home/cours-hot.jpg' },
    { id: 'yoga', name: 'Yoga', img: 'assets/home/cours-yoga.jpg' },
  ];

  const passes = [
    { count: '1', title: 'Discover', titleCont: 'the experience', eyebrow: '1 Cours', price: '28', unit: '€', desc: 'Idéal pour explorer le studio et vivre une parenthèse de mouvement en pleine conscience.', cta: 'Réserver' },
    { count: '5', title: 'Build your', titleCont: 'ritual', eyebrow: '5 Cours', price: '130', unit: '€', desc: 'Pour installer une régularité, renforcer le corps et intégrer le mouvement dans votre semaine.', cta: "M'abonner", featured: true },
    { count: '∞', title: 'Live the', titleCont: 'practice', eyebrow: 'Illimité', price: '220', unit: '€ / mois', desc: 'Accès libre à tous les cours pour faire du mouvement un véritable art de vivre.', cta: "M'abonner" },
  ];

  return (
    <div className="page-root">
      <section className="hero" data-screen-label="01 Home Hero">
        <div className="hero-bg" />
        <div className="hero-inner">
          <h1 className="hero-title">
            <span className="hero-title-script">
              <span className="hero-the">The </span><span className="hero-art">Art</span>
            </span>
            <span className="hero-title-bold">OF BALANCE</span>
          </h1>
          <p className="hero-subtitle">Pilates &amp; Coffee Shop</p>
          <button className="btn-hero-cta" onClick={() => go('tarifs')}>
            Vivre ma séance
          </button>
        </div>
      </section>

      <Marquee />

      <section className="intro">
        <div className="eyebrow intro-eyebrow">L'esprit Gaia</div>
        <h2>
          Un lieu où <span className="script">mouvement</span> et <span className="script">pause</span> coexistent
        </h2>
        <p className="intro-lede">
          Au cœur du 12<sup>e</sup> arrondissement, GAIA est né d'une envie simple :
          créer un espace où le corps bouge et où l'esprit ralentit. Entre pilates, yoga et instants suspendus,
          chaque détail invite à une pause dans le rythme du quotidien.
        </p>
        <div className="intro-stats">
          <div className="intro-stat">
            <strong>200 m²</strong>
            <span>Dédiés à la performance & à l'expérience Gaia</span>
          </div>
          <div className="intro-stat">
            <strong>2 Studios</strong>
            <span>Sur machine ou sur tapis</span>
          </div>
          <div className="intro-stat">
            <strong>Coffee Shop</strong>
            <span>Du matin à la dernière pause</span>
          </div>
          <div className="intro-stat">
            <strong>Vestiaires</strong>
            <span>Premium, spacieux & tout équipés</span>
          </div>
        </div>
      </section>

      <section className="cours-section" data-screen-label="02 Home Cours">
        <div className="container">
          <div className="cours-head">
            <h2>
              Nos <span className="script">cours</span>
            </h2>
            <a href="#" className="arrow-link" onClick={(e) => { e.preventDefault(); go('cours'); }}>
              Voir tous les cours →
            </a>
          </div>
          <div className="cours-grid">
            {cours.map(c => (
              <a key={c.id} href="#" className="cours-card" style={{ borderRadius: '10px' }} onClick={(e) => { e.preventDefault(); go('cours'); }}>
                <img src={c.img} alt={c.name} />
                <div className="cours-card-label">
                  <h3>{c.name}</h3>
                  <div className="cours-card-arrow">→</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="passes" data-screen-label="03 Home Class Passes">
        <div className="passes-head">
          <div className="eyebrow">Class Passes</div>
          <h2>
            Trouvez votre <span className="script">rituel</span>
          </h2>
          <p>Des formules pensées pour évoluer avec votre pratique et votre rythme.</p>
        </div>
        <div className="passes-grid">
          {passes.map((p, i) => (
            <div key={i} className={`pass-card ${p.featured ? 'featured' : ''}`}>
              <div className="eyebrow" style={{ color: 'var(--jaune)' }}>{p.eyebrow}</div>
              <div className="pass-card-count">{p.count}<small>{p.title}<br/>{p.titleCont}</small></div>
              <div className="pass-card-price">{p.price}<sup>{p.unit}</sup></div>
              <div className="pass-card-desc">{p.desc}</div>
              <button className="btn btn-light" onClick={() => go('tarifs')}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="banner">
        <div className="banner-img">
          <img src="assets/home/coffee-shop.jpg" alt="Coffee shop" />
        </div>
        <div className="banner-content">
          <div className="eyebrow">Pilates & Coffee Shop</div>
          <h2>
            La <span className="script">pause</span> Gaia
          </h2>
          <p>
            Notre coffee shop, ouvert à tous, prolonge l'expérience — que l'on vienne pratiquer
            ou simplement savourer un café et un instant suspendu.
          </p>
          <div><button className="btn btn-outline" onClick={() => go('club')}>Découvrir le lieu</button></div>
        </div>
      </section>

      <section className="shop-mosaic">
        <div className="shop-head">
          <div className="eyebrow">Shop</div>
          <h2>Merch + <span className="script">équipement</span></h2>
          <p>Les essentiels pour accompagner votre pratique, dedans comme dehors.</p>
        </div>
        <div className="shop-grid">
          <div className="shop-card"><img src="assets/home/shop-1.jpg" alt="Outfit" /><div className="shop-card-meta">Outfit</div></div>
          <div className="shop-card"><img src="assets/home/shop-2.jpg" alt="Chaussettes" /><div className="shop-card-meta">Chaussettes Pilates</div></div>
          <div className="shop-card"><img src="assets/home/shop-3.jpg" alt="Tote bag" /><div className="shop-card-meta">Tote bag</div></div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <button className="btn btn-primary" onClick={() => alert('Shop bientôt disponible.')}>Découvrir le shop</button>
        </div>
      </section>

      <section className="banner reverse">
        <div className="banner-img">
          <img src="assets/home/class-passes.jpg" alt="Class passes" />
        </div>
        <div className="banner-content dark">
          <div className="eyebrow" style={{ color: 'var(--jaune)' }}>Planning & Réservation</div>
          <h2 style={{ color: 'var(--jaune)' }}>
            Réservez votre <span className="script">séance</span>
          </h2>
          <p>
            Consultez le planning, choisissez votre créneau et votre cours.
            Réservation en quelques clics, annulation jusqu'à 6h avant le cours.
          </p>
          <div><button className="btn btn-light" onClick={() => go('tarifs')}>Voir le planning</button></div>
        </div>
      </section>

      <section className="galerie" data-screen-label="04 Home Galerie">
        <div className="galerie-head">
          <h2>Galerie</h2>
          <p>Quelques fragments de l'univers GAIA — matières, lumières, détails du studio.</p>
        </div>
        <div className="galerie-strip">
          <img src="assets/home/galerie-1.jpg" alt="" />
          <img src="assets/home/galerie-2.jpg" alt="" />
          <img src="assets/home/galerie-3.jpg" alt="" />
          <img src="assets/home/galerie-4.jpg" alt="" />
          <img src="assets/home/galerie-5.jpg" alt="" />
        </div>
      </section>

      <Outro setPage={setPage} />
    </div>
  );
}

window.HomePage = HomePage;
