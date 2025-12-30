// lib/siteConfig.js
export const site = {
  name: "The Lost Tribe",

  // ✅ Final phone / WhatsApp (no dummy)
  phone: "+1 610 862 6680",        // display
  phoneTel: "tel:+16108626680",    // tel link
  whatsapp: "+16108626680",        // raw
  whatsappLink: "https://wa.me/16108626680",

  // ✅ Final location (Upper Darby, PA)
  lat: 39.9679457,
  lng: -75.2897451,

  addressLine1: "8925 West Chester Pike",
  addressLine2: "Upper Darby Township, PA 19082, United States",

  // ✅ Exact Google Maps link you provided
  mapsLink:
    "https://www.google.com/maps/place/The+Lost+Tribe+-+Halal/@39.9679457,-75.2897451,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c1f51a4d064b:0xc641bc517e167cd6!8m2!3d39.9679457!4d-75.2897451!16s%2Fg%2F11yh6xt70r?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D",

  // ✅ stable embed
  mapsEmbed:
    "https://www.google.com/maps?q=The%20Lost%20Tribe%20-%20Halal,%208925%20West%20Chester%20Pike,%20Upper%20Darby%20Township,%20PA%2019082&output=embed",

  // optional; safe to keep
  gmapsPlaceId: "",

  // ✅ hours (same as home section)
  hours: [
    "Mon–Thu: 5:00 PM – 10:00 PM",
    "Fri–Sat: 5:00 PM – 11:00 PM",
    "Sun: 5:00 PM – 9:00 PM",
  ],
};
