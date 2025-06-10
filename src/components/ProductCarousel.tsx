import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heartRabbit from '../assets/primer-carrusel/heart-rabbit-1.webp';
import pinkRabbit from '../assets/primer-carrusel/conejoalas.webp';
import lion from '../assets/primer-carrusel/leon.webp';
import elephant from '../assets/primer-carrusel/elefante.webp';
import plushieRabbit from '../assets/primer-carrusel/conejopeluche.webp';
import whiteRabbit from '../assets/primer-carrusel/conejo.webp';
import radish from '../assets/primer-carrusel/rabano.webp';


interface Collection {
  title: string;
  description: string;
  image: string;
  color: string;
  name: string;
}

const collections: Collection[] = [
  {
    title: "MASTER COLLECTION",
    description: "The most elegant Sonny Angels. With premium details and refined finishes, this collection brings sophistication to your shelf.",
    image: heartRabbit,
    color: "#DC2626",
    name: "Heart Rabbit"
  },
  {
    title: "MINI FIGURE (HIPPERS)",
    description: "Sonny Angel with a twist! These charming figures stick to your phone, laptop, or other surfaces—adding a touch of cuteness and personality wherever you go.",
    image: pinkRabbit,
    color: "#FF64AE",
    name: "Pink Angel"
  },
  {
    title: "MINI FIGURE (GIFT)",
    description: "The perfect gift for any occasion. These figures come in special packaging and are themed to celebrate life's sweetest moments.",
    image: lion,
    color: "#E3E350",
    name: "Lion Angel"
  },
  {
    title: "MINI FIGURE (LIMITED)",
    description: "Exclusive, limited-edition designs for true collectors. Each figure is rare and beautifully crafted, making it a treasured addition to any collection.",
    image: elephant,
    color: "#EED058",
    name: "Elephant Angel"
  },
  {
    title: "BEST COLLECTIONS AND OTHERS",
    description: "Discover special surprises and unique collaborations that don't fit traditional categories—but still capture the magic of Sonny Angel.",
    image: plushieRabbit,
    color: "#E09397",
    name: "Plushie Angel"
  },
  {
    title: "ARTIST COLLECTION",
    description: "Where art meets charm. These figures are designed by artists and feature creative, one-of-a-kind designs for collectors who love originality and style.",
    image: whiteRabbit,
    color: "#B0D0E4",
    name: "White Rabbit Angel"
  },
  {
    title: "MINI FIGURE (REGULAR)",
    description: "Discover the most iconic Sonny Angel collection. These adorable figures come in fun themed costumes and feature a surprise element that makes every unboxing exciting and unique.",
    image: radish,
    color: "#098736",
    name: "Radish Angel"
  }
];

// Función para determinar si necesitamos texto negro
const needsDarkText = (color: string): boolean => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Si la luminancia es mayor a 0.6, usamos texto negro
  return luminance > 0.6;
};

const ProductCarousel: React.FC = () => {


  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = (page + newDirection + collections.length) % collections.length;
    setPage([newPage, newDirection]);
  };

  const currentCollection = collections[page];
  const textColor = needsDarkText(currentCollection.color) ? 'text-black' : 'text-white';

  return (
    <div 
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: currentCollection.color }}
    >
      <motion.div
        initial={false}
        animate={{ backgroundColor: currentCollection.color }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-between px-12"
      >
        <div className="w-1/2 p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ y: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction < 0 ? 100 : -100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-6"
            >
              <motion.h1 
                className={`text-6xl font-bold tracking-tight ${textColor}`}
                layoutId="title"
              >
                {currentCollection.title}
              </motion.h1>
              <motion.p 
                className={`text-lg opacity-90 max-w-md ${textColor}`}
                layoutId="description"
              >
                {currentCollection.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-1/2 relative flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              <div className="relative w-80 h-80 mb-4">
                <motion.img
                  src={currentCollection.image}
                  alt={currentCollection.name}
                  className="w-full h-full object-contain rounded-2xl"
                  layoutId="image"
                />
              </div>
              <motion.p 
                className={`text-center text-xl font-chillax ${textColor}`}
                layoutId="name"
              >
                {currentCollection.name}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => paginate(1)}
          className={`absolute right-8 top-1/2 -translate-y-1/2 ${
            needsDarkText(currentCollection.color) 
              ? 'bg-black/20 hover:bg-black/30' 
              : 'bg-white/20 hover:bg-white/30'
          } w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group`}
        >
          <ChevronRight 
            size={32} 
            className={`${textColor} group-hover:scale-110 transition-transform duration-300`}
          />
        </button>
      </motion.div>
    </div>
  );
};

export default ProductCarousel;