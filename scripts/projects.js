// Studio VVA — project data + index/modal behaviour
// Edit the objects below to add, remove or update projects.
// status: "built" or "concept" — shown as a small badge on the card and in the modal.
// services: toggle which service tags show on the card/modal — set any of these
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
    image: "assets/img/projects/my-eye-hospital/02.jpg",
    facts: ["90 bed hospital", "1,00,000 sft, 2.5 acre", "Architecture & Interiors", "Client: Dr Gaonkar"],
    short: "A wellness-led hospital campus planned around courtyard light and cross ventilation.",
    lede: "A 90-bed eye hospital and wellness centre where the courtyard, not the corridor, organises the plan.",
    gallery: [
      "assets/img/projects/my-eye-hospital/03.jpg",
      "assets/img/projects/my-eye-hospital/04.jpg",
      "assets/img/projects/my-eye-hospital/05.jpg",
      "assets/img/projects/my-eye-hospital/06.jpg",
      "assets/img/projects/my-eye-hospital/07.jpg",
      "assets/img/projects/my-eye-hospital/08.jpg",
      "assets/img/projects/my-eye-hospital/09.jpg",
      "assets/img/projects/my-eye-hospital/10.jpg",
      "assets/img/projects/my-eye-hospital/11.jpg",
      "assets/img/projects/my-eye-hospital/12.jpg",
      "assets/img/projects/my-eye-hospital/13.jpg",
      "assets/img/projects/my-eye-hospital/14.jpg",
      "assets/img/projects/my-eye-hospital/15.jpg",
      "assets/img/projects/my-eye-hospital/16.jpg",
      "assets/img/projects/my-eye-hospital/17.jpg",
      "assets/img/projects/my-eye-hospital/18.jpg",
      "assets/img/projects/my-eye-hospital/19.jpg",
      "assets/img/projects/my-eye-hospital/20.jpg",
      "assets/img/projects/my-eye-hospital/21.jpg"
    ],
    copy: [
      "The brief called for a hospital that did not read as one. Patient wards, consulting suites and recovery gardens are arranged around a sequence of internal courtyards, so daylight and air move through the building rather than around it.",
      "Passive cooling and daylighting reduce the load on mechanical systems across the 2.5-acre site, in keeping with the studio's long-standing focus on wellness architecture.",
      "Interiors carry the same calm through to material choice — stone, timber and soft, indirect light replace the clinical palette usually associated with hospital design."
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
    image: "assets/img/projects/golf-academy-aamby.jpg",
    facts: ["35,000 sft", "Architecture & Interiors", "Client: Sahara India"],
    short: "A golf academy and clubhouse set into the folds of the Aamby Valley landscape.",
    lede: "A clubhouse and teaching academy that steps down the valley slope instead of levelling it.",
    gallery: [
      "assets/img/projects/golf-academy-aamby/02.jpg",
      "assets/img/projects/golf-academy-aamby/03.jpg",
      "assets/img/projects/golf-academy-aamby/04.jpg",
      "assets/img/projects/golf-academy-aamby/05.jpg",
      "assets/img/projects/golf-academy-aamby/06.jpg",
      "assets/img/projects/golf-academy-aamby/07.jpg",
      "assets/img/projects/golf-academy-aamby/08.jpg",
      "assets/img/projects/golf-academy-aamby/09.jpg",
      "assets/img/projects/golf-academy-aamby/10.jpg",
      "assets/img/projects/golf-academy-aamby/11.jpg",
      "assets/img/projects/golf-academy-aamby/12.jpg",
      "assets/img/projects/golf-academy-aamby/13.jpg",
      "assets/img/projects/golf-academy-aamby/14.jpg",
      "assets/img/projects/golf-academy-aamby/15.jpg",
      "assets/img/projects/golf-academy-aamby/16.jpg",
      "assets/img/projects/golf-academy-aamby/17.jpg",
      "assets/img/projects/golf-academy-aamby/18.jpg",
      "assets/img/projects/golf-academy-aamby/19.jpg",
      "assets/img/projects/golf-academy-aamby/20.jpg",
      "assets/img/projects/golf-academy-aamby/21.jpg",
      "assets/img/projects/golf-academy-aamby/22.jpg",
      "assets/img/projects/golf-academy-aamby/23.jpg",
      "assets/img/projects/golf-academy-aamby/24.jpg",
      "assets/img/projects/golf-academy-aamby/25.jpg",
      "assets/img/projects/golf-academy-aamby/26.jpg",
      "assets/img/projects/golf-academy-aamby/27.jpg",
      "assets/img/projects/golf-academy-aamby/28.jpg",
      "assets/img/projects/golf-academy-aamby/29.jpg",
      "assets/img/projects/golf-academy-aamby/30.jpg",
      "assets/img/projects/golf-academy-aamby/31.jpg",
      "assets/img/projects/golf-academy-aamby/32.jpg",
      "assets/img/projects/golf-academy-aamby/33.jpg",
      "assets/img/projects/golf-academy-aamby/34.jpg",
      "assets/img/projects/golf-academy-aamby/35.jpg"
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
    image: "assets/img/projects/delphi-resort/02.jpg",
    facts: ["20,000 sft, 5 acre", "Architecture & Interiors", "Boutique resort"],
    short: "A boutique resort on a 5-acre site, built low and close to the ground it sits on.",
    lede: "A small resort designed to sit lightly on a 5-acre site above Canacona's coastline.",
    gallery: [
      "assets/img/projects/delphi-resort/03.jpg",
      "assets/img/projects/delphi-resort/04.jpg",
      "assets/img/projects/delphi-resort/05.jpg",
      "assets/img/projects/delphi-resort/06.jpg",
      "assets/img/projects/delphi-resort/07.jpg",
      "assets/img/projects/delphi-resort/08.jpg",
      "assets/img/projects/delphi-resort/09.jpg",
      "assets/img/projects/delphi-resort/10.jpg",
      "assets/img/projects/delphi-resort/11.jpg",
      "assets/img/projects/delphi-resort/12.jpg",
      "assets/img/projects/delphi-resort/13.jpg",
      "assets/img/projects/delphi-resort/14.jpg",
      "assets/img/projects/delphi-resort/15.jpg",
      "assets/img/projects/delphi-resort/16.jpg",
      "assets/img/projects/delphi-resort/17.jpg",
      "assets/img/projects/delphi-resort/18.jpg",
      "assets/img/projects/delphi-resort/19.jpg",
      "assets/img/projects/delphi-resort/20.jpg",
      "assets/img/projects/delphi-resort/21.jpg",
      "assets/img/projects/delphi-resort/22.jpg",
      "assets/img/projects/delphi-resort/23.jpg",
      "assets/img/projects/delphi-resort/24.jpg",
      "assets/img/projects/delphi-resort/25.jpg",
      "assets/img/projects/delphi-resort/26.jpg",
      "assets/img/projects/delphi-resort/27.jpg",
      "assets/img/projects/delphi-resort/28.jpg",
      "assets/img/projects/delphi-resort/29.jpg",
      "assets/img/projects/delphi-resort/30.jpg",
      "assets/img/projects/delphi-resort/31.jpg",
      "assets/img/projects/delphi-resort/32.jpg",
      "assets/img/projects/delphi-resort/33.jpg",
      "assets/img/projects/delphi-resort/34.jpg",
      "assets/img/projects/delphi-resort/35.jpg",
      "assets/img/projects/delphi-resort/36.jpg",
      "assets/img/projects/delphi-resort/37.jpg",
      "assets/img/projects/delphi-resort/38.jpg",
      "assets/img/projects/delphi-resort/39.jpg",
      "assets/img/projects/delphi-resort/40.jpg"
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
    image: "assets/img/projects/lv-stitching-unit.jpg",
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
    image: "assets/img/projects/lv-museum-paris.jpg",
    facts: ["12 galleries", "MEP & interior detailing coordination", "Client: LV, Paris"],
    short: "Sub-consultancy on interior detailing and MEP coordination across twelve museum galleries.",
    lede: "Twelve galleries, coordinated down to the services that keep the artwork safe.",
    gallery: [
      "assets/img/projects/lv-museum-paris/01.jpg",
      "assets/img/projects/lv-museum-paris/02.jpg",
      "assets/img/projects/lv-museum-paris/03.jpg",
      "assets/img/projects/lv-museum-paris/04.jpg",
      "assets/img/projects/lv-museum-paris/05.jpg",
      "assets/img/projects/lv-museum-paris/06.jpg"
    ],
    copy: [
      "The studio's role was consultancy, not authorship — sub-consulting on interior detailing and MEP coordination across the museum's twelve galleries, where climate control and lighting have to sit invisibly behind the architecture."
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
    image: "assets/img/projects/five-element-spa-resort.jpg",
    facts: ["1,45,000 sft", "Architecture, Interiors & Landscaping", "Client: Sahara India"],
    short: "A destination spa organised around the five elements, set into the Aamby Valley hillside.",
    lede: "A 1,45,000 sft destination spa planned as a sequence of five elemental experiences.",
    gallery: [
      "assets/img/projects/five-element-spa-resort/01.jpg",
      "assets/img/projects/five-element-spa-resort/02.jpg",
      "assets/img/projects/five-element-spa-resort/03.jpg",
      "assets/img/projects/five-element-spa-resort/04.jpg",
      "assets/img/projects/five-element-spa-resort/05.jpg",
      "assets/img/projects/five-element-spa-resort/06.jpg",
      "assets/img/projects/five-element-spa-resort/07.jpg",
      "assets/img/projects/five-element-spa-resort/08.jpg",
      "assets/img/projects/five-element-spa-resort/09.jpg",
      "assets/img/projects/five-element-spa-resort/10.jpg",
      "assets/img/projects/five-element-spa-resort/11.jpg"
    ],
    copy: [
      "Earth, water, fire, air and space each shape a different part of the resort — from treatment pavilions to open-air soaking pools — with architecture, interiors and landscaping developed together rather than handed off in stages."
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
      "Working at concept stage, the brief was to give TMTC's training campus an architectural language suited to focused, residential learning — quiet, orderly, and built around shared courts rather than corridors."
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
    image: "assets/img/projects/spa-beach-resort-goa.jpg",
    facts: ["2,50,000 sft, 12 acre", "Architecture, Interiors & Landscaping"],
    short: "A 12-acre beachfront wellness resort designed end to end, from masterplan to interiors.",
    lede: "A 2,50,000 sft wellness resort where architecture, interiors and landscape were designed as one brief.",
    gallery: [
      "assets/img/projects/spa-beach-resort-goa/01.jpg",
      "assets/img/projects/spa-beach-resort-goa/02.jpg",
      "assets/img/projects/spa-beach-resort-goa/03.jpg",
      "assets/img/projects/spa-beach-resort-goa/04.jpg",
      "assets/img/projects/spa-beach-resort-goa/05.jpg",
      "assets/img/projects/spa-beach-resort-goa/06.jpg",
      "assets/img/projects/spa-beach-resort-goa/07.jpg",
      "assets/img/projects/spa-beach-resort-goa/08.jpg"
    ],
    copy: [
      "Guest villas, spa pavilions and beachfront dining are laid out across a 12-acre site with the landscaping treated as load-bearing to the experience — shade, water and planting doing as much work as the buildings themselves."
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
    image: "assets/img/projects/wellness-retreat-alwar.jpg",
    facts: ["400 acre", "Architecture & Interiors", "Client: Intelligent Cities / Central Park"],
    short: "A 400-acre golf-based wellness retreat planned across the Aravalli foothills.",
    lede: "A wellness retreat spread across 400 acres, with golf as one part of a larger landscape.",
    gallery: [
      "assets/img/projects/wellness-retreat-alwar/01.jpg",
      "assets/img/projects/wellness-retreat-alwar/02.jpg",
      "assets/img/projects/wellness-retreat-alwar/03.jpg",
      "assets/img/projects/wellness-retreat-alwar/04.jpg",
      "assets/img/projects/wellness-retreat-alwar/05.jpg",
      "assets/img/projects/wellness-retreat-alwar/06.jpg",
      "assets/img/projects/wellness-retreat-alwar/07.jpg",
      "assets/img/projects/wellness-retreat-alwar/08.jpg",
      "assets/img/projects/wellness-retreat-alwar/09.jpg",
      "assets/img/projects/wellness-retreat-alwar/10.jpg",
      "assets/img/projects/wellness-retreat-alwar/11.jpg",
      "assets/img/projects/wellness-retreat-alwar/12.jpg",
      "assets/img/projects/wellness-retreat-alwar/13.jpg",
      "assets/img/projects/wellness-retreat-alwar/14.jpg"
    ],
    copy: [
      "At this scale the architecture follows the land rather than the other way round — villas, spa and clubhouse are sited to work with the site's natural contours and water bodies rather than reshape them."
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
    image: "assets/img/projects/golf-apartments-aamby.jpg",
    facts: ["6,59,000 sft", "Residential apartments", "Client: Sahara India"],
    short: "A 6,59,000 sft residential apartment community set along the golf course.",
    lede: "A residential community planned around fairway views rather than a central amenity block.",
    gallery: [
      "assets/img/projects/golf-apartments-aamby/01.jpg",
      "assets/img/projects/golf-apartments-aamby/02.jpg",
      "assets/img/projects/golf-apartments-aamby/03.jpg",
      "assets/img/projects/golf-apartments-aamby/04.jpg",
      "assets/img/projects/golf-apartments-aamby/05.jpg",
      "assets/img/projects/golf-apartments-aamby/06.jpg",
      "assets/img/projects/golf-apartments-aamby/07.jpg",
      "assets/img/projects/golf-apartments-aamby/08.jpg",
      "assets/img/projects/golf-apartments-aamby/09.jpg",
      "assets/img/projects/golf-apartments-aamby/10.jpg",
      "assets/img/projects/golf-apartments-aamby/11.jpg",
      "assets/img/projects/golf-apartments-aamby/12.jpg",
      "assets/img/projects/golf-apartments-aamby/13.jpg"
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
    image: "assets/img/projects/sahay-residence.jpg",
    facts: ["10,750 sft, 500 sqm"],
    short: "A private residence in Gurugram, designed with the family's day-to-day use as the starting point.",
    lede: "A 10,750 sft house planned around how the family actually uses each room.",
    gallery: [
      "assets/img/projects/sahay-residence/02.jpg",
      "assets/img/projects/sahay-residence/03.jpg",
      "assets/img/projects/sahay-residence/04.jpg",
      "assets/img/projects/sahay-residence/05.jpg",
      "assets/img/projects/sahay-residence/06.jpg",
      "assets/img/projects/sahay-residence/07.jpg",
      "assets/img/projects/sahay-residence/08.jpg",
      "assets/img/projects/sahay-residence/09.jpg",
      "assets/img/projects/sahay-residence/10.jpg",
      "assets/img/projects/sahay-residence/11.jpg",
      "assets/img/projects/sahay-residence/12.jpg",
      "assets/img/projects/sahay-residence/13.jpg",
      "assets/img/projects/sahay-residence/14.jpg",
      "assets/img/projects/sahay-residence/15.jpg",
      "assets/img/projects/sahay-residence/16.jpg",
      "assets/img/projects/sahay-residence/17.jpg",
      "assets/img/projects/sahay-residence/18.jpg",
      "assets/img/projects/sahay-residence/19.jpg",
      "assets/img/projects/sahay-residence/20.jpg",
      "assets/img/projects/sahay-residence/21.jpg",
      "assets/img/projects/sahay-residence/22.jpg",
      "assets/img/projects/sahay-residence/23.jpg",
      "assets/img/projects/sahay-residence/24.jpg",
      "assets/img/projects/sahay-residence/25.jpg"
    ],
    copy: [
      "The plan was worked out room by room with the family before it was worked out on paper — the result is a house whose formal moments (the entrance, the stair, the living court) sit alongside very ordinary, well-used everyday spaces."
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
    image: "assets/img/projects/chandras-residence.jpg",
    facts: ["7,750 sft, 2.5 acre"],
    short: "A farmhouse residence on a 2.5-acre plot at the edge of the city.",
    lede: "A 2.5-acre farmhouse that treats the garden as the main room of the house.",
    gallery: [
      "assets/img/projects/chandras-residence/02.jpg",
      "assets/img/projects/chandras-residence/03.jpg",
      "assets/img/projects/chandras-residence/04.jpg",
      "assets/img/projects/chandras-residence/05.jpg",
      "assets/img/projects/chandras-residence/06.jpg",
      "assets/img/projects/chandras-residence/07.jpg",
      "assets/img/projects/chandras-residence/08.jpg",
      "assets/img/projects/chandras-residence/09.jpg",
      "assets/img/projects/chandras-residence/10.jpg",
      "assets/img/projects/chandras-residence/11.jpg",
      "assets/img/projects/chandras-residence/12.jpg",
      "assets/img/projects/chandras-residence/13.jpg",
      "assets/img/projects/chandras-residence/14.jpg",
      "assets/img/projects/chandras-residence/15.jpg",
      "assets/img/projects/chandras-residence/16.jpg",
      "assets/img/projects/chandras-residence/17.jpg",
      "assets/img/projects/chandras-residence/18.jpg",
      "assets/img/projects/chandras-residence/19.jpg",
      "assets/img/projects/chandras-residence/20.jpg",
      "assets/img/projects/chandras-residence/21.jpg"
    ],
    copy: [
      "Built form is kept low and set back from the boundary, leaving the acreage free for the garden the family actually wanted — the house reads as a pavilion within it, not the other way round."
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
    image: "assets/img/projects/cottage-shamrock.jpg",
    facts: ["8,000 sft, 7 acre", "Client: ACIL Industries"],
    short: "A hillside cottage retreat on 7 acres in Landour, built to the slope rather than against it.",
    lede: "A Himalayan cottage that steps down 7 acres of Landour hillside instead of cutting into it.",
    gallery: [
      "assets/img/projects/cottage-shamrock/02.jpg",
      "assets/img/projects/cottage-shamrock/03.jpg",
      "assets/img/projects/cottage-shamrock/04.jpg",
      "assets/img/projects/cottage-shamrock/05.jpg",
      "assets/img/projects/cottage-shamrock/06.jpg",
      "assets/img/projects/cottage-shamrock/07.jpg",
      "assets/img/projects/cottage-shamrock/08.jpg",
      "assets/img/projects/cottage-shamrock/09.jpg",
      "assets/img/projects/cottage-shamrock/10.jpg",
      "assets/img/projects/cottage-shamrock/11.jpg",
      "assets/img/projects/cottage-shamrock/12.jpg",
      "assets/img/projects/cottage-shamrock/13.jpg",
      "assets/img/projects/cottage-shamrock/14.jpg",
      "assets/img/projects/cottage-shamrock/15.jpg",
      "assets/img/projects/cottage-shamrock/16.jpg",
      "assets/img/projects/cottage-shamrock/17.jpg",
      "assets/img/projects/cottage-shamrock/18.jpg",
      "assets/img/projects/cottage-shamrock/19.jpg",
      "assets/img/projects/cottage-shamrock/20.jpg",
      "assets/img/projects/cottage-shamrock/21.jpg",
      "assets/img/projects/cottage-shamrock/22.jpg",
      "assets/img/projects/cottage-shamrock/23.jpg",
      "assets/img/projects/cottage-shamrock/24.jpg",
      "assets/img/projects/cottage-shamrock/25.jpg"
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
    image: "assets/img/projects/tideman-residence.jpg",
    facts: ["7,500 sft, 500 sqm"],
    short: "A private house in Pune built around a compact, efficient footprint.",
    lede: "A 7,500 sft house designed for a family that wanted less house, not more.",
    gallery: [
      "assets/img/projects/tideman-residence/02.jpg",
      "assets/img/projects/tideman-residence/03.jpg",
      "assets/img/projects/tideman-residence/04.jpg",
      "assets/img/projects/tideman-residence/05.jpg",
      "assets/img/projects/tideman-residence/06.jpg",
      "assets/img/projects/tideman-residence/07.jpg",
      "assets/img/projects/tideman-residence/08.jpg",
      "assets/img/projects/tideman-residence/09.jpg",
      "assets/img/projects/tideman-residence/10.jpg",
      "assets/img/projects/tideman-residence/11.jpg",
      "assets/img/projects/tideman-residence/12.jpg",
      "assets/img/projects/tideman-residence/13.jpg"
    ],
    copy: [
      "Rather than maximising built area, the brief pushed the other way — a tighter, more efficient plan with fewer, better-used rooms, and the savings in footprint spent instead on light and outdoor space."
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
    image: "assets/img/projects/kailasa-coonoor.jpg",
    facts: ["20 acre", "Net-zero planning", "Client: Vikas Trust"],
    short: "An ashram and alternate-living community on 20 acres, planned to net-zero principles.",
    lede: "A 20-acre ashram community designed as an integrated, net-zero settlement.",
    gallery: [
      "assets/img/projects/kailasa-coonoor/01.jpg",
      "assets/img/projects/kailasa-coonoor/02.jpg",
      "assets/img/projects/kailasa-coonoor/03.jpg",
      "assets/img/projects/kailasa-coonoor/04.jpg",
      "assets/img/projects/kailasa-coonoor/05.jpg",
      "assets/img/projects/kailasa-coonoor/06.jpg",
      "assets/img/projects/kailasa-coonoor/07.jpg",
      "assets/img/projects/kailasa-coonoor/08.jpg",
      "assets/img/projects/kailasa-coonoor/09.jpg",
      "assets/img/projects/kailasa-coonoor/10.jpg",
      "assets/img/projects/kailasa-coonoor/11.jpg"
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
    image: "assets/img/projects/mds-factory-palwal.jpg",
    facts: ["60,000 sft, 6 acre", "Client: Mahindra Defence Systems"],
    short: "A factory and corporate office building for Mahindra Defence Systems on a 6-acre plot.",
    lede: "A 60,000 sft factory and office building planned for a defence-manufacturing client.",
    gallery: [
      "assets/img/projects/mds-factory-palwal/02.jpg",
      "assets/img/projects/mds-factory-palwal/03.jpg",
      "assets/img/projects/mds-factory-palwal/04.jpg",
      "assets/img/projects/mds-factory-palwal/05.jpg",
      "assets/img/projects/mds-factory-palwal/06.jpg",
      "assets/img/projects/mds-factory-palwal/07.jpg",
      "assets/img/projects/mds-factory-palwal/08.jpg",
      "assets/img/projects/mds-factory-palwal/09.jpg",
      "assets/img/projects/mds-factory-palwal/10.jpg",
      "assets/img/projects/mds-factory-palwal/11.jpg",
      "assets/img/projects/mds-factory-palwal/12.jpg"
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
    image: "assets/img/projects/ritz-restaurant-lucknow.jpg",
    facts: ["Interiors"],
    short: "Interior design for a speciality restaurant at the Ritz in Lucknow.",
    lede: "An interior fit-out built around the pace and theatre of an open dining room.",
    gallery: [
      "assets/img/projects/ritz-restaurant-lucknow/02.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/03.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/04.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/05.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/06.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/07.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/08.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/09.jpg",
      "assets/img/projects/ritz-restaurant-lucknow/10.jpg"
    ],
    copy: [
      "The interiors were designed to carry a restaurant's daily rhythm — seating, lighting and service lines worked out together so the room performs as well at a quiet lunch as on a full evening."
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
    image: "assets/img/projects/golf-academy-ansals.jpg",
    facts: ["13,000 sft", "Client: Ansals API"],
    short: "A 13,000 sft golf academy and clubhouse for Ansals API in Lucknow.",
    lede: "A compact clubhouse and academy built to sit comfortably along the fairway.",
    gallery: [
      "assets/img/projects/golf-academy-ansals/02.jpg",
      "assets/img/projects/golf-academy-ansals/03.jpg"
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
    image: "assets/img/projects/golf-course-masterplans.jpg",
    facts: ["Golf course master planning"],
    short: "Master planning for golf-led developments in Maharashtra and Bangaluru.",
    lede: "Master plans for two golf-led developments, worked out at the scale of the land itself.",
    gallery: [
      "assets/img/projects/golf-course-masterplans/01.jpg"
    ],
    copy: [
      "At masterplan stage the work is about sequencing — holes, water bodies, villas and infrastructure are laid out together so the golf course and the real estate around it support each other rather than compete for the same ground."
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
    image: "assets/img/projects/eco-resort-stok-ladakh/02.jpg",
    facts: ["30,000 sft", "Architecture, Interiors & Landscaping", "Client: Good Earth Ecotourism"],
    short: "A 30,000 sft eco resort in Ladakh, built to the constraints of a high-altitude desert.",
    lede: "A resort built for Ladakh's extremes — high altitude, low rainfall, and a short building season.",
    gallery: [
      "assets/img/projects/eco-resort-stok-ladakh/03.jpg",
      "assets/img/projects/eco-resort-stok-ladakh/04.jpg",
      "assets/img/projects/eco-resort-stok-ladakh/05.jpg"
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
    image: "assets/img/projects/namtech-campus-interiors.jpg",
    facts: ["60,000 sft", "Campus interiors", "Client: Arcelor Mittal Nippon Steel"],
    short: "Transitionary campus interiors for NAM:TECH's skills university, hosted at IIT Gandhi Nagar.",
    lede: "60,000 sft of campus interiors built to house a new skills university while its permanent home is built.",
    gallery: [
      "assets/img/projects/namtech-campus-interiors/02.jpg",
      "assets/img/projects/namtech-campus-interiors/03.jpg",
      "assets/img/projects/namtech-campus-interiors/04.jpg",
      "assets/img/projects/namtech-campus-interiors/05.jpg",
      "assets/img/projects/namtech-campus-interiors/06.jpg",
      "assets/img/projects/namtech-campus-interiors/07.jpg",
      "assets/img/projects/namtech-campus-interiors/08.jpg",
      "assets/img/projects/namtech-campus-interiors/09.jpg",
      "assets/img/projects/namtech-campus-interiors/10.jpg",
      "assets/img/projects/namtech-campus-interiors/11.jpg",
      "assets/img/projects/namtech-campus-interiors/12.jpg",
      "assets/img/projects/namtech-campus-interiors/13.jpg",
      "assets/img/projects/namtech-campus-interiors/14.jpg",
      "assets/img/projects/namtech-campus-interiors/15.jpg",
      "assets/img/projects/namtech-campus-interiors/16.jpg"
    ],
    copy: [
      "As a transitionary campus, the interiors had to do double duty — flexible teaching and common spaces that work now, inside an existing IIT building, and that can inform the permanent AMSU campus that follows."
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
    image: "assets/img/projects/desai-residence.jpg",
    facts: ["9,000 sft, 1,000 sqm"],
    short: "A family house in Madgaon built in timber and laterite, in the Goan residential tradition.",
    lede: "A 9,000 sft house built firmly within Goa's own residential tradition.",
    gallery: [
      "assets/img/projects/desai-residence/02.jpg"
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
      "The brief was reuse, not rebuild — retaining as much of the existing structure and French-quarter character as possible while bringing the house up to a contemporary standard of living."
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
    image: "assets/img/projects/river-front-gated-community.jpg",
    facts: ["Residential gated community"],
    short: "A riverfront gated community of villas set among mature palm cover.",
    lede: "A gated riverfront community planned to work with its palm cover, not clear it.",
    gallery: [
      "assets/img/projects/river-front-gated-community/01.jpg",
      "assets/img/projects/river-front-gated-community/02.jpg",
      "assets/img/projects/river-front-gated-community/03.jpg",
      "assets/img/projects/river-front-gated-community/04.jpg",
      "assets/img/projects/river-front-gated-community/05.jpg"
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
    image: "assets/img/projects/namtech-proposed-campus.jpg",
    facts: ["6,30,000 smt, 150 acre", "Client: Arcelor Mittal Nippon Steel"],
    short: "Concept campus planning for a 150-acre skills university near Ahmedabad.",
    lede: "A 150-acre concept masterplan for a skills university built around industry training.",
    gallery: [
      "assets/img/projects/namtech-proposed-campus/01.jpg",
      "assets/img/projects/namtech-proposed-campus/02.jpg",
      "assets/img/projects/namtech-proposed-campus/03.jpg",
      "assets/img/projects/namtech-proposed-campus/04.jpg",
      "assets/img/projects/namtech-proposed-campus/05.jpg",
      "assets/img/projects/namtech-proposed-campus/06.jpg",
      "assets/img/projects/namtech-proposed-campus/07.jpg"
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
    image: "assets/img/projects/cavalosim-resort.jpg",
    facts: ["30,000 sft, 2.5 acre", "Architectural master plan"],
    short: "A luxury resort master plan for a 2.5-acre site at Cavelossim.",
    lede: "A 2.5-acre luxury resort, worked out first as a master plan.",
    gallery: [
      "assets/img/projects/cavalosim-resort/01.jpg",
      "assets/img/projects/cavalosim-resort/02.jpg"
    ],
    copy: [
      "At master-plan stage, the work sets out how guest blocks, pool and beach access sit together on a tight 2.5-acre site — the framework the resort's later architecture and interiors will build on."
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
    image: "assets/img/projects/machaan-aamby-valley.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "An elevated timber machaan tucked into the tree line at Aamby Valley.",
    lede: "A raised timber machaan, built as one of several small structures across the resort's 50 acres.",
    gallery: [
      "assets/img/projects/machaan-aamby-valley/02.jpg"
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
    image: "assets/img/projects/a-frame-aamby-valley.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "A steep-roofed A-frame cabin, one of the resort's smaller timber typologies.",
    lede: "A compact A-frame cabin built as a model unit for the Aamby Valley timber resort.",
    gallery: [
      "assets/img/projects/a-frame-aamby-valley/02.jpg",
      "assets/img/projects/a-frame-aamby-valley/03.jpg"
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
    image: "assets/img/projects/burmese-chalet-aamby-valley.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "A timber chalet built in the Burmese hill tradition, set within the Aamby Valley resort.",
    lede: "A chalet that borrows its construction logic from Burmese hill architecture.",
    gallery: [
      "assets/img/projects/burmese-chalet-aamby-valley/02.jpg",
      "assets/img/projects/burmese-chalet-aamby-valley/03.jpg",
      "assets/img/projects/burmese-chalet-aamby-valley/04.jpg",
      "assets/img/projects/burmese-chalet-aamby-valley/05.jpg",
      "assets/img/projects/burmese-chalet-aamby-valley/06.jpg"
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
    image: "assets/img/projects/hermitage-chalets-aamby-valley/03.jpg",
    facts: ["Part of the Timber Resort, Aamby Valley (2,00,000 sft, 50 acre)", "Client: Sahara India"],
    short: "A cluster of stone-and-timber hermitage chalets stepped into the Aamby Valley hillside.",
    lede: "A group of hermitage chalets, each a stone-based, timber-topped retreat against the hills.",
    gallery: [
      "assets/img/projects/hermitage-chalets-aamby-valley/02.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/04.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/05.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/06.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/07.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/08.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/09.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/10.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/11.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/12.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/13.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/14.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/15.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/16.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/17.jpg",
      "assets/img/projects/hermitage-chalets-aamby-valley/18.jpg"
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
    image: "assets/img/projects/bridges-pga-aamby-valley.jpg",
    facts: ["18-hole championship golf course", "Client: Sahara India / PGA"],
    short: "Timber bridges and cart paths built across the 18-hole PGA course at Aamby Valley.",
    lede: "The bridges and crossings that let an 18-hole championship course read as one continuous landscape.",
    gallery: [
      "assets/img/projects/bridges-pga-aamby-valley/02.jpg",
      "assets/img/projects/bridges-pga-aamby-valley/03.jpg",
      "assets/img/projects/bridges-pga-aamby-valley/04.jpg",
      "assets/img/projects/bridges-pga-aamby-valley/05.jpg",
      "assets/img/projects/bridges-pga-aamby-valley/06.jpg"
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
    image: "assets/img/projects/bridges-bulkhead-garry-player-dlf.jpg",
    facts: ["27-hole golf course", "Client: DLF Ltd"],
    short: "Timber bridges and bulkheads built along DLF's 27-hole Garry Player golf course.",
    lede: "Bridges and bulkheads detailed to hold a 27-hole course's edges against water and traffic.",
    gallery: [
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/02.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/03.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/04.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/05.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/06.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/07.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/08.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/09.jpg",
      "assets/img/projects/bridges-bulkhead-garry-player-dlf/10.jpg"
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
    image: "assets/img/projects/starter-hut-garry-player-dlf.jpg",
    facts: ["27-hole golf course", "Client: DLF Ltd"],
    short: "A small timber starter hut marking the first tee of DLF's Garry Player course.",
    lede: "A starter hut built as a small, deliberate marker at the start of the round.",
    gallery: [
      "assets/img/projects/starter-hut-garry-player-dlf/02.jpg"
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
    image: "assets/img/projects/singhvi-residence-neetibagh.jpg",
    facts: ["12,500 sft, 800 sqm"],
    short: "A 12,500 sft family residence in Neetibagh, New Delhi.",
    lede: "A 12,500 sft house built around a sequence of top-lit, timber-detailed interior spaces.",
    gallery: [
      "assets/img/projects/singhvi-residence-neetibagh/02.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/03.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/04.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/05.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/06.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/07.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/08.jpg",
      "assets/img/projects/singhvi-residence-neetibagh/09.jpg"
    ],
    copy: [
      "Skylights and a central stair well bring daylight deep into the plan, while timber joinery — door screens, balustrades, panelling — carries a consistent material language through every level of the house."
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
    image: "assets/img/projects/silverglades-farms-tarudhan/03.jpg",
    facts: ["7.5 acre", "Residential development", "Client: Silverglades"],
    short: "A 7.5-acre residential farm development adjoining the ITC Classic Golf Course in Manesar.",
    lede: "A 7.5-acre farm residence community planned alongside an existing championship golf course.",
    gallery: [
      "assets/img/projects/silverglades-farms-tarudhan/02.jpg",
      "assets/img/projects/silverglades-farms-tarudhan/04.jpg",
      "assets/img/projects/silverglades-farms-tarudhan/05.jpg"
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
    image: "assets/img/projects/oliander-farm-karjat.jpg",
    facts: ["22,000 sft, 200 acre", "Boutique resort, Architecture & Interiors", "Client: Mr Ahuja"],
    short: "A 200-acre boutique farm resort outside Karjat, built as a quiet retreat from Mumbai.",
    lede: "A 22,000 sft boutique resort spread across 200 acres of farmland near Karjat.",
    gallery: [
      "assets/img/projects/oliander-farm-karjat/02.jpg",
      "assets/img/projects/oliander-farm-karjat/03.jpg",
      "assets/img/projects/oliander-farm-karjat/04.jpg",
      "assets/img/projects/oliander-farm-karjat/05.jpg"
    ],
    copy: [
      "Guest structures are kept small and scattered across the 200-acre farm, leaving the working landscape — not a resort masterplan — as the dominant experience of the site."
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
    image: "assets/img/projects/kodak-india-janpath.jpg",
    facts: ["2,500 sft", "Corporate office interiors", "Client: KODAK India"],
    short: "A 2,500 sft corporate office interior for Kodak India on Janpath, New Delhi.",
    lede: "A 2,500 sft corporate office fit out for Kodak's New Delhi headquarters.",
    gallery: [
      "assets/img/projects/kodak-india-janpath/02.jpg",
      "assets/img/projects/kodak-india-janpath/03.jpg"
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
    image: "assets/img/projects/minal-modi-residence.jpg",
    facts: ["Concept design: Geoffrey Bawa & AB Lall", "Detail drawings: VVA"],
    short: "A concept residence in Mandi Village, with detail drawings developed by the studio.",
    lede: "A residence conceived by Geoffrey Bawa and AB Lall, carried into detail by VVA.",
    gallery: [
      "assets/img/projects/minal-modi-residence/02.jpg"
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
    image: "assets/img/projects/h-gold-farm-brijwasan.jpg",
    facts: ["Concept design"],
    short: "A concept farmhouse design for a Brijwasan site on Delhi's southern edge.",
    lede: "A farmhouse concept for Brijwasan, planned as a retreat at the edge of the city.",
    gallery: [
      "assets/img/projects/h-gold-farm-brijwasan/02.jpg",
      "assets/img/projects/h-gold-farm-brijwasan/03.jpg",
      "assets/img/projects/h-gold-farm-brijwasan/04.jpg"
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
    image: "assets/img/projects/weavers-training-centre-chanderi.jpg",
    facts: ["Concept design", "Institutional / training facility"],
    short: "A concept training centre for Chanderi's handloom weavers.",
    lede: "A training centre concept built around Chanderi's own handloom tradition.",
    gallery: [
      "assets/img/projects/weavers-training-centre-chanderi/02.jpg"
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
    image: "assets/img/projects/wellness-resort-carnoustie-rameshwaram.jpg",
    facts: ["Concept design", "Architecture & Interiors"],
    short: "A concept wellness resort for a coastal site at Rameshwaram.",
    lede: "A wellness resort concept set on Rameshwaram's coastline.",
    gallery: [
      "assets/img/projects/wellness-resort-carnoustie-rameshwaram/02.jpg",
      "assets/img/projects/wellness-resort-carnoustie-rameshwaram/03.jpg",
      "assets/img/projects/wellness-resort-carnoustie-rameshwaram/04.jpg",
      "assets/img/projects/wellness-resort-carnoustie-rameshwaram/05.jpg"
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
    image: "assets/img/projects/villa-a-flower-valley-central-park.jpg",
    facts: ["Concept design", "Model villa"],
    short: "A concept villa for the Flower Valley enclave at Central Park, Sona Road.",
    lede: "A villa concept for one plot within the Flower Valley development.",
    gallery: [
      "assets/img/projects/villa-a-flower-valley-central-park/02.jpg",
      "assets/img/projects/villa-a-flower-valley-central-park/03.jpg"
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
    image: "assets/img/projects/cottage-anandam-kotabagh.jpg",
    facts: ["14,000 sft, 5 acre"],
    short: "A 14,000 sft hillside cottage concept on a 5-acre Kotabagh site.",
    lede: "A cottage retreat concept for a 5-acre site in Kotabagh, Uttarakhand.",
    gallery: [
      "assets/img/projects/cottage-anandam-kotabagh/02.jpg",
      "assets/img/projects/cottage-anandam-kotabagh/03.jpg",
      "assets/img/projects/cottage-anandam-kotabagh/04.jpg",
      "assets/img/projects/cottage-anandam-kotabagh/05.jpg",
      "assets/img/projects/cottage-anandam-kotabagh/06.jpg",
      "assets/img/projects/cottage-anandam-kotabagh/07.jpg",
      "assets/img/projects/cottage-anandam-kotabagh/08.jpg"
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
    image: "assets/img/projects/conservatory-dlf/03.jpg",
    facts: ["Concept design", "Interiors"],
    short: "An interior concept for a conservatory space, developed in multiple view studies.",
    lede: "A conservatory interior worked through a series of concept views.",
    gallery: [
      "assets/img/projects/conservatory-dlf/02.jpg",
      "assets/img/projects/conservatory-dlf/04.jpg",
      "assets/img/projects/conservatory-dlf/05.jpg",
      "assets/img/projects/conservatory-dlf/06.jpg",
      "assets/img/projects/conservatory-dlf/07.jpg",
      "assets/img/projects/conservatory-dlf/08.jpg"
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
    image: "assets/img/projects/panchsheel-park-club-pool/04.jpg",
    facts: ["Concept design", "Panchsheel Park Society Club"],
    short: "A concept pool and clubhouse design for Panchsheel Park Society Club.",
    lede: "A pool and club concept for the Panchsheel Park community.",
    gallery: [
      "assets/img/projects/panchsheel-park-club-pool/02.jpg",
      "assets/img/projects/panchsheel-park-club-pool/03.jpg",
      "assets/img/projects/panchsheel-park-club-pool/05.jpg",
      "assets/img/projects/panchsheel-park-club-pool/06.jpg"
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
    image: "assets/img/projects/integrated-golf-haridwar.jpg",
    facts: ["Concept master plan", "Golf-led development"],
    short: "A concept master plan for an integrated golf development in Haridwar.",
    lede: "A golf-led development concept planned for a Haridwar site.",
    gallery: [
      "assets/img/projects/integrated-golf-haridwar/02.jpg"
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
    image: "assets/img/projects/anand-lok-46.jpg",
    facts: ["Concept design"],
    short: "A concept residence design for a plot at 46 Anand Lok, New Delhi.",
    lede: "A private residence concept for 46 Anand Lok.",
    gallery: [
      "assets/img/projects/anand-lok-46/02.jpg",
      "assets/img/projects/anand-lok-46/03.jpg",
      "assets/img/projects/anand-lok-46/04.jpg",
      "assets/img/projects/anand-lok-46/05.jpg",
      "assets/img/projects/anand-lok-46/06.jpg",
      "assets/img/projects/anand-lok-46/07.jpg",
      "assets/img/projects/anand-lok-46/08.jpg",
      "assets/img/projects/anand-lok-46/09.jpg",
      "assets/img/projects/anand-lok-46/10.jpg"
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
    image: "assets/img/projects/vasant-kunj-farm/03.jpg",
    facts: ["Concept design"],
    short: "A concept farmhouse design for a Vasant Kunj site.",
    lede: "A farmhouse concept for a Vasant Kunj plot on Delhi's southern edge.",
    gallery: [
      "assets/img/projects/vasant-kunj-farm/02.jpg",
      "assets/img/projects/vasant-kunj-farm/04.jpg",
      "assets/img/projects/vasant-kunj-farm/05.jpg",
      "assets/img/projects/vasant-kunj-farm/06.jpg",
      "assets/img/projects/vasant-kunj-farm/07.jpg"
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
    image: "assets/img/projects/ashtang-yog-ashram-syaat/03.jpg",
    facts: ["Concept design", "Client: SYAAT"],
    short: "A concept design for the Ashtang Yog Ashram developed for SYAAT.",
    lede: "An ashram concept developed for the SYAAT trust.",
    gallery: [
      "assets/img/projects/ashtang-yog-ashram-syaat/02.jpg",
      "assets/img/projects/ashtang-yog-ashram-syaat/04.jpg",
      "assets/img/projects/ashtang-yog-ashram-syaat/05.jpg"
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
      "Maunam — literally, silence — gives the ashram a dedicated space for meditation, developed through plan, elevation and interior view studies as part of the wider ashram concept."
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
    image: "assets/img/projects/eternesse-wellness-clinic-hyderabad.jpg",
    facts: ["Concept design", "Interiors"],
    short: "A concept interior for a regenerative wellness clinic in Jubilee Hills, Hyderabad.",
    lede: "A regenerative wellness clinic concept for Hyderabad's Jubilee Hills.",
    gallery: [
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/02.jpg",
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/03.jpg",
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/04.jpg",
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/05.jpg",
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/06.jpg",
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/07.jpg",
      "assets/img/projects/eternesse-wellness-clinic-hyderabad/08.jpg"
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
    image: "assets/img/projects/leroy-residence-ghatkesar.jpg",
    facts: ["Concept design"],
    short: "A concept residence design for a Ghatkesar site outside Hyderabad.",
    lede: "A private residence concept for a Ghatkesar plot.",
    gallery: [
      "assets/img/projects/leroy-residence-ghatkesar/02.jpg",
      "assets/img/projects/leroy-residence-ghatkesar/03.jpg",
      "assets/img/projects/leroy-residence-ghatkesar/04.jpg",
      "assets/img/projects/leroy-residence-ghatkesar/05.jpg",
      "assets/img/projects/leroy-residence-ghatkesar/06.jpg",
      "assets/img/projects/leroy-residence-ghatkesar/07.jpg",
      "assets/img/projects/leroy-residence-ghatkesar/08.jpg"
    ],
    copy: [
      "The concept develops a full residence — plan, elevations and material palette — for a family site at Ghatkesar, on Hyderabad's eastern edge."
    ]
  }
];

(function () {
  var AUTOPLAY_MS = 3000;

  var grid = document.getElementById("projects");
  var modal = document.getElementById("project-modal");
  if (!grid || !modal) return;

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

  /* ---------- Grid ---------- */
  function renderGrid() {
    grid.innerHTML = projects.map(function (p) {
      return (
        '<button class="project-card" type="button" data-id="' + p.id + '">' +
          '<div class="project-media"><img src="' + p.image + '" alt="' + p.title + '" loading="lazy"></div>' +
        '</button>'
      );
    }).join("");

    grid.querySelectorAll(".project-card").forEach(function (card) {
      card.addEventListener("click", function () { openProject(card.getAttribute("data-id")); });
    });
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
      slideImg.alt = currentTitle + " — photo " + (current + 1) + " of " + slides.length;
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

    var serviceRow = activeServices(p).map(function (key) { return SERVICE_LABELS[key]; }).join(" · ");
    modalFacts.innerHTML =
      '<div class="fact"><span>Status</span><span>' + statusLabel(p) + '</span></div>' +
      '<div class="fact"><span>Location</span><span>' + p.location + '</span></div>' +
      (serviceRow ? '<div class="fact"><span>Services</span><span>' + serviceRow + '</span></div>' : '') +
      p.facts.map(function (f) { return '<div class="fact"><span></span><span>' + f + '</span></div>'; }).join("");
    modalCopy.innerHTML = p.copy.map(function (para) { return "<p>" + para + "</p>"; }).join("");

    slides = [p.image].concat(p.gallery || []);
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
    slideImg.alt = p.title + " — photo 1 of " + slides.length;
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
})();
