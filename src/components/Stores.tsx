import React, { useRef, useEffect } from 'react';
import { MapPin, Globe, ExternalLink, Star, ShoppingBag, Heart } from 'lucide-react';
import left from '../assets/stores/official/2.webp'
import right from '../assets/stores/official/1.webp'
const onlineStores = [
  {
    name: 'Sonny Angel Store',
    country: 'JAPAN',
    url: 'https://sonnyangel.com/jp',
    logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=60&fit=crop',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-500',
    description: 'Official Japanese store'
  },
  {
    name: 'Sonny Angel Store',
    country: 'CHINA',
    url: 'https://sonnyangel.com/cn',
    logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=60&fit=crop',
    color: 'from-yellow-400 to-lime-500',
    bgColor: 'bg-lime-500',
    description: 'Official Chinese store'
  },
  {
    name: 'Sonny Angel Store',
    country: 'KOREA',
    url: 'https://sonnyangel.com/kr',
    logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=60&fit=crop',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-orange-500',
    description: 'Official Korean store'
  },
  {
    name: 'Sonny Angel Store',
    country: 'USA',
    url: 'https://sonnyangel.com/us',
    logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=60&fit=crop',
    color: 'from-pink-300 to-rose-400',
    bgColor: 'bg-rose-400',
    description: 'Official US store'
  },
  {
    name: 'Sonny Angel Store',
    country: 'HONG KONG',
    url: 'https://sonnyangel.com/hk',
    logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=60&fit=crop',
    color: 'from-blue-300 to-blue-500',
    bgColor: 'bg-blue-500',
    description: 'Official Hong Kong store'
  },
  {
    name: 'Sonny Angel Store',
    country: 'UK',
    url: 'https://sonnyangel.com/uk',
    logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=60&fit=crop',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-emerald-600',
    description: 'Official UK store'
  }
];

const physicalStores = [
  {
    name: 'Sonny Angel Store Taiwan',
    address: '台灣台北市信義區松壽路12號 ATT 4 FUN B1F B1F, ATT 4 FUN, No.12, Songshou Rd, Xinyi District, Taipei City 110',
    phone: '+886-2-7736-1005',
    image: right,
    city: 'Taipei',
    country: 'Taiwan'
  },
  {
    name: 'Sonny Angel Terrace ISHIGAKI (OKINAWA)',
    address: '1F Daiwa Bldg. 2-5 Misaki-cho, Ishigaki-shi, Okinawa, 907-0012 JAPAN',
    phone: '+81-980-82-1036',
    image: left,
    city: 'Okinawa',
    country: 'Japan'
  }
];

const Stores: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const storeItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    storeItemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      storeItemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section 
      id="stores" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Find <span className="text-pink-500">Sonny Angels</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover where to find authentic Sonny Angels, both online and in physical stores around the world
          </p>
        </div>

        {/* Official Online Stores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-pink-400 bg-clip-text text-transparent">
                OFFICIAL ONLINE STORE
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {onlineStores.map((store, index) => (
              <div
                key={index}
                ref={el => { storeItemRefs.current[index] = el; }}
                className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a 
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${store.color} p-6 h-32 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}>
                    {/* Decorative elements */}
                    <div className="absolute bottom-2 right-2 opacity-10">
                      <ShoppingBag size={32} />
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                          <span className="text-white text-xs font-semibold tracking-wide">
                            {store.country}
                          </span>
                        </div>
                        <ExternalLink className="text-white/80 group-hover:text-white transition-colors" size={16} />
                      </div>
                      
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">
                          Sonny Angel Store
                        </h4>
                        <p className="text-white/90 text-sm">
                          {store.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Official Physical Stores */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-pink-400 bg-clip-text text-transparent">
                OFFICIAL STORE
              </span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {physicalStores.map((store, index) => (
              <div
                key={index}
                ref={el => { storeItemRefs.current[onlineStores.length + index] = el; }}
                className="opacity-0 transform translate-y-10 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${(onlineStores.length + index) * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={store.image} 
                      alt={store.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-gray-800 text-sm font-semibold">
                          {store.city}, {store.country}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">
                      {store.name}
                    </h4>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-pink-500 mt-1 flex-shrink-0" size={16} />
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {store.address}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-gray-700 font-medium text-sm">
                          TEL: {store.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       </div>     
    </section>
  );
};

export default Stores;