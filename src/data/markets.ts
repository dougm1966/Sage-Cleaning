export interface MarketFAQ {
  q: string;
  a: string;
}

export interface MarketBenefit {
  title: string;
  desc: string;
}

export interface MarketServiceLink {
  serviceSlug: string;
  desc: string;
}

export interface Market {
  slug: string;
  name: string;
  audience: string;
  icon: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  tagline: string;
  shortDesc: string;
  cardCta: string;
  problem: string;
  solution: string;
  benefits: MarketBenefit[];
  serviceLinks: MarketServiceLink[];
  serviceList: string[];
  testimonial?: { quote: string; author: string; role: string };
  faq: MarketFAQ[];
}

export const markets: Market[] = [
  {
    slug: 'homeowners-families',
    name: 'Homeowners & Families',
    audience: 'homeowners and busy families',
    icon: '\u{1F468}‍\u{1F469}‍\u{1F467}‍\u{1F466}',
    primaryKeyword: 'house cleaning for families',
    metaTitle: 'House Cleaning for Families in Big Horn Basin, WY | SAGE Cleaning',
    metaDescription:
      'Trusted weekly, bi-weekly, and monthly house cleaning for Big Horn Basin families. Reliable cleaners, consistent crews, free quote. Call 307-254-5338.',
    heroEyebrow: 'For Homeowners & Families',
    heroTitle: 'House Cleaning for Busy Families',
    heroSubtitle: 'Your time is for family — not chores. Reliable home cleaning across the Big Horn Basin.',
    tagline: 'Your time is for family — not chores.',
    shortDesc:
      'Weekly, bi-weekly, and monthly residential cleaning for households who would rather spend their weekend living than scrubbing.',
    cardCta: 'Get My Weekends Back',
    problem:
      "Between school pickups, work, sports, dinners, and trying to have a social life, the house gets the leftover hours. The dust never quits in this part of Wyoming — wind, gravel, the dog, the kids — and the to-do list just keeps growing. Most weeks, deep cleaning loses to a movie night, and you tell yourself you'll catch up Saturday. You don't.",
    solution:
      "SAGE Cleaning gives Big Horn Basin families their weekends back. We show up on a schedule that works for you, with the same trusted cleaner whenever possible, and we follow a consistent 47-point checklist on every visit. Your home gets cleaned the way you want it cleaned — without you having to manage it. Walk in Friday afternoon to a fresh home, then go enjoy your life.",
    benefits: [
      {
        title: 'Same cleaner, every visit',
        desc: 'Whenever possible, you get the same vetted, insured pro — so they learn your home, your preferences, your dog\'s name.',
      },
      {
        title: 'Consistent checklist',
        desc: 'Every recurring clean follows the same room-by-room standard. No “wait, did they do the baseboards this time?”',
      },
      {
        title: 'Flexible scheduling',
        desc: 'Weekly, bi-weekly, or monthly — scheduled around school drop-offs, work hours, and the way your week actually runs.',
      },
      {
        title: 'No long-term contracts',
        desc: 'Pause, skip, or cancel anytime. We earn the next visit by doing right by you on this one.',
      },
    ],
    serviceLinks: [
      {
        serviceSlug: 'residential-cleaning',
        desc: 'Recurring whole-home cleaning on the schedule that fits your family’s rhythm.',
      },
      {
        serviceSlug: 'deep-cleaning',
        desc: 'Top-to-bottom seasonal reset for spring, the holidays, or before company arrives.',
      },
      {
        serviceSlug: 'move-in-move-out-cleaning',
        desc: 'Move-in or move-out cleans when your family is changing houses.',
      },
    ],
    serviceList: ['Weekly & bi-weekly residential cleaning', 'Monthly deep cleans', 'Seasonal refreshes', 'Pre- and post-event cleans'],
    testimonial: {
      quote:
        'I used to spend every Saturday morning cleaning instead of with my kids. SAGE shows up Thursday like clockwork and our weekend is finally ours.',
      author: 'Jenna H.',
      role: 'Powell, WY — bi-weekly residential client',
    },
    faq: [
      {
        q: 'How much does house cleaning cost for a family home?',
        a: 'Pricing depends on square footage, number of bathrooms, and how often we come. Recurring weekly or bi-weekly service is priced lower per visit than a one-time clean. Most Big Horn Basin family homes fall in a predictable range — call 307-254-5338 for a free, same-day quote with no obligation.',
      },
      {
        q: 'Can I request the same cleaner every visit?',
        a: 'Yes — we make every effort to send the same trusted cleaner to your home on each recurring visit. Consistency is one of the biggest reasons families pick us. If your regular cleaner is sick or on vacation, we send a vetted backup who follows the same checklist for your home.',
      },
      {
        q: 'Do I need to be home when you clean?',
        a: 'Most of our recurring family clients are not home during cleans. We’re fully insured and bonded, and we’ll work with you on key access — lockbox, garage code, or a hidden key — whatever you’re comfortable with.',
      },
      {
        q: 'What if my kids or pets are home?',
        a: 'No problem at all — we clean around kids and pets every day. Just let us know about any pets, allergies, or rooms to skip when we set up your service.',
      },
      {
        q: 'Are your cleaning products safe for kids and pets?',
        a: 'Yes. We use family- and pet-safe products by default, and we’re happy to use specific products you prefer or to go fragrance-free on request.',
      },
      {
        q: 'How do I get started?',
        a: 'Call 307-254-5338 or use the quote form. We’ll do a quick walkthrough — in person or by phone — ask about the rooms, frequency, and any special requests, and give you a flat per-visit price. Most families are on the schedule within the week.',
      },
    ],
  },
  {
    slug: 'airbnb-vacation-rentals',
    name: 'Airbnb & Vacation Rental Hosts',
    audience: 'Airbnb hosts and vacation rental owners',
    icon: '\u{1F3E1}',
    primaryKeyword: 'Airbnb cleaning service Big Horn Basin',
    metaTitle: 'Airbnb & Vacation Rental Cleaning in Big Horn Basin, WY | SAGE',
    metaDescription:
      'Same-day Airbnb and vacation rental turnover cleaning in Cody, Powell & the Big Horn Basin. Linen service, photo reports, 5-star ready. Call 307-254-5338.',
    heroEyebrow: 'For Airbnb & VRBO Hosts',
    heroTitle: 'Airbnb & Vacation Rental Turnover Cleaning',
    heroSubtitle: 'Five-star reviews start with a five-star clean. Same-day turnovers across the Big Horn Basin.',
    tagline: 'Five-star reviews start with a five-star clean.',
    shortDesc:
      'Same-day Airbnb and VRBO turnovers, linen handling, and photo-documented walkthroughs for short-term rental hosts.',
    cardCta: 'Book My Turnover Crew',
    problem:
      "Your listing photos look great. The reviews are how you stay booked. One bad turnover — a missed hair in the shower, a dirty coffee pot, beds left half-made — and a guest writes the review that costs you the next ten bookings. Tight check-out / check-in windows during Yellowstone season leave zero margin for error, and a no-show cleaner means you’re scrubbing toilets in jeans an hour before guests arrive.",
    solution:
      "SAGE Cleaning is the turnover partner Big Horn Basin hosts trust to keep their listings five-star. We hit your check-out / check-in window, follow a short-term-rental checklist built for guest expectations, restock the basics, and send you a photo walkthrough before we leave. You stay rebooked. You stay rated. You stop scrubbing.",
    benefits: [
      {
        title: 'Same-day turnovers',
        desc: 'Tight 11–3 windows are our default. We work fast without cutting corners — the room is guest-ready before the next reservation lands.',
      },
      {
        title: 'Photo report every visit',
        desc: 'You get a photo walkthrough sent to your phone. Damage, low supplies, missing items — flagged before the next guest checks in.',
      },
      {
        title: 'Linen service coordination',
        desc: 'We’ll wash on-site, swap fresh sets, or coordinate with a laundry service — your call.',
      },
      {
        title: 'Designated cleaner on Airbnb',
        desc: 'Many hosts add us as their designated cleaner so we sync to the booking calendar automatically. No more manual scheduling texts.',
      },
    ],
    serviceLinks: [
      {
        serviceSlug: 'vacation-rental-cleaning',
        desc: 'Airbnb, VRBO, and short-term rental turnovers built around your booking calendar.',
      },
      {
        serviceSlug: 'deep-cleaning',
        desc: 'Quarterly or seasonal deep cleans between guest stays to keep the listing photo-ready.',
      },
      {
        serviceSlug: 'move-in-move-out-cleaning',
        desc: 'Property reset when you take over a new STR or transition between long-term and short-term use.',
      },
    ],
    serviceList: [
      'Same-day turnover cleaning',
      'Linen wash, swap & restock',
      'Post-stay photo walkthroughs',
      'Damage & low-supply reporting',
      'Quarterly deep cleans',
    ],
    testimonial: {
      quote:
        'Three Cody listings, peak season, back-to-back bookings. SAGE never misses a window and the photo reports give me peace of mind from out of state.',
      author: 'Marcus T.',
      role: 'Cody, WY — vacation rental host',
    },
    faq: [
      {
        q: 'How much does Airbnb cleaning cost in the Big Horn Basin?',
        a: 'Turnover pricing depends on bedrooms, bathrooms, and whether linens are included. Most Cody and Powell hosts pay a flat per-turn fee that’s easy to pass along to guests as a cleaning fee. Call 307-254-5338 for a same-day quote on your specific property.',
      },
      {
        q: 'How fast can you turn a property between guests?',
        a: 'Standard turnovers take 2–4 hours depending on size. We work the standard 11–3 window and can usually accommodate tighter same-day turns during peak Yellowstone season (May–September). Tell us your check-out / check-in time and we’ll confirm.',
      },
      {
        q: 'Do you handle linens for short-term rentals?',
        a: 'Yes — we’ll wash and dry on-site, swap pre-laundered sets, or coordinate with your laundry service. Many hosts keep two or three sets in rotation and we manage the swap for them.',
      },
      {
        q: 'Will you report damage or missing items?',
        a: 'Every turnover includes a photo walkthrough with damage, missing items, and low supplies flagged. You get the photos before we leave so you can pursue Airbnb resolution or restock before the next check-in.',
      },
      {
        q: 'Can you be my designated cleaner on Airbnb?',
        a: 'Absolutely. Many hosts add us as a co-host or designated cleaner so we sync directly with the booking calendar — no manual scheduling required.',
      },
      {
        q: 'Do you serve Cody, Powell, and surrounding STR markets?',
        a: 'Yes. Cody is our largest vacation rental market, with active turnover service in Powell, Meeteetse, Greybull, Lovell, and surrounding Big Horn Basin towns. See our locations page for the full list.',
      },
    ],
  },
  {
    slug: 'small-businesses',
    name: 'Small Businesses',
    audience: 'small business owners',
    icon: '\u{1F3E2}',
    primaryKeyword: 'commercial cleaning Big Horn Basin',
    metaTitle: 'Office & Small Business Cleaning in Big Horn Basin, WY | SAGE',
    metaDescription:
      'After-hours office, retail, and small business cleaning across the Big Horn Basin. Reliable crews, flexible scheduling, free quote. Call 307-254-5338.',
    heroEyebrow: 'For Small Businesses',
    heroTitle: 'Office & Small Business Cleaning',
    heroSubtitle: 'Your workspace says something about you. Let’s make it count.',
    tagline: 'Your workspace says something about you. Let’s make it count.',
    shortDesc:
      'After-hours office, retail, and storefront cleaning across the Big Horn Basin — on a schedule built around your business, not ours.',
    cardCta: 'Quote My Office Clean',
    problem:
      "Clients notice a clean office. So do employees — and so do the auditors, vendors, and walk-ins who form a first impression before you’ve said a word. But nobody on your team got hired to scrub bathrooms or run a vacuum, and the unreliable solo cleaner who keeps no-showing isn’t solving it. A dirty office quietly costs you trust.",
    solution:
      "SAGE Cleaning handles commercial cleaning for small businesses across the Big Horn Basin — retail shops, professional offices, medical practices, and service businesses. We work after hours so your team walks into a fresh space every morning. We follow a documented checklist, we show up when we said we would, and we communicate when something’s off so you’re never surprised.",
    benefits: [
      {
        title: 'After-hours scheduling',
        desc: 'We clean evenings, early mornings, or weekends so we’re not in the way of clients, patients, or staff.',
      },
      {
        title: 'Documented checklist',
        desc: 'Same checklist every visit, customized to your space — break room, bathrooms, lobby, conference rooms, retail floor.',
      },
      {
        title: 'Show-up reliability',
        desc: 'You hire SAGE the company — not a single solo cleaner whose Tuesday flu becomes your problem.',
      },
      {
        title: 'Insured and bonded',
        desc: 'Full liability and worker’s comp coverage. We’re comfortable working in offices with sensitive equipment, files, or inventory.',
      },
    ],
    serviceLinks: [
      {
        serviceSlug: 'commercial-cleaning',
        desc: 'Recurring office, retail, and small business cleaning on a weekly or bi-weekly cadence.',
      },
      {
        serviceSlug: 'deep-cleaning',
        desc: 'Quarterly or annual deep clean for carpets, baseboards, vents, and the spots that get missed in regular service.',
      },
    ],
    serviceList: [
      'Office and suite cleaning',
      'Retail and storefront',
      'Medical and dental practices',
      'After-hours scheduling',
      'Quarterly deep cleans',
    ],
    testimonial: {
      quote:
        'Our previous cleaner ghosted us mid-month. SAGE was in within a week, never missed a Friday since, and our patients keep mentioning how clean the lobby is.',
      author: 'Dr. Allison R.',
      role: 'Cody, WY — dental practice manager',
    },
    faq: [
      {
        q: 'How much does commercial cleaning cost in the Big Horn Basin?',
        a: 'Commercial cleaning pricing depends on square footage, frequency, and the type of space (office vs. retail vs. medical). Most small businesses we serve land in a predictable per-visit range. Call 307-254-5338 for a free walkthrough and quote.',
      },
      {
        q: 'Can you clean after-hours or before we open?',
        a: 'Yes. After-hours and early-morning service is our default for offices, retail, and medical spaces. We’ll match your operating hours and key/alarm policy so we’re never disruptive.',
      },
      {
        q: 'Do you carry liability insurance?',
        a: 'Yes — we’re fully insured and bonded with worker’s comp coverage. We’re happy to provide a certificate of insurance for your records or to satisfy your landlord’s requirement.',
      },
      {
        q: 'What kinds of small businesses do you clean?',
        a: 'Offices, retail shops, medical and dental practices, salons, real estate offices, professional services, and small showrooms across the Big Horn Basin. If you’re not sure whether we’re a fit, call us — we’ll tell you straight.',
      },
      {
        q: 'How often should an office be professionally cleaned?',
        a: 'Most small offices benefit from weekly cleaning, with bi-weekly working for low-traffic professional spaces. Medical, dental, and high-traffic retail typically need 2–3x weekly. We’ll recommend the cadence that fits your space when we walk through.',
      },
      {
        q: 'Can you scale up if my business grows?',
        a: 'Absolutely. Many of our commercial clients started weekly and added daily service or a second location. We staff for it.',
      },
    ],
  },
  {
    slug: 'real-estate-professionals',
    name: 'Real Estate Professionals',
    audience: 'real estate agents and sellers',
    icon: '\u{1F511}',
    primaryKeyword: 'pre-listing cleaning Big Horn Basin',
    metaTitle: 'Pre-Listing & Real Estate Cleaning in Big Horn Basin, WY | SAGE',
    metaDescription:
      'Pre-listing cleans, post-closing cleans, and vacant home maintenance for Big Horn Basin real estate agents and sellers. Same-week service. 307-254-5338.',
    heroEyebrow: 'For Real Estate Professionals',
    heroTitle: 'Pre-Listing & Real Estate Cleaning',
    heroSubtitle: 'Sell faster. List cleaner. Same-week pre-listing service across the Big Horn Basin.',
    tagline: 'Sell faster. List cleaner.',
    shortDesc:
      'Pre-listing cleans, post-closing prep, and vacant home maintenance for real estate agents, sellers, and buyers across the Big Horn Basin.',
    cardCta: 'Prep My Listing',
    problem:
      "A buyer forms a real impression of a house in the first 30 seconds. Smudged windows, a faint pet smell, dust on the baseboards, a film on the kitchen tile — they don’t show up in the photos but they kill the offer. You’ve seen listings sit on the market because the seller “cleaned it themselves.” You’ve also seen the right pre-listing clean turn a tired house into a multiple-offer weekend.",
    solution:
      "SAGE Cleaning works with Big Horn Basin agents to prep homes that show better, smell fresher, and close faster. Pre-listing deep cleans, post-closing cleans for buyers, and vacant home maintenance between showings. Same-week service when a listing is going live, photo-documented results, and a flat price you can pass to the seller without surprises.",
    benefits: [
      {
        title: 'Same-week listing prep',
        desc: 'Photographer coming Friday? We’re in this week. Tell us the listing date and we’ll work backward.',
      },
      {
        title: 'Pre-listing deep clean',
        desc: 'Top-to-bottom: baseboards, vents, blinds, inside appliances, windows, light fixtures — the details buyers notice and feel.',
      },
      {
        title: 'Post-closing buyer clean',
        desc: 'Hand the new owners a fresh, sanitized home on day one. The closing gift that earns the referral.',
      },
      {
        title: 'Flat, sellable price',
        desc: 'No hourly meter. One flat number you can pass to the seller or wrap into the listing budget.',
      },
    ],
    serviceLinks: [
      {
        serviceSlug: 'deep-cleaning',
        desc: 'The full pre-listing reset — buyers form an impression in 30 seconds and this is what wins it.',
      },
      {
        serviceSlug: 'move-in-move-out-cleaning',
        desc: 'Spotless transitions for buyers and sellers at closing.',
      },
      {
        serviceSlug: 'residential-cleaning',
        desc: 'Vacant home maintenance between showings to keep the property photo-ready.',
      },
    ],
    serviceList: [
      'Pre-listing deep clean',
      'Post-closing buyer clean',
      'Vacant home maintenance',
      'Open house prep',
      'Same-week scheduling',
    ],
    testimonial: {
      quote:
        'I bake the SAGE pre-listing clean into every listing now. Showings smell better, photos look better, and my houses move faster.',
      author: 'Renee K.',
      role: 'Powell, WY — real estate agent',
    },
    faq: [
      {
        q: 'How much does a pre-listing cleaning cost?',
        a: 'Pre-listing pricing depends on the home’s size, condition, and whether windows or carpets are included. Most Big Horn Basin pre-listings land in a flat-fee range that agents pass to the seller. Call 307-254-5338 for a same-week quote.',
      },
      {
        q: 'Can you clean a house before the photographer arrives?',
        a: 'Yes — same-week service is our standard for listings. Tell us the photo date and we’ll schedule the deep clean for the day before so the home is camera-ready.',
      },
      {
        q: 'Do you clean vacant homes between showings?',
        a: 'Yes. We offer ongoing vacant home maintenance — light dusting, surfaces, bathrooms, floors — to keep listings photo-fresh without paying for a full deep clean every week.',
      },
      {
        q: 'Can you do post-closing cleans as a buyer gift?',
        a: 'Absolutely. Post-closing cleans are one of the most-requested closing gifts from agents we work with. Spotless move-in for the buyer, easy referral source for you.',
      },
      {
        q: 'Do you bill the agent or the seller directly?',
        a: 'Either works. Many agents wrap the clean into their listing prep budget; others have us bill the seller at signing or close. Just tell us how you want it handled.',
      },
      {
        q: 'Do you serve agents across the entire Big Horn Basin?',
        a: 'Yes — Cody, Powell, Greybull, Worland, Lovell, Basin, Meeteetse, and surrounding towns. See our locations page for the full service area.',
      },
    ],
  },
  {
    slug: 'property-managers',
    name: 'Property Managers',
    audience: 'property managers',
    icon: '\u{1F3D8}',
    primaryKeyword: 'rental turnover cleaning Big Horn Basin',
    metaTitle: 'Rental Turnover Cleaning for Property Managers, Big Horn Basin WY',
    metaDescription:
      'Reliable unit turnover cleaning for property managers across the Big Horn Basin. Multi-property scheduling, condition reports, flat pricing. 307-254-5338.',
    heroEyebrow: 'For Property Managers',
    heroTitle: 'Rental Turnover Cleaning',
    heroSubtitle: 'Reliable turnover. Every unit. Every time.',
    tagline: 'Reliable turnover. Every unit. Every time.',
    shortDesc:
      'Unit turnover cleaning, multi-property scheduling, and condition reporting for property managers across the Big Horn Basin.',
    cardCta: 'Price My Portfolio',
    problem:
      "Managing rentals means juggling move-outs, move-ins, repairs, and the inspection between them. The cleaner who flakes is the cleaner who blows up your turnover schedule and pushes the next tenant’s move-in. Multiply that by every unit you manage and you’re babysitting cleaners instead of running a portfolio.",
    solution:
      "SAGE Cleaning handles turnover cleans for rentals, apartment units, and managed homes across the Big Horn Basin with the consistency property managers actually need. One point of contact, one invoice, multi-property scheduling, and a condition report on each unit if you want one. We treat your turnover schedule like ours.",
    benefits: [
      {
        title: 'Multi-property scheduling',
        desc: 'One call, all units. We schedule across your full portfolio so you’re not coordinating six cleaners on six leases.',
      },
      {
        title: 'Condition reports on request',
        desc: 'Photo-documented condition reports per unit — great for security deposit decisions and tenant disputes.',
      },
      {
        title: 'Flat pricing per unit',
        desc: 'Predictable per-unit pricing you can build into your turnover line item. No hourly surprises.',
      },
      {
        title: 'Tight turnover windows',
        desc: 'Lease ends Friday, new tenant Monday. We’re in Saturday. We hit the window so you can hit yours.',
      },
    ],
    serviceLinks: [
      {
        serviceSlug: 'move-in-move-out-cleaning',
        desc: 'Standard unit turnover — inside cabinets, appliances, baseboards, full bathroom and kitchen reset.',
      },
      {
        serviceSlug: 'deep-cleaning',
        desc: 'Heavy turnover when a unit needs more than a standard reset — long-term tenants, pets, or extended vacancies.',
      },
      {
        serviceSlug: 'commercial-cleaning',
        desc: 'Common areas, hallways, and on-site office cleaning for managed properties.',
      },
    ],
    serviceList: [
      'Unit turnover cleaning',
      'Multi-property scheduling',
      'Condition reporting',
      'Common area cleaning',
      'Same-week turnaround',
    ],
    testimonial: {
      quote:
        'I manage 14 doors across Cody and Powell. SAGE is the only call I make on turnovers now — they show up, they document, they invoice clean.',
      author: 'David L.',
      role: 'Big Horn Basin — property manager',
    },
    faq: [
      {
        q: 'How much does a rental turnover clean cost?',
        a: 'Turnover pricing is flat per-unit, based on bedrooms, bathrooms, and condition. Most Big Horn Basin standard turnovers fall into a predictable range you can build into your line items. Call 307-254-5338 for portfolio pricing.',
      },
      {
        q: 'Can you handle multiple properties on the same schedule?',
        a: 'Yes — multi-property scheduling is one of the main reasons property managers use us. We coordinate across your portfolio so you have one point of contact and one invoice.',
      },
      {
        q: 'Do you provide condition reports for security deposits?',
        a: 'On request, every turnover can include a photo-documented condition report flagging damage, wear, missing items, and cleanliness baseline. Great evidence for deposit decisions and tenant disputes.',
      },
      {
        q: 'How fast can you turn a unit?',
        a: 'Standard same-week turnover, with same-day or next-day available for tight windows. Tell us the lease-end and lease-start dates and we’ll fit the window.',
      },
      {
        q: 'Do you bill on a single monthly invoice?',
        a: 'Yes. We can roll all unit turnovers into a single monthly invoice with per-unit detail, or invoice per-turn — whatever fits your accounting.',
      },
      {
        q: 'Do you also clean common areas in managed buildings?',
        a: 'Yes — hallways, lobbies, laundry rooms, and on-site offices on a recurring schedule. We can bundle common-area cleaning with your turnover service.',
      },
    ],
  },
  {
    slug: 'renters',
    name: 'Renters',
    audience: 'renters and tenants',
    icon: '\u{1F4E6}',
    primaryKeyword: 'move-out cleaning service Big Horn Basin',
    metaTitle: 'Move-Out Cleaning for Renters in Big Horn Basin, WY | SAGE',
    metaDescription:
      'Get your full security deposit back. Professional move-out cleaning for Big Horn Basin renters. Landlord-ready results. Free quote: 307-254-5338.',
    heroEyebrow: 'For Renters',
    heroTitle: 'Move-Out Cleaning for Renters',
    heroSubtitle: 'Get your deposit back. Leave the right way.',
    tagline: 'Get your deposit back. Leave the right way.',
    shortDesc:
      'Landlord-ready move-out cleans for renters in Cody, Powell, and across the Big Horn Basin. Full deposit back — or as close as we can get you.',
    cardCta: 'Save My Deposit',
    problem:
      "Move-out is already stressful: packing, the truck, the new place, the utilities. The last thing you want is to spend Sunday night scrubbing inside the oven on your hands and knees — especially when your landlord is going to find one missed spot anyway and dock your deposit. A few hundred dollars on the line, and you’re trying to clean a house you’ve emotionally already left.",
    solution:
      "SAGE Cleaning’s move-out service gives you landlord-ready results without the Sunday-night meltdown. We follow a move-out specific checklist — inside cabinets, inside the oven, fridge, baseboards, blinds, every closet, every corner. Your security deposit comes back the way it should. You move on with your life.",
    benefits: [
      {
        title: 'Landlord-ready checklist',
        desc: 'Move-out specific scope: inside cabinets, ovens, fridges, baseboards, blinds, light fixtures — all the spots landlords actually inspect.',
      },
      {
        title: 'Get your deposit back',
        desc: 'A professional move-out clean often pays for itself in deposit recovered. We tell you straight if a job is too far gone.',
      },
      {
        title: 'Same-week scheduling',
        desc: 'Closing on the new place Friday? We’ll fit you in. Tell us the lease-end date and we’ll back into the schedule.',
      },
      {
        title: 'Receipt for your landlord',
        desc: 'You get an itemized receipt to submit with your deposit return request. Documentation matters.',
      },
    ],
    serviceLinks: [
      {
        serviceSlug: 'move-in-move-out-cleaning',
        desc: 'The core move-out service — floor-to-ceiling, inside cabinets and appliances, landlord-ready.',
      },
      {
        serviceSlug: 'deep-cleaning',
        desc: 'Add-on deep clean if your unit needs more than a standard move-out reset.',
      },
    ],
    serviceList: [
      'Full move-out clean',
      'Inside cabinets and appliances',
      'Inside ovens and refrigerators',
      'Baseboards, blinds, light fixtures',
      'Receipt for landlord submission',
    ],
    testimonial: {
      quote:
        'I was bracing to lose at least half my deposit. SAGE did the move-out, my landlord didn’t flag a single thing, and I got the full $1,400 back.',
      author: 'Tyler M.',
      role: 'Cody, WY — move-out client',
    },
    faq: [
      {
        q: 'How much does a move-out cleaning cost?',
        a: 'Move-out pricing is flat-fee, based on bedrooms, bathrooms, and condition. Most Big Horn Basin move-outs fall in a predictable range — and the deposit you recover usually exceeds the cost. Call 307-254-5338 for a free quote.',
      },
      {
        q: 'Will this be enough to get my full security deposit back?',
        a: 'Our move-out checklist is built around what landlords actually inspect — inside cabinets, inside the oven and fridge, baseboards, blinds, light fixtures. We can’t guarantee a landlord’s decision, but a professional move-out from us is your strongest case for full deposit return.',
      },
      {
        q: 'How fast can you schedule a move-out clean?',
        a: 'Same-week scheduling is standard, with same- or next-day available when we have an opening. Tell us your lease-end date and we’ll back into the schedule.',
      },
      {
        q: 'Do I need to be there during the clean?',
        a: 'No. Most renters meet us briefly at the start, then head to the new place. We’ll lock up and confirm completion with photos.',
      },
      {
        q: 'Will you clean inside the oven and refrigerator?',
        a: 'Yes — inside ovens, inside refrigerators (assuming they’re empty), inside cabinets, and inside microwaves are all part of the standard move-out scope.',
      },
      {
        q: 'Can I get a receipt to send to my landlord?',
        a: 'Yes. You’ll get an itemized receipt and, on request, a brief checklist showing what was cleaned. Documentation strengthens your deposit return case.',
      },
    ],
  },
];

export const marketsBySlug: Record<string, Market> = Object.fromEntries(
  markets.map((m) => [m.slug, m])
);
