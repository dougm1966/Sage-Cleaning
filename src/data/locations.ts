export interface FAQ {
  q: string;
  a: string;
}

export interface Location {
  slug: string;
  name: string;
  state: 'Wyoming';
  stateAbbr: 'WY';
  county: string;
  lat: number;
  lng: number;
  population?: string;
  tagline: string;
  heroDesc: string;
  localContext: string;
  neighbors: string[];
  faq: FAQ[];
}

export const locations: Location[] = [
  {
    slug: 'powell',
    name: 'Powell',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Park County',
    lat: 44.7541,
    lng: -108.7590,
    population: '6,400+',
    tagline: 'A close-knit ag community on the Shoshone',
    heroDesc:
      "Powell families and businesses turn to SAGE Cleaning for honest, dependable work — whether it's a weekly tidy on a quiet residential street, a deep clean on a working farmhouse off Lane 9, or a turnover for a Northwest College rental. We know Powell because we live it.",
    localContext:
      "Powell is the heart of Park County agriculture — sugar beets, malt barley, and Northwest College. Homes here range from historic downtown bungalows to ranch houses surrounded by irrigated fields. Our crews are equipped to handle the mud, dust, and seasonal grit that come with a real Wyoming ag town.",
    neighbors: ['cody', 'ralston', 'garland'],
    faq: [
      {
        q: 'Do you service homes outside Powell city limits?',
        a: 'Yes — we regularly clean homes throughout the Powell area, including out toward Ralston, Garland, and Heart Mountain. Just give us a call at 307-254-5338 to confirm your address.',
      },
      {
        q: 'Can you clean rentals near Northwest College?',
        a: 'Absolutely. We handle move-in/move-out cleans for student rentals, faculty homes, and short-term housing throughout Powell, including end-of-semester turnovers.',
      },
      {
        q: 'How quickly can you schedule a deep clean in Powell?',
        a: 'We typically book deep cleans within 3–5 days for Powell residents. For urgent needs (move-outs, post-construction, listings), call us — we often have same-week availability.',
      },
      {
        q: 'Do you provide commercial cleaning for Powell businesses?',
        a: 'Yes. We clean offices, medical practices, retail spaces, and shops along Bent Street and the Powell business district on weekly, bi-weekly, or monthly schedules.',
      },
    ],
  },
  {
    slug: 'cody',
    name: 'Cody',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Park County',
    lat: 44.5263,
    lng: -109.0565,
    population: '10,000+',
    tagline: 'Gateway to Yellowstone',
    heroDesc:
      "Cody homeowners, vacation rental hosts, and businesses count on SAGE Cleaning for the spotless turnovers that keep guests rebooking and the consistent residential service that frees up your weekends. As Yellowstone's eastern gateway, Cody demands cleaning standards that match its visitor traffic — and we deliver.",
    localContext:
      "Cody's economy runs on tourism, hospitality, and the Yellowstone gateway traffic. From historic Sheridan Avenue B&Bs to modern vacation rentals up on the Cody bench, the town has a high volume of short-term lodging that needs flawless turnovers between guests. We also serve year-round residents in neighborhoods like Sunset, the Beck Lake area, and out toward the South Fork.",
    neighbors: ['powell', 'meeteetse', 'ralston'],
    faq: [
      {
        q: 'Do you clean Airbnbs and vacation rentals in Cody?',
        a: 'Vacation rental turnover is one of our largest service areas in Cody. We coordinate with hosts on tight check-in windows, restock linens, and follow detailed checklists tailored to short-term stays.',
      },
      {
        q: 'How fast can you do a turnover between guests?',
        a: 'Standard same-day turnovers in Cody take 2–4 hours depending on property size. We work with hosts on schedules during peak Yellowstone season (May–September) when back-to-back bookings are common.',
      },
      {
        q: 'Do you serve homes on the South Fork or Wapiti?',
        a: 'We service the Cody area including the South Fork corridor and out toward Wapiti. Distance-based travel may apply for properties further out — call 307-254-5338 to confirm.',
      },
      {
        q: 'Can you clean commercial spaces in downtown Cody?',
        a: 'Yes. We service offices, retail shops, and small businesses throughout downtown Cody and the Big Horn Avenue commercial corridor.',
      },
    ],
  },
  {
    slug: 'greybull',
    name: 'Greybull',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.4891,
    lng: -108.0553,
    population: '1,800+',
    tagline: 'Where the Big Horns meet the basin',
    heroDesc:
      "Greybull residents trust SAGE Cleaning to keep their homes show-ready without the back-and-forth of national chains. From historic homes off Greybull Avenue to ranch properties along the Big Horn River, we treat every clean like it's our own home.",
    localContext:
      "Greybull is a working town at the confluence of the Greybull and Big Horn rivers, with deep roots in agriculture, oil, and aviation history. The community is tight, and word travels fast — which is exactly why our reputation for honest, thorough work matters here.",
    neighbors: ['basin', 'lovell', 'cody'],
    faq: [
      {
        q: 'How often do you service homes in Greybull?',
        a: 'We offer weekly, bi-weekly, and monthly recurring cleaning in Greybull, plus one-time deep cleans and move-in/move-out services. Most Greybull clients are on bi-weekly schedules.',
      },
      {
        q: 'Do you clean homes outside Greybull city limits?',
        a: 'Yes — we serve properties throughout the Greybull area, including rural homes along Highway 14 and out toward Shell. Just confirm your location when you call.',
      },
      {
        q: 'Can SAGE handle post-construction or remodel cleanups?',
        a: 'We do. Greybull homeowners often call us after kitchen, bath, or full-home remodels to handle the fine dust, debris, and detail work general contractors leave behind.',
      },
      {
        q: 'Are your cleaners insured and background-checked?',
        a: 'Every cleaner on the SAGE team is fully insured and background-checked before they ever set foot in a Greybull home — non-negotiable for us.',
      },
    ],
  },
  {
    slug: 'basin',
    name: 'Basin',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.3791,
    lng: -108.0358,
    population: '1,200+',
    tagline: 'County seat of Big Horn County',
    heroDesc:
      "As the Big Horn County seat, Basin is home to families, ranchers, and the courthouse community that keeps the basin running. SAGE Cleaning serves Basin with the consistent, no-nonsense cleaning service this town respects.",
    localContext:
      "Basin sits at the geographic heart of Big Horn County and serves as its county seat. The town has a quiet residential character with a tight community of long-time families, courthouse staff, and ag professionals. Cleanings here often happen on a recurring rhythm — exactly what we're built for.",
    neighbors: ['greybull', 'lovell', 'cowley'],
    faq: [
      {
        q: 'Do you offer recurring cleaning service in Basin?',
        a: 'Yes — recurring weekly, bi-weekly, or monthly service is our most popular option in Basin. We send the same trusted cleaner each visit whenever possible.',
      },
      {
        q: 'Can you handle ranch homes outside Basin?',
        a: 'We regularly clean ranch homes and rural properties around Basin, including out toward Manderson and Hyattville. Travel is included in your quote.',
      },
      {
        q: 'Do you provide cleaning for Basin businesses or the courthouse area?',
        a: 'We service offices, professional buildings, and retail spaces throughout Basin on commercial schedules tailored to your business hours.',
      },
      {
        q: 'What\'s included in a standard cleaning?',
        a: 'Every standard clean follows our 47-point checklist — dusting, vacuuming, mopping, kitchen and bath sanitization, surface wipe-downs, and trash removal. Deep cleans add baseboards, inside appliances, and detail work.',
      },
    ],
  },
  {
    slug: 'meeteetse',
    name: 'Meeteetse',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Park County',
    lat: 44.1594,
    lng: -108.8685,
    population: '300+',
    tagline: 'Old-West Wyoming, still authentic',
    heroDesc:
      "Meeteetse is one of Wyoming's most authentic small towns, and the homes and lodgings here deserve cleaning that respects the place. SAGE Cleaning serves Meeteetse residents, ranchers, and short-term rental owners with quiet, careful work.",
    localContext:
      "Meeteetse — Wyoming's oldest town in Park County — has a unique mix of historic homes, working ranches, hunting lodges, and a small but growing vacation rental market drawing visitors to the Absarokas. Our crews understand the slower pace and the local expectation of doing things right the first time.",
    neighbors: ['cody', 'powell'],
    faq: [
      {
        q: 'Will you travel to Meeteetse for cleaning?',
        a: 'Yes — Meeteetse is part of our regular service area. We do recommend booking ahead so we can route efficiently with other Park County stops.',
      },
      {
        q: 'Can you clean hunting lodges or guest cabins?',
        a: 'We clean lodges, guest cabins, and seasonal properties around Meeteetse, including end-of-season deep cleans and pre-season prep before guests arrive.',
      },
      {
        q: 'Do you offer one-time cleans?',
        a: 'Yes. Many Meeteetse clients book us for one-time deep cleans, move-outs, or pre-event cleanings — no contract or recurring commitment required.',
      },
      {
        q: 'Are your products safe for older or historic homes?',
        a: 'We use safe, non-abrasive products as standard. For historic finishes, hardwoods, or special surfaces, just let us know in advance and we\'ll adjust.',
      },
    ],
  },
  {
    slug: 'lovell',
    name: 'Lovell',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.8338,
    lng: -108.3940,
    population: '2,300+',
    tagline: 'Gateway to Bighorn Canyon',
    heroDesc:
      "Lovell residents and Bighorn Canyon-area vacation rental owners count on SAGE Cleaning for reliable, thorough service. Whether you're keeping a family home in town or turning over a rental for canyon visitors, we make sure it's done right.",
    localContext:
      "Lovell sits at the gateway to Bighorn Canyon National Recreation Area, drawing visitors year-round for boating, fishing, and the wild-horse range. The town has a strong residential core, growing short-term rental activity, and a working ag economy. We handle all of it.",
    neighbors: ['cowley', 'byron', 'greybull'],
    faq: [
      {
        q: 'Do you clean Bighorn Canyon-area vacation rentals?',
        a: 'Yes. Vacation rental turnovers near Bighorn Canyon are a steady part of our Lovell service. We coordinate with hosts on summer-season check-in windows and seasonal deep cleans.',
      },
      {
        q: 'Will you service homes in Cowley, Byron, or Deaver from Lovell?',
        a: 'Absolutely — those communities are part of our regular Big Horn County route. We treat the whole north-county area as one service zone.',
      },
      {
        q: 'How do I get a quote for my Lovell home?',
        a: 'Call 307-254-5338 or fill out our contact form. We\'ll ask about square footage, frequency, and any specific needs, and give you an honest quote — usually same day.',
      },
      {
        q: 'Do you offer move-out cleaning in Lovell?',
        a: 'Yes — move-in and move-out cleans are one of our most-requested services in Lovell. We follow a deep-clean checklist designed to satisfy landlord and buyer walkthroughs.',
      },
    ],
  },
  {
    slug: 'cowley',
    name: 'Cowley',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.8716,
    lng: -108.4554,
    population: '600+',
    tagline: 'A quiet Big Horn County community',
    heroDesc:
      "Cowley is the kind of close-knit community where reputation is everything — and SAGE Cleaning has built ours on showing up, doing thorough work, and standing behind every clean. We serve Cowley families with the same care we'd give our own homes.",
    localContext:
      "Cowley is a small, residential-focused community in north Big Horn County with deep ag and family roots. We service Cowley as part of our north-county route, alongside Lovell, Byron, and Deaver — making recurring schedules easy to coordinate.",
    neighbors: ['lovell', 'byron', 'deaver'],
    faq: [
      {
        q: 'Do you regularly come to Cowley?',
        a: 'Yes — Cowley is part of our weekly Big Horn County service route, alongside Lovell and Byron. Recurring cleaning here is straightforward to schedule.',
      },
      {
        q: 'Can you clean larger family homes in Cowley?',
        a: 'We clean homes of every size in Cowley, from compact starter homes to larger family properties. Quotes are based on square footage and scope, not flat rates that ignore your actual home.',
      },
      {
        q: 'What\'s your cancellation policy?',
        a: 'We ask for 24-hour notice for cancellations or reschedules. Life happens — we\'re flexible, and there\'s no long-term contract holding you in.',
      },
      {
        q: 'Are you a local Wyoming business?',
        a: 'Yes. SAGE Cleaning is locally owned and operated in the Big Horn Basin. We\'re your neighbors, not a franchise.',
      },
    ],
  },
  {
    slug: 'byron',
    name: 'Byron',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.8313,
    lng: -108.5380,
    population: '600+',
    tagline: 'Small-town Big Horn County living',
    heroDesc:
      "Byron homeowners trust SAGE Cleaning for the same reason their neighbors do — we show up, we do real work, and we treat your home with respect. Recurring service in Byron fits naturally into our north-county route.",
    localContext:
      "Byron is a small residential community between Lovell and Cowley, with a relaxed pace and tight-knit feel. Homes here are mostly single-family residences, and many Byron clients book us bi-weekly to keep on top of dust and seasonal mud without spending their weekends cleaning.",
    neighbors: ['cowley', 'lovell', 'deaver'],
    faq: [
      {
        q: 'Do you serve Byron on a regular schedule?',
        a: 'Yes — Byron is part of our regular north Big Horn County service area, with weekly, bi-weekly, and monthly options available.',
      },
      {
        q: 'How much does cleaning service in Byron cost?',
        a: 'Pricing depends on your home\'s size, condition, and the type of service. Standard recurring cleans in Byron typically range based on square footage — call 307-254-5338 for a free quote.',
      },
      {
        q: 'Can I get the same cleaner each visit?',
        a: 'Whenever possible, yes. Continuity matters — we know it builds trust and gets you a better clean over time.',
      },
      {
        q: 'Do you bring your own supplies?',
        a: 'Yes. SAGE supplies all cleaning products and equipment as standard. If you have specific products you prefer for your home, let us know and we\'ll use them.',
      },
    ],
  },
  {
    slug: 'deaver',
    name: 'Deaver',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.8866,
    lng: -108.6049,
    population: '180+',
    tagline: 'A tight-knit north-basin community',
    heroDesc:
      "Deaver may be small, but the homes here matter just as much as anywhere else. SAGE Cleaning serves Deaver families with thorough, dependable work — included in our regular north Big Horn County route.",
    localContext:
      "Deaver is a tiny community in north Big Horn County, near the Montana line. Despite its size, Deaver families have the same expectations as anyone else: clean, on-time, no-surprises service. We service Deaver alongside Cowley, Byron, and Frannie.",
    neighbors: ['frannie', 'cowley', 'byron'],
    faq: [
      {
        q: 'Will you really come out to Deaver?',
        a: 'Yes — Deaver is part of our regular service area. We route through the north-basin towns together, so it\'s easy to fit Deaver into our schedule.',
      },
      {
        q: 'Is there a minimum visit size for Deaver?',
        a: 'We don\'t have a minimum square footage. We do ask Deaver clients to book at least one full standard clean per visit — partial-room work isn\'t a service we offer.',
      },
      {
        q: 'Can SAGE clean older homes carefully?',
        a: 'Many homes in Deaver have history, and we treat them accordingly. Soft cloths, gentle products, and care around fixtures and finishes are standard.',
      },
      {
        q: 'Do you offer one-time cleans for Deaver homes?',
        a: 'Yes — one-time, deep, move-in/move-out, and post-construction cleans are all available in Deaver. No contract required.',
      },
    ],
  },
  {
    slug: 'frannie',
    name: 'Frannie',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Big Horn County',
    lat: 44.9697,
    lng: -108.6204,
    population: '150+',
    tagline: 'On the Wyoming–Montana line',
    heroDesc:
      "Frannie sits right on the Wyoming–Montana border, and we proudly include it in our regular Big Horn County service. SAGE Cleaning brings consistent, careful work to Frannie homes — the way it should be.",
    localContext:
      "Frannie is a small community straddling the Wyoming–Montana state line, with quiet residential streets and surrounding ag land. We service Frannie as part of our north-basin route, alongside Deaver and Cowley.",
    neighbors: ['deaver', 'cowley', 'lovell'],
    faq: [
      {
        q: 'Do you cross into Montana from Frannie?',
        a: 'SAGE Cleaning operates in Wyoming. For Frannie addresses on the Wyoming side, we\'re your team — for properties just over the line, give us a call to discuss.',
      },
      {
        q: 'Can you do recurring service in Frannie?',
        a: 'Yes. Recurring weekly, bi-weekly, or monthly cleans are available in Frannie, scheduled around our north-basin route.',
      },
      {
        q: 'How do I book a first clean?',
        a: 'Call 307-254-5338 or use our contact form. We\'ll set up a quick walkthrough or phone consultation, give you a quote, and get you on the schedule — usually within the same week.',
      },
      {
        q: 'Are you really insured?',
        a: 'Yes — fully insured, with documentation available on request. It\'s one of the first questions every smart homeowner should ask, and we\'re happy to answer it.',
      },
    ],
  },
  {
    slug: 'ralston',
    name: 'Ralston',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Park County',
    lat: 44.7427,
    lng: -108.8741,
    population: '200+',
    tagline: 'Between Cody and Powell',
    heroDesc:
      "Ralston sits right between Cody and Powell, and SAGE Cleaning serves the homes and properties here as part of our regular Park County route. Reliable cleaning, fair pricing, no franchise nonsense.",
    localContext:
      "Ralston is a small unincorporated community along Highway 14A between Cody and Powell. Homes here are a mix of established residences and farm properties on irrigated land. Our route between Cody and Powell makes Ralston an easy stop on regular service days.",
    neighbors: ['powell', 'cody', 'garland'],
    faq: [
      {
        q: 'Do you regularly stop in Ralston?',
        a: 'Yes — Ralston is on our weekly Cody–Powell corridor. Recurring service is straightforward to schedule.',
      },
      {
        q: 'Can SAGE clean farmhouses or ag properties in Ralston?',
        a: 'We service farmhouses and ag-related residences regularly in the Ralston area. Mud rooms, bootroom dust, and seasonal grit are familiar territory.',
      },
      {
        q: 'How long does a standard clean take?',
        a: 'A standard clean for a typical 3-bedroom home runs 2–3 hours. Larger homes, deep cleans, or move-outs take longer — we\'ll give you an honest estimate up front.',
      },
      {
        q: 'Do you charge for travel to Ralston?',
        a: 'Travel is built into your quote, not added on as a surprise fee. Ralston is part of our regular route, so there\'s no premium.',
      },
    ],
  },
  {
    slug: 'garland',
    name: 'Garland',
    state: 'Wyoming',
    stateAbbr: 'WY',
    county: 'Park County',
    lat: 44.7988,
    lng: -108.5616,
    population: '100+',
    tagline: 'Quiet Park County living',
    heroDesc:
      "Garland is a small Park County community where folks know their neighbors — and they know who to call for honest cleaning service. SAGE Cleaning serves Garland as part of our regular Park County route.",
    localContext:
      "Garland is a small, mostly residential community east of Powell in Park County. The pace is quiet, the homes are spread out, and the standards are high. We treat Garland like any other community — same checklist, same care, same people.",
    neighbors: ['powell', 'ralston', 'frannie'],
    faq: [
      {
        q: 'Will you service Garland?',
        a: 'Yes — Garland is part of our standard Park County service area, alongside Powell and Ralston. Recurring schedules are easy to set up.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'For Garland, we recommend booking your first clean about a week ahead. Recurring slots are then locked into our schedule — same day, same time, every visit.',
      },
      {
        q: 'Can you handle a one-time deep clean before guests arrive?',
        a: 'Absolutely. Pre-holiday and pre-guest deep cleans are popular requests in Garland. We\'ll fit you in and make sure everything is ready when your visitors walk through the door.',
      },
      {
        q: 'Do you guarantee your work?',
        a: 'Yes. If something isn\'t right, we come back and fix it at no extra charge — every clean, every time.',
      },
    ],
  },
];

export const locationsBySlug: Record<string, Location> = Object.fromEntries(
  locations.map((loc) => [loc.slug, loc])
);
