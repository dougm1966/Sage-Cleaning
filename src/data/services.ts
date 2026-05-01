export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceInclusion {
  title: string;
  desc: string;
}

export interface ServiceDef {
  slug: string;
  name: string;
  shortName: string;
  schemaType: string;
  serviceType: string;
  metaKeyword: string;
  heroEyebrow: string;
  intro: string;
  cityIntroTemplate: (cityName: string, localContext: string) => string;
  whoFor: string[];
  inclusions: ServiceInclusion[];
  duration: string;
  frequency: string;
  faq: (cityName: string) => ServiceFAQ[];
}

export const services: ServiceDef[] = [
  {
    slug: 'residential-cleaning',
    name: 'Residential Cleaning',
    shortName: 'Residential',
    schemaType: 'HouseCleaning',
    serviceType: 'Residential cleaning service',
    metaKeyword: 'house cleaning',
    heroEyebrow: 'Service 01',
    intro:
      "Recurring whole-home cleaning that gives you back your weekends. Weekly, bi-weekly, or monthly — same trusted cleaner whenever possible, same 47-point checklist every visit.",
    cityIntroTemplate: (city, ctx) =>
      `For ${city} families, SAGE Cleaning's residential service means coming home to a fresh, sanitized house without lifting a finger. ${ctx} Our recurring cleans are built around the dust, mud, and seasonal grit that come with living in this part of Wyoming — not the polished suburbs the franchise chains were designed for.`,
    whoFor: [
      'Busy families and dual-income households',
      'Working professionals and remote workers',
      'Seniors and aging-in-place homeowners',
      'Anyone who values their weekends',
    ],
    inclusions: [
      { title: 'All living areas', desc: 'Dusting, vacuuming, mopping, surface wipe-downs.' },
      { title: 'Kitchen', desc: 'Counters, sink, stovetop, exterior of appliances, floors.' },
      { title: 'Bathrooms', desc: 'Toilets, tubs, showers, mirrors, vanities, floors — sanitized.' },
      { title: 'Bedrooms', desc: 'Dusting, vacuuming, bed-making, surfaces wiped.' },
      { title: 'Trash & recycling', desc: 'Emptied and replaced with fresh liners.' },
      { title: 'Detail work', desc: 'Light fixtures, baseboards, door frames on rotation.' },
    ],
    duration: '2–3 hours for a standard 3-bedroom home',
    frequency: 'Weekly, bi-weekly, or monthly',
    faq: (city) => [
      {
        q: `How much does residential cleaning cost in ${city}?`,
        a: `Pricing for residential cleaning in ${city} depends on your home's square footage, number of bathrooms, and frequency. Recurring service is priced lower per visit than one-time cleans. Call 307-254-5338 for a free, no-obligation quote — usually delivered the same day.`,
      },
      {
        q: 'Do I need to be home during the cleaning?',
        a: `No — most ${city} clients give us a key, code, or garage opener and head to work. Every cleaner on our team is background-checked and insured, and we treat your home with the same care you would.`,
      },
      {
        q: 'Will I get the same cleaner every time?',
        a: 'Whenever possible, yes. Continuity matters — when the same person cleans your home each visit, they learn your preferences and your home gets a better clean over time.',
      },
      {
        q: 'What products do you use?',
        a: 'SAGE supplies all standard cleaning products and equipment. We default to effective, safe products and can switch to fragrance-free, pet-safe, or eco-friendly options on request at no extra cost.',
      },
      {
        q: 'Can I skip a week if I\'m traveling?',
        a: 'Absolutely. We just ask for 24-hour notice. There\'s no long-term contract — recurring cleaning is a service, not a commitment trap.',
      },
    ],
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    shortName: 'Commercial',
    schemaType: 'Service',
    serviceType: 'Commercial cleaning service',
    metaKeyword: 'commercial cleaning',
    heroEyebrow: 'Service 02',
    intro:
      "Office, retail, and small-business cleaning scheduled around your hours, not ours. Reliable crews, consistent quality, and an invoice you can actually read.",
    cityIntroTemplate: (city, ctx) =>
      `${city} businesses count on SAGE Cleaning to keep their workspaces presentable, sanitized, and ready for customers, clients, and staff. ${ctx} We schedule around your business hours — early morning, evening, or weekends — so cleaning never gets in the way of business.`,
    whoFor: [
      'Offices and professional services',
      'Retail shops and storefronts',
      'Medical and dental practices',
      'Salons, gyms, and studios',
      'Property managers and HOAs',
    ],
    inclusions: [
      { title: 'Reception & lobby', desc: 'High-traffic surface sanitization, glass, floors.' },
      { title: 'Workstations', desc: 'Desks dusted, trash emptied, common surfaces wiped.' },
      { title: 'Restrooms', desc: 'Fully sanitized — fixtures, floors, mirrors, restocked.' },
      { title: 'Kitchen / break room', desc: 'Counters, sink, appliance exteriors, floors, trash.' },
      { title: 'Floors', desc: 'Vacuum carpets, mop hard surfaces, spot-treat as needed.' },
      { title: 'Touch-points', desc: 'Door handles, light switches, shared electronics.' },
    ],
    duration: 'Tailored to facility size — typically 1.5–4 hours per visit',
    frequency: 'Daily, weekly, or bi-weekly',
    faq: (city) => [
      {
        q: `Do you clean offices in ${city} after hours?`,
        a: `Yes — most ${city} business clients prefer evening or early-morning cleaning so the workday is uninterrupted. We coordinate keys, codes, and alarm protocols on day one.`,
      },
      {
        q: 'Are you insured for commercial work?',
        a: 'Yes. SAGE Cleaning carries general liability insurance, and every team member is background-checked. Certificates of insurance are available on request for property management or landlord requirements.',
      },
      {
        q: 'Do you clean medical or dental offices?',
        a: 'We clean medical and dental practices with attention to high-touch sanitization. Note that we are a general commercial cleaning service — for terminal cleaning of operatories or clinical areas, we coordinate with your protocols.',
      },
      {
        q: 'Can you handle specialty floor care?',
        a: 'Standard vacuuming, mopping, and spot-treating are included. For VCT stripping/waxing, deep carpet extraction, or wood-floor refinishing, ask for a separate quote.',
      },
      {
        q: 'How are commercial cleans priced?',
        a: 'Commercial pricing is based on square footage, frequency, and scope. Most clients land on a flat per-visit or monthly rate after a walkthrough. No hidden fees, no surprise charges.',
      },
    ],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Clean',
    schemaType: 'Service',
    serviceType: 'Deep cleaning service',
    metaKeyword: 'deep cleaning',
    heroEyebrow: 'Service 03',
    intro:
      "Top-to-bottom detailed cleaning that gets the spots a standard clean skips — baseboards, inside appliances, light fixtures, vents, and the corners that have been bothering you for months.",
    cityIntroTemplate: (city, ctx) =>
      `Deep cleaning in ${city} is what we recommend before holidays, after long projects, when starting recurring service, or any time your home just needs a reset. ${ctx} A SAGE deep clean takes the time a standard visit doesn't have to address the build-up most people never get to.`,
    whoFor: [
      'First-time SAGE clients before recurring service starts',
      'Pre-holiday and pre-event hosts',
      'Post-renovation or post-construction homes',
      'Homes that have been vacant or untouched for a while',
    ],
    inclusions: [
      { title: 'Everything in a standard clean, plus:', desc: 'Full attention to every detail.' },
      { title: 'Baseboards & door frames', desc: 'Hand-wiped throughout the home.' },
      { title: 'Inside appliances', desc: 'Oven interior, microwave, fridge — on request.' },
      { title: 'Cabinet fronts', desc: 'Kitchen and bath cabinet faces fully cleaned.' },
      { title: 'Light fixtures & ceiling fans', desc: 'Dust removed, glass cleaned where reachable.' },
      { title: 'Vents & registers', desc: 'Surface dust removed from accessible vents.' },
      { title: 'Window sills & tracks', desc: 'Interior sills, frames, and tracks detailed.' },
      { title: 'Behind & under furniture', desc: 'Where access allows.' },
    ],
    duration: '4–8 hours depending on home size and condition',
    frequency: 'One-time or quarterly',
    faq: (city) => [
      {
        q: `What's the difference between a standard and deep clean in ${city}?`,
        a: `A standard clean keeps an already-maintained ${city} home fresh — surface cleaning, sanitization, vacuuming, mopping. A deep clean addresses build-up: baseboards, inside appliances, fixtures, vents, and detail areas standard cleans rotate through over weeks. Most clients start with a deep clean, then maintain with standard recurring visits.`,
      },
      {
        q: 'How long does a deep clean take?',
        a: 'A typical 3-bedroom home takes 4–6 hours; larger or more lived-in homes can run 6–8+. We give you an honest estimate after a quick walkthrough or photos.',
      },
      {
        q: 'Do you do oven and refrigerator interiors?',
        a: 'Yes — both are available as deep-clean add-ons. Just let us know in advance so we can budget the time and pull the fridge if needed.',
      },
      {
        q: 'Will my home need another deep clean later?',
        a: 'Most homes only need one deep clean per year — sometimes seasonally. With recurring standard service in between, the build-up stays under control.',
      },
      {
        q: 'How much does a deep clean cost?',
        a: 'Deep cleans are priced by home size, condition, and any add-ons (oven, fridge, etc.). Call 307-254-5338 for a free quote based on your specific home.',
      },
    ],
  },
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    shortName: 'Move-In/Out',
    schemaType: 'Service',
    serviceType: 'Move-in/move-out cleaning',
    metaKeyword: 'move out cleaning',
    heroEyebrow: 'Service 04',
    intro:
      "Spotless transitions for buyers, sellers, landlords, and renters. Every cabinet, drawer, appliance, and corner — emptied and cleaned to a walkthrough-ready standard.",
    cityIntroTemplate: (city, ctx) =>
      `Whether you're handing keys back to a landlord in ${city}, prepping a home for buyers, or making a fresh start after closing, SAGE Cleaning's move-in/move-out service is built to satisfy walkthroughs and protect deposits. ${ctx} We work to a checklist designed for empty homes — every drawer, every appliance, every corner.`,
    whoFor: [
      'Renters protecting their security deposit',
      'Landlords and property managers turning units',
      'Home sellers prepping for listing photos and closing',
      'Buyers who want a clean slate before moving in',
      'Real estate agents coordinating closings',
    ],
    inclusions: [
      { title: 'Every cabinet & drawer', desc: 'Inside and out — kitchen, bath, vanity, closets.' },
      { title: 'All appliances', desc: 'Inside and out — oven, fridge, microwave, dishwasher.' },
      { title: 'Bathrooms — full deep', desc: 'Toilets, tubs, showers, grout treated as needed.' },
      { title: 'Floors — every inch', desc: 'Vacuumed, mopped, edges and corners detailed.' },
      { title: 'Walls & switch plates', desc: 'Spot-cleaned where dirty; switch plates wiped.' },
      { title: 'Windows & sills', desc: 'Interior glass, sills, and tracks cleaned.' },
      { title: 'Light fixtures & fans', desc: 'Dust removed, bulbs and globes cleaned.' },
      { title: 'Baseboards & door frames', desc: 'Hand-wiped throughout.' },
    ],
    duration: '4–10 hours depending on home size and condition',
    frequency: 'One-time',
    faq: (city) => [
      {
        q: `Will your move-out clean satisfy my ${city} landlord's walkthrough?`,
        a: `Our move-out checklist is designed to meet typical lease walk-through standards in ${city} and across the Big Horn Basin. If a landlord flags something within 24 hours, we'll come back and address it — that's our guarantee.`,
      },
      {
        q: 'Should the home be empty before you arrive?',
        a: 'Yes — move-out cleans assume the home is fully empty so we can clean every surface. If you need help with a partially-occupied space, we can quote a deep clean instead.',
      },
      {
        q: 'Do you clean inside the oven, fridge, and dishwasher?',
        a: 'Yes — all three are included in a move-in/move-out clean as standard, not an add-on.',
      },
      {
        q: 'How fast can you book a move-out clean?',
        a: 'For move-out work in the Big Horn Basin we usually schedule within 2–5 days. For closings on a tight deadline, call us — we book emergency turnarounds when our schedule allows.',
      },
      {
        q: 'How much is a move-out clean?',
        a: 'Move-out cleans are priced by square footage and condition. Empty homes that are already lightly clean cost less than heavily lived-in homes. Free quote: 307-254-5338.',
      },
    ],
  },
  {
    slug: 'vacation-rental-cleaning',
    name: 'Vacation Rental & Airbnb Cleaning',
    shortName: 'Vacation Rental',
    schemaType: 'Service',
    serviceType: 'Vacation rental turnover cleaning',
    metaKeyword: 'Airbnb cleaning',
    heroEyebrow: 'Service 05',
    intro:
      "Reliable turnover cleaning for short-term rental hosts. Tight check-in windows, restocked supplies, and the consistent, photo-ready finish that keeps reviews five-star.",
    cityIntroTemplate: (city, ctx) =>
      `Hosts running vacation rentals in ${city} need a cleaning team that understands the difference between a residence and a revenue-generating property. ${ctx} SAGE handles same-day turnovers, restock checks, and the polish that makes guests rebook — coordinated through whatever messaging system works best for you.`,
    whoFor: [
      'Airbnb and VRBO hosts',
      'Short-term rental property managers',
      'Cabin and lodge owners',
      'Mid-term rental operators',
    ],
    inclusions: [
      { title: 'Full turnover clean', desc: 'Every room — kitchen, bath, bedrooms, living areas.' },
      { title: 'Linen swap', desc: 'Strip beds, fresh sheets, towels — laundry coordinated.' },
      { title: 'Restock check', desc: 'Toiletries, paper goods, coffee, soaps inventoried.' },
      { title: 'Damage & issue reporting', desc: 'Photos of damage, missing items, maintenance needs.' },
      { title: 'Trash & recycling out', desc: 'Per local pickup schedule.' },
      { title: 'Staging touches', desc: 'Photo-ready finishes — fresh towel folds, made beds.' },
      { title: 'Guest-window scheduling', desc: 'Same-day check-out / check-in coordination.' },
    ],
    duration: '2–5 hours per turnover depending on property',
    frequency: 'Per-booking, on-demand',
    faq: (city) => [
      {
        q: `Can you handle same-day Airbnb turnovers in ${city}?`,
        a: `Yes — same-day turnovers are our standard for ${city} hosts. We coordinate with your check-out and check-in times, especially during peak Yellowstone and Bighorn Canyon seasons.`,
      },
      {
        q: 'Do you provide linens and toiletries?',
        a: 'We don\'t supply linens or consumables — but we manage your inventory: laundering provided linens, restocking from your supply closet, and flagging when items run low so reorders never get missed.',
      },
      {
        q: 'How are turnover cleans priced?',
        a: 'Vacation rental cleans are typically a flat per-turnover rate based on bedrooms, square footage, and amenities. Linen handling, restocks, and laundry are factored in. Free quote: 307-254-5338.',
      },
      {
        q: 'Do you report damage and missing items?',
        a: 'Yes — every turnover includes a quick walkthrough where we flag damage, missing items, broken fixtures, or low supplies. Photos go to you immediately so you can recover from guests when needed.',
      },
      {
        q: 'Can SAGE be my designated cleaner on Airbnb?',
        a: 'Absolutely. Many hosts add us as a co-host or designated cleaner so we sync directly with the booking calendar — no manual scheduling required.',
      },
    ],
  },
];

export const servicesBySlug: Record<string, ServiceDef> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);
