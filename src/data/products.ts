export interface Product {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  category: string;
  description: string;
  unit: string;
  badge?: string;
  portionOptions: string[];
}

export const ALL_PRODUCTS: Product[] = [
  {
    "id": "prod-1",
    "name": "Rosie’s Corned Silverside (p/kg)",
    "price": 16.99,
    "priceFormatted": "$16.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-2",
    "name": "Premium Lamb Racks (per kg)",
    "price": 35.99,
    "priceFormatted": "$35.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-3",
    "name": "Whole Briskets (per kg)",
    "price": 16.99,
    "priceFormatted": "$16.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-4",
    "name": "Gooralie Boston Butts (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-5",
    "name": "Rump Steaks (per kg)",
    "price": 26.99,
    "priceFormatted": "$26.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-6",
    "name": "Gerallo Beef Roasts (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-7",
    "name": "Pork Schnitzels (per kg)",
    "price": 16.99,
    "priceFormatted": "$16.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-8",
    "name": "Beef ribs (per kg)",
    "price": 24.99,
    "priceFormatted": "$24.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-9",
    "name": "Pet mince 8-10kg bag",
    "price": 20,
    "priceFormatted": "$20.00",
    "category": "Pet Food",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-10",
    "name": "Garlic butter Kiev’s 2 for $18",
    "price": 18,
    "priceFormatted": "$18.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "badge": "Free-Range",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-11",
    "name": "Honey Soy Chicken Nibbles (per kg)",
    "price": 6.99,
    "priceFormatted": "$6.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-12",
    "name": "Honey soy Chicken Wings (p/kg)",
    "price": 4.99,
    "priceFormatted": "$4.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-13",
    "name": "Chicken Ham and Cheese Pinwheels (per kg)",
    "price": 24.99,
    "priceFormatted": "$24.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-14",
    "name": "Pizza Pinwheels (per kg)",
    "price": 24.99,
    "priceFormatted": "$24.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-15",
    "name": "Barbeque Garlic BBQ Steak (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-16",
    "name": "Barbeque Pepper Steak (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "marinated BBQ flavor",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-17",
    "name": "Chinese Char sui Pork Steaks (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-18",
    "name": "Honey Soy, Beef Vegetable Kebab",
    "price": 5.5,
    "priceFormatted": "$5.50",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-19",
    "name": "Rib Eye (per kg)",
    "price": 39.99,
    "priceFormatted": "$39.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-20",
    "name": "Lamb BBQ Chops (per kg)",
    "price": 24.99,
    "priceFormatted": "$24.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-21",
    "name": "Lamb Backstrap (per kg)",
    "price": 39.99,
    "priceFormatted": "$39.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-22",
    "name": "Frozen Fish Fillets (box 40)",
    "price": 65,
    "priceFormatted": "$65.00",
    "category": "Freezer",
    "description": "Battered fish protions &#8211; 3.4kg Net (40 pieces x 85g Avg.)",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-23",
    "name": "Premium Grass Fed Porterhouse (per kg)",
    "price": 49.99,
    "priceFormatted": "$49.99",
    "category": "Beef, Lamb & Pork",
    "description": "100 Day Grain-fed",
    "unit": "kg",
    "badge": "Grass-Fed",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-24",
    "name": "Premium Scotch Fillet Grass Fed(per kg)",
    "price": 59.99,
    "priceFormatted": "$59.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "badge": "Grass-Fed",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-25",
    "name": "Diced Chicken (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-26",
    "name": "Chicken Mince (per kg)",
    "price": 18.99,
    "priceFormatted": "$18.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-27",
    "name": "Pork Mince (per kg)",
    "price": 17.99,
    "priceFormatted": "$17.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-28",
    "name": "Chicken Nuggets (1kg)",
    "price": 12,
    "priceFormatted": "$12.00",
    "category": "Freezer",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-29",
    "name": "Spring Rolls",
    "price": 20,
    "priceFormatted": "$20.00",
    "category": "Freezer",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-30",
    "name": "Chiko Rolls (pack)",
    "price": 20,
    "priceFormatted": "$20.00",
    "category": "Freezer",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-31",
    "name": "Gluten Free Dim Sims (30 pack)",
    "price": 45,
    "priceFormatted": "$45.00",
    "category": "Freezer",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-32",
    "name": "Chein Wah Dim Sims (Pack)",
    "price": 30,
    "priceFormatted": "$30.00",
    "category": "Freezer",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-33",
    "name": "Vegetarian Dimsims (Pack)",
    "price": 12,
    "priceFormatted": "$12.00",
    "category": "Freezer",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-34",
    "name": "Traditional Pork Sausages (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-35",
    "name": "T-Bone Steaks (per kg)",
    "price": 29.99,
    "priceFormatted": "$29.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-36",
    "name": "Whole Porterhouse Slabs (p/kg 4-5kg)",
    "price": 14.99,
    "priceFormatted": "$14.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "badge": "Grass-Fed",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-37",
    "name": "BBQ Sizzle Steaks (p/kg)",
    "price": 29.99,
    "priceFormatted": "$29.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-38",
    "name": "Chicken Thai Green Curry Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "badge": "House Baked",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-39",
    "name": "Butter Chicken Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-40",
    "name": "Chicken Steaks (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-41",
    "name": "Bacon Streaky Smith and Co 1kg pack",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-42",
    "name": "Beef Schnitzels Crumbed (per kg)",
    "price": 29.99,
    "priceFormatted": "$29.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-43",
    "name": "Family Chicken Lasagne (each)",
    "price": 30,
    "priceFormatted": "$30.00",
    "category": "Heat & Eat Meals",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-44",
    "name": "Pork Belly (per kg)",
    "price": 16.99,
    "priceFormatted": "$16.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-45",
    "name": "Lime & Sweet Chilli Pork Spare Ribs (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-46",
    "name": "Pork Spare Ribs (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-47",
    "name": "Junior Dogs (Kid’S Favourite)  (per kg)",
    "price": 17.99,
    "priceFormatted": "$17.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-48",
    "name": "Chicken Stir Fry (per kg)",
    "price": 24.99,
    "priceFormatted": "$24.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-49",
    "name": "Cheesy Hot Dogs (per kg)",
    "price": 39.99,
    "priceFormatted": "$39.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-50",
    "name": "Beef Stir Fry (per kg)",
    "price": 26.99,
    "priceFormatted": "$26.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-51",
    "name": "Award Winning Hot Dogs (per kg)",
    "price": 2.5,
    "priceFormatted": "$2.50",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-52",
    "name": "Thick Beef Sausages  (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-53",
    "name": "Pork & Pepper Sausages  (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-54",
    "name": "Lamb Mint Jelly Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-55",
    "name": "Korma Curry Chicken Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-56",
    "name": "Footy Beef Mince Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-57",
    "name": "Chicken Leek & Bacon Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-58",
    "name": "10 Kg Chicken Carcasses",
    "price": 20,
    "priceFormatted": "$20.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-59",
    "name": "Tandoori Pork Chops (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-60",
    "name": "Traditional Parmies (each)",
    "price": 9,
    "priceFormatted": "$9.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-61",
    "name": "Jumbo Bone In Garlic Butter Chicken Kiev’s (each)",
    "price": 9.5,
    "priceFormatted": "$9.50",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "badge": "Free-Range",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-62",
    "name": "Creamy Cheese Garlic Butter Chicken Kiev’s (each)",
    "price": 7,
    "priceFormatted": "$7.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "badge": "Free-Range",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-63",
    "name": "Southern Chicken Schnitzels (each)",
    "price": 4.5,
    "priceFormatted": "$4.50",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "badge": "2025 AMIC Gold",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-64",
    "name": "Chicken Breast Schnitzels (each)",
    "price": 4.5,
    "priceFormatted": "$4.50",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-65",
    "name": "Chicken Thigh Schnitzels  (each)",
    "price": 3,
    "priceFormatted": "$3.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-66",
    "name": "Tandoori Chicken Kebabs (each)",
    "price": 2.5,
    "priceFormatted": "$2.50",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-67",
    "name": "Satay Chicken Kebabs (each)",
    "price": 2.5,
    "priceFormatted": "$2.50",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-68",
    "name": "Honey Soy Chicken Kebabs (each)",
    "price": 2.5,
    "priceFormatted": "$2.50",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-69",
    "name": "Chicken Breast - Skin off (per kg)",
    "price": 14.99,
    "priceFormatted": "$14.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-70",
    "name": "Rolled Lamb legs (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-71",
    "name": "Roast Beef (per kg)",
    "price": 16.99,
    "priceFormatted": "$16.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-72",
    "name": "Premium T-bone Steaks (per kg)",
    "price": 34.99,
    "priceFormatted": "$34.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-73",
    "name": "Premium Scotch Fillet Steaks (per kg)",
    "price": 59.99,
    "priceFormatted": "$59.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "badge": "Grass-Fed",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-74",
    "name": "Premium Rump Steak (per kg)",
    "price": 36.99,
    "priceFormatted": "$36.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-75",
    "name": "Premium Porterhouse Steaks (per kg)",
    "price": 49.99,
    "priceFormatted": "$49.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "badge": "Grass-Fed",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-76",
    "name": "Premium Beef Sausage (gf) (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-77",
    "name": "Premium Beef Mince (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-78",
    "name": "Pork Steaks (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-79",
    "name": "Pork Mid Loin Chops (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-80",
    "name": "Pork & Fennel Sausages (gf) (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-81",
    "name": "Millsy's Mega Meat Pack",
    "price": 155,
    "priceFormatted": "$155.00",
    "category": "Value Packs",
    "description": "⚬ 4 MARINATED PORTERHOUSE STEAKS ⚬ 6 CHICKEN RISSOLES ⚬ 6 MARINATED CHICKEN KEBABS ⚬ 6 TASTY BEEF RISSOLES ⚬ 4 MARINATED PORK SPARE RIBS ⚬ 4 BBQ PORK CHOPS ⚬ 6 LAMB &amp; HONEY SAUSAGES ⚬ 6 TASTY BEEF SAUSAGES ⚬ 1KG RINDLESS BACON ⚬ 1 DOZEN FREE RANGE EGGS ⚬ 2 CHICKEN KIEV&#8217;S",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-82",
    "name": "Marinated BBQ Porterhouse (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "badge": "Grass-Fed",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-83",
    "name": "MAGGI 2kg Gravy Mix (each)",
    "price": 30,
    "priceFormatted": "$30.00",
    "category": "Pantry Items",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-84",
    "name": "Lamb Shanks (per kg)",
    "price": 16.99,
    "priceFormatted": "$16.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-85",
    "name": "Lamb Mid Loin Chops (per kg)",
    "price": 29.99,
    "priceFormatted": "$29.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-86",
    "name": "Lamb Honey Rosemary Sausages (gf) (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-87",
    "name": "Lamb Forequarter Chops (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-88",
    "name": "Lamb Family Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-89",
    "name": "Lamb Crumbed Cutlets (each)",
    "price": 5.5,
    "priceFormatted": "$5.50",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-90",
    "name": "Honey Soy Chicken Wings (gf) (per kg)",
    "price": 4.99,
    "priceFormatted": "$4.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-91",
    "name": "Heat &#038; Eat Traditional Parmies (each)",
    "price": 9,
    "priceFormatted": "$9.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-92",
    "name": "Fresh Free Range Eggs (1 doz)",
    "price": 8,
    "priceFormatted": "$8.00",
    "category": "Pantry Items",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-93",
    "name": "Essentials Meat pack",
    "price": 70,
    "priceFormatted": "$70.00",
    "category": "Value Packs",
    "description": "⚬ 6 LAMB SAUSAGES ⚬ 6 AWARD WINNING BEEF SAUSAGES ⚬ 500g DICED BEEF ⚬ 500g PREMIUM BEEF MINCE ⚬ 1KG CHICKEN BREAST ⚬ 6 TASTY BEEF RISSOLES",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-94",
    "name": "Diced Beef (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-95",
    "name": "Chicken Schnitzels (gf) (4 pack)",
    "price": 19,
    "priceFormatted": "$19.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-96",
    "name": "Chicken Sausages (gf) (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-97",
    "name": "Chicken pet mince 10kg bag",
    "price": 20,
    "priceFormatted": "$20.00",
    "category": "Pet Food",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-98",
    "name": "Chicken Thigh Schnitzels (4 pack)",
    "price": 12,
    "priceFormatted": "$12.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-99",
    "name": "Jumbo Chicken Kiev (2 pack)",
    "price": 18,
    "priceFormatted": "$18.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Free-Range",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-100",
    "name": "Chicken Family Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-101",
    "name": "Chicken Breast Schnitzel (4 pack)",
    "price": 18,
    "priceFormatted": "$18.00",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-102",
    "name": "Chicken Breast - Skin on (per kg)",
    "price": 14.99,
    "priceFormatted": "$14.99",
    "category": "Chicken",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-103",
    "name": "Rosies Mega BBQ Pack",
    "price": 99,
    "priceFormatted": "$99.00",
    "category": "Value Packs",
    "description": "⚬ 12 MARINATED CHICKEN KEBABS ⚬ 2KG MARINATED CHICKEN WINGS ⚬ 9 LAMB, HONEY &amp; ROSEMARY SAUSAGES ⚬ 9 TASTY BEEF SAUSAGES ⚬ 6 CHICKEN RISSOLES ⚬ 4 MARINATED STEAKS ⚬ 6 BEEF RISSOLES",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-104",
    "name": "Beef Rissoles (gf) (6 pack)",
    "price": 15,
    "priceFormatted": "$15.00",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  },
  {
    "id": "prod-105",
    "name": "Beef Ribs (per kg)",
    "price": 24.99,
    "priceFormatted": "$24.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-106",
    "name": "Beef Fang Bangers (gf) (per kg)",
    "price": 21.99,
    "priceFormatted": "$21.99",
    "category": "Award Wining Sausages",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-107",
    "name": "Beef Family Pie (each)",
    "price": 18.5,
    "priceFormatted": "$18.50",
    "category": "Family Pies",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "ea",
    "portionOptions": [
      "1 ea",
      "2 ea",
      "4 ea",
      "6 ea"
    ]
  },
  {
    "id": "prod-108",
    "name": "BBQ Pork Spare Ribs (gf) (per kg)",
    "price": 19.99,
    "priceFormatted": "$19.99",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "kg",
    "portionOptions": [
      "1kg",
      "500g",
      "1.5kg",
      "2kg"
    ]
  },
  {
    "id": "prod-109",
    "name": "Award Winning Burgers (6 pack)",
    "price": 15,
    "priceFormatted": "$15.00",
    "category": "Beef, Lamb & Pork",
    "description": "Premium craft-cut meat sourced directly from regional Victorian producers, trimmed fresh daily in Wangaratta.",
    "unit": "pack",
    "badge": "Value Bundle",
    "portionOptions": [
      "1 Pack",
      "2 Packs"
    ]
  }
];

export const CATEGORIES = [
  "All Items",
  "Value Packs",
  "Award Wining Sausages",
  "Beef, Lamb & Pork",
  "Chicken",
  "Family Pies",
  "Heat & Eat Meals",
  "Freezer",
  "Pantry Items",
  "Pet Food"
] as const;
