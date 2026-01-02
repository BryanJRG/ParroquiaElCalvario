import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import CampanaManiana from '@/assets/images/gallery/CampanaManiana.jpg';
import useLiturgicalColor from '@/hooks/useLiturgicalColor';

export default function History() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const liturgicalColor = useLiturgicalColor();
  
  return (
    <div className="min-h-screen bg-white">
      
      <Navbar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        liturgicalColor={liturgicalColor}
        noHero={true}
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        liturgicalColor={liturgicalColor}
      />
      
      {/* Espaciador para el navbar */}
      <div className="h-20"></div>
      
      {/* Sección Principal - Historia */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 px-4 flex items-center min-h-[calc(100vh-5rem)]">
        <div className="max-w-7xl mx-auto w-full">
          
          <div className="grid lg:grid-cols-2 gap-8 items-stretch opacity-0 animate-fade-in-up delay-200 duration-800">
            
            {/* Contenido de texto - Izquierda */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-10 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 h-full flex flex-col">
                
                <h1 className={`font-cinzel-b text-3xl sm:text-4xl md:text-5xl mb-8 ${liturgicalColor} drop-shadow-sm`}>
                  Nuestra Historia
                </h1>
                
                <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-300 mb-8 shadow-sm"></div>
                
                <div className="font-lora-m text-base sm:text-lg text-gray-700 leading-relaxed space-y-6 flex-1 overflow-y-auto">
                  
                  <p>
                    <strong className="font-lora-b">Fundación (año exacto):</strong> mencionar quién fundó la parroquia, bajo qué circunstancias, qué obispo o párroco estuvo a cargo inicialmente. Si fue construida sobre algún terreno donado o comprado, incluir esos detalles.
                  </p>
                  
                  <p>
                    <strong className="font-lora-b">Primeros años:</strong> cómo era la comunidad en sus inicios, cuántas familias formaban parte, si había alguna capilla provisional antes del templo actual. Mencionar las primeras celebraciones importantes.
                  </p>
                  
                  <p>
                    <strong className="font-lora-b">Construcción del templo:</strong> explicar el proceso de construcción, cuánto tiempo tomó, si hubo dificultades económicas o de otro tipo. Mencionar el estilo arquitectónico si es relevante, materiales usados, alguna característica distintiva del edificio.
                  </p>
                  
                  <p>
                    <strong className="font-lora-b">Momentos significativos:</strong> eventos importantes que marcaron la historia - renovaciones, ampliaciones, visitas de obispos o figuras importantes, celebraciones especiales de aniversarios. Si hubo algún período difícil (guerra, terremotos, etc.) y cómo la comunidad lo superó.
                  </p>
                  
                  <p>
                    <strong className="font-lora-b">Párrocos destacados:</strong> mencionar algunos párrocos que dejaron huella especial en la comunidad, sus contribuciones, proyectos que iniciaron o completaron durante su servicio.
                  </p>
                  
                  <p>
                    <strong className="font-lora-b">Tradiciones y devociones:</strong> explicar si hay alguna devoción particular que caracteriza a la parroquia (por ejemplo, si el Cristo Negro o alguna advocación mariana tiene especial importancia). Tradiciones que se mantienen desde los inicios.
                  </p>
                  
                  <p>
                    <strong className="font-lora-b">La parroquia hoy:</strong> cómo ha crecido la comunidad, cuántas familias aproximadamente, principales actividades pastorales actuales, grupos parroquiales activos. Mencionar el párroco actual y su visión.
                  </p>
                  
                  <p className="italic text-gray-600">
                    [Aquí pueden agregarse más detalles específicos según la documentación disponible, testimonios de fieles antiguos, o referencias a archivos parroquiales.]
                  </p>
                  
                </div>
                
              </div>
            </div>
            
            {/* Imagen - Derecha */}
            <div className="flex items-stretch">
              <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 w-full group">
                <img 
                  src={CampanaManiana} 
                  alt="Parroquia El Calvario" 
                  className="w-full h-full object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-101"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
      
    </div>
  );
}