export interface Branch {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
  sqft: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  image: string;
  features: string[];
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  intensity: 'High' | 'Very High' | 'Custom / Progressive' | 'Restorative';
  coachLead: string;
  description: string;
  outcomes: string[];
  equipment: string[];
  image: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  specialization: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  branch: string;
  quote: string;
  verified: boolean;
}

export interface Transformation {
  id: string;
  name: string;
  duration: string;
  focus: string;
  beforeStats: string;
  afterStats: string;
  beforeImage: string;
  afterImage: string;
  testimonial: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  period: string;
  price: string;
  priceNumeric: number;
  billingText: string;
  popular?: boolean;
  features: string[];
}

export const SITE_INFO = {
  brand: "DraftWorks",
  tagline: "Built for Intentional Strength",
  phone: "+91 89596 90529",
  email: "hello@draftworks.in",
  market: "India",
  currency: "INR",
  currencySymbol: "₹",
  established: "2021",
  developerName: "draftworks.in",
  developerUrl: "https://draftworks.in/",
};

export const BRANCHES: Branch[] = [
  {
    id: "blr-indiranagar",
    name: "DraftWorks Indiranagar",
    city: "Bengaluru",
    area: "Defence Colony",
    address: "748, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
    phone: "+91 89596 90529",
    email: "indiranagar@draftworks.in",
    timings: "Mon–Sat: 06:00 – 22:30 | Sun: 07:00 – 19:00",
    sqft: "14,500 sq.ft across 3 floors",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985552391483!2d77.63840747599026!3d12.97277641484931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a77e5e34b9%3A0x6b876387bd5b8f2!2s100%20Feet%20Rd%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru",
    image: "/temp/hero.webp",
    features: ["Olympic Eleiko Lifting Platforms", "Thermal Cold Plunge & Cedar Sauna", "Sprint Turf Track (30m)", "Valet Parking"],
  },
  {
    id: "hyd-jubilee",
    name: "DraftWorks Jubilee Hills",
    city: "Hyderabad",
    area: "Road No. 36",
    address: "Plot 382, Near Peddamma Temple Metro, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
    phone: "+91 89596 90529",
    email: "jubileehills@draftworks.in",
    timings: "Mon–Sat: 06:00 – 22:30 | Sun: 07:00 – 19:00",
    sqft: "16,000 sq.ft standalone facility",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3986791740927!2d78.40428527589578!3d17.43265810128032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96ae79d67a11%3A0xcf8dd2632204c3e3!2sRoad%20No.%2036%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Road+No+36+Jubilee+Hills+Hyderabad",
    image: "/temp/funtional.webp",
    features: ["Biomechanical Resistance Arena", "Dedicated Contrast Bath Suite", "Rooftop Movement Deck", "In-house Sports Physio"],
  },
  {
    id: "mum-bandra",
    name: "DraftWorks Bandra West",
    city: "Mumbai",
    area: "Pali Hill",
    address: "Waterfield Road & Turner Junction, Bandra West, Mumbai, Maharashtra 400050",
    phone: "+91 89596 90529",
    email: "bandra@draftworks.in",
    timings: "Mon–Sat: 06:00 – 23:00 | Sun: 07:00 – 20:00",
    sqft: "12,800 sq.ft custom vault",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.306915151535!2d72.83155877592476!3d19.05021235277818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9172f31b813%3A0xe510b144fa5064a2!2sTurner%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Turner+Road+Bandra+West+Mumbai",
    image: "/temp/split.webp",
    features: ["Custom Prime Fitness Pin-loaded Rigs", "Private Athlete Assessment Pod", "Infrared Recovery Lounges", "Dedicated Coffee & Protein Bar"],
  },
  {
    id: "pune-koregaon",
    name: "DraftWorks Koregaon Park",
    city: "Pune",
    area: "North Main Road",
    address: "Lane 5, North Main Road, Koregaon Park, Pune, Maharashtra 411001",
    phone: "+91 89596 90529",
    email: "koregaon@draftworks.in",
    timings: "Mon–Sat: 06:00 – 22:00 | Sun: 07:00 – 19:00",
    sqft: "11,500 sq.ft industrial loft",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7480574042893!2d73.89311247591605!3d18.539824068571868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c05763567d13%3A0x7d6b38c234a5d894!2sN%20Main%20Rd%2C%20Koregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=North+Main+Road+Koregaon+Park+Pune",
    image: "/temp/recovery.webp",
    features: ["High-Volume Ventilation & HEPA", "Calisthenics & Gymnastic Rings", "Cryo & Contrast Baths", "Secure Bike Storage"],
  },
  {
    id: "del-vasant",
    name: "DraftWorks Vasant Vihar",
    city: "New Delhi",
    area: "Poorvi Marg",
    address: "C-Block Community Centre, Poorvi Marg, Vasant Vihar, New Delhi 110057",
    phone: "+91 89596 90529",
    email: "delhi@draftworks.in",
    timings: "Mon–Sat: 06:00 – 22:30 | Sun: 07:00 – 20:00",
    sqft: "15,200 sq.ft architectural space",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.664448554247!2d77.15830917619213!3d28.55018698782088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dfa8a43f809%3A0xc3993c15d48bf5b2!2sPoorvi%20Marg%2C%20Vasant%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl: "https://maps.google.com/?q=Poorvi+Marg+Vasant+Vihar+New+Delhi",
    image: "/temp/hero.webp",
    features: ["Full Rogue Monster Racks", "Normatec Compression Lounge", "Outdoor Mobility Terrace", "Dedicated Weightlifting Coaches"],
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    subtitle: "Foundational Power & Work Capacity",
    duration: "60–75 Min Sessions",
    intensity: "High",
    coachLead: "Vikramaditya Rathore",
    description: "Periodized compound lifting protocols combined with high-density metabolic work. Built on barbell mechanics, progressive overload, and energy system conditioning.",
    outcomes: ["Significant compound lift progress (Squat, Bench, Deadlift)", "Elevated aerobic threshold and lactic tolerance", "Structural joint resilience and tendon density"],
    equipment: ["Eleiko Olympic Bars & Calibrated Plates", "Rogue Power Racks", "Concept2 Rowers & SkiErgs"],
    image: "/temp/hero.webp"
  },
  {
    id: "hypertrophy-build",
    title: "Hypertrophy & Athletic Build",
    subtitle: "Targeted Mechanical Tension & Symmetrical Mass",
    duration: "55–65 Min Sessions",
    intensity: "Custom / Progressive",
    coachLead: "Kabir Dev",
    description: "Biomechanical precision programming targeting maximum muscle hypertrophy with minimal joint shear. Focuses on matching resistance profiles to muscle length-tension curves.",
    outcomes: ["Dense lean muscle accumulation", "Optimal muscle symmetry and posture", "Controlled training volume without central fatigue"],
    equipment: ["Prime Fitness Cam-Adjustable Cables", "Pendulum Squat & Arsenal Strength Rigs", "Dumbbells up to 60kg"],
    image: "/temp/split.webp"
  },
  {
    id: "olympic-weightlifting",
    title: "Olympic Weightlifting",
    subtitle: "Snatch, Clean & Jerk Technical Mastery",
    duration: "75 Min Sessions",
    intensity: "Very High",
    coachLead: "Vikramaditya Rathore",
    description: "Detailed technical breakdown of the classic Olympic lifts. Emphasizes bar trajectory, triple extension velocity, receiving positions, and mobility under load.",
    outcomes: ["Explosive triple extension power", "Full-depth thoracic and ankle mobility", "Barbell speed and kinesthetic awareness"],
    equipment: ["IWF-Certified Eleiko Training Platforms", "Eleiko Competition Bumpers", "Jerk Blocks & Pulling Boxes"],
    image: "/temp/split.webp"
  },
  {
    id: "combat-functional",
    title: "Combat & Movement Engine",
    subtitle: "Rotational Torque, Footwork & Multi-Planar Agility",
    duration: "50–60 Min Sessions",
    intensity: "High",
    coachLead: "Ananya Sen",
    description: "Multi-planar movement incorporating heavy bag striking, rotational medicine ball throws, sled drag intervals, and defensive footwork conditioning.",
    outcomes: ["Unmatched rotational core power", "Rapid directional agility and spatial reaction", "High-efficiency cardiovascular output"],
    equipment: ["30-meter Sprint Turf Track", "Heavy Hanging Leather Bags", "Torque Tank Sleds & Battle Ropes"],
    image: "/temp/funtional.webp"
  },
  {
    id: "thermal-recovery",
    title: "Thermal & Biometric Recovery",
    subtitle: "Cold Plunge, Infrared Heat & Soft-Tissue Restoration",
    duration: "45 Min Sessions",
    intensity: "Restorative",
    coachLead: "Rhea Menon",
    description: "Science-backed contrast therapy utilizing 3°C to 5°C stainless steel cold plunges and 85°C Finnish infrared saunas paired with pneumatic compression.",
    outcomes: ["Accelerated lactate clearance and reduced DOMS", "Parasympathetic nervous system recovery", "Enhanced sleep quality and systemic inflammation reduction"],
    equipment: ["Filtered Stainless Cold Immersion Pools", "Cedarwood Finnish Infrared Saunas", "Normatec 3 Dynamic Compression Boots"],
    image: "/temp/recovery.webp"
  }
];

export const COACHES: Coach[] = [
  {
    id: "vikramaditya",
    name: "Vikramaditya Rathore",
    role: "Head of Strength & Olympic Lifting",
    credentials: "CSCS / USAW Level 2 / Ex-National Competitor",
    experience: "12+ Years Coaching",
    bio: "Coached collegiate athletes and national lifters across India. Obsessed with barbell mechanics, movement velocity, and disciplined lifting culture.",
    specialization: "Olympic Lifting, Barbell Periodization, Rate of Force Development",
    image: "/temp/hero.webp"
  },
  {
    id: "rhea-menon",
    name: "Rhea Menon",
    role: "Head of Biomechanics & Recovery",
    credentials: "M.Sc. Sports Physiotherapy / FMS Level 2",
    experience: "10+ Years Clinical & High-Performance",
    bio: "Specializes in joint longevity, recovery protocol design, and injury prevention for athletes lifting heavy across multi-year training careers.",
    specialization: "Biomechanical Assessment, Contrast Therapy, Postural Correction",
    image: "/temp/split.webp"
  },
  {
    id: "kabir-dev",
    name: "Kabir Dev",
    role: "Lead Performance & Hypertrophy Coach",
    credentials: "ISSN Sports Nutritionist / ACE-CPT",
    experience: "8+ Years Coaching",
    bio: "Brings engineering precision to muscle architecture. Focuses on customized exercise selection that matches member anatomy to maximize hypertrophy.",
    specialization: "Hypertrophy Programming, Mechanical Tension, Nutritional Strategy",
    image: "/temp/funtional.webp"
  },
  {
    id: "ananya-sen",
    name: "Ananya Sen",
    role: "Head of Movement & Metabolic Conditioning",
    credentials: "CrossFit Level 2 / EXOS Performance Specialist",
    experience: "7+ Years High-Performance",
    bio: "Former track sprinter with a focus on aerobic base building, turf speed mechanics, and rotational movement conditioning.",
    specialization: "Energy Systems, Sprint Agility, Multi-Planar Functional Strength",
    image: "/temp/recovery.webp"
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: "arjun",
    name: "Arjun K.",
    duration: "6 Months",
    focus: "Recomposition & Barbell Strength",
    beforeStats: "Body Fat 26% · Deadlift 90kg",
    afterStats: "Body Fat 14% · Deadlift 175kg",
    testimonial: "DraftWorks completely altered my relationship with the gym. No random circuit classes; just structured periodization, real coaches watching every rep, and zero ego lifting.",
    beforeImage: "/temp/funtional.webp",
    afterImage: "/temp/hero.webp",
  },
  {
    id: "deepa",
    name: "Deepa S.",
    duration: "9 Months",
    focus: "Post-Rehab Olympic Lifting & Lean Mass",
    beforeStats: "Chronic Lower Back Pain · Sedentary",
    afterStats: "Pain-Free · Snatch 52kg · Clean & Jerk 70kg",
    testimonial: "Rhea Menon rebuilt my hip mobility from scratch. Within nine months, I went from not being able to squat without knee pinch to snatching on an Eleiko platform.",
    beforeImage: "/temp/recovery.webp",
    afterImage: "/temp/split.webp",
  },
  {
    id: "rohan",
    name: "Rohan M.",
    duration: "5 Months",
    focus: "Athletic Conditioning & Hypertrophy",
    beforeStats: "Weight 88kg (High Visceral Fat)",
    afterStats: "Weight 79kg (Athletic Density & 10k Run Sub-48m)",
    testimonial: "The combination of the turf sled workouts and contrast plunge suites kept my body feeling recovered every single day. The standard here is unlike any other gym in India.",
    beforeImage: "/temp/split.webp",
    afterImage: "/temp/funtional.webp",
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Aditya Vardhan",
    rating: 5,
    timeAgo: "2 weeks ago",
    branch: "Indiranagar, Bengaluru",
    quote: "Hands down the most serious, mature gym in Bengaluru. Calibrated Eleiko plates, spotless platforms, and coaches who actually coach your technique instead of staring at their phones.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Meera Krishnan",
    rating: 5,
    timeAgo: "1 month ago",
    branch: "Jubilee Hills, Hyderabad",
    quote: "The contrast therapy suite with cold plunge and Finnish sauna is a game-changer for recovery. High ceiling, great acoustics, no loud commercial EDM blasting—just pure focus.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Zainab Merchant",
    rating: 5,
    timeAgo: "3 weeks ago",
    branch: "Bandra West, Mumbai",
    quote: "Worth every single rupee. Equipment choice is phenomenal—Prime Fitness cams, Watson dumbbells, and certified lifting bars. Cleanest locker rooms in Mumbai.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Siddharth Deshmukh",
    rating: 5,
    timeAgo: "2 months ago",
    branch: "Koregaon Park, Pune",
    quote: "I moved from an overcrowded chain gym to DraftWorks and the difference is night and day. Cap on active members means you never wait 15 minutes for a power rack.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Tanvi Mathur",
    rating: 5,
    timeAgo: "1 month ago",
    branch: "Vasant Vihar, New Delhi",
    quote: "The coaching team here is on another level. Rhea dialed in my shoulder mobility before we even touched heavy pressing. No bro-science, just solid biomechanics.",
    verified: true
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly Membership",
    period: "Monthly",
    price: "₹6,500",
    priceNumeric: 6500,
    billingText: "Billed monthly. Cancel anytime with 15 days notice.",
    popular: false,
    features: [
      "Full access to strength, turf & free weight floors",
      "All coach-led group lifting & movement sessions included",
      "2 Thermal & Cold Plunge sessions per month",
      "Complimentary movement screening & biometric benchmark",
      "Standard locker & steam room access",
      "Digital workout logging & progression tracking"
    ]
  },
  {
    id: "quarterly",
    name: "Quarterly Commitment",
    period: "3 Months",
    price: "₹16,500",
    priceNumeric: 16500,
    billingText: "Equivalent to ₹5,500/mo. Billed as one payment of ₹16,500.",
    popular: true,
    features: [
      "Everything in Monthly membership",
      "Unlimited access across all 5 Indian branches",
      "8 Thermal & Cold Plunge suite sessions per quarter",
      "Monthly 1-on-1 coach technique & bar velocity audit",
      "Dedicated towel service & premium locker access",
      "2 Complimentary guest passes per quarter",
      "15% Off sports physiotherapy consultations"
    ]
  },
  {
    id: "annual",
    name: "Annual Black Club",
    period: "12 Months",
    price: "₹48,000",
    priceNumeric: 48000,
    billingText: "Best value at ₹4,000/mo. Billed annually with 30-day freeze option.",
    popular: false,
    features: [
      "Complete all-access membership across all branches",
      "Unlimited Thermal Cold Plunge & Finnish Sauna access",
      "Quarterly comprehensive 3D movement & DEXA scan integration",
      "Permanent dedicated locker with laundry service option",
      "6 Complimentary guest passes per year",
      "Guaranteed platform reservations during peak morning hours",
      "Full access to exclusive athlete masterclasses & seminars"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g-1",
    title: "Lifting Platform",
    category: "Lifting Rigs",
    src: "/temp/hero.webp",
    aspect: "16:9"
  },
  {
    id: "g-2",
    title: "Recovery",
    category: "Recovery",
    src: "/temp/recovery.webp",
    aspect: "4:3"
  },
  {
    id: "g-3",
    title: "Barbell Power",
    category: "Coaching",
    src: "/temp/split.webp",
    aspect: "16:9"
  },
  {
    id: "g-4",
    title: "30-Meter Sprint",
    category: "Turf & Movement",
    src: "/temp/funtional.webp",
    aspect: "4:3"
  },
  {
    id: "g-5",
    title: "Rogue Steel Monster Racks & Rig",
    category: "Lifting Rigs",
    src: "/temp/hero.webp",
    aspect: "16:9"
  },
  {
    id: "g-6",
    title: "Thermal Suite",
    category: "Recovery",
    src: "/temp/recovery.webp",
    aspect: "4:3"
  }
];
