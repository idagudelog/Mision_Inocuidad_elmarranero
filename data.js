// ============================================================
//  DATA.JS  – Todos los peligros del establecimiento
// ============================================================

const HAZARD_DATA = {
  biologico: {
    label: 'Biológico',
    color: 0x27ae60,
    darkColor: 0x1a7a42,
    textColor: '#d5f5e3',
    icon: '🦠',
    items: [
      { id: 'salmonella',    name: 'Salmonella',             emoji: '🧫', desc: 'Bacteria patógena. Se destruye con cocción adecuada (>70 °C). Causa gastroenteritis severa.' },
      { id: 'ecoli',        name: 'Escherichia coli',       emoji: '🔬', desc: 'Bacteria que contamina por falta de higiene. Puede causar síndrome urémico hemolítico.' },
      { id: 'listeria',     name: 'Listeria monocytogenes', emoji: '🧪', desc: 'Crece en frío. Peligrosa para embarazadas. Requiere control estricto de temperatura.' },
      { id: 'yersinia',     name: 'Yersinia enterocolitica',emoji: '🐷', desc: 'Muy asociada al cerdo. Puede crecer en refrigeración. Control: higiene y frío adecuado.' },
      { id: 'campylobacter',name: 'Campylobacter',          emoji: '🌀', desc: 'Bacteria frecuente en carnes mal manipuladas. Principal causa de diarrea bacteriana.' },
      { id: 'trichinella',  name: 'Trichinella spiralis',   emoji: '🪱', desc: 'Parásito (triquinelosis). Se elimina con congelación prolongada o cocción completa.' },
      { id: 'toxoplasma',   name: 'Toxoplasma gondii',      emoji: '🔴', desc: 'Parásito. Peligroso en embarazo. Control: cocción completa y no consumir cruda.' },
    ]
  },
  fisico: {
    label: 'Físico',
    color: 0xe67e22,
    darkColor: 0xb35a00,
    textColor: '#fdebd0',
    icon: '⚠️',
    items: [
      { id: 'hueso',        name: 'Fragmento de hueso',     emoji: '🦴', desc: 'Muy común en carne de cerdo. Puede causar lesiones al masticar. Requiere revisión manual.' },
      { id: 'metal',        name: 'Fragmento metálico',     emoji: '🔪', desc: 'Proveniente de cuchillos o sierras. Detectables con detectores de metales.' },
      { id: 'plastico',     name: 'Fragmento de plástico',  emoji: '🧤', desc: 'De empaques o guantes. Puede pasar desapercibido. Control: revisión visual estricta.' },
      { id: 'vidrio',       name: 'Fragmento de vidrio',    emoji: '💡', desc: 'De luminarias o vitrinas rotas. Peligroso e invisible. Proteger todas las fuentes de vidrio.' },
      { id: 'cabello',      name: 'Cabello / uña personal', emoji: '💇', desc: 'Objetos personales. Control: cofia obligatoria, uñas cortas, prohibir accesorios.' },
      { id: 'equipo',       name: 'Pieza de equipo dañado', emoji: '⚙️', desc: 'Partes desprendidas de maquinaria deteriorada. Mantenimiento preventivo esencial.' },
      { id: 'suciedad',     name: 'Suciedad / tierra',      emoji: '🪣', desc: 'Contaminación ambiental. Control: POES (Procedimientos Operativos Estandarizados de Saneamiento).' },
    ]
  },
  quimico: {
    label: 'Químico',
    color: 0x8e44ad,
    darkColor: 0x6c3483,
    textColor: '#e8daef',
    icon: '⚗️',
    items: [
      { id: 'cloro',        name: 'Residuos de cloro',      emoji: '🧴', desc: 'Agente de limpieza. Enjuague insuficiente contamina el producto. Respetar dosis y tiempos.' },
      { id: 'amonio',       name: 'Amonio cuaternario',     emoji: '🧼', desc: 'Sanitizante común. Tóxico si queda en superficies en contacto con alimentos.' },
      { id: 'detergente',   name: 'Detergente residual',    emoji: '🫧', desc: 'Mal enjuague deja residuos. Control: verificar ausencia antes de iniciar producción.' },
      { id: 'lubricante',   name: 'Lubricante de maquinaria',emoji: '🛢️', desc: 'Aceites no aptos para alimentos. Usar solo lubricantes grado alimentario (NSF H1).' },
      { id: 'antibiotico',  name: 'Residuo de antibiótico', emoji: '💊', desc: 'Del animal. Resistencia antimicrobiana. Control: verificar período de retiro antes del sacrificio.' },
      { id: 'antiparasitario', name: 'Antiparasitario',     emoji: '🩺', desc: 'Residuo veterinario. Tóxico en altas dosis. Requiere monitoreo en matadero de origen.' },
      { id: 'plastico_mig', name: 'Migración desde plástico',emoji: '📦', desc: 'Plásticos no aptos o films incorrectos liberan compuestos tóxicos. Usar solo materiales certificados para contacto alimentario.' },
    ]
  }
};

// Flatten para uso en el juego
const ALL_HAZARDS = [];
Object.entries(HAZARD_DATA).forEach(([type, cat]) => {
  cat.items.forEach(item => {
    ALL_HAZARDS.push({ ...item, type, category: cat.label, color: cat.color, darkColor: cat.darkColor });
  });
});

// Colores de categoría para UI
const CAT_COLORS = {
  biologico: { bg: '#1a4a2a', border: '#27ae60', text: '#2ecc71' },
  fisico:    { bg: '#4a2a05', border: '#e67e22', text: '#f39c12' },
  quimico:   { bg: '#2a0a4a', border: '#8e44ad', text: '#9b59b6' }
};
