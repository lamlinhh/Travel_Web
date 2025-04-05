export interface DestinationData {
  overview: string;
  highlights: string[];
  itinerary: string[];
  tips: string[];
  bestTime: string;
  currency: string;
  language: string;
  climate: string;
  visa: string;
  transport: string[];
  accommodation: string[];
  food: string[];
  safety: string;
  budget: {
    low: string;
    medium: string;
    high: string;
  };
  popularTours: {
    name: string;
    duration: string;
    price: string;
    description: string;
  }[];
  nearbyAttractions: string[];
  culturalTips: string[];
  packingList: string[];
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  details: {
    overview: string;
    highlights: string[];
    itinerary: string[];
    tips: string[];
    bestTimeToVisit: string;
    currency: string;
    language: string;
    climate: string;
    visaInformation: string;
    transportOptions: string[];
    accommodationTypes: string[];
    foodRecommendations: string[];
    safetyTips: string[];
    budget: {
      low: string;
      medium: string;
      high: string;
    };
    popularTours: string[];
    nearbyAttractions: string[];
    culturalTips: string[];
    packingList: string[];
  };
}

export const destinations: Destination[] = [
  {
    id: "sydney",
    title: "Sydney, Australia",
    description: "Experience the vibrant culture and stunning beaches of Sydney",
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/sydney-opera-house-near-body-of-water-during-daytime-1_fbgqyc.webp",
    details: {
      overview: "Sydney is Australia's largest and most cosmopolitan city, known for its stunning harbor, iconic Opera House, and beautiful beaches. It's a perfect blend of urban sophistication and natural beauty.",
      highlights: [
        "Visit the Sydney Opera House and Harbour Bridge",
        "Relax at Bondi Beach and take the coastal walk",
        "Explore the Royal Botanic Garden",
        "Take a ferry to Manly and enjoy the scenic views",
        "Visit the Taronga Zoo and see native Australian wildlife",
        "Experience the vibrant nightlife in Darling Harbour",
        "Shop at the historic Queen Victoria Building",
        "Take a day trip to the Blue Mountains"
      ],
      itinerary: [
        "Day 1: Arrival and Sydney Opera House tour, explore Circular Quay",
        "Day 2: Bondi Beach and coastal walk, visit Bronte Beach",
        "Day 3: Harbour Bridge climb and Darling Harbour exploration",
        "Day 4: Day trip to Blue Mountains and Three Sisters",
        "Day 5: Manly Beach and return ferry, visit Manly Sea Life Sanctuary",
        "Day 6: Taronga Zoo and Sydney Harbour cruise",
        "Day 7: Shopping at QVB and Pitt Street Mall, farewell dinner"
      ],
      tips: [
        "Get an Opal card for public transport - it's cheaper than single tickets",
        "Visit the beaches early to avoid crowds and get the best spots",
        "Try the local seafood at the Fish Market - it's fresh and delicious",
        "Book Opera House tours in advance to avoid disappointment",
        "Wear comfortable shoes for walking - Sydney is best explored on foot",
        "Use the ferry system - it's a great way to see the city",
        "Check out free walking tours for budget-friendly sightseeing",
        "Visit during Vivid Sydney festival for amazing light shows"
      ],
      bestTimeToVisit: "September to November (Spring) and March to May (Autumn)",
      currency: "Australian Dollar (AUD)",
      language: "English",
      climate: "Temperate with warm summers and mild winters",
      visaInformation: "Electronic Travel Authority (ETA) required for most visitors",
      transportOptions: [
        "Sydney Trains network",
        "Buses and light rail",
        "Ferries",
        "Taxis and rideshare",
        "Airport Link train"
      ],
      accommodationTypes: [
        "Luxury hotels in Circular Quay",
        "Boutique hotels in Surry Hills",
        "Hostels in Kings Cross",
        "Serviced apartments in Darling Harbour",
        "Beachside hotels in Bondi"
      ],
      foodRecommendations: [
        "Fresh seafood at Sydney Fish Market",
        "Modern Australian cuisine",
        "Asian fusion restaurants",
        "Café culture in Surry Hills",
        "Beachside dining in Bondi"
      ],
      safetyTips: [
        "Generally safe city, but beware of pickpockets in crowded areas",
        "Swim between the flags at beaches",
        "Use sunscreen - Australian sun is strong",
        "Be cautious of wildlife in national parks",
        "Follow local bushfire warnings in summer"
      ],
      budget: {
        low: "AUD 100-150 per day (hostels, public transport, self-catering)",
        medium: "AUD 200-300 per day (mid-range hotels, some dining out, activities)",
        high: "AUD 400+ per day (luxury hotels, fine dining, private tours)"
      },
      popularTours: [
        "Sydney Harbour Cruise",
        "Blue Mountains Day Trip",
        "Bondi to Coogee Coastal Walk"
      ],
      nearbyAttractions: [
        "Hunter Valley wine region",
        "Royal National Park",
        "Jervis Bay",
        "Port Stephens",
        "Blue Mountains"
      ],
      culturalTips: [
        "Australians are generally informal and friendly",
        "Tipping is not mandatory but appreciated",
        "Respect indigenous culture and sites",
        "Be mindful of local environmental practices",
        "Learn about Aboriginal history and culture"
      ],
      packingList: [
        "Comfortable walking shoes",
        "Swimsuit and beach towel",
        "Sunscreen and hat",
        "Light jacket for evenings",
        "Universal power adapter",
        "Reusable water bottle",
        "Camera or smartphone",
        "Travel insurance documents"
      ]
    }
  },
  {
    id: "tokyo",
    title: "Tokyo, Japan",
    description: "Discover the perfect blend of tradition and modernity in Tokyo",
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/japan-tokyo_wpvxra.webp",
    details: {
      overview: "Tokyo is a fascinating mix of ultramodern and traditional, from neon-lit skyscrapers to historic temples. The city offers an endless array of shopping, entertainment, culture, and dining options.",
      highlights: [
        "Visit Senso-ji Temple in Asakusa",
        "Experience the famous Shibuya Crossing",
        "Explore Akihabara's electronics district",
        "Visit Meiji Shrine and Yoyogi Park",
        "Try authentic sushi at Tsukiji Market",
        "See the view from Tokyo Skytree",
        "Experience traditional tea ceremony",
        "Visit the Imperial Palace gardens"
      ],
      itinerary: [
        "Day 1: Arrival and Asakusa exploration, Senso-ji Temple",
        "Day 2: Shibuya and Harajuku, Meiji Shrine",
        "Day 3: Akihabara and Ueno Park, Tokyo National Museum",
        "Day 4: Day trip to Mount Fuji and Hakone",
        "Day 5: Tsukiji Market and Ginza shopping",
        "Day 6: Odaiba and Tokyo Skytree",
        "Day 7: Imperial Palace and traditional tea ceremony"
      ],
      tips: [
        "Get a Suica or Pasmo card for transport - it's more convenient",
        "Learn basic Japanese phrases - it's appreciated by locals",
        "Try local convenience store food - it's surprisingly good",
        "Respect local customs and etiquette",
        "Carry cash as some places don't accept cards",
        "Use the subway system - it's efficient and clean",
        "Visit temples early to avoid crowds",
        "Try different types of ramen in different neighborhoods"
      ],
      bestTimeToVisit: "March to May (Cherry Blossom season) and September to November (Autumn)",
      currency: "Japanese Yen (JPY)",
      language: "Japanese",
      climate: "Temperate with four distinct seasons",
      visaInformation: "Visa-free for many countries, check requirements",
      transportOptions: [
        "Tokyo Metro and Toei Subway",
        "JR Yamanote Line",
        "Buses",
        "Taxis (expensive)",
        "Bicycle rentals"
      ],
      accommodationTypes: [
        "Ryokan (traditional inns)",
        "Business hotels",
        "Capsule hotels",
        "Luxury hotels in Ginza",
        "Hostels in Asakusa"
      ],
      foodRecommendations: [
        "Sushi and sashimi",
        "Ramen noodles",
        "Tempura",
        "Yakitori",
        "Okonomiyaki"
      ],
      safetyTips: [
        "Very safe city, but keep valuables secure",
        "Follow earthquake safety procedures",
        "Be careful when crossing streets",
        "Respect local customs and traditions",
        "Be aware of typhoon season (August-October)"
      ],
      budget: {
        low: "JPY 8,000-10,000 per day (hostels, convenience store meals)",
        medium: "JPY 15,000-20,000 per day (business hotels, local restaurants)",
        high: "JPY 30,000+ per day (luxury hotels, fine dining, private tours)"
      },
      popularTours: [
        "Tsukiji Fish Market Tour",
        "Mount Fuji Day Trip",
        "Traditional Tea Ceremony"
      ],
      nearbyAttractions: [
        "Nikko",
        "Kamakura",
        "Yokohama",
        "Hakone",
        "Mount Takao"
      ],
      culturalTips: [
        "Remove shoes when entering homes and some restaurants",
        "Be quiet on public transport",
        "Don't eat while walking",
        "Learn basic Japanese etiquette",
        "Respect temple and shrine rules"
      ],
      packingList: [
        "Comfortable walking shoes",
        "Light jacket for evenings",
        "Universal power adapter",
        "Pocket WiFi or SIM card",
        "Small towel for public restrooms",
        "Cash in Japanese Yen",
        "Phrasebook or translation app",
        "Travel insurance documents"
      ]
    }
  },
  {
    id: "moscow",
    title: "Moscow, Russia",
    description: "Explore the rich history and culture of Russia's capital",
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/moscow.webp",
    details: {
      overview: "Moscow, the capital of Russia, is a vibrant city that perfectly blends its rich history with modern development. From the iconic Red Square to the stunning architecture of the Kremlin, Moscow offers visitors a unique glimpse into Russian culture and heritage.",
      highlights: [
        "Visit the iconic Red Square and Kremlin",
        "Explore the stunning St. Basil's Cathedral",
        "Experience the grandeur of the Bolshoi Theatre",
        "Discover the treasures of the State Tretyakov Gallery",
        "Take a stroll through Gorky Park"
      ],
      itinerary: [
        "Day 1: Red Square and Kremlin",
        "Day 2: Museums and Art Galleries",
        "Day 3: Parks and Local Markets",
        "Day 4: Day Trip to Sergiev Posad",
        "Day 5: Modern Moscow and Nightlife"
      ],
      tips: [
        "Learn basic Russian phrases",
        "Dress appropriately for the weather",
        "Be prepared for security checks",
        "Use the efficient metro system",
        "Try traditional Russian cuisine"
      ],
      bestTimeToVisit: "May to September",
      currency: "Russian Ruble (RUB)",
      language: "Russian",
      climate: "Continental with cold winters and warm summers",
      visaInformation: "Visa required for most nationalities",
      transportOptions: [
        "Metro",
        "Buses",
        "Taxis",
        "Walking",
        "International flights to Sheremetyevo Airport",
        "Train connections from Europe"
      ],
      accommodationTypes: [
        "Luxury hotels",
        "Boutique hotels",
        "Hostels",
        "Apartments",
        "City Center",
        "Arbat",
        "Kitay-Gorod"
      ],
      foodRecommendations: [
        "Borscht",
        "Pelmeni",
        "Beef Stroganoff",
        "Blini",
        "Restaurants in Arbat Street",
        "Kuznetsky Most",
        "Local markets"
      ],
      safetyTips: [
        "Keep valuables secure",
        "Be cautious at night",
        "Follow local customs",
        "Use official taxis"
      ],
      budget: {
        low: "50-100 USD per day",
        medium: "100-200 USD per day",
        high: "200+ USD per day"
      },
      popularTours: [
        "Kremlin and Red Square Tour",
        "Moscow Metro Tour",
        "Russian Food Tour",
        "Day Trip to Sergiev Posad"
      ],
      nearbyAttractions: [
        "Sergiev Posad",
        "Golden Ring cities",
        "St. Petersburg",
        "Kazan"
      ],
      culturalTips: [
        "Remove shoes when entering homes",
        "Bring small gifts when visiting",
        "Dress modestly in religious sites",
        "Learn basic Russian etiquette"
      ],
      packingList: [
        "Warm clothing (winter)",
        "Comfortable walking shoes",
        "Power adapter",
        "Russian phrasebook",
        "Camera"
      ]
    }
  },
  {
    id: "phuket",
    title: "Phuket, Thailand",
    description: "Experience paradise in Thailand's largest island",
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/phuket_utqmlt.webp",
    details: {
      overview: "Phuket is Thailand's largest island, known for its stunning beaches, vibrant nightlife, and rich cultural heritage. It offers a perfect mix of relaxation and adventure.",
      highlights: [
        "Relax on Patong Beach",
        "Visit the Big Buddha",
        "Explore Phang Nga Bay",
        "Experience Old Phuket Town",
        "Try water sports at Kata Beach",
        "Visit Wat Chalong temple",
        "Take a boat trip to Phi Phi Islands",
        "Experience the nightlife in Bangla Road"
      ],
      itinerary: [
        "Day 1: Arrival and Patong Beach",
        "Day 2: Big Buddha and Wat Chalong",
        "Day 3: Phang Nga Bay tour",
        "Day 4: Phi Phi Islands day trip",
        "Day 5: Old Phuket Town exploration",
        "Day 6: Water sports at Kata Beach",
        "Day 7: Relaxation and shopping"
      ],
      tips: [
        "Bargain at markets but be polite",
        "Use sunscreen and stay hydrated",
        "Respect local customs and temples",
        "Be careful with street food",
        "Use official taxis or Grab",
        "Learn basic Thai phrases",
        "Carry small bills for tips",
        "Be aware of monsoon season"
      ],
      bestTimeToVisit: "November to April (Dry season)",
      currency: "Thai Baht (THB)",
      language: "Thai",
      climate: "Tropical with wet and dry seasons",
      visaInformation: "Visa-free for many countries, check requirements",
      transportOptions: [
        "Tuk-tuks",
        "Taxis and Grab",
        "Motorbike taxis",
        "Local buses",
        "Private transfers"
      ],
      accommodationTypes: [
        "Beachfront resorts",
        "Boutique hotels",
        "Villas with private pools",
        "Budget guesthouses",
        "Luxury hotels"
      ],
      foodRecommendations: [
        "Thai street food",
        "Fresh seafood",
        "Pad Thai",
        "Tom Yum soup",
        "Mango sticky rice"
      ],
      safetyTips: [
        "Be careful with water sports",
        "Use sunscreen and stay hydrated",
        "Be cautious at night",
        "Keep valuables secure",
        "Follow local laws and customs"
      ],
      budget: {
        low: "THB 1,000-1,500 per day (guesthouses, street food)",
        medium: "THB 2,000-3,000 per day (mid-range hotels, local restaurants)",
        high: "THB 5,000+ per day (luxury resorts, fine dining, private tours)"
      },
      popularTours: [
        "Phi Phi Islands Tour",
        "Phang Nga Bay Tour",
        "Elephant Sanctuary Visit"
      ],
      nearbyAttractions: [
        "Krabi",
        "Phang Nga",
        "Khao Lak",
        "Similan Islands",
        "James Bond Island"
      ],
      culturalTips: [
        "Dress modestly when visiting temples",
        "Remove shoes before entering homes",
        "Don't touch people's heads",
        "Learn basic Thai phrases",
        "Respect the monarchy"
      ],
      packingList: [
        "Swimsuit and beachwear",
        "Light clothing",
        "Sunscreen and hat",
        "Mosquito repellent",
        "Universal power adapter",
        "Waterproof phone case",
        "Beach towel",
        "Travel insurance documents"
      ]
    }
  },
  {
    id: "singapore",
    title: "Singapore",
    description: "Discover the perfect blend of cultures in the Lion City",
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/singapore_qihqqs_ehracs.webp",
    details: {
      overview: "Singapore is a modern city-state known for its multicultural heritage, efficient infrastructure, and world-class attractions. It's a perfect destination for both business and leisure.",
      highlights: [
        "Visit Marina Bay Sands and Gardens by the Bay",
        "Explore Chinatown and Little India",
        "Experience Sentosa Island",
        "Visit the Singapore Zoo",
        "Shop on Orchard Road",
        "Explore Kampong Glam",
        "Visit the National Gallery",
        "Experience the Night Safari"
      ],
      itinerary: [
        "Day 1: Arrival and Marina Bay exploration",
        "Day 2: Chinatown and Little India",
        "Day 3: Sentosa Island",
        "Day 4: Singapore Zoo and River Safari",
        "Day 5: Shopping on Orchard Road",
        "Day 6: Kampong Glam and Arab Street",
        "Day 7: National Gallery and farewell dinner"
      ],
      tips: [
        "Use the MRT - it's efficient and clean",
        "Try local hawker food",
        "Respect local laws and customs",
        "Carry an umbrella - rain is common",
        "Use the Singapore Tourist Pass",
        "Visit attractions early to avoid crowds",
        "Try different cultural cuisines",
        "Use the Singapore River Cruise"
      ],
      bestTimeToVisit: "February to April (Dry season)",
      currency: "Singapore Dollar (SGD)",
      language: "English, Mandarin, Malay, Tamil",
      climate: "Tropical with high humidity",
      visaInformation: "Visa-free for many countries, check requirements",
      transportOptions: [
        "MRT (Mass Rapid Transit)",
        "Buses",
        "Taxis and Grab",
        "River taxis",
        "Bicycle sharing"
      ],
      accommodationTypes: [
        "Luxury hotels in Marina Bay",
        "Boutique hotels in Chinatown",
        "Hostels in Little India",
        "Serviced apartments",
        "Budget hotels"
      ],
      foodRecommendations: [
        "Hawker center food",
        "Chilli crab",
        "Hainanese chicken rice",
        "Laksa",
        "Satay"
      ],
      safetyTips: [
        "Very safe city, but keep valuables secure",
        "Follow local laws strictly",
        "Be careful when crossing roads",
        "Use official taxis only",
        "Be aware of monsoon season"
      ],
      budget: {
        low: "SGD 50-70 per day (hostels, hawker centers)",
        medium: "SGD 100-150 per day (mid-range hotels, local restaurants)",
        high: "SGD 250+ per day (luxury hotels, fine dining, private tours)"
      },
      popularTours: [
        "Gardens by the Bay Tour",
        "Singapore Food Tour",
        "Night Safari Experience"
      ],
      nearbyAttractions: [
        "Sentosa Island",
        "Pulau Ubin",
        "Johor Bahru (Malaysia)",
        "Bintan Island (Indonesia)",
        "Kusu Island"
      ],
      culturalTips: [
        "Respect different religious sites",
        "Follow local laws strictly",
        "Be mindful of local customs",
        "Learn about multicultural heritage",
        "Dress appropriately for religious sites"
      ],
      packingList: [
        "Light clothing",
        "Comfortable walking shoes",
        "Umbrella or raincoat",
        "Universal power adapter",
        "Sunscreen and hat",
        "Water bottle",
        "Camera",
        "Travel insurance documents"
      ]
    }
  },
  {
    id: "hoi-an",
    title: "Hoi An, Vietnam",
    description: "Step back in time in Vietnam's most charming ancient town",
    image: "https://raw.githubusercontent.com/lamlinhh/Travel_Web/main/assets/Images/peter-borter-ai_mpqLXBTc-unsplash_u2s6qy.webp",
    details: {
      overview: "Hoi An is a beautifully preserved ancient town in Vietnam, known for its well-preserved architecture, lantern-lit streets, and rich cultural heritage. It's a UNESCO World Heritage site.",
      highlights: [
        "Explore the Ancient Town",
        "Visit Japanese Covered Bridge",
        "Take a boat ride on the Thu Bon River",
        "Visit the local markets",
        "Try traditional Vietnamese cooking class",
        "Visit the nearby beaches",
        "Experience the lantern festival",
        "Visit the My Son Sanctuary"
      ],
      itinerary: [
        "Day 1: Arrival and Ancient Town exploration",
        "Day 2: Japanese Bridge and local markets",
        "Day 3: Cooking class and food tour",
        "Day 4: My Son Sanctuary day trip",
        "Day 5: Beach day at An Bang",
        "Day 6: Thu Bon River boat ride",
        "Day 7: Shopping and farewell dinner"
      ],
      tips: [
        "Bargain at markets but be polite",
        "Try local street food",
        "Rent a bicycle to explore",
        "Visit during the lantern festival",
        "Get clothes tailored",
        "Learn basic Vietnamese phrases",
        "Carry small bills for tips",
        "Be prepared for hot weather"
      ],
      bestTimeToVisit: "February to April (Dry season)",
      currency: "Vietnamese Dong (VND)",
      language: "Vietnamese",
      climate: "Tropical with wet and dry seasons",
      visaInformation: "Visa required for most visitors",
      transportOptions: [
        "Bicycles",
        "Motorbike taxis",
        "Taxis",
        "Boats",
        "Private transfers"
      ],
      accommodationTypes: [
        "Boutique hotels in Ancient Town",
        "Beach resorts",
        "Homestays",
        "Guesthouses",
        "Luxury hotels"
      ],
      foodRecommendations: [
        "Cao Lau noodles",
        "White Rose dumplings",
        "Banh Mi",
        "Fresh spring rolls",
        "Vietnamese coffee"
      ],
      safetyTips: [
        "Be careful with street food",
        "Use sunscreen and stay hydrated",
        "Be cautious at night",
        "Keep valuables secure",
        "Follow local laws and customs"
      ],
      budget: {
        low: "VND 500,000-700,000 per day (guesthouses, street food)",
        medium: "VND 1,000,000-1,500,000 per day (mid-range hotels, local restaurants)",
        high: "VND 2,500,000+ per day (luxury hotels, fine dining, private tours)"
      },
      popularTours: [
        "Cooking Class",
        "My Son Sanctuary Tour",
        "Lantern Making Workshop"
      ],
      nearbyAttractions: [
        "My Son Sanctuary",
        "Marble Mountains",
        "Cham Islands",
        "Ba Na Hills",
        "Da Nang"
      ],
      culturalTips: [
        "Respect local customs and traditions",
        "Dress appropriately for temples",
        "Learn basic Vietnamese phrases",
        "Be mindful of local etiquette",
        "Support local artisans"
      ],
      packingList: [
        "Light clothing",
        "Comfortable walking shoes",
        "Swimsuit",
        "Sunscreen and hat",
        "Mosquito repellent",
        "Universal power adapter",
        "Camera",
        "Travel insurance documents"
      ]
    }
  }
];