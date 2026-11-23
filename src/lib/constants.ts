import insAetna from "../../public/images/insurance/aetna.svg";
import insAnthem from "../../public/images/insurance/anthem.png";
import insBlueShieldCa from "../../public/images/insurance/blue-shield-ca.png";
import insCigna from "../../public/images/insurance/cigna.svg";
import insMagellan from "../../public/images/insurance/magellan.png";
import insMhn from "../../public/images/insurance/mhn.png";
import insMedicare from "../../public/images/insurance/medicare.png";
import insOptum from "../../public/images/insurance/optum.svg";
import insTricare from "../../public/images/insurance/tricare.svg";
import insTriwest from "../../public/images/insurance/triwest.png";
import insUnited from "../../public/images/insurance/unitedhealthcare.svg";
import acceleratedImg from "../../public/images/accelerated-tms.webp";
import evidenceImg from "../../public/images/evidence.webp";
import coilImg from "../../public/images/navigated-coil.webp";
import doctorImg from "../../public/images/dr-liker.webp";
import doctorPatientImg from "../../public/images/dr-liker-patient.webp";
import heroImg from "../../public/images/hero.webp";
import laterLifeImg from "../../public/images/later-life.webp";
import listenImg from "../../public/images/listen.webp";
import mappingImg from "../../public/images/mapping-review.webp";
import progressImg from "../../public/images/progress.webp";
import reliefImg from "../../public/images/relief.webp";
import sessionImg from "../../public/images/session.webp";
import veteranImg from "../../public/images/veteran.jpg";
import videoLikerImg from "../../public/images/videos/liker-explains.jpg";
import videoSmartfocusImg from "../../public/images/videos/smartfocus.jpg";
import videoStoryImg from "../../public/images/videos/story-john.jpg";

export const SITE_NAME = "BrainStim Centers";
export const SITE_SHORT = "BrainStim";
export const SITE_URL = "https://www.brainstimcenters.com";
export const PROVIDER = "Dr. Mark Liker";

export const LOGO_URL = "/images/logo.png";
export const LOGO_LIGHT_URL = "/images/logo-light.png";

/**
 * Imported (not referenced by path) so every image URL carries a content hash.
 * Replace a file in public/images and the page picks up the new one.
 */
export const IMAGES = {
  hero: heroImg,
  listen: listenImg,
  mapping: mappingImg,
  session: sessionImg,
  progress: progressImg,
  coil: coilImg,
  doctor: doctorImg,
  doctorPatient: doctorPatientImg,
  relief: reliefImg,
  veteran: veteranImg,
  laterLife: laterLifeImg,
  accelerated: acceleratedImg,
  evidence: evidenceImg,
} as const;

export const BOOKING_SECTION_ID = "book";
export const FORM_SECTION_ID = "qualify";
export const CONDITIONS_SECTION_ID = "conditions";
export const SERVICES_SECTION_ID = "treatments";
export const APPROACH_SECTION_ID = "how-it-works";
export const EVIDENCE_SECTION_ID = "evidence";
export const DOCTOR_SECTION_ID = "dr-liker";
export const INSURANCE_SECTION_ID = "insurance";
export const FAQ_SECTION_ID = "faq";
export const LOCATIONS_SECTION_ID = "locations";

/**
 * Where every "Book your Free Consultation" button goes.
 * Default: the on-page calendar, so paid traffic stays on the tracked page.
 * The brief also names `${SITE_URL}/consult.html`. Swap this one line to send
 * visitors there instead.
 */
export const BOOK_HREF = `#${BOOKING_SECTION_ID}`;

export const FORM_ID = "26rXAJztyxP9yNhOkEsk";
export const FORM_IFRAME_ID = "inline-26rXAJztyxP9yNhOkEsk";
export const FORM_NAME = "TMS: New Web Inquiry + Params - Memory";
export const FORM_HEIGHT = "1986";

export const CALENDAR_ID = "NOhXkZBypjHrzJMxSxd1";
/** Must start with a letter: form_embed.js builds a CSS selector from this id. */
export const CALENDAR_IFRAME_ID = "b6SixYOqTtIxpDyQuOJB_1795207757604";

/**
 * TODO before launch: replace with the Twilio tracking number.
 * The clinic’s new-patient line is used as a placeholder.
 */
export const PHONE_NUMBER = "(310) 895-7122";
export const PHONE_HREF = "tel:+13108957122";

export const HOURS_LABEL = "Monday to Friday, 8 am to 5 pm";

export const NAV_LINKS = [
  { label: "Conditions", href: `#${CONDITIONS_SECTION_ID}` },
  { label: "TMS Treatments", href: `#${SERVICES_SECTION_ID}` },
  { label: "How it works", href: `#${APPROACH_SECTION_ID}` },
  { label: "Dr. Liker", href: `#${DOCTOR_SECTION_ID}` },
  { label: "Insurance", href: `#${INSURANCE_SECTION_ID}` },
  { label: "FAQ", href: `#${FAQ_SECTION_ID}` },
] as const;

export const HERO_CHIPS = [
  { icon: "shield", label: "FDA-cleared" },
  { icon: "target", label: "Targeted to your own MRI" },
  { icon: "clock", label: "About 30 minutes a session" },
] as const;

export const TRUST_ITEMS = [
  { icon: "shield", title: "Drug-free and non-invasive", subtitle: "No anesthesia. Drive yourself home." },
  { icon: "chart", title: "Neurosurgeon-reviewed plans", subtitle: "Dr. Mark Liker reviews every plan" },
  { icon: "wave", title: "Insurance checked first", subtitle: "Free consultation, no commitment" },
  { icon: "pin", title: "5 California clinics", subtitle: "Southern California and the Bay Area" },
] as const;

export type Condition = {
  id: string;
  name: string;
  status: string;
  cleared: boolean;
  quote: string;
  body: string;
  stats: readonly { value: string; label: string; source: string }[];
};

export const CONDITIONS: readonly Condition[] = [
  {
    id: "depression",
    name: "Depression",
    status: "FDA-cleared since 2008",
    cleared: true,
    quote: "I’ve tried treatment, and I’m still struggling.",
    body: "Medication that didn’t help, or helped and then stopped. That doesn’t mean nothing will. TMS works differently: gentle magnetic pulses wake up the underactive areas of the brain linked to mood, with no pills involved.",
    stats: [
      {
        value: "2 in 3",
        label: "people don’t get relief from the first antidepressant they try",
        source: "STAR*D trial, 2,876 patients (Trivedi et al., 2006)",
      },
      {
        value: "58 in 100",
        label: "responded to TMS after medication hadn’t helped",
        source: "307 patients at 42 US clinics (Carpenter et al., 2012)",
      },
      {
        value: "37 in 100",
        label: "were close to symptom-free by the end of treatment",
        source: "307 patients at 42 US clinics (Carpenter et al., 2012)",
      },
    ],
  },
  {
    id: "anxiety",
    name: "Anxiety",
    status: "FDA-cleared in 2021, with depression",
    cleared: true,
    quote: "My mind won’t stop racing.",
    body: "Worry you can’t put down is exhausting. TMS calms the overactive areas behind anxious thoughts, rumination and poor sleep. It is FDA-cleared for anxiety that comes with depression, and we’ve used it when medication hasn’t helped.",
    stats: [
      {
        value: "19 in 100",
        label: "American adults had an anxiety disorder in the past year",
        source: "NIMH, National Comorbidity Survey",
      },
      {
        value: "2021",
        label: "the year TMS was FDA-cleared for anxiety that comes with depression",
        source: "FDA clearance",
      },
    ],
  },
  {
    id: "ocd",
    name: "OCD",
    status: "FDA-cleared for adults since 2018",
    cleared: true,
    quote: "The thoughts keep coming back, however hard I push them away.",
    body: "OCD can take hours out of every day. TMS has been FDA-cleared for adults with OCD since 2018, and it can be an option when therapy and medication haven’t been enough on their own.",
    stats: [
      {
        value: "38 in 100",
        label: "responded to TMS, against 11 in 100 given a placebo",
        source: "Randomized trial at 11 centers (Carmi et al., 2019)",
      },
      {
        value: "45 in 100",
        label: "had responded one month after treatment ended",
        source: "Randomized trial at 11 centers (Carmi et al., 2019)",
      },
    ],
  },
  {
    id: "ptsd",
    name: "PTSD",
    status: "Off-label use",
    cleared: false,
    quote: "I keep reliving something that happened.",
    body: "Nightmares, being on edge, avoiding places and people. Many of the people we see have served, or lived through something they didn’t choose. TMS for PTSD is an off-label use, and we’ll explain honestly what the research shows and whether it fits you. We go at your pace.",
    stats: [
      {
        value: "5 in 100",
        label: "American adults have PTSD in a given year, about 13 million people",
        source: "VA National Center for PTSD",
      },
      {
        value: "About half",
        label: "also have major depression, which TMS is FDA-cleared to treat",
        source: "Review of 57 studies (Rytwinski et al., 2013)",
      },
    ],
  },
] as const;

export const APPROACH_STEPS = [
  {
    step: "01",
    title: "It starts with your story",
    body: "Your first conversations are about you: what’s been happening, what you’ve already tried, and what you want back. Standard questionnaires put your symptoms on record, so later we can measure change rather than guess at it.",
    image: IMAGES.listen,
    alt: "A woman in an armchair talking through her history with a clinician.",
    tag: "Free consultation",
  },
  {
    step: "02",
    title: "Your brain, mapped two ways",
    body: "An MRI shows your brain’s structure and becomes a 3D model for planning your target. A brainwave map (qEEG) shows how your brain is working, so treatment can be tuned to your own rhythm.",
    image: IMAGES.mapping,
    alt: "A physician reviewing brain scans with a patient at a table.",
    tag: "MRI + qEEG",
  },
  {
    step: "03",
    title: "A neurosurgeon reviews your plan",
    body: "Dr. Mark Liker and our clinical team read your story, scans and scores side by side. Every plan is reviewed by him before it starts. If treatment here isn’t the right fit, we’ll tell you.",
    image: IMAGES.doctorPatient,
    alt: "Dr. Mark Liker in a white coat, seated and talking with a patient.",
    tag: "Dr. Mark Liker, neurosurgeon",
  },
  {
    step: "04",
    title: "Every pulse, steered to your target",
    body: "An infrared camera tracks your head in real time and guides the coil to the point planned on your own MRI, and back to it every session. You sit in a recliner, awake, and go on with your day afterward.",
    image: IMAGES.session,
    alt: "A patient relaxing in a recliner while a clinician holds a TMS coil to her head.",
    tag: "TMS session",
  },
  {
    step: "05",
    title: "Progress measured, not just promised",
    body: "The same questionnaires, such as the PHQ-9, GAD-7 and PCL-5, are asked again during treatment and at the end, so you can see what has changed against where you began.",
    image: IMAGES.progress,
    alt: "A woman reading a book in a sunlit chair.",
    tag: "PHQ-9 · GAD-7 · PCL-5",
  },
] as const;

/** Videos from brainstimcenters.com (YouTube ids). */
export const VIDEOS = {
  smartfocus: {
    id: "_nQ93RAczLk",
    title: "How SmartFocus® TMS works",
    meta: "Nexstim · Neuro-navigated TMS",
    thumb: videoSmartfocusImg,
  },
  liker: {
    id: "4bL6FRX91tA",
    title: "How does TMS work, scientifically?",
    meta: "Dr. Mark Liker · 1:14",
    thumb: videoLikerImg,
  },
  story: {
    id: "q9pNTX9z-Ac",
    title: "John: depression and anxiety",
    meta: "Patient story · 4:58",
    thumb: videoStoryImg,
  },
} as const;

export const VIDEO_ROW = [VIDEOS.smartfocus, VIDEOS.liker, VIDEOS.story] as const;

export const SERVICES = [
  {
    id: "navigated-tms",
    title: "Neuro-Navigated TMS",
    badge: "FDA-cleared",
    eyebrow: "Non-invasive · Drug-free",
    description:
      "Gentle magnetic pulses from a coil that rests against your head, aimed at a point mapped on your own MRI. Nothing enters the body. You stay awake and seated in a recliner, and you can drive yourself home afterward.",
    points: [
      "Every pulse steered to a target planned on your own brain",
      "Coil and head tracked live, so each session returns to the same point",
      "No anesthesia, no sedation and no medication",
      "FDA-cleared for depression, anxiety with depression, and OCD. Also used off-label for PTSD",
    ],
    facts: [
      { label: "Session", value: "About 30 min" },
      { label: "Course", value: "5 a week, 6 weeks" },
      { label: "Anesthesia", value: "None" },
    ],
    image: IMAGES.coil,
    imageAlt:
      "A patient at BrainStim during a navigated TMS session, the coil guided to the point planned on her own brain.",
    imagePosition: "center 30%",
  },
  {
    id: "accelerated-tms",
    title: "Accelerated TMS",
    badge: "5-day course",
    eyebrow: "If you need relief sooner",
    description:
      "A concentrated schedule: ten short sessions a day for five days, instead of one session a day over six weeks or more. It isn’t right for everyone, and we’ll talk through whether it fits you.",
    points: [
      "Fifty short sessions in a single week",
      "Rest, read or step out between sessions",
      "Can suit people who can’t come in daily for weeks, or who travel to us",
      "Coverage varies by plan, so we check yours before anything is booked",
    ],
    facts: [
      { label: "Per day", value: "10 sessions" },
      { label: "Each session", value: "10 to 15 min" },
      { label: "Course", value: "5 days" },
    ],
    image: IMAGES.accelerated,
    imageAlt: "Two clinicians reviewing a 3D brain model on a screen while a patient is prepared for TMS.",
    imagePosition: "38% center",
  },
  {
    id: "brain-mapping",
    title: "Brain Mapping and Measured Progress",
    badge: "MRI + qEEG",
    eyebrow: "Personalized · Measured",
    description:
      "Before anything is decided, an MRI shows your brain’s structure and a brainwave map (qEEG) shows how it is working. Treatment is tuned to your own brain’s rhythm, and your progress is tracked against where you began.",
    points: [
      "Your MRI becomes a 3D model used to plan your target",
      "qEEG tunes treatment to your own brain’s rhythm",
      "Every plan reviewed by neurosurgeon Dr. Mark Liker before it starts",
      "Progress tracked with the PHQ-9, GAD-7 and PCL-5",
    ],
    facts: [
      { label: "Mapping", value: "MRI + qEEG" },
      { label: "Reviewed by", value: "A neurosurgeon" },
      { label: "Progress", value: "Measured" },
    ],
    image: IMAGES.mapping,
    imageAlt: "A physician reviewing brain scans with a patient at a table.",
    imagePosition: "100% center",
  },
] as const;

export const COMPARE = {
  standard: {
    title: "Non-navigated TMS",
    points: [
      "Finds its spot from general landmarks on the head",
      "Coil placed by measuring from points on the scalp",
      "Placed by eye again at each session",
    ],
  },
  navigated: {
    title: "Navigated TMS at BrainStim",
    points: [
      "Steered to a point marked on your own MRI",
      "Coil and head tracked live, even if you move",
      "The same location and measured dose, every session",
    ],
  },
} as const;

export const DOCTOR_CREDENTIALS = [
  "Board-certified neurosurgeon",
  "Assistant Professor of Neurosurgery, USC Keck School of Medicine",
  "Medical Director of Neurosurgery, Henry Mayo Hospital",
] as const;

export const AUDIENCES = [
  {
    kicker: "If medication hasn’t helped",
    title: "Another option, without another pill",
    body: "For adults with depression, anxiety or OCD who have tried medication and are still struggling.",
    image: IMAGES.relief,
    alt: "A woman sitting by a sunlit window, hugging a pillow and smiling.",
  },
  {
    kicker: "If you served",
    title: "Veterans and service members",
    body: "A brain health evaluation, then care planned for PTSD, brain injury and depression.",
    image: IMAGES.veteran,
    alt: "An older man in a Vietnam veteran cap, smiling by the sea.",
  },
  {
    kicker: "If you’re caring for a parent",
    title: "Depression with memory decline",
    body: "Treatment that adds no new pills to the list and is spent sitting in a recliner. Patients have come to us in their eighties.",
    image: IMAGES.laterLife,
    alt: "A grandmother and her granddaughter arranging flowers at a sunlit table.",
  },
] as const;

export const INSURERS = [
  { name: "Aetna", logo: insAetna },
  { name: "Anthem Blue Cross", logo: insAnthem },
  { name: "Blue Shield of California", logo: insBlueShieldCa },
  { name: "Cigna", logo: insCigna },
  { name: "Magellan Health", logo: insMagellan },
  { name: "Medicare", logo: insMedicare },
  { name: "MHN, a Health Net company", logo: insMhn },
  { name: "Optum", logo: insOptum },
  { name: "TRICARE", logo: insTricare },
  { name: "TriWest", logo: insTriwest },
  { name: "UnitedHealthcare", logo: insUnited },
] as const;

export const INSURANCE_STEPS = [
  {
    title: "We check your benefits",
    body: "We contact your insurer to confirm what your plan covers for TMS, including any copay or deductible. Checking costs nothing.",
  },
  {
    title: "You talk with our nurse practitioner",
    body: "A telehealth evaluation about your history, what you’ve tried and what you’re hoping for.",
  },
  {
    title: "We handle the approval",
    body: "We prepare and submit the prior authorization for you. It usually takes 1 to 10 business days.",
  },
] as const;

export const FAQS = [
  {
    q: "What is neuro-navigated TMS?",
    a: "TMS (transcranial magnetic stimulation) uses brief magnetic pulses to activate specific areas of the brain. Neuro-navigated TMS uses your own MRI to guide and personalize it. Instead of relying on general landmarks on the head, the clinician can see and track the exact region being stimulated in real time, so the pulses reach the intended target every session.",
  },
  {
    q: "Is TMS the same as ECT?",
    a: "No. ECT passes an electric current into the brain, needs anesthesia, and can cause side effects such as memory loss. In TMS a magnetic field passes through the scalp and induces a small electric field in the brain tissue beneath the coil. There’s no anesthesia, and you can go on with your day straight after.",
  },
  {
    q: "What does a session feel like?",
    a: "You sit in a reclining chair, awake the whole time. You’ll hear clicking, so we give you earplugs, and you may feel a light tapping or tingling on your scalp. After a one-time setup visit, each session takes roughly 15 to 37 minutes depending on your program, and you can drive yourself home.",
  },
  {
    q: "How long does a course of treatment take?",
    a: "Typically five sessions a week for about six weeks, or as your provider prescribes. For some people an accelerated schedule is an option: ten short sessions a day for five days. It isn’t right for everyone, and we’ll talk through whether it fits you.",
  },
  {
    q: "Are there side effects or risks?",
    a: "TMS is generally well tolerated. Scalp discomfort and headache can occur, usually in the first sessions. Seizures are rare. Before you start, your clinician will go over the risks with you and check whether treatment is suitable for you.",
  },
  {
    q: "Will my insurance cover it?",
    a: "Most commercial insurance plans have a policy that covers TMS for major depression, usually after other treatments haven’t helped. Coverage for other conditions and for accelerated schedules is reviewed plan by plan and may be self-pay. We check your plan first, at no cost, and explain any costs before anything is booked.",
  },
  {
    q: "Do I need a diagnosis or a referral to talk to you?",
    a: "No. Your first consultation is free, with no commitment. Tell us what’s been happening and what you’ve tried, and we’ll tell you honestly whether our care could help.",
  },
  {
    q: "What if I can’t have an MRI?",
    a: "We don’t turn you away. If you can’t have an MRI, for example because of braces or certain implants, TMS can be given without navigation where it’s safe for you. Our clinical team will check that first.",
  },
] as const;

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const LOCATIONS = [
  {
    city: "Valencia",
    region: "Santa Clarita Valley",
    lines: ["28212 Kelly Johnson Pkwy, Suite 215", "Valencia, CA 91355"],
    maps: maps("BrainStim Centers 28212 Kelly Johnson Pkwy Suite 215 Valencia CA 91355"),
  },
  {
    city: "Calabasas",
    region: "West Valley",
    lines: ["23500 Park Sorrento, Suite A4", "Calabasas, CA 91302"],
    maps: maps("BrainStim Centers 23500 Park Sorrento Suite A4 Calabasas CA 91302"),
  },
  {
    city: "Van Nuys",
    region: "San Fernando Valley",
    lines: ["6640 Van Nuys Blvd, Suite 207", "Van Nuys, CA 91405"],
    maps: maps("BrainStim Centers 6640 Van Nuys Blvd Suite 207 Van Nuys CA 91405"),
  },
  {
    city: "Lancaster",
    region: "Antelope Valley",
    lines: ["44151 15th St W, Suite 210", "Lancaster, CA 93534"],
    maps: maps("BrainStim Centers 44151 15th St W Suite 210 Lancaster CA 93534"),
  },
  {
    city: "Fremont",
    region: "Bay Area",
    lines: ["39465 Paseo Padre Pkwy, Suite 2000", "Fremont, CA 94538"],
    maps: maps("BrainStim Centers 39465 Paseo Padre Pkwy Suite 2000 Fremont CA 94538"),
  },
] as const;
