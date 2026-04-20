// Club Page
function ClubPage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };
  return (
    <div className="page-root">
      <section className="club-hero" data-screen-label="Club Hero">
        <div className="club-hero-bg" />
        <div>
          <div className="eyebrow">A space dedicated to movement and wellbeing</div>
          <h1>
            Le <span className="script">Club</span>
          </h1>
        </div>
      </section>

      <Marquee />

      <section className="club-intro">
        <div className="club-intro-title">
          <div className="eyebrow" style={{ marginBottom: 24, opacity: 0.6 }}>L'Esprit Gaia</div>
          <h2>
            <span className="script">The</span> Art<br/>
            <span style={{ fontWeight: 300 }}>OF BALANCE</span>
          </h2>
        </div>
        <div className="club-intro-body">
          <p>
            Situé au cœur du 12<sup>e</sup> arrondissement de Paris, GAIA est bien plus qu'un studio de Pilates.
            C'est un lieu pensé comme une véritable expérience, où le mouvement devient un art de vivre.
          </p>
          <p>
            Ouvert à tous, du débutant au pratiquant confirmé, le studio propose différentes pratiques
            autour du mouvement et du bien-être, notamment le Reformer Pilates, le Pilates sur tapis,
            le Hot Pilates et le Yoga.
          </p>
          <p>
            Chaque séance est une invitation à se reconnecter à son corps, à se renforcer et à retrouver
            de l'énergie dans un cadre élégant et inspirant.
          </p>
          <div style={{ marginTop: 32 }}>
            <button className="btn btn-primary" onClick={() => go('tarifs')}>Découvrir nos offres</button>
          </div>
        </div>
      </section>

      <section className="club-mouvement">
        <img src="assets/club/lieu-mouvement.jpg" alt="Un lieu pensé pour le mouvement" />
        <div>
          <div className="eyebrow">Le studio</div>
          <h2>
            Un lieu pensé<br/>pour le <span className="script">mouvement</span>
          </h2>
          <p>
            Le studio propose deux salles complémentaires : une salle Reformer équipée de machines
            haut de gamme, et une salle plus intimiste, accueillant jusqu'à 10 personnes, dédiée aux
            cours sur tapis, au yoga et au Hot Pilates.
          </p>
          <p>
            Pour certaines pratiques, la salle est chauffée jusqu'à 35°C, favorisant un travail musculaire
            intense tout en améliorant la souplesse. Des vestiaires premium ont été pensés pour le confort
            de chacun, dans un lieu ouvert aux femmes comme aux hommes.
          </p>
        </div>
      </section>

      <section className="banner">
        <div className="banner-img">
          <img src="assets/home/coffee-shop.jpg" alt="Coffee shop Gaia" />
        </div>
        <div className="banner-content">
          <div className="eyebrow">Un lieu de vie</div>
          <h2>Coffee <span className="script">Shop</span></h2>
          <p>
            GAIA a été pensé comme un véritable lieu de vie, où l'on peut prendre le temps avant
            ou après sa séance. Le studio dispose d'un coffee shop, proposant cafés, boissons et
            options saines, pour prolonger l'expérience dans une atmosphère conviviale.
          </p>
          <div><button className="btn btn-outline">Voir le menu</button></div>
        </div>
      </section>

      <section className="fondateurs">
        <div className="fondateurs-inner">
          <div className="fondateurs-images">
            <img src="assets/club/fondateurs-1.jpg" alt="" />
            <img src="assets/club/fondateurs-2.jpg" alt="" />
          </div>
          <div className="fondateurs-content">
            <div className="eyebrow">Les fondateurs</div>
            <h2>Deux Parisiens,<br/>une même <span className="script">passion</span></h2>
            <p>
              GAIA a été imaginé par deux Parisiens passionnés par le mouvement et le bien-être.
              Leur ambition : créer un lieu chaleureux et inspirant, où l'on prend plaisir à bouger,
              à transpirer et à se retrouver.
            </p>
            <p>
              Chaque détail du studio a été pensé pour offrir une expérience à la fois exigeante,
              confortable et élégante.
            </p>
          </div>
        </div>
      </section>

      <Outro setPage={setPage} />
    </div>
  );
}

window.ClubPage = ClubPage;
