import wayagisland from "../assets/raja_ampat/wayag_island.webp";
import gilitrawangan from "../assets/lombok/gili_trawangan.webp";
import komodoisland from "../assets/labuan_bajo/komodo_island.webp";
import padarisland from "../assets/labuan_bajo/padar_island.webp";
import jeep from "../assets/bromo/jeep.webp";
export const Destination = [
  // Raja Ampat
  {
    id: 1,
    title: "Wayag Island Hopping Adventure",
    location: "Raja Ampat",
    province: "Papua Barat",
    duration: "1 Hari",
    type: "Island Hopping",
    price: 850000,
    rating: 4.9,
    reviewCount: 128,
    maxPerson: 10,
    image: wayagisland,
    badge: "Terlaris",
    description:
      "Jelajahi keindahan ikonik Wayag dengan laguna biru dan tebing karst yang memukau.",
    activities:
      "Naik speedboat menuju Wayag, mendaki bukit karst untuk foto panorama laguna ikonik, snorkeling di perairan biru jernih, dan menjelajahi pulau-pulau kecil di sekitarnya.",
    include: [
      "Speedboat",
      "Guide lokal",
      "Makan siang",
      "Peralatan snorkeling",
    ],
  },
  {
    id: 2,
    title: "Piaynemo Viewpoint Day Trip",
    location: "Raja Ampat",
    province: "Papua Barat",
    duration: "1 Hari",
    type: "Sightseeing",
    price: 650000,
    rating: 4.8,
    reviewCount: 95,
    maxPerson: 12,
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&q=80",
    badge: "Popular",
    description:
      "Nikmati pemandangan laguna hijau Raja Ampat dari ketinggian Piaynemo.",
    activities:
      "Naik speedboat ke Piaynemo, mendaki tangga kayu menuju puncak viewpoint, menikmati pemandangan laguna hijau dari ketinggian, lalu snorkeling di bawah tebing karst.",
    include: ["Speedboat", "Guide lokal", "Tiket masuk", "Air minum"],
  },
  {
    id: 3,
    title: "Coral Garden Snorkeling Experience",
    location: "Raja Ampat",
    province: "Papua Barat",
    duration: "Half Day",
    type: "Snorkeling",
    price: 450000,
    rating: 4.7,
    reviewCount: 210,
    maxPerson: 15,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    badge: "Best Value",
    description:
      "Snorkeling di taman karang Raja Ampat yang kaya warna dan kehidupan laut.",
    activities:
      "Snorkeling di taman karang Raja Ampat, melihat ikan warna-warni, terumbu karang sehat, dan beragam biota laut langka di perairan dangkal yang jernih.",
    include: ["Peralatan snorkeling", "Guide", "Air minum"],
  },

  // Bromo
  {
    id: 4,
    title: "Bromo Sunrise Penanjakan Tour",
    location: "Bromo",
    province: "Jawa Timur",
    duration: "Half Day",
    type: "Sightseeing",
    price: 350000,
    rating: 4.9,
    reviewCount: 543,
    maxPerson: 6,
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&q=80",
    badge: "Terlaris",
    description:
      "Saksikan matahari terbit spektakuler dari Penanjakan 1, viewpoint terbaik Bromo.",
    activities:
      "Berangkat dini hari naik jeep ke Penanjakan 1, menunggu matahari terbit di atas lautan awan, foto pemandangan Gunung Bromo, Semeru, dan Batok sekaligus.",
    include: ["Jeep 4WD", "Guide", "Tiket masuk"],
  },
  {
    id: 5,
    title: "Bromo Crater Jeep Sand Sea",
    location: "Bromo",
    province: "Jawa Timur",
    duration: "Half Day",
    type: "Adventure",
    price: 400000,
    rating: 4.9,
    reviewCount: 387,
    maxPerson: 6,
    image: jeep,
    badge: null,
    description:
      "Naiki jeep melewati lautan pasir menuju kawah Bromo yang megah dan mistis.",
    activities:
      "Naik jeep 4WD melintasi lautan pasir hitam Bromo, berhenti di savana, lanjut jalan kaki atau naik kuda menuju tangga kawah, naik ke bibir kawah Bromo yang berasap.",
    include: ["Jeep 4WD", "Guide", "Tiket kawah", "Masker"],
  },
  {
    id: 6,
    title: "Teletubbies Hill Savanna Walk",
    location: "Bromo",
    province: "Jawa Timur",
    duration: "Half Day",
    type: "Trekking",
    price: 300000,
    rating: 4.7,
    reviewCount: 201,
    maxPerson: 10,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    badge: null,
    description:
      "Jelajahi padang savana hijau ikonik Bukit Teletubbies yang memesona.",
    activities:
      "Naik jeep ke padang savana hijau Bukit Teletubbies, jalan santai di antara bukit-bukit bulat hijau yang ikonik, foto di spot terbaik, dan menikmati udara segar pegunungan Bromo.",
    include: ["Jeep 4WD", "Guide", "Tiket masuk"],
  },

  // Lombok & Gili
  {
    id: 7,
    title: "Gili Turtle Point Snorkeling",
    location: "Gili Trawangan",
    province: "Nusa Tenggara Barat",
    duration: "Half Day",
    type: "Snorkeling",
    price: 280000,
    rating: 4.8,
    reviewCount: 412,
    maxPerson: 15,
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    badge: "Popular",
    description:
      "Berenang bersama penyu laut di spot snorkeling terpopuler Gili Trawangan.",
    activities:
      "Snorkeling di spot Turtle Point Gili Trawangan, berenang berdampingan dengan penyu laut hijau dan sisik yang berkeliaran bebas, melihat ikan karang dan terumbu karang dangkal.",
    include: ["Peralatan snorkeling", "Guide", "Life jacket", "Air minum"],
  },
  {
    id: 8,
    title: "Three Gili Islands Hopping",
    location: "Gili Islands",
    province: "Nusa Tenggara Barat",
    duration: "1 Hari",
    type: "Island Hopping",
    price: 500000,
    rating: 4.9,
    reviewCount: 328,
    maxPerson: 12,
    image: gilitrawangan,
    badge: "Terlaris",
    description:
      "Island hopping ke tiga pulau Gili — Trawangan, Meno, dan Air dalam satu hari.",
    activities:
      "Island hopping ke Gili Trawangan, Gili Meno, dan Gili Air dalam satu hari — snorkeling di tiap pulau, makan siang di tepi pantai, bersepeda keliling Gili T, dan menikmati suasana tiap pulau yang berbeda karakter.",
    include: ["Speedboat", "Guide", "Makan siang", "Snorkeling gear"],
  },
  {
    id: 9,
    title: "Selong Belanak Beach Half Day",
    location: "Lombok",
    province: "Nusa Tenggara Barat",
    duration: "Half Day",
    type: "Beach",
    price: 200000,
    rating: 4.7,
    reviewCount: 176,
    maxPerson: 20,
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
    badge: null,
    description:
      "Nikmati pantai pasir putih Selong Belanak yang tenang dan bersih.",
    activities:
      "Mengunjungi pantai pasir putih halus Selong Belanak, berenang di ombak yang tenang, belajar surfing untuk pemula, berjalan di tepi pantai, dan menikmati pemandangan bukit hijau di sekitar pantai.",
    include: ["Transportasi", "Guide lokal", "Air minum"],
  },
  {
    id: 10,
    title: "Sade Village Cultural Experience",
    location: "Lombok",
    province: "Nusa Tenggara Barat",
    duration: "2-3 Jam",
    type: "Culture",
    price: 150000,
    rating: 4.6,
    reviewCount: 143,
    maxPerson: 20,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
    badge: null,
    description:
      "Kunjungi desa adat Suku Sasak dan saksikan tradisi tenun kain asli Lombok.",
    activities:
      "Masuk ke desa adat Suku Sasak, melihat rumah tradisional berlantai kotoran kerbau, menyaksikan demonstrasi tenun kain songket asli Lombok, berinteraksi dengan warga lokal, dan membeli souvenir kain tenun.",
    include: ["Guide lokal", "Tiket masuk", "Demonstrasi tenun"],
  },

  // Labuan Bajo
  {
    id: 11,
    title: "Komodo Dragon Trekking Tour",
    location: "Labuan Bajo",
    province: "Nusa Tenggara Timur",
    duration: "1 Hari",
    type: "Trekking",
    price: 750000,
    rating: 4.9,
    reviewCount: 289,
    maxPerson: 10,
    image: komodoisland,
    badge: "Terlaris",
    description:
      "Trekking di Pulau Komodo dan saksikan langsung kadal terbesar di dunia.",
    activities:
      "Naik speedboat ke Pulau Komodo, trekking bersama ranger bersenjata, melihat komodo liar dari jarak dekat di habitat aslinya, mengamati perilaku kadal terbesar di dunia, dan menjelajahi savana serta hutan Pulau Komodo.",
    include: ["Speedboat", "Ranger", "Guide", "Tiket masuk", "Makan siang"],
  },
  {
    id: 12,
    title: "Pink Beach Snorkeling Day Trip",
    location: "Labuan Bajo",
    province: "Nusa Tenggara Timur",
    duration: "1 Hari",
    type: "Snorkeling",
    price: 650000,
    rating: 4.8,
    reviewCount: 231,
    maxPerson: 12,
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80",
    badge: "Popular",
    description:
      "Kunjungi Pink Beach yang langka dan snorkeling di terumbu karang warna-warni.",
    activities:
      "Mengunjungi Pink Beach yang langka — pantai berpasir merah muda akibat pecahan terumbu karang, snorkeling di perairan jernih dengan terumbu karang warna-warni dan ikan tropis yang melimpah.",
    include: ["Speedboat", "Guide", "Snorkeling gear", "Makan siang"],
  },
  {
    id: 13,
    title: "Padar Island Sunrise Trekking",
    location: "Labuan Bajo",
    province: "Nusa Tenggara Timur",
    duration: "Half Day",
    type: "Trekking",
    price: 600000,
    rating: 4.9,
    reviewCount: 198,
    maxPerson: 10,
    image: padarisland,
    badge: "Best View",
    description:
      "Trekking ke puncak Pulau Padar untuk menyaksikan pemandangan tiga teluk yang ikonik.",
    activities:
      "Berangkat subuh naik speedboat ke Pulau Padar, trekking mendaki bukit selama 30 menit, menyaksikan matahari terbit di atas tiga teluk dengan warna air berbeda — biru, hijau, dan pink.",
    include: ["Speedboat", "Guide", "Tiket masuk", "Air minum"],
  },
  {
    id: 14,
    title: "Manta Point Diving Snorkeling",
    location: "Labuan Bajo",
    province: "Nusa Tenggara Timur",
    duration: "Half Day",
    type: "Diving",
    price: 700000,
    rating: 5.0,
    reviewCount: 167,
    maxPerson: 8,
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&q=80",
    badge: "Premium",
    description:
      "Berenang bersama pari manta raksasa di salah satu spot terbaik dunia.",
    activities:
      "Menyelam atau snorkeling di Manta Point, berenang berdampingan dengan pari manta raksasa yang melayang anggun, melihat cleaning station tempat manta membersihkan diri, dan menikmati visibilitas air yang luar biasa jernih.",
    include: ["Speedboat", "Dive master", "Snorkeling gear", "Makan siang"],
  },

  // Wakatobi
  {
    id: 15,
    title: "Wakatobi World Class Diving",
    location: "Wakatobi",
    province: "Sulawesi Tenggara",
    duration: "1 Hari",
    type: "Diving",
    price: 950000,
    rating: 5.0,
    reviewCount: 89,
    maxPerson: 8,
    image:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&q=80",
    badge: "Premium",
    description:
      "Diving di spot Roma dan Fan38 — dua spot dive kelas dunia di Wakatobi.",
    activities:
      "Menyelam di dua spot kelas dunia — Roma dengan dinding karang vertikal penuh kipas laut raksasa, dan Fan38 dengan kedalaman yang dipenuhi soft coral warna-warni dan kehidupan laut yang sangat beragam.",
    include: ["Speedboat", "Dive master", "Peralatan diving", "Makan siang"],
  },
  {
    id: 16,
    title: "Bajo Tribe Village Cultural Visit",
    location: "Wakatobi",
    province: "Sulawesi Tenggara",
    duration: "Half Day",
    type: "Culture",
    price: 250000,
    rating: 4.7,
    reviewCount: 112,
    maxPerson: 15,
    image:
      "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=600&q=80",
    badge: null,
    description:
      "Kunjungi desa unik Suku Bajo yang hidup di atas laut dengan rumah panggung.",
    activities:
      "Naik speedboat ke desa Suku Bajo yang berdiri di atas laut, berjalan di jembatan kayu antar rumah panggung, berinteraksi dengan nelayan Bajo, melihat cara hidup unik komunitas laut, dan membeli ikan segar langsung dari nelayan.",
    include: ["Speedboat", "Guide lokal", "Tiket masuk"],
  },
  {
    id: 17,
    title: "House Reef Snorkeling Half Day",
    location: "Wakatobi",
    province: "Sulawesi Tenggara",
    duration: "Half Day",
    type: "Snorkeling",
    price: 350000,
    rating: 4.8,
    reviewCount: 134,
    maxPerson: 12,
    image:
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80",
    badge: null,
    description:
      "Snorkeling di House Reef Wakatobi dengan visibilitas air hingga 30 meter.",
    activities:
      "Snorkeling langsung dari dermaga resort di House Reef Wakatobi, menikmati visibilitas air hingga 30 meter, melihat ratusan spesies ikan, penyu, dan terumbu karang yang masih sangat terjaga kealamiannya.",
    include: ["Peralatan snorkeling", "Guide", "Life jacket", "Air minum"],
  },
];
