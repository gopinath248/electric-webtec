const categoryTranslations = {
  "control-panel": {
    en: "Control Panel",
    ta: "கட்டுப்பாட்டு பலகம்"
  },
  "dry-run-preventer": {
    en: "Dry Run Preventer",
    ta: "ட்ரை ரன் பாதுகாப்பி"
  },
  "Single Phase Preventer": {
    en: "Single Phase Preventer",
    ta: "ஒற்றைக்கட்ட பாதுகாப்பி"
  },
  "digital-starter": {
    en: "Digital Starter",
    ta: "டிஜிட்டல் ஸ்டார்டர்"
  },
  "gsm-mobile-preventer": {
    en: "Gsm Mobile Preventer",
    ta: "GSM மொபைல் பாதுகாப்பி"
  },
  "Ac-drive": {
    en: "Protection Meter",
    ta: "பாதுகாப்பு மீட்டர்"
  }
};

const productTranslations = {
  "Single-Phase-Control-panel": {
    en: {
      name: "Single-Phase Control Panel",
      description: "Single-phase dry run panel with water level controller."
    },
    ta: {
      name: "ஒற்றைக்கட்ட கட்டுப்பாட்டு பலகம்",
      description: "நீர்மட்ட கட்டுப்பாட்டுடன் செயல்படும் ஒற்றைக்கட்ட ட்ரை ரன் பாதுகாப்பு பலகம்."
    }
  },
  "ABS single-Phase dry run panel": {
    en: {
      name: "ABS Single-Phase Openwell Panel",
      description: "Custom engineered panel with tailored relay logic, PLC integration, and instrumentation."
    },
    ta: {
      name: "ABS ஒற்றைக்கட்ட ஓபன்வெல் பலகம்",
      description: "தனிப்பயன் ரிலே லாஜிக், PLC ஒருங்கிணைப்பு மற்றும் கருவி அமைப்புகளுடன் வடிவமைக்கப்பட்ட பலகம்."
    }
  },
  "Three Phase Mobile Starter": {
    en: {
      name: "Three Phase Mobile Starter",
      description: "DC drive automation panel with speed control, overload protection, and soft-start support."
    },
    ta: {
      name: "மூன்றுக்கட்ட மொபைல் ஸ்டார்டர்",
      description: "வேக கட்டுப்பாடு, அதிகசுமை பாதுகாப்பு மற்றும் மென்மையான தொடக்க வசதியுடன் கூடிய தானியங்கி பலகம்."
    }
  },
  "1 HP Electric Control Panel": {
    en: {
      name: "1 HP Electric Control Panel",
      description: "Multi-stage pump sequencing and alarm panel for WTP operations and filtration units."
    },
    ta: {
      name: "1 HP மின்சார கட்டுப்பாட்டு பலகம்",
      description: "WTP செயல்பாடுகள் மற்றும் வடிகட்டி அமைப்புகளுக்கு பலஅடுக்கு பம்ப் கட்டுப்பாடு மற்றும் அலாரம் பலகம்."
    }
  },
  "Star Delta Starter Control Panel": {
    en: {
      name: "Star Delta Starter Control Panel",
      description: "Heavy-duty control for hydraulic systems with pressure monitoring and safety interlocks."
    },
    ta: {
      name: "ஸ்டார் டெல்டா ஸ்டார்டர் கட்டுப்பாட்டு பலகம்",
      description: "அழுத்த கண்காணிப்பும் பாதுகாப்பு இணைப்புகளும் கொண்ட ஹைட்ராலிக் அமைப்புகளுக்கான வலுவான கட்டுப்பாடு."
    }
  },
  "Submersible Pump Control Panel": {
    en: {
      name: "Submersible Pump Control Panel",
      description: "Heavy-duty control for hydraulic systems with pressure monitoring and safety interlocks."
    },
    ta: {
      name: "சப்மர்சிபிள் பம்ப் கட்டுப்பாட்டு பலகம்",
      description: "அழுத்த கண்காணிப்பு மற்றும் பாதுகாப்பு இணைப்புகளுடன் கூடிய வலுவான பம்ப் கட்டுப்பாட்டு பலகம்."
    }
  },
  "Open Well Submersible Control Panel": {
    en: {
      name: "Open Well Submersible Control Panel",
      description: "Heavy-duty control for hydraulic systems with pressure monitoring and safety interlocks."
    },
    ta: {
      name: "ஓபன் வெல் சப்மர்சிபிள் கட்டுப்பாட்டு பலகம்",
      description: "பாதுகாப்பான மற்றும் நிலையான செயல்பாட்டுக்கான அழுத்த கண்காணிப்பு வசதியுள்ள கட்டுப்பாட்டு பலகம்."
    }
  },
  "MCB Control Panel": {
    en: {
      name: "MCB Control Panel",
      description: "Heavy-duty control for hydraulic systems with pressure monitoring and safety interlocks."
    },
    ta: {
      name: "MCB கட்டுப்பாட்டு பலகம்",
      description: "அழுத்த கண்காணிப்பு மற்றும் பாதுகாப்பு இணைப்புகளுடன் கூடிய வலுவான MCB கட்டுப்பாட்டு பலகம்."
    }
  },
  "TEX-7DR Dry Run Preventer": {
    en: {
      name: "TEX-7DR Dry Run Preventer",
      description: "Efficient protection unit for dry run conditions in motor applications."
    },
    ta: {
      name: "TEX-7DR ட்ரை ரன் பாதுகாப்பி",
      description: "மோட்டார் பயன்பாடுகளில் நீரின்றி ஓடுதலைத் தடுக்க திறமையாக செயல்படும் பாதுகாப்பு கருவி."
    }
  },
  "Microcontroller Based Dry Run Preventer": {
    en: {
      name: "Microcontroller Based Dry Run Preventer",
      description: "Regenerative drive with energy recovery for cranes, hoists, and elevators."
    },
    ta: {
      name: "மைக்ரோகண்ட்ரோலர் அடிப்படையிலான ட்ரை ரன் பாதுகாப்பி",
      description: "துல்லியமான பாதுகாப்பு கட்டுப்பாட்டை வழங்கும் மேம்பட்ட மைக்ரோகண்ட்ரோலர் அடிப்படையிலான அமைப்பு."
    }
  },
  "Auto Start ASPU Single Phase Preventer": {
    en: {
      name: "Auto Start ASPU Single Phase Preventer",
      description: "Integrated PLC-based control panel for factory automation systems."
    },
    ta: {
      name: "ஆட்டோ ஸ்டார்ட் ASPU ஒற்றைக்கட்ட பாதுகாப்பி",
      description: "தொழிற்சாலை தானியக்க அமைப்புகளுக்கான ஒருங்கிணைந்த PLC அடிப்படையிலான கட்டுப்பாட்டு தீர்வு."
    }
  },
  "Single Phase Preventer-3 CT": {
    en: {
      name: "Single Phase Preventer-3 CT",
      description: "Ruggedized panel with timers, safety relays, and start-stop sequencing."
    },
    ta: {
      name: "ஒற்றைக்கட்ட பாதுகாப்பி - 3 CT",
      description: "டைமர்கள், பாதுகாப்பு ரிலே மற்றும் தொடக்கம்-நிறுத்த கட்டுப்பாட்டுடன் கூடிய உறுதியான பலகம்."
    }
  },
  "Digital Single Phase Electronic Starter": {
    en: {
      name: "Digital Single Phase Electronic Starter",
      description: "Panel-mounted voltmeter with high accuracy and backlit display."
    },
    ta: {
      name: "டிஜிட்டல் ஒற்றைக்கட்ட மின்சார ஸ்டார்டர்",
      description: "உயர் துல்லியமும் ஒளியுடன் கூடிய காட்சியுமுள்ள பலகை பொருத்தப்பட்ட டிஜிட்டல் ஸ்டார்டர்."
    }
  },
  "Three Phase DOL Starter": {
    en: {
      name: "Three Phase DOL Starter",
      description: "RPM sensing meter for rotating machinery and motor monitoring."
    },
    ta: {
      name: "மூன்றுக்கட்ட DOL ஸ்டார்டர்",
      description: "சுழலும் இயந்திரங்கள் மற்றும் மோட்டார் கண்காணிப்பிற்கான நம்பகமான DOL தொடக்க அமைப்பு."
    }
  },
  "GSM Mobile Preventer": {
    en: {
      name: "GSM Mobile Preventer",
      description: "AC controller for stable output and load balancing."
    },
    ta: {
      name: "GSM மொபைல் பாதுகாப்பி",
      description: "நிலையான அவுட்புட் மற்றும் சுமை சமநிலைக்கான GSM இணைப்பு கொண்ட கட்டுப்பாட்டு அமைப்பு."
    }
  },
  "Digital-Motor Protection Meter": {
    en: {
      name: "Digital Motor Protection Meter",
      description:
        "We are engaged in offering a high quality range of Digital Ammeter for our valued customers. Generally used to measure the current in Ampere (A) and mA, this product gives accurate and efficient results to the user. It is easy to use and is available to our valued customers at reasonably fair price in the market. Features: Easy to use, modern technology, high performance level."
    },
    ta: {
      name: "டிஜிட்டல் மோட்டார் பாதுகாப்பு மீட்டர்",
      description:
        "அம்பியர் மற்றும் மில்லி அம்பியர் அளவீட்டிற்காக பயன்படுத்தப்படும், துல்லியமான மற்றும் பயனளிக்கும் டிஜிட்டல் பாதுகாப்பு மீட்டர்."
    }
  }
};

const specLabelTranslations = {
  power: { en: "Power", ta: "திறன்" },
  voltage: { en: "Voltage", ta: "மின்னழுத்தம்" },
  material: { en: "Material", ta: "பொருள்" },
  features: { en: "Features", ta: "அம்சங்கள்" },
  phase: { en: "Phase", ta: "கட்டம்" },
  frequency: { en: "Frequency", ta: "அதிர்வெண்" },
  shape: { en: "Shape", ta: "வடிவம்" },
  brand: { en: "Brand", ta: "பிராண்ட்" },
  packingtype: { en: "Packing Type", ta: "பேக்கிங் வகை" },
  displaytype: { en: "Display Type", ta: "காட்சி வகை" },
  operatingvoltage: { en: "Operating Voltage", ta: "இயக்க மின்னழுத்தம்" },
  startertype: { en: "Starter Type", ta: "ஸ்டார்டர் வகை" },
  surfacetreatment: { en: "Surface Treatment", ta: "மேற்பரப்பு பூச்சு" },
  usageapplication: { en: "Usage/Application", ta: "பயன்பாடு" },
  modelnamenumber: { en: "Model Name/Number", ta: "மாடல் பெயர்/எண்" },
  powersource: { en: "Power Source", ta: "மின்வழங்கல்" },
  mountingtype: { en: "Mounting Type", ta: "பொருத்தும் வகை" },
  bodymaterial: { en: "Body Material", ta: "உடல் பொருள்" },
  digitdisplaysize: { en: "Digit Display Size", ta: "டிஸ்ப்ளே அளவு" },
  rating: { en: "Rating", ta: "திறன் அளவு" },
  protection: { en: "Protection", ta: "பாதுகாப்பு" },
  connectivity: { en: "Connectivity", ta: "இணைப்பு வசதி" },
  control: { en: "Control", ta: "கட்டுப்பாடு" },
  enclosure: { en: "Enclosure", ta: "என்க்ளோஷர்" }
};

const staticTranslations = {
  en: {
    meta: {
      languageName: "English",
      toggleLabel: "தமிழ்"
    },
    nav: {
      tagline: "Industrial Electrical Control Solutions",
      home: "Home",
      products: "Products & Services",
      viewAllCategories: "View All Categories",
      about: "About Us",
      photos: "Photos",
      contact: "Contact Us"
    },
    footer: {
      description: "Manufacturer of industrial control panels, motor controllers, drives, and automation solutions.",
      contact: "Contact",
      phone: "Phone",
      email: "E-Mail",
      businessHours: "Business Hours",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      sunday: "Sunday: Closed",
      rights: "All rights reserved."
    },
    common: {
      product: "Product",
      service: "Service",
      category: "Category",
      contactUs: "Contact Us",
      hideContactUs: "Hide Contact Us",
      askPrice: "Ask Price",
      viewDetails: "View Details",
      backToProducts: "Back to products",
      phone: "Phone",
      email: "Email",
      location: "Location",
      copy: "Copy",
      copied: "Copied",
      specification: "Specification",
      value: "Value"
    },
    home: {
      heroTitle: "Drip Irrigation Control Panel",
      heroParagraphOne:
        "Integrated drip irrigation systems with advanced motor control panels designed for precise water flow management, energy efficiency, and automated farm operations.",
      heroParagraphTwo:
        "Our systems connect pumps, motors, valves, and control panels into one dependable automation layer, enabling automatic motor start and stop, irrigation zone valve control, sensor-based decisions from soil moisture and water level inputs, built-in dry run and overload protection, and remote monitoring with mobile-ready control.",
      exploreSolutions: "Explore Solutions",
      talkToTeam: "Talk to Our Team",
      heroBullets: [
        "Automatic motor start/stop",
        "Valve control for irrigation zones",
        "Sensor-based irrigation logic",
        "Remote monitoring and control"
      ],
      heroSpecChips: [
        "Motor Protection",
        "Sensor Based Control",
        "Energy Efficient",
        "Remote Monitoring"
      ],
      heroFeatureCards: [
        { title: "Pump Control", detail: "Smart relay sequencing" },
        { title: "Water Level Sensor", detail: "Tank-aware automation" },
        { title: "Dry Run Protection", detail: "Motor safety logic" },
        { title: "Auto Start/Stop", detail: "Scheduled field cycles" }
      ],
      premiumSeries: "Premium Series",
      smartPanel: "Smart Irrigation Control Panel",
      liveReady: "Live Ready",
      systemOnline: "System Online",
      motorLoad: "Motor Load",
      stable: "Stable",
      pump: "Pump",
      auto: "Auto",
      water: "Water",
      levelOk: "Level OK",
      remoteMonitoring: "Remote Monitoring",
      remoteMonitoringText: "Field-ready automation with sensor response and protected motor cycling.",
      exploreCategoriesTitle: "Explore Categories",
      exploreCategoriesSubtitle: "Quick access to core industrial automation categories.",
      categoryShowcaseTitle: "Category Photo Showcase",
      categoryShowcaseSubtitle: "Each category now shows its own matching product photos, rotating every 8 seconds.",
      categorySummarySingle: "Category spotlight with product visuals matched to this range.",
      categorySummaryMany: "{count} product variants grouped under this category.",
      itemCount: "{count} items",
      itemCountOne: "1 item",
      autoSlide: "8 sec auto slide",
      viewCategory: "View Category",
      getQuote: "Get Quote",
      whyChooseTitle: "Why Choose Texro Automation for Smart Irrigation",
      whyChooseItems: [
        {
          title: "Smart irrigation control panels",
          description:
            "Engineered control panels for drip irrigation systems, including single-phase, three-phase, and submersible pump panels for precise water flow management."
        },
        {
          title: "Advanced motor protection systems",
          description:
            "Integrated dry run preventers, overload protection, and voltage safety systems to protect irrigation motors and ensure uninterrupted farming operations."
        },
        {
          title: "Automated irrigation control",
          description:
            "GSM-based mobile control and digital starters enable farmers to monitor and operate irrigation systems remotely with ease and reliability."
        },
        {
          title: "High-efficiency irrigation solutions",
          description:
            "Energy-efficient drives and durable components designed for long service life, reducing water wastage and improving crop productivity."
        }
      ],
      aboutTitle: "About Us",
      aboutText:
        "Texro Automation is a Coimbatore-based manufacturer of industrial control panels, drives, and automation solutions. We design, engineer, and deliver systems built for uptime, safety, and performance in demanding environments.",
      contactTitle: "Contact",
      address: "Address"
    },
    about: {
      intro:
        'Established in the year 2007 at Coimbatore, Tamil Nadu, we "Texro Automation" are a Sole Proprietorship based firm, engaged as the foremost Manufacturer of Dry Run Preventer, Control Panel,etc. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this we have gained a huge clients base in the market.',
      album: "Album",
      factsheet: [
        {
          title: "Basic Information",
          rows: [
            { label: "Nature of Business", value: "Manufacturer" },
            {
              label: "Additional Business",
              value: ["Factory / Manufacturing", "Wholesale Business", "Recipient of Goods or Services", "Works Contract"]
            },
            { label: "Company CEO", value: "T. Senthil Kumar" },
            { label: "Total Number of Employees", value: "Upto 10 People" },
            { label: "GST Registration Date", value: "01-07-2017" },
            { label: "Legal Status of Firm", value: "Proprietorship" },
            { label: "Annual Turnover", value: "0 - 40 L" },
            { label: "GST Partner Name", value: "Thirumalaisamy Senthilkumar" }
          ]
        },
        {
          title: "Company USP",
          rows: [{ label: "Quality Measures / Testing Facilities", value: "Yes" }]
        },
        {
          title: "Statutory Profile",
          rows: [
            { label: "Banker", value: ["SYNDICATE BANK", "SYNDICATE BANK", "Canara Bank"] },
            { label: "GST No.", value: "33BOVPS1094C1ZP" }
          ]
        },
        {
          title: "Packaging/Payment and Shipment Details",
          rows: [
            { label: "Payment Mode", value: ["Cash", "Cheque", "Credit Card", "Online", "RTGS"] },
            { label: "Shipment Mode", value: "By Road" }
          ]
        }
      ],
      infrastructureTitle: "Our Infrastructure",
      infrastructureText:
        "We are equipped with a modern building which is segmented into various departments for execution of different tasks in a systematic manner. Our infrastructure includes all up-to-date machinery which possesses hassle free operations. It helps us to saves a lot of time and reduces labor costing as well. Our experienced team supervised and heads our units and make certain that no overlap should take place in order to achieve set targets in time.",
      teamTitle: "Our Team",
      teamText:
        "Our well qualified personnel enable us to efficiently meet the variegated requirement of our valued customers. These professionals are dedicated to provide quality-assured products to the clients as per their needs. Due to the incredible support of our teammates, we are able to earn an enviable position among the clients. Our wide distribution circuitry profile helps us to ensure timely delivery of consignments to the clients.",
      qualityTitle: "Quality Assurance",
      qualityText:
        "It is our sole objective to offer quality proven products to clients at competitive prices. Our product range is manufactured in compliance with set industrial guidelines and meets world class standards. We use finest quality materials in our manufacturing process, which are procured from certified and trusted market vendors. The quality controllers of our company are dedicated to deliver only defect free product range in the market.",
      visionTitle: "Our Vision",
      visionText:
        "Texro electronics,Coimbatore shall maintain and providing quality products and services in the fields of submersible control panel.",
      missionTitle: "Our Mission",
      missionPoints: ["Customer Satisfaction", "Innovative and automated solution", "Planing,testing and Delivering of products"],
      brandsTitle: "Brands We Deal In",
      brandsText: "We Deal with brands like Maxbe.",
      whyUsTitle: "Why Us?",
      whyUsIntro: "By providing quality product and having experienced knowledge of the market, we have been able to attain huge client base.",
      whyUsLead: "Factors responsible for our enormous success are as follows:",
      whyUsPoints: [
        "In-depth industry knowledge.",
        "Timely completion of orders.",
        "Transparent business dealings.",
        "Qualified and trained team of professionals.",
        "Market leading prices"
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch for pricing, specifications, and consultations."
    },
    photos: {
      title: "Photos",
      subtitle: "Gallery of Texro Automation products and panels.",
      quoteButton: "Get Best Quote",
      contactCompany: "Contact Texro Automation",
      locationValue: "Coimbatore, Tamil Nadu",
      photoTitles: {
        "/images/INDIA MART/img_2027.jpg": "Three Phase Mobile Starter",
        "/images/INDIA MART/1 HP Electric Control panel.png": "1 HP Electric Control Panel",
        "/images/INDIA MART/Star-Delta Starter.jpg": "Star Delta Starter Control Panel",
        "/images/INDIA MART/Submerrisiblepump.jpg": "Submersible Pump Control Panel",
        "/images/INDIA MART/open weLL Submerisible Mo.jpg": "Open Well Submersible Control Panel",
        "/images/INDIA MART/MCBControll.jpg": "MCB Control Panel",
        "/images/INDIA MART/IMG dry run preventer .jpg": "TEX-7DR Dry Run Preventer",
        "/images/INDIA MART/IMG-20180806-WA0009.jpg": "Microcontroller Based Dry Run Preventer",
        "/images/INDIA MART/IMG-20190221-WA0073.jpg": "Auto Start ASPU Single Phase Preventer",
        "/images/INDIA MART/IMG-20180809-WA0017.jpg": "Single Phase Preventer-3 CT",
        "/images/INDIA MART/Digital Single Phase Starter.jpg": "Digital Single Phase Electronic Starter",
        "/images/INDIA MART/ThreePhaseDOLStarter.jpg": "Three Phase DOL Starter",
        "/images/INDIA MART/GSM Mobile Preventer.jpg": "GSM Mobile Preventer",
        "/images/INDIA MART/Digital-Motor Protection Meter.jpg": "Digital Motor Protection Meter"
      }
    },
    productsPage: {
      title: "Products & Services",
      subtitle: "Browse industrial product lines and request pricing.",
      categories: "Product Categories",
      productsAvailable: "{count} products available"
    },
    productDetails: {
      notFound: "Product not found.",
      imageComingSoon: "Image coming soon",
      overview: "Overview",
      specifications: "Specifications",
      productSpecifications: "Product Specifications",
      searchHelp: "Search, compare, and copy values from the table below.",
      searchSpecifications: "Search specifications",
      searchSpecsPlaceholder: "Search specs",
      clear: "Clear",
      noSearchMatch: "No specifications match your search.",
      availableOnRequest: "Specifications are available on request.",
      viewLess: "View Less",
      viewMore: "View More",
      hiddenForServices: "Specifications are not shown for services.",
      locationValue: "Coimbatore, Tamil Nadu"
    },
    inquiry: {
      title: "Get Best Price",
      subtitle: "Share your requirements to get a fast quotation.",
      name: "Name",
      phone: "Phone",
      email: "Email",
      quantity: "Quantity",
      message: "Message",
      submit: "Submit Inquiry",
      success: "Inquiry submitted. Our team will contact you shortly.",
      failure: "Submission failed."
    },
    notFound: {
      title: "Page Not Found",
      subtitle: "The page you are looking for does not exist.",
      backHome: "Back to Home"
    }
  },
  ta: {
    meta: {
      languageName: "தமிழ்",
      toggleLabel: "English"
    },
    nav: {
      tagline: "தொழில்துறை மின்கட்டுப்பாட்டு தீர்வுகள்",
      home: "முகப்பு",
      products: "தயாரிப்புகள் மற்றும் சேவைகள்",
      viewAllCategories: "அனைத்து பிரிவுகளையும் காண்க",
      about: "எங்களை பற்றி",
      photos: "புகைப்படங்கள்",
      contact: "தொடர்பு கொள்ள"
    },
    footer: {
      description: "தொழில்துறை கட்டுப்பாட்டு பலகைகள், மோட்டார் கட்டுப்படுத்திகள், டிரைவ்கள் மற்றும் தானியக்க தீர்வுகளின் உற்பத்தியாளர்.",
      contact: "தொடர்பு",
      phone: "தொலைபேசி",
      email: "மின்னஞ்சல்",
      businessHours: "வணிக நேரம்",
      hours: "திங்கள் - சனி: காலை 9:30 - மாலை 6:30",
      sunday: "ஞாயிறு: விடுமுறை",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    common: {
      product: "தயாரிப்பு",
      service: "சேவை",
      category: "பிரிவு",
      contactUs: "தொடர்பு கொள்ள",
      hideContactUs: "தொடர்பு விவரத்தை மறை",
      askPrice: "விலை கேட்க",
      viewDetails: "விவரங்களை காண்க",
      backToProducts: "தயாரிப்புகளுக்கு திரும்ப",
      phone: "தொலைபேசி",
      email: "மின்னஞ்சல்",
      location: "இடம்",
      copy: "நகலெடு",
      copied: "நகலெடுக்கப்பட்டது",
      specification: "விவரம்",
      value: "மதிப்பு"
    },
    home: {
      heroTitle: "டிரிப் பாசன கட்டுப்பாட்டு பலகம்",
      heroParagraphOne:
        "துல்லியமான நீர்பாசன ஓட்ட மேலாண்மை, ஆற்றல் திறன் மற்றும் தானியக்க பண்ணை செயல்பாடுகளுக்காக வடிவமைக்கப்பட்ட மேம்பட்ட மோட்டார் கட்டுப்பாட்டு பலகைகளுடன் ஒருங்கிணைந்த டிரிப் பாசன அமைப்புகள்.",
      heroParagraphTwo:
        "எங்கள் அமைப்புகள் பம்புகள், மோட்டார்கள், வால்வுகள் மற்றும் கட்டுப்பாட்டு பலகைகளை ஒரே நம்பகமான தானியக்க அடுக்காக இணைக்கின்றன. இதனால் தானியங்கி மோட்டார் தொடக்கம் மற்றும் நிறுத்தம், பாசன மண்டல வால்வு கட்டுப்பாடு, மண் ஈரப்பதம் மற்றும் நீர்மட்ட உள்ளீடுகளை அடிப்படையாக கொண்ட சென்சார் முடிவுகள், உட்புற ட்ரை ரன் மற்றும் ஓவர்லோடு பாதுகாப்பு, மேலும் மொபைல் மூலம் கண்காணிப்பு மற்றும் கட்டுப்பாடு சாத்தியமாகிறது.",
      exploreSolutions: "தீர்வுகளை காண்க",
      talkToTeam: "எங்கள் அணியுடன் பேசுங்கள்",
      heroBullets: [
        "தானியங்கி மோட்டார் தொடக்கம்/நிறுத்தம்",
        "பாசன மண்டலங்களுக்கான வால்வு கட்டுப்பாடு",
        "சென்சார் அடிப்படையிலான பாசன லாஜிக்",
        "தொலைநிலை கண்காணிப்பு மற்றும் கட்டுப்பாடு"
      ],
      heroSpecChips: ["மோட்டார் பாதுகாப்பு", "சென்சார் அடிப்படையிலான கட்டுப்பாடு", "ஆற்றல் சிக்கனம்", "தொலைநிலை கண்காணிப்பு"],
      heroFeatureCards: [
        { title: "பம்ப் கட்டுப்பாடு", detail: "ஸ்மார்ட் ரிலே வரிசைமுறை" },
        { title: "நீர்மட்ட சென்சார்", detail: "டேங்க் நிலையை உணரும் தானியக்கம்" },
        { title: "ட்ரை ரன் பாதுகாப்பு", detail: "மோட்டார் பாதுகாப்பு லாஜிக்" },
        { title: "ஆட்டோ ஸ்டார்ட்/ஸ்டாப்", detail: "திட்டமிட்ட புல வேலை சுழற்சிகள்" }
      ],
      premiumSeries: "பிரீமியம் தொடர்",
      smartPanel: "ஸ்மார்ட் பாசன கட்டுப்பாட்டு பலகம்",
      liveReady: "உடனடி பயன்பாட்டுக்கு தயாராக",
      systemOnline: "அமைப்பு செயல்பாட்டில்",
      motorLoad: "மோட்டார் சுமை",
      stable: "நிலையாக உள்ளது",
      pump: "பம்ப்",
      auto: "ஆட்டோ",
      water: "நீர்",
      levelOk: "அளவு சரி",
      remoteMonitoring: "தொலைநிலை கண்காணிப்பு",
      remoteMonitoringText: "சென்சார் பதில் மற்றும் பாதுகாப்பான மோட்டார் சுழற்சியுடன் புலப் பயன்பாட்டுக்கான தானியக்கம்.",
      exploreCategoriesTitle: "பிரிவுகளை ஆராயுங்கள்",
      exploreCategoriesSubtitle: "முக்கிய தொழில்துறை தானியக்கப் பிரிவுகளுக்கான விரைவான அணுகல்.",
      categoryShowcaseTitle: "பிரிவு புகைப்பட காட்சி",
      categoryShowcaseSubtitle: "ஒவ்வொரு பிரிவும் அதற்கான பொருத்தமான தயாரிப்பு புகைப்படங்களை 8 வினாடி இடைவெளியில் தானாக மாற்றிக் காட்டும்.",
      categorySummarySingle: "இந்த பிரிவுக்கே பொருந்தும் தயாரிப்பு காட்சியுடன் சிறப்பம்சம்.",
      categorySummaryMany: "இந்த பிரிவில் {count} தயாரிப்பு வகைகள் உள்ளன.",
      itemCount: "{count} பொருட்கள்",
      itemCountOne: "1 பொருள்",
      autoSlide: "8 வினாடி தானியங்கு ஸ்லைடு",
      viewCategory: "பிரிவைக் காண்க",
      getQuote: "மேற்கோள் பெறுக",
      whyChooseTitle: "ஸ்மார்ட் பாசனத்திற்காக Texro Automation ஐ ஏன் தேர்வு செய்ய வேண்டும்",
      whyChooseItems: [
        {
          title: "ஸ்மார்ட் பாசன கட்டுப்பாட்டு பலகைகள்",
          description: "ஒற்றைக்கட்ட, மூன்றுக்கட்ட மற்றும் சப்மர்சிபிள் பம்ப் பலகைகள் உட்பட துல்லியமான நீரோட்ட மேலாண்மைக்கான பாசன கட்டுப்பாட்டு பலகைகள்."
        },
        {
          title: "மேம்பட்ட மோட்டார் பாதுகாப்பு அமைப்புகள்",
          description: "ட்ரை ரன் பாதுகாப்பு, ஓவர்லோடு பாதுகாப்பு மற்றும் மின்னழுத்த பாதுகாப்பு மூலம் பாசன மோட்டார்களை பாதுகாக்கும் ஒருங்கிணைந்த தீர்வுகள்."
        },
        {
          title: "தானியங்கி பாசன கட்டுப்பாடு",
          description: "GSM அடிப்படையிலான மொபைல் கட்டுப்பாடு மற்றும் டிஜிட்டல் ஸ்டார்டர்களால் விவசாயிகள் தங்கள் பாசன அமைப்புகளை எளிதாக தொலைநிலையிலிருந்து இயக்கலாம்."
        },
        {
          title: "உயர் திறன் கொண்ட பாசன தீர்வுகள்",
          description: "நீண்ட ஆயுளும் ஆற்றல் சிக்கனமும் தரும் கூறுகள் மூலம் நீர் வீணாவதை குறைத்து பயிர் உற்பத்தியை மேம்படுத்தும் தீர்வுகள்."
        }
      ],
      aboutTitle: "எங்களை பற்றி",
      aboutText:
        "Texro Automation என்பது கோயம்புத்தூரை அடிப்படையாகக் கொண்ட தொழில்துறை கட்டுப்பாட்டு பலகைகள், டிரைவ்கள் மற்றும் தானியக்க தீர்வுகள் உற்பத்தியாளர். கடினமான செயல்பாட்டு சூழல்களிலும் செயல்நேரம், பாதுகாப்பு மற்றும் செயல்திறனை முன்னிறுத்தி அமைப்புகளை வடிவமைத்து வழங்குகிறோம்.",
      contactTitle: "தொடர்பு",
      address: "முகவரி"
    },
    about: {
      intro:
        '2007 ஆம் ஆண்டு கோயம்புத்தூர், தமிழ்நாட்டில் நிறுவப்பட்ட "Texro Automation", ட்ரை ரன் பாதுகாப்பி, கட்டுப்பாட்டு பலகம் உள்ளிட்ட தயாரிப்புகளின் முன்னணி உற்பத்தியாளராக செயல்படும் தனிநபர் உரிம உரிமையுடைய நிறுவனம் ஆகும். உயர்தரமும் மலிவான விலையும் காரணமாக எங்கள் தயாரிப்புகளுக்கு அதிகமான தேவை உள்ளது. வாடிக்கையாளர்களுக்கு காலமுறைப்படி வழங்கும் நம்பிக்கையால் சந்தையில் பெரிய வாடிக்கையாளர் அடிப்படை பெற்றுள்ளோம்.',
      album: "ஆல்பம்",
      factsheet: [
        {
          title: "அடிப்படை தகவல்",
          rows: [
            { label: "வணிகத்தின் தன்மை", value: "உற்பத்தியாளர்" },
            {
              label: "கூடுதல் வணிகம்",
              value: ["தொழிற்சாலை / உற்பத்தி", "மொத்த வணிகம்", "பொருட்கள் அல்லது சேவைகளின் பெறுபவர்", "பணிக்கான ஒப்பந்தம்"]
            },
            { label: "நிறுவன CEO", value: "T. Senthil Kumar" },
            { label: "மொத்த பணியாளர்கள்", value: "10 பேர் வரை" },
            { label: "GST பதிவு தேதி", value: "01-07-2017" },
            { label: "நிறுவனத்தின் சட்ட நிலை", value: "தனிநபர் உரிமம்" },
            { label: "ஆண்டு வருவாய்", value: "0 - 40 லட்சம்" },
            { label: "GST கூட்டாளர் பெயர்", value: "Thirumalaisamy Senthilkumar" }
          ]
        },
        {
          title: "நிறுவன சிறப்பம்சம்",
          rows: [{ label: "தர அளவீடு / சோதனை வசதிகள்", value: "ஆம்" }]
        },
        {
          title: "சட்டப்பூர்வ சுயவிவரம்",
          rows: [
            { label: "வங்கி", value: ["SYNDICATE BANK", "SYNDICATE BANK", "Canara Bank"] },
            { label: "GST எண்", value: "33BOVPS1094C1ZP" }
          ]
        },
        {
          title: "பேக்கிங்/கட்டணம் மற்றும் கப்பல் விவரங்கள்",
          rows: [
            { label: "கட்டண முறை", value: ["பணம்", "செக்", "கிரெடிட் கார்டு", "ஆன்லைன்", "RTGS"] },
            { label: "கப்பல் முறை", value: "சாலை வழியாக" }
          ]
        }
      ],
      infrastructureTitle: "எங்கள் உட்கட்டமைப்பு",
      infrastructureText:
        "எங்கள் உட்கட்டமைப்பு பல துறைகளாக பிரிக்கப்பட்ட நவீன கட்டிடத்தைக் கொண்டுள்ளது. புதுப்பிக்கப்பட்ட இயந்திரங்களால் எங்கள் உற்பத்தி செயல்முறைகள் சிரமமின்றி நடைபெறுகின்றன. இது நேரச் செலவையும் தொழிலாளர் செலவையும் குறைக்க உதவுகிறது. அனுபவமிக்க குழு ஒவ்வொரு பிரிவையும் கண்காணித்து, நிர்ணயிக்கப்பட்ட இலக்குகளை காலத்திற்கு ஏற்றபடி நிறைவேற்றுகிறது.",
      teamTitle: "எங்கள் அணி",
      teamText:
        "எங்கள் தகுதியான பணியாளர்கள் வாடிக்கையாளர்களின் பல்வகை தேவைகளை திறம்பட பூர்த்தி செய்கின்றனர். தரத்தை உறுதிப்படுத்திய தயாரிப்புகளை வாடிக்கையாளர்களின் தேவைக்கு ஏற்ப வழங்க அவர்கள் அர்ப்பணிப்புடன் செயல்படுகிறார்கள். எங்கள் அணியின் உறுதியான ஆதரவால் வாடிக்கையாளர்களிடம் சிறந்த நிலையை பெற்றிருக்கிறோம்.",
      qualityTitle: "தர உத்தரவாதம்",
      qualityText:
        "போட்டித்திறன் கொண்ட விலையில் தரமான தயாரிப்புகளை வழங்குவது எங்கள் முதன்மை நோக்கம். தொழில்துறை தரநிலைகளுக்கு இணங்க உலகத் தரத்திற்கேற்ப உற்பத்தி செய்கிறோம். சான்றளிக்கப்பட்ட நம்பகமான விற்பனையாளர்களிடமிருந்து பெறப்படும் உயர்தரப் பொருட்களையே பயன்படுத்துகிறோம்.",
      visionTitle: "எங்கள் பார்வை",
      visionText:
        "கோயம்புத்தூரிலுள்ள Texro Electronics, சப்மர்சிபிள் கட்டுப்பாட்டு பலகை துறையில் தரமான தயாரிப்புகளையும் சேவைகளையும் தொடர்ந்து வழங்கும் நிறுவனமாக நிலைத்திருக்க வேண்டும்.",
      missionTitle: "எங்கள் பணி",
      missionPoints: ["வாடிக்கையாளர் திருப்தி", "புதுமையான தானியக்க தீர்வுகள்", "திட்டமிடல், சோதனை மற்றும் தயாரிப்பு வழங்கல்"],
      brandsTitle: "நாங்கள் கையாளும் பிராண்டுகள்",
      brandsText: "Maxbe போன்ற பிராண்டுகளுடன் நாங்கள் பணிபுரிகிறோம்.",
      whyUsTitle: "ஏன் நாங்கள்?",
      whyUsIntro: "தரமான தயாரிப்புகளையும் சந்தை அனுபவத்தையும் வழங்குவதன் மூலம் பெரிய வாடிக்கையாளர் அடிப்படை பெற்றுள்ளோம்.",
      whyUsLead: "எங்கள் வெற்றிக்கு காரணமான அம்சங்கள்:",
      whyUsPoints: [
        "ஆழமான தொழில் அறிவு.",
        "காலத்திற்கு ஏற்ற ஆர்டர் நிறைவு.",
        "வெளிப்படையான வணிக நடைமுறை.",
        "தகுதி மற்றும் பயிற்சி பெற்ற நிபுணர் அணி.",
        "சந்தை முன்னணி விலைகள்"
      ]
    },
    contact: {
      title: "தொடர்பு கொள்ள",
      subtitle: "விலை, விவரக்குறிப்புகள் மற்றும் ஆலோசனைகளுக்காக எங்களை தொடர்பு கொள்ளுங்கள்."
    },
    photos: {
      title: "புகைப்படங்கள்",
      subtitle: "Texro Automation தயாரிப்புகள் மற்றும் பலகைகளின் புகைப்படத் தொகுப்பு.",
      quoteButton: "சிறந்த விலை பெறுங்கள்",
      contactCompany: "Texro Automation ஐ தொடர்பு கொள்ளுங்கள்",
      locationValue: "கோயம்புத்தூர், தமிழ்நாடு",
      photoTitles: {
        "/images/INDIA MART/img_2027.jpg": "மூன்றுக்கட்ட மொபைல் ஸ்டார்டர்",
        "/images/INDIA MART/1 HP Electric Control panel.png": "1 HP மின்சார கட்டுப்பாட்டு பலகம்",
        "/images/INDIA MART/Star-Delta Starter.jpg": "ஸ்டார் டெல்டா ஸ்டார்டர் கட்டுப்பாட்டு பலகம்",
        "/images/INDIA MART/Submerrisiblepump.jpg": "சப்மர்சிபிள் பம்ப் கட்டுப்பாட்டு பலகம்",
        "/images/INDIA MART/open weLL Submerisible Mo.jpg": "ஓபன் வெல் சப்மர்சிபிள் கட்டுப்பாட்டு பலகம்",
        "/images/INDIA MART/MCBControll.jpg": "MCB கட்டுப்பாட்டு பலகம்",
        "/images/INDIA MART/IMG dry run preventer .jpg": "TEX-7DR ட்ரை ரன் பாதுகாப்பி",
        "/images/INDIA MART/IMG-20180806-WA0009.jpg": "மைக்ரோகண்ட்ரோலர் அடிப்படையிலான ட்ரை ரன் பாதுகாப்பி",
        "/images/INDIA MART/IMG-20190221-WA0073.jpg": "ஆட்டோ ஸ்டார்ட் ASPU ஒற்றைக்கட்ட பாதுகாப்பி",
        "/images/INDIA MART/IMG-20180809-WA0017.jpg": "ஒற்றைக்கட்ட பாதுகாப்பி - 3 CT",
        "/images/INDIA MART/Digital Single Phase Starter.jpg": "டிஜிட்டல் ஒற்றைக்கட்ட மின்சார ஸ்டார்டர்",
        "/images/INDIA MART/ThreePhaseDOLStarter.jpg": "மூன்றுக்கட்ட DOL ஸ்டார்டர்",
        "/images/INDIA MART/GSM Mobile Preventer.jpg": "GSM மொபைல் பாதுகாப்பி",
        "/images/INDIA MART/Digital-Motor Protection Meter.jpg": "டிஜிட்டல் மோட்டார் பாதுகாப்பு மீட்டர்"
      }
    },
    productsPage: {
      title: "தயாரிப்புகள் மற்றும் சேவைகள்",
      subtitle: "தொழில்துறை தயாரிப்பு வரிசைகளைப் பார்வையிட்டு விலை கோரிக்கை அனுப்புங்கள்.",
      categories: "தயாரிப்பு பிரிவுகள்",
      productsAvailable: "{count} தயாரிப்புகள் கிடைக்கும்"
    },
    productDetails: {
      notFound: "தயாரிப்பு கிடைக்கவில்லை.",
      imageComingSoon: "படம் விரைவில் சேர்க்கப்படும்",
      overview: "சுருக்கம்",
      specifications: "விவரக்குறிப்புகள்",
      productSpecifications: "தயாரிப்பு விவரக்குறிப்புகள்",
      searchHelp: "கீழே உள்ள அட்டவணையில் தேடி, ஒப்பிட்டு, மதிப்புகளை நகலெடுக்கலாம்.",
      searchSpecifications: "விவரக்குறிப்புகளை தேடுங்கள்",
      searchSpecsPlaceholder: "விவரக்குறிப்புகளை தேடுங்கள்",
      clear: "நீக்கு",
      noSearchMatch: "உங்கள் தேடலுக்கு பொருந்தும் விவரக்குறிப்புகள் இல்லை.",
      availableOnRequest: "விவரக்குறிப்புகள் கோரிக்கைக்கு ஏற்ப வழங்கப்படும்.",
      viewLess: "குறைவாக காண்க",
      viewMore: "மேலும் காண்க",
      hiddenForServices: "சேவைகளுக்கான விவரக்குறிப்புகள் காட்டப்படவில்லை.",
      locationValue: "கோயம்புத்தூர், தமிழ்நாடு"
    },
    inquiry: {
      title: "சிறந்த விலை பெறுங்கள்",
      subtitle: "விரைவான மேற்கோள் பெற உங்கள் தேவைகளை பகிருங்கள்.",
      name: "பெயர்",
      phone: "தொலைபேசி",
      email: "மின்னஞ்சல்",
      quantity: "அளவு",
      message: "செய்தி",
      submit: "விசாரணையை அனுப்பு",
      success: "விசாரணை அனுப்பப்பட்டது. எங்கள் அணி விரைவில் உங்களை தொடர்பு கொள்கிறது.",
      failure: "அனுப்புதல் தோல்வியுற்றது."
    },
    notFound: {
      title: "பக்கம் கிடைக்கவில்லை",
      subtitle: "நீங்கள் தேடும் பக்கம் இல்லை.",
      backHome: "முகப்புக்கு திரும்ப"
    }
  }
};

function getValueByPath(source, path) {
  return path.split(".").reduce((accumulator, segment) => accumulator?.[segment], source);
}

function normalizeKey(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

export function getTranslations(language) {
  return staticTranslations[language] ?? staticTranslations.en;
}

export function getText(language, path, fallback = "") {
  const value = getValueByPath(getTranslations(language), path);
  return value ?? fallback;
}

export function formatMessage(template, values = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ""));
}

export function getCategoryText(language, category) {
  const key = typeof category === "string" ? category : category?.slug ?? category?.category;
  return categoryTranslations[key]?.[language] ?? categoryTranslations[key]?.en ?? key ?? "";
}

function resolveProductKey(product) {
  return product?.slug ?? product?.id ?? product?.name ?? "";
}

export function getProductContent(language, product = {}) {
  const key = resolveProductKey(product);
  const entry = productTranslations[key];
  const fallbackName = product.name ?? "";
  const fallbackDescription = product.description ?? "";

  if (!entry) {
    return {
      name: fallbackName,
      description: fallbackDescription
    };
  }

  return {
    name: entry[language]?.name ?? entry.en?.name ?? fallbackName,
    description: entry[language]?.description ?? entry.en?.description ?? fallbackDescription
  };
}

export function getPhotoTitle(language, src, fallback) {
  return getTranslations(language).photos.photoTitles[src] ?? fallback;
}

export function getSpecLabel(language, label) {
  const key = normalizeKey(label);
  return specLabelTranslations[key]?.[language] ?? specLabelTranslations[key]?.en ?? label;
}
