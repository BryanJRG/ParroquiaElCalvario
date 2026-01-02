import React from 'react';

/**
 * ImageTextCard - Componente de tarjeta con imagen y texto
 * 
 * @param {string} image - URL de la imagen
 * @param {string} title - Título de la card
 * @param {string} text - Texto descriptivo
 * @param {string} imagePosition - 'left' o 'right' (default: 'left')
 * @param {string} liturgicalColor - Clase de color litúrgico del hook
 * @param {string} delay - Delay de animación (ej: '200', '400', '600')
 */
const ImageTextCard = ({ 
  image, 
  title, 
  text, 
  imagePosition = 'left',
  liturgicalColor,
  delay = '0'
}) => {
  const isLeft = imagePosition === 'left';
  
  return (
    <div className={`group flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden opacity-0 animate-fade-in-up delay-${delay} duration-800 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out cursor-pointer`}>
      
      {/* Contenedor de Imagen - 30% del espacio con altura fija */}
      <div className="w-full md:w-[30%] h-72 md:h-80 lg:h-96 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08] shadow-inner"
        />
        {/* Borde sutil interno para profundidad */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
      </div>
      
      {/* Contenedor de Contenido - 70% del espacio */}
      <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50/30 transition-colors duration-700 group-hover:from-gray-50/50 group-hover:to-white">
        
        {/* Título con color litúrgico - se hace más pequeño en hover */}
        <h3 className={`font-cinzel-m text-2xl md:text-3xl lg:text-4xl mb-5 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-xl group-hover:md:text-2xl group-hover:lg:text-3xl`}>
          {title}
        </h3>
        
        {/* Línea decorativa de separación más larga */}
        <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-300 mb-6 shadow-sm transition-all duration-500 ease-out group-hover:w-[99%]"></div>
        
        {/* Texto descriptivo - aumenta en hover */}
        <p className="font-lora-m text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.02] origin-left">
          {text}
        </p>
        
      </div>
    </div>
  );
};

export default ImageTextCard;