import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-400 text-white py-8">
      {/* Sección de iconos sociales */}
      <div className="flex justify-center space-x-6 mb-8">
        <SocialIcon 
          href="https://www.facebook.com/sonnyangelusa/?locale=es_LA" 
          bgColor="bg-blue-600" 
          icon="f"
          ariaLabel="Facebook"
        />
        <SocialIcon 
          href="https://twitter.com/sonnyangelusa" 
          bgColor="bg-blue-400" 
          icon="t"
          ariaLabel="Twitter"
        />
        <SocialIcon 
          href="https://www.line.me/en/" 
          bgColor="bg-green-500" 
          icon="L"
          ariaLabel="Line"
        />
        <SocialIcon 
          href="https://m.weibo.cn/u/5827490509?luicode=10000011&lfid=231522type%3D1%26t%3D10%26q%3D%23sonny%20angel%23&featurecode=20000180%C2%A0" 
          bgColor="bg-red-500" 
          icon="微"
          ariaLabel="Weibo"
        />
        <SocialIcon 
          href="https://www.wechat.com/en/" 
          bgColor="bg-green-600" 
          icon="微"
          ariaLabel="WeChat"
        />
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-pink-300 mx-auto max-w-4xl mb-6"></div>

      {/* Información de copyright y enlaces */}
      <div className="text-center text-pink-100">
        <p className="mb-4 text-sm">© 2025 Sonny Angels. All rights reserved.</p>
        <div className="flex justify-center space-x-8 text-sm">
          <a 
            href="#" 
            className="hover:text-white transition-colors duration-300 underline"
          >
            Terms & Conditions
          </a>
          <a 
            href="#" 
            className="hover:text-white transition-colors duration-300 underline"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="hover:text-white transition-colors duration-300 underline"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  href: string;
  bgColor: string;
  icon: string;
  ariaLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, bgColor, icon, ariaLabel }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} text-white w-12 h-12 rounded flex items-center justify-center hover:opacity-80 transition-opacity duration-300 font-bold text-lg`}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  );
};


export default Footer;