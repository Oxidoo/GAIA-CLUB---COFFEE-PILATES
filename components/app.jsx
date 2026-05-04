// ============ TWEAK DEFAULTS ============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "colorMarron": "#30120A",
  "colorMarronSoft": "#4a2a1e",
  "colorJaune": "#FFEC99",
  "colorBeige": "#F7F4EF",
  "colorBlanc": "#FBFAF5",
  "colorLine": "rgba(48,18,10,0.18)",
  "fontBody": "Manrope",
  "fontScript": "Zapfino",
  "bodyFontSize": 16,
  "heroFontSize": 72,
  "navLetterSpacing": 0.18,
  "btnRadius": 999,
  "cardRadius": 10,
  "cardShadow": false,
  "sectionPadding": 120,
  "containerMaxWidth": 1440,
  "heroOverlay": 0.55,
  "heroShowHours": false,
  "heroMinHeight": 100,
  "transitionSpeed": 0.3,
  "hoverZoom": 1.05,
  "showMarquee": true,
  "showGalerie": true,
  "showShop": true,
  "showStats": true,
  "showFondateurs": true,
  "coursColumns": 4,
  "footerDark": true,
  "navCompact": false,
  "navStyle": "transparent",
  "marqueeRunning": true
}/*EDITMODE-END*/;

window.__TWEAK_DEFAULTS__ = TWEAK_DEFAULTS;

// ============ Tweaks host ============
function TweaksHost() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') {
        setVisible(true);
        document.body.classList.add('tweaks-open');
      }
      if (e.data.type === '__deactivate_edit_mode') {
        setVisible(false);
        document.body.classList.remove('tweaks-open');
      }
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  if (!visible) return null;
  return (
    <TweaksPanel
      defaults={TWEAK_DEFAULTS}
      onClose={() => {
        setVisible(false);
        document.body.classList.remove('tweaks-open');
        window.parent.postMessage({ type: '__deactivate_edit_mode' }, '*');
      }}
    />
  );
}

// ============ Main App ============
function App() {
  const [page, setPageState] = React.useState('home');
  const setPage = (p) => {
    setPageState(p);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  React.useEffect(() => {
    const handler = (e) => {
      if (!e.data || e.data.type !== '__edit_mode_set_keys') return;
      const v = e.data.edits;
      if (!v) return;
      const b = document.body;
      b.dataset.hideMarquee = v.showMarquee === false ? '1' : '';
      b.dataset.hideGalerie = v.showGalerie === false ? '1' : '';
      b.dataset.hideShop = v.showShop === false ? '1' : '';
      b.dataset.hideStats = v.showStats === false ? '1' : '';
      b.dataset.hideFondateurs = v.showFondateurs === false ? '1' : '';
      b.dataset.coursCols = v.coursColumns || 4;
      b.dataset.navCompact = v.navCompact ? '1' : '';
      document.documentElement.style.setProperty('--tw-hero-minheight', v.heroMinHeight || 100);
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const navVariant = (page === 'home' || page === 'club' || page === 'cours' || page === 'tarifs' || page === 'contact') ? 'light' : 'solid';

  let PageEl = null;
  if (page === 'home') PageEl = <HomePage setPage={setPage} />;
  else if (page === 'club') PageEl = <ClubPage setPage={setPage} />;
  else if (page === 'cours') PageEl = <CoursPage setPage={setPage} />;
  else if (page === 'tarifs') PageEl = <TarifsPage setPage={setPage} />;
  else if (page === 'contact') PageEl = <ContactPage setPage={setPage} />;

  return (
    <>
      <Nav page={page} setPage={setPage} variant={navVariant} />
      <main key={page}>{PageEl}</main>
      <Footer setPage={setPage} />
      <SpeedInsights />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<TweaksHost />);
