// app/data/menu.js

// --- Home: "From the Kitchen" PREVIEW (3 items, use LOCAL jpegs) ---
export const MENU_PREVIEW = [
  {
    title: "Lamb & Karahi Nights",
    desc: "Slow-cooked lamb, rich gravies and sharing karahis.",
    img: "/images/preview-lamb.jpeg",
  },
  {
    title: "Mandi & Rice Platters",
    desc: "Smoky mandi, pulao and over-rice favorites built to share.",
    img: "/images/preview-mandi.jpeg",
  },
  {
    title: "Vegetarian Comforts",
    desc: "Palak, paneer and slow-cooked daals for comfort nights.",
    img: "/images/preview-palak.jpeg",
  },
];

// --- Home: "Signature Dishes" (use different images than preview) ---
export const FEATURED_DISHES = [
  {
    title: "Lamb Shank with Qabuli Pulao",
    desc: "Slow-cooked lamb over aromatic qabuli rice, finished with toasted nuts.",
    img: "/images/dish-lamb-shank.jpeg",
  },
  {
    title: "Mutton Shinwari Karahi",
    desc: "Mutton, fresh tomatoes and green chilies, cooked low in a light spice wok.",
    img: "/images/dish-mutton-shinwari.jpeg",
  },
  {
    title: "★ Mix Grill (4 people)",
    desc: "A table-side feast of tikka, boti and smoky skewers made for sharing.",
    img: "/images/dish-mix-grill.jpeg",
  },
];

// --- Home: "Ambience" gallery (used by <AmbienceGallery/>) ---
export const AMBIENCE_IMAGES = [
  { alt: "Warm, intimate dining room",        img: "/images/ambience-1.jpeg" },
  { alt: "Candle-lit tables with soft bokeh", img: "/images/ambience-2.jpeg" },
  { alt: "Cozy restaurant interior",          img: "/images/ambience-3.jpeg" },
  { alt: "Evening mood with wood & glass",    img: "/images/ambience-4.jpeg" },
];

// --- Full Menu (sectioned) — render on /menu page ---
export const MENU_SECTIONS = [
  {
    id: "royal-food-street",
    title: "Royal Food Street",
    items: [
      {
        name: "2 Chicken Samosas",
        desc: "Spiced ground chicken, peas, encased in flaky pastry.",
        price: "$7.99",
        img: "/images/menu/royal-food-street-01.jpeg",
      },
      {
        name: "2 Vegetable Samosas",
        desc: "Spiced potato, peas, onion, crispy triangular pastry.",
        price: "$5.99",
        img: "/images/menu/royal-food-street-02.jpeg",
      },
      {
        name: "Samosa OR Paapri Chaat",
        desc: "Crushed veggie samosa or Aloo Tikki or chana, yogurt, chutneys, spices.",
        price: "$15.99",
        img: "/images/menu/royal-food-street-03.jpeg",
      },
      {
        name: "Aloo Tikki OR Channa Chaat",
        desc: "Crushed veggie samosa or Aloo Tikki or chana, yogurt, chutneys, spices.",
        price: "$15.99",
        img: "/images/menu/royal-food-street-04.jpeg",
      },
      {
        name: "Royal Creamy Fruit Chaat",
        desc: "Fresh sliced seasonal fruit with Punjabi Muraba and Special Cream.",
        price: "$15.99",
        img: "/images/menu/royal-food-street-05.jpeg",
      },
      {
        name: "Royal Gol Gappay",
        desc: "Puffed hollow balls, spiced potato, chickpeas, tangy flavored water (pani).",
        price: "$15.99",
        img: "/images/menu/royal-food-street-06.jpeg",
      },
      {
        name: "Lollipop Chicken",
        desc: "French-style chicken drumsticks, crispy coating, Schezwan dip.",
        price: "$15.99",
        img: "/images/menu/royal-food-street-07.jpeg",
      },
    ],
  },
  {
    id: "royal-tlt-signature",
    title: "Royal TLT — Signature",
    items: [
      {
        name: "Malai Boti Paratha/Naan Roll",
        desc: "Creamy chicken boti, mint chutney, wrapped in paratha or naan.",
        price: "$15.99",
        img: "/images/menu/royal-tlt-01.jpeg",
      },
      {
        name: "2 Chicken Chapli Kabobs",
        desc: "2 pcs ground chicken patty, traditional spices, fresh herbs.",
        price: "$10.99",
        img: "/images/menu/royal-tlt-02.jpeg",
      },
      {
        name: "Chicken Tikka Paratha/Naan Roll",
        desc: "Classic chicken tikka, onion, chutney, wrapped in paratha or naan.",
        price: "$15.99",
        img: "/images/menu/royal-tlt-03.jpeg",
      },
      {
        name: "Beef Chapli Kabob",
        desc: "2 pcs flat, spiced ground beef patty, pomegranate seeds, cilantro.",
        price: "$15.99",
        img: "/images/menu/royal-tlt-04.jpeg",
      },
    ],
  },
  {
    id: "indo-chinese",
    title: "Indo–Chinese",
    items: [
      {
        name: "Gobi Manchurian",
        desc: "Crispy cauliflower, sweet & sour Indo–Chinese sauce, ginger.",
        price: "$17.99",
        img: "/images/menu/indo-chinese-01.jpeg",
      },
      {
        name: "Chicken or Paneer Manchurian",
        desc: "Fried paneer cubes or chicken cubes, spicy Indo–Chinese sauce, peppers, onion.",
        price: "$19.99",
        img: "/images/menu/indo-chinese-02.jpeg",
      },
      {
        name: "Chilli Chicken",
        desc: "Dry-fried chicken, fiery sauce, green chilies, onion, soy.",
        price: "$19.99",
        img: "/images/menu/indo-chinese-03.jpeg",
      },
    ],
  },
  {
    id: "all-time-favourite",
    title: "All Time Favourite",
    items: [
      {
        name: "Smash Burger",
        desc: "Thin beef patty, seared and pressed flat, toasted bun. Add fries $2.",
        price: "$10.99",
        img: "/images/menu/all-time-fav-01.jpeg",
      },
      {
        name: "Zinger",
        desc: "Crispy fried chicken fillet, spicy marinade, lettuce, mayo.",
        price: "$9.99",
        img: "/images/menu/all-time-fav-02.jpeg",
      },
      {
        name: "Mighty Zinger",
        desc: "Double crispy chicken fillet, spicy marinade, extra toppings.",
        price: "$10.99",
        img: "/images/menu/all-time-fav-03.jpeg",
      },
      {
        name: "Chicken Wings",
        desc: "Crispy wings — BBQ, Buffalo, Lemon Pepper, or Sweet Chilli.",
        price: "$10.99",
        img: "/images/menu/all-time-fav-04.jpeg",
      },
      {
        name: "3 Chicken Tenders",
        desc: "Marinated chicken breast strips, breaded and fried.",
        price: "$8.99",
        img: "/images/menu/all-time-fav-05.jpeg",
      },
      {
        name: "3 Fried Chickens",
        desc: "Southern-style bone-in chicken, crispy seasoned coating.",
        price: "$8.99",
        img: "/images/menu/all-time-fav-06.jpeg",
      },
      {
        name: "Philly Cheesesteak",
        desc: "Thinly sliced beef, sautéed onion, melted provolone, sub roll.",
        price: "$10.99",
        img: "/images/menu/all-time-fav-07.jpeg",
      },
      {
        name: "Lamb OR Beef Shawarma",
        desc: "Thinly sliced, marinated meat carved from the spit, wrapped in bread.",
        price: "$16.99",
        img: "/images/menu/all-time-fav-08.jpeg",
      },
      {
        name: "Chicken Shawarma",
        desc: "Tender chicken, vertical spit, garlic sauce, fresh toppings.",
        price: "$15.99",
        img: "/images/menu/all-time-fav-09.jpeg",
      },
    ],
  },
  {
    id: "sea-food",
    title: "Sea Food",
    items: [
      {
        name: "Fish Pakora",
        desc: "Crispy batter-fried fish fillets, house dipping sauce.",
        price: "$24.99",
        img: "/images/menu/seafood-01.jpeg",
      },
      {
        name: "Lahori Fish OR Fish & Chips",
        desc: "Crispy deep-fried white fish, special street-style Lahori batter.",
        price: "$15.99",
        img: "/images/menu/seafood-02.jpeg",
      },
    ],
  },
  {
    id: "bbq",
    title: "BBQ",
    items: [
      {
        name: "Chicken Tikka OR Malai Boti",
        desc: "Classic boneless chicken cubes, bold red marinade, grilled.",
        price: "$15.99",
        img: "/images/menu/bbq-01.jpeg",
      },
      {
        name: "Chicken Namkeen Tikka",
        desc: "Tender boneless chicken, mild seasoning, butter-brushed.",
        price: "$15.99",
        img: "/images/menu/bbq-02.jpeg",
      },
      {
        name: "Paneer Tikka",
        desc: "Yogurt-marinated cheese, bell peppers, onion, grilled.",
        price: "$19.99",
        img: "/images/menu/bbq-03.jpeg",
      },
      {
        name: "★ Mix Grill (4 people)",
        desc: "1 Malai Boti, 1 Chicken Tikka, 1 Lamb Tikka, 1 Beef Tikka, 1 Chicken Namkeen Tikka.",
        price: "$69.99",
        img: "/images/menu/bbq-04.jpeg",
      },
      {
        name: "Lamb Chops",
        desc: "Premium lamb ribs, robust spices, grilled.",
        price: "$18.99",
        img: "/images/menu/bbq-05.jpeg",
      },
      {
        name: "Lamb Tikka",
        desc: "Cubes of lamb, intense marinade, charred over heat.",
        price: "$15.99",
        img: "/images/menu/bbq-06.jpeg",
      },
      {
        name: "Beef Tikka",
        desc: "Marinated beef cubes, smoky, char-grilled.",
        price: "$15.99",
        img: "/images/menu/bbq-07.jpeg",
      },
    ],
  },
  {
    id: "karahi",
    title: "Karahi (Mild, Medium, Spicy) Option",
    items: [
      {
        name: "Mutton Shinwari Karahi",
        desc: "Mutton, fresh tomatoes, green chilies, minimal spices (wok).",
        price: "$59.99",
        img: "/images/menu/karahi-01.jpeg",
      },
      {
        name: "Mutton Punjabi OR Achari karahi",
        desc: "Mutton with pickling spices (achari), tangy and flavorful.",
        price: "$59.99",
        img: "/images/menu/karahi-02.jpeg",
      },
      {
        name: "Lamb Shank Rosh",
        desc: "Lamb shanks with Yakhni (soup).",
        price: "$24.99",
        img: "/images/menu/karahi-03.jpeg",
      },
      {
        name: "Chicken Shinwari Karahi",
        desc: "Chicken, fresh tomatoes, green chilies, minimal spices (wok).",
        price: "$39.99",
        img: "/images/menu/karahi-04.jpeg",
      },
      {
        name: "Chicken Punjabi OR Achari Karahi",
        desc: "Chicken with pickling spices (achari), tangy and flavorful.",
        price: "$39.99",
        img: "/images/menu/karahi-05.jpeg",
      },
      {
        name: "Tawa Qeema",
        desc: "Spiced minced (qeema), sautéed on flat griddle (tawa).",
        price: "$19.99",
        img: "/images/menu/karahi-06.jpeg",
      },
    ],
  },
  {
    id: "rice-platter",
    title: "Rice Platter",
    items: [
      {
        name: "Lamb Shank Pulao",
        desc: "Single lamb shank, slow-cooked, paired with aromatic pulao.",
        price: "$24.99",
        img: "/images/menu/rice-01.jpeg",
      },
      {
        name: "Beef Tikka OR Lamb Tikka",
        desc: "Classic boneless beef or lamb cubes, red marinade, grilled.",
        price: "$19.99",
        img: "/images/menu/rice-02.jpeg",
      },
      {
        name: "Chicken Tikka OR Malai Boti",
        desc: "Classic boneless chicken cubes, bold red marinade, grilled.",
        price: "$19.99",
        img: "/images/menu/rice-03.jpeg",
      },
      {
        name: "Lamb Mandi",
        desc: "1pc or 2pc slow-steamed lamb, smoky spice rub, mandi rice.",
        price: "$24/44",
        img: "/images/menu/rice-04.jpeg",
      },
      {
        name: "Beef Tihari",
        desc: "Highly seasoned rice, small tender pieces of beef.",
        price: "$16.99",
        img: "/images/menu/rice-05.jpeg",
      },
      {
        name: "Chicken Mandi",
        desc: "Slow-steamed chicken, smoky spice rub, mandi rice.",
        price: "$19.99",
        img: "/images/menu/rice-06.jpeg",
      },
      {
        name: "Chicken Over Rice",
        desc: "Seasoned chicken, saffron rice, white & hot sauce.",
        price: "$12.99",
        img: "/images/menu/rice-07.jpeg",
      },
      {
        name: "Roast Pulao",
        desc: "Spiced roasted chicken pc, over Bengali-style pulao.",
        price: "$16.99",
        img: "/images/menu/rice-08.jpeg",
      },
      {
        name: "Murgh Pulao",
        desc: "Chicken pieces, fragrant rice, Bengali aromatic spices.",
        price: "$16.99",
        img: "/images/menu/rice-09.jpeg",
      },
    ],
  },
  {
    id: "vegetarian",
    title: "Vegetarian",
    items: [
      {
        name: "Palak",
        desc: "Simple seasoned spinach (palak) sauté.",
        price: "$15.99",
        img: "/images/menu/veg-01.jpeg",
      },
      {
        name: "Aloo Palak",
        desc: "Potatoes (aloo) and fresh spinach, lightly spiced.",
        price: "$15.99",
        img: "/images/menu/veg-02.jpeg",
      },
      {
        name: "Palak Paneer",
        desc: "Indian cottage cheese (paneer) in a creamy, spiced spinach.",
        price: "$16.99",
        img: "/images/menu/veg-03.jpeg",
      },
      {
        name: "Paneer Bhujia",
        desc: "Scrambled paneer, onion, tomato, spices.",
        price: "$19.99",
        img: "/images/menu/veg-04.jpeg",
      },
      {
        name: "Daal Mash",
        desc: "Split white lentils, tempered with ginger, garlic, and chilies.",
        price: "$15.99",
        img: "/images/menu/veg-05.jpeg",
      },
      {
        name: "Daal Makhni",
        desc: "Black lentils, kidney beans, slow-cooked in butter and cream.",
        price: "$15.99",
        img: "/images/menu/veg-06.jpeg",
      },
      {
        name: "Mix Veggie",
        desc: "Seasonal mixed vegetables, mild aromatic spices.",
        price: "$15.99",
        img: "/images/menu/veg-07.jpeg",
      },
    ],
  },
  {
    id: "desi",
    title: "Desi",
    items: [
      {
        name: "Palak Ghosht",
        desc: "Mutton cooked with fresh spinach (palak), aromatic spices.",
        price: "$17.99",
        img: "/images/menu/desi-01.jpeg",
      },
      {
        name: "Beef Nihari",
        desc: "Slow-cooked stew of beef, wheat, barley, and lentils.",
        price: "$16.99",
        img: "/images/menu/desi-02.jpeg",
      },
      {
        name: "Chicken Haleem",
        desc: "Slow-cooked stew of chicken, wheat, barley, and lentils.",
        price: "$16.99",
        img: "/images/menu/desi-03.jpeg",
      },
      {
        name: "Beef Haleem",
        desc: "Slow-cooked stew of beef, wheat, barley, and lentils.",
        price: "$19.99",
        img: "/images/menu/desi-04.jpeg",
      },
    ],
  },
  {
    id: "paratha",
    title: "Paratha",
    items: [
      {
        name: "Regular Paratha",
        desc: "Classic flaky, multi-layered flatbread with ghee or oil.",
        price: "$4.99",
        img: "/images/menu/paratha-01.jpeg",
      },
      {
        name: "Aloo Paratha",
        desc: "Mashed potatoes enriched with spices, stuffed.",
        price: "$6.99",
        img: "/images/menu/paratha-02.jpeg",
      },
      {
        name: "Gobi Paratha",
        desc: "Grated cauliflower, pan-roasted to golden perfection.",
        price: "$6.99",
        img: "/images/menu/paratha-03.jpeg",
      },
      {
        name: "Keema Paratha",
        desc: "Pan-fried flatbread stuffed with savory minced meat.",
        price: "$7.99",
        img: "/images/menu/paratha-04.jpeg",
      },
      {
        name: "Anda Paratha",
        desc: "Street-style: flaky paratha with freshly cooked egg inside.",
        price: "$15.99",
        img: "/images/menu/paratha-05.jpeg",
      },
    ],
  },
  {
    id: "naan",
    title: "Naan",
    items: [
      {
        name: "Simple Naan",
        desc: "Classic leavened flatbread, baked in a tandoor.",
        price: "$2.99",
        img: "/images/menu/naan-01.jpeg",
      },
      {
        name: "Sesame OR Kalwanji Naan",
        desc: "Naan topped with roasted sesame seeds.",
        price: "$3.99",
        img: "/images/menu/naan-02.jpeg",
      },
      {
        name: "Aloo / Onion Naan",
        desc: "Stuffed with spiced mashed potato or chopped onions.",
        price: "$6.99",
        img: "/images/menu/naan-03.jpeg",
      },
      {
        name: "Paneer Naan",
        desc: "Naan stuffed with finely chopped spiced paneer.",
        price: "$6.99",
        img: "/images/menu/naan-04.jpeg",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    items: [
      { name: "Water",                  desc: "", price: "$1.99", img: "/images/menu/drink-01.jpeg" },
      { name: "Soda, juice",            desc: "", price: "$1.99", img: "/images/menu/drink-02.jpeg" },
      { name: "Mango Lassi",            desc: "", price: "$5.99", img: "/images/menu/drink-03.jpeg" },
      { name: "Tea",                    desc: "", price: "$4.99", img: "/images/menu/drink-04.jpeg" },
      { name: "Fresh squeezed juice",   desc: "", price: "$7.99", img: "/images/menu/drink-05.jpeg" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Accompaniments",
    items: [
      { name: "Kheer",  desc: "", price: "$15.99", img: "/images/menu/dessert-01.jpeg" },
      { name: "Salad",  desc: "", price: "$6.99",  img: "/images/menu/dessert-02.jpeg" },
      { name: "Chatni", desc: "", price: "$3.99",  img: "/images/menu/dessert-03.jpeg" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches (Croissant, Bagel, Bread)",
    items: [
      {
        name: "Chicken Club Sandwich",
        desc: "Grilled chicken, bacon, lettuce, tomato, mayo.",
        price: "$7.99",
        img: "/images/menu/sandwich-01.jpeg",
      },
      {
        name: "Egg and Cheese",
        desc: "Fried or scrambled egg, melted cheese.",
        price: "$7.99",
        img: "/images/menu/sandwich-02.jpeg",
      },
      {
        name: "Bacon Egg and Cheese",
        desc: "Fried or scrambled egg, crispy bacon, melted cheese.",
        price: "$8.99",
        img: "/images/menu/sandwich-03.jpeg",
      },
      {
        name: "Turkey Egg and Cheese",
        desc: "Fried/scrambled egg, sliced deli turkey, melted cheese.",
        price: "$8.99",
        img: "/images/menu/sandwich-04.jpeg",
      },
      {
        name: "Grilled Cheese",
        desc: "Buttered toast, melted American and cheddar.",
        price: "$8.99",
        img: "/images/menu/sandwich-05.jpeg",
      },
    ],
  },
  {
    id: "fries",
    title: "Fries",
    items: [
      {
        name: "Classic Fries",
        desc: "Classic thin-cut French fries, lightly salted.",
        price: "$3.99",
        img: "/images/menu/fries-01.jpeg",
      },
      {
        name: "The Lost Potato",
        desc: "Signature spiced, stuffed, and crispy grilled potato.",
        price: "$8.99",
        img: "/images/menu/fries-02.jpeg",
      },
      {
        name: "Loaded Fries",
        desc: "Melted cheese sauce, bacon bits, jalapeños.",
        price: "$10.99",
        img: "/images/menu/fries-03.jpeg",
      },
      {
        name: "Masala Fries",
        desc: "Fries tossed in tangy, spicy dry Indian seasoning mix.",
        price: "$10.99",
        img: "/images/menu/fries-04.jpeg",
      },
    ],
  },
  {
    id: "american-breakfast",
    title: "American Breakfast",
    items: [
      {
        name: "Pancakes",
        desc: "Fluffy buttermilk pancakes, maple syrup.",
        price: "$10.99",
        img: "/images/menu/american-breakfast-01.jpeg",
      },
      {
        name: "Waffles",
        desc: "Golden Belgian waffle, whipped cream, berries.",
        price: "$10.99",
        img: "/images/menu/american-breakfast-02.jpeg",
      },
      {
        name: "French Toast",
        desc: "Thick-cut bread, egg & cinnamon, pan-fried.",
        price: "$10.99",
        img: "/images/menu/american-breakfast-03.jpeg",
      },
      {
        name: "Grits",
        desc: "Stone-ground cornmeal, butter, seasoning.",
        price: "$6.99",
        img: "/images/menu/american-breakfast-04.jpeg",
      },
      {
        name: "Oat Meal",
        desc: "Hot rolled oats, choice of milk and toppings.",
        price: "$6.99",
        img: "/images/menu/american-breakfast-05.jpeg",
      },
    ],
  },
  {
    id: "desi-breakfast",
    title: "Desi Breakfast",
    items: [
      {
        name: "Lahori Channay",
        desc: "Slow-cooked chickpeas in rich, spicy gravy.",
        price: "$14.99",
        img: "/images/menu/desi-breakfast-01.jpeg",
      },
      {
        name: "Beef Nihari",
        desc: "Beef shank slow-cooked in a delicate, rich gravy.",
        price: "$16.99",
        img: "/images/menu/desi-breakfast-02.jpeg",
      },
      {
        name: "Goat Paya",
        desc: "Goat trotters slow-cooked overnight in a thin, spiced broth.",
        price: "$16.99",
        img: "/images/menu/desi-breakfast-03.jpeg",
      },
      {
        name: "Channa Bathura",
        desc: "Deep-fried fluffy bread served with chickpea curry.",
        price: "$16.99",
        img: "/images/menu/desi-breakfast-04.jpeg",
      },
      {
        name: "Halwa Puri",
        desc: "Sweet semolina pudding with deep-fried soft bread.",
        price: "$16.99",
        img: "/images/menu/desi-breakfast-05.jpeg",
      },
    ],
  },
  {
    id: "omelete",
    title: "Omelete",
    items: [
      {
        name: "Scrambled egg",
        desc: "Beaten eggs cooked in a pan.",
        price: "$10.99",
        img: "/images/menu/omelete-01.jpeg",
      },
      {
        name: "Veggie Omelete",
        desc: "Vegetable omelete.",
        price: "$10.99",
        img: "/images/menu/omelete-02.jpeg",
      },
    ],
  },
];
