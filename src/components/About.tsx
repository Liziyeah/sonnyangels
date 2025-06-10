import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import secondImg from "../assets/segundo-carrusel/carrusel3.jpg";
import thirdImg from "../assets/segundo-carrusel/carrusel2.png";
import firstImg from '../assets/segundo-carrusel/carrusel1.png'

interface Slide {
  image: string;
  title: string;
}

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Slide | null>(null);
  
  const imgAbout = '/src/assets/about/img-about.webp';
  const starsBackground = '/src/assets/about/stars-bgrnd.svg';
  const slides: Slide[] = [
    {
      image: firstImg,
      title: "Sticker Pack Series 2"
    },
    {
      image: secondImg,
      title: "Hippers Looking Back Series"
    },
    {
      image: thirdImg,
      title: "Master Collection"
    }
  ];

  const handleViewCollection = (slide: Slide): void => {
    setSelectedImage(slide);
  };

  const closeImageModal = (): void => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="about" className="relative min-h-screen bg-pink-200 py-20 px-4 overflow-hidden font-chillax">
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `url(${starsBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3
          }}
        ></div>

        <div className="absolute top-1/4 left-8">
          <div className="w-20 h-20 bg-yellow-200 rounded-full opacity-50"></div>
        </div>
        
        <div className="absolute bottom-1/3 right-12">
          <div className="w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
        </div>
        
        <div className="absolute top-1/2 left-1/4">
          <div className="w-8 h-8 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
        </div>

        {/* Floating Hearts */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4"
        >
          <div className="w-8 h-8 bg-pink-400 rotate-45 rounded-tl-full rounded-tr-full rounded-bl-full"></div>
        </motion.div>

        {/* Spinning Circle */}
        <div className="absolute bottom-12 left-12">
          <div className="w-12 h-12">
            <div className="absolute w-12 h-12 border-4 border-dashed border-pink-400 rounded-full animate-spin-slow"></div>
            <div className="absolute w-8 h-8 bg-pink-400 rounded-full top-2 left-2"></div>
          </div>
        </div>

        {/* Dotted Pattern */}
        <div className="absolute inset-0 pointer-events-none z-1">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #f9a8d4 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.2
          }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative">
              <h2 className="text-4xl font-bold mb-8 text-gray-800 tracking-wide">ABOUT</h2>
              <div className="relative">
                {/* Dotted border circle */}
                <div className="absolute -inset-4 border-4 border-pink-300 border-dashed rounded-full" style={{ borderRadius: '70% 70% 70% 70%' }}></div>
                
                {/* Content container */}
                <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-3xl">
                  <p className="text-lg leading-relaxed text-gray-700 font-light">
                    Sonny Angel is a little angel boy who likes wearing all sorts of headgear. He is always by your side to make you smile. 
                    Sonny Angel will provides healing moments in your everyday life. 
                    He is a welcome sight at the entrance to your home, next to your bed, on your desk and so many other places.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 bg-white px-6 py-3 rounded-full text-pink-500 font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={imgAbout}
                  alt="Sonny Angels collection" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>

          {/* Product Gallery */}
          <div className="mt-20 relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {slides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="relative h-64">
                    <motion.img 
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white text-lg font-semibold mb-2">{slide.title}</h3>
                      <motion.button
                        onClick={() => handleViewCollection(slide)}
                        className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Sticker
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal About */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-pink-100 rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 z-10"
              >
                <span className="text-gray-600 text-xl leading-none">×</span>
              </button>

              {/* Modal Content */}
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute top-0 left-4">
                  <div className="w-6 h-6 bg-yellow-300 rounded-full transform rotate-12"></div>
                </div>
                <div className="absolute top-4 right-12">
                  <div className="w-4 h-4 bg-green-300 rounded-full"></div>
                </div>
                <div className="absolute top-8 left-1/3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8"
                  >
                    🌸
                  </motion.div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 pt-4">ABOUT</h2>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Left Column - Text */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="text-pink-500 font-semibold">All about Sonny Angel</span><br/>
                      At the beginning, Sonny Angel was not a mini figure. He was born as a <span className="font-semibold">"(*)"</span>, wide-eyed doll. Born on May 15th, 2004
                    </p>
                    
                    <div className="bg-white/60 rounded-2xl p-4">
                      <p className="text-pink-500 font-semibold text-sm mb-2">Try your luck to great!</p>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        The major feature of Sonny Angel Mini Figures is that each series is comprised of 12 different figures (regular series). Sonny Angel utilizes blind box packaging; you do not know which figure you will receive until you buy one and open the box.
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Images */}
                  <div className="space-y-4">
                    {/* Top Image - Single Sonny Angel */}
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <img 
                        src="https://i.pinimg.com/736x/c5/81/13/c581133cfe0ac5f46d9ddc7777861b78.jpg"
                        alt="Sonny Angel Figure" 
                        className="w-full h-40 object-cover"
                      />
                    </div>

                    {/* Bottom Image - Mini Series Collection */}
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <img 
                        src="https://i.pinimg.com/736x/51/f9/f1/51f9f1ee6f0839ea846e7795ca52d168.jpg"
                        alt="Mini Series Collection" 
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal para imágenes grandes */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 z-10"
              >
                <span className="text-gray-800 text-2xl leading-none">×</span>
              </button>

              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <motion.img 
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;