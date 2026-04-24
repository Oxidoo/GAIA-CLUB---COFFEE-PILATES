// Tarifs Page
function TarifsPage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  const packs = [
    { title: 'Pack 3 cours', valid: 'Valable 1 mois', price: '90€', sub: 'au lieu de 120€' },
    { title: 'Pack 5 cours', valid: 'Valable 3 mois', price: '185€', sub: 'soit 37€ / cours' },
    { title: 'Pack 10 cours', valid: 'Valable 6 mois', price: '350€', sub: 'soit 35€ / cours' },
    { title: 'Pack 20 cours', valid: 'Valable 9 mois', price: '660€', sub: 'soit 33€ / cours' },
    { title: 'Pack 50 cours', valid: 'Valable 12 mois', price: '1400€', sub: 'soit 28€ / cours' },
  ];

  const abos = [
    { name: '1 cours / semaine', price: '140', unit: '€ / mois' },
    { name: '2 cours / semaine', price: '265', unit: '€ / mois' },
    { name: 'Illimité', price: '500', unit: '€ / mois' },
  ];

  const offres = [
    { kicker: "Offre d'essai", title: <>2 cours<br/><span className="script">découverte</span></>, desc: 'Valable 1 mois — pour découvrir le studio à votre rythme.', price: '60€' },
    { kicker: 'Étudiant·e', title: <>Offre <span className="script">étudiant</span></>, desc: 'Sur présentation de la carte étudiante en cours de validité.', price: '25€' },
    { kicker: 'Créneau exclusif', title: <>Yoga & <span className="script">Mat Pilates</span></>, desc: "Accès à nos créneaux exclusifs Yoga et Mat Pilates aux heures creuses.", price: '32€' },
  ];

  return (
    <div className="page-root">
      <section className="tarif-hero" data-screen-label="Tarif Hero">
        <div className="tarif-hero-bg" />
        <h1>Les <span className="script">O<span className="offres-ff">ff</span>res</span></h1>
        <div className="eyebrow" style={{ marginTop: 20, opacity: 0.8 }}>Nos formules</div>
      </section>

      <Marquee />

      <section className="tarif-unite">
        <div className="tarif-unite-img" />
        <div className="tarif-unite-box">
          <div className="eyebrow">À l'unité</div>
          <h2>Un <span className="script">cours</span></h2>
          <div className="price">40€</div>
          <p>Reformer · Hot Pilates · Hot Yoga · Mat Pilates · Yoga — valable 1 mois, sans engagement.</p>
          <div><button className="btn btn-primary">Réserver un cours</button></div>
        </div>
      </section>

      <section className="packs">
        <div className="packs-head">
          <div className="eyebrow">Nos Packs</div>
          <h2>Rejoindre <span className="script">l'expérience</span></h2>
          <p>Choisissez le pack qui correspond à votre rythme. Plus vous pratiquez, plus le prix par cours baisse.</p>
        </div>
        <div className="packs-table">
          {packs.map((p, i) => (
            <div className="pack-row" key={i}>
              <div className="pack-row-title">{p.title}</div>
              <div className="pack-row-valid">{p.valid}</div>
              <div className="pack-row-price">{p.price}<small>{p.sub}</small></div>
              <button className="btn btn-primary">Acheter</button>
            </div>
          ))}
        </div>
      </section>

      <section className="abonnements">
        <div className="abonnements-head">
          <div className="eyebrow">Nos Abonnements</div>
          <h2>Un <span className="script">engagement</span> mensuel</h2>
        </div>
        <div className="abos-grid">
          {abos.map((a, i) => (
            <div className="abo-card" key={i}>
              <h3>{a.name}</h3>
              <div className="price">{a.price}<small>{a.unit}</small></div>
              <p style={{ color: 'rgba(247,244,239,0.7)', fontSize: 14 }}>Accès aux cours, annulation jusqu'à 6h avant, kit de bienvenue inclus.</p>
              <button className="btn btn-light" style={{ marginTop: 'auto' }}>M'abonner</button>
            </div>
          ))}
        </div>

        <div className="avantages">
          <h3>Avantages abonnement</h3>
          <div className="avantages-grid">
            <div className="avantage"><strong>Kit</strong><p>de bienvenue offert</p></div>
            <div className="avantage"><strong>1</strong><p>boisson offerte à chaque cours</p></div>
            <div className="avantage"><strong>-10%</strong><p>sur notre shop</p></div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 40, fontSize: 13, color: 'rgba(247,244,239,0.6)', letterSpacing: '0.05em' }}>
            + invitations exclusives à nos évènements et workshops<br/>
            + annulations jusqu'à 6h avant le cours · accès prioritaire aux listes d'attente
          </p>
        </div>
      </section>

      <section className="offres-speciales">
        <div className="offres-head">
          <h2>Offres <span className="script">spéciales</span></h2>
        </div>
        <div className="offres-grid">
          {offres.map((o, i) => (
            <div className="offre-card" key={i}>
              <div className="eyebrow">{o.kicker}</div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <div className="offre-price">{o.price}</div>
              <button className="btn btn-primary">Profiter de l'offre</button>
            </div>
          ))}
        </div>
      </section>

      <section className="reservation">
        <div className="eyebrow">Application</div>
        <h2>Réserver ma <span className="script">séance</span></h2>
        <div className="reservation-steps">
          <div className="reservation-step"><strong>01</strong><p>Choisissez<br/>un créneau</p></div>
          <div className="reservation-step"><strong>02</strong><p>Choisissez<br/>un cours</p></div>
          <div className="reservation-step"><strong>03</strong><p>Réservez en<br/>quelques clics</p></div>
        </div>
        <button className="btn btn-light">Réserver maintenant</button>
      </section>

      <Outro setPage={setPage} />
    </div>
  );
}

window.TarifsPage = TarifsPage;
