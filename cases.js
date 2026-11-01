// Данные кейсов. Один объект — один кейс; страницы case.html и projects.html и окна баблов
// строятся из этого списка. Картинки лежат в assets/cases/<id>/.
// tags — направления (совпадают с data-section у баблов на главной).
window.CASE_TAGS = {
  env: "spatial design",
  product: "product design",
  motion: "animation art direction",
  brand: "branding",
  pres: "pitch decks",
  ai: "AI creative",
  vibe: "vibe coding",
  web: "web design",
  type: "typography",
  industrial: "industrial design",
  research: "research",
  fun: "just for fun",
};

window.CASES = [
  {
    id: "kinostudiya-moskva",
    title: "Branding for the Moskva AI film studio",
    subtitle: "Identity for a premium AI film studio: a signet mark, colour, typefaces and digital media.",
    tags: ["brand", "web", "pres"],
    discipline: "graphic design",
    stage: "research and design",
    cover: "cover.jpg",
    link: { href: "https://киностудия.москва/", label: "studio website" },
    intro: [
      "The studio's founders used to make documentaries. Their new AI film studio, Moskva, focuses on the premium segment.",
      "This led to the idea of combining history, the Russian code and grandeur in the image of a signet coat of arms, the kind of symbol of power seen in Russia for centuries. The lynx and the raven grew out of the ideas of moving forward, precision, the memory of history and longevity.",
    ],
    // разделы страницы кейса; images — файлы из gallery, которые показать под пунктом
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Graphic design: research and identity design." },
          {
            heading: "brief",
            text: "The studio's founders used to make documentaries. Their new AI film studio, Moskva, focuses on the premium segment and needed a mark and a visual system to match.",
          },
        ],
      },
      {
        title: "idea",
        items: [
          {
            heading: "a signet coat of arms",
            text: "Combine history, the Russian code and grandeur in the image of a signet coat of arms, the kind of symbol of power seen in Russia for centuries.",
          },
          {
            heading: "lynx and raven",
            text: "The image grew out of the ideas of moving forward, precision, the memory of history and longevity.",
            images: ["emblem.jpg", "sign.jpg"],
          },
        ],
      },
      {
        title: "system",
        items: [
          { heading: "colour", text: "Three equally strong colour versions of the mark and a five-colour palette.", images: ["colors.jpg", "palette.jpg"] },
          { heading: "typefaces", text: "A type system for headings, body text and titles.", images: ["fonts.jpg"] },
        ],
      },
      {
        title: "website",
        items: [
          {
            heading: "studio website",
            text: "The identity continues on the web: a dark, cinematic site with the signet on the first screen, services, a showreel portfolio, workflow stages, pricing and news. Layout in Figma plus vibe coding. You can scroll the page right in the windows below.",
            screens: [
              { src: "site-desktop.jpg", device: "desktop", caption: "desktop version" },
              { src: "site-mobile.jpg", device: "phone", caption: "mobile version" },
            ],
          },
        ],
      },
      {
        title: "talk",
        items: [
          {
            heading: "a landing page instead of a proposal",
            text: "A talk on why the studio replaced PDF commercial proposals with live landing pages: the service starts before the contract is signed, and a landing page with video and animation shows the studio's level straight away. It covers the build process, from a moodboard and the first Figma frame to AI-assisted scaling, an example for SKB Medrentekh, and the takeaways.",
            slides: ["talk-slide-1.jpg", "talk-slide-2.jpg", "talk-slide-3.jpg", "talk-slide-4.jpg", "talk-slide-6.jpg", "talk-slide-7.jpg", "talk-slide-8.jpg", "talk-slide-9.jpg", "talk-slide-10.jpg", "talk-slide-11.jpg", "talk-slide-12.jpg", "talk-slide-13.jpg", "talk-slide-14.jpg", "talk-slide-15.jpg"],
          },
        ],
      },
      {
        title: "applications",
        items: [
          { heading: "digital environment", text: "A sticker pack and custom emoji for Telegram, titles and on-screen graphics.", images: ["telegram.jpg", "emoji.jpg", "titles.jpg"] },
        ],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "brand book cover" },
      { src: "emblem.jpg", caption: "round emblem" },
      { src: "colors.jpg", caption: "three equally strong colour versions" },
      { src: "sign.jpg", caption: "the mark without the ring" },
      { src: "palette.jpg", caption: "five colours" },
      { src: "fonts.jpg", caption: "type system" },
      { src: "telegram.jpg", caption: "Telegram sticker pack" },
      { src: "emoji.jpg", caption: "custom emoji set" },
      { src: "titles.jpg", caption: "titles and screen" },
      { src: "talk-slide-1.jpg" },
      { src: "talk-slide-2.jpg" },
      { src: "talk-slide-3.jpg" },
      { src: "talk-slide-4.jpg" },
      { src: "talk-slide-6.jpg" },
      { src: "talk-slide-7.jpg" },
      { src: "talk-slide-8.jpg" },
      { src: "talk-slide-9.jpg" },
      { src: "talk-slide-10.jpg" },
      { src: "talk-slide-11.jpg" },
      { src: "talk-slide-12.jpg" },
      { src: "talk-slide-13.jpg" },
      { src: "talk-slide-14.jpg" },
      { src: "talk-slide-15.jpg" },
    ],
  },
  {
    id: "nevanil",
    title: "NEVANIL candle brand",
    subtitle: "A candle brand for people who live loud: not a backdrop for the interior and not about cosiness, but art objects with character for 18 to 27-year-olds.",
    tags: ["brand"],
    discipline: "project lead, art director",
    stage: "strategy and concept",
    cover: "cover.jpg",
    intro: [
      "\"Every candle is about cosiness. We're about drive.\" NEVANIL is a candle brand that rejects \"vanilla\" and turns emotions into sculptural forms.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Project lead: art direction and brand management, from market and audience research to the brand platform, visual language and promotion strategy." },
          { heading: "brief", text: "Create a candle brand that stands out in a market of identical \"cosy\" candles and feels like their own to Gen Z." },
          { heading: "positioning", text: "A brand for people who live loud: \"not for the background, not for cosiness\". A candle is not one more thing for the interior but a way to express yourself." },
        ],
      },
      {
        title: "research",
        items: [
          {
            heading: "the market is stuck in \"vanilla\"",
            list: ["everyone sells blankets and calm", "shapes and scents all look alike", "Gen Z has no candles that are about them"],
            images: ["market.jpg"],
          },
          {
            heading: "insight",
            text: "\"I have nothing to express myself with\": candles are just a backdrop for the interior, too cute or too \"grown-up\". People want a candle that has something of them in it.",
            images: ["insight.jpg"],
          },
          {
            heading: "audience",
            list: ["18 to 27, living in stories and playlists", "spends on emotions, not on cosiness", "looks for things that speak louder"],
            images: ["audience.jpg"],
          },
        ],
      },
      {
        title: "brand platform",
        items: [
          {
            heading: "manifesto",
            text: "\"I'm here, I'm alive, I feel.\" The brand's values are safe chaos, joy of life, self-expression, energy and irony. The key line: \"I don't decorate the room, I switch on a mood.\"",
            images: ["manifesto.jpg", "platform.jpg"],
          },
          {
            heading: "how an emotion becomes a candle",
            text: "Emotion → symbol (shape) → state (colour) → feeling (scent). That is how gamepad, lips, sneaker and hand-gesture candles came about.",
            images: ["method.jpg"],
          },
        ],
      },
      {
        title: "logo",
        items: [
          {
            heading: "from sketch to mark",
            text: "The name was drawn by hand: elongated letters that look like tongues of flame, and fire hiding inside the word. The sketch that made it had a flame over the \"V\" and a spark over the \"i\"; it was vectorised with a warm pink-to-yellow gradient.",
            images: ["sketch-1.jpg", "sketch-2.jpg", "logo-1.jpg", "logo-2.jpg"],
          },
          {
            heading: "little flames",
            text: "The same lines gave birth to flame characters with personality.",
            images: ["mascots.jpg"],
          },
        ],
      },
      {
        title: "product and promotion",
        items: [
          {
            heading: "a candle that speaks for you",
            list: ["packaging that is a ready-made gift and the star of an unboxing story", "shapes and symbols: not one more candle but an art object with character", "scents that are nostalgic and delicious, about moments and emotions"],
            images: ["product.jpg"],
          },
          {
            heading: "4P",
            text: "Sculptural shapes and limited collections; a core range \"for yourself\" and gift candles; online, markets, festivals and creative spaces; TikTok and Reels, UGC and collaborations with artists.",
            images: ["4p.jpg", "posting.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "every candle is about cosiness, we're about drive" },
      { src: "sketch-1.jpg", caption: "hand-drawn logo sketches" },
      { src: "sketch-2.jpg", caption: "the chosen sketch" },
      { src: "logo-1.jpg", caption: "vector logo" },
      { src: "logo-2.jpg", caption: "logo variant" },
      { src: "mascots.jpg", caption: "flame characters" },
      { src: "market.jpg", caption: "the market is stuck in \"vanilla\"" },
      { src: "insight.jpg", caption: "I have nothing to express myself with" },
      { src: "audience.jpg", caption: "our person is not \"vanilla\"" },
      { src: "manifesto.jpg", caption: "not for the background, not for cosiness" },
      { src: "method.jpg", caption: "how we turn an emotion into a candle" },
      { src: "platform.jpg", caption: "brand values" },
      { src: "product.jpg", caption: "a candle that speaks for you" },
      { src: "4p.jpg", caption: "how I keep my promise" },
      { src: "posting.jpg", caption: "a candle you want to post" },
    ],
  },
  {
    id: "multimedia-book",
    title: "A visual study of multimedia art",
    subtitle: "A book on the history of multimedia as an art movement: from the first TV sets to interactive installations.",
    tags: ["type"],
    discipline: "typography",
    stage: "research and design",
    cover: "cover.jpg",
    intro: [
      "The idea for the book came after reading the article \"The history of multimedia as an art movement\" on deziiign.com.",
      "A square 26 × 26 format, a 3 × 3 modular grid and three typefaces: Source Code Variable, AG Avalanche C and Involve. The key metaphor is \"immersion\": from the first TV sets to interactive installations where the viewer becomes a participant.",
    ],
    link: { href: "https://www.calameo.com/read/007646252862410d450e2", label: "full book" },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Typography and layout: research and design of the book." },
          {
            heading: "idea",
            text: "The idea for the book came after reading the article \"The history of multimedia as an art movement\" on deziiign.com.",
          },
        ],
      },
      {
        title: "system",
        items: [
          {
            heading: "format and grid",
            list: ["square 26 × 26 format", "3 × 3 modular grid = 9 modules", "carefully placed running heads"],
          },
          { heading: "typefaces", list: ["Source Code Variable", "AG Avalanche C", "Involve"] },
        ],
      },
      {
        title: "process",
        items: [
          {
            heading: "the key metaphor is \"immersion\"",
            text: "Step by step, the reader is immersed in the subject: from the first TV sets to interactive installations where the viewer becomes a participant.",
          },
          { heading: "flat plan", text: "The whole book mapped out spread by spread before layout began.", images: ["flatplan.jpg"] },
        ],
      },
      {
        title: "result",
        items: [
          { heading: "the book", text: "A finished book with contents, chapters and illustrated spreads. You can flip through the full book on Calameo." },
        ],
        images: ["contents.jpg", "installations.jpg", "chapter.jpg", "origins.jpg", "spread-garden.jpg", "screens.jpg", "pages.jpg"],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "cover" },
      { src: "contents.jpg", caption: "contents" },
      { src: "installations.jpg", caption: "spread on interactive installations" },
      { src: "spread-garden.jpg", caption: "spread" },
      { src: "flatplan.jpg", caption: "flat plan" },
      { src: "chapter.jpg", caption: "chapter I: the history of multimedia" },
      { src: "origins.jpg", caption: "1.1 origins of the genre" },
      { src: "screens.jpg", caption: "spread" },
      { src: "pages.jpg", caption: "the digital age and viewer participation" },
    ],
  },
  {
    id: "equilibrium",
    title: "Equilibrium-Rokot catalogue and landing page",
    subtitle: "An A5 catalogue of marine equipment and a landing page built from the same materials for the engineering company NPP Equilibrium: wet exhaust systems.",
    tags: ["type", "web"],
    discipline: "renders, layout, web design",
    stage: "2026",
    cover: "catalog-cover.jpg",
    intro: [
      "An engineering product full of size tables and calculations had to look premium while staying clear to a design engineer.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Equipment renders, catalogue layout and a landing page built from the same materials." },
          { heading: "brief", text: "Create a catalogue of Equilibrium-Rokot wet exhaust systems for shipyards and design bureaus, then bring it to the web without losing the system." },
          { heading: "idea", text: "\"Striving for balance\": cold steel, dark gradients and clouds of exhaust on the cover against calm white table layouts. Orange is the only accent, used for the quote request and the year." },
        ],
      },
      {
        title: "catalogue",
        items: [
          {
            heading: "format and grid",
            text: "A5: a cover and nine spreads. Each component of the system gets its own spread: a render on a dark gradient with a short description on the left, purpose, sizes and configuration tables on the right.",
            images: ["catalog-cover.jpg", "catalog-back.jpg"],
          },
        ],
        images: ["spread-2.jpg", "spread-3.jpg", "spread-4.jpg", "spread-5.jpg", "spread-6.jpg", "spread-7.jpg", "spread-8.jpg", "spread-9.jpg", "spread-10.jpg"],
      },
      {
        title: "landing page",
        items: [
          {
            heading: "from catalogue to web",
            text: "The same renders, charts and tables became a one-page site: a first screen with exhaust video, the engineering approach, the equipment range on a dark background, piping and a system quote request form. You can scroll the page right in the windows below.",
            video: { src: "landing-hero.mp4", poster: "landing-hero-poster.jpg", wide: true },
            screens: [
              { src: "landing-desktop.jpg", device: "desktop", caption: "desktop version" },
              { src: "landing-mobile.jpg", device: "phone", caption: "mobile version" },
            ],
          },
        ],
      },
    ],
    gallery: [
      { src: "catalog-cover.jpg", caption: "catalogue cover" },
      { src: "catalog-back.jpg", caption: "back cover" },
      { src: "spread-2.jpg", caption: "about the company and clients" },
      { src: "spread-3.jpg", caption: "engineering calculations" },
      { src: "spread-4.jpg", caption: "ROKOT-SG dry silencer" },
      { src: "spread-5.jpg", caption: "ROKOT spray unit" },
      { src: "spread-6.jpg", caption: "ROKOT PP and HEAVY water lock" },
      { src: "spread-7.jpg", caption: "ROKOT GUS gooseneck silencer" },
      { src: "spread-8.jpg", caption: "ROKOT FLOP flaps" },
      { src: "spread-9.jpg", caption: "auxiliary equipment" },
      { src: "spread-10.jpg", caption: "company details" },
    ],
  },
  {
    id: "pixar-landing",
    title: "A landing page on the history of Pixar",
    subtitle: "A longread on how Pixar began: from Ed Catmull's digitised hand to the first projects of his lab.",
    tags: ["web"],
    discipline: "web design",
    stage: "research and design",
    cover: "cover.jpg",
    intro: [
      "Before any layout, the history of Pixar was broken into stages, the main characters, their storylines and their influence on each other were mapped out, visual metaphors were found, and the text was divided into blocks of meaning.",
    ],
    link: {
      href: "https://www.figma.com/proto/bvwCqQ4PiaId3yybsmljXZ/pixar-main?node-id=1-7&p=f&scaling=scale-down-width&content-scaling=fixed",
      label: "Figma prototype",
    },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Web design: research of the material and landing page design." },
          { heading: "brief", text: "Tell the story of the Pixar animation studio as a long landing page that reads like a story." },
        ],
      },
      {
        title: "research",
        items: [
          {
            heading: "breaking down the story",
            text: "A lot of work came before the layout: the studio's history was broken into stages, the main characters, their storylines and their influence on each other were identified, visual metaphors were found, and the text was divided into blocks of meaning.",
          },
        ],
        images: ["analysis.jpg"],
      },
      {
        title: "visual language",
        items: [
          {
            heading: "a 1970s computer",
            text: "Full-screen pixel headings in black, lavender and olive evoke the early computer graphics the studio began with.",
            images: ["in-1972.jpg", "realism.jpg"],
          },
          {
            heading: "years as landmarks",
            text: "Duotone photos of the characters and large outlined year numbers help the reader keep track of time.",
            images: ["shure.jpg", "alvy.jpg"],
          },
        ],
      },
      {
        title: "story",
        items: [
          {
            heading: "stages of the story",
            list: [
              "1972: Ed Catmull digitises his own hand",
              "four technologies: texture mapping, z-buffer, bicubic patches, anti-aliasing",
              "three challenges: computing power, realism, exposure time",
              "1973: a visit to the Disney studio",
              "1974: a call from Alexander Schure and the NYIT lab",
              "1975: Alvy Ray Smith joins the team",
            ],
          },
        ],
        images: ["hand.jpg", "cast.jpg", "technologies.jpg", "cheat.jpg", "shutter.jpg", "disney.jpg", "until.jpg", "projects.jpg"],
      },
      {
        title: "result",
        items: [
          { heading: "prototype", text: "A longread of about 30 screens, 1600 px wide. You can scroll through the whole landing page in the Figma prototype." },
        ],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "1971: Ed Catmull" },
      { src: "analysis.jpg", caption: "map of the studio's history", board: "board/analysis.dzi" },
      { src: "in-1972.jpg", caption: "first screen" },
      { src: "realism.jpg", caption: "the project's three challenges" },
      { src: "shure.jpg", caption: "1974: Alexander Schure" },
      { src: "alvy.jpg", caption: "1975: Alvy Ray Smith" },
      { src: "hand.jpg", caption: "the digitised hand" },
      { src: "cast.jpg", caption: "a plaster cast and 350 polygons" },
      { src: "technologies.jpg", caption: "four technologies" },
      { src: "cheat.jpg", caption: "computing power" },
      { src: "shutter.jpg", caption: "long exposure on Polaroid" },
      { src: "disney.jpg", caption: "1973: a visit to Disney" },
      { src: "until.jpg", caption: "moving on to 1974" },
      { src: "projects.jpg", caption: "the start of unique projects" },
    ],
  },
  {
    id: "engineering-club",
    title: "Engineering club for young people",
    subtitle: "Graduation project: the spatial environment of an engineering club in a non-residential building in Nizhny Novgorod, from concept and floor plans to a franchise financial model.",
    tags: ["env"],
    discipline: "spatial design",
    stage: "graduation project",
    cover: "facade2.jpg",
    intro: [
      "A design concept for an engineering club for young people across four floors of a non-residential building next to an aviation technical college: workshops, lecture halls, IT zones, a museum, a café and a field for drone and robot competitions.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Author of the graduation project: pre-project research, concept, floor plans, interiors, furniture and financial model." },
          {
            heading: "goal",
            text: "Develop a design concept for an engineering club for young people in a non-residential building in Nizhny Novgorod, as a tool for building a professional environment and raising the building's investment appeal, plus a franchise financial model to scale the concept.",
          },
          {
            heading: "objectives",
            list: [
              "study the history of engineering clubs and today's formats",
              "systematise functional requirements based on references",
              "carry out a pre-project analysis of the site",
              "define the project's visual style",
              "develop floor plans for four floors",
              "develop the technical and structural part",
              "develop a franchise financial model",
            ],
          },
        ],
      },
      {
        title: "research",
        items: [
          {
            heading: "why it matters",
            list: [
              "engineers matter more and more in the digital economy and smart manufacturing",
              "enrolment in extracurricular technical education has grown from 8% to 14%",
              "a shortage of 160,000 specialists is expected by 2028",
              "clubs depend on enthusiasts and the infrastructure is weak",
              "new formats are emerging: Quantoriums, tech parks, fab labs, university clubs",
            ],
            images: ["relevance.jpg"],
          },
          {
            heading: "site and building",
            text: "A non-residential building in Nizhny Novgorod next to an aviation technical college and a MiG-17 monument, a setting where the engineering club becomes an extension of the neighbourhood.",
            images: ["location.jpg", "building.jpg"],
          },
          {
            heading: "research map",
            text: "All pre-project research lives in an Obsidian canvas: references and the history of engineering clubs, building analysis, diagrams of how functional zones interact, and explorations of layouts and identity. You can explore it in full: pan around and zoom in.",
            images: ["research-board.jpg"],
          },
        ],
      },
      {
        title: "concept",
        items: [
          {
            heading: "metal and concrete",
            text: "A concrete base, metal surfaces, the image of \"torque\" and orange accents, the colour of molten metal and cutting sparks.",
            list: ["#FC6F00 — molten metal", "#FFF1E9 — metal and concrete", "#1E1E1E — dark metal", "#382F2B — rusted metal"],
            images: ["concept.jpg"],
          },
          { heading: "facade", text: "Orange lines on the facade continue the image of red-hot metal and mark the entrance.", images: ["facade.jpg"] },
        ],
      },
      {
        title: "space",
        items: [
          {
            heading: "zoning",
            text: "Four floors: the entrance, reception, workshops, café, museum and cloakroom on the ground floor; IT zones, lecture halls, 3D modelling and VR, coworking, a mastermind room and a competition zone above.",
            images: ["zoning-1-2.jpg", "zoning-3-4.jpg"],
          },
          {
            heading: "interiors",
            text: "Every zone follows one system of materials and light: metal, concrete and orange light lines.",
          },
        ],
        images: ["workshop.jpg", "workshop-small.jpg", "reception.jpg", "museum.jpg", "materials.jpg", "cafe2.jpg", "cafe.jpg", "lecture.jpg", "lecture-small.jpg", "modeling.jpg", "vr.jpg", "coworking.jpg", "it-office.jpg", "competition.jpg", "mastermind.jpg", "cafe3.jpg"],
      },
      {
        title: "objects",
        items: [
          { heading: "concept furniture", text: "Workbenches with pegboards, mechanism-like cabinets, a gear-shaped table for the mastermind room and shelving inspired by machine tools.", images: ["furniture.jpg"] },
          {
            heading: "competition field",
            text: "An outdoor field with drone and robot zones by the existing stands, and a set of elements for an assembly track.",
            images: ["field.jpg", "track.jpg"],
          },
        ],
      },
      {
        title: "result",
        items: [
          {
            heading: "financial model",
            list: [
              "CAPEX excluding the building: ₽70.1M; including the building: ₽106.5M",
              "operational break-even in month 13 (416 clients)",
              "CAPEX payback in about 24 months in the base case",
              "profit in month 36: ₽4.27M; cumulative: ₽54.3M",
            ],
            images: ["capex.jpg", "pnl.jpg", "scenarios.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "research-board.jpg", caption: "research canvas in Obsidian", board: "./assets/canvas/engineering-club/canvas.json" },
      { src: "facade2.jpg", caption: "club facade" },
      { src: "workshop.jpg", caption: "large workshop" },
      { src: "museum.jpg", caption: "museum and showroom" },
      { src: "cafe2.jpg", caption: "café area" },
      { src: "lecture.jpg", caption: "large lecture hall" },
      { src: "relevance.jpg", caption: "why it matters" },
      { src: "location.jpg", caption: "location" },
      { src: "building.jpg", caption: "the building before the project" },
      { src: "concept.jpg", caption: "concept and palette" },
      { src: "facade.jpg", caption: "entrance" },
      { src: "zoning-1-2.jpg", caption: "zoning, floors 1 and 2" },
      { src: "zoning-3-4.jpg", caption: "zoning, floors 3 and 4" },
      { src: "workshop-small.jpg", caption: "small workshop" },
      { src: "reception.jpg", caption: "reception" },
      { src: "materials.jpg", caption: "materials science" },
      { src: "cafe.jpg", caption: "café area" },
      { src: "lecture-small.jpg", caption: "small lecture hall" },
      { src: "modeling.jpg", caption: "3D modelling" },
      { src: "vr.jpg", caption: "VR zone" },
      { src: "coworking.jpg", caption: "coworking" },
      { src: "it-office.jpg", caption: "IT office" },
      { src: "competition.jpg", caption: "competition zone" },
      { src: "mastermind.jpg", caption: "mastermind room" },
      { src: "cafe3.jpg", caption: "top-floor café area" },
      { src: "furniture.jpg", caption: "concept furniture" },
      { src: "field.jpg", caption: "competition field" },
      { src: "track.jpg", caption: "assembly track elements" },
      { src: "capex.jpg", caption: "CAPEX summary" },
      { src: "pnl.jpg", caption: "P&L over 36 months" },
      { src: "scenarios.jpg", caption: "payback scenarios" },
    ],
  },
  {
    id: "verdea",
    title: "Verdea wellness hotel",
    subtitle: "A premium retreat in the forest: architecture, interiors and landscape built on a subtle dialogue with nature.",
    tags: ["env", "ai"],
    discipline: "spatial design",
    stage: "academic project",
    cover: "birdseye.jpg",
    intro: [
      "A retreat where the forest is not a backdrop but part of the environment: natural materials, tactile surfaces, a muted palette and light emphasise the quiet and seclusion of the place.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          {
            heading: "project",
            text: "Design project for a social facility with landscaping of the surrounding grounds. Kosygin Russian State University, Institute of Design, Department of Spatial Design, 2025–2026. Supervisor: I. P. Drynkina.",
          },
          { heading: "role", text: "Masterplan and landscape, interior layouts, concept, furniture and renders." },
          {
            heading: "idea",
            text: "Verdea is a premium retreat built on a dialogue between architecture and the natural landscape. The forest becomes an active part of the spatial scenario and of people's everyday experience, and every space keeps a visual and physical connection with the landscape while offering a high level of comfort and privacy.",
          },
        ],
      },
      {
        title: "research",
        items: [
          {
            heading: "audience",
            text: "People who look for quiet and seclusion without giving up comfort, value aesthetics and natural materials, practise yoga, meditation and hiking, and avoid \"showy luxury\".",
            list: [
              "a weekend or a week away from the city",
              "retreats and recovery from stress",
              "creative and business trips, or workations",
              "intimate events: an art weekend, a yoga seminar, a gastro dinner",
            ],
          },
          {
            heading: "climate and flora",
            text: "Mixed forests of conifers and broadleaf trees: pines, spruces, birches, aspens and oaks create a rich natural setting that the project preserves and continues.",
          },
        ],
      },
      {
        title: "landscape",
        items: [
          {
            heading: "masterplan and zoning",
            text: "The building stretches along the river, surrounded by a landscape park, a fire pit area, active play areas, a children's playground and a sports ground, with parking moved to the entrance. The planting scheme combines grasses and perennials: Karl Foerster feather reed grass, lavender, hosta, sedum, sedge, pennisetum and sage.",
            images: ["masterplan.jpg", "zoning.jpg"],
          },
          { heading: "facade", text: "Unfolded elevation of the main building and the staff house.", images: ["elevation.jpg"] },
        ],
        images: ["entrance.jpg", "fire.jpg", "playground.jpg", "entrance-bird.jpg"],
      },
      {
        title: "interior",
        items: [
          {
            heading: "concept",
            text: "Wood, stone, pine needles and moss: warm dark wood, olive and green tones, natural textures and soft light.",
            images: ["moodboard.jpg"],
          },
          { heading: "floor plans", text: "Three floors: public circulation areas, guest rooms, a spa, dining, sports and administrative zones.", images: ["floor-1.jpg", "floor-2-3.jpg"] },
          { heading: "concept furniture", text: "Flowing shapes, solid wood, rattan and built-in greenery.", images: ["furniture.jpg"] },
        ],
        images: ["lobby.jpg", "restaurant.jpg", "spa.jpg", "lounge.jpg", "vip.jpg", "vip-bath.jpg", "single.jpg", "single-bath.jpg"],
      },
    ],
    gallery: [
      { src: "birdseye.jpg", caption: "bird's-eye view of the back garden" },
      { src: "lobby.jpg", caption: "lobby" },
      { src: "spa.jpg", caption: "spa" },
      { src: "fire.jpg", caption: "fire pit area" },
      { src: "vip.jpg", caption: "VIP room" },
      { src: "masterplan.jpg", caption: "masterplan" },
      { src: "zoning.jpg", caption: "functional landscape zoning" },
      { src: "elevation.jpg", caption: "unfolded facade elevation" },
      { src: "entrance.jpg", caption: "entrance" },
      { src: "playground.jpg", caption: "children's playground" },
      { src: "entrance-bird.jpg", caption: "entrance from above" },
      { src: "moodboard.jpg", caption: "interior concept collage" },
      { src: "floor-1.jpg", caption: "ground floor plan" },
      { src: "floor-2-3.jpg", caption: "plans of floors 2 and 3" },
      { src: "furniture.jpg", caption: "concept furniture" },
      { src: "restaurant.jpg", caption: "restaurant" },
      { src: "lounge.jpg", caption: "lounge" },
      { src: "vip-bath.jpg", caption: "VIP room bathroom" },
      { src: "single.jpg", caption: "single room" },
      { src: "single-bath.jpg", caption: "single room bathroom" },
    ],
  },
  {
    id: "digital-lab",
    title: "Digital Lab",
    subtitle: "A lab for digital content and multimedia: an atrium and transformable spaces for exhibitions, workshops, hackathons and collaborations.",
    tags: ["env", "ai"],
    discipline: "spatial design",
    stage: "academic project",
    cover: "atrium-day.jpg",
    intro: [
      "A lab where the physical and the digital merge: the atrium is a platform for generating, showcasing and sharing digital ideas, from XR and interactive video to generative graphics and immersive installations.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          {
            heading: "project",
            text: "Design project for a digital content and multimedia lab. Kosygin Russian State University, Institute of Design, Department of Spatial Design, 2024–2025. Tutor: S. Yu. Krutalevich.",
          },
          { heading: "role", text: "Concept, functional zoning of three floors, material selection and renders." },
          {
            heading: "idea",
            text: "DIGITAL LAB brings together modern technology, visual culture and the creative industries. The concept is built on integrating digital spaces, a transformable environment and media architecture. The space adapts to exhibitions, workshops, hackathons, learning and collaborations.",
          },
        ],
      },
      {
        title: "research",
        items: [
          {
            heading: "research map",
            text: "The research lives in an Obsidian canvas: references of multimedia spaces and the Pixar office, transformable spaces around the world, building codes, links between functional zones and ways to use the atrium. You can explore the canvas in full: pan around and zoom in.",
            images: ["research-board.jpg"],
          },
        ],
      },
      {
        title: "concept",
        items: [
          {
            heading: "imagery",
            list: ["pixels and digital", "iridescent metal", "simple rectangular geometry", "modern technology", "transformability", "creative freedom"],
            images: ["concept.jpg", "textures.jpg"],
          },
          {
            heading: "colours and materials",
            text: "The real layer: microcement, frosted glass, concrete and chrome in a light palette of RAL 1013, 7038, 7044 and 7021. The augmented layer: mirrors, LED strips, 3D mapping, digital panels, dichroic films, multimedia screens and the full RGB spectrum.",
            images: ["materials.jpg"],
          },
        ],
      },
      {
        title: "space",
        items: [
          {
            heading: "functional zoning",
            text: "A round atrium at the centre of the building is a transformable performance zone. Around it are a production zone with studios and coworking spaces, a dining zone, and sports and technical zones.",
            images: ["floor-2.jpg", "floor-3.jpg"],
          },
          {
            heading: "atrium",
            text: "By day the same atrium becomes a painting exhibition, and by night an exhibition of objects with light and projections.",
            images: ["atrium-night.jpg"],
          },
        ],
        images: ["cinema-day.jpg", "cinema-night.jpg", "showroom.jpg", "fashion.jpg", "cafe.jpg", "bar.jpg", "coworking-open.jpg", "coworking-day.jpg", "coworking-night.jpg", "gym.jpg"],
      },
    ],
    gallery: [
      { src: "research-board.jpg", caption: "research canvas in Obsidian", board: "./assets/canvas/digital-lab/canvas.json" },
      { src: "atrium-day.jpg", caption: "atrium: painting exhibition, day" },
      { src: "cinema-day.jpg", caption: "mobile cinema, day" },
      { src: "atrium-night.jpg", caption: "atrium: object exhibition, night" },
      { src: "bar.jpg", caption: "bar, day" },
      { src: "fashion.jpg", caption: "conference hall: fashion show" },
      { src: "concept.jpg", caption: "concept" },
      { src: "textures.jpg", caption: "techniques and textures" },
      { src: "materials.jpg", caption: "colours and materials" },
      { src: "floor-2.jpg", caption: "floor 2 plan" },
      { src: "floor-3.jpg", caption: "functional zoning and floor 3 plan" },
      { src: "cinema-night.jpg", caption: "mobile cinema, night" },
      { src: "showroom.jpg", caption: "showroom, day" },
      { src: "cafe.jpg", caption: "café, day" },
      { src: "coworking-open.jpg", caption: "open coworking, day" },
      { src: "coworking-day.jpg", caption: "closed coworking, day" },
      { src: "coworking-night.jpg", caption: "closed coworking, night" },
      { src: "gym.jpg", caption: "gym, day" },
    ],
  },
  {
    id: "fairy-tale-park",
    title: "Park of Russian Slavic fairy tales",
    subtitle: "An alley where visitors walk the \"hero's journey\": each zone is a fairy-tale plot everyone knows from childhood, told through modern technology.",
    tags: ["env", "ai"],
    discipline: "spatial design",
    stage: "academic project",
    cover: "ship.jpg",
    intro: [
      "A park where each zone is dedicated to a fairy-tale plot or character. Traditional motifs are presented through modern technology, making the immersion in the tale interactive.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Research and design: route scenario, zoning and renders. My first try at using AI to visualise an environment." },
          {
            heading: "idea",
            text: "This is where past and future meet. From the start of the alley to its end, visitors go through every stage of the \"hero's journey\": from the opening to the reward, from the threshold guardian to the ally, from the ordeal to purification and transformation.",
          },
        ],
        images: ["concept.jpg"],
      },
      {
        title: "hero's journey",
        items: [
          {
            heading: "a 13-stage route",
            list: [
              "the opening: the Flying Ship fairy-tale entrance",
              "the call to adventure: the pond of the Golden Fish",
              "the first encounter: the Frog Princess",
              "willow grove",
              "meeting the allies: the Three Bears' meadow",
              "meeting the threshold guardians: Baba Yaga",
              "birch grove",
              "the first obstacles: Koschei the Deathless",
              "oak grove",
              "the ordeal: the mermaid's lair",
              "the reward: the Golden Cockerel",
              "rebirth and purification: the Swan Princess bridge and the church",
              "the return with the elixir, the apple of youth: the food court",
            ],
            images: ["zoning.jpg"],
          },
        ],
      },
      {
        title: "renders",
        items: [{ heading: "park zones", text: "Each zone is designed as a standalone scene with its own light and mood, and they are all held together by a shared night-time blue and gold palette." }],
        images: ["ship.jpg", "fish.jpg", "mermaid.jpg", "swan.jpg", "apple.jpg"],
      },
    ],
    gallery: [
      { src: "ship.jpg", caption: "the flying ship" },
      { src: "fish.jpg", caption: "the golden fish" },
      { src: "mermaid.jpg", caption: "the mermaid's lair" },
      { src: "swan.jpg", caption: "the swan princess" },
      { src: "apple.jpg", caption: "the magic apple tree" },
      { src: "concept.jpg", caption: "fairy-tale concept" },
      { src: "zoning.jpg", caption: "zoning plan" },
    ],
  },
  {
    id: "transformer-table",
    title: "A transforming table inspired by an Old Slavic toy",
    subtitle: "A transforming cube for children: the table turns into a playhouse, the chair into a rocking horse, and the carved walls become an educational game.",
    tags: ["industrial"],
    discipline: "industrial design",
    stage: "academic project",
    cover: "viz-house.jpg",
    intro: [
      "A transforming cube for children aged 3 to 5, inspired by a Slavic toy and the simple mechanisms the ancient Slavs used in everyday life.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Research and design: finding the concept, transformation mechanisms, sketches and renders." },
          {
            heading: "idea",
            text: "The children's table transforms into a playhouse, the chair turns into a rocking horse, the carved walls of the cube with play elements help develop logical thinking, and an adjustable surface lets the child create comfortably.",
          },
          { heading: "who it's for", text: "Children aged 3 to 5." },
        ],
      },
      {
        title: "imagery",
        items: [
          { heading: "concept", list: ["craftsmanship", "cultural code", "children's play", "creativity"] },
          { heading: "how the object feels", list: ["curiosity about history", "simplicity", "play"] },
          {
            heading: "materials and colour",
            text: "Pine boards, gloss varnish, chipboard panels and linen. Dark brown, beige and red; the decoration is carved ornamental elements.",
          },
          {
            heading: "details",
            text: "The carvings on the cube's walls are made of Slavic symbols: the sun, the tree of life and the earth.",
            images: ["orn-sun.jpg", "orn-tree.jpg", "orn-earth.jpg"],
          },
        ],
      },
      {
        title: "functions",
        items: [
          { heading: "transformation", list: ["folding", "\"matryoshka\": parts nesting inside each other", "\"blacksmiths\": the mechanism of an old toy", "rotation", "bending"] },
          { heading: "features", list: ["an interactive activity panel", "a raisable work surface", "a rocking horse", "a playhouse"] },
          { heading: "references and mechanisms", text: "Prototypes: wooden horses, hobby horses and toy houses; mechanisms: the matryoshka, the \"blacksmiths\" toy, a hut and activity panels.", images: ["references.jpg"] },
        ],
      },
      {
        title: "process",
        items: [{ heading: "exploratory sketches", text: "Exploring the cube's shape, transformation scenarios and patterns for the walls.", images: ["sketches.jpg"] }],
      },
      {
        title: "result",
        items: [{ heading: "renders", text: "The cube in a children's room: assembled, and unfolded into a playhouse with a table and a rocking horse." }],
        images: ["viz-house.jpg", "viz-cube.jpg"],
      },
    ],
    gallery: [
      { src: "viz-house.jpg", caption: "the transformer unfolded: playhouse, table and horse" },
      { src: "viz-cube.jpg", caption: "the cube assembled" },
      { src: "sketches.jpg", caption: "exploratory sketches" },
      { src: "references.jpg", caption: "reference prototypes and mechanisms" },
      { src: "orn-sun.jpg", caption: "sun symbols" },
      { src: "orn-tree.jpg", caption: "tree of life symbols" },
      { src: "orn-earth.jpg", caption: "earth symbols" },
    ],
  },
  {
    id: "expomaster",
    title: "Expomaster Group case study",
    subtitle: "A case study deck for the Moskva film studio: a cinematic AI video of an exhibition stand that helped the builder win a tender.",
    tags: ["pres", "ai"],
    discipline: "pitch decks",
    stage: "work at the film studio",
    cover: "cover.jpg",
    intro: [
      "The Moskva film studio made a cinematic AI video of a stand for Expomaster, making it feel as if the stand were already built and running at the exhibition. I put together a case study deck about the project.",
    ],
    link: {
      href: "https://www.figma.com/proto/Lj0v71jA5D66nMXZMjF4XW/%D0%BA%D0%B5%D0%B9%D1%81-expomaster-desktop?node-id=1-2&p=f&scaling=scale-down-width&content-scaling=fixed",
      label: "deck in Figma",
    },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Design and layout of the case study deck: story structure and presentation of the pipeline and visuals." },
          {
            heading: "the client's brief",
            text: "Expomaster designs and builds exhibition stands. The company needed to win a tender and stand out from other builders by showing a detailed render of the stand and how it would look in action, with visitors and clients.",
            list: ["premium positioning of the stand", "a partnership between Progaz and Fortune", "high interest and visitor flow"],
          },
        ],
        images: ["client-render.jpg", "client-render-2.jpg"],
      },
      {
        title: "solution",
        items: [
          {
            heading: "AI video",
            text: "A cinematic AI video that makes it feel as if the stand has already been built and is running at the exhibition: a living space, movement, people, a focus on detail and scale. Preparation was a big part of it; even the most flattering camera movement was planned.",
            images: ["panorama.jpg"],
          },
        ],
      },
      {
        title: "pipeline",
        items: [
          {
            heading: "nine steps",
            list: [
              "briefing and goal setting: the video's objectives agreed with the client",
              "several visual concepts, choosing the most accurate one",
              "300+ AI images with different angles, lighting and scenes",
              "separate animation prompts for each key frame",
              "AI animation: still frames become living scenes",
              "edit direction: rhythm, sequence, emphasis",
              "music chosen to convey status and confidence",
              "colour grading and final polish",
              "assembling the master file for the tender presentation",
            ],
          },
        ],
        images: ["ai-stand.jpg", "frame-stand.jpg", "frame-handshake.jpg", "frame-meeting.jpg"],
      },
      {
        title: "result",
        items: [
          {
            heading: "\"the cherry on top\"",
            text: "Thanks to detailed preparation and attention to the client's requirements, the Expomaster team called the video \"the cherry on top\"; it became part of the strategy that led to winning the tender.",
          },
        ],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "deck cover" },
      { src: "panorama.jpg", caption: "AI video frame: the whole stand" },
      { src: "frame-handshake.jpg", caption: "frame: brand partnership" },
      { src: "frame-meeting.jpg", caption: "frame: meeting room on the stand" },
      { src: "ai-stand.jpg", caption: "AI render of the stand" },
      { src: "client-render.jpg", caption: "the client's original render" },
      { src: "client-render-2.jpg", caption: "the client's original render" },
      { src: "frame-stand.jpg", caption: "frame: stand facade" },
    ],
  },
  {
    id: "style-deck",
    title: "\"Style is everything\" deck",
    subtitle: "A commercial proposal for the Moskva film studio: a deck that reveals the idea and visuals of a video.",
    tags: ["pres"],
    discipline: "pitch decks",
    stage: "work at the film studio",
    cover: "cover.jpg",
    intro: ["At the film studio I laid out presentations: commercial proposals that revealed the idea and visuals of a future video."],
    link: {
      href: "https://www.figma.com/proto/VxsDuLNSOoWTaGnRSH9BqM/%D0%A1%D0%A2%D0%98%D0%9B%D0%AC?node-id=23-307&p=f&scaling=contain&content-scaling=fixed",
      label: "deck in Figma",
    },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Deck design and layout." },
          { heading: "brief", text: "Show the client the idea and visual style of the video before the shoot, so the proposal sells the idea." },
        ],
      },
    ],
    gallery: [{ src: "cover.jpg", caption: "deck cover" }],
  },
  {
    id: "myasomelie",
    title: "Myasomelie deck",
    subtitle: "A commercial proposal from the Moskva film studio for the Myasomelie brand: the idea and visuals of a video in a plasticine aesthetic.",
    tags: ["pres"],
    discipline: "pitch decks",
    stage: "work at the film studio",
    cover: "cover.jpg",
    intro: ["A proposal deck for the video \"Meat's coming\": the idea, the characters and the visual style."],
    link: {
      href: "https://www.figma.com/proto/H4qliilpxiD0FMAL3XLDnG/%D0%BC%D1%8F%D1%81%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%D0%B5-%D0%BC%D1%83%D0%B4%D0%B1%D0%BE%D1%80%D0%B4--Copy-?node-id=2-17&p=f&scaling=contain&content-scaling=fixed",
      label: "deck in Figma",
    },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Deck design and layout." },
          { heading: "brief", text: "Reveal the idea and visuals of the video to the client, so the commercial proposal works for the idea." },
        ],
      },
    ],
    gallery: [{ src: "cover.jpg", caption: "deck cover" }],
  },
  {
    id: "utair-landing",
    title: "A landing page proposal for UTair",
    subtitle: "Instead of a deck, a responsive animated landing page for the UTair tender: the documentary \"UTair: a country on wings\".",
    tags: ["vibe", "pres"],
    discipline: "vibe coding",
    stage: "work at the film studio",
    cover: "cover.jpg",
    intro: [
      "A commercial proposal for an airline as a live landing page: the film's idea, archive footage, reconstructions and the team, all assembled and laid out with AI in a single evening.",
    ],
    link: { href: "https://voice-admin-28054520.figma.site", label: "open the landing page" },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Art director at the Moskva film studio: concept, structure, visuals and building the landing page." },
          {
            heading: "why a landing page",
            text: "As art director, I was looking for more effective ways to make presentations and for \"wow\" formats. That's how the idea came about: vibe-code responsive animated landing pages in an evening instead of decks.",
          },
          { heading: "brief", text: "Take part in the UTair tender: propose a documentary for the airline's 60th anniversary in a way that would be remembered." },
        ],
      },
      {
        title: "landing page",
        items: [
          {
            heading: "story structure",
            list: [
              "the film's idea: aviation in the North as a life-support system for vast territories",
              "the story since 1967: Tyumen, the An-24, An-26 and An-74",
              "visual language: archive, interviews, voice-over and reconstructions",
              "key events in the company's history",
              "the team, timeline and options for distributing the film",
            ],
          },
          {
            heading: "visuals",
            text: "A blue \"aviation\" palette, a monospaced typeface like in on-board documentation, a film strip of archive frames and pixel transitions between blocks.",
          },
        ],
        images: ["hero.jpg", "story-1967.jpg", "archive.jpg", "reconstruction.jpg"],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "first screen" },
      { src: "story-1967.jpg", caption: "the story since 1967" },
      { src: "archive.jpg", caption: "archive and reconstructions" },
      { src: "reconstruction.jpg", caption: "the film's visual language" },
      { src: "hero.jpg", caption: "landing page first screen" },
    ],
  },
  {
    id: "medrentech-landing",
    title: "A landing page proposal for SKB Medrentekh",
    subtitle: "A video presentation of equipment as a landing page: how to show machinery at an exhibition without bringing bulky equipment.",
    tags: ["vibe", "pres"],
    discipline: "vibe coding",
    stage: "work at the film studio",
    cover: "cover.jpg",
    intro: [
      "A commercial proposal for an industrial company as a responsive animated landing page instead of the usual deck.",
    ],
    link: { href: "https://sonata-making-31297375.figma.site", label: "open the landing page" },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Art director at the Moskva film studio: concept, structure, visuals and building the landing page." },
          {
            heading: "brief",
            text: "How do you show equipment at an exhibition without bringing bulky machinery? The film studio offers a video presentation that clearly demonstrates how the equipment works, its functions and specifications.",
          },
        ],
      },
      {
        title: "landing page",
        items: [
          {
            heading: "presentation",
            text: "A dark, high-tech interface, precise infographics and close attention to the structure of the information, the copy and the wording: this is also what the studio's videos look like.",
          },
        ],
        images: ["hero.jpg", "equipment.jpg"],
      },
    ],
    gallery: [
      { src: "cover.jpg", caption: "professional infographics, copy and voice-over" },
      { src: "hero.jpg", caption: "landing page first screen" },
      { src: "equipment.jpg", caption: "equipment in 3D" },
    ],
  },
  {
    id: "milton-glaser",
    title: "Milton Glaser deck",
    subtitle: "A talk on Milton Glaser, \"New York's most devoted resident\": his path, style, I ♥ NY, branding and approach to work, with a quiz at the end.",
    tags: ["pres"],
    discipline: "presentation",
    stage: "academic project, Kosygin Russian State University",
    cover: "slide-1.jpg",
    intro: ["An academic presentation on graphic designer Milton Glaser, laid out like a magazine: rules, section names in the running heads, a print typeface and the designer's work on every page."],
    sections: [
      {
        title: "structure",
        items: [
          {
            text: "Beginnings, growth, genius, experience, inspiration and sources: each chapter is marked with a section name in the running head. At the end there is a quiz for the audience.",
            slides: ["slide-1.jpg", "slide-2.jpg", "slide-3.jpg", "slide-4.jpg", "slide-5.jpg", "slide-6.jpg", "slide-7.jpg", "slide-8.jpg", "slide-9.jpg", "slide-10.jpg", "slide-11.jpg", "slide-12.jpg", "slide-13.jpg", "slide-14.jpg", "slide-15.jpg", "slide-16.jpg", "slide-17.jpg", "slide-18.jpg", "slide-19.jpg", "slide-20.jpg", "slide-21.jpg", "slide-22.jpg", "slide-23.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "slide-1.jpg" },
      { src: "slide-2.jpg" },
      { src: "slide-3.jpg" },
      { src: "slide-4.jpg" },
      { src: "slide-5.jpg" },
      { src: "slide-6.jpg" },
      { src: "slide-7.jpg" },
      { src: "slide-8.jpg" },
      { src: "slide-9.jpg" },
      { src: "slide-10.jpg" },
      { src: "slide-11.jpg" },
      { src: "slide-12.jpg" },
      { src: "slide-13.jpg" },
      { src: "slide-14.jpg" },
      { src: "slide-15.jpg" },
      { src: "slide-16.jpg" },
      { src: "slide-17.jpg" },
      { src: "slide-18.jpg" },
      { src: "slide-19.jpg" },
      { src: "slide-20.jpg" },
      { src: "slide-21.jpg" },
      { src: "slide-22.jpg" },
      { src: "slide-23.jpg" },
    ],
  },
  {
    id: "vibe-tools",
    title: "Tools for myself",
    subtitle: "Agents, web apps and plugins I vibe-code to make my own work faster and easier.",
    tags: ["vibe"],
    discipline: "vibe coding",
    stage: "personal projects",
    cover: "reels-agent.jpg",
    intro: [
      "Besides full projects, I vibe-code a lot of tools for myself: one agent edits reels for my blog, another makes social media covers several times faster.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          {
            heading: "what I've built",
            list: [
              "an agent that edits reels for my blog in a style I set",
              "an agent that makes social media covers several times faster",
              "a web app for a calm and well-organised student move",
              "browser and Figma plugins",
              "in progress: an online multiplayer computer game",
            ],
          },
        ],
      },
      {
        title: "agents",
        items: [
          { heading: "reels editing", text: "The agent assembles a video from raw footage, adds captions and sound, and makes edits based on comments.", images: ["reels-agent.jpg"] },
          { heading: "covers", text: "An example of a cover made by the agent.", images: ["cover-agent.jpg"] },
        ],
      },
    ],
    gallery: [
      { src: "reels-agent.jpg", caption: "the agent editing a reel" },
      { src: "cover-agent.jpg", caption: "a cover made by the agent" },
    ],
  },
  {
    id: "the-last-disco",
    title: "The Last Disco",
    subtitle: "An AI film about a universe where cats live in 1970s disco luxury aboard a glittering cruise liner, while a dead planet lies outside.",
    tags: ["ai"],
    discipline: "AI creative",
    stage: "KNI course at Shcholoch school",
    cover: "party.jpg",
    intro: [
      "Cats in jewellery and glitter on a disco-era cruise liner, and a devastated planet outside. The contrast between illusory luxury and a dead world, made with Midjourney and AI video tools.",
    ],
    link: { href: "https://vk.com/video_ext.php?oid=503319781&id=456239738&hd=2&autoplay=1", label: "full video" },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "project", text: "An academic project for the KNI course at Shcholoch school: script, storyboard and video generation." },
          {
            heading: "idea",
            text: "A universe where cats live aboard a glittering cruise liner in the luxury of the 1970s disco era, in jewellery, sparkle and an endless party. Outside the ship lies a planet devastated by catastrophe, ruled by dirt and ruin. This highlights the contrast between the illusory luxury inside and the dead world outside.",
          },
        ],
        images: ["slide1.jpg"],
      },
      {
        title: "analysis",
        items: [
          {
            heading: "blending aesthetics",
            text: "The visual language was born from blending several aesthetics: disco-deco glam, couture glam and cat memes. Together they became disco-glam couture and memes glamour cats. Midjourney moodboards and the stylize, exp and chaos settings helped get the right generations.",
            images: ["moodboard.jpg", "slide2.jpg"],
          },
        ],
      },
      {
        title: "storyboard",
        items: [
          {
            heading: "plot",
            list: [
              "the bohemian cat world sparkled day and night",
              "the liner shone like a moving mirage",
              "it seemed the party would last forever",
              "but the glow was only a mask over reality",
              "somewhere beyond the ship, the world was different",
              "behind the mask of glitter hid a rot that had consumed the whole world",
            ],
          },
        ],
        images: ["bohemia.jpg", "liner.jpg", "party.jpg", "mask.jpg", "outside.jpg", "rot.jpg"],
      },
    ],
    gallery: [
      { src: "party.jpg", caption: "it seemed the party would last forever" },
      { src: "bohemia.jpg", caption: "the bohemian cat world" },
      { src: "liner.jpg", caption: "the liner shone like a moving mirage" },
      { src: "outside.jpg", caption: "beyond the ship, the world was different" },
      { src: "rot.jpg", caption: "rot beneath the mask of glitter" },
      { src: "mask.jpg", caption: "the glow is only a mask over reality" },
      { src: "slide1.jpg", caption: "the project's world" },
      { src: "moodboard.jpg", caption: "moodboards and blended aesthetics" },
      { src: "slide2.jpg", caption: "generated frames" },
    ],
  },
  {
    id: "wild-blood",
    title: "Wild Blood",
    subtitle: "An AI project about femininity in the Russian style: the panther as a symbol of the strong character of a fragile girl.",
    tags: ["ai"],
    discipline: "AI creative",
    stage: "in progress",
    cover: "panther.jpg",
    intro: ["The project aims to revive the image of femininity in Russia: \"every girl has her own wild cat inside\"."],
    sections: [
      {
        title: "overview",
        items: [
          {
            heading: "idea",
            text: "The panther symbolises a girl's strong character while she herself is fragile and timid. The project is in development together with a pop singer.",
            images: ["panther.jpg"],
          },
          { heading: "social media in the Russian style", text: "The same visual code carried over to my own social media.", images: ["russian-style.jpg"] },
        ],
      },
    ],
    gallery: [
      { src: "panther.jpg", caption: "the girl and the panther" },
      { src: "russian-style.jpg", caption: "social media in the Russian style" },
    ],
  },
  {
    id: "ai-smm",
    title: "AI creative for brand social media",
    subtitle: "AI-generated social media visuals for the FlyMyAI startup and the huggito interior toy brand.",
    tags: ["ai"],
    discipline: "AI creative",
    stage: "commercial projects",
    cover: "flymyai.jpg",
    intro: ["Social media creative for two brands, a tech startup and a cosy interior toy, each in its own identity."],
    link: {
      href: "https://www.figma.com/proto/6K7NWMGPoa2jRF8MbnwNtW/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE-%D0%A5%D1%80%D0%BE%D0%BC%D0%BE%D0%B2%D0%B0-%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0?node-id=38-3&p=f&scaling=contain&content-scaling=fixed",
      label: "all AI projects",
    },
    sections: [
      {
        title: "projects",
        items: [
          {
            heading: "FlyMyAI",
            text: "Social media design for a startup. All the creative reflects the company's identity, and the SMM strategy is built on grabbing users' attention through trends.",
            images: ["flymyai.jpg"],
          },
          { heading: "huggito", text: "Social media design for an interior toy brand: the character in festive and cosy scenes.", images: ["huggito.jpg"] },
        ],
      },
    ],
    gallery: [
      { src: "flymyai.jpg", caption: "FlyMyAI" },
      { src: "huggito.jpg", caption: "huggito" },
    ],
  },
  {
    id: "rusichi",
    title: "Rusichi: the visual code of a world",
    subtitle: "Research into the visual code of a fictional world: imperial Russia with mechanical technology.",
    tags: ["research"],
    discipline: "research",
    stage: "a world for a story",
    cover: "cover.jpg",
    intro: ["Research into the visual code of a fictional world: imperial Russia with mechanical technology."],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "what it's about", text: "Building a universe: what makes it \"Russian\", what the heroes and enemies look like, and what the world's light, climate, materials and graphics are. The starting point is imperial luxury combined with a mechanical aesthetic." },
          { heading: "what's inside", list: ["visual code: architecture, interiors, materials and colour system", "Eurasian influence, military might, palace luxury and folk life", "nature, climate, light and the atmosphere of the world", "mechanical aesthetic: implants, prosthetics, gears and brass", "heroes, a hussar and a warrior priest, and enemies from Slavic mythology", "graphics, items and target audience"] },
        ],
      },
      {
        title: "canvas",
        items: [
          {
            heading: "research map",
            text: "The research lives in an Obsidian canvas. You can explore it in full: pan around and zoom in.",
            images: ["research-board.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "research-board.jpg", caption: "research canvas in Obsidian", board: "./assets/canvas/rusichi/canvas.json" },
    ],
  },
  {
    id: "neorussian-style",
    title: "Neo-Russian style",
    subtitle: "Research into the neo-Russian style as the basis for my own brand: cultural codes, crafts, ornaments and how they live in modern things.",
    tags: ["research"],
    discipline: "research",
    stage: "research for a brand",
    cover: "cover.jpg",
    intro: ["Research into the neo-Russian style as the basis for my own brand: cultural codes, crafts, ornaments and how they live in modern things."],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "what it's about", text: "Looking for ways Russian culture can feel contemporary: in houses and interiors, clothing, jewellery and graphics. Along the way, brand questions: audience, brand code, logo, typeface and protecting the style." },
          { heading: "what's inside", list: ["houses, interiors, streets, details and presentation", "fairy tales and illustrations as a source of imagery", "crafts and ornaments: shawls, jewellery traditions, Torzhok gold embroidery, Hutsul ornament", "clothing: streetwear and luxury with a cultural code, audience and production", "brand code: colours, typeface, elements and logo", "how to patent your own style"] },
        ],
      },
      {
        title: "canvas",
        items: [
          {
            heading: "research map",
            text: "The research lives in an Obsidian canvas. You can explore it in full: pan around and zoom in.",
            images: ["research-board.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "research-board.jpg", caption: "research canvas in Obsidian", board: "./assets/canvas/neorussian-style/canvas.json" },
    ],
  },
  {
    id: "neorussian-village",
    title: "A neo-Russian rental village",
    subtitle: "A pre-concept for a country village near Moscow styled after Russian fairy tales and folklore, and a research plan for it.",
    tags: ["research"],
    discipline: "research",
    stage: "pre-concept",
    cover: "cover.jpg",
    intro: ["A pre-concept for a country village near Moscow styled after Russian fairy tales and folklore, and a research plan for it."],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "what it's about", text: "A village where the houses follow traditional Russian architecture, and the streets, interiors and details tell fairy tales and myths. The canvas is a map of the work: goals and criteria, references, sources and expert input." },
          { heading: "what's inside", list: ["the village concept and name options: Lukomorye, the Thrice-Ninth Kingdom, Bereginya", "houses, interiors, streets, details and project presentation", "references in Russia and worldwide: Yasno Pole, Mandrogi, country hotels, agritourism", "a typology of villages and criteria for choosing a direction", "a systems-thinking framework: goal, objectives, criteria", "expert input and sources"] },
        ],
      },
      {
        title: "canvas",
        items: [
          {
            heading: "research map",
            text: "The research lives in an Obsidian canvas. You can explore it in full: pan around and zoom in.",
            images: ["research-board.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "research-board.jpg", caption: "research canvas in Obsidian", board: "./assets/canvas/neorussian-village/canvas.json" },
    ],
  },
  {
    id: "innovation-school",
    title: "An innovative school",
    subtitle: "Research for designing the school of the future: what the learning environment will be in 10 years and what to build into the building today.",
    tags: ["research"],
    discipline: "research",
    stage: "pre-project research",
    cover: "cover.jpg",
    intro: ["Research for designing the school of the future: what the learning environment will be in 10 years and what to build into the building today."],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "what it's about", text: "The starting point is Skolka, a school where children try four industries from the first grade: biotech, IT and AI, creative and space. The question is how technology will change the way we learn and how a space can prepare for it." },
          { heading: "what's inside", list: ["the task, questions, methods and solutions", "references worldwide: High Tech High, Ørestad Gymnasium, Green School, Steve Jobs School and others", "references in Russia: Skolka, Letovo, Khoroshkola, Novaya Shkola, Innopolis", "interviews and expert input: spatial designers, urbanists, psychologists, EdTech investors", "flexible and transformable spaces, smart infrastructure, VR and AR", "multimedia and room for future technology"] },
        ],
      },
      {
        title: "canvas",
        items: [
          {
            heading: "research map",
            text: "The research lives in an Obsidian canvas. You can explore it in full: pan around and zoom in.",
            images: ["research-board.jpg"],
          },
        ],
      },
    ],
    gallery: [
      { src: "research-board.jpg", caption: "research canvas in Obsidian", board: "./assets/canvas/innovation-school/canvas.json" },
    ],
  },
  {
    id: "papushevo",
    title: "An animated series for the Papushevo Park community",
    subtitle: "Art direction of an AI animated series for a premium residential community: style, characters, storyboards and a team of creators, 10 episodes about life in the community.",
    tags: ["motion", "ai"],
    discipline: "animation art direction",
    stage: "released",
    cover: "cover.jpg",
    intro: [
      "An animated content series for the premium community Papushevo Park: short episodes in which animal residents kindly tell families about the community's rules.",
    ],
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Art director: developing the visuals, hiring a team of three creators and managing production." },
          { heading: "brief", text: "Make a series of cartoons that explains the community's rules warmly and without preaching, so both children and adults enjoy watching it." },
          { heading: "result", text: "10 episodes made with AI, from script and storyboard to generation and editing." },
        ],
      },
      {
        title: "episode one",
        items: [
          {
            text: "A family moves into the community, and Timofey the rabbit concierge introduces the children to their new home, the forest and its rules.",
            video: { src: "episode-1.mp4", poster: "episode-1-poster.jpg" },
          },
        ],
      },
      {
        title: "style",
        items: [
          {
            heading: "what we rejected",
            text: "Generated 3D often looks artificial and cheap. A Hayao Miyazaki-inspired style was seriously considered, but bias against anime drawing could have put off part of the adult audience.",
            images: ["style-rejected.jpg"],
          },
          {
            heading: "what we chose",
            text: "Soft, \"kind\" 2D graphics are easy to achieve with AI, work for both children and adults, bring a light nostalgia for classic cartoons, and let the community's real houses and streets fit naturally into the story.",
            images: ["style-chosen.jpg"],
          },
        ],
      },
      {
        title: "characters",
        items: [
          {
            heading: "the cast",
            text: "Each character has a character sheet: front, side, back and three-quarter views plus a set of emotions. Timofey the rabbit concierge is composed, polite and always checking things; the fox is charismatic and absolutely sure she is right. Each has an archetype, fears, hidden needs and typical reactions in the stories.",
            images: ["heroes.jpg"],
          },
          {
            heading: "detail checklist",
            list: ["fox: bow, boots, brown belt", "rabbit: size, loafers, cap", "family: the same clothes as in the reference", "setting: no animals, mostly conifers"],
          },
        ],
      },
      {
        title: "storyboards",
        items: [
          {
            heading: "scene by scene",
            text: "Each scene was written up as a text storyboard, then frames were generated and the best ones selected. The whole production board is below; you can pan around and take a closer look.",
          },
        ],
        images: ["row1.jpg", "row4.jpg", "row5.jpg", "row6.jpg"],
      },
      {
        title: "toys",
        items: [
          {
            heading: "characters you can hold",
            text: "For the community's children we designed soft toys of the series' characters, the rabbit concierge and the fox. They keep every detail of the characters: the rabbit's cap, bow tie and jacket, the fox's blue belted coat and bow. This way the cartoon characters live not only on screen.",
          },
        ],
        images: ["toys-hands.jpg", "toy-rabbit.jpg", "toy-fox.jpg"],
      },
    ],
    gallery: [
      { src: "row4.jpg", caption: "production board in FigJam", board: "board/board.dzi" },
      { src: "style-rejected.jpg", caption: "rejected styles" },
      { src: "style-chosen.jpg", caption: "the chosen 2D style" },
      { src: "heroes.jpg", caption: "character sheets" },
      { src: "row1.jpg", caption: "the family arrives in the community" },
      { src: "row5.jpg", caption: "a walk in the forest" },
      { src: "row6.jpg", caption: "evening in the community" },
      { src: "toys-hands.jpg", caption: "rabbit and fox soft toys" },
      { src: "toy-rabbit.jpg", caption: "the rabbit concierge toy" },
      { src: "toy-fox.jpg", caption: "the fox toy" },
    ],
  },
  {
    id: "huggito",
    title: "Cartoons for the HUGGITO art toy",
    subtitle: "Short winter cartoons for the Instagram of HUGGITO, a limited-edition art toy from the UAE with the slogan \"everyone needs a home\".",
    tags: ["motion", "ai"],
    discipline: "storyboarding and AI creative",
    stage: "December 2025 — January 2026",
    cover: "cover.jpg",
    intro: [
      "Cartoons in which HUGGITO the husky comes to life and lives through little stories about home and cosiness.",
    ],
    link: { href: "https://www.instagram.com/huggitotoy/", label: "huggito on Instagram" },
    sections: [
      {
        title: "overview",
        items: [
          { heading: "role", text: "Storyboard artist and AI creator: storyboarding scenes and generating the cartoons with AI." },
          { heading: "brand", text: "HUGGITO is a limited-edition art toy: a grey husky named HUGGITO with a golden heart on his chest. The brand's main idea is that everyone needs a home." },
          { heading: "brief", text: "Bring the toy to life in short vertical cartoons for the brand's Instagram for the winter season, keeping the character recognisable and the theme of home in every story." },
          { heading: "style", text: "Hand-drawn animation in the spirit of classic American cartoons: soft outlines, a winter palette, warm light in the windows and golden accents, like on the toy itself." },
        ],
      },
      {
        title: "the village",
        items: [
          {
            text: "A noisy city at night, insomnia and a crowded metro: HUGGITO takes a train to a snowy village where he finally feels at home.",
            video: { src: "village.mp4", poster: "village-poster.jpg" },
          },
        ],
        images: ["village-city.jpg", "village-tea.jpg", "village-arrival.jpg", "village-porch.jpg", "village-rooster.jpg"],
      },
      {
        title: "the scarf",
        items: [
          {
            text: "In a Christmas town, a snowstorm tears the yellow scarf off the hero, and he chases it through the snowy streets.",
            video: { src: "scarf.mp4", poster: "scarf-poster.jpg" },
          },
        ],
        images: ["scarf-walk.jpg", "scarf-wind.jpg", "scarf-tree.jpg", "scarf-sparrow.jpg", "scarf-snow.jpg"],
      },
      {
        title: "you can never have too many kittens",
        items: [
          {
            text: "On a winter night a kitten appears on the doorstep. HUGGITO takes it home, feeds it and builds it a cardboard house, but kittens keep coming until the house is completely full of them.",
            video: { src: "kittens.mp4", poster: "kittens-poster.jpg" },
          },
        ],
        images: ["kittens-window.jpg", "kittens-doorstep.jpg", "kittens-door.jpg", "kittens-house.jpg"],
      },
    ],
    gallery: [
      { src: "village-city.jpg", caption: "the city at night" },
      { src: "village-tea.jpg", caption: "tea with a view of the city" },
      { src: "village-arrival.jpg", caption: "arriving in the village" },
      { src: "village-porch.jpg", caption: "home" },
      { src: "village-rooster.jpg", caption: "morning in the village" },
      { src: "scarf-walk.jpg", caption: "a walk in the scarf" },
      { src: "scarf-wind.jpg", caption: "a snowstorm over the town" },
      { src: "scarf-tree.jpg", caption: "the scarf on a fir tree" },
      { src: "scarf-sparrow.jpg", caption: "the scarf with a sparrow" },
      { src: "scarf-snow.jpg", caption: "the ending" },
      { src: "kittens-window.jpg", caption: "an evening with tea" },
      { src: "kittens-doorstep.jpg", caption: "a kitten on the doorstep" },
      { src: "kittens-door.jpg", caption: "HUGGITO opens the door" },
      { src: "kittens-house.jpg", caption: "the cardboard house" },
    ],
  },
  {
    id: "type-posters",
    title: "Typographic posters",
    tags: ["fun"],
    discipline: "typography",
    stage: "experiment",
    cover: "poster-8.jpg",
    gallery: [
      { src: "poster-1.jpg" },
      { src: "poster-2.jpg" },
      { src: "poster-3.jpg" },
      { src: "poster-4.jpg" },
      { src: "poster-5.jpg" },
      { src: "poster-6.jpg" },
      { src: "poster-7.jpg" },
      { src: "poster-8.jpg" },
      { src: "poster-9.jpg" },
      { src: "poster-10.jpg" },
      { src: "poster-11.jpg" },
      { src: "poster-12.jpg" },
    ],
  },
  {
    id: "wallpapers",
    title: "Phone wallpapers",
    tags: ["fun"],
    discipline: "graphics",
    stage: "for myself",
    cover: "wall-4.jpg",
    gallery: [
      { src: "wall-1.jpg" },
      { src: "wall-2.jpg" },
      { src: "wall-3.jpg" },
      { src: "wall-4.jpg" },
      { src: "wall-5.jpg" },
      { src: "wall-6.jpg" },
      { src: "wall-7.jpg" },
      { src: "wall-8.jpg" },
      { src: "wall-9.jpg" },
      { src: "wall-10.jpg" },
      { src: "wall-11.jpg" },
      { src: "wall-12.jpg" },
      { src: "wall-13.jpg" },
    ],
  },
  {
    id: "chrome-party",
    title: "Chrome party",
    tags: ["fun"],
    discipline: "print",
    stage: "for myself",
    cover: "invite.jpg",
    gallery: [
      { src: "invite.jpg" },
      { src: "menu.jpg" },
      { src: "wine.jpg" },
      { src: "schedule.jpg" },
    ],
  },
];

window.caseImage = (item, file) => `./assets/cases/${item.id}/${file}`;
// квадратная миниатюра обложки для круглых пузырей (генерирует thumbs.sh)
window.caseThumb = (item) => `./assets/thumbs/${item.id}.jpg?v=2`;
