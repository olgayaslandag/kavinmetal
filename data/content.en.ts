// English version of content data - G5 completed
export const heroSlides = [
  {
    index: "01",
    image: "/assets/img/hero/hero-kemerburgaz-dusk.webp",
    eyebrow: "Kavin System Solutions",
    title: ["COMPLETE PROJECT SOLUTIONS"],
    lead:
      "We continue to be a reliable solution partner with functional and quality products for changing customer needs.",
    alt: "Kemerburgaz Facade - Kavin aluminum facade and rendering applications",
  },
  {
    index: "02",
    image: "/assets/img/hero/hero-safiport-commercial.webp",
    eyebrow: "Kavin System Solutions",
    title: ["SOLUTIONS THAT MAKE A DIFFERENCE"],
    lead:
      "We create powerful projects with surface treatments, mechanical processes, and custom manufacturing solutions.",
    alt: "Safiport commercial building - Kavin WA55 facade systems",
  },
  {
    index: "03",
    image: "/assets/img/hero/hero-gokturk-corner.webp",
    eyebrow: "Kavin System Solutions",
    title: ["COOL IN HEAT, WARM IN COLD"],
    lead:
      "With quality products and services, you can be flexible and solution-oriented when meeting diverse customer needs.",
    alt: "Kavin System Ankara konut referansı",
  },
];

export const products = [
  {
    key: "aluminium-profiles",
    slug: "/en/solutions/aluminium-profiles",
    title: ["Aluminium Profiles"],
    image: "/assets/img/products/banner-aluminyum.png",
    icon: "/assets/img/icons/aluminyum-profiller.svg",
    alt: "Aluminium profiles - standard, window, decoration and complementary profiles",
    href: "/en/solutions/aluminium-profiles",
    description:
      "We offer a wide range of standard profiles, window profiles, decoration and complementary profiles with high quality.",
    pdf: "standard-profiller.pdf",
  },
  {
    key: "suspension-systems",
    slug: "/en/solutions/suspension-systems",
    title: ["Suspension Systems"],
    image: "/assets/img/products/banner-kupeste.jpg",
    icon: "/assets/img/icons/kupeste-profilleri.svg",
    alt: "Suspension systems - round, square and rectangular, glass channel",
    href: "/en/solutions/suspension-systems",
    description:
      "We offer division and glass solutions with round, square and rectangular profiles and glass channel suspension systems.",
    pdf: "aluminyum-yuvarlak-sistem-kupeste-profilleri.pdf",
  },
  {
    key: "composite-panels",
    slug: "/en/solutions/composite-panels",
    title: ["Composite Panels"],
    image: "/assets/img/products/banner-kompozit.jpg",
    icon: "/assets/img/icons/kompozit-paneller.svg",
    alt: "Composite panels - 3000, 4000 and 5000 series",
    href: "/en/solutions/composite-panels",
    description:
      "We offer aesthetic and durable solutions with 3000, 4000 and 5000 series composite panels.",
    pdf: "3000-serisi.pdf",
  },
  {
    key: "accessories",
    slug: "/en/solutions/accessories",
    title: ["Accessories"],
    image: "/assets/img/products/banner-aksesuar.jpg",
    icon: "/assets/img/icons/aksesuarlar.svg",
    alt: "Accessories - hardware and complementary parts",
    href: "/en/solutions/accessories",
    description:
      "We offer solutions with custom hardware, steel support systems and complementary accessories.",
    pdf: "aksesuar.pdf",
  },
];

export const productSubGroups = [
  // Aluminium Profiles subgroups
  {
    key: "aluminium-profiles-standard",
    slug: "/en/solutions/aluminium-profiles",
    parentKey: "aluminium-profiles",
    parentSlug: "/en/solutions/aluminium-profiles",
    title: "Standard Profiles",
    image: "/assets/img/products/standart-profil.jpg",
    alt: "Standard aluminium profiles",
    pdf: "standart-profiller.pdf",
  },
  {
    key: "aluminium-profiles-window",
    slug: "/en/solutions/aluminium-profiles",
    parentKey: "aluminium-profiles",
    parentSlug: "/en/solutions/aluminium-profiles",
    title: "Window Profiles",
    image: "/assets/img/products/dograma-profil.jpg",
    alt: "Window aluminium profiles",
    pdf: "dograma-ve-cephe-profilleri.pdf",
  },
  {
    key: "aluminium-profiles-decor",
    slug: "/en/solutions/aluminium-profiles",
    parentKey: "aluminium-profiles",
    parentSlug: "/en/solutions/aluminium-profiles",
    title: "Decoration and Complementary Profiles",
    image: "/assets/img/products/dekorasyon-profil.jpg",
    alt: "Decoration and complementary profiles",
    pdf: "dekorasyon-ve-tamamlayici-profiller.pdf",
  },

  // Suspension Systems subgroups
  {
    key: "suspension-round-system",
    slug: "/en/solutions/suspension-systems",
    parentKey: "suspension-systems",
    parentSlug: "/en/solutions/suspension-systems",
    title: "Round System",
    image: "/assets/img/products/yuvarlak-kupeste.jpg",
    alt: "Aluminium round suspension system",
    pdf: "aluminyum-yuvarlak-sistem-kupeste-profilleri.pdf",
  },
  {
    key: "suspension-square-rectangle",
    slug: "/en/solutions/suspension-systems",
    parentKey: "suspension-systems",
    parentSlug: "/en/solutions/suspension-systems",
    title: "Square and Rectangular",
    image: "/assets/img/products/kare-kupeste.jpg",
    alt: "Aluminium square and rectangular suspension system",
    pdf: "aluminyum-kare-ve-dikdortgen-kupeste-profilleri.pdf",
  },
  {
    key: "suspension-glass-channel",
    slug: "/en/solutions/suspension-systems",
    parentKey: "suspension-systems",
    parentSlug: "/en/solutions/suspension-systems",
    title: "Glass Channel Suspension",
    image: "/assets/img/products/cam-kupeste.jpg",
    alt: "Aluminium glass channel suspension system",
    pdf: "aluminyum-cam-kanal-kupeste-profilleri.pdf",
  },

  // Composite Panels subgroups
  {
    key: "composite-3000-series",
    slug: "/en/solutions/composite-panels",
    parentKey: "composite-panels",
    parentSlug: "/en/solutions/composite-panels",
    title: "3000 Series",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Composite panel 3000 series color catalog",
    pdf: "3000-serisi.pdf",
  },
  {
    key: "composite-4000-series",
    slug: "/en/solutions/composite-panels",
    parentKey: "composite-panels",
    parentSlug: "/en/solutions/composite-panels",
    title: "4000 Series",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Composite panel 4000 series color catalog",
    pdf: "4000-serisi.pdf",
  },
  {
    key: "composite-5000-series",
    slug: "/en/solutions/composite-panels",
    parentKey: "composite-panels",
    parentSlug: "/en/solutions/composite-panels",
    title: "5000 Series",
    image: "/assets/img/products/kompozit-renk.jpg",
    alt: "Composite panel 5000 series color catalog",
    pdf: "5000-serisi.pdf",
  },

  // Accessories subgroups
  {
    key: "accessories-standard-profiles",
    slug: "/en/solutions/accessories",
    parentKey: "accessories",
    parentSlug: "/en/solutions/accessories",
    title: "Standard Profiles",
    image: "/assets/img/products/standart-profil.jpg",
    alt: "Standard aluminium profiles",
    pdf: "aksesuar.pdf",
  },
  {
    key: "accessories-construction-profiles",
    slug: "/en/solutions/accessories",
    parentKey: "accessories",
    parentSlug: "/en/solutions/accessories",
    title: "Construction Profiles",
    image: "/assets/img/products/dograma-profil.jpg",
    alt: "Construction aluminium profiles",
    pdf: "aksesuar.pdf",
  },
  {
    key: "accessories-custom-projections",
    slug: "/en/solutions/accessories",
    parentKey: "accessories",
    parentSlug: "/en/solutions/accessories",
    title: "Custom Solutions",
    image: "/assets/img/products/projeye-ozel.jpg",
    alt: "Custom accessories for projects",
    pdf: "aksesuar.pdf",
  },
];

export const services = [
  {
    key: "surface-treatment",
    slug: "surface-treatment",
    title: "SURFACE TREATMENT",
    description:
      "We offer high quality and durable floor-to-floor services through electrostatic powder coating application. We remove imperfections from aluminium surfaces to provide brilliant finish and corrosion resistance.",
    heroLead: "Electrostatic powder coating application",
    image: "/assets/img/services/toz-boya-2.jpg",
    alt: "Surface treatment - powder coating application",
    href: "/en/services/surface-treatment",
    intro: [
      "Surface treatment is the most critical step that determines the lifespan and visual quality of aluminium profiles. At Kavin System Solutions, we perform electrostatic powder coating application from surface preparation to final inspection, all within our own facilities.",
      "After oil removal and chemical preparation, the powder coating is applied using electrostatic-charged guns and polymerised at high temperatures. The result is a surface resistant to impacts, scratches and corrosion with a uniform single tone finish suitable for both indoor and outdoor use in matte, glossy and metallic finishes.",
    ],
    gallery: [
      { src: "/assets/img/services/toz-boya-1.jpg", alt: "Electrostatic powder coating line" },
      { src: "/assets/img/services/toz-boya-3.jpg", alt: "Powder coating application from production line" },
    ],
    steps: [
      { title: "Surface Preparation", text: "Profiles are cleaned of oil and dust, then chemically prepared for paint adhesion and corrosion resistance." },
      { title: "Electrostatic Application", text: "Powder coating is applied using electrostatic-charged guns to achieve uniform coverage including corners and channels." },
      { title: "Firing", text: "Paint is polymerised at high temperatures to achieve surface hardness and chemical resistance." },
      { title: "Quality Control", text: "Film thickness, gloss level and RAL compliance are measured, then profiles are packaged for shipment." },
    ],
    features: [
      { title: "Extensive RAL Range", text: "Standard RAL colors and custom tones available in matte, glossy and metallic finishes." },
      { title: "Long-Lasting Durability", text: "UV, moisture and corrosion resistant coating with colors that don't fade in exterior applications." },
      { title: "Homogeneous Surface Quality", text: "Single-tone finish without marks from the combination of surface preparation and electrostatic application." },
      { title: "Eco-Friendly Technology", text: "Solvent-free powder coating with high waste recycling rates during application." },
    ],
  },
  {
    key: "mechanical-processing",
    slug: "mechanical-processing",
    title: "MECHANICAL PROCESSING",
    description:
      "We provide precise processing of brass and aluminium parts with CNC machining, milling and drilling operations. We solve your project needs quickly and accurately.",
    heroLead: "CNC precision machining",
    image: "/assets/img/services/mekanik-islemler.jpg",
    alt: "Mechanical processing - CNC machining and milling",
    href: "/en/services/mechanical-processing",
    intro: [
      "Millimetre-level precision in door and facade systems cannot be compensated at the assembly stage. At Kavin System Solutions, we perform mechanical processing in our own CNC line to achieve precision and repeatability in serial production.",
      "From project data programming to first piece approval and process from milling to burrs cleaning and measurement verification, all steps are tracked within a single system. When materials arrive at the construction site, compatibility issues are minimized.",
    ],
    gallery: [
      { src: "/assets/img/services/mekanik-genel.jpg", alt: "CNC mechanical processing line overview" },
      { src: "/assets/img/services/profil-ebatlama.jpg", alt: "Profile sizing and processing operation" },
    ],
    steps: [
      { title: "Programming", text: "Project drawings and cutting lists are transferred to CNC; processing program and fixture plan are created." },
      { title: "First Piece Approval", text: "First profile is measured; hole positions and tolerances are approved before serial processing begins." },
      { title: "CNC Processing", text: "Milling, drilling and channel operations are performed with high-speed cutters in single fixture setup." },
      { title: "Burr Cleaning and Labeling", text: "Sharp edges are removed; processed profiles are labeled by project and packaged." },
    ],
    features: [
      { title: "High Precision", text: "Hole spacing and channel measurements are controlled for error-free assembly." },
      { title: "Repeatable Serial Production", text: "Serial parts are identical thanks to program-based processing." },
      { title: "Project-Specific Fixtures", text: "Custom-designed fixtures accommodate system and detail variations for extensive processing capacity." },
      { title: "Measurement Verification", text: "Final inspection ensures complete compliance with project specifications before shipment." },
    ],
  },
  {
    key: "izomat-service",
    slug: "izomat-service",
    title: "IZOMAT",
    description:
      "With the Izomat line, we provide precise angle and length cutting of aluminium profiles using dual saw technology; saving time and materials in serial production.",
    heroLead: "Dual-saw profile cutting",
    image: "/assets/img/services/izomat-1.jpg",
    alt: "Izomat - profile cutting and processing",
    href: "/en/services/izomat-service",
    intro: [
      "Izomat is our production technology for precise and fast length cutting of aluminium profiles using a dual saw line. It enables cutting of hundreds of parts with the same tolerance in door and facade projects.",
      "Angle, length and quantity data are programmed in the line; operator intervention is minimal. 45° and 90° cuts are performed accurately and repeatably. Clean-cut surfaces reduce waste in subsequent processes and assembly.",
    ],
    gallery: [
      { src: "/assets/img/services/izomat-2.jpg", alt: "Izomat cutting line view" },
      { src: "/assets/img/services/izomat-3.jpg", alt: "Dual saw profile cutting process" },
    ],
    steps: [
      { title: "Cut Planning", text: "Cutting list is uploaded to the line; profile length, angle and quantity parameters are programmed." },
      { title: "Profile Feeding", text: "Profile is measured and positioned automatically; slippage and vibration are prevented." },
      { title: "Dual Saw Cutting", text: "Two synchronized saws cut simultaneously for efficient two-end processing." },
      { title: "Angle and Length Control", text: "Cut parts undergo angle and length verification; clean-cut surfaces proceed to next stage." },
    ],
    features: [
      { title: "Precision Angle Cutting", text: "45° and 90° cuts with accurate positioning and clean cutting surfaces." },
      { title: "Time Savings", text: "Dual-end cutting in single setup increases serial part processing speed." },
      { title: "Optimized Material Usage", text: "Nest-compatible cutting plans minimize profile waste." },
      { title: "Serial Consistency", text: "Programmed processing ensures identical measurements across hundreds of parts." },
    ],
  },
  {
    key: "project-service",
    slug: "project-service",
    title: "PROJECT SERVICES",
    description:
      "From discovery to delivery, we provide end-to-end project support; managing system selection, production planning and logistics processes together.",
    heroLead: "End-to-end project support",
    image: "/assets/img/services/proje-hizmet-1.png",
    alt: "Project services - from concept to delivery",
    href: "/en/services/project-service",
    intro: [
      "Project services go beyond product supply; requiring a business model. At Kavin System Solutions, we manage the entire process from needs analysis to on-site delivery in architectural projects, providing a single point of contact for our customers.",
      "System selection, metraj and cutting planning, production scheduling and delivery coordination are managed in a single plan. Parallel processing replaces sequential steps; deadlines are met without surprises.",
    ],
    gallery: [
      { src: "/assets/img/projects/gsa130.jpg", alt: "GSA130 facade application" },
      { src: "/assets/img/projects/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg", alt: "Safiport commercial building WA55 facade application" },
    ],
    steps: [
      { title: "Discovery and Analysis", text: "Project location, details and timeline requirements are jointly determined; technical needs are identified." },
      { title: "System and Solution Proposal", text: "Door, facade and accessory alternatives are shaped according to performance requirements; proposal is prepared." },
      { title: "Production and Processing Plan", text: "Approved metraj and cutting lists are transferred to the line; Izomat, CNC and surface processing are scheduled." },
      { title: "Logistics and On-site Support", text: "Project-based packaging and delivery schedules ensure complete delivery to the correct address; on-site technical support is provided." },
    ],
    features: [
      { title: "Single Source Solution", text: "Profile, accessories, surface and mechanical processing are planned by a single supplier." },
      { title: "Deadline Assurance", text: "High stock levels and integrated production planning ensure predictable delivery dates." },
      { title: "Technical Support", text: "Experienced team accompanies customers throughout detailed planning and on-site implementation." },
      { title: "Complete Delivery", text: "Project-based labeling and control lists ensure every part reaches the correct address completely." },
    ],
  },
];

export const projects = [
  {
    key: "gokturk-konutlari",
    slug: "/en/projects/gokturk-konutlari",
    title: "Göktürk Konutları",
    image:
      "/assets/img/projects/Referanslar_0036_47_0001_Gokturk_KONUTLARI-3_WA55_KHR-2.jpg",
    alt: "Göktürk Konutları - WA55 window and door systems",
    href: "/en/references/gokturk-konutlari",
    description:
      "In the Göktürk Konutları project, WA55 window and door systems were used to create comfortable and durable living spaces.",
  },
  {
    key: "safiport-ticari-yapi",
    slug: "/en/projects/safiport-ticari-yapi",
    title: "Safiport Commercial Building",
    image:
      "/assets/img/projects/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg",
    alt: "Safiport commercial building - WA55 facade system",
    href: "/en/references/safiport-ticari-yapi",
    description:
      "In the Safiport commercial building, WA55 facade system was applied to provide a modern and reliable facade solution for large areas.",
  },
  {
    key: "akkus-tekstil",
    slug: "/en/projects/akkus-tekstil",
    title: "Akkuş Tekstil",
    image:
      "/assets/img/projects/Referanslar_0036_47_0011_Akkus-Tekstil_2013_WAT55-1.jpg",
    alt: "Akkuş Tekstil facility - WAT55 facade application",
    href: "/en/references/akkus-tekstil",
    description:
      "In the Akkuş Tekstil production facility, WAT55 systems were used for facade and door solutions to provide a light-utilizing work environment.",
  },
  {
    key: "kemerburgaz-evleri",
    slug: "/en/projects/kemerburgaz-evleri",
    title: "Kemerburgaz Houses",
    image:
      "/assets/img/projects/Referanslar_0036_47_0028_kemerburgaz-evleri-wat-55.jpg",
    alt: "Kemerburgaz Houses - WAT55 door systems",
    href: "/en/references/kemerburgaz-evleri",
    description:
      "In the Kemerburgaz Houses project, WAT55 door systems were used to complement the facade aesthetics with durable window solutions.",
  },
  {
    key: "bahcesehir-koleji-halkali",
    slug: "/en/projects/bahcesehir-koleji-halkali",
    title: "Bahçeşehir Koleji Halkalı",
    image:
      "/assets/img/projects/Referanslar_0036_47_0032_BahcesehirKoleji_Halkali_wat55-4.jpg",
    alt: "Bahçeşehir Koleji Halkalı campus - WAT55 systems",
    href: "/en/references/bahcesehir-koleji-halkali",
    description:
      "In the Bahçeşehir Koleji Halkalı campus, WAT55 systems were used to provide facade solutions for large, bright educational areas.",
  },
  {
    key: "ktams-projesi",
    slug: "/en/projects/ktams-projesi",
    title: "KTAMS Project",
    image:
      "/assets/img/projects/Referanslar_0036_47_0006_KTAMS_WA55_SLA60.jpg",
    alt: "KTAMS project - WA55 and SLA60 systems",
    href: "/en/references/ktams-projesi",
    description:
      "In the KTAMS project, WA55 and SLA60 systems were used together to create a contemporary facade design for an office building.",
  },
  {
    key: "kompozit-cephe-uygulamasi",
    slug: "/en/projects/composite-cephe-uygulamasi",
    title: "Composite Facade Application",
    image:
      "/assets/img/projects/Referanslar_0036_47_0016_WAT55_KOMPOZIT-1-kopyasi.jpg",
    alt: "Composite facade application - WAT55 composite panel",
    href: "/en/references/composite-cephe-uygulamasi",
    description:
      "With the WAT55 carrier system, a composite panel covering was implemented to create an aesthetic and protective facade.",
  },
  {
    key: "slat-cwa-cephe-projesi",
    slug: "/en/projects/slat-cwa-cephe-projesi",
    title: "SLAT CWA Facade Project",
    image:
      "/assets/img/projects/Referanslar_0036_47_0025_SLAT64_CWA50_WAT55-5.jpg",
    alt: "SLAT64 CWA50 WAT55 facade project",
    href: "/en/references/slat-cwa-cephe-projesi",
    description:
      "With the combined use of SLAT64, CWA50 and WAT55 systems, a sun-control facade solution was provided.",
  },
  {
    key: "wat55-referans-projesi",
    slug: "/en/projects/wat55-reference-project",
    title: "WAT55 Reference Project",
    image:
      "/assets/img/projects/Referanslar_0036_47_0004_wa55.jpg",
    alt: "WAT55 reference project - window system",
    href: "/en/references/wat55-reference-project",
    description:
      "In the WAT55 reference project, window systems were applied to achieve high thermal insulation and large glass areas.",
  },
  {
    key: "gsa130-cephe-sistemi",
    slug: "/en/projects/gsa130-cephe-sistemi",
    title: "GSA130 Facade System",
    image: "/assets/img/projects/gsa130.jpg",
    alt: "GSA130 facade system application",
    href: "/en/references/gsa130-cephe-sistemi",
    description:
      "With the GSA130 facade system, a smooth and continuous facade was created for the commercial building.",
  },
];

export const corporateFacts = [
  { value: "18", label: "Years of experience" },
  { value: "49", label: "Countries" },
  { value: "8,950", label: "Customers and suppliers" },
  { value: "23K+", label: "Ton in stock" },
];

export const corporateTimeline = [
  {
    year: "2006",
    text: "Established in Çağlayan with 200 m². Kavin System Solutions began operating in the sector.",
  },
  {
    year: "2010",
    text: "Moved to Yenibosna 5,500 m². Started R&D and invested in Izomat machinery.",
  },
  {
    year: "2022",
    text: "Reached 49 country export capacity.",
  },
  {
    year: "2023",
    text: "Invested in our 11,000 m² factory in Lüleburgaz.",
  },
];

export const visionMission = {
  vision:
    "To be the preferred aluminium sector solution partner without compromising the principle of trust.",
  mission:
    "To work in cooperation with our stakeholders, providing functional and quality solutions for changing customer needs.",
};

export const aboutText = [
  "Kavin System Solutions has reached its goal of being a leading partner in the sector by offering quality products and services that meet customer needs.",
  "During this process we have successfully implemented numerous projects and now have 49 country export capacity.",
  "With our high stock capacity and fast supply we offer quality products and services while maintaining flexibility for diverse customer needs in the face of change and innovation.",
  "Our main goals include developing new projects according to customer requirements providing competitive pricing and high quality through R&D studies to turn dreams into reality.",
  "As a result of our R&D and production studies we established the Kavin System Solutions brand in the architectural systems sector.",
  "With this understanding Kavin System Solutions has gone beyond product sales and made strategic investments for value creation. Today with our high-technology equipment and expert team we continue our journey with the vision of being pioneers of innovation in the sector.",
];

export const corporateAccordion = [
  {
    title: "Corporate Values and Approach",
    body: "Customer focus, quality standards, innovative and sustainable aluminium solutions.",
  },
  {
    title: "Production and R&D Capability",
    body: "Our facilities with high technology, engineering competencies, and value-added production processes.",
  },
  {
    title: "Vision & Mission",
    body: `Vision: ${visionMission.vision} Mission: ${visionMission.mission}`,
  },
];

export const contactInfo = {
  headquarters:
    "Bahçeşehir 2. Kısım Mh. Mercedes Blv. 30 E/11 Başakşehir / Istanbul",
  email: "info@kavinmetal.com",
  phone: "0(212) 451 25 00",
  phoneHref: "tel:+902124512500",
  whatsapp: "https://wa.link/fwl04l",
  mapsUrl:
    "https://maps.app.goo.gl/mfVgm2rMPvzogNaa9",
  socials: {
    facebook: "https://www.facebook.com/KavinMetal/?locale=tr_TR",
    instagram: "https://instagram.com/kavinmetal",
    linkedin:
      "https://www.linkedin.com/company/kavin-metal-san-tic-ltd-ti/mycompany/?viewAsMember=true",
    whatsapp: "https://wa.link/fwl04l",
  },
};

export const navLinks = [
  { label: "Solutions", href: "/en/solutions" },
  { label: "Services", href: "/en/services" },
  { label: "About", href: "/en/about" },
  { label: "News", href: "/en/news" },
  { label: "References", href: "/en/references" },
  { label: "Contact", href: "/en/contact" },
];

export const ourValues = [
  "Customer Focus: We always focus on our customers' needs and expectations, ensuring they receive the best solutions. Customer satisfaction is our top priority in every project.",
  "Quality: We continuously improve to meet the highest standards without compromising the quality of our products. By offering reliable and durable solutions, we create long-lasting and aesthetically pleasing products.",
  "Innovation: We keep up with technological advancements and differentiate ourselves in the industry with innovative ideas. Through continuous R&D efforts, we aim to provide the latest and most efficient solutions.",
  "Sustainability: We adopt an environmentally conscious approach, efficiently utilizing resources and promoting recycling to prevent environmental harm.",
  "Teamwork and Collaboration: We believe in strong teamwork and collaboration on the path to success. Every individual's contribution helps us achieve our shared goals.",
  "Trust and Transparency: We always uphold honesty and transparency in our business processes. We establish long-term relationships based on trust with our customers and business partners.",
];

export const team = [
  {
    name: "Kerem Yılmaz",
    position: "CEO & Founder",
    image: "/assets/img/team/kerem-yilmaz.jpg",
    alt: "Kerem Yılmaz - CEO & Founder",
    socials: {
      facebook: "/tr",
      linkedin: "/tr",
      instagram: "/tr",
    },
  },
  {
    name: "Ayşe Demir",
    position: "Project Manager",
    image: "/assets/img/team/ayse-demir.jpg",
    alt: "Ayşe Demir - Project Manager",
    socials: {
      facebook: "/tr",
      linkedin: "/tr",
      instagram: "/tr",
    },
  },
];

export const pressArticles = [
  {
    key: "pukab-baskani",
    slug: "/en/news/pukab-baskani",
    title: "Kavin System Solutions CEO Kerem Yılmaz Became PÜKAB's New President",
    category: "Press",
    dateLabel: "28 April 2023",
    excerpt:
      "'Our main goal is to represent all sector stakeholders that cannot be represented' says PÜKAB President Kerem Yılmaz in our interview.",
    image: "/assets/img/press/taycan.jpg",
    imageAlt: "Kerem Yılmaz interview photo (taycan photo)",
    images: [],
blocks: [
      {
        kind: "p",
        text: "While Kavin System Solutions achieved success, our aim is to decipher the unrepresentable groups in our main sectors and make them includable.",
      },
      {
        kind: "question",
        text: "How are unrepresentative groups defined in the sector?",
      },
      {
        kind: "p",
        text: "There are still groups not represented in our sector, and we continue to strive to change this situation.",
      },
      {
        kind: "question",
        text: "What is the effect of confederation membership on the sector?",
      },
      {
        kind: "p",
        text: "Confederation membership provides a broader impact across the sector as a whole.",
      },
      {
        kind: "question",
        text: "What are your primary goals in the new presidential term?",
      },
      {
        kind: "p",
        text: "In the new period we have started, our primary goal is to focus on innovations and sustainable practices in the sector.",
      },
    ],
  },
  {
    key: "saha-expo-solar-carport",
    slug: "/en/news/saha-expo-solar-carport",
    title: "Kavin System Solutions Introduced Innovative Solar Carport Product at SAHA EXPO 2022",
    category: "Press",
    dateLabel: "23 March 2023",
    excerpt:
      "Amanous branded Solar Carport product drew great interest at SAHA EXPO, which took place between 25-28 October.",
    image: "/assets/img/press/gsa130.jpg",
    imageAlt: "Solar Carport demonstration at SAHA EXPO",
    sourceLabel: "TeknoTalk",
    sourceUrl: "",
    blocks: [
      {
        kind: "p",
        text: "At the SAHA EXPO 2022 Defense Aviation and Aerospace Industry Fair held between 25-28 October 2022 in Istanbul, the Kavin-branded Solar Carport was presented at the Kavin System Solutions stand.",
      },
      {
        kind: "p",
        text: "Throughout the fair, detailed information about the technical features and benefits of the solar carport solution was provided to visitors. This innovative product under the Kavin brand drew attention with its combination of green energy and aluminum roofing systems.",
      },
    ],
  },
  {
    key: "luleburgaz-fabrikasi",
    slug: "/en/news/luleburgaz-factory",
    title: "Our Lüleburgaz Factory Has Started Production",
    category: "Announcement",
    dateLabel: "2023",
    excerpt:
      "Our 20,000 m² covered and 50,000 m² total area production facility in Sarıcaali is now ready for production.",
    image: "/assets/img/press/toz-boya-1.jpg",
    imageAlt: "Factory exterior view",
    images: undefined,
    blocks: [
      {
        kind: "p",
        text: "Our modern production facility of 20,000 m² closed and 50,000 m² total area in the Saricaali district has been united to support the aluminum profile production process.",
      },
      {
        kind: "p",
        text: "In our facility, we have horizontal and special extrusion lines, surface treatment lines with full production capacity. The 20,000 m² closed area provides a production environment protected from weather conditions, while the 50,000 m² total area allows for a wide production spectrum.",
      },
      {
        kind: "p",
        text: "Our horizontal extrusion and surface treatment lines are designed to improve the quality of aluminum profiles and offer various flooring solutions. Our facility has the capacity to perform high-temperature oven electrostatic powder coating applications in an integrated solution.",
      },
    ],
  },
  {
    key: "49-ulkeye-ihracat",
    slug: "/en/news/49-countries",
    title: "Our Profiles Are Used in 49 Countries",
    category: "Announcement",
    dateLabel: "2022",
    excerpt:
      "We have reached 49 countries with our aluminum profiles production, with our direct export model and German-based Kavin organization.",
    image: "/assets/img/press/Referanslar_0036_47_0003_wa-55-safiport-ticari.jpg",
    imageAlt: "Safiport commercial building EXPORT documentation",
blocks: [
      {
        kind: "p",
        text: "Kavin System Solutions has reached 49 countries with aluminum profiles produced with our direct export model, and we have a durable customer base in the international market.",
      },
      {
        kind: "p",
        text: "With our Kavin-based company in Germany, we started to be recognized in international markets by providing solutions compliant with global standards. Our export processes are supported by protocol adherence and quality controls.",
      },
    ],
  },
  {
    key: "bau-muenih-2017",
    slug: "/en/news/bau-munich-2017",
    title: "Our First Time at BAU Munich",
    category: "Event",
    dateLabel: "2017",
    excerpt:
      "We attended the BAU Engineering and Construction Fair for the first time, presenting Kavin roof/ceiling systems internationally.",
    image: "",
    imageAlt: "BAU Engineering and Construction Fair",
    blocks: [
      {
        kind: "p",
        text: "At the BAU Engineering and Construction Fair held in Munich, Germany in 2017, the presentation of Kavin System Solutions brand roof and facade systems was made at the Kavin System Solutions stand.",
      },
      {
        kind: "p",
        text: "Our fair stand displayed the aesthetic and technical features of Kavin roofing systems for international visitors, and created business cooperation opportunities with sector professionals. This participation must be the first step of our brand's international vision.",
      },
    ],
  },
];
