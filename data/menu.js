// app/data/menu.js

// --- Home: "From the Kitchen" PREVIEW (3 items, use LOCAL jpegs) ---
export const MENU_PREVIEW = [
  {
    title: "Tribe Karahi",
    desc: "Shinwari & Punjabi karahi — half/full, made to share.",
    img: "/images/preview-lamb.jpeg",
  },
  {
    title: "BBQ & Mixed Grill",
    desc: "Tikka, boti, namkeen tikka & mixed grill platters.",
    img: "/images/preview-mandi.jpeg",
  },
  {
    title: "Street Food",
    desc: "Chaats, shawarma, pakora & crowd-favorites.",
    img: "/images/preview-palak.jpeg",
  },
];

// --- Home: "Signature Dishes" (use different images than preview) ---
export const FEATURED_DISHES = [
  {
    title: "Mutton Shinwari Karahi (Full)",
    desc: "Classic shinwari karahi — full pan for the table.",
    img: "/images/menu1/Mutton Shinwari Karahi.jpg",
  },
  {
    title: "Mixed Grill (Full)",
    desc: "A smoky table-feast — best for sharing.",
    img: "/images/menu1/Mixed Grill.jpg",
  },
  {
    title: "Lamb Shankh Pulao",
    desc: "Aromatic pulao with lamb shank — rich & comforting.",
    img: "/images/dish-lamb-shank.jpeg",
  },
];

// --- Home: "Ambience" gallery (used by <AmbienceGallery/>) ---
export const AMBIENCE_IMAGES = [
  { alt: "Warm, intimate dining room", img: "/images/ambience-1.jpeg" },
  { alt: "Candle-lit tables with soft bokeh", img: "/images/ambience-2.jpeg" },
  { alt: "Cozy restaurant interior", img: "/images/ambience-3.jpeg" },
  { alt: "Evening mood with wood & glass", img: "/images/ambience-4.jpeg" },
];

// ✅ FINAL MENU — based on your latest Google Maps screenshots
// NOTE: "Lost Tribe Special" REMOVED (it does not exist in the final menu screenshots)
export const MENU_SECTIONS = [
  // ---------------------------
  // TLT BURGERS (includes sandwiches + fries on the same sheet)
  // ---------------------------
  {
    id: "tlt-burgers",
    title: "TLT BURGERS",
    items: [
      { name: "Chicken Cheesesteak Sandwich", price: "$10.99", img: "/images/menu1/Chicken Cheesesteak Sandwich.jpg" },
      { name: "Beef Smash Burger", price: "$9.99", img: "/images/menu1/Beef Smash Burger.jpg" },
      { name: "Zinger Burger", price: "$8.99", img: "/images/menu1/Zinger Burger.jpg" },
      { name: "Green Burger", price: "$8.99", img: "/images/menu1/Green Burger.jpg" },
      { name: "TLT Might Zinger", price: "$10.99", img: "/images/menu1/TLT Might Zinger.jpg" },
      { name: "Fish Burger", price: "$9.99", img: "/images/menu1/Fish Burger.jpg" },
      { name: "Spicy Mexican Burger", price: "$10.99", img: "/images/menu1/Spicy Mexican Burger.jpg" },
      { name: "Smash Quesadilla", price: "$10.99", img: "/images/menu1/Smash Quesadilla.jpg" },
      { name: "Chicken Quesadilla", price: "$10.99", img: "/images/menu1/Chicken Quesadilla" },
      { name: "Chicken Qeema Smash Burger", price: "$8.99", img: "/images/menu1/Chicken Qeema Smash Burger.jpg" },
      { name: "Chapli Kabab Burger", price: "$8.99", img: "/images/menu1/Chapli Kabab Burger.jpg" },
      { name: "Beef Philly Cheesesteak", price: "$10.99", img: "/images/menu1/Beef Philly Cheesesteak.jpg" },

      // sandwiches shown on same sheet
      { name: "Chicken Club Sandwich", price: "$7.99", img: "/images/menu1/Chicken Club Sandwich.jpg" },
      { name: "Egg & Cheese Sandwich", price: "$8.99", img: "/images/menu1/Egg & Cheese Sandwich.jpg" },
      { name: "Bacon Egg & Cheese", price: "$8.99", img: "/images/menu1/Bacon Egg & Cheese.jpg" },
      { name: "Grilled Cheese Sandwich", price: "$6.99", img: "/images/menu1/Grilled Cheese Sandwich.jpg" },
      { name: "Grilled Chicken Sandwich", price: "$8.99", img: "/images/menu1/Grilled Chicken Sandwich.jpg" },

      // fries shown on same sheet
      { name: "Chicken Loaded Fries", price: "$12.99", img: "/images/menu1/Chicken Loaded Fries.jpg" },
      { name: "Masala Fries", price: "$8.99", img: "/images/menu1/Masala Fries.jpg" },
      { name: "Curly Fries", price: "$5.99", img: "/images/menu1/Curly Fries.jpg" },
      { name: "Classic Fries", price: "$5.99", img: "/images/menu1/Classic Fries.jpg" },
      { name: "The Lost Potato", price: "$10.99", img: "/images/menu1/The Lost Potato.jpg" },
    ],
  },

  // ---------------------------
  // DESI (same sheet includes veg/daal/haleem items)
  // ---------------------------
  {
    id: "desi",
    title: "DESI",
    items: [
      { name: "Chicken Boneless Handi", price: "$19.99", img: "/images/menu1/Chicken Boneless Handi.jpg" },
      { name: "Chicken Boneless Biryani", price: "$19.99", img: "/images/menu1/Chicken Boneless Biryani.jpg" },
      { name: "Palak", price: "$15.99", img: "/images/menu1/Palak.jpg" },
      { name: "Aloo Palak", price: "$15.99", img: "/images/menu1/Aloo Palak.jpg" },
      { name: "Palak Paneer", price: "$16.99", img: "/images/menu1/Palak Paneer.jpg" },
      { name: "Palak Ghosht", price: "$17.99", img: "/images/menu1/Palak Ghosht.jpg" },
      { name: "Chicken Nihari", price: "$16.99", img: "/images/menu1/Chicken Nihari.jpg" },
      { name: "Karhi Pakora", price: "$15.99", img: "/images/menu1/Karhi Pakora.jpg" },

      { name: "Daal Mash", price: "$15.99", img: "/images/menu1/Daal Mash.jpg" },
      { name: "Daal Makhni", price: "$15.99", img: "/images/menu1/Daal Makhni.jpg" },
      { name: "Beef Haleem", price: "$18.99", img: "/images/menu1/Beef Haleem.jpg" },
      { name: "Chicken Haleem", price: "$16.99", img: "/images/menu1/Chicken Haleem.jpg" },
      { name: "Mixed Veggie", price: "$15.99", img: "/images/menu1/Mixed Veggie.jpg" },
      { name: "Bhindi Masala", price: "$15.99", img: "/images/menu1/Bhindi Masala.jpg" },
      { name: "Paneer Bhurji", price: "$19.99", img: "/images/menu1/Paneer Bhurji.jpg" },
    ],
  },

  // ---------------------------
  // TRIBE KARAHI
  // ---------------------------
  {
    id: "tribe-karahi",
    title: "TRIBE KARAHI",
    items: [
      { name: "Mutton Shinwari Karahi (Full)", price: "$59.99", img: "/images/menu1/Mutton Shinwari Karahi.jpg" },
      { name: "Mutton Shinwari Karahi (Half)", price: "$39.99", img: "/images/menu1/Mutton Shinwari Karahi.jpg" },
      { name: "Mutton Punjabi Karahi (Full)", price: "$59.99", img: "/images/menu1/Mutton Punjabi Karahi.jpg" },
      { name: "Mutton Punjabi Karahi (Half)", price: "$39.99", img: "/images/menu1/Mutton Punjabi Karahi.jpg" },
      { name: "Chicken Shinwari Karahi (Full)", price: "$49.99", img: "/images/menu1/Chicken Shinwari Karahi.jpg" },
      { name: "Chicken Shinwari Karahi (Half)", price: "$29.99", img: "/images/menu1/Chicken Shinwari Karahi.jpg" },
      { name: "Chicken Punjabi Karahi (Full)", price: "$49.99", img: "/images/menu1/ Chicken Punjabi Karahi.jpg" },
      { name: "Chicken Punjabi Karahi (Half)", price: "$29.99", img: "/images/menu1/ Chicken Punjabi Karahi.jpg" },
      { name: "Beef Tawa Qeema", price: "$15.99", img: "/images/menu1/Beef Tawa Qeema.jpg" },
    ],
  },

  // ---------------------------
  // TRIBLE B.B.Q.
  // ---------------------------
  {
    id: "trible-bbq",
    title: "TRIBLE B.B.Q.",
    items: [
      { name: "Chicken Tikka", price: "$14.99", img: "/images/menu1/Chicken Tikka.jpg" },
      { name: "Malai Boti", price: "$14.99", img: "/images/menu1/Malai Boti.jpg" },
      { name: "Chicken Namkeen Tikka", price: "$14.99", img: "/images/menu1/Chicken Namkeen Tikka".jpg },
      { name: "Paneer Tikka", price: "$19.99", img: "/images/menu1/Paneer Tikka.jpg" },
      { name: "Lamb Tikka", price: "$16.99", img: "/images/menu1/Lamb Tikka.jpg" },
      { name: "Beef Tikka", price: "$16.99", img: "/images/menu1/Beef Tikka Beef Tikka.jpg" },
      { name: "Mixed Grill (Full)", price: "$59.99", img: "/images/menu1/Mixed Grill.jpg" },
      { name: "Mixed Grill (Half)", price: "$39.99", img: "/images/menu1/Mixed Grill.jpg" },
      { name: "Add Pulao Rice", price: "$10", img: "/images/menu1/Add Pulao Rice.jpg" },
    ],
  },

  // ---------------------------
  // TRIBLE PULAO
  // ---------------------------
  {
    id: "trible-pulao",
    title: "TRIBLE PULAO",
    items: [
      { name: "Lamb Shankh Pulao", price: "$25.99", img: "/images/dish-lamb-shank.jpeg" },
      { name: "Chicken Mandi", price: "$19.99", img: "/images/menu1/Chicken Mandi.jpg" },
    ],
  },

  // ---------------------------
  // TLT TRADITIONAL BREADS
  // ---------------------------
  {
    id: "tlt-traditional-breads",
    title: "TLT TRADITIONAL BREADS",
    items: [
      { name: "Regular Parathaa", price: "$4.99", img: "/images/menu1/Regular Parathaa.jpg" },
      { name: "Aloo Ghobhi Paratha", price: "$6.99", img: "/images/menu1/Aloo Ghobhi Paratha.jpg" },
      { name: "Ghobhi Paratha", price: "$6.99", img: "/images/menu1/Ghobhi Paratha.jpg" },
      { name: "Qeema Paratha", price: "$7.99", img: "/images/menu1/Qeema Paratha.jpg" },
      { name: "Mooli Paratha", price: "$4.99", img: "/images/menu1/Mooli Paratha.jpg" },
      { name: "Meetha Paratha", price: "$5.99", img: "/images/menu1/Meetha Paratha.jpg" },

      { name: "Simple Naan", price: "$2.99", img: "/images/menu1/Simple Naan.jpg" },
      { name: "Aloo or Onion Naan", price: "$6.99", img: "/images/menu1/Aloo or Onion Naan.jpg" },
      { name: "Cheese Naan", price: "$5.99", img: "/images/menu1/Cheese Naan.jpg" },
      { name: "Garlic Naan", price: "$3.99", img: "/images/menu1/Garlic Naan.jpg" },
      { name: "Sesame Naan", price: "$3.99", img: "/images/menu1/Sesame Naan.jpg" },
      { name: "Kalwanji Naan", price: "$3.99", img: "/images/menu1/Kalwanji Naan.jpg" },
      { name: "Paneer Naan", price: "$6.99", img: "/images/menu1/Paneer Naan.jpg" },
      { name: "Qeema Naan", price: "$6.99", img: "/images/menu1/Qeema Naan.jpg" },
    ],
  },

  // ---------------------------
  // TLT STREET FOOD
  // ---------------------------
  {
    id: "tlt-street-food",
    title: "TLT STREET FOOD",
    items: [
      { name: "Creamy Fruit Chaat", price: "$14.99", img: "/images/menu1/Creamy Fruit Chaat.jpg" },
      { name: "Gol Gappay", price: "$14.99", img: "/images/menu1/Gol Gappay.jpg" },
      { name: "Gobi Manchurian", price: "$17.99", img: "/images/menu1/Gobi Manchurian.jpg" },
      { name: "Chicken Manchurian", price: "$19.99", img: "/images/menu1/Chicken Manchurian.jpg" },
      { name: "Paneer Manchurian", price: "$19.99", img: "/images/menu1/Paneer Manchurian.jpg" },
      { name: "Chilli Paneer", price: "$19.99", img: "/images/menu1/Chilli Paneer.jpg" },
      { name: "Chilli Chicken", price: "$19.99", img: "/images/menu1/Chilli Chicken.jpg" },
      { name: "Nachos", price: "$12.99", img: "/images/menu1/Nachos.jpg" },
      { name: "Samosa Chaat", price: "$12.99", img: "/images/menu1/Samosa Chaat.jpg" },
      { name: "Papri Chaat", price: "$12.99", img: "/images/menu1/Papri Chaat.jpg" },
      { name: "Chicken Tikka Paratha Roll", price: "$12.99", img: "/images/menu1/Chicken Tikka Paratha Roll.jpg" },
      { name: "Malai Boti Paratha Roll", price: "$14.99", img: "/images/menu1/Malai Boti Paratha Roll.jpg" },
      { name: "Chicken Shawarma", price: "$14.99", img: "/images/menu1/Chicken Shawarma.jpg" },
      { name: "Beef Shawarma", price: "$16.99", img: "/images/menu1/Beef Shawarma.jpg" },
      { name: "Lamb Shawarma", price: "$16.99", img: "/images/menu1/Lamb Shawarma.jpg" },
      { name: "Beef Chapli Kabab", price: "$12.99", img: "/images/menu1/Beef Chapli Kabab.jpg" },
      { name: "Chicken Chapli Kabab", price: "$10.99", img: "/images/menu1/Chicken Chapli Kabab.jpg" },
      { name: "Chicken Parkora", price: "$14.99", img: "/images/menu1/Chicken Parkora.jpg" },
      { name: "Paneer Pakora", price: "$15.99", img: "/images/menu1/Paneer Pakora.jpg" },
      { name: "Veggie Pakora", price: "$12.99", img: "/images/menu1/Veggie Pakora.jpg" },
      { name: "Fish Pakora", price: "$19.99", img: "/images/menu1/Fish PakoraFish Pakora.jpg" },
      { name: "Labori Fried Fish", price: "$10.99", img: "/images/menu1/Labori Fried Fish.jpg" },
      { name: "Chicken Samosa (2)", price: "$7.99", img: "/images/menu1/Chicken Samosa (2).jpg" },
      { name: "Veggie Samosa (2)", price: "$5.99", img: "/images/menu1/Veggie Samosa (2).jpg" },
      { name: "Lollipop Chicken", price: "$14.99", img: "/images/menu1/Lollipop Chicken.jpg" },
    ],
  },

  // ---------------------------
  // AMERICAN BREAKFAST
  // ---------------------------
  {
    id: "american-breakfast",
    title: "AMERICAN BREAKFAST",
    items: [
      { name: "Pancakes", price: "$10.99", img: "/images/menu1/Pancakes.jpg" },
      { name: "Waffles", price: "$10.99", img: "/images/menu1/Waffles.jpg" },
      { name: "Grits", price: "$6.99", img: "/images/menu1/Grits.jpg" },
      { name: "Oat Meal", price: "$6.99", img: "/images/menu1/Oat Meal.jpg" },
      { name: "French Toast (Choice of Caramel, Chocolate)", price: "$10.99", img: "/images/menu1/French Toast (Choice of Caramel, Chocolate).jpg" },
      { name: "Crepes (Choice of Caramel, Chocolate)", price: "$10.99", img: "/images/menu1/Crepes (Choice of Caramel, Chocolate)  .jpg" },
    ],
  },

  // ---------------------------
  // DESI BREAKFAST
  // ---------------------------
  {
    id: "desi-breakfast",
    title: "DESI BREAKFAST",
    items: [
      { name: "Channa Bathura", price: "$16.99", img: "/images/menu1/Channa Bathura.jpg" },
      { name: "Halwa Puri", price: "$16.99", img: "/images/menu1/Halwa Puri.jpg" },
      { name: "Lahori Channay", price: "$14.99", img: "/images/menu1/Lahori Channay.jpg" },
      { name: "Beef Nihari", price: "$16.99", img: "/images/menu1/Beef Nihari.jpg" },
      { name: "Goat Paya", price: "$16.99", img: "/images/menu1/Goat Paya.jpg" },
      { name: "Beef Paya", price: "$16.99", img: "/images/menu1/Beef Paya.jpg" },
    ],
  },

  // ---------------------------
  // OMELETTE
  // ---------------------------
  {
    id: "omelette",
    title: "OMELETTE",
    items: [
      { name: "Scrambled Egg", price: "$10.99", img: "/images/menu1/Scrambled Egg.jpg" },
      { name: "Veggie Omelette", price: "$10.99", img: "/images/menu1/Veggie Omelette.jpg" },
      { name: "Cheese Omelette", price: "$10.99", img: "/images/menu1/Cheese Omelette.jpg" },
      { name: "Spicy Omelette", price: "$10.99", img: "/images/menu1/Spicy Omelette.jpg" },
      { name: "Pakistani Omelette", price: "$10.99", img: "/images/menu1/Pakistani Omelette.jpg" },
    ],
  },

  // ---------------------------
  // TASTE OF BANGLADESH
  // ---------------------------
  {
    id: "taste-of-bangladesh",
    title: "TASTE OF BANGLADESH",
    items: [
      { name: "Roast Pulao", price: "$16.99", img: "/images/menu1/Roast Pulao.jpg" },
      { name: "Murgh Pulao", price: "$16.99", img: "/images/menu1/Murgh Pulao.jpg" },
      { name: "Beef Tihari", price: "$18.99", img: "/images/menu1/Beef Tihari.jpg" },
      { name: "Goat Tihari", price: "$18.99", img: "/images/menu1/Goat Tihari.jpg" },
      { name: "Bengali Mishti Dol", price: "$12.99", img: "/images/menu1/Bengali Mishti Dol.jpg" },
    ],
  },
];
