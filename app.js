const STORAGE_KEY = "medication-check-prototype-v1";
const LANGUAGE_KEY = `${STORAGE_KEY}-language`;

const memoryStorage = {};

function readStorage(key, fallback = "") {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return Object.prototype.hasOwnProperty.call(memoryStorage, key) ? memoryStorage[key] : fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    memoryStorage[key] = value;
  }
}

const translations = {
  hu: {
    locale: "hu-HU",
    appTitle: "Gyógyszerellenőrző",
    afterHospital: "Kórház után",
    language: "Nyelv",
    settings: "Beállítások",
    today: "Ma",
    medications: "Gyógyszerek",
    patient: "Páciens",
    patientData: "Páciens adatok",
    patientName: "Név",
    socialSecurityNumber: "Társadalombiztosító szám",
    address: "Cím",
    diseaseList: "Betegség lista",
    diseaseListPlaceholder: "Egy sorba egy betegség vagy fontos állapot",
    savePatient: "Páciens adatok mentése",
    measurements: "Mérések",
    measurementDate: "Mérés dátuma",
    measurementTime: "Mérés ideje",
    charts: "Grafikonok",
    notEnoughChartData: "Legalább két eredmény kell a grafikonhoz.",
    tables: "Táblázatok",
    export: "Export",
    printPdf: "PDF mentés / nyomtatás",
    history: "Előzmény",
    medicineTime: "Gyógyszer ideje",
    alarmHelp: "Nyomd meg a Bevettem gombot, ha megtörtént.",
    taken: "Bevettem",
    undoTaken: "Visszavonás",
    close: "Bezárás",
    nextDose: "Következő bevétel",
    noActiveMedication: "Nincs aktív gyógyszer",
    allTakenToday: "Mára minden bevéve",
    done: "Kész",
    dueNow: "Most esedékes",
    alertsOff: "Az értesítések még nincsenek bekapcsolva.",
    alertsOn: "Értesítések aktívak",
    enableAlerts: "Értesítések bekapcsolása",
    testSound: "Teszthang",
    todayTasks: "Mai teendők",
    nextMedicines: "Következő gyógyszerek",
    todayDose: "Mai adag",
    saveTodayDose: "Mai adag mentése",
    todayDoseSaved: "Mai adag módosítva.",
    clearToday: "Mai jelölések törlése",
    myMedications: "Gyógyszereim",
    name: "Név",
    dose: "Adag",
    time: "Időpont",
    dailySchedule: "Napi időpontok és adagok",
    addTime: "Időpont hozzáadása",
    removeTime: "Törlés",
    notes: "Megjegyzés",
    addMedication: "Gyógyszer hozzáadása",
    medicationSource: "Gyógyszer típusa",
    sourcePrescribed: "Orvos által írt",
    sourceOtc: "Nem orvosi / alkalmi",
    interactionNotes: "Kereszthatás / figyelmeztetés",
    interactionPlaceholder: "pl. csak orvosi jóváhagyással, vérhígító mellett kerülendő",
    interactionWarningTitle: "Kereszthatás figyelmeztetés",
    interactionGeneralWarning: "Nem orvosi / alkalmi gyógyszer van a listában. Kérj orvosi vagy gyógyszerészi jóváhagyást, főleg vérhígító, INR-kontroll vagy több gyógyszer mellett.",
    interactionCustomWarning: "Megadott kereszthatás megjegyzés",
    source: "Típus",
    clearMeasurements: "Mérések törlése",
    bloodPressure: "Vérnyomás",
    pulse: "Pulzus",
    weight: "Súly",
    steps: "Lépésszám",
    temperature: "Testhő",
    celsius: "°C",
    saveMeasurement: "Mérés mentése",
    updateMeasurement: "Mérés frissítése",
    editMeasurement: "Szerkesztés",
    cancelEdit: "Mégse",
    clearHistory: "Előzmény törlése",
    namePlaceholder: "pl. Vérnyomáscsökkentő",
    dosePlaceholder: "pl. 1 tabletta",
    notesPlaceholder: "pl. reggeli után",
    measurementNotesPlaceholder: "pl. reggel, gyógyszer előtt",
    noActiveToday: "Nincs aktív gyógyszer a mai listában.",
    noDose: "Nincs adag megadva",
    noMedication: "Még nincs felvett gyógyszer.",
    noHistory: "A bevett adagok itt jelennek meg.",
    noMeasurement: "Még nincs elmentett mérés.",
    statusTaken: "Bevéve",
    statusLate: "Késésben",
    statusDue: "Esedékes",
    pause: "Szünet",
    activate: "Aktív",
    delete: "Törlés",
    plannedTime: "tervezett idő",
    recordedAt: "Rögzítve",
    patientTable: "Páciens",
    medicationTable: "Gyógyszerek",
    measurementTable: "Mérések",
    intakeTable: "Bevételi előzmény",
    exportGenerated: "Export dátuma",
    healthImport: "Egészség app import",
    healthImportHelp: "Apple Egészség exportból az export.xml fájlt válaszd ki. A prototípus a lépésszámot és testsúlyt olvassa be.",
    healthFile: "export.xml fájl",
    importHealthData: "Egészség adatok importálása",
    noFileSelected: "Válassz ki egy export.xml fájlt.",
    importedRecords: "Importálva",
    healthImportError: "Nem sikerült beolvasni az Egészség exportot.",
    perMinute: "/ perc",
    kg: "kg",
    medicineNotificationTitle: "Gyógyszer ideje",
    desktopUnsupported: "Ez a böngésző nem támogatja az asztali értesítést ezen az oldalon.",
    desktopGranted: "Hangjelzés és böngészős értesítés aktív, amíg az oldal nyitva van.",
    desktopDenied: "A hang aktív. A böngészős értesítés tiltva van a böngésző beállításaiban.",
    desktopPending: "A hang aktív. A böngésző még nem adott értesítési engedélyt.",
    desktopAllowed: "A böngészős értesítés engedélyezve.",
    desktopNotAllowed: "A böngészős értesítést a böngésző nem engedélyezte.",
    desktopPromptBlocked: "A böngésző ezen a megnyitási módon nem tud értesítési ablakot kérni.",
    desktopAlreadyAllowed: "A böngészős értesítés már engedélyezve van.",
    soundOn: "Hangjelzés bekapcsolva.",
    soundNotStarted: "A hangot ez a böngésző most nem indította el.",
    testSoundPlayed: "Teszthang lejátszva. Ha nem hallottad, nézd meg a Windows vagy böngésző hangerőt.",
    testSoundFailed: "A böngésző nem indította el a hangot. Próbáld meg újra kattintással, vagy nyisd meg Chrome/Edge böngészőben.",
    sampleBloodPressureMedicine: "Vérnyomáscsökkentő",
    sampleBloodThinner: "Vérhígító",
    sampleAfterBreakfast: "Reggeli után",
    sampleSameTime: "Mindig ugyanabban az időben",
    oneTablet: "1 tabletta",
  },
  en: {
    locale: "en-US",
    appTitle: "Medication Tracker",
    afterHospital: "After hospital",
    language: "Language",
    settings: "Settings",
    today: "Today",
    medications: "Medications",
    patient: "Patient",
    patientData: "Patient data",
    patientName: "Name",
    socialSecurityNumber: "Social security number",
    address: "Address",
    diseaseList: "Disease list",
    diseaseListPlaceholder: "One illness or important condition per line",
    savePatient: "Save patient data",
    measurements: "Measurements",
    measurementDate: "Measurement date",
    measurementTime: "Measurement time",
    charts: "Charts",
    notEnoughChartData: "At least two results are needed for a chart.",
    tables: "Tables",
    export: "Export",
    printPdf: "Save PDF / print",
    history: "History",
    medicineTime: "Medication time",
    alarmHelp: "Press Taken once you have taken it.",
    taken: "Taken",
    undoTaken: "Undo",
    close: "Close",
    nextDose: "Next dose",
    noActiveMedication: "No active medication",
    allTakenToday: "Everything is taken for today",
    done: "Done",
    dueNow: "Due now",
    alertsOff: "Alerts are not enabled yet.",
    alertsOn: "Alerts active",
    enableAlerts: "Enable alerts",
    testSound: "Test sound",
    todayTasks: "Today's tasks",
    nextMedicines: "Next medications",
    todayDose: "Today's dose",
    saveTodayDose: "Save today's dose",
    todayDoseSaved: "Today's dose updated.",
    clearToday: "Clear today's marks",
    myMedications: "My medications",
    name: "Name",
    dose: "Dose",
    time: "Time",
    dailySchedule: "Daily times and doses",
    addTime: "Add time",
    removeTime: "Remove",
    notes: "Notes",
    addMedication: "Add medication",
    medicationSource: "Medication type",
    sourcePrescribed: "Prescribed by doctor",
    sourceOtc: "Non-prescribed / occasional",
    interactionNotes: "Interaction / warning",
    interactionPlaceholder: "e.g. only with medical approval, avoid with blood thinners",
    interactionWarningTitle: "Interaction warning",
    interactionGeneralWarning: "A non-prescribed / occasional medication is on the list. Ask a doctor or pharmacist, especially with blood thinners, INR monitoring, or multiple medications.",
    interactionCustomWarning: "Entered interaction note",
    source: "Type",
    clearMeasurements: "Clear measurements",
    bloodPressure: "Blood pressure",
    pulse: "Pulse",
    weight: "Weight",
    steps: "Steps",
    temperature: "Temperature",
    celsius: "°C",
    saveMeasurement: "Save measurement",
    updateMeasurement: "Update measurement",
    editMeasurement: "Edit",
    cancelEdit: "Cancel",
    clearHistory: "Clear history",
    namePlaceholder: "e.g. Blood pressure medicine",
    dosePlaceholder: "e.g. 1 tablet",
    notesPlaceholder: "e.g. after breakfast",
    measurementNotesPlaceholder: "e.g. morning, before medication",
    noActiveToday: "No active medication in today's list.",
    noDose: "No dose entered",
    noMedication: "No medication has been added yet.",
    noHistory: "Taken doses will appear here.",
    noMeasurement: "No measurements have been saved yet.",
    statusTaken: "Taken",
    statusLate: "Late",
    statusDue: "Due",
    pause: "Pause",
    activate: "Active",
    delete: "Delete",
    plannedTime: "planned time",
    recordedAt: "Recorded",
    patientTable: "Patient",
    medicationTable: "Medications",
    measurementTable: "Measurements",
    intakeTable: "Intake history",
    exportGenerated: "Export date",
    healthImport: "Health app import",
    healthImportHelp: "Choose the export.xml file from an Apple Health export. The prototype imports steps and body weight.",
    healthFile: "export.xml file",
    importHealthData: "Import health data",
    noFileSelected: "Choose an export.xml file.",
    importedRecords: "Imported",
    healthImportError: "Could not read the Health export.",
    perMinute: "/ min",
    kg: "kg",
    medicineNotificationTitle: "Medication time",
    desktopUnsupported: "This browser does not support desktop notifications on this page.",
    desktopGranted: "Sound and browser notifications are active while this page is open.",
    desktopDenied: "Sound is active. Browser notifications are blocked in browser settings.",
    desktopPending: "Sound is active. The browser has not granted notification permission yet.",
    desktopAllowed: "Browser notifications are enabled.",
    desktopNotAllowed: "The browser did not allow notifications.",
    desktopPromptBlocked: "This browser cannot request notifications in the current opening mode.",
    desktopAlreadyAllowed: "Browser notifications are already enabled.",
    soundOn: "Sound alert enabled.",
    soundNotStarted: "This browser did not start sound right now.",
    testSoundPlayed: "Test sound played. If you did not hear it, check Windows or browser volume.",
    testSoundFailed: "The browser did not start sound. Try clicking again or open it in Chrome/Edge.",
    sampleBloodPressureMedicine: "Blood pressure medicine",
    sampleBloodThinner: "Blood thinner",
    sampleAfterBreakfast: "After breakfast",
    sampleSameTime: "Always at the same time",
    oneTablet: "1 tablet",
  },
  de: {
    locale: "de-DE",
    appTitle: "Medikamenten-Kontrolle",
    afterHospital: "Nach dem Krankenhaus",
    language: "Sprache",
    settings: "Einstellungen",
    today: "Heute",
    medications: "Medikamente",
    patient: "Patient",
    patientData: "Patientendaten",
    patientName: "Name",
    socialSecurityNumber: "Sozialversicherungsnummer",
    address: "Adresse",
    diseaseList: "Krankheitsliste",
    diseaseListPlaceholder: "Eine Krankheit oder wichtige Angabe pro Zeile",
    savePatient: "Patientendaten speichern",
    measurements: "Messungen",
    measurementDate: "Messdatum",
    measurementTime: "Messzeit",
    charts: "Diagramme",
    notEnoughChartData: "Für ein Diagramm werden mindestens zwei Ergebnisse benötigt.",
    tables: "Tabellen",
    export: "Export",
    printPdf: "PDF speichern / drucken",
    history: "Verlauf",
    medicineTime: "Zeit für das Medikament",
    alarmHelp: "Drücke Eingenommen, wenn du es genommen hast.",
    taken: "Eingenommen",
    undoTaken: "Rückgängig",
    close: "Schließen",
    nextDose: "Nächste Einnahme",
    noActiveMedication: "Kein aktives Medikament",
    allTakenToday: "Für heute ist alles eingenommen",
    done: "Fertig",
    dueNow: "Jetzt fällig",
    alertsOff: "Benachrichtigungen sind noch nicht aktiviert.",
    alertsOn: "Benachrichtigungen aktiv",
    enableAlerts: "Benachrichtigungen aktivieren",
    testSound: "Testton",
    todayTasks: "Aufgaben heute",
    nextMedicines: "Nächste Medikamente",
    todayDose: "Heutige Dosis",
    saveTodayDose: "Heutige Dosis speichern",
    todayDoseSaved: "Heutige Dosis aktualisiert.",
    clearToday: "Heutige Markierungen löschen",
    myMedications: "Meine Medikamente",
    name: "Name",
    dose: "Dosis",
    time: "Uhrzeit",
    dailySchedule: "Tägliche Zeiten und Dosen",
    addTime: "Uhrzeit hinzufügen",
    removeTime: "Entfernen",
    notes: "Notizen",
    addMedication: "Medikament hinzufügen",
    medicationSource: "Medikamententyp",
    sourcePrescribed: "Vom Arzt verordnet",
    sourceOtc: "Nicht verordnet / gelegentlich",
    interactionNotes: "Wechselwirkung / Warnung",
    interactionPlaceholder: "z. B. nur nach ärztlicher Freigabe, bei Blutverdünner vermeiden",
    interactionWarningTitle: "Wechselwirkungswarnung",
    interactionGeneralWarning: "Ein nicht verordnetes / gelegentliches Medikament ist in der Liste. Frage Arzt oder Apotheker, besonders bei Blutverdünnern, INR-Kontrolle oder mehreren Medikamenten.",
    interactionCustomWarning: "Eingetragene Wechselwirkungsnotiz",
    source: "Typ",
    clearMeasurements: "Messungen löschen",
    bloodPressure: "Blutdruck",
    pulse: "Puls",
    weight: "Gewicht",
    steps: "Schritte",
    temperature: "Körpertemperatur",
    celsius: "°C",
    saveMeasurement: "Messung speichern",
    updateMeasurement: "Messung aktualisieren",
    editMeasurement: "Bearbeiten",
    cancelEdit: "Abbrechen",
    clearHistory: "Verlauf löschen",
    namePlaceholder: "z. B. Blutdruckmedikament",
    dosePlaceholder: "z. B. 1 Tablette",
    notesPlaceholder: "z. B. nach dem Frühstück",
    measurementNotesPlaceholder: "z. B. morgens, vor dem Medikament",
    noActiveToday: "Kein aktives Medikament in der heutigen Liste.",
    noDose: "Keine Dosis angegeben",
    noMedication: "Noch kein Medikament hinzugefügt.",
    noHistory: "Eingenommene Dosen erscheinen hier.",
    noMeasurement: "Noch keine Messung gespeichert.",
    statusTaken: "Eingenommen",
    statusLate: "Verspätet",
    statusDue: "Fällig",
    pause: "Pausieren",
    activate: "Aktiv",
    delete: "Löschen",
    plannedTime: "geplante Zeit",
    recordedAt: "Erfasst",
    patientTable: "Patient",
    medicationTable: "Medikamente",
    measurementTable: "Messungen",
    intakeTable: "Einnahmeverlauf",
    exportGenerated: "Exportdatum",
    healthImport: "Gesundheits-App Import",
    healthImportHelp: "Wähle die export.xml aus einem Apple-Health-Export. Der Prototyp importiert Schritte und Körpergewicht.",
    healthFile: "export.xml Datei",
    importHealthData: "Gesundheitsdaten importieren",
    noFileSelected: "Wähle eine export.xml Datei aus.",
    importedRecords: "Importiert",
    healthImportError: "Der Health-Export konnte nicht gelesen werden.",
    perMinute: "/ Min.",
    kg: "kg",
    medicineNotificationTitle: "Zeit für das Medikament",
    desktopUnsupported: "Dieser Browser unterstützt auf dieser Seite keine Desktop-Benachrichtigungen.",
    desktopGranted: "Ton und Browser-Benachrichtigungen sind aktiv, solange die Seite geöffnet ist.",
    desktopDenied: "Ton ist aktiv. Browser-Benachrichtigungen sind in den Einstellungen blockiert.",
    desktopPending: "Ton ist aktiv. Der Browser hat die Benachrichtigung noch nicht erlaubt.",
    desktopAllowed: "Browser-Benachrichtigungen sind aktiviert.",
    desktopNotAllowed: "Der Browser hat Benachrichtigungen nicht erlaubt.",
    desktopPromptBlocked: "Der Browser kann in diesem Öffnungsmodus keine Benachrichtigung anfragen.",
    desktopAlreadyAllowed: "Browser-Benachrichtigungen sind bereits aktiviert.",
    soundOn: "Tonbenachrichtigung aktiviert.",
    soundNotStarted: "Dieser Browser hat den Ton gerade nicht gestartet.",
    testSoundPlayed: "Testton abgespielt. Wenn du nichts gehört hast, prüfe die Windows- oder Browser-Lautstärke.",
    testSoundFailed: "Der Browser hat den Ton nicht gestartet. Klicke erneut oder öffne die Seite in Chrome/Edge.",
    sampleBloodPressureMedicine: "Blutdruckmedikament",
    sampleBloodThinner: "Blutverdünner",
    sampleAfterBreakfast: "Nach dem Frühstück",
    sampleSameTime: "Immer zur gleichen Zeit",
    oneTablet: "1 Tablette",
  },
};

let currentLanguage = readStorage(LANGUAGE_KEY, "hu") || "hu";

function t(key) {
  return translations[currentLanguage][key] || translations.hu[key] || key;
}

function translatedValue(value, dictionary) {
  const normalized = String(value || "").trim().toLowerCase();
  return dictionary[normalized] ? t(dictionary[normalized]) : value;
}

function displayMedicationName(value) {
  return translatedValue(value, {
    "vérnyomáscsökkentő": "sampleBloodPressureMedicine",
    "vĂ©rnyomĂˇscsĂ¶kkentĹ‘": "sampleBloodPressureMedicine",
    "vérhígító": "sampleBloodThinner",
    "vĂ©rhĂ­gĂ­tĂł": "sampleBloodThinner",
  });
}

function displayDose(value) {
  return translatedValue(value, {
    "1 tabletta": "oneTablet",
  });
}

function displayNotes(value) {
  return translatedValue(value, {
    "reggeli után": "sampleAfterBreakfast",
    "reggeli utĂˇn": "sampleAfterBreakfast",
    "mindig ugyanabban az idoben": "sampleSameTime",
    "mindig ugyanabban az időben": "sampleSameTime",
  });
}

const initialState = {
  patient: {
    name: "",
    address: "",
    ssn: "",
    diseases: "",
  },
  medications: [
    {
      id: createId(),
      name: "Vérnyomáscsökkentő",
      dose: "1 tabletta",
      time: "08:00",
      notes: "Reggeli után",
      active: true,
    },
    {
      id: createId(),
      name: "Vérhígító",
      dose: "1 tabletta",
      time: "20:00",
      notes: "Mindig ugyanabban az idoben",
      active: true,
    },
  ],
  logs: [],
  dailyDoseOverrides: {},
  measurements: [],
};

let state = loadState();

const todayLabel = document.querySelector("#todayLabel");
const progressLabel = document.querySelector("#progressLabel");
const nextDoseLabel = document.querySelector("#nextDoseLabel");
const countdownLabel = document.querySelector("#countdownLabel");
const alertStatusLabel = document.querySelector("#alertStatusLabel");
const enableAlertsButton = document.querySelector("#enableAlertsButton");
const testSoundButton = document.querySelector("#testSoundButton");
const alarmBanner = document.querySelector("#alarmBanner");
const alarmTitle = document.querySelector("#alarmTitle");
const alarmText = document.querySelector("#alarmText");
const alarmTakenButton = document.querySelector("#alarmTakenButton");
const alarmCloseButton = document.querySelector("#alarmCloseButton");
const languageSelect = document.querySelector("#languageSelect");
const doseList = document.querySelector("#doseList");
const nextDosesWidget = document.querySelector("#nextDosesWidget");
const medicationList = document.querySelector("#medicationList");
const historyList = document.querySelector("#historyList");
const patientForm = document.querySelector("#patientForm");
const medicationForm = document.querySelector("#medicationForm");
const scheduleRows = document.querySelector("#scheduleRows");
const addScheduleButton = document.querySelector("#addScheduleButton");
const measurementForm = document.querySelector("#measurementForm");
const saveMeasurementButton = document.querySelector("#saveMeasurementButton");
const cancelMeasurementEditButton = document.querySelector("#cancelMeasurementEditButton");
const latestMeasurements = document.querySelector("#latestMeasurements");
const measurementList = document.querySelector("#measurementList");
const chartsContent = document.querySelector("#chartsContent");
const tablesContent = document.querySelector("#tablesContent");
const exportContent = document.querySelector("#exportContent");
const printPdfButton = document.querySelector("#printPdfButton");
const healthImportInput = document.querySelector("#healthImportInput");
const importHealthButton = document.querySelector("#importHealthButton");
const healthImportStatus = document.querySelector("#healthImportStatus");
let audioContext;
let alertsEnabled = readStorage(`${STORAGE_KEY}-alerts`, "false") === "true";
let alertedDoseIds = new Set(JSON.parse(readStorage(`${STORAGE_KEY}-alerted`, "[]") || "[]"));
let currentAlarmDoseId = null;
let temporaryStatusText = "";
let editingMeasurementId = "";

function loadState() {
  const saved = readStorage(STORAGE_KEY, "");
  if (!saved) return migrateState(initialState);

  try {
    return migrateState({ ...initialState, ...JSON.parse(saved) });
  } catch {
    return migrateState(initialState);
  }
}

function migrateState(rawState) {
  return {
    ...rawState,
    medications: (rawState.medications || []).map((medication) => ({
      ...medication,
      schedule: normalizeSchedule(medication),
      source: medication.source || "prescribed",
      interactionNotes: medication.interactionNotes || "",
    })),
    patient: rawState.patient || initialState.patient,
    logs: rawState.logs || [],
    dailyDoseOverrides: rawState.dailyDoseOverrides || {},
    measurements: rawState.measurements || [],
  };
}

function normalizeSchedule(medication) {
  if (Array.isArray(medication.schedule) && medication.schedule.length > 0) {
    return medication.schedule.map((item) => ({
      id: item.id || createId(),
      time: item.time || medication.time || "08:00",
      dose: item.dose || medication.dose || "",
    }));
  }

  return [
    {
      id: createId(),
      time: medication.time || "08:00",
      dose: medication.dose || "",
    },
  ];
}

function saveState() {
  writeStorage(STORAGE_KEY, JSON.stringify(state));
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat(t("locale"), {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

function activeDoses() {
  const key = todayKey();
  return state.medications
    .filter((medication) => medication.active)
    .flatMap((medication) =>
      normalizeSchedule(medication).map((schedule) => {
        const takenLog = takenLogFor(medication.id, schedule, key);
        const taken = Boolean(takenLog);

        return {
          id: `${medication.id}-${schedule.id}`,
          medicationId: medication.id,
          scheduleId: schedule.id,
          name: medication.name,
          notes: medication.notes,
          time: schedule.time,
          dose: doseForDay(medication.id, schedule),
          defaultDose: schedule.dose,
          taken,
          logId: takenLog ? takenLog.id : "",
        };
      }),
    )
    .sort((left, right) => left.time.localeCompare(right.time));
}

function dailyDoseKey(day, medicationId, scheduleId) {
  return `${day}::${medicationId}::${scheduleId}`;
}

function doseForDay(medicationId, schedule, day = todayKey()) {
  const key = dailyDoseKey(day, medicationId, schedule.id);
  return state.dailyDoseOverrides?.[key] || schedule.dose;
}

function takenLogFor(medicationId, schedule, day) {
  return state.logs.find(
    (log) =>
      log.medicationId === medicationId &&
      log.day === day &&
      log.time === schedule.time &&
      (!log.scheduleId || log.scheduleId === schedule.id),
  );
}

function render() {
  applyTranslations();
  setDefaultMeasurementDateTime();
  syncMeasurementEditState();
  renderHeader();
  renderScheduleRows();
  renderCountdown();
  renderNextDosesWidget();
  renderDoses();
  renderPatient();
  renderMedications();
  renderMeasurements();
  renderCharts();
  renderTables();
  renderExport();
  renderHistory();
}

function localDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localTimeValue(date) {
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${hour}:${minute}`;
}

function setDefaultMeasurementDateTime() {
  const dateInput = document.querySelector("#measurementDateInput");
  const timeInput = document.querySelector("#measurementTimeInput");
  if (!dateInput || !timeInput) return;

  const now = new Date();
  if (!dateInput.value) dateInput.value = localDateValue(now);
  if (!timeInput.value) timeInput.value = localTimeValue(now);
}

function selectedMeasurementDateTime() {
  const now = new Date();
  const dateValue = document.querySelector("#measurementDateInput")?.value || localDateValue(now);
  const timeValue = document.querySelector("#measurementTimeInput")?.value || localTimeValue(now);
  return new Date(`${dateValue}T${timeValue}:00`).toISOString();
}

function fillMeasurementForm(measurement) {
  const recordedAt = measurement.recordedAt ? new Date(measurement.recordedAt) : new Date();
  document.querySelector("#measurementDateInput").value = localDateValue(recordedAt);
  document.querySelector("#measurementTimeInput").value = localTimeValue(recordedAt);
  document.querySelector("#inrInput").value = measurement.inr || "";
  document.querySelector("#bloodPressureInput").value = measurement.bloodPressure || "";
  document.querySelector("#pulseInput").value = measurement.pulse || "";
  document.querySelector("#weightInput").value = measurement.weight || "";
  document.querySelector("#stepsInput").value = measurement.steps || "";
  document.querySelector("#temperatureInput").value = measurement.temperature || "";
  document.querySelector("#measurementNotesInput").value = measurement.notes || "";
}

function resetMeasurementForm() {
  editingMeasurementId = "";
  measurementForm.reset();
  setDefaultMeasurementDateTime();
  syncMeasurementEditState();
}

function startMeasurementEdit(measurementId) {
  const measurement = (state.measurements || []).find((item) => item.id === measurementId);
  if (!measurement) return;

  editingMeasurementId = measurementId;
  fillMeasurementForm(measurement);
  syncMeasurementEditState();
  measurementForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function syncMeasurementEditState() {
  saveMeasurementButton.textContent = editingMeasurementId ? t("updateMeasurement") : t("saveMeasurement");
  cancelMeasurementEditButton.hidden = !editingMeasurementId;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("appTitle");
  languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
}

function renderScheduleRows() {
  if (scheduleRows.children.length === 0) {
    addScheduleRow("08:00", "");
    return;
  }

  [...scheduleRows.querySelectorAll(".schedule-row")].forEach((row) => {
    row.querySelector("[data-schedule-time-label]").textContent = t("time");
    row.querySelector("[data-schedule-dose-label]").textContent = t("dose");
    row.querySelector("[data-remove-schedule]").textContent = t("removeTime");
    row.querySelector("[data-schedule-dose]").placeholder = t("dosePlaceholder");
  });
}

function renderPatient() {
  const patient = state.patient || {};
  document.querySelector("#patientNameInput").value = patient.name || "";
  document.querySelector("#addressInput").value = patient.address || "";
  document.querySelector("#ssnInput").value = patient.ssn || "";
  document.querySelector("#diseaseListInput").value = patient.diseases || "";
}

function addScheduleRow(time = "08:00", dose = "") {
  const row = document.createElement("div");
  row.className = "schedule-row";
  row.innerHTML = `
    <label>
      <span data-schedule-time-label>${t("time")}</span>
      <input data-schedule-time type="time" required value="${escapeHtml(time)}" />
    </label>
    <label>
      <span data-schedule-dose-label>${t("dose")}</span>
      <input data-schedule-dose placeholder="${escapeHtml(t("dosePlaceholder"))}" value="${escapeHtml(dose)}" />
    </label>
    <button class="small-button" type="button" data-remove-schedule>${t("removeTime")}</button>
  `;
  scheduleRows.appendChild(row);
  updateScheduleRemoveButtons();
}

function updateScheduleRemoveButtons() {
  const rows = [...scheduleRows.querySelectorAll(".schedule-row")];
  rows.forEach((row) => {
    row.querySelector("[data-remove-schedule]").disabled = rows.length === 1;
  });
}

function readScheduleRows() {
  return [...scheduleRows.querySelectorAll(".schedule-row")]
    .map((row) => ({
      id: createId(),
      time: row.querySelector("[data-schedule-time]").value || "08:00",
      dose: row.querySelector("[data-schedule-dose]").value.trim(),
    }))
    .filter((item) => item.time);
}

function resetScheduleRows() {
  scheduleRows.innerHTML = "";
  addScheduleRow("08:00", "");
}

function renderHeader() {
  const doses = activeDoses();
  const takenCount = doses.filter((dose) => dose.taken).length;
  todayLabel.textContent = new Intl.DateTimeFormat(t("locale"), {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());
  progressLabel.textContent = `${takenCount}/${doses.length}`;
  enableAlertsButton.textContent = alertsEnabled ? t("alertsOn") : t("enableAlerts");
  alertStatusLabel.textContent = temporaryStatusText || alertStatusText();
}

function showTemporaryStatus(message) {
  temporaryStatusText = message;
  render();
  setTimeout(() => {
    temporaryStatusText = "";
    render();
  }, 6000);
}

function renderCountdown() {
  const nextDose = nextPendingDose();

  if (!nextDose) {
    nextDoseLabel.textContent = t("allTakenToday");
    countdownLabel.textContent = t("done");
    return;
  }

  const now = new Date();
  const scheduled = scheduledDateFor(nextDose.time);
  const remainingMilliseconds = scheduled - now;

  nextDoseLabel.textContent = `${nextDose.time} · ${displayMedicationName(nextDose.name)}`;

  if (remainingMilliseconds <= 0) {
    countdownLabel.textContent = t("dueNow");
    return;
  }

  countdownLabel.textContent = formatDuration(remainingMilliseconds);
}

function renderNextDosesWidget() {
  const pending = activeDoses().filter((dose) => !dose.taken).slice(0, 3);

  if (pending.length === 0) {
    nextDosesWidget.innerHTML = `<div class="empty-state">${t("allTakenToday")}</div>`;
    return;
  }

  nextDosesWidget.innerHTML = pending
    .map(
      (dose) => `
        <article class="next-dose-card ${isLate(dose.time) ? "late" : ""}">
          <span class="meta">${isLate(dose.time) ? t("statusLate") : t("statusDue")}</span>
          <strong>${escapeHtml(dose.time)}</strong>
          <div>${escapeHtml(displayMedicationName(dose.name))}</div>
          <small>${escapeHtml(displayDose(dose.dose) || t("noDose"))}</small>
        </article>
      `,
    )
    .join("");
}

function renderDoses() {
  const doses = activeDoses();

  if (doses.length === 0) {
    doseList.innerHTML = `<div class="empty-state">${t("noActiveToday")}</div>`;
    return;
  }

  doseList.innerHTML = doses
    .map((dose) => {
      const status = dose.taken ? t("statusTaken") : isLate(dose.time) ? t("statusLate") : t("statusDue");
      return `
        <article class="dose-card">
          <div class="time">${dose.time}</div>
          <div>
            <div class="title">${escapeHtml(displayMedicationName(dose.name))}</div>
            <div class="meta">${escapeHtml(displayDose(dose.dose) || t("noDose"))}</div>
            ${dose.notes ? `<div class="notes">${escapeHtml(displayNotes(dose.notes))}</div>` : ""}
            <label class="today-dose-editor">
              <span>${t("todayDose")}</span>
              <input data-dose-override="${dose.id}" value="${escapeHtml(dose.dose)}" ${dose.taken ? "disabled" : ""} />
              <button class="small-button" type="button" data-save-dose-override="${dose.id}" ${dose.taken ? "disabled" : ""}>${t("saveTodayDose")}</button>
            </label>
          </div>
          <div>
            <span class="badge ${dose.taken ? "done" : ""}">${status}</span>
            <button class="take-button ${dose.taken ? "undo-button" : ""}" ${dose.taken ? `data-undo-log="${dose.logId}"` : `data-take="${dose.id}"`}>
              ${dose.taken ? t("undoTaken") : t("taken")}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMedications() {
  if (state.medications.length === 0) {
    medicationList.innerHTML = `<div class="empty-state">${t("noMedication")}</div>`;
    return;
  }

  medicationList.innerHTML = state.medications
    .map(
      (medication) => {
        const scheduleText = normalizeSchedule(medication)
          .sort((left, right) => left.time.localeCompare(right.time))
          .map((item) => `${escapeHtml(item.time)} - ${escapeHtml(displayDose(item.dose) || t("noDose"))}`)
          .join("<br />");

        return `
        <article class="medication-card">
          <div>
            <div class="title">${escapeHtml(displayMedicationName(medication.name))}</div>
            <div class="meta">${scheduleText}</div>
            ${medication.notes ? `<div class="notes">${escapeHtml(displayNotes(medication.notes))}</div>` : ""}
            <div class="notes">${t("source")}: ${medication.source === "otc" ? t("sourceOtc") : t("sourcePrescribed")}</div>
            ${interactionWarningFor(medication)}
          </div>
          <div class="card-actions">
            <button class="small-button" data-toggle="${medication.id}">
              ${medication.active ? t("pause") : t("activate")}
            </button>
            <button class="small-button" data-delete="${medication.id}">${t("delete")}</button>
          </div>
        </article>
      `;
      },
    )
    .join("");
}

function interactionWarningFor(medication) {
  if (medication.source !== "otc" && !medication.interactionNotes) return "";

  const text = medication.interactionNotes
    ? `${t("interactionCustomWarning")}: ${escapeHtml(medication.interactionNotes)}`
    : t("interactionGeneralWarning");

  return `<div class="warning-box"><strong>${t("interactionWarningTitle")}</strong><br />${text}</div>`;
}

function renderHistory() {
  if (state.logs.length === 0) {
    historyList.innerHTML = `<div class="empty-state">${t("noHistory")}</div>`;
    return;
  }

  historyList.innerHTML = [...state.logs]
    .sort((left, right) => new Date(right.takenAt) - new Date(left.takenAt))
    .map(
      (log) => `
        <article class="history-card">
          <strong>${escapeHtml(displayMedicationName(log.name))}</strong>
          <span class="meta">${escapeHtml(displayDose(log.dose) || t("noDose"))} · ${t("plannedTime")}: ${log.time}</span>
          <span>${formatDate(log.takenAt)}</span>
          <button class="small-button" type="button" data-undo-log="${log.id}">${t("undoTaken")}</button>
        </article>
      `,
    )
    .join("");
}

function renderMeasurements() {
  const measurements = [...(state.measurements || [])].sort(
    (left, right) => new Date(right.recordedAt) - new Date(left.recordedAt),
  );

  const latest = {
    INR: measurements.find((item) => item.inr),
    [t("bloodPressure")]: measurements.find((item) => item.bloodPressure),
    [t("pulse")]: measurements.find((item) => item.pulse),
    [t("weight")]: measurements.find((item) => item.weight),
    [t("steps")]: measurements.find((item) => item.steps),
    [t("temperature")]: measurements.find((item) => item.temperature),
  };

  latestMeasurements.innerHTML = Object.entries(latest)
    .map(([label, item]) => {
      const value = item ? measurementValue(label, item) : "-";
      return `
        <article class="summary-card">
          <span class="meta">${label}</span>
          <strong>${escapeHtml(value)}</strong>
        </article>
      `;
    })
    .join("");

  if (measurements.length === 0) {
    measurementList.innerHTML = `<div class="empty-state">${t("noMeasurement")}</div>`;
    return;
  }

  measurementList.innerHTML = measurements
    .map(
      (item) => `
        <article class="history-card">
          <strong>${formatDate(item.recordedAt)}</strong>
          <span class="meta">${measurementLine(item)}</span>
          ${item.notes ? `<span>${escapeHtml(item.notes)}</span>` : ""}
          <button class="small-button" type="button" data-edit-measurement="${item.id}">${t("editMeasurement")}</button>
        </article>
      `,
    )
    .join("");
}

function measurementValue(label, item) {
  if (label === "INR") return item.inr;
  if (label === t("bloodPressure")) return item.bloodPressure;
  if (label === t("pulse")) return `${item.pulse} ${t("perMinute")}`;
  if (label === t("weight")) return `${item.weight} ${t("kg")}`;
  if (label === t("steps")) return item.steps;
  if (label === t("temperature")) return `${item.temperature} ${t("celsius")}`;
  return "-";
}

function measurementLine(item) {
  const parts = [];
  if (item.inr) parts.push(`INR: ${escapeHtml(item.inr)}`);
  if (item.bloodPressure) parts.push(`${t("bloodPressure")}: ${escapeHtml(item.bloodPressure)}`);
  if (item.pulse) parts.push(`${t("pulse")}: ${escapeHtml(item.pulse)} ${t("perMinute")}`);
  if (item.weight) parts.push(`${t("weight")}: ${escapeHtml(item.weight)} ${t("kg")}`);
  if (item.steps) parts.push(`${t("steps")}: ${escapeHtml(item.steps)}`);
  if (item.temperature) parts.push(`${t("temperature")}: ${escapeHtml(item.temperature)} ${t("celsius")}`);
  return parts.join(" · ");
}

function renderCharts() {
  const series = [
    { key: "inr", label: "INR", unit: "" },
    { key: "bloodPressureSystolic", label: `${t("bloodPressure")} SYS`, unit: "mmHg", value: systolicValue },
    { key: "bloodPressureDiastolic", label: `${t("bloodPressure")} DIA`, unit: "mmHg", value: diastolicValue },
    { key: "pulse", label: t("pulse"), unit: t("perMinute") },
    { key: "weight", label: t("weight"), unit: t("kg") },
    { key: "steps", label: t("steps"), unit: "" },
    { key: "temperature", label: t("temperature"), unit: t("celsius") },
  ];

  chartsContent.innerHTML = series.map((config) => chartCard(config)).join("");
}

function chartCard(config) {
  const points = chartPoints(config);
  const latest = points[points.length - 1];

  return `
    <article class="chart-card">
      <div class="chart-head">
        <div>
          <h3>${escapeHtml(config.label)}</h3>
          <p class="meta">${points.length >= 2 ? `${formatDate(latest.date)} · ${latest.value} ${config.unit}` : t("notEnoughChartData")}</p>
        </div>
      </div>
      ${points.length >= 2 ? lineChartSvg(points) : `<div class="empty-state">${t("notEnoughChartData")}</div>`}
    </article>
  `;
}

function chartPoints(config) {
  return [...(state.measurements || [])]
    .map((item) => ({
      date: new Date(item.recordedAt),
      value: Number(config.value ? config.value(item) : item[config.key]),
    }))
    .filter((point) => Number.isFinite(point.value) && point.value > 0 && !Number.isNaN(point.date.getTime()))
    .sort((left, right) => left.date - right.date);
}

function systolicValue(item) {
  const match = String(item.bloodPressure || "").match(/^(\d{2,3})\s*\/\s*(\d{2,3})/);
  return match ? Number(match[1]) : NaN;
}

function diastolicValue(item) {
  const match = String(item.bloodPressure || "").match(/^(\d{2,3})\s*\/\s*(\d{2,3})/);
  return match ? Number(match[2]) : NaN;
}

function lineChartSvg(points) {
  const width = 640;
  const height = 220;
  const padding = 34;
  const min = Math.min(...points.map((point) => point.value));
  const max = Math.max(...points.map((point) => point.value));
  const range = max - min || 1;
  const firstTime = points[0].date.getTime();
  const lastTime = points[points.length - 1].date.getTime();
  const timeRange = lastTime - firstTime || 1;

  const coordinates = points.map((point) => {
    const x = padding + ((point.date.getTime() - firstTime) / timeRange) * (width - padding * 2);
    const y = height - padding - ((point.value - min) / range) * (height - padding * 2);
    return { x, y, point };
  });

  const line = coordinates.map((item) => `${item.x.toFixed(1)},${item.y.toFixed(1)}`).join(" ");
  const circles = coordinates
    .map((item) => `<circle cx="${item.x.toFixed(1)}" cy="${item.y.toFixed(1)}" r="4"><title>${formatDate(item.point.date.toISOString())}: ${item.point.value}</title></circle>`)
    .join("");

  return `
    <svg class="line-chart" viewBox="0 0 ${width} ${height}" role="img">
      <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" class="axis"></line>
      <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" class="axis"></line>
      <text x="${padding}" y="20" class="chart-label">${max}</text>
      <text x="${padding}" y="${height - 8}" class="chart-label">${min}</text>
      <polyline points="${line}" fill="none"></polyline>
      ${circles}
    </svg>
  `;
}

function renderTables() {
  tablesContent.innerHTML = `
    ${tablePanel(t("patientTable"), patientTableHtml())}
    ${tablePanel(t("medicationTable"), medicationTableHtml())}
    ${tablePanel(t("measurementTable"), measurementTableHtml())}
    ${tablePanel(t("intakeTable"), intakeTableHtml())}
  `;
}

function renderExport() {
  exportContent.innerHTML = `
    <h1>${t("appTitle")}</h1>
    <p class="meta">${t("exportGenerated")}: ${formatDate(new Date().toISOString())}</p>
    <div class="export-section">${patientTableHtml()}</div>
    <div class="export-section">${medicationTableHtml()}</div>
    <div class="export-section">${measurementTableHtml()}</div>
    <div class="export-section">${intakeTableHtml()}</div>
  `;
}

function tablePanel(title, tableHtml) {
  return `
    <section class="table-panel">
      <h2>${escapeHtml(title)}</h2>
      <div class="table-scroll">${tableHtml}</div>
    </section>
  `;
}

function patientTableHtml() {
  const patient = state.patient || {};
  return `
    <table>
      <tbody>
        <tr><th>${t("patientName")}</th><td>${escapeHtml(patient.name || "-")}</td></tr>
        <tr><th>${t("address")}</th><td>${escapeHtml(patient.address || "-")}</td></tr>
        <tr><th>${t("socialSecurityNumber")}</th><td>${escapeHtml(patient.ssn || "-")}</td></tr>
        <tr><th>${t("diseaseList")}</th><td>${escapeHtml(patient.diseases || "-").replaceAll("\n", "<br />")}</td></tr>
      </tbody>
    </table>
  `;
}

function medicationTableHtml() {
  const rows = (state.medications || [])
    .flatMap((medication) =>
      normalizeSchedule(medication).map((schedule) => `
        <tr>
          <td>${escapeHtml(displayMedicationName(medication.name))}</td>
          <td>${escapeHtml(schedule.time)}</td>
          <td>${escapeHtml(displayDose(schedule.dose) || t("noDose"))}</td>
          <td>${medication.source === "otc" ? t("sourceOtc") : t("sourcePrescribed")}</td>
          <td>${escapeHtml(displayNotes(medication.notes || "-"))}</td>
          <td>${escapeHtml(medication.interactionNotes || "-")}</td>
        </tr>
      `),
    )
    .join("");

  return `
    <table>
      <thead><tr><th>${t("name")}</th><th>${t("time")}</th><th>${t("dose")}</th><th>${t("source")}</th><th>${t("notes")}</th><th>${t("interactionNotes")}</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="6">${t("noMedication")}</td></tr>`}</tbody>
    </table>
  `;
}

function measurementTableHtml() {
  const rows = [...(state.measurements || [])]
    .sort((left, right) => new Date(right.recordedAt) - new Date(left.recordedAt))
    .map((item) => `
      <tr>
        <td>${formatDate(item.recordedAt)}</td>
        <td>${escapeHtml(item.inr || "-")}</td>
        <td>${escapeHtml(item.bloodPressure || "-")}</td>
        <td>${escapeHtml(item.pulse || "-")}</td>
        <td>${escapeHtml(item.weight || "-")}</td>
        <td>${escapeHtml(item.steps || "-")}</td>
        <td>${escapeHtml(item.temperature || "-")}</td>
        <td>${escapeHtml(item.notes || "-")}</td>
      </tr>
    `)
    .join("");

  return `
    <table>
      <thead><tr><th>${t("recordedAt")}</th><th>INR</th><th>${t("bloodPressure")}</th><th>${t("pulse")}</th><th>${t("weight")}</th><th>${t("steps")}</th><th>${t("temperature")}</th><th>${t("notes")}</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="8">${t("noMeasurement")}</td></tr>`}</tbody>
    </table>
  `;
}

function intakeTableHtml() {
  const rows = [...(state.logs || [])]
    .sort((left, right) => new Date(right.takenAt) - new Date(left.takenAt))
    .map((log) => `
      <tr>
        <td>${formatDate(log.takenAt)}</td>
        <td>${escapeHtml(displayMedicationName(log.name))}</td>
        <td>${escapeHtml(log.time || "-")}</td>
        <td>${escapeHtml(displayDose(log.dose) || t("noDose"))}</td>
      </tr>
    `)
    .join("");

  return `
    <table>
      <thead><tr><th>${t("recordedAt")}</th><th>${t("name")}</th><th>${t("plannedTime")}</th><th>${t("dose")}</th></tr></thead>
      <tbody>${rows || `<tr><td colspan="4">${t("noHistory")}</td></tr>`}</tbody>
    </table>
  `;
}

function nextPendingDose() {
  return activeDoses()
    .filter((dose) => !dose.taken)
    .sort((left, right) => scheduledDateFor(left.time) - scheduledDateFor(right.time))[0];
}

function scheduledDateFor(time) {
  const [hour, minute] = time.split(":").map(Number);
  const scheduled = new Date();
  scheduled.setHours(hour, minute, 0, 0);
  return scheduled;
}

function formatDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, "0"))
    .join(":");
}

function isLate(time) {
  return scheduledDateFor(time) < new Date();
}

function checkDueDoses() {
  if (!alertsEnabled || !audioContext) {
    renderCountdown();
    return;
  }

  const dueDoses = activeDoses().filter((dose) => {
    if (dose.taken) return false;
    if (scheduledDateFor(dose.time) > new Date()) return false;
    return !alertedDoseIds.has(alertIdFor(dose));
  });

  for (const dose of dueDoses) {
    alertedDoseIds.add(alertIdFor(dose));
    notifyDose(dose);
  }

  if (dueDoses.length > 0) {
    writeStorage(`${STORAGE_KEY}-alerted`, JSON.stringify([...alertedDoseIds]));
    render();
  } else {
    renderCountdown();
  }
}

function alertIdFor(dose) {
  return `${todayKey()}-${dose.id}-${dose.time}`;
}

function notifyDose(dose) {
  showAlarmBanner(dose);
  playReminderSound();

  if (!alertsEnabled || !("Notification" in window) || Notification.permission !== "granted") {
    return;
  }

  new Notification(t("medicineNotificationTitle"), {
    body: `${displayMedicationName(dose.name)} - ${displayDose(dose.dose) || t("noDose")}`,
  });
}

function showAlarmBanner(dose) {
  currentAlarmDoseId = dose.id;
  alarmTitle.textContent = `${dose.time} · ${displayMedicationName(dose.name)}`;
  alarmText.textContent = `${displayDose(dose.dose) || t("noDose")}${dose.notes ? ` · ${displayNotes(dose.notes)}` : ""}`;
  alarmBanner.hidden = false;
}

function hideAlarmBanner() {
  currentAlarmDoseId = null;
  alarmBanner.hidden = true;
}

function playReminderSound() {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
  oscillator.frequency.setValueAtTime(660, audioContext.currentTime + 0.18);

  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.22, audioContext.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.7);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.75);
}

function alertStatusText() {
  if (!alertsEnabled) {
    return t("alertsOff");
  }

  if (!("Notification" in window)) {
    return t("desktopUnsupported");
  }

  if (Notification.permission === "granted") {
    return t("desktopGranted");
  }

  if (Notification.permission === "denied") {
    return t("desktopDenied");
  }

  return t("desktopPending");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    document.querySelectorAll(".view").forEach((item) => item.classList.remove("is-active"));

    tab.classList.add("is-active");
    document.querySelector(`#${tab.dataset.view}View`).classList.add("is-active");
  });
});

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  writeStorage(LANGUAGE_KEY, currentLanguage);
  temporaryStatusText = "";
  render();
});

addScheduleButton.addEventListener("click", () => {
  addScheduleRow("08:00", "");
});

scheduleRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-schedule]");
  if (!button) return;

  const rows = scheduleRows.querySelectorAll(".schedule-row");
  if (rows.length <= 1) return;

  button.closest(".schedule-row").remove();
  updateScheduleRemoveButtons();
});

doseList.addEventListener("click", (event) => {
  const overrideButton = event.target.closest("[data-save-dose-override]");
  if (overrideButton) {
    const dose = activeDoses().find((item) => item.id === overrideButton.dataset.saveDoseOverride);
    const input = doseList.querySelector(`[data-dose-override="${overrideButton.dataset.saveDoseOverride}"]`);
    if (!dose || !input) return;

    const key = dailyDoseKey(todayKey(), dose.medicationId, dose.scheduleId);
    const value = input.value.trim();
    state.dailyDoseOverrides = state.dailyDoseOverrides || {};
    if (value && value !== dose.defaultDose) {
      state.dailyDoseOverrides[key] = value;
    } else {
      delete state.dailyDoseOverrides[key];
    }
    saveState();
    showTemporaryStatus(t("todayDoseSaved"));
    return;
  }

  const undoButton = event.target.closest("[data-undo-log]");
  if (undoButton) {
    undoTakenLog(undoButton.dataset.undoLog);
    return;
  }

  const button = event.target.closest("[data-take]");
  if (!button) return;

  const dose = activeDoses().find((item) => item.id === button.dataset.take);
  if (!dose) return;

  state.logs.push({
    id: createId(),
    medicationId: dose.medicationId,
    scheduleId: dose.scheduleId,
    name: dose.name,
    dose: dose.dose,
    time: dose.time,
    day: todayKey(),
    takenAt: new Date().toISOString(),
  });

  saveState();
  render();
});

historyList.addEventListener("click", (event) => {
  const undoButton = event.target.closest("[data-undo-log]");
  if (!undoButton) return;

  undoTakenLog(undoButton.dataset.undoLog);
});

function undoTakenLog(logId) {
  state.logs = state.logs.filter((log) => log.id !== logId);
  saveState();
  render();
}

medicationList.addEventListener("click", (event) => {
  const toggleButton = event.target.closest("[data-toggle]");
  const deleteButton = event.target.closest("[data-delete]");

  if (toggleButton) {
    state.medications = state.medications.map((medication) =>
      medication.id === toggleButton.dataset.toggle
        ? { ...medication, active: !medication.active }
        : medication,
    );
  }

  if (deleteButton) {
    state.medications = state.medications.filter(
      (medication) => medication.id !== deleteButton.dataset.delete,
    );
  }

  saveState();
  render();
});

medicationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const schedule = readScheduleRows();

  state.medications.push({
    id: createId(),
    name: document.querySelector("#nameInput").value.trim(),
    schedule,
    notes: document.querySelector("#notesInput").value.trim(),
    source: document.querySelector("#medicationSourceInput").value,
    interactionNotes: document.querySelector("#interactionNotesInput").value.trim(),
    active: true,
  });

  medicationForm.reset();
  resetScheduleRows();
  saveState();
  render();
});

patientForm.addEventListener("submit", (event) => {
  event.preventDefault();

  state.patient = {
    name: document.querySelector("#patientNameInput").value.trim(),
    address: document.querySelector("#addressInput").value.trim(),
    ssn: document.querySelector("#ssnInput").value.trim(),
    diseases: document.querySelector("#diseaseListInput").value.trim(),
  };

  saveState();
  render();
});

measurementForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const measurement = {
    id: createId(),
    inr: document.querySelector("#inrInput").value.trim(),
    bloodPressure: document.querySelector("#bloodPressureInput").value.trim(),
    pulse: document.querySelector("#pulseInput").value.trim(),
    weight: document.querySelector("#weightInput").value.trim(),
    steps: document.querySelector("#stepsInput").value.trim(),
    temperature: document.querySelector("#temperatureInput").value.trim(),
    notes: document.querySelector("#measurementNotesInput").value.trim(),
    recordedAt: selectedMeasurementDateTime(),
  };

  const hasValue = measurement.inr || measurement.bloodPressure || measurement.pulse || measurement.weight || measurement.steps || measurement.temperature;
  if (!hasValue) return;

  state.measurements = state.measurements || [];
  if (editingMeasurementId) {
    measurement.id = editingMeasurementId;
    state.measurements = state.measurements.map((item) =>
      item.id === editingMeasurementId ? measurement : item,
    );
  } else {
    state.measurements.push(measurement);
  }
  resetMeasurementForm();
  saveState();
  render();
});

cancelMeasurementEditButton.addEventListener("click", () => {
  resetMeasurementForm();
});

measurementList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-measurement]");
  if (!editButton) return;

  startMeasurementEdit(editButton.dataset.editMeasurement);
});

document.querySelector("#resetTodayButton").addEventListener("click", () => {
  state.logs = state.logs.filter((log) => log.day !== todayKey());
  saveState();
  render();
});

document.querySelector("#clearHistoryButton").addEventListener("click", () => {
  state.logs = [];
  saveState();
  render();
});

document.querySelector("#clearMeasurementsButton").addEventListener("click", () => {
  state.measurements = [];
  saveState();
  render();
});

printPdfButton.addEventListener("click", () => {
  renderExport();
  window.print();
});

importHealthButton.addEventListener("click", async () => {
  const file = healthImportInput.files && healthImportInput.files[0];
  if (!file) {
    healthImportStatus.textContent = t("noFileSelected");
    return;
  }

  try {
    const text = await file.text();
    const imported = importAppleHealthXml(text);
    saveState();
    render();
    healthImportStatus.textContent = `${t("importedRecords")}: ${imported}`;
  } catch {
    healthImportStatus.textContent = t("healthImportError");
  }
});

function importAppleHealthXml(xmlText) {
  const documentXml = new DOMParser().parseFromString(xmlText, "text/xml");
  const records = [...documentXml.querySelectorAll("Record")];
  const dailySteps = new Map();
  const importedWeights = [];

  for (const record of records) {
    const type = record.getAttribute("type");
    const value = Number(record.getAttribute("value"));
    const startDate = record.getAttribute("startDate") || record.getAttribute("creationDate");
    if (!type || !Number.isFinite(value) || !startDate) continue;

    if (type === "HKQuantityTypeIdentifierStepCount") {
      const day = startDate.slice(0, 10);
      dailySteps.set(day, (dailySteps.get(day) || 0) + value);
    }

    if (type === "HKQuantityTypeIdentifierBodyMass") {
      importedWeights.push({
        id: createId(),
        weight: String(value),
        notes: "Apple Health",
        recordedAt: normalizeHealthDate(startDate),
      });
    }
  }

  const importedSteps = [...dailySteps.entries()].map(([day, steps]) => ({
    id: createId(),
    steps: String(Math.round(steps)),
    notes: "Apple Health",
    recordedAt: `${day}T12:00:00`,
  }));

  const importedMeasurements = [...importedSteps, ...importedWeights];
  state.measurements = [...(state.measurements || []), ...importedMeasurements];
  return importedMeasurements.length;
}

function normalizeHealthDate(value) {
  const parsed = new Date(value);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString();
  }

  return value.slice(0, 19);
}

enableAlertsButton.addEventListener("click", async () => {
  const BrowserAudioContext = window.AudioContext || window.webkitAudioContext;
  let audioStarted = false;

  if (BrowserAudioContext) {
    audioContext = audioContext || new BrowserAudioContext();
    await audioContext.resume();
    audioStarted = audioContext.state === "running";
  }

  let notificationMessage = "";
  if ("Notification" in window && Notification.permission !== "granted") {
    try {
      const permission = await Notification.requestPermission();
      notificationMessage =
        permission === "granted"
          ? t("desktopAllowed")
          : t("desktopNotAllowed");
    } catch {
      notificationMessage = t("desktopPromptBlocked");
    }
  } else if (!("Notification" in window)) {
    notificationMessage = t("desktopUnsupported");
  } else {
    notificationMessage =
      Notification.permission === "granted"
        ? t("desktopAlreadyAllowed")
        : t("desktopDenied");
  }

  alertsEnabled = true;
  writeStorage(`${STORAGE_KEY}-alerts`, "true");
  playReminderSound();
  checkDueDoses();
  showTemporaryStatus(
    `${audioStarted ? t("soundOn") : t("soundNotStarted")} ${notificationMessage}`,
  );
});

testSoundButton.addEventListener("click", async () => {
  const BrowserAudioContext = window.AudioContext || window.webkitAudioContext;
  let audioStarted = false;

  if (BrowserAudioContext) {
    audioContext = audioContext || new BrowserAudioContext();
    await audioContext.resume();
    audioStarted = audioContext.state === "running";
    playReminderSound();
  }

  alertsEnabled = true;
  writeStorage(`${STORAGE_KEY}-alerts`, "true");
  showTemporaryStatus(
    audioStarted
      ? t("testSoundPlayed")
      : t("testSoundFailed"),
  );
});

alarmTakenButton.addEventListener("click", () => {
  const dose = activeDoses().find((item) => item.id === currentAlarmDoseId);
  if (!dose) {
    hideAlarmBanner();
    return;
  }

  state.logs.push({
    id: createId(),
    medicationId: dose.medicationId,
    scheduleId: dose.scheduleId,
    name: dose.name,
    dose: dose.dose,
    time: dose.time,
    day: todayKey(),
    takenAt: new Date().toISOString(),
  });

  hideAlarmBanner();
  saveState();
  render();
});

alarmCloseButton.addEventListener("click", () => {
  hideAlarmBanner();
});

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

render();
setInterval(checkDueDoses, 1000);
