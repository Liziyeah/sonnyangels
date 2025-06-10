export interface PhysicalStore {
  name: string;
  address: string;
  city: string;
  country: string;
  website?: string;
}

export interface OnlineStore {
  name: string;
  url: string;
  logo: string;
  description: string;
}

export const stores: PhysicalStore[] = [
  {
    name: "Kawaii Corner",
    address: "123 Sakura Street",
    city: "Tokyo",
    country: "Japan",
    website: "https://example.com/kawaiicorner"
  },
  {
    name: "Cute Collectibles",
    address: "456 Harajuku Avenue",
    city: "Tokyo",
    country: "Japan"
  },
  {
    name: "Angel's Haven",
    address: "789 Broadway",
    city: "New York",
    country: "USA",
    website: "https://example.com/angelshaven"
  },
  {
    name: "Doll & Toy Emporium",
    address: "321 Oxford Street",
    city: "London",
    country: "UK",
    website: "https://example.com/dolltoy"
  },
  {
    name: "Sonny's Paradise",
    address: "654 La Rambla",
    city: "Barcelona",
    country: "Spain"
  },
  {
    name: "Figurine World",
    address: "987 Rue de Rivoli",
    city: "Paris",
    country: "France",
    website: "https://example.com/figurineworld"
  },
  {
    name: "Collector's Dream",
    address: "147 Queen Street",
    city: "Sydney",
    country: "Australia"
  }
];

export const onlineStores: OnlineStore[] = [
  {
    name: "Official Sonny Angel Store",
    url: "https://example.com/sonnyangel",
    logo: "https://images.pexels.com/photos/5876693/pexels-photo-5876693.jpeg?auto=compress&cs=tinysrgb&w=100",
    description: "The official online store with all collections including exclusives"
  },
  {
    name: "Kawaii Emporium",
    url: "https://example.com/kawaii",
    logo: "https://images.pexels.com/photos/5876701/pexels-photo-5876701.jpeg?auto=compress&cs=tinysrgb&w=100",
    description: "Curated selection of kawaii collectibles including Sonny Angels"
  },
  {
    name: "Toy Collector",
    url: "https://example.com/toycollector",
    logo: "https://images.pexels.com/photos/5876686/pexels-photo-5876686.jpeg?auto=compress&cs=tinysrgb&w=100",
    description: "Premium toy destination for collectors and enthusiasts"
  },
  {
    name: "Angel Boutique",
    url: "https://example.com/angelboutique",
    logo: "https://images.pexels.com/photos/5876724/pexels-photo-5876724.jpeg?auto=compress&cs=tinysrgb&w=100",
    description: "Specialized in angel figurines with a large Sonny Angel selection"
  }
];