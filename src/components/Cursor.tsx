import React, { useEffect, useState } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Ocultar el cursor nativo cuando se monte el componente
    document.body.style.cursor = 'none';

    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const handleLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll('a, button');
      
      allLinks.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    handleLinkHoverEvents();
    window.addEventListener('mousemove', mMove);
    window.addEventListener('mousedown', mDown);
    document.body.addEventListener('mouseleave', mLeave);

    // Cleanup function para restaurar el cursor nativo
    return () => {
      // Restaurar el cursor nativo cuando se desmonte el componente
      document.body.style.cursor = 'auto';
      
      window.removeEventListener('mousemove', mMove);
      window.removeEventListener('mousedown', mDown);
      document.body.removeEventListener('mouseleave', mLeave);
      
      // Limpiar los event listeners de los enlaces
      const allLinks = document.querySelectorAll('a, button');
      allLinks.forEach(link => {
        link.removeEventListener('mouseenter', () => setLinkHovered(true));
        link.removeEventListener('mouseleave', () => setLinkHovered(false));
      });
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-300 ${
          hidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div 
          className={`rounded-full bg-white transition-all duration-300 ${
            linkHovered ? 'w-6 h-6 opacity-50' : 'w-4 h-4'
          } ${
            clicked ? 'scale-75' : 'scale-100'
          }`}
        ></div>
      </div>
      <div 
        className={`fixed pointer-events-none z-50 rounded-full border border-white w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${
          linkHovered ? 'scale-150' : 'scale-100'
        } ${
          clicked ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
        }}
      ></div>
    </>
  );
};

export default Cursor;