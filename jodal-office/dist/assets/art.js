const ART = {
  "teacher": "assets/teacher.svg",
  "firefighter": "assets/firefighter.svg",
  "clerk": "assets/clerk.svg",
  "police": "assets/police.svg",
  "technician": "assets/technician.svg",
  "doctor": "assets/doctor.svg",
  "factory": "assets/factory.svg",
  "chair": "assets/chair.svg",
  "vest": "assets/vest.svg",
  "box": "assets/box.svg",
  "light": "assets/light.svg",
  "computer": "assets/computer.svg",
  "laptop": "assets/laptop.svg",
  "sign": "assets/sign.svg",
  "construction": "assets/construction.svg",
  "copper": "assets/copper.svg",
  "iron": "assets/iron.svg",
  "zinc": "assets/zinc.svg",
  "lock": "assets/lock.svg",
  "unlock": "assets/unlock.svg",
  "star": "assets/star.svg",
  "desk": "assets/desk.svg",
  "cabinet": "assets/cabinet.svg",
  "air-purifier": "assets/air-purifier.svg",
  "cleaning": "assets/cleaning.svg",
  "protective-suit": "assets/protective-suit.svg",
  "stationery": "assets/stationery.svg",
  "document-set": "assets/document-set.svg",
  "inspection": "assets/inspection.svg",
  "tiling": "assets/tiling.svg",
  "road": "assets/road.svg"
};

function artwork(id, label = "") {
  const src = ART[id];
  if (!src) return "";
  return `<img class="artwork" src="${src}" alt="${label}">`;
}
