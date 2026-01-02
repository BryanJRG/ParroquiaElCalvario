import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import VirgenConJesus from '@/assets/images/gallery/VirgenConJesus.jpg';
import useLiturgicalColor from '@/hooks/useLiturgicalColor';

// Componente de Card de Oración
const PrayerCard = ({ title, description, timeOfDay, link, liturgicalColor }) => {
  return (
    <div className="group bg-gradient-to-br from-white to-gray-50/50 p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      
      {/* Icono y tiempo del día */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${liturgicalColor} shadow-md`}>
          {timeOfDay === 'morning' && (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
          {timeOfDay === 'afternoon' && (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
          {timeOfDay === 'night' && (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </div>
        <h3 className={`font-cinzel-b text-2xl ${liturgicalColor} drop-shadow-sm`}>
          {title}
        </h3>
      </div>
      
      <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-6 shadow-sm"></div>
      
      <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-8">
        {description}
      </p>
      
      {/* Botón de redirección */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-cormorant-b text-lg transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 shadow-md"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        Ir a las Oraciones
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      
    </div>
  );
};

export default function Prayers() {
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
      
      {/* Sección Principal - Oraciones de la Mañana */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Título de la página */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-down duration-800">
            <h1 className={`font-cinzel-b text-4xl sm:text-5xl md:text-6xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
              Oraciones del Día
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
              <div className="mx-6 w-3 h-3 rounded-full bg-gray-400 shadow-md"></div>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
            </div>
            <p className="font-cormorant-b text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Acompañe su jornada con las lecturas y oraciones litúrgicas de cada día
            </p>
          </div>
          
          {/* Grid con Card y Imagen - Oraciones de la Mañana */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-20 opacity-0 animate-fade-in-up delay-200 duration-800">
            
            {/* Card de información - Izquierda */}
            <div>
              <PrayerCard
                title="Oraciones de la Mañana"
                description="Comience su día en comunión con Dios. Encuentre las lecturas del día, el Evangelio, reflexiones y oraciones para santificar su jornada. La liturgia diaria nos ofrece alimento espiritual renovado cada mañana para fortalecer nuestra fe."
                timeOfDay="morning"
                link="https://www.ciudadredonda.org/calendario-lecturas/evangelio-del-dia/hoy"
                liturgicalColor={liturgicalColor}
              />
            </div>
            
            {/* Imagen - Derecha */}
            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 w-full max-w-lg group">
                <img 
                  src={VirgenConJesus} 
                  alt="Oraciones" 
                  className="w-full h-[450px] md:h-[500px] object-cover object-[center_30%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
          </div>
          
          {/* Grid con Imagen y Card - Oraciones de la Tarde */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-20 opacity-0 animate-fade-in-up delay-300 duration-800">
            
            {/* Imagen - Izquierda */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 w-full max-w-lg group">
                <img 
                  src={VirgenConJesus} 
                  alt="Oraciones" 
                  className="w-full h-[450px] md:h-[500px] object-cover object-[center_30%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
            {/* Card de información - Derecha */}
            <div className="order-1 lg:order-2">
              <PrayerCard
                title="Oraciones de la Tarde"
                description="En medio de su jornada, haga una pausa para encontrarse con el Señor. Las oraciones de la tarde nos invitan a reflexionar sobre nuestro día y a renovar nuestro compromiso con Dios y nuestros hermanos en la fe."
                timeOfDay="afternoon"
                link="https://www.ciudadredonda.org/calendario-lecturas/evangelio-del-dia/hoy"
                liturgicalColor={liturgicalColor}
              />
            </div>
            
          </div>
          
          {/* Grid con Card y Imagen - Oraciones de la Noche */}
          <div className="grid lg:grid-cols-2 gap-8 items-center opacity-0 animate-fade-in-up delay-400 duration-800">
            
            {/* Card de información - Izquierda */}
            <div>
              <PrayerCard
                title="Oraciones de la Noche"
                description="Termine su día dando gracias a Dios por sus bendiciones y encomendando su descanso. Las oraciones nocturnas nos ayudan a hacer un examen de conciencia y a confiar en la providencia divina mientras dormimos."
                timeOfDay="night"
                link="https://www.ciudadredonda.org/calendario-lecturas/evangelio-del-dia/hoy"
                liturgicalColor={liturgicalColor}
              />
            </div>
            
            {/* Imagen - Derecha */}
            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 w-full max-w-lg group">
                <img 
                  src={VirgenConJesus} 
                  alt="Oraciones" 
                  className="w-full h-[450px] md:h-[500px] object-cover object-[center_30%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
      
      {/* Separador decorativo */}
      <div className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="flex items-center justify-center">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
          <div className="mx-6 w-3 h-3 rounded-full bg-gray-400 shadow-md"></div>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
        </div>
      </div>
      
      {/* Sección de Nota Adicional */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in-up delay-300 duration-800">
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
            
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-6 shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            <h3 className={`font-cinzel-b text-2xl sm:text-3xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
              Lecturas y Oraciones Diarias
            </h3>
            
            <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-4">
              Las lecturas y oraciones cambian cada día según el calendario litúrgico de la Iglesia. Al acceder a los enlaces encontrará el contenido correspondiente al día actual.
            </p>
            
            <p className="font-lora-m text-base text-gray-600 italic">
              "La oración es el respiro del alma, es el secreto de la vida espiritual"
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer spacing */}
      <div className="h-20"></div>
      
    </div>
  );
}