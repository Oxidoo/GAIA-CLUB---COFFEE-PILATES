// Cours Page
function CoursPage({ setPage }) {
  const go = (id) => { setPage(id); window.scrollTo(0, 0); };

  const cours = [
    {
      kicker: 'Reformer',
      title: <>Reformer <span className="script">Pilates</span></>,
      tagline: 'Un entraînement précis, une transformation en profondeur.',
      desc: `Résistance contrôlée, mouvements fluides et travail ciblé : le Reformer sculpte les muscles profonds, améliore l'alignement et développe une force stable et durable. Une pratique exigeante, maîtrisée et intensément efficace.`,
      duree: '45 à 50 min',
      niveau: 'Débutants & confirmés',
      objectif: 'Renforcement & stabilité',
      img: 'assets/cours/cours-1.jpg',
    },
    {
      kicker: 'Mat Pilates',
      title: <>Mat <span className="script">Pilates</span></>,
      tagline: 'La maîtrise du mouvement, en toute simplicité.',
      desc: `Au sol, chaque geste demande précision et contrôle. Le Mat Pilates renforce en profondeur, améliore la posture et développe une stabilité durable grâce au poids du corps et aux accessoires.`,
      duree: '45 à 50 min',
      niveau: 'Débutants & confirmés',
      objectif: 'Gainage & posture',
      img: 'assets/cours/cours-2.jpg',
    },
    {
      kicker: 'Hot Pilates',
      title: <>Hot <span className="script">Pilates</span></>,
      tagline: "L'intensité maîtrisée, la chaleur comme catalyseur.",
      desc: `À 35°C, le corps se réchauffe, les muscles travaillent en profondeur et l'endurance se développe naturellement. Une pratique dynamique au sol, rythmée et exigeante, qui renforce, tonifie et libère les tensions.`,
      duree: '45 à 50 min',
      niveau: 'Débutants & confirmés',
      objectif: 'Endurance & detox',
      img: 'assets/cours/cours-3.jpg',
    },
    {
      kicker: 'Yoga',
      title: <>Yoga<span className="script"> flow</span></>,
      tagline: 'Fluidité, respiration et équilibre.',
      desc: `Une pratique qui relie le mouvement au souffle. Le Yoga développe souplesse, mobilité et stabilité tout en apaisant le mental. Un temps pour ralentir, s'aligner et retrouver l'équilibre.`,
      duree: '45 à 60 min',
      niveau: 'Débutants & confirmés',
      objectif: 'Souplesse & respiration',
      img: 'assets/cours/cours-4.jpg',
    },
  ];

  return (
    <div className="page-root">
      <section className="cours-hero" style={{ paddingTop: 180 }} data-screen-label="Cours Hero">
        <div className="eyebrow" style={{ marginBottom: 24, opacity: 0.6 }}>L'Expérience Gaia</div>
        <h1>Les <span className="script">Cours</span></h1>
        <p>
          Chez GAIA, chaque cours est pensé pour renforcer le corps, améliorer la mobilité
          et cultiver le bien-être. Que vous recherchiez une pratique dynamique, profonde
          ou plus douce, nos cours s'adaptent à tous les niveaux.
        </p>
        <div className="cours-hero-tags">
          <span>Reformer</span>
          <span>Mat Pilates</span>
          <span>Hot Pilates</span>
          <span>Yoga</span>
        </div>
      </section>

      <Marquee />

      <div>
        {cours.map((c, i) => (
          <section className="cours-detail" key={i}>
            <div className="cours-detail-img">
              <img src={c.img} alt="" />
            </div>
            <div className="cours-detail-content">
              <div className="kicker">{c.kicker}</div>
              <h2>{c.title}</h2>
              <p className="tagline">{c.tagline}</p>
              <p>{c.desc}</p>
              <div className="cours-specs">
                <div className="cours-spec">
                  <div className="eyebrow">Durée</div>
                  <strong>{c.duree}</strong>
                </div>
                <div className="cours-spec">
                  <div className="eyebrow">Niveau</div>
                  <strong>{c.niveau}</strong>
                </div>
                <div className="cours-spec">
                  <div className="eyebrow">Objectifs</div>
                  <strong>{c.objectif}</strong>
                </div>
              </div>
              <div style={{ marginTop: 32 }}>
                <button className="btn btn-primary" onClick={() => go('tarifs')}>Réserver une séance</button>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="cours-conseils">
        <div className="eyebrow" style={{ marginBottom: 24, opacity: 0.6 }}>Avant votre séance</div>
        <h2>Conseils pour <span className="script">bien débuter</span></h2>
        <div className="conseils-grid">
          <div className="conseil"><div className="conseil-num">01</div><p>Hydratez-vous bien avant de venir.</p></div>
          <div className="conseil"><div className="conseil-num">02</div><p>Prévoyez une serviette confortable.</p></div>
          <div className="conseil"><div className="conseil-num">03</div><p>Écoutez votre rythme et vos limites.</p></div>
          <div className="conseil"><div className="conseil-num">04</div><p>Arrivez quelques minutes en avance pour vous installer.</p></div>
        </div>
      </section>

      <Outro setPage={setPage} />
    </div>
  );
}

window.CoursPage = CoursPage;
