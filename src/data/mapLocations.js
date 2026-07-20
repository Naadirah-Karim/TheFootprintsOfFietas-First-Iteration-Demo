// Map pin locations, positioned over the cropped "Fietas and Surrounds"
// The three locations with `hasDetail: true` link through to a full
// photo-and-history page. The rest are labelled from the map's key but
// don't yet have documented photos/history, so they show a name-only popup.

const mapLocations = [
  {
    id: "hassimia-butchery",
    name: "Hassimia Sahib's Republic Islamic Butchery",
    street: "17th Street",
    pageTitle: "Fietas: 17th Street",
    x: 33,
    y: 68,
    labelPos: "left",
    hasDetail: true,
    credit: "Photographs by David Goldblatt",
    images: [
      "/davidgoldblattimages/4_2386.jpg",
      "/davidgoldblattimages/4_4051.jpg",
    ],
    paragraphs: [
      "Photographed before its destruction, this butchery represents the defiance of Fietas traders. Shopkeepers like Sahib refused to move to the Oriental Plaza, facing police with dogs who threw their goods onto the streets. Some Indian families \"refused to cow down to the government's pressure,\" embodied in the Save Pageview Association's motto: \"We will not move.\"",
      "A later Goldblatt image shows Sahib's butchery still operating despite half the building being destroyed — \"amputated but still active,\" and a powerful metaphor for resilience. Chaganlal Modi, who traded spices nearby, pleaded with the government that he could not move due to his \"attachment and memories of the place\" where his family had lived since 1902. The amputated butchery embodies the SPA's principled stand: \"Do what you like, I will not move.\"",
    ],
  },
  {
    id: "chagan-spice",
    name: "Chagan Spice Shop",
    street: "18th Street",
    pageTitle: "Fietas: 18th Street",
    x: 32,
    y: 73,
    labelPos: "right",
    hasDetail: true,
    credit: "Photographs by David Goldblatt",
    images: [
      "/davidgoldblattimages/3CT_16.jpg",
    ],
    paragraphs: [
      "Spice shops like Modi's were essential to the culinary and cultural life of Fietas. The Modi family started their spice business in 1902 with his parents' help, drawing on generations of trade built up on 17th Street, the symbolic divide between the \"north\" and the \"wild south\" of Fietas.",
      "After his parents' deaths, Chaganlal Modi's personal diary describes the \"insecurity imposed by the act\" and his desperate attachment to his inherited property. He refused to move to Lenasia to continue his family's legacy — his story exemplifies how the Group Areas Act tore apart families with deep generational roots in the area.",
    ],
  },
  {
    id: "madrassa-23rd",
    name: "The Madrassa, 23rd Street",
    street: "23rd Street",
    pageTitle: "Fietas: 23rd Street",
    x: 26,
    y: 92,
    labelPos: "left",
    hasDetail: true,
    credit: "Photographs by David Goldblatt",
    images: [
      "/davidgoldblattimages/4_2449.jpg",
      "/davidgoldblattimages/4_5221.jpg",
    ],
    paragraphs: [
      "The 23rd Street Mosque and Madrassa (the \"Malay mosque\") was one of two main mosques in Fietas, hosting weekly zikr sessions, ratieb, and maulood prayers. Because the ground was consecrated for worship, it could not be as easily bulldozed as the homes around it, and it stood for years after the surrounding houses were flattened.",
      "The 15th Street Mosque, distinct from the 23rd Street \"Malay\" mosque, was known as the \"Indian\" mosque. Despite this division, both were central to community life. Religious institutions taught Arabic, Urdu, Gujarati, Hindi and Tamil, and the mosques still stand today as some of the few remaining landmarks of Fietas.",
    ],
  },

  // Additional landmark pins, named from the map's own key. No documented
  // photos/history yet — shown as name-only markers.
  { id: "asva-house", name: "Asva House", street: "12th Street", x: 30, y: 49, hasDetail: false },
  { id: "madrassa-12th", name: "Madrassa", street: "12th Street", x: 24, y: 49, hasDetail: false },
  { id: "surtees-museum", name: "Surtees / Fietas Museum", street: "13th Street", x: 33, y: 52, hasDetail: false },
  { id: "kohinoor-building", name: "The Kohinoor Family Building", street: "13th Street", x: 22, y: 52, hasDetail: false },
  { id: "abrams-store", name: "Abrams Store", street: "14th Street", x: 34, y: 55, hasDetail: false },
  { id: "hanifa-patel-home", name: "Hanifa Patel's Childhood Home", street: "15th Street", x: 30, y: 59, hasDetail: false },
  { id: "taj-cinema", name: "Taj Cinema", street: "16th Street", x: 27, y: 64, hasDetail: false },
  { id: "subway-grocer-16", name: "Subway Grocer", street: "16th Street", x: 35, y: 64, hasDetail: false },
  { id: "mansoor-sweet-meats", name: "Mansoor Sweet Meat Shop", street: "16th Street", x: 42, y: 64, hasDetail: false },
  { id: "avalon-cinema", name: "Avalon Cinema", street: "17th Street", x: 36, y: 68, hasDetail: false },
  { id: "subway-grocer-19", name: "Subway Grocer", street: "19th Street", x: 28, y: 76, hasDetail: false },
  { id: "mayibue-store", name: "Mayibue Store", street: "19th Street", x: 40, y: 76, hasDetail: false },
  { id: "star-bioscope", name: "Star Bioscope", street: "19th Street", x: 34, y: 79, hasDetail: false },
  { id: "docrat-house", name: "Docrat House", street: "20th Street", x: 30, y: 82, hasDetail: false },
  { id: "kabelkar-house", name: "Kabelkar House", street: "20th Street", x: 38, y: 82, hasDetail: false },
  { id: "nederduitse-kerk", name: "Nederduitse Gereformeerde Kerk", street: "Vrededorp", x: 58, y: 16, hasDetail: false },
];

export default mapLocations;
