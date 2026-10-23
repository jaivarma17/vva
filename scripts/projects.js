// Studio VVA â€” project data + index/modal behaviour
// Edit the objects below to add, remove or update projects.
// status: "built" or "concept" â€” shown as a small badge on the card and in the modal.
// services: toggle which service tags show on the card/modal â€” set any of these
//   true/false per project: architecture, landscape, interiorDesign, designBuild, masterPlan.
// facts: short spec lines shown on the card and in the modal.
// short: one or two lines, clamped to 2 lines on the index card.
// lede: the large intro line at the top of the case study.
// copy: an array of paragraphs for the case-study body.
// gallery: extra images shown below the case-study copy (optional).

var projects = [
  {
    id: "my-eye-hospital",
    title: "My Eye Hospital & Wellness Centre",
    location: "Nuvem, Goa",
    category: "commercial",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/my-eye-hospital/001.jpg",
    facts: ["90 bed hospital", "1,00,000 sft, 2.5 acre", "Architecture & Interiors", "Client: Dr Gaonkar"],
    short: "A wellness-led hospital campus planned around courtyard light and cross ventilation.",
    lede: "A 90-bed eye hospital and wellness centre where the courtyard, not the corridor, organises the plan.",
    gallery: [
      "assets/img/projects/ppt-sourced/my-eye-hospital/002.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/003.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/004.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/005.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/006.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/007.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/008.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/009.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/010.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/011.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/012.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/013.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/014.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/015.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/016.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/017.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/018.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/019.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/020.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/021.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/022.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/023.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/024.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/025.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/026.jpg",
      "assets/img/projects/ppt-sourced/my-eye-hospital/027.jpg",
    ],
    copy: [
      "The brief called for a hospital that did not read as one. Patient wards, consulting suites and recovery gardens are arranged around a sequence of internal courtyards, so daylight and air move through the building rather than around it.",
      "Passive cooling and daylighting reduce the load on mechanical systems across the 2.5-acre site, in keeping with the studio's long-standing focus on wellness architecture.",
      "Interiors carry the same calm through to material choice â€” stone, timber and soft, indirect light replace the clinical palette usually associated with hospital design."
    ]
  },
  {
    id: "golf-academy-aamby",
    title: "Golf Academy & Club",
    location: "Aamby Valley, Maharashtra",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/golf-academy-aamby/001.jpg",
    facts: ["35,000 sft", "Architecture & Interiors", "Client: Sahara India"],
    short: "A golf academy and clubhouse set into the folds of the Aamby Valley landscape.",
    lede: "A clubhouse and teaching academy that steps down the valley slope instead of levelling it.",
    gallery: [
      "assets/img/projects/ppt-sourced/golf-academy-aamby/002.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/003.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/004.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/005.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/006.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/007.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/008.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/009.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/010.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/011.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/012.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/013.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/014.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/015.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/016.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/017.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/018.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/019.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/020.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/021.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/022.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/023.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/024.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/025.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/026.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/027.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/028.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/029.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/030.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/031.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/032.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/033.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/034.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/035.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/036.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/037.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/038.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/039.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-aamby/040.jpg",
    ],
    copy: [
      "The building follows the natural grade of the site, with the academy, pro shop and dining terrace stepping down toward the course rather than sitting on a flattened plinth.",
      "Deep verandahs and a low, layered roofline keep the clubhouse in scale with the surrounding hills, while framing long views out to the fairways."
    ]
  },
  {
    id: "delphi-resort",
    title: "Delphi Resort",
    location: "Canacona, Goa",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/delphi-resort/001.jpg",
    facts: ["20,000 sft, 5 acre", "Architecture & Interiors", "Boutique resort"],
    short: "A boutique resort on a 5-acre site, built low and close to the ground it sits on.",
    lede: "A small resort designed to sit lightly on a 5-acre site above Canacona's coastline.",
    gallery: [
      "assets/img/projects/ppt-sourced/delphi-resort/002.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/003.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/004.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/005.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/006.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/007.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/008.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/009.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/010.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/011.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/012.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/013.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/014.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/015.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/016.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/017.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/018.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/019.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/020.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/021.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/022.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/023.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/024.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/025.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/026.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/027.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/028.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/029.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/030.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/031.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/032.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/033.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/034.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/035.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/036.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/037.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/038.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/039.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/040.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/041.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/042.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/043.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/044.jpg",
      "assets/img/projects/ppt-sourced/delphi-resort/045.jpg",
    ],
    copy: [
      "Guest villas are dispersed across the site rather than stacked, keeping the built footprint low and preserving the existing tree cover.",
      "Local laterite, timber screening and thatch detailing root the resort in Goan building tradition, while open-sided pavilions keep the interiors connected to the garden and pool beyond."
    ]
  },
  {
    id: "lv-stitching-unit",
    title: "Stitching Unit & Offices",
    location: "Pondicherry",
    category: "commercial",
    status: "concept",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/lv-stitching-unit/001.jpg",
    facts: ["2,00,000 sft, 22 acre", "Interiors & landscaping", "Client: Louis Vuitton, Paris"],
    short: "A 22-acre production campus for Louis Vuitton, planned as landscape first, building second.",
    lede: "A 2,00,000 sft stitching unit and office campus planned around its landscape, not against it.",
    copy: [
      "Production floors, offices and staff amenities are organised as a low, disciplined campus across 22 acres, with landscaping treated as a working part of the plan rather than a finishing touch.",
      "The result is a facility built to the precision Louis Vuitton's production process demands, while remaining unmistakably grounded in its Pondicherry setting."
    ]
  },
  {
    id: "lv-museum-paris",
    title: "Foundation, Louis Vuitton Museum",
    location: "Paris",
    category: "commercial",
    status: "concept",
    services: {
      architecture: false,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/lv-museum-paris/001.jpg",
    facts: ["12 galleries", "MEP & interior detailing coordination", "Client: LV, Paris"],
    short: "Sub-consultancy on interior detailing and MEP coordination across twelve museum galleries.",
    lede: "Twelve galleries, coordinated down to the services that keep the artwork safe.",
    gallery: [
      "assets/img/projects/ppt-sourced/lv-museum-paris/002.jpg",
      "assets/img/projects/ppt-sourced/lv-museum-paris/003.jpg",
      "assets/img/projects/ppt-sourced/lv-museum-paris/004.jpg",
      "assets/img/projects/ppt-sourced/lv-museum-paris/005.jpg",
      "assets/img/projects/ppt-sourced/lv-museum-paris/006.jpg",
      "assets/img/projects/ppt-sourced/lv-museum-paris/007.jpg",
    ],
    copy: [
      "The studio's role was consultancy, not authorship â€” sub-consulting on interior detailing and MEP coordination across the museum's twelve galleries, where climate control and lighting have to sit invisibly behind the architecture."
    ]
  },
  {
    id: "five-element-spa-resort",
    title: "Five Element Spa Resort",
    location: "Aamby Valley, Maharashtra",
    category: "hospitality",
    status: "concept",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/five-element-spa-resort/001.jpg",
    facts: ["1,45,000 sft", "Architecture, Interiors & Landscaping", "Client: Sahara India"],
    short: "A destination spa organised around the five elements, set into the Aamby Valley hillside.",
    lede: "A 1,45,000 sft destination spa planned as a sequence of five elemental experiences.",
    gallery: [
      "assets/img/projects/ppt-sourced/five-element-spa-resort/002.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/003.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/004.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/005.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/006.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/007.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/008.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/009.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/010.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/011.jpg",
      "assets/img/projects/ppt-sourced/five-element-spa-resort/012.jpg",
    ],
    copy: [
      "Earth, water, fire, air and space each shape a different part of the resort â€” from treatment pavilions to open-air soaking pools â€” with architecture, interiors and landscaping developed together rather than handed off in stages."
    ]
  },
  {
    id: "tmtc-pune",
    title: "Tata Management Training Centre",
    location: "Pune",
    category: "commercial",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/tmtc-pune.jpg",
    facts: ["Concept architecture", "Client: TMTC"],
    short: "Concept architecture for Tata's residential training campus in Pune.",
    lede: "A concept design for the campus where Tata trains its own managers.",
    copy: [
      "Working at concept stage, the brief was to give TMTC's training campus an architectural language suited to focused, residential learning â€” quiet, orderly, and built around shared courts rather than corridors."
    ]
  },
  {
    id: "spa-beach-resort-goa",
    title: "Boutique Wellness Spa Beach Resort",
    location: "Goa",
    category: "hospitality",
    status: "concept",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/spa-beach-resort-goa/001.jpg",
    facts: ["2,50,000 sft, 12 acre", "Architecture, Interiors & Landscaping"],
    short: "A 12-acre beachfront wellness resort designed end to end, from masterplan to interiors.",
    lede: "A 2,50,000 sft wellness resort where architecture, interiors and landscape were designed as one brief.",
    gallery: [
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/002.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/003.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/004.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/005.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/006.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/007.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/008.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/009.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/010.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/011.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/012.jpg",
      "assets/img/projects/ppt-sourced/spa-beach-resort-goa/013.jpg",
    ],
    copy: [
      "Guest villas, spa pavilions and beachfront dining are laid out across a 12-acre site with the landscaping treated as load-bearing to the experience â€” shade, water and planting doing as much work as the buildings themselves."
    ]
  },
  {
    id: "wellness-retreat-alwar",
    title: "Wellness Retreat",
    location: "Alwar, Rajasthan",
    category: "hospitality",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/wellness-retreat-alwar/001.jpg",
    facts: ["400 acre", "Architecture & Interiors", "Client: Intelligent Cities / Central Park"],
    short: "A 400-acre golf-based wellness retreat planned across the Aravalli foothills.",
    lede: "A wellness retreat spread across 400 acres, with golf as one part of a larger landscape.",
    gallery: [
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/002.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/003.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/004.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/005.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/006.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/007.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/008.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/009.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/010.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/011.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/012.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/013.jpg",
      "assets/img/projects/ppt-sourced/wellness-retreat-alwar/014.jpg",
    ],
    copy: [
      "At this scale the architecture follows the land rather than the other way round â€” villas, spa and clubhouse are sited to work with the site's natural contours and water bodies rather than reshape them."
    ]
  },
  {
    id: "golf-apartments-aamby",
    title: "Golf Apartments",
    location: "Aamby Valley, Maharashtra",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/golf-apartments-aamby/001.jpg",
    facts: ["6,59,000 sft", "Residential apartments", "Client: Sahara India"],
    short: "A 6,59,000 sft residential apartment community set along the golf course.",
    lede: "A residential community planned around fairway views rather than a central amenity block.",
    gallery: [
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/002.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/003.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/004.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/005.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/006.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/007.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/008.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/009.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/010.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/011.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/012.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/013.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/014.jpg",
      "assets/img/projects/ppt-sourced/golf-apartments-aamby/015.jpg",
    ],
    copy: [
      "Apartment blocks are oriented to the golf course rather than to each other, so most units open onto green, uninterrupted views instead of facing across a courtyard."
    ]
  },
  {
    id: "sahay-residence",
    title: "Sahay Residence",
    location: "Sushant Lok, Gurugram, Haryana",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/sahay-residence/001.jpg",
    facts: ["10,750 sft, 500 sqm"],
    short: "A private residence in Gurugram, designed with the family's day-to-day use as the starting point.",
    lede: "A 10,750 sft house planned around how the family actually uses each room.",
    gallery: [
      "assets/img/projects/ppt-sourced/sahay-residence/002.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/003.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/004.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/005.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/006.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/007.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/008.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/009.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/010.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/011.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/012.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/013.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/014.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/015.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/016.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/017.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/018.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/019.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/020.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/021.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/022.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/023.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/024.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/025.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/026.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/027.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/028.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/029.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/030.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/031.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/032.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/033.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/034.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/035.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/036.jpg",
      "assets/img/projects/ppt-sourced/sahay-residence/037.jpg",
    ],
    copy: [
      "The plan was worked out room by room with the family before it was worked out on paper â€” the result is a house whose formal moments (the entrance, the stair, the living court) sit alongside very ordinary, well-used everyday spaces."
    ]
  },
  {
    id: "chandras-residence",
    title: "Chandra's Residence",
    location: "Chattarpur, Delhi",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/chandras-residence/001.jpg",
    facts: ["7,750 sft, 2.5 acre"],
    short: "A farmhouse residence on a 2.5-acre plot at the edge of the city.",
    lede: "A 2.5-acre farmhouse that treats the garden as the main room of the house.",
    gallery: [
      "assets/img/projects/ppt-sourced/chandras-residence/002.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/003.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/004.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/005.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/006.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/007.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/008.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/009.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/010.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/011.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/012.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/013.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/014.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/015.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/016.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/017.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/018.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/019.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/020.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/021.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/022.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/023.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/024.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/025.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/026.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/027.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/028.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/029.jpg",
      "assets/img/projects/ppt-sourced/chandras-residence/030.jpg",
    ],
    copy: [
      "Built form is kept low and set back from the boundary, leaving the acreage free for the garden the family actually wanted â€” the house reads as a pavilion within it, not the other way round."
    ]
  },
  {
    id: "cottage-shamrock",
    title: "Cottage Shamrock",
    location: "Landour, Mussoorie, Uttarakhand",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/cottage-shamrock/001.jpg",
    facts: ["8,000 sft, 7 acre", "Client: ACIL Industries"],
    short: "A hillside cottage retreat on 7 acres in Landour, built to the slope rather than against it.",
    lede: "A Himalayan cottage that steps down 7 acres of Landour hillside instead of cutting into it.",
    gallery: [
      "assets/img/projects/ppt-sourced/cottage-shamrock/002.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/003.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/004.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/005.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/006.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/007.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/008.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/009.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/010.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/011.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/012.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/013.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/014.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/015.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/016.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/017.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/018.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/019.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/020.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/021.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/022.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/023.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/024.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/025.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/026.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/027.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/028.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/029.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/030.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/031.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/032.jpg",
      "assets/img/projects/ppt-sourced/cottage-shamrock/033.jpg",
    ],
    copy: [
      "The building is broken into smaller stepped volumes that follow the natural fall of the land, keeping cut-and-fill to a minimum and giving most rooms a direct view out over the valley."
    ]
  },
  {
    id: "tideman-residence",
    title: "Tideman Residence",
    location: "Pune, Maharashtra",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/tideman-residence/001.jpg",
    facts: ["7,500 sft, 500 sqm"],
    short: "A private house in Pune built around a compact, efficient footprint.",
    lede: "A 7,500 sft house designed for a family that wanted less house, not more.",
    gallery: [
      "assets/img/projects/ppt-sourced/tideman-residence/002.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/003.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/004.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/005.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/006.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/007.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/008.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/009.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/010.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/011.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/012.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/013.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/014.jpg",
      "assets/img/projects/ppt-sourced/tideman-residence/015.jpg",
    ],
    copy: [
      "Rather than maximising built area, the brief pushed the other way â€” a tighter, more efficient plan with fewer, better-used rooms, and the savings in footprint spent instead on light and outdoor space."
    ]
  },
  {
    id: "kailasa-coonoor",
    title: "Kailasa, Ashram & Alternate Living",
    location: "Coonoor, Tamil Nadu",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/kailasa-coonoor/001.jpg",
    facts: ["20 acre", "Net-zero planning", "Client: Vikas Trust"],
    short: "An ashram and alternate-living community on 20 acres, planned to net-zero principles.",
    lede: "A 20-acre ashram community designed as an integrated, net-zero settlement.",
    gallery: [
      "assets/img/projects/ppt-sourced/kailasa-coonoor/002.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/003.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/004.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/005.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/006.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/007.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/008.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/009.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/010.jpg",
      "assets/img/projects/ppt-sourced/kailasa-coonoor/011.jpg",
    ],
    copy: [
      "Domed meditation halls, shared living quarters and communal courts are planned together as one settlement rather than a set of separate buildings, with energy, water and waste handled on-site as part of the design brief."
    ]
  },
  {
    id: "mds-factory-palwal",
    title: "Factory & Corporate Offices, Mahindra Defence Systems",
    location: "Palwal, Haryana",
    category: "commercial",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/mds-factory-palwal/001.jpg",
    facts: ["60,000 sft, 6 acre", "Client: Mahindra Defence Systems"],
    short: "A factory and corporate office building for Mahindra Defence Systems on a 6-acre plot.",
    lede: "A 60,000 sft factory and office building planned for a defence-manufacturing client.",
    gallery: [
      "assets/img/projects/ppt-sourced/mds-factory-palwal/002.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/003.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/004.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/005.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/006.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/007.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/008.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/009.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/010.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/011.jpg",
      "assets/img/projects/ppt-sourced/mds-factory-palwal/012.jpg",
    ],
    copy: [
      "Production and administration are organised as distinct but connected blocks, so the corporate offices read as a considered front to the plant rather than an afterthought bolted onto the factory shed."
    ]
  },
  {
    id: "ritz-restaurant-lucknow",
    title: "Speciality Restaurant, Ritz",
    location: "Lucknow",
    category: "hospitality",
    status: "built",
    services: {
      architecture: false,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/001.jpg",
    facts: ["Interiors"],
    short: "Interior design for a speciality restaurant at the Ritz in Lucknow.",
    lede: "An interior fit-out built around the pace and theatre of an open dining room.",
    gallery: [
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/002.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/003.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/004.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/005.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/006.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/007.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/008.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/009.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/010.jpg",
      "assets/img/projects/ppt-sourced/ritz-restaurant-lucknow/011.jpg",
    ],
    copy: [
      "The interiors were designed to carry a restaurant's daily rhythm â€” seating, lighting and service lines worked out together so the room performs as well at a quiet lunch as on a full evening."
    ]
  },
  {
    id: "golf-academy-ansals",
    title: "Golf Academy, Ansals",
    location: "Lucknow",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/golf-academy-ansals/001.jpg",
    facts: ["13,000 sft", "Client: Ansals API"],
    short: "A 13,000 sft golf academy and clubhouse for Ansals API in Lucknow.",
    lede: "A compact clubhouse and academy built to sit comfortably along the fairway.",
    gallery: [
      "assets/img/projects/ppt-sourced/golf-academy-ansals/002.jpg",
      "assets/img/projects/ppt-sourced/golf-academy-ansals/003.jpg",
    ],
    copy: [
      "A low, deep-eaved clubhouse anchors the academy, with teaching bays and the pro shop opening directly onto the driving range rather than being tucked behind it."
    ]
  },
  {
    id: "golf-course-masterplans",
    title: "Golf Course Master Plans",
    location: "Maharashtra & Bangaluru",
    category: "commercial",
    status: "concept",
    services: {
      architecture: false,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/golf-course-masterplans/001.jpg",
    facts: ["Golf course master planning"],
    short: "Master planning for golf-led developments in Maharashtra and Bangaluru.",
    lede: "Master plans for two golf-led developments, worked out at the scale of the land itself.",
    gallery: [
      "assets/img/projects/ppt-sourced/golf-course-masterplans/002.jpg",
    ],
    copy: [
      "At masterplan stage the work is about sequencing â€” holes, water bodies, villas and infrastructure are laid out together so the golf course and the real estate around it support each other rather than compete for the same ground."
    ]
  },
  {
    id: "eco-resort-stok-ladakh",
    title: "Eco Resort",
    location: "Stok, Ladakh",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/eco-resort-stok-ladakh/001.jpg",
    facts: ["30,000 sft", "Architecture, Interiors & Landscaping", "Client: Good Earth Ecotourism"],
    short: "A 30,000 sft eco resort in Ladakh, built to the constraints of a high-altitude desert.",
    lede: "A resort built for Ladakh's extremes â€” high altitude, low rainfall, and a short building season.",
    gallery: [
      "assets/img/projects/ppt-sourced/eco-resort-stok-ladakh/002.jpg",
      "assets/img/projects/ppt-sourced/eco-resort-stok-ladakh/003.jpg",
      "assets/img/projects/ppt-sourced/eco-resort-stok-ladakh/004.jpg",
      "assets/img/projects/ppt-sourced/eco-resort-stok-ladakh/005.jpg",
    ],
    copy: [
      "Local building methods and materials were prioritised throughout, with architecture, interiors and landscaping planned together to minimise both construction impact and ongoing energy use in a fragile high-altitude setting."
    ]
  },
  {
    id: "namtech-campus-interiors",
    title: "Campus Interiors, NAM:TECH",
    location: "IIT Gandhi Nagar, Gujarat",
    category: "commercial",
    status: "built",
    services: {
      architecture: false,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/namtech-campus-interiors/001.jpg",
    facts: ["60,000 sft", "Campus interiors", "Client: Arcelor Mittal Nippon Steel"],
    short: "Transitionary campus interiors for NAM:TECH's skills university, hosted at IIT Gandhi Nagar.",
    lede: "60,000 sft of campus interiors built to house a new skills university while its permanent home is built.",
    gallery: [
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/002.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/003.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/004.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/005.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/006.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/007.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/008.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/009.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/010.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/011.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/012.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/013.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/014.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/015.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/016.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/017.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/018.jpg",
      "assets/img/projects/ppt-sourced/namtech-campus-interiors/019.jpg",
    ],
    copy: [
      "As a transitionary campus, the interiors had to do double duty â€” flexible teaching and common spaces that work now, inside an existing IIT building, and that can inform the permanent AMSU campus that follows."
    ]
  },
  {
    id: "desai-residence",
    title: "Desai Residence",
    location: "Madgaon, Goa",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/desai-residence/001.jpg",
    facts: ["9,000 sft, 1,000 sqm"],
    short: "A family house in Madgaon built in timber and laterite, in the Goan residential tradition.",
    lede: "A 9,000 sft house built firmly within Goa's own residential tradition.",
    gallery: [
      "assets/img/projects/ppt-sourced/desai-residence/002.jpg",
      "assets/img/projects/ppt-sourced/desai-residence/003.jpg",
    ],
    copy: [
      "Deep sloping roofs, timber balconies and a wraparound verandah place the house within local building custom, while the plan itself is worked out for a contemporary family's everyday use."
    ]
  },
  {
    id: "pandit-ji-residence",
    title: "Pandit Ji Residence, Adaptive Reuse",
    location: "8, St Gilles, Pondicherry",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/pandit-ji-residence.jpg",
    facts: ["7,500 sft, 600 sqm", "Adaptive reuse"],
    short: "An adaptive reuse project bringing a Pondicherry residence back into use.",
    lede: "An existing Pondicherry house, carried forward rather than replaced.",
    copy: [
      "The brief was reuse, not rebuild â€” retaining as much of the existing structure and French-quarter character as possible while bringing the house up to a contemporary standard of living."
    ]
  },
  {
    id: "river-front-gated-community",
    title: "River Front Gated Community",
    location: "Goa",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/river-front-gated-community/001.jpg",
    facts: ["Residential gated community"],
    short: "A riverfront gated community of villas set among mature palm cover.",
    lede: "A gated riverfront community planned to work with its palm cover, not clear it.",
    gallery: [
      "assets/img/projects/ppt-sourced/river-front-gated-community/002.jpg",
      "assets/img/projects/ppt-sourced/river-front-gated-community/003.jpg",
      "assets/img/projects/ppt-sourced/river-front-gated-community/004.jpg",
      "assets/img/projects/ppt-sourced/river-front-gated-community/005.jpg",
    ],
    copy: [
      "Villa plots and access roads were laid out around the site's existing trees rather than a cleared grid, so the community reads as built into an established landscape rather than added onto a blank one."
    ]
  },
  {
    id: "namtech-proposed-campus",
    title: "NAM:TECH, Proposed University Campus",
    location: "Ahmedabad, Gujarat",
    category: "commercial",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/namtech-proposed-campus/001.jpg",
    facts: ["6,30,000 smt, 150 acre", "Client: Arcelor Mittal Nippon Steel"],
    short: "Concept campus planning for a 150-acre skills university near Ahmedabad.",
    lede: "A 150-acre concept masterplan for a skills university built around industry training.",
    gallery: [
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/002.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/003.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/004.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/005.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/006.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/007.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/008.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/009.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/010.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/011.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/012.jpg",
      "assets/img/projects/ppt-sourced/namtech-proposed-campus/013.jpg",
    ],
    copy: [
      "The masterplan organises teaching blocks, workshops, hostels and shared campus green space at a scale closer to a small town than a single institution, with industry-facing training halls given equal weight to classrooms."
    ]
  },
  {
    id: "cavalosim-resort",
    title: "Cavalosim Resort",
    location: "Goa",
    category: "hospitality",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/cavalosim-resort/001.jpg",
    facts: ["30,000 sft, 2.5 acre", "Architectural master plan"],
    short: "A luxury resort master plan for a 2.5-acre site at Cavelossim.",
    lede: "A 2.5-acre luxury resort, worked out first as a master plan.",
    gallery: [
      "assets/img/projects/ppt-sourced/cavalosim-resort/002.jpg",
    ],
    copy: [
      "At master-plan stage, the work sets out how guest blocks, pool and beach access sit together on a tight 2.5-acre site â€” the framework the resort's later architecture and interiors will build on."
    ]
  },
  {
    id: "machaan-aamby-valley",
    title: "Machaan",
    location: "Aamby Valley, Maharashtra",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/machaan-aamby-valley/001.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "An elevated timber machaan tucked into the tree line at Aamby Valley.",
    lede: "A raised timber machaan, built as one of several small structures across the resort's 50 acres.",
    gallery: [
      "assets/img/projects/ppt-sourced/machaan-aamby-valley/002.jpg",
      "assets/img/projects/ppt-sourced/machaan-aamby-valley/003.jpg",
    ],
    copy: [
      "Lifted clear of the forest floor on a timber frame, the machaan gives guests a platform among the tree canopy rather than a room looking out at it."
    ]
  },
  {
    id: "a-frame-aamby-valley",
    title: "A-Frame",
    location: "Aamby Valley, Maharashtra",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/a-frame-aamby-valley/001.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "A steep-roofed A-frame cabin, one of the resort's smaller timber typologies.",
    lede: "A compact A-frame cabin built as a model unit for the Aamby Valley timber resort.",
    gallery: [
      "assets/img/projects/ppt-sourced/a-frame-aamby-valley/002.jpg",
      "assets/img/projects/ppt-sourced/a-frame-aamby-valley/003.jpg",
      "assets/img/projects/ppt-sourced/a-frame-aamby-valley/004.jpg",
      "assets/img/projects/ppt-sourced/a-frame-aamby-valley/005.jpg",
    ],
    copy: [
      "The steep A-frame roof sheds the hill station's heavy monsoon rain while keeping the cabin's footprint, and its material palette, close to the forest around it."
    ]
  },
  {
    id: "burmese-chalet-aamby-valley",
    title: "Burmese Chalet",
    location: "Aamby Valley, Maharashtra",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/burmese-chalet-aamby-valley/001.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "A timber chalet built in the Burmese hill tradition, set within the Aamby Valley resort.",
    lede: "A chalet that borrows its construction logic from Burmese hill architecture.",
    gallery: [
      "assets/img/projects/ppt-sourced/burmese-chalet-aamby-valley/002.jpg",
      "assets/img/projects/ppt-sourced/burmese-chalet-aamby-valley/003.jpg",
      "assets/img/projects/ppt-sourced/burmese-chalet-aamby-valley/004.jpg",
      "assets/img/projects/ppt-sourced/burmese-chalet-aamby-valley/005.jpg",
      "assets/img/projects/ppt-sourced/burmese-chalet-aamby-valley/006.jpg",
    ],
    copy: [
      "Stilted timber construction and deep, overhanging eaves place the chalet within a wider hill-building tradition, adapted here to the Sahyadri climate and site."
    ]
  },
  {
    id: "hermitage-chalets-aamby-valley",
    title: "Hermitage, Chalet's",
    location: "Aamby Valley, Maharashtra",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/001.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "A cluster of stone-and-timber hermitage chalets stepped into the Aamby Valley hillside.",
    lede: "A group of hermitage chalets, each a stone-based, timber-topped retreat against the hills.",
    gallery: [
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/002.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/003.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/004.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/005.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/006.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/007.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/008.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/009.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/010.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/011.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/012.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/013.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/014.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/015.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/016.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/017.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/018.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/019.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/020.jpg",
      "assets/img/projects/ppt-sourced/hermitage-chalets-aamby-valley/021.jpg",
    ],
    copy: [
      "A rubble-stone base anchors each chalet into the slope, with a timber upper storey and deep wraparound balconies opening the rooms to the valley view beyond."
    ]
  },
  {
    id: "bridges-pga-aamby-valley",
    title: "Bridges, PGA Golf Course",
    location: "Aamby Valley, Maharashtra",
    category: "commercial",
    status: "built",
    services: {
      architecture: false,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/bridges-pga-aamby-valley/001.jpg",
    facts: ["18-hole championship golf course", "Client: Sahara India / PGA"],
    short: "Timber bridges and cart paths built across the 18-hole PGA course at Aamby Valley.",
    lede: "The bridges and crossings that let an 18-hole championship course read as one continuous landscape.",
    gallery: [
      "assets/img/projects/ppt-sourced/bridges-pga-aamby-valley/002.jpg",
      "assets/img/projects/ppt-sourced/bridges-pga-aamby-valley/003.jpg",
      "assets/img/projects/ppt-sourced/bridges-pga-aamby-valley/004.jpg",
      "assets/img/projects/ppt-sourced/bridges-pga-aamby-valley/005.jpg",
      "assets/img/projects/ppt-sourced/bridges-pga-aamby-valley/006.jpg",
    ],
    copy: [
      "Timber bridges, culverts and cart paths were designed together as a single infrastructure layer, built to stay visually quiet against the course's fairways and water bodies."
    ]
  },
  {
    id: "bridges-bulkhead-garry-player-dlf",
    title: "Bridges & Bulkhead, Garry Player Golf Course",
    location: "DLF, Gurugram, Haryana",
    category: "commercial",
    status: "built",
    services: {
      architecture: false,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/001.jpg",
    facts: ["27-hole golf course", "Client: DLF Ltd"],
    short: "Timber bridges and bulkheads built along DLF's 27-hole Garry Player golf course.",
    lede: "Bridges and bulkheads detailed to hold a 27-hole course's edges against water and traffic.",
    gallery: [
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/002.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/003.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/004.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/005.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/006.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/007.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/008.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/009.jpg",
      "assets/img/projects/ppt-sourced/bridges-bulkhead-garry-player-dlf/010.jpg",
    ],
    copy: [
      "Bulkheads retain the course's water bodies and banks while timber bridges carry golfers and maintenance vehicles across them, both designed to read as part of the landscape rather than infrastructure laid over it."
    ]
  },
  {
    id: "starter-hut-garry-player-dlf",
    title: "Starter Hut, Garry Player Golf Course",
    location: "DLF, Gurugram, Haryana",
    category: "commercial",
    status: "built",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/starter-hut-garry-player-dlf/001.jpg",
    facts: ["27-hole golf course", "Client: DLF Ltd"],
    short: "A small timber starter hut marking the first tee of DLF's Garry Player course.",
    lede: "A starter hut built as a small, deliberate marker at the start of the round.",
    gallery: [
      "assets/img/projects/ppt-sourced/starter-hut-garry-player-dlf/002.jpg",
    ],
    copy: [
      "Scaled down to a single, simple timber structure, the starter hut announces the first tee without competing with the clubhouse or the course itself."
    ]
  },
  {
    id: "singhvi-residence-neetibagh",
    title: "Singhvi Residence",
    location: "Neetibagh, New Delhi",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/001.jpg",
    facts: ["12,500 sft, 800 sqm"],
    short: "A 12,500 sft family residence in Neetibagh, New Delhi.",
    lede: "A 12,500 sft house built around a sequence of top-lit, timber-detailed interior spaces.",
    gallery: [
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/002.jpg",
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/003.jpg",
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/004.jpg",
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/005.jpg",
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/006.jpg",
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/007.jpg",
      "assets/img/projects/ppt-sourced/singhvi-residence-neetibagh/008.jpg",
    ],
    copy: [
      "Skylights and a central stair well bring daylight deep into the plan, while timber joinery â€” door screens, balustrades, panelling â€” carries a consistent material language through every level of the house."
    ]
  },
  {
    id: "silverglades-farms-tarudhan",
    title: "Silverglades Farms",
    location: "Tarudhan, Manesar",
    category: "residential",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/silverglades-farms-tarudhan/001.jpg",
    facts: ["7.5 acre", "Residential development", "Client: Silverglades"],
    short: "A 7.5-acre residential farm development adjoining the ITC Classic Golf Course in Manesar.",
    lede: "A 7.5-acre farm residence community planned alongside an existing championship golf course.",
    gallery: [
      "assets/img/projects/ppt-sourced/silverglades-farms-tarudhan/002.jpg",
      "assets/img/projects/ppt-sourced/silverglades-farms-tarudhan/003.jpg",
      "assets/img/projects/ppt-sourced/silverglades-farms-tarudhan/004.jpg",
      "assets/img/projects/ppt-sourced/silverglades-farms-tarudhan/005.jpg",
      "assets/img/projects/ppt-sourced/silverglades-farms-tarudhan/006.jpg",
    ],
    copy: [
      "Plots and villas are arranged to borrow the adjoining golf course's open green as a shared amenity, rather than building a separate landscape of its own."
    ]
  },
  {
    id: "oliander-farm-karjat",
    title: "Oliander Farm",
    location: "Karjat, Maharashtra",
    category: "hospitality",
    status: "built",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/oliander-farm-karjat/001.jpg",
    facts: ["22,000 sft, 200 acre", "Boutique resort, Architecture & Interiors", "Client: Mr Ahuja"],
    short: "A 200-acre boutique farm resort outside Karjat, built as a quiet retreat from Mumbai.",
    lede: "A 22,000 sft boutique resort spread across 200 acres of farmland near Karjat.",
    gallery: [
      "assets/img/projects/ppt-sourced/oliander-farm-karjat/002.jpg",
      "assets/img/projects/ppt-sourced/oliander-farm-karjat/003.jpg",
      "assets/img/projects/ppt-sourced/oliander-farm-karjat/004.jpg",
      "assets/img/projects/ppt-sourced/oliander-farm-karjat/005.jpg",
    ],
    copy: [
      "Guest structures are kept small and scattered across the 200-acre farm, leaving the working landscape â€” not a resort masterplan â€” as the dominant experience of the site."
    ]
  },
  {
    id: "kodak-india-janpath",
    title: "Kodak India",
    location: "Janpath, New Delhi",
    category: "commercial",
    status: "built",
    services: {
      architecture: false,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/kodak-india-janpath/001.jpg",
    facts: ["2,500 sft", "Corporate office interiors", "Client: KODAK India"],
    short: "A 2,500 sft corporate office interior for Kodak India on Janpath, New Delhi.",
    lede: "A 2,500 sft corporate office fit out for Kodak's New Delhi headquarters.",
    gallery: [
      "assets/img/projects/ppt-sourced/kodak-india-janpath/002.jpg",
      "assets/img/projects/ppt-sourced/kodak-india-janpath/003.jpg",
      "assets/img/projects/ppt-sourced/kodak-india-janpath/004.jpg",
      "assets/img/projects/ppt-sourced/kodak-india-janpath/005.jpg",
      "assets/img/projects/ppt-sourced/kodak-india-janpath/006.jpg",
      "assets/img/projects/ppt-sourced/kodak-india-janpath/007.jpg",
    ],
    copy: [
      "Working within an existing Janpath building shell, the interiors were planned to give a global brand's regional office a considered, consistent identity within a tight footprint."
    ]
  },
  {
    id: "minal-modi-residence",
    title: "Minal Modi Residence",
    location: "Mandi Village, New Delhi",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/minal-modi-residence/001.jpg",
    facts: ["Concept design: Geoffrey Bawa & AB Lall", "Detail drawings: VVA"],
    short: "A concept residence in Mandi Village, with detail drawings developed by the studio.",
    lede: "A residence conceived by Geoffrey Bawa and AB Lall, carried into detail by VVA.",
    gallery: [
      "assets/img/projects/ppt-sourced/minal-modi-residence/002.jpg",
    ],
    copy: [
      "The studio's role here was to take a concept design originated by Geoffrey Bawa and AB Lall and develop it into construction-ready detail drawings for the Mandi Village site."
    ]
  },
  {
    id: "h-gold-farm-brijwasan",
    title: "H Gold Farm",
    location: "Brijwasan, New Delhi",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/h-gold-farm-brijwasan/001.jpg",
    facts: ["Concept design"],
    short: "A concept farmhouse design for a Brijwasan site on Delhi's southern edge.",
    lede: "A farmhouse concept for Brijwasan, planned as a retreat at the edge of the city.",
    gallery: [
      "assets/img/projects/ppt-sourced/h-gold-farm-brijwasan/002.jpg",
      "assets/img/projects/ppt-sourced/h-gold-farm-brijwasan/003.jpg",
      "assets/img/projects/ppt-sourced/h-gold-farm-brijwasan/004.jpg",
    ],
    copy: [
      "Set on the city's rural fringe, the farmhouse concept keeps built form low and gives most of the plot over to open, planted ground."
    ]
  },
  {
    id: "weavers-training-centre-chanderi",
    title: "Weavers Training Centre",
    location: "Chanderi, Madhya Pradesh",
    category: "commercial",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/weavers-training-centre-chanderi/001.jpg",
    facts: ["Concept design", "Institutional / training facility"],
    short: "A concept training centre for Chanderi's handloom weavers.",
    lede: "A training centre concept built around Chanderi's own handloom tradition.",
    gallery: [
      "assets/img/projects/ppt-sourced/weavers-training-centre-chanderi/002.jpg",
    ],
    copy: [
      "The brief called for a centre that could teach and showcase Chanderi's handloom weaving, with workshop, training and display spaces planned as one continuous sequence."
    ]
  },
  {
    id: "wellness-resort-carnoustie-rameshwaram",
    title: "Wellness Resort, Carnoustie",
    location: "Rameshwaram, Tamil Nadu",
    category: "hospitality",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/wellness-resort-carnoustie-rameshwaram/001.jpg",
    facts: ["Concept design", "Architecture & Interiors"],
    short: "A concept wellness resort for a coastal site at Rameshwaram.",
    lede: "A wellness resort concept set on Rameshwaram's coastline.",
    gallery: [
      "assets/img/projects/ppt-sourced/wellness-resort-carnoustie-rameshwaram/002.jpg",
      "assets/img/projects/ppt-sourced/wellness-resort-carnoustie-rameshwaram/003.jpg",
      "assets/img/projects/ppt-sourced/wellness-resort-carnoustie-rameshwaram/004.jpg",
      "assets/img/projects/ppt-sourced/wellness-resort-carnoustie-rameshwaram/005.jpg",
    ],
    copy: [
      "Guest and treatment pavilions are planned to open toward the coast, with the resort's wellness programme built around Rameshwaram's sea air and light rather than imported spa conventions."
    ]
  },
  {
    id: "villa-a-flower-valley-central-park",
    title: "Villa-A, Flower Valley",
    location: "Central Park, Sona Road, Haryana",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/villa-a-flower-valley-central-park/001.jpg",
    facts: ["Concept design", "Model villa"],
    short: "A concept villa for the Flower Valley enclave at Central Park, Sona Road.",
    lede: "A villa concept for one plot within the Flower Valley development.",
    gallery: [
      "assets/img/projects/ppt-sourced/villa-a-flower-valley-central-park/002.jpg",
      "assets/img/projects/ppt-sourced/villa-a-flower-valley-central-park/003.jpg",
    ],
    copy: [
      "Designed as a model villa for the Flower Valley enclave, the concept sets out a plan and elevation language that could be repeated across similar plots in the development."
    ]
  },
  {
    id: "cottage-anandam-kotabagh",
    title: "Cottage Anandam",
    location: "Kotabagh, Uttarakhand",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/001.jpg",
    facts: ["14,000 sft, 5 acre"],
    short: "A 14,000 sft hillside cottage concept on a 5-acre Kotabagh site.",
    lede: "A cottage retreat concept for a 5-acre site in Kotabagh, Uttarakhand.",
    gallery: [
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/002.jpg",
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/003.jpg",
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/004.jpg",
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/005.jpg",
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/006.jpg",
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/007.jpg",
      "assets/img/projects/ppt-sourced/cottage-anandam-kotabagh/008.jpg",
    ],
    copy: [
      "Like the studio's other hill cottages, the Anandam concept steps down its 5-acre site in smaller volumes rather than one large block, keeping the building close to the land's natural grade."
    ]
  },
  {
    id: "conservatory-dlf",
    title: "Conservatory, DLF",
    location: "Gurugram, Haryana",
    category: "commercial",
    status: "concept",
    services: {
      architecture: false,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/conservatory-dlf/001.jpg",
    facts: ["Concept design", "Interiors"],
    short: "An interior concept for a conservatory space, developed in multiple view studies.",
    lede: "A conservatory interior worked through a series of concept views.",
    gallery: [
      "assets/img/projects/ppt-sourced/conservatory-dlf/002.jpg",
      "assets/img/projects/ppt-sourced/conservatory-dlf/003.jpg",
      "assets/img/projects/ppt-sourced/conservatory-dlf/004.jpg",
      "assets/img/projects/ppt-sourced/conservatory-dlf/005.jpg",
      "assets/img/projects/ppt-sourced/conservatory-dlf/006.jpg",
      "assets/img/projects/ppt-sourced/conservatory-dlf/007.jpg",
      "assets/img/projects/ppt-sourced/conservatory-dlf/008.jpg",
    ],
    copy: [
      "The conservatory concept was developed across multiple interior views, testing light, planting and material before committing to a final direction."
    ]
  },
  {
    id: "panchsheel-park-club-pool",
    title: "Panchsheel Park Club Pool",
    location: "New Delhi",
    category: "hospitality",
    status: "concept",
    services: {
      architecture: true,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/panchsheel-park-club-pool/001.jpg",
    facts: ["Concept design", "Panchsheel Park Society Club"],
    short: "A concept pool and clubhouse design for Panchsheel Park Society Club.",
    lede: "A pool and club concept for the Panchsheel Park community.",
    gallery: [
      "assets/img/projects/ppt-sourced/panchsheel-park-club-pool/002.jpg",
      "assets/img/projects/ppt-sourced/panchsheel-park-club-pool/003.jpg",
      "assets/img/projects/ppt-sourced/panchsheel-park-club-pool/004.jpg",
      "assets/img/projects/ppt-sourced/panchsheel-park-club-pool/005.jpg",
      "assets/img/projects/ppt-sourced/panchsheel-park-club-pool/006.jpg",
    ],
    copy: [
      "The concept reworks the society club's pool deck and surrounding clubhouse spaces as a single, considered amenity for residents rather than a utilitarian pool enclosure."
    ]
  },
  {
    id: "integrated-golf-haridwar",
    title: "Integrated Golf",
    location: "Haridwar, Uttarakhand",
    category: "commercial",
    status: "concept",
    services: {
      architecture: false,
      landscape: true,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/integrated-golf-haridwar/001.jpg",
    facts: ["Concept master plan", "Golf-led development"],
    short: "A concept master plan for an integrated golf development in Haridwar.",
    lede: "A golf-led development concept planned for a Haridwar site.",
    gallery: [
      "assets/img/projects/ppt-sourced/integrated-golf-haridwar/002.jpg",
    ],
    copy: [
      "At concept stage, the plan sets out how a golf course, residences and supporting amenities could share one site in Haridwar without one element crowding out the others."
    ]
  },
  {
    id: "anand-lok-46",
    title: "46 Anand Lok",
    location: "New Delhi",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/anand-lok-46/001.jpg",
    facts: ["Concept design"],
    short: "A concept residence design for a plot at 46 Anand Lok, New Delhi.",
    lede: "A private residence concept for 46 Anand Lok.",
    gallery: [
      "assets/img/projects/ppt-sourced/anand-lok-46/002.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/003.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/004.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/005.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/006.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/007.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/008.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/009.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/010.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/011.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/012.jpg",
      "assets/img/projects/ppt-sourced/anand-lok-46/013.jpg",
    ],
    copy: [
      "The concept works through the plan, elevations and material palette for a private residence on a defined South Delhi plot."
    ]
  },
  {
    id: "vasant-kunj-farm",
    title: "Vasant Kunj Farm",
    location: "New Delhi",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/vasant-kunj-farm/001.jpg",
    facts: ["Concept design"],
    short: "A concept farmhouse design for a Vasant Kunj site.",
    lede: "A farmhouse concept for a Vasant Kunj plot on Delhi's southern edge.",
    gallery: [
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/002.jpg",
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/003.jpg",
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/004.jpg",
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/005.jpg",
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/006.jpg",
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/007.jpg",
      "assets/img/projects/ppt-sourced/vasant-kunj-farm/008.jpg",
    ],
    copy: [
      "The concept sets out a farmhouse plan built around courtyards and garden rooms, in keeping with the studio's approach to low-density farm residences around Delhi."
    ]
  },
  {
    id: "ashtang-yog-ashram-syaat",
    title: "Ashtang Yog Ashram, SYAAT",
    location: "India",
    category: "commercial",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: true
    },
    image: "assets/img/projects/ppt-sourced/ashtang-yog-ashram-syaat/001.jpg",
    facts: ["Concept design", "Client: SYAAT"],
    short: "A concept design for the Ashtang Yog Ashram developed for SYAAT.",
    lede: "An ashram concept developed for the SYAAT trust.",
    gallery: [
      "assets/img/projects/ppt-sourced/ashtang-yog-ashram-syaat/002.jpg",
      "assets/img/projects/ppt-sourced/ashtang-yog-ashram-syaat/003.jpg",
      "assets/img/projects/ppt-sourced/ashtang-yog-ashram-syaat/004.jpg",
      "assets/img/projects/ppt-sourced/ashtang-yog-ashram-syaat/005.jpg",
    ],
    copy: [
      "The concept lays out the ashram's teaching halls, residential quarters and shared spaces as a single, calm campus suited to daily practice."
    ]
  },
  {
    id: "meditation-centre-maunam",
    title: "Meditation Centre, Maunam",
    location: "India",
    category: "commercial",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/meditation-centre-maunam.jpg",
    facts: ["Concept design", "Part of the Ashtang Yog Ashram, SYAAT"],
    short: "A concept meditation centre, Maunam, developed within the Ashtang Yog Ashram.",
    lede: "A dedicated meditation centre concept, planned for silent practice.",
    gallery: [
      "assets/img/projects/meditation-centre-maunam/02.jpg",
      "assets/img/projects/meditation-centre-maunam/03.jpg",
      "assets/img/projects/meditation-centre-maunam/04.jpg",
      "assets/img/projects/meditation-centre-maunam/05.jpg",
      "assets/img/projects/meditation-centre-maunam/06.jpg",
      "assets/img/projects/meditation-centre-maunam/07.jpg",
      "assets/img/projects/meditation-centre-maunam/08.jpg"
    ],
    copy: [
      "Maunam â€” literally, silence â€” gives the ashram a dedicated space for meditation, developed through plan, elevation and interior view studies as part of the wider ashram concept."
    ]
  },
  {
    id: "eternesse-wellness-clinic-hyderabad",
    title: "Eternesse, Regenerative Wellness Clinic",
    location: "Jubilee Hills, Hyderabad",
    category: "commercial",
    status: "concept",
    services: {
      architecture: false,
      landscape: false,
      interiorDesign: true,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/001.jpg",
    facts: ["Concept design", "Interiors"],
    short: "A concept interior for a regenerative wellness clinic in Jubilee Hills, Hyderabad.",
    lede: "A regenerative wellness clinic concept for Hyderabad's Jubilee Hills.",
    gallery: [
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/002.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/003.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/004.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/005.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/006.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/007.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/008.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/009.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/010.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/011.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/012.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/013.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/014.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/015.jpg",
      "assets/img/projects/ppt-sourced/eternesse-wellness-clinic-hyderabad/016.jpg",
    ],
    copy: [
      "The concept interiors were developed as a sequence of calm, clinical-adjacent spaces for Eternesse's regenerative wellness programme, worked out across multiple interior views."
    ]
  },
  {
    id: "leroy-residence-ghatkesar",
    title: "Leroy Residence",
    location: "Ghatkesar, Hyderabad",
    category: "residential",
    status: "concept",
    services: {
      architecture: true,
      landscape: false,
      interiorDesign: false,
      designBuild: false,
      masterPlan: false
    },
    image: "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/001.jpg",
    facts: ["Concept design"],
    short: "A concept residence design for a Ghatkesar site outside Hyderabad.",
    lede: "A private residence concept for a Ghatkesar plot.",
    gallery: [
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/002.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/003.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/004.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/005.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/006.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/007.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/008.jpg",
      "assets/img/projects/ppt-sourced/leroy-residence-ghatkesar/009.jpg",
    ],
    copy: [
      "The concept develops a full residence â€” plan, elevations and material palette â€” for a family site at Ghatkesar, on Hyderabad's eastern edge."
    ]
  }
];

(function () {
  var AUTOPLAY_MS = 3000;

  var grid = document.getElementById("projects");
  var projectList = document.getElementById("project-card-grid");
  var filterBar = document.getElementById("project-filters");
  var resultCount = document.getElementById("project-result-count");
  var modal = document.getElementById("project-modal");
  if (!grid || !projectList || !filterBar || !resultCount || !modal) return;

  var modalTitle = document.getElementById("modal-title");
  var modalLede = document.getElementById("modal-lede");
  var modalFacts = document.getElementById("modal-facts");
  var modalCopy = document.getElementById("modal-copy");
  var closeBtn = modal.querySelector(".modal-close");

  var tabs = modal.querySelectorAll(".modal-tab");
  var panels = { photos: document.getElementById("panel-photos"), info: document.getElementById("panel-info") };

  var slideImg = document.getElementById("slide-img");
  var slideshow = document.getElementById("slideshow");
  var slidePrev = document.getElementById("slide-prev");
  var slideNext = document.getElementById("slide-next");
  var slideCount = document.getElementById("slide-count");
  var slideToggle = document.getElementById("slide-toggle");
  var slideFill = document.getElementById("slide-progress-fill");

  var SERVICE_LABELS = {
    architecture: "Architecture",
    landscape: "Landscape",
    interiorDesign: "Interior Design",
    designBuild: "Design Build",
    masterPlan: "Master Plan"
  };

  var PROJECT_GROUPS = [
    { id: "residential", label: "Residential", matches: function (p) { return p.category === "residential"; } },
    { id: "hospitality", label: "Hospitality", matches: function (p) { return p.category === "hospitality"; } },
    { id: "commercial", label: "Commercial", matches: function (p) { return p.category === "commercial"; } },
    { id: "architecture", label: "Architecture", service: "architecture", matches: function (p) { return !!(p.services && p.services.architecture); } },
    { id: "interior-design", label: "Interior Design", service: "interiorDesign", matches: function (p) { return !!(p.services && p.services.interiorDesign); } },
    { id: "master-planning", label: "Master Planning", service: "masterPlan", matches: function (p) { return !!(p.services && p.services.masterPlan); } },
    { id: "landscape", label: "Landscape", service: "landscape", matches: function (p) { return !!(p.services && p.services.landscape); } }
  ];
  // Image numbers refer to each project's cover image followed by its gallery order.
  var DISCIPLINE_PHOTO_INDICES = {
    "my-eye-hospital": { architecture: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], interiorDesign: [19, 20, 21, 22, 23, 24, 25, 26, 27] },
    "golf-academy-aamby": { architecture: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 40], interiorDesign: [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39] },
    "delphi-resort": { architecture: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], interiorDesign: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
    "lv-stitching-unit": { architecture: [1], landscape: [1], interiorDesign: [] },
    "five-element-spa-resort": { architecture: [4, 5, 6, 7, 8, 9, 10, 11, 12], landscape: [1, 2, 3, 7, 8, 9, 10, 11, 12], interiorDesign: [] },
    "tmtc-pune": { architecture: [1], masterPlan: [1] },
    "spa-beach-resort-goa": { architecture: [3, 8, 10, 11, 12, 13], landscape: [2, 4, 5, 6, 7, 8, 9], interiorDesign: [] },
    "wellness-retreat-alwar": { architecture: [4, 5, 6, 7, 8, 12, 13, 14], interiorDesign: [], masterPlan: [1, 2, 3] },
    "kailasa-coonoor": { architecture: [4, 5, 6, 7, 8, 9, 10, 11], landscape: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11], masterPlan: [1, 2, 3] },
    "golf-apartments-aamby": { architecture: [8, 9, 10, 11], masterPlan: [1, 2, 3, 4, 5, 6, 7] },
    "golf-course-masterplans": { landscape: [1, 2], masterPlan: [1, 2] },
    "eco-resort-stok-ladakh": { architecture: [1, 2, 3, 4, 5], landscape: [1, 2, 3, 4], interiorDesign: [] },
    "pandit-ji-residence": { architecture: [1], interiorDesign: [] },
    "river-front-gated-community": { architecture: [3, 4, 5], landscape: [1, 2], masterPlan: [1, 2] },
    "namtech-proposed-campus": { architecture: [4, 5, 6, 7], masterPlan: [1, 2, 3] },
    "cavalosim-resort": { architecture: [1], masterPlan: [2] },
    "starter-hut-garry-player-dlf": { architecture: [1, 2], landscape: [1, 2] },
    "singhvi-residence-neetibagh": { architecture: [], interiorDesign: [1, 2, 3, 4, 5, 6, 7, 8] },
    "silverglades-farms-tarudhan": { architecture: [1, 3, 4, 5, 6], masterPlan: [2] },
    "oliander-farm-karjat": { architecture: [1, 2, 3, 4, 5], interiorDesign: [] },
    "wellness-resort-carnoustie-rameshwaram": { architecture: [1, 2, 3, 4, 5], interiorDesign: [] },
    "panchsheel-park-club-pool": { architecture: [1, 2, 3, 4, 5, 6], landscape: [1, 2] },
    "integrated-golf-haridwar": { landscape: [1, 2], masterPlan: [1, 2] },
    "ashtang-yog-ashram-syaat": { architecture: [3, 4, 5], masterPlan: [1, 2] },
    "meditation-centre-maunam": { architecture: [1, 2, 3, 4, 5, 6], interiorDesign: [7, 8] }
  };
  var currentFilter = "all";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var slides = [];
  var current = 0;
  var timer = null;
  var playing = true;
  var hovering = false;
  var activeTab = "photos";
  var currentTitle = "";

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function statusLabel(p) { return p.status === "built" ? "Built" : "Concept"; }

  function activeServices(p) {
    if (!p.services) return [];
    return Object.keys(SERVICE_LABELS).filter(function (key) { return !!p.services[key]; });
  }

  function projectImagesForFilter(p, filterId) {
    var images = [p.image].concat(p.gallery || []);
    var group = PROJECT_GROUPS.find(function (item) { return item.id === filterId; });
    if (!group || !group.service) return images;
    if (activeServices(p).length === 1) return images;

    var selections = DISCIPLINE_PHOTO_INDICES[p.id];
    var indices = selections && selections[group.service];
    if (!Array.isArray(indices)) return [];
    return indices.map(function (index) { return images[index - 1]; }).filter(Boolean);
  }

  /* ---------- Grid ---------- */
  function renderGrid() {
    var availableGroups = PROJECT_GROUPS.filter(function (group) {
      return projects.some(group.matches);
    });

    filterBar.innerHTML = '<button class="project-filter" type="button" data-filter="all" aria-pressed="false">All</button>' +
      availableGroups.map(function (group) {
        return '<button class="project-filter" type="button" data-filter="' + group.id + '" aria-pressed="false">' + group.label + '</button>';
      }).join("");

    filterBar.querySelectorAll(".project-filter").forEach(function (button) {
      button.addEventListener("click", function () {
        setProjectFilter(button.getAttribute("data-filter"), true);
      });
    });

    setProjectFilter(window.location.hash.slice(1), false);
    window.addEventListener("hashchange", function () {
      setProjectFilter(window.location.hash.slice(1), false);
    });
  }

  function setProjectFilter(filterId, updateUrl) {
    var selectedGroup = PROJECT_GROUPS.find(function (group) { return group.id === filterId; });
    currentFilter = selectedGroup ? selectedGroup.id : "all";

    var visibleProjects = currentFilter === "all"
      ? projects
      : projects.filter(function (p) {
        return selectedGroup.matches(p) && projectImagesForFilter(p, currentFilter).length > 0;
      });

    filterBar.querySelectorAll(".project-filter").forEach(function (button) {
      var isActive = button.getAttribute("data-filter") === currentFilter;
      button.setAttribute("aria-pressed", String(isActive));
      button.classList.toggle("is-active", isActive);
    });

    projectList.innerHTML = visibleProjects.map(function (p) {
      var cardImage = projectImagesForFilter(p, currentFilter)[0];
      return (
        '<button class="project-card" type="button" data-id="' + p.id + '" aria-label="View ' + p.title + ', ' + p.location + '">' +
          '<div class="project-media"><img src="' + cardImage + '" alt="" loading="lazy"></div>' +
          '<span class="project-caption"><span class="project-name">' + p.title + '</span><span class="project-location">' + p.location + '</span></span>' +
        '</button>'
      );
    }).join("");

    resultCount.textContent = "Showing " + visibleProjects.length + " projects";
    projectList.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("click", function () { openProject(card.getAttribute("data-id")); });
    });

    if (updateUrl) {
      window.history.replaceState(null, "", currentFilter === "all" ? "#projects" : "#" + currentFilter);
    }
  }

  /* ---------- Slideshow ---------- */
  function restartProgress() {
    slideFill.classList.remove("is-running");
    if (playing && slides.length > 1) {
      void slideFill.offsetWidth; // reflow so the animation restarts
      slideFill.classList.add("is-running");
    }
  }

  function clearTimer() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function schedule() {
    clearTimer();
    restartProgress();
    if (!playing || hovering || slides.length < 2 || activeTab !== "photos" || !modal.classList.contains("is-open")) {
      slideFill.classList.remove("is-running");
      return;
    }
    timer = setTimeout(function () { goTo(current + 1, true); }, AUTOPLAY_MS);
  }

  function preload(i) {
    if (!slides.length) return;
    var img = new Image();
    img.src = slides[(i + slides.length) % slides.length];
  }

  function goTo(index, fromTimer) {
    if (!slides.length) return;
    current = (index + slides.length) % slides.length;
    slideImg.classList.add("is-fading");
    var src = slides[current];
    var done = function () {
      slideImg.src = src;
      slideImg.alt = currentTitle + " â€” photo " + (current + 1) + " of " + slides.length;
      slideImg.classList.remove("is-fading");
    };
    setTimeout(done, reduceMotion ? 0 : 150);
    slideCount.textContent = pad(current + 1) + " / " + pad(slides.length);
    preload(current + 1);
    schedule();
  }

  function setPlaying(state) {
    playing = state;
    slideToggle.textContent = playing ? "Pause" : "Play";
    slideToggle.setAttribute("aria-label", playing ? "Pause slideshow" : "Play slideshow");
    schedule();
  }

  slidePrev.addEventListener("click", function () { goTo(current - 1); });
  slideNext.addEventListener("click", function () { goTo(current + 1); });
  slideToggle.addEventListener("click", function () { setPlaying(!playing); });

  // touch swipe
  var touchX = null;
  slideshow.addEventListener("touchstart", function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  slideshow.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { clearTimer(); slideFill.classList.remove("is-running"); } else { schedule(); }
  });

  /* ---------- Tabs ---------- */
  function showTab(name) {
    activeTab = name;
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === name;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    panels.photos.hidden = name !== "photos";
    panels.info.hidden = name !== "info";
    schedule();
  }

  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { showTab(t.getAttribute("data-tab")); });
    t.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
        showTab(next.getAttribute("data-tab"));
        next.focus();
      }
    });
  });

  /* ---------- Modal ---------- */
  function openProject(id) {
    var p = projects.find(function (item) { return item.id === id; });
    if (!p) return;

    currentTitle = p.title;
    modalTitle.textContent = p.title;
    modalLede.textContent = p.lede;

    var serviceRow = activeServices(p).map(function (key) { return SERVICE_LABELS[key]; }).join(" Â· ");
    modalFacts.innerHTML =
      '<div class="fact"><span>Status</span><span>' + statusLabel(p) + '</span></div>' +
      '<div class="fact"><span>Location</span><span>' + p.location + '</span></div>' +
      (serviceRow ? '<div class="fact"><span>Services</span><span>' + serviceRow + '</span></div>' : '') +
      p.facts.map(function (f) { return '<div class="fact"><span></span><span>' + f + '</span></div>'; }).join("");
    modalCopy.innerHTML = p.copy.map(function (para) { return "<p>" + para + "</p>"; }).join("");

    slides = projectImagesForFilter(p, currentFilter);
    var single = slides.length < 2;
    slidePrev.hidden = single;
    slideNext.hidden = single;
    slideToggle.hidden = single;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.scrollTop = 0;

    hovering = false;
    slideImg.classList.remove("is-fading");
    slideImg.src = slides[0];
    slideImg.alt = p.title + " â€” photo 1 of " + slides.length;
    current = 0;
    slideCount.textContent = pad(1) + " / " + pad(slides.length);
    preload(1);

    showTab("photos");
    setPlaying(!reduceMotion);
  }

  function closeProject() {
    clearTimer();
    slideFill.classList.remove("is-running");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", closeProject);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeProject(); });
  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeProject();
    else if (activeTab === "photos" && e.target.closest && !e.target.closest(".modal-tabs")) {
      if (e.key === "ArrowRight") goTo(current + 1);
      else if (e.key === "ArrowLeft") goTo(current - 1);
    }
  });

  renderGrid();
  var requestedProject = new URLSearchParams(window.location.search).get("project");
  if (requestedProject) openProject(requestedProject);
})();
