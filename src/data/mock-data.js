export const LISTINGS = [
  {
    id: "1",
    title: "Spacious Downtown Warehouse",
    type: "Warehouse",
    location: "Los Angeles, CA",
    price: 1200,
    rating: 4.8,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    description: "Large industrial warehouse perfect for inventory storage or creative studio space.",
  },
  {
    id: "2",
    title: "Quiet Suburban Garage",
    type: "Garage",
    location: "Austin, TX",
    price: 250,
    rating: 4.9,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1635108198854-26645ffe6714?w=500&auto=format&fit=crop",
    description: "Clean, dry garage space suitable for car storage or small furniture.",
  },
  {
    id: "3",
    title: "Modern Minimalist Studio",
    type: "Studio",
    location: "Brooklyn, NY",
    price: 800,
    rating: 4.7,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop",
    description: "Sun-drenched studio space for photographers and creators.",
  },
  {
    id: "4",
    title: "Secure Basement Storage",
    type: "Basement",
    location: "Chicago, IL",
    price: 150,
    rating: 4.5,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1646592491741-e79ae5953486?w=500&auto=format&fit=crop",
    description: "Climate-controlled basement room for household items.",
  },
  {
    id: "5",
    title: "Large Rural Barn",
    type: "Barn",
    location: "Bozeman, MT",
    price: 400,
    rating: 4.6,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=500&auto=format&fit=crop",
    description: "Rustic barn with plenty of space for farm equipment or large scale storage.",
  },
  {
      id: "6",
      title: "Modern Office Space",
      type: "Office",
      location: "Ohio, CH",
      price: 12000,
      rating: 4.7,
      reviews: 8,
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&auto=format&fit=crop",
      description: "Office Space with big windows and large floor plan",
  },
  {
      id: "7",
      title: "Modernized Flat",
      type: "Flat",
      location: "Portland, OR",
      price: 3500,
      rating: 4.9,
      reviews: 23,
      image: "https://images.unsplash.com/photo-1732298286192-b3ee55630673?w=500&auto=format&fit=crop",
      description: "A modern flat to-rent",
  }
];

export const SPACE_CATEGORIES = [
  {
    title: "Business & Industrial",
    types: [
      {
        id: "warehouse",
        name: "Warehouse",
        description: "Massive open spaces for inventory, logistics, or large-scale equipment.",
        tags: ["High Ceiling", "Truck Access", "Industrial"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
        icon: "Warehouse"
      },
      {
        id: "office",
        name: "Office",
        description: "Professional environments for startups, freelancers, or remote teams.",
        tags: ["High Speed WiFi", "Quiet", "Professional"],
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        icon: "Briefcase"
      },
      {
        id: "studio",
        name: "Studio",
        description: "Creative hubs for photography, music production, or art projects.",
        tags: ["Natural Light", "Acoustics", "Creative"],
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
        icon: "Camera"
      }
    ]
  },
  {
    title: "Personal & Household",
    types: [
      {
        id: "room",
        name: "Room",
        description: "Extra indoor space for seasonal items, books, or household overflow.",
        tags: ["Climate Control", "Secure", "Indoor"],
        image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format&fit=crop",
        icon: "Home"
      },
      {
        id: "garage",
        name: "Garage",
        description: "Perfect for vehicle storage, workshop space, or large furniture items.",
        tags: ["Drive-in", "Ground Floor", "DIY Friendly"],
        image: "https://images.unsplash.com/photo-1635108198854-26645ffe6714?w=500&auto=format&fit=crop",
        icon: "Car"
      },
      {
        id: "flat",
        name: "Flat",
        description: "Multi-purpose residential spaces for temporary living or storage.",
        tags: ["Living Ready", "Private", "Comfortable"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
        icon: "Building"
      }
    ]
  },
  {
    title: "Specialty & Outdoor",
    types: [
      {
        id: "barn",
        name: "Barn",
        description: "Rustic rural storage for farm equipment, livestock, or large machinery.",
        tags: ["Rural", "Huge Volume", "Outdoor"],
        image: "https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?w=500&auto=format&fit=crop",
        icon: "Wheat"
      },
      {
        id: "shelter",
        name: "Shelter",
        description: "Basic covered protection for vehicles, wood, or outdoor supplies.",
        tags: ["Affordable", "Basic", "Outdoor"],
        image: "https://images.unsplash.com/photo-1507388827205-3dbd108bba59?w=500&auto=format&fit=crop",
        icon: "Shield"
      }
    ]
  }
];

export const SPACE_TYPES = ["Room", "Office", "Studio", "Warehouse", "Shelter", "Barn", "Garage", "Flat"];
