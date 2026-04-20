// ============ GAIA Tweaks Panel ============
// Applied via CSS custom property overrides injected into :root

function TweaksPanel({ defaults, onClose }) {
  const [vals, setVals] = React.useState({ ...defaults });
  const [section, setSection] = React.useState('colors');

  // Apply all values to CSS & DOM
  const apply = React.useCallback((v) => {
    const root = document.documentElement;
    root.style.setProperty('--marron', v.colorMarron);
    root.style.setProperty('--marron-soft', v.colorMarronSoft);
    root.style.setProperty('--jaune', v.colorJaune);
    root.style.setProperty('--beige', v.colorBeige);
    root.style.setProperty('--blanc', v.colorBlanc);
    root.style.setProperty('--line', v.colorLine);

    // Font body
    const fontBodyMap = {
      'Manrope': "'Manrope', sans-serif",
      'DM Sans': "'DM Sans', sans-serif",
      'Cormorant Garamond': "'Cormorant Garamond', serif",
      'Playfair Display': "'Playfair Display', serif",
      'Nunito': "'Nunito', sans-serif",
    };
    const fontScriptMap = {
      'Zapfino': "'Zapfino', 'Apple Chancery', cursive",
      'Dancing Script': "'Dancing Script', cursive",
      'Great Vibes': "'Great Vibes', cursive",
      'Pacifico': "'Pacifico', cursive",
      'Pinyon Script': "'Pinyon Script', cursive",
    };
    // Load Google Fonts if needed
    const needsGF = ['DM Sans','Cormorant Garamond','Playfair Display','Nunito','Dancing Script','Great Vibes','Pacifico','Pinyon Script'];
    [v.fontBody, v.fontScript].forEach(f => {
      if (needsGF.includes(f)) {
        const id = 'gf-' + f.replace(/ /g,'-');
        if (!document.getElementById(id)) {
          const link = document.createElement('link');
          link.id = id;
          link.rel = 'stylesheet';
          link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(f)}:wght@400;500;600;700&display=swap`;
          document.head.appendChild(link);
        }
      }
    });
    root.style.setProperty('--font-body', fontBodyMap[v.fontBody] || fontBodyMap['Manrope']);
    root.style.setProperty('--font-script', fontScriptMap[v.fontScript] || fontScriptMap['Zapfino']);

    root.style.setProperty('--tw-body-size', v.bodyFontSize + 'px');
    root.style.setProperty('--tw-nav-letter', v.navLetterSpacing + 'em');
    root.style.setProperty('--tw-btn-radius', v.btnRadius + 'px');
    root.style.setProperty('--tw-section-pad', v.sectionPadding + 'px');
    root.style.setProperty('--tw-container', Math.min(v.containerMaxWidth, window.innerWidth - 48) + 'px');
    root.style.setProperty('--tw-transition', v.transitionSpeed + 's');
    root.style.setProperty('--tw-hero-overlay', v.heroOverlay);
    root.style.setProperty('--tw-hover-zoom', v.hoverZoom);
    root.style.setProperty('--tw-hero-font', v.heroFontSize + 'px');
    root.style.setProperty('--tw-card-radius', v.cardRadius + 'px');
    root.style.setProperty('--tw-shadow', v.cardShadow ? '0 8px 40px rgba(48,18,10,0.14)' : 'none');

    // Feature flags via data attributes
    document.body.dataset.hideMarquee = v.showMarquee ? '' : '1';
    document.body.dataset.hideCours = v.coursColumns === 2 ? '2' : '4';
    document.body.dataset.darkFooter = v.footerDark ? '1' : '';
    document.body.dataset.navCompact = v.navCompact ? '1' : '';

    // Post to host for persistence
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: v }, '*');
  }, []);

  const set = (k, val) => {
    const next = { ...vals, [k]: val };
    setVals(next);
    apply(next);
  };

  React.useEffect(() => { apply(vals); }, []);

  const tabs = [
    { id: 'colors', label: 'Couleurs' },
    { id: 'typo', label: 'Typo' },
    { id: 'layout', label: 'Layout' },
    { id: 'hero', label: 'Hero' },
    { id: 'components', label: 'UI' },
    { id: 'features', label: 'Contenu' },
    { id: 'motion', label: 'Motion' },
  ];

  const swatches = [
    { name: 'Marron', keys: ['colorMarron', 'colorMarronSoft'] },
    { name: 'Accent', keys: ['colorJaune'] },
    { name: 'Fonds', keys: ['colorBeige', 'colorBlanc'] },
    { name: 'Trait', keys: ['colorLine'] },
  ];

  const presets = [
    { name: 'Original', v: { colorMarron: '#30120A', colorJaune: '#FFEC99', colorBeige: '#F7F4EF', colorBlanc: '#FBFAF5', colorMarronSoft: '#4a2a1e', colorLine: 'rgba(48,18,10,0.18)' } },
    { name: 'Nuit', v: { colorMarron: '#0e0e0e', colorJaune: '#f0e0a0', colorBeige: '#1a1a1a', colorBlanc: '#111111', colorMarronSoft: '#333333', colorLine: 'rgba(255,255,255,0.14)' } },
    { name: 'Vert', v: { colorMarron: '#1a2e1a', colorJaune: '#c8e6a0', colorBeige: '#f0f5ec', colorBlanc: '#f8fbf4', colorMarronSoft: '#2e4a2e', colorLine: 'rgba(26,46,26,0.18)' } },
    { name: 'Bleu', v: { colorMarron: '#0f1e2e', colorJaune: '#b8d4f0', colorBeige: '#edf3f8', colorBlanc: '#f5f9fc', colorMarronSoft: '#1e3a52', colorLine: 'rgba(15,30,46,0.18)' } },
    { name: 'Terracotta', v: { colorMarron: '#3d1a0e', colorJaune: '#f0c090', colorBeige: '#f8ede4', colorBlanc: '#fdf8f4', colorMarronSoft: '#6b3020', colorLine: 'rgba(61,26,14,0.18)' } },
  ];

  const bodyFonts = ['Manrope', 'DM Sans', 'Cormorant Garamond', 'Playfair Display', 'Nunito'];
  const scriptFonts = ['Zapfino', 'Dancing Script', 'Great Vibes', 'Pacifico', 'Pinyon Script'];

  const S = tweakStyles;

  return (
    <div style={S.panel}>
      <div style={S.header}>
        <span style={{ fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 11 }}>Tweaks</span>
        <button style={S.closeBtn} onClick={onClose}>✕</button>
      </div>

      {/* Tabs */}
      <div style={S.tabs}>
        {tabs.map(t => (
          <button key={t.id} style={{ ...S.tab, ...(section === t.id ? S.tabActive : {}) }} onClick={() => setSection(t.id)}>
            {t.label}
          </button>
        ))}
      </div>

      <div style={S.body}>
        {/* ===== COLORS ===== */}
        {section === 'colors' && (
          <div>
            <Label>Palettes prêtes</Label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {presets.map(p => (
                <button key={p.name} style={{ ...S.presetBtn, background: p.v.colorJaune, color: p.v.colorMarron, border: `1px solid ${p.v.colorMarron}` }}
                  onClick={() => { const next = { ...vals, ...p.v }; setVals(next); apply(next); }}>
                  {p.name}
                </button>
              ))}
            </div>

            <Label>Marron principal</Label>
            <ColorRow value={vals.colorMarron} onChange={v => set('colorMarron', v)} />
            <Label>Marron doux</Label>
            <ColorRow value={vals.colorMarronSoft} onChange={v => set('colorMarronSoft', v)} />
            <Label>Jaune / accent</Label>
            <ColorRow value={vals.colorJaune} onChange={v => set('colorJaune', v)} />
            <Label>Beige (sections)</Label>
            <ColorRow value={vals.colorBeige} onChange={v => set('colorBeige', v)} />
            <Label>Blanc cassé (fond)</Label>
            <ColorRow value={vals.colorBlanc} onChange={v => set('colorBlanc', v)} />
            <Label>Couleur de trait</Label>
            <input type="text" style={S.textInput} value={vals.colorLine}
              onChange={e => set('colorLine', e.target.value)} placeholder="rgba(...)" />
          </div>
        )}

        {/* ===== TYPO ===== */}
        {section === 'typo' && (
          <div>
            <Label>Police du texte</Label>
            <Select value={vals.fontBody} onChange={v => set('fontBody', v)} options={bodyFonts} />
            <Label>Police script / accent</Label>
            <Select value={vals.fontScript} onChange={v => set('fontScript', v)} options={scriptFonts} />
            <Label>Taille du corps — {vals.bodyFontSize}px</Label>
            <Slider min={13} max={20} value={vals.bodyFontSize} onChange={v => set('bodyFontSize', v)} />
            <Label>Taille hero (min) — {vals.heroFontSize}px</Label>
            <Slider min={48} max={200} step={4} value={vals.heroFontSize} onChange={v => set('heroFontSize', v)} />
            <Label>Letter-spacing nav — {vals.navLetterSpacing}em</Label>
            <Slider min={0.08} max={0.45} step={0.01} value={vals.navLetterSpacing} onChange={v => set('navLetterSpacing', v)} />
          </div>
        )}

        {/* ===== LAYOUT ===== */}
        {section === 'layout' && (
          <div>
            <Label>Padding sections — {vals.sectionPadding}px</Label>
            <Slider min={40} max={200} step={8} value={vals.sectionPadding} onChange={v => set('sectionPadding', v)} />
            <Label>Largeur max container — {vals.containerMaxWidth}px</Label>
            <Slider min={900} max={1920} step={20} value={vals.containerMaxWidth} onChange={v => set('containerMaxWidth', v)} />
            <Label>Colonnes cours</Label>
            <Select value={String(vals.coursColumns)} onChange={v => set('coursColumns', Number(v))} options={['1', '2', '3', '4']} />
            <Label>Footer sombre</Label>
            <Toggle value={vals.footerDark} onChange={v => set('footerDark', v)} label={vals.footerDark ? 'Activé' : 'Désactivé'} />
            <Label>Nav compacte</Label>
            <Toggle value={vals.navCompact} onChange={v => set('navCompact', v)} label={vals.navCompact ? 'Activée' : 'Désactivée'} />
          </div>
        )}

        {/* ===== HERO ===== */}
        {section === 'hero' && (
          <div>
            <Label>Opacité overlay hero — {Math.round(vals.heroOverlay * 100)}%</Label>
            <Slider min={0} max={0.9} step={0.05} value={vals.heroOverlay} onChange={v => set('heroOverlay', v)} />
            <Label>Heures ouverture</Label>
            <Toggle value={vals.heroShowHours} onChange={v => set('heroShowHours', v)} label={vals.heroShowHours ? 'Affichées' : 'Masquées'} />
            <Label>Hauteur hero min — {vals.heroMinHeight}vh</Label>
            <Slider min={50} max={100} step={5} value={vals.heroMinHeight} onChange={v => set('heroMinHeight', v)} />
          </div>
        )}

        {/* ===== UI COMPONENTS ===== */}
        {section === 'components' && (
          <div>
            <Label>Rayon boutons — {vals.btnRadius}px</Label>
            <Slider min={0} max={999} step={4} value={vals.btnRadius} onChange={v => set('btnRadius', v)} />
            <Label>Rayon cartes — {vals.cardRadius}px</Label>
            <Slider min={0} max={32} step={2} value={vals.cardRadius} onChange={v => set('cardRadius', v)} />
            <Label>Ombre cartes</Label>
            <Toggle value={vals.cardShadow} onChange={v => set('cardShadow', v)} label={vals.cardShadow ? 'Activée' : 'Désactivée'} />
            <Label>Style nav</Label>
            <Select value={vals.navStyle} onChange={v => set('navStyle', v)} options={['transparent', 'frosted', 'solid']} />
            <Label>Style marquee</Label>
            <Toggle value={vals.showMarquee} onChange={v => set('showMarquee', v)} label={vals.showMarquee ? 'Visible' : 'Masqué'} />
          </div>
        )}

        {/* ===== FEATURES ===== */}
        {section === 'features' && (
          <div>
            <Label>Afficher galerie</Label>
            <Toggle value={vals.showGalerie} onChange={v => set('showGalerie', v)} label={vals.showGalerie ? 'Visible' : 'Masquée'} />
            <Label>Afficher section shop</Label>
            <Toggle value={vals.showShop} onChange={v => set('showShop', v)} label={vals.showShop ? 'Visible' : 'Masquée'} />
            <Label>Afficher stats accueil</Label>
            <Toggle value={vals.showStats} onChange={v => set('showStats', v)} label={vals.showStats ? 'Visible' : 'Masquées'} />
            <Label>Afficher fondateurs (club)</Label>
            <Toggle value={vals.showFondateurs} onChange={v => set('showFondateurs', v)} label={vals.showFondateurs ? 'Visible' : 'Masqués'} />
          </div>
        )}

        {/* ===== MOTION ===== */}
        {section === 'motion' && (
          <div>
            <Label>Vitesse transitions — {vals.transitionSpeed}s</Label>
            <Slider min={0.1} max={1.5} step={0.05} value={vals.transitionSpeed} onChange={v => set('transitionSpeed', v)} />
            <Label>Zoom hover images — ×{vals.hoverZoom}</Label>
            <Slider min={1.0} max={1.15} step={0.005} value={vals.hoverZoom} onChange={v => set('hoverZoom', v)} />
            <Label>Animation marquee</Label>
            <Toggle value={vals.marqueeRunning} onChange={v => { set('marqueeRunning', v); document.querySelectorAll('.marquee-track').forEach(el => el.style.animationPlayState = v ? 'running' : 'paused'); }} label={vals.marqueeRunning ? 'En cours' : 'Pausée'} />
          </div>
        )}

        <div style={S.resetRow}>
          <button style={S.resetBtn} onClick={() => {
            const def = window.__TWEAK_DEFAULTS__;
            setVals({ ...def });
            apply({ ...def });
          }}>Réinitialiser</button>
        </div>
      </div>
    </div>
  );
}

// ---- Sub-components ----
function Label({ children }) {
  return <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 6, marginTop: 16, opacity: 0.7 }}>{children}</div>;
}
function ColorRow({ value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
      <input type="color" value={/^#/.test(value) ? value : '#30120a'} onChange={e => onChange(e.target.value)}
        style={{ width: 36, height: 28, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }} />
      <input type="text" value={value} onChange={e => onChange(e.target.value)}
        style={{ flex: 1, padding: '6px 10px', fontSize: 12, fontFamily: 'monospace', border: '1px solid rgba(48,18,10,0.18)', background: '#fff', borderRadius: 4 }} />
    </div>
  );
}
function Slider({ min, max, step = 1, value, onChange }) {
  return (
    <input type="range" min={min} max={max} step={step} value={value}
      onChange={e => onChange(Number(e.target.value))}
      style={{ width: '100%', marginBottom: 4, accentColor: 'var(--marron)' }} />
  );
}
function Select({ value, options, onChange }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}
      style={{ width: '100%', padding: '8px 10px', fontSize: 13, border: '1px solid rgba(48,18,10,0.18)', background: '#fff', marginBottom: 4, cursor: 'pointer' }}>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
function Toggle({ value, onChange, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
      <button onClick={() => onChange(!value)}
        style={{ width: 44, height: 24, borderRadius: 12, background: value ? 'var(--marron)' : '#ccc', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.3s', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 3, left: value ? 22 : 3, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.3s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }} />
      </button>
      <span style={{ fontSize: 12, opacity: 0.8 }}>{label}</span>
    </div>
  );
}

const tweakStyles = {
  panel: {
    position: 'fixed',
    top: 0, right: 0, bottom: 0,
    width: 300,
    background: '#FBFAF5',
    borderLeft: '1px solid rgba(48,18,10,0.15)',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    color: '#30120A',
    boxShadow: '-8px 0 40px rgba(48,18,10,0.12)',
    overflowY: 'auto',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '18px 20px',
    borderBottom: '1px solid rgba(48,18,10,0.12)',
    background: '#30120A',
    color: '#FFEC99',
    flexShrink: 0,
  },
  closeBtn: {
    background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: '#FFEC99', padding: '2px 6px',
  },
  tabs: {
    display: 'flex', flexWrap: 'wrap', gap: 0,
    borderBottom: '1px solid rgba(48,18,10,0.12)',
    flexShrink: 0,
  },
  tab: {
    padding: '10px 12px', border: 'none', background: 'transparent', cursor: 'pointer',
    fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'inherit',
    color: 'rgba(48,18,10,0.6)', fontWeight: 500,
  },
  tabActive: {
    color: '#30120A', fontWeight: 700, borderBottom: '2px solid #30120A',
  },
  body: {
    padding: '4px 20px 32px', flex: 1, overflowY: 'auto',
  },
  presetBtn: {
    padding: '6px 12px', borderRadius: 99, cursor: 'pointer', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
  },
  resetRow: { marginTop: 32, paddingTop: 16, borderTop: '1px solid rgba(48,18,10,0.12)' },
  resetBtn: {
    width: '100%', padding: '12px', background: 'none', border: '1px solid rgba(48,18,10,0.25)',
    cursor: 'pointer', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'inherit',
    transition: 'background 0.2s',
  },
  textInput: {
    width: '100%', padding: '7px 10px', fontSize: 12, fontFamily: 'monospace',
    border: '1px solid rgba(48,18,10,0.18)', background: '#fff', marginBottom: 4, borderRadius: 4,
  },
};

window.TweaksPanel = TweaksPanel;
