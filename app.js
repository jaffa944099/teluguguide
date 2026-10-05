'use strict';

const translations = {
  te: {
    tripPhotosLink: 'యాత్ర ఫోటోలు చూడండి ↗', photosEyebrow: 'యాత్రలోని మధుర క్షణాలు', photosTitle: 'ఆప్యాయమైన తోడు.<br>నిలిచిపోయే జ్ఞాపకాలు.', photosIntro: 'నదీ తీరంలో విహారం, టీ కోసం చిన్న విరామం, స్టేషన్‌లో వీడ్కోలు. కాశీ తెలుగు గైడ్‌తో యాత్రల్లోని కొన్ని జ్ఞాపకాలు.', photosHint: 'పూర్తి ఫోటోను కొత్త ట్యాబ్‌లో చూడటానికి దానిపై నొక్కండి.',
    photoRiverCaption: 'నదీ తీరంలో విహారం', photoRiverAlt: 'చెట్లు, ప్రవహించే నీటి నేపథ్యంలో రాతి నదీ తీరంలో ఏడుగురు కలిసి దిగిన ఫోటో', photoPlatformCaption: 'ప్లాట్‌ఫారమ్‌పై కలిసి', photoPlatformAlt: 'రైల్వే ప్లాట్‌ఫారమ్‌పై ఆరుగురు కలిసి తీసుకున్న సెల్ఫీ', photoStationCaption: 'స్టేషన్‌లో ఒక జ్ఞాపకం', photoStationAlt: 'రాత్రివేళ రైలు పక్కన సామానుతో నలుగురు కలిసి దిగిన ఫోటో', photoTeaCaption: 'టీతో చిన్న విరామం', photoTeaAlt: 'టీ దుకాణం దగ్గర ఇద్దరు తీసుకున్న సెల్ఫీ; ఒకరి చేతిలో చిన్న మట్టి కప్పు', photoAirportCaption: 'ప్రయాణానికి సిద్ధం', photoAirportAlt: 'విమానాశ్రయంలో D2 ప్రవేశ ద్వారం బయట సామానుతో ముగ్గురు కలిసి దిగిన ఫోటో',
    skip: 'విషయానికి వెళ్లండి', navDiscover: 'కాశీని చూడండి', navAbout: 'కైఫ్‌ను కలవండి', navReviews: 'సమీక్షలు', navFaq: 'తెలుసుకోవాల్సినవి', planVisit: 'మీ యాత్రను ప్లాన్ చేయండి ↗',
    heroEyebrow: 'వారణాసి, భారతదేశం · శాశ్వతమైన అనుభూతి', heroTitle: 'చూడాల్సిన నగరం.<br>అనుభూతి చెందాల్సిన కాశీ.', heroCopy: 'గంగా నది. పూజలు. చిన్న వీధులు.<br>మీరు చూడాలనుకున్న కాశీకి మరింత చేరువగా.', explore: 'కాశీని చూడండి ↗', heroBottom: 'కైఫ్ (రాజు)తో మీ యాత్ర · కాశీ తెలుగు గైడ్', heroCaption: 'గంగా తీరంలో,<br>ప్రతి రోజూ ఒక కొత్త కథ.', introStrip: 'ఒక నగరం. ఎన్నో అనుభవాలు.',
    discoverEyebrow: 'మీ కాశీని కనుగొనండి', discoverTitle: 'మీ ఆసక్తిని అనుసరించండి.', discoverCopy: 'పవిత్ర ప్రదేశాలు, ప్రశాంతమైన నదీ తీరం, పూజలతో కళకళలాడే నగరం. మీకు నచ్చిన అనుభవంతో మొదలుపెట్టండి.', filterAll: 'అన్ని అనుభవాలు', filterRiver: 'నదీ తీరంలో', filterSpiritual: 'ఆధ్యాత్మిక కాశీ', filterCulture: 'పూజలు & స్థానిక జీవనం',
    riverTag: 'నది & ఘాట్‌లు', riverTitle: 'గంగా తీరంలోని జీవనం.', riverCopy: 'ఘాట్‌లు, గంగా నది, కాశీ జీవనాన్ని ఆస్వాదించండి. నదీ తీర నడక లేదా పడవ ప్రయాణం గురించి అడగండి.', spiritualTag: 'ఆలయాలు & సంప్రదాయాలు', spiritualTitle: 'పవిత్రత వైపు అడుగులు.', spiritualCopy: 'కాశీ విశ్వనాథుని దర్శనం, పవిత్ర వీధుల సందర్శనకు సమయం కేటాయించండి. ప్రస్తుత ప్రవేశ నిబంధనలకు అనుగుణంగా ప్లాన్ చేయండి.', cultureTag: 'పూజలు & స్థానిక జీవనం', cultureTitle: 'ఈ క్షణాన్ని ఆస్వాదించండి.', cultureCopy: 'అస్సీ ఘాట్‌లో ఉదయం హారతి నుండి దశాశ్వమేధ ఘాట్‌లో సాయంత్రం హారతి వరకు, నదీ తీర సంప్రదాయాలను తెలుసుకోండి.', experienceNote: 'ఇవి మీ యాత్రకు కొన్ని సూచనలు. మార్గం, గైడ్ లభ్యత, పడవ ప్రయాణం, ఆలయ ఏర్పాట్లను నేరుగా నిర్ధారించుకోండి.',
    aboutEyebrow: 'మీ గైడ్‌ను కలవండి', aboutTitle: 'కైఫ్ (రాజు).<br>మీ కాశీ యాత్రకు గైడ్.', aboutCopy: 'రాజు అని కూడా పిలిచే కైఫ్, కాశీ తెలుగు గైడ్‌లో మీతో తెలుగులో మాట్లాడే గైడ్. ఆయన స్నేహపూర్వకత, ఓపిక, సహాయం చేసే స్వభావంతో పాటు కాశీ చరిత్ర, సంస్కృతి, స్థానిక వీధులపై ఉన్న పరిజ్ఞానాన్ని అతిథులు ప్రశంసించారు.', guideServicesHeading: 'మీ కాశీ యాత్రకు సహాయం', serviceGuidance: 'వారణాసి స్థానిక మార్గదర్శనం', serviceDarshan: 'దర్శనం', serviceBoats: 'పడవ ప్రయాణాలు', serviceTransport: 'రవాణా', serviceRooms: 'గదుల బుకింగ్', serviceFood: 'స్థానిక ఆహారం', guideServiceNote: 'లభ్యత, సమయాలు, అదనపు ఛార్జీల గురించి కైఫ్‌తో నేరుగా మాట్లాడండి.', planWithKaif: 'కైఫ్ (రాజు)తో ప్లాన్ చేయండి ↗', guestFeedbackLink: 'అతిథుల సమీక్షలు చదవండి ↗',
    reviewsEyebrow: 'GOOGLE సమీక్షల నుండి', reviewsTitle: 'అతిథులకు నచ్చిన<br>రాజు మార్గదర్శనం.', reviewsIntro: 'ఈ రెండు Google సమీక్షల్లో, అతిథులు తమ కాశీ యాత్రను సౌకర్యవంతంగా, చక్కటి ఏర్పాట్లతో, ఆప్యాయంగా మార్చిన అనుభవాలను పంచుకున్నారు.',
    highlightLanguageTitle: 'తెలుగులో సులభమైన సంభాషణ', highlightLanguageCopy: 'తెలుగు మాట్లాడే గైడ్ ఉండటం ప్రయాణంలో సౌకర్యంగా అనిపించిందని ఇద్దరు సమీక్షకులూ ప్రశంసించారు.', highlightKnowledgeTitle: 'కాశీపై స్థానిక పరిజ్ఞానం', highlightKnowledgeCopy: 'చరిత్ర, సంస్కృతిని సులభంగా వివరించడం, కాశీ ఇరుకైన వీధుల్లో దారి చూపడంలో పరిచయం ఉండటం గురించి అతిథులు ప్రశంసించారు.', highlightCareTitle: 'ఓపిక, వ్యక్తిగత శ్రద్ధ', highlightCareCopy: 'ఆయన స్నేహపూర్వకంగా, ఓపికగా సహాయం చేస్తూ కుటుంబ సభ్యుడితో ప్రయాణిస్తున్న అనుభూతిని కలిగించారని ఒక అతిథి తెలిపారు.', highlightPlanningTitle: 'ఏర్పాట్లలో తోడ్పాటు', highlightPlanningCopy: 'ఆలయ సందర్శనలు, గంగా నదిలో పడవ ప్రయాణం, ప్రయాగ్‌రాజ్ యాత్రతో సహా రవాణాను రాజు సమన్వయం చేశారని ఒక కుటుంబం సమీక్షలో పేర్కొంది.',
    reviewScore: '5 / 5 · Google సమీక్ష', reviewQuoteOne: '“ఆయన ఎంతో స్నేహపూర్వకంగా ఉండి, మేము గైడ్‌తో కాకుండా కుటుంబ సభ్యుడితో ప్రయాణిస్తున్నట్లుగా అనిపించేలా చేశారు.”', reviewQuoteTwo: '“ప్రయాణమంతా మా వెంటే ఉండే, అంకితభావం గల నిజాయితీపరుడైన తెలుగు మాట్లాడే గైడ్ ఉండటంతో మా కుటుంబానికి ఈ తీర్థయాత్ర పూర్తిగా ఒత్తిడి లేకుండా, సౌకర్యవంతంగా సాగింది.”', reviewAttribution: 'Google సమీక్ష నుండి · తెలుగు అనువాదం', reviewsNote: 'రెండు Google సమీక్షల నుండి ఎంపిక చేసిన భాగాల తెలుగు అనువాదం.', readGoogleReviews: 'Googleలో సమీక్షలు చదవండి ↗',
    planEyebrow: 'మీకు నచ్చిన యాత్ర', planTitle: 'కాశీ పిలుస్తోంది.<br>ఎక్కడ మొదలుపెడదాం?', planCopy: 'మీ ఆలోచనలను సిద్ధం చేసుకోండి. లభ్యత, యాత్ర వివరాల కోసం కాశీ తెలుగు గైడ్‌లో కైఫ్ (రాజు)ను సంప్రదించండి.', planNote: 'మంచి ప్రశ్నలతోనే<br>మంచి ప్రయాణం మొదలవుతుంది.', callLabel: 'మీ యాత్ర గురించి మాట్లాడుకుందాం', location: 'లహంగ్‌పురా, గిరి నగర్ కాలనీ<br>ఔరంగాబాద్, వారణాసి · మ్యాప్ చూడండి ↗', formTitle: 'కొన్ని వివరాలతో మొదలుపెడదాం.', dateLabel: 'ఎప్పుడు వస్తున్నారు?', travelersLabel: 'ఎంతమంది ప్రయాణికులు?', travelerOne: '1 ప్రయాణికుడు', travelerTwo: '2 ప్రయాణికులు', travelerSmall: '3–5 ప్రయాణికులు', travelerGroup: '6 లేదా ఎక్కువ మంది', interestLabel: 'మీకు ఏవి ఆసక్తికరం?', interestRiver: 'నది & ఘాట్‌లు', interestSpiritual: 'ఆలయాలు', interestCulture: 'హారతి & స్థానిక జీవనం', notesLabel: 'ఇంకా ఏమైనా చెప్పాలనుకుంటున్నారా? <span>(ఐచ్ఛికం)</span>', notesPlaceholder: 'మీ ప్లాన్, మీకు కావాల్సిన భాష, లేదా ప్రశ్నలు…', prepareEnquiry: 'నా సందేశాన్ని సిద్ధం చేయండి ↗', formHint: 'కాపీ చేసుకోవడానికి సందేశాన్ని సిద్ధం చేస్తుంది. మీ వివరాలు మీ బ్రౌజర్‌లోనే ఉంటాయి; ఇక్కడ బుకింగ్ లేదా సందేశం పంపడం జరగదు.', readyLabel: 'మీ తదుపరి అడుగు', readyTitle: 'మీ సందేశం సిద్ధమైంది.', readyCopy: 'గైడ్‌ను సంప్రదించేటప్పుడు ఈ సందేశాన్ని ఉపయోగించండి. మీ యాత్ర గురించి మాట్లాడేందుకు కాల్ చేయండి లేదా మరిన్ని వివరాల కోసం Google లిస్టింగ్ చూడండి.', copyMessage: 'సందేశం కాపీ చేయండి', contactGuide: 'కైఫ్ (రాజు)కు కాల్ చేయండి ↗', editDetails: 'వివరాలు మార్చండి',
    faqEyebrow: 'వెళ్లే ముందు', faqTitle: 'తెలుసుకోవాల్సిన<br>కొన్ని విషయాలు.', faqIntro: 'కొత్త అనుభవాలకు చోటివ్వండి.<br>అవసరమైన ఏర్పాట్లు ముందే చేసుకోండి.', faqOne: 'యాత్రను ఎలా ఏర్పాటు చేసుకోవాలి?', faqOneAnswer: 'పైన మీ సందేశాన్ని సిద్ధం చేసుకోండి. ప్రస్తుత సంప్రదింపు వివరాల కోసం కాశీ తెలుగు గైడ్ Google లిస్టింగ్ చూడండి లేదా ఫోన్ చేయండి. తేదీలు, కలిసే ప్రదేశం, మార్గం, ఫీజులను గైడ్‌తో నేరుగా నిర్ధారించుకోండి.', faqTwo: 'తెలుగులో గైడ్ సేవ కోరవచ్చా?', faqTwoAnswer: 'అవును. కైఫ్ (రాజు) తెలుగులో మాట్లాడతారు. ఆయనతో తెలుగులో సులభంగా మాట్లాడగలిగామని అతిథులు సమీక్షల్లో పేర్కొన్నారు. మీకు కావాల్సిన భాష, తేదీలను తెలపండి; ఆ తేదీల్లో ఆయన లభ్యతను నిర్ధారించుకోండి.', faqThree: 'ఆలయ టికెట్లు లేదా పడవ ప్రయాణం కలిపి ఉంటాయా?', faqThreeAnswer: 'ఈ పేజీలోని అనుభవాలు మీ యాత్రకు సూచనలు మాత్రమే. ప్రవేశ రుసుములు, అధికారిక బుకింగ్, పడవ ఖర్చులు, ఏమి కలిపి ఉంటాయో గైడ్‌ను అడగండి. పడవ లభ్యత నది, వాతావరణ పరిస్థితులపై ఆధారపడి ఉంటుంది.', faqFour: 'ఘాట్‌లు, ఆలయాల్లో ఏమి గుర్తుంచుకోవాలి?', faqFourAnswer: 'సౌకర్యవంతమైన పాదరక్షలు, మర్యాదపూర్వక దుస్తులు ధరించండి. తాగునీరు తీసుకెళ్లండి. స్థానిక సూచనలు, ఆలయ భద్రతా నియమాలను పాటించండి. వ్యక్తులు లేదా పూజల ఫోటోలు తీసే ముందు అనుమతి అడగండి; దహన ఘాట్‌ల వద్ద ఆంక్షలను గౌరవించండి.',
    closingEyebrow: 'మనసులో నిలిచిపోయే నగరం', closingTitle: 'కాశీకి రండి.<br>ఒక కథతో తిరిగి వెళ్లండి.', connectGoogle: 'Googleలో సంప్రదించండి ↗', footerNote: 'వారణాసి, భారతదేశం.<br>పురాతన నగరం. కొత్త జ్ఞాపకాలు.', viewListing: 'Google లిస్టింగ్ చూడండి ↗', photoCredits: 'ఫోటో వివరాలు', backTop: 'పైకి వెళ్లండి ↑'
  }
};

const arrowIcon = '<svg class="arrow-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const originals = new Map();
document.querySelectorAll('[data-i18n]').forEach(element => originals.set(element, element.innerHTML));
const placeholderOriginals = new Map();
document.querySelectorAll('[data-i18n-placeholder]').forEach(element => placeholderOriginals.set(element, element.placeholder));
const altOriginals = new Map();
document.querySelectorAll('[data-i18n-alt]').forEach(element => altOriginals.set(element, element.alt));
const languageButton = document.getElementById('language-toggle');
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');
const form = document.getElementById('visit-form');
const result = document.getElementById('enquiry-result');
const message = document.getElementById('enquiry-message');
const status = document.getElementById('copy-status');
let language = 'en';
try { if (localStorage.getItem('kaashi-language') === 'te') language = 'te'; } catch { /* Language preference is optional. */ }

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  originals.forEach((original, element) => { element.innerHTML = (language === 'te' ? translations.te[element.dataset.i18n] || original : original).replaceAll('↗', arrowIcon); });
  placeholderOriginals.forEach((original, element) => { element.placeholder = language === 'te' ? translations.te[element.dataset.i18nPlaceholder] || original : original; });
  altOriginals.forEach((original, element) => { element.alt = language === 'te' ? translations.te[element.dataset.i18nAlt] || original : original; });
  languageButton.innerHTML = language === 'te' ? `English ${arrowIcon}` : `తెలుగు ${arrowIcon}`;
  languageButton.setAttribute('aria-label', language === 'te' ? 'Switch to English' : 'Switch to Telugu');
  updateMenuLabel();
  message.setAttribute('aria-label', language === 'te' ? 'మీ సిద్ధం చేసిన సందేశం' : 'Your prepared enquiry');
  status.textContent = '';
  if (!result.hidden) message.value = createMessage();
  try { localStorage.setItem('kaashi-language', language); } catch { /* The page also works without storage. */ }
}

function updateMenuLabel() {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', language === 'te' ? (open ? 'మెనూ మూసివేయండి' : 'మెనూ తెరవండి') : (open ? 'Close menu' : 'Open menu'));
}

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
}

languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'te' : 'en'));
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(other => {
    const selected = other === button;
    other.classList.toggle('active', selected);
    other.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
}));

document.querySelectorAll('[data-interest-link]').forEach(link => link.addEventListener('click', () => {
  const checkbox = form.querySelector(`input[value="${link.dataset.interestLink}"]`);
  checkbox.checked = true;
  if (form.hidden) editDetails(false);
}));

const now = new Date();
const dateInput = document.getElementById('visit-date');
dateInput.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
document.getElementById('year').textContent = now.getFullYear();

function createMessage() {
  const data = new FormData(form);
  const date = data.get('date');
  const formattedDate = date ? new Intl.DateTimeFormat(language === 'te' ? 'te-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T12:00:00`)) : (language === 'te' ? 'ఇంకా నిర్ణయించలేదు' : 'Still deciding');
  const interests = data.getAll('interest').map(value => ({ river: language === 'te' ? 'నది & ఘాట్‌లు' : 'River & ghats', spiritual: language === 'te' ? 'ఆలయాలు' : 'Temples', culture: language === 'te' ? 'హారతి & స్థానిక జీవనం' : 'Aarti & local life' })[value]);
  const notes = String(data.get('notes')).trim();
  if (language === 'te') return `నమస్కారం కైఫ్ (రాజు) గారూ! నా వారణాసి యాత్ర గురించి తెలుసుకోవాలనుకుంటున్నాను.\n\nతేదీ: ${formattedDate}\nప్రయాణికులు: ${data.get('travelers')}\nఆసక్తులు: ${interests.length ? interests.join(', ') : 'మీ సూచనలు కావాలి'}${notes ? `\nఇతర వివరాలు: ${notes}` : ''}\n\nగైడ్ లభ్యత, మార్గం, కలిసే ప్రదేశం, ఫీజులు తెలియజేయండి.`;
  return `Hello Kaif (Raju)! I'd like to discuss a visit to Varanasi.\n\nVisit date: ${formattedDate}\nTravelers: ${data.get('travelers')}\nInterests: ${interests.length ? interests.join(', ') : 'Open to suggestions'}${notes ? `\nOther details: ${notes}` : ''}\n\nPlease share guide availability, suggested route, meeting point and fees.`;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  message.value = createMessage();
  status.textContent = '';
  form.hidden = true;
  result.hidden = false;
  message.focus({ preventScroll: true });
});

function editDetails(focus = true) {
  form.hidden = false;
  result.hidden = true;
  status.textContent = '';
  if (focus) dateInput.focus({ preventScroll: true });
}
document.getElementById('edit-enquiry').addEventListener('click', () => editDetails());
document.getElementById('copy-enquiry').addEventListener('click', async () => {
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(message.value); copied = true; }
  } catch { /* Fall back to selecting the text if clipboard permission is unavailable. */ }
  if (!copied) {
    message.focus();
    message.select();
    try { copied = document.execCommand('copy'); } catch { /* Selected text can still be copied manually. */ }
  }
  status.textContent = copied ? (language === 'te' ? 'సందేశం కాపీ చేయబడింది.' : 'Message copied. Keep it handy when you contact the guide.') : (language === 'te' ? 'సందేశం ఎంచుకోబడింది. దయచేసి కాపీ చేయండి.' : 'Your message is selected. Please copy it manually.');
});

setLanguage(language);
