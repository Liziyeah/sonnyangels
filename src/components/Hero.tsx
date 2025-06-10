import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import gifBanner from '../assets/banner/gif.png';
import SonnyAngel from '../assets/banner/sonnyangel-banner.png';
const Hero: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  
  const backgroundImages = [
    gifBanner,
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bannerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = bannerRef.current.getBoundingClientRect();
      
      const xPos = (clientX / width - 0.5) * 20;
      const yPos = (clientY / height - 0.5) * 20;

      // Parallax effect for images
      imageRefs.current.forEach((img, index) => {
        if (img) {
          const factor = (index + 1) * 0.2;
          img.style.transform = `translate(${xPos * factor}px, ${yPos * factor}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Background images with parallax
  const placeholderImages = backgroundImages.map((img, index) => (
    <div 
      key={index}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
        index === 0 ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: `url(${img})` }}
      ref={el => { imageRefs.current[index] = el; }}
    />
  ));

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      ref={bannerRef}
    >
      
      {/* Background images with parallax */}
      {placeholderImages}
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
        {/* Imagen de Sonny Angels en lugar del h1 */}
        <img src={SonnyAngel}
          alt="Sonny Angels"
          className="mx-auto max-w-full h-auto opacity-0 animate-fade-in-up"
          style={{
            maxHeight: '400px'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;