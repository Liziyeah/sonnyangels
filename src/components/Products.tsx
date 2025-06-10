import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, X, ShoppingCart, Heart, Plus, Minus } from 'lucide-react';

// Tipos de datos
interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew: boolean;
  isLimited: boolean;
  rating: number;
  reviews: number;
}

// Datos de productos
const products: ProductType[] = [
  {
    id: 1,
    name: "Sonny Angel Animal Series",
    price: 12.99,
    image: "https://i.pinimg.com/736x/d0/c3/66/d0c366dbb152306a6188f87215943012.jpg",
    category: "classic",
    isNew: false,
    isLimited: false,
    rating: 5,
    reviews: 432
  },
  {
    id: 2,
    name: "Sonny Angel Vegetable Serie",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c2/23/a0/c223a00b8e3aebd10b3ba27400ab8b6c.jpg",
    category: "classic",
    isNew: false,
    isLimited: false,
    rating: 4,
    reviews: 287
  },
  {
    id: 3,
    name: "Sonny Angel Fruit Serie",
    price: 14.99,
    image: "https://i.pinimg.com/736x/66/57/dc/6657dce8bdd489b5d4d6a4a8272ce829.jpg",
    category: "classic",
    isNew: false,
    isLimited: false,
    rating: 5,
    reviews: 321
  },
  {
    id: 5,
    name: "Sonny Angel Christmas Series 2025",
    price: 16.99,
    image: "https://kawaii-panda.com/3139/sonny-angel-christmas2015.jpg",
    category: "seasonal",
    isNew: true,
    isLimited: true,
    rating: 5,
    reviews: 147
  },
  {
    id: 6,
    name: "Sonny Angel Halloween Series",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/41OjkytGOVL.jpg",
    category: "seasonal",
    isNew: false,
    isLimited: true,
    rating: 5,
    reviews: 213
  },
  {
    id: 7,
    name: "Sonny Angel Valentine's Day Series",
    price: 16.99,
    image: "https://cdn11.bigcommerce.com/s-fvv65gjhoq/images/stencil/1200x1200/products/2927/9835/sonnyangel_valentine2018_bb__19261.1516229395.jpg?c=2",
    category: "seasonal",
    isNew: false,
    isLimited: true,
    rating: 4,
    reviews: 178
  },
  {
    id: 8,
    name: "Sonny Angel Artist Collection",
    price: 24.99,
    image: "https://kiyowoskin.com/cdn/shop/files/s-l1600.png?v=1724802613&width=713",
    category: "limited",
    isNew: true,
    isLimited: true,
    rating: 5,
    reviews: 87
  }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const productSectionRef = useRef<HTMLElement>(null);
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  const categories = ['all', ...new Set(products.map(product => product.category))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (productSectionRef.current) {
      observer.observe(productSectionRef.current);
    }

    return () => {
      if (productSectionRef.current) {
        observer.unobserve(productSectionRef.current);
      }
    };
  }, []);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 340; 
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const openProductModal = (product: ProductType) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsWishlisted(false);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const getRelatedProducts = (productIds: number[] = []) => {
    return products.filter(product => productIds.includes(product.id));
  };

  const buyNow = () => {
    if (selectedProduct) {
      // Aquí puedes cambiar la URL por la tienda donde venden los Sonny Angels
      const storeUrl = `https://www.sonnyangel.com/en/products/${selectedProduct.id}`;
      // O usar una tienda como Amazon, eBay, etc.
      // const storeUrl = `https://www.amazon.com/s?k=${encodeURIComponent(selectedProduct.name)}`;
      
      window.open(storeUrl, '_blank');
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <section 
      id="products" 
      ref={productSectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Our <span className="text-pink-500">Collections</span>
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Explore our adorable Sonny Angel figurines, from classic series to limited editions
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Products scroll container with navigation arrows */}
        <div className="relative group">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 hover:bg-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar"
            style={{scrollbarWidth: 'none'}}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                isHovered={hoveredProduct === index}
                onHover={() => setHoveredProduct(index)}
                onLeave={() => setHoveredProduct(null)}
                isVisible={isVisible}
                onViewDetails={openProductModal}
              />
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 hover:bg-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Product Details</h3>
              <button 
                onClick={closeProductModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="relative">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover rounded-xl"
                    />
                    {selectedProduct.isNew && (
                      <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                    {selectedProduct.isLimited && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        LIMITED
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < Math.floor(selectedProduct.rating) ? 'fill-current' : ''} 
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">({selectedProduct.reviews} reviews)</span>
                    </div>
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {selectedProduct.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-3xl font-bold text-pink-500">${selectedProduct.price}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-medium">Quantity:</span>
                      <div className="flex items-center border rounded-lg">
                        <button 
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-medium">{quantity}</span>
                        <button 
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={buyNow}
                        className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={20} />
                        Buy Now - ${(selectedProduct.price * quantity).toFixed(2)}
                      </button>
                      <button 
                        onClick={toggleWishlist}
                        className={`p-3 rounded-lg border transition-colors ${
                          isWishlisted 
                            ? 'bg-pink-50 border-pink-300 text-pink-500' 
                            : 'border-gray-300 text-gray-500 hover:border-pink-300 hover:text-pink-500'
                        }`}
                      >
                        <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

interface ProductCardProps {
  product: ProductType;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  isVisible: boolean;
  onViewDetails: (product: ProductType) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  index,
  isHovered,
  onHover,
  onLeave,
  isVisible,
  onViewDetails
}) => {
  const delay = (index % 5) * 100;
  
  return (
    <div 
      className={`flex-none w-[300px] mx-2 transition-all duration-500 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div 
        className={`bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
          isHovered ? 'shadow-xl transform -translate-y-2' : ''
        }`}
      >
        <div className="relative h-[280px] overflow-hidden group">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onError={(e) => {
              console.log('Error cargando imagen:', product.image);
              e.currentTarget.src = 'https://via.placeholder.com/300x280/FFB6C1/FFFFFF?text=Sonny+Angel';
            }}
            loading="lazy"
          />
          
          {product.isNew && (
            <div className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NEW
            </div>
          )}
          
          {product.isLimited && (
            <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              LIMITED
            </div>
          )}
          
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <button 
              onClick={() => onViewDetails(product)}
              className="bg-white text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full font-medium transform hover:scale-105"
            >
              View Details
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(product.rating) ? 'fill-current' : ''} 
                />
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
          </div>
          
          <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-pink-500 font-bold">${product.price}</span>
            </div>
            <span className="text-gray-500 text-sm">{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;