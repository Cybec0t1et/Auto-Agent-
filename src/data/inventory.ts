export interface Car {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | 'LPG';
  transmission: 'Automatic' | 'Manual';
  engine: string;
  bodyType: string;
  driveType: 'AWD' | 'FWD' | 'RWD';
  color: string;
  location: string;
  customsStatus: 'Cleared' | 'Not Cleared' | 'In Transit';
  availabilityStatus: 'In Stock' | 'Import' | 'Sold' | 'Coming Soon';
  images: string[];
  description: string;
  features: string[];
  conditionNotes: string;
  createdAt: string;
  featured?: boolean;
}

export const cars: Car[] = [
  {
    id: '1',
    title: 'BMW X5 M-Sport 2022',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    price: 65000,
    currency: 'USD',
    mileage: 15000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    engine: '3.0L',
    bodyType: 'SUV',
    driveType: 'AWD',
    color: 'Black',
    location: 'Tbilisi, Georgia',
    customsStatus: 'Cleared',
    availabilityStatus: 'In Stock',
    images: ['https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800'],
    description: 'Perfect condition, M-Sport package, fully loaded with premium features.',
    features: ['Leather Seats', 'Sunroof', 'Adaptive Cruise Control', 'Parking Sensors'],
    conditionNotes: 'No accidents, one owner.',
    createdAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: '2',
    title: 'Toyota Camry Hybrid 2023',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 32000,
    currency: 'USD',
    mileage: 5000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    engine: '2.5L',
    bodyType: 'Sedan',
    driveType: 'FWD',
    color: 'Silver',
    location: 'Batumi, Georgia',
    customsStatus: 'Not Cleared',
    availabilityStatus: 'Import',
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800'],
    description: 'Fuel efficient and reliable. Latest model with improved tech.',
    features: ['Blind Spot Monitor', 'Apple CarPlay', 'Heated Seats'],
    conditionNotes: 'Direct import from USA.',
    createdAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: '3',
    title: 'Mercedes-Benz G63 AMG 2021',
    make: 'Mercedes-Benz',
    model: 'G-Class',
    year: 2021,
    price: 185000,
    currency: 'USD',
    mileage: 22000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engine: '4.0L V8',
    bodyType: 'SUV',
    driveType: 'AWD',
    color: 'Matte Grey',
    location: 'Tbilisi, Georgia',
    customsStatus: 'Cleared',
    availabilityStatus: 'In Stock',
    images: ['https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800'],
    description: 'The ultimate luxury SUV. Extreme performance and presence.',
    features: ['Night Package', 'Burmester Sound', 'Carbon Fiber Interior'],
    conditionNotes: 'Pristine condition.',
    createdAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: '4',
    title: 'Tesla Model 3 Performance 2022',
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    price: 45000,
    currency: 'USD',
    mileage: 18000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    engine: 'Dual Motor',
    bodyType: 'Sedan',
    driveType: 'AWD',
    color: 'White',
    location: 'Tbilisi, Georgia',
    customsStatus: 'Cleared',
    availabilityStatus: 'In Stock',
    images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800'],
    description: 'Blazing fast acceleration and long range. Full self-driving capable.',
    features: ['Autopilot', 'Premium Interior', 'Zero Emissions'],
    conditionNotes: 'Software updated to latest version.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Audi Q8 S-Line 2020',
    make: 'Audi',
    model: 'Q8',
    year: 2020,
    price: 58000,
    currency: 'USD',
    mileage: 45000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engine: '3.0L V6',
    bodyType: 'SUV',
    driveType: 'AWD',
    color: 'Mythos Black',
    location: 'Kutaisi, Georgia',
    customsStatus: 'Cleared',
    availabilityStatus: 'In Stock',
    images: ['https://images.unsplash.com/photo-1541443131876-0610303c20c0?auto=format&fit=crop&q=80&w=800'],
    description: 'Stylish and powerful SUV coupe. Balanced luxury and performance.',
    features: ['Virtual Cockpit', 'Matrix LED', 'Ambient Lighting'],
    conditionNotes: 'Full service history.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'Ford Mustang GT 2019',
    make: 'Ford',
    model: 'Mustang',
    year: 2019,
    price: 28000,
    currency: 'USD',
    mileage: 35000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    engine: '5.0L V8',
    bodyType: 'Coupe',
    driveType: 'RWD',
    color: 'Race Red',
    location: 'Tbilisi, Georgia',
    customsStatus: 'Cleared',
    availabilityStatus: 'In Stock',
    images: ['https://images.unsplash.com/photo-1584345604481-0d94413666d3?auto=format&fit=crop&q=80&w=800'],
    description: 'American muscle icon. Pure driving pleasure with manual gearbox.',
    features: ['Performance Exhaust', 'Brembo Brakes', 'Recaro Seats'],
    conditionNotes: 'Very well maintained.',
    createdAt: new Date().toISOString(),
  }
];
