import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import ImageTextCard from '@/components/home/ImageTextCard';
import bgImage from '@/assets/images/gallery/ParroquiaAdentroFrente.jpg';
import bautismoImg from '@/assets/images/gallery/CruzAfueraIM.jpg';
import comunionImg from '@/assets/images/gallery/CristoNegroI.jpg';
import confirmacionImg from '@/assets/images/gallery/ParroquiaDPlantas.jpg';
import matrimonioImg from '@/assets/images/gallery/JesusEnfocado.jpg';
import useLiturgicalColor from '@/hooks/useLiturgicalColor';

// Componente de Horario
const ScheduleCard = ({ day, time, liturgicalColor, delay = '0' }) => {
  return (
    <div className={`bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 animate-fade-scale-up delay-${delay} cursor-pointer`}>
      <h4 className={`font-cinzel-m text-xl mb-1 ${liturgicalColor} drop-shadow-sm`}>
        {day}
      </h4>
      <div className="w-70 h-[1px] bg-gradient-to-r from-gray-400 to-gray-200 mb-6 shadow-sm"></div>
      <p className="font-lora-m ml-2 text-gray-700 text-lg leading-relaxed">
        {time}
      </p>
    </div>
  );
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const liturgicalColor = useLiturgicalColor();
  
  // Efecto parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-white ">
      
      <Navbar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        liturgicalColor={liturgicalColor}
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        liturgicalColor={liturgicalColor}
      />
      
      {/* Imagen de fondo fija - fuera del hero para que sea visible */}
      <div 
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          zIndex: 0
        }}
      >
        {/* Overlays oscuros */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen h-[600px] hero:h-[590px] w-full" style={{ zIndex: 1 }}>
        
        {/* Contenedor de texto */}
        <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8  pt-10 sm:pb-16 lg:pb-2">
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-white max-w-3xl mx-auto lg:mx-0 space-y-4 lg:space-y-5 text-center lg:text-left">
              
              {/* Título principal */}
              <h1 className="font-cinzel-m text-3xl sm:text-4xl lg:text-3xl leading-tight opacity-0 animate-fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] duration-800">
                Bienvenidos a Nuestra Parroquia
              </h1>
              
              {/* Subtítulo (cita bíblica) */}
              <p className="font-cormorant-b text-xl sm:text-2xl lg:text-2xl leading-relaxed opacity-0 animate-fade-in-up delay-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] duration-800">
                "Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso. Carguen con mi yugo y aprendan de mí, porque soy paciente y humilde de corazón, y encontrarán descanso para su alma."
              </p>
              
              {/* Referencia bíblica */}
              <p className="font-lora-m text-base sm:text-lg opacity-0 animate-fade-in-up delay-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] duration-800">
                Mateo 11:28-29
              </p>
              
              {/* Divisor decorativo */}
              <div className="flex items-center justify-center lg:justify-start opacity-0 animate-fade-in delay-700 pt-2 duration-800">
                <div className="h-px w-19 bg-white/70"></div>
                <div className="mx-4 w-2 h-2 rounded-full bg-white shadow-lg"></div>
                <div className="h-px w-19 bg-white/70"></div>
              </div>
              
              {/* Botón CTA */}
              <div className="opacity-0 animate-fade-scale-in delay-800 pt-2 duration-800">
                <a
                  href="#horarios"
                  className="inline-block px-8 py-4 bg-white/15 backdrop-blur-md border-2 border-white/50 rounded-full font-cormorant-b text-lg text-white hover:bg-white hover:text-gray-900 transition-all duration-700 hover:shadow-2xl shadow-lg"
                >
                  Ver Horarios de Misa
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Espaciador para transición después del hero */}
      <div className="h-20 bg-white relative z-10"></div>
      
      {/* Sección Sobre Nosotros */}
      <section className="relative bg-white py-20 px-4 z-10" id="sobre-nosotros">
        <div className="max-w-7xl mx-auto">
          
          {/* Título de sección */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-down duration-800">
            <h2 className={`font-cinzel-b text-4xl md:text-5xl mb-6 ${liturgicalColor}`}>
              Sobre Nosotros
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-gray-300"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="h-px w-20 bg-gray-300"></div>
            </div>
            <p className="font-cormorant-b text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Somos una familia unida en la fe, celebrando juntos los sacramentos y creciendo en el amor de Cristo
            </p>
          </div>
          
          {/* Cards de información */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 - Eucaristía */}
            <div className="group bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:from-gray-50/50 hover:to-white opacity-0 animate-fade-scale-up delay-200 cursor-pointer">
              <h3 className={`font-cinzel-m text-2xl mb-4 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-2xl group-hover:scale-[0.97]`}>
                Eucaristía
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-5 shadow-sm transition-all duration-500 ease-out"></div>
              <p className="font-lora-m text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.02] origin-top-left">
                La celebración de la Eucaristía es el centro de nuestra vida parroquial. Únete a nosotros en la celebración del misterio pascual.
              </p>
            </div>
            
            {/* Card 2 - Comunidad */}
            <div className="group bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:from-gray-50/50 hover:to-white opacity-0 animate-fade-scale-up delay-400 cursor-pointer">
              <h3 className={`font-cinzel-m text-2xl mb-4 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-2xl group-hover:scale-[0.97]`}>
                Comunidad
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-5 shadow-sm transition-all duration-500 ease-out"></div>
              <p className="font-lora-m text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.02] origin-top-left">
                Formación en la fe para todas las edades. Acompañamos el crecimiento espiritual de niños, jóvenes y adultos.
              </p>
            </div>
            
            {/* Card 3 - Servicio */}
            <div className="group bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:from-gray-50/50 hover:to-white opacity-0 animate-fade-scale-up delay-600 sm:col-span-2 lg:col-span-1 cursor-pointer">
              <h3 className={`font-cinzel-m text-2xl mb-4 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-2xl group-hover:scale-[0.97]`}>
                Servicio
              </h3>
              <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-5 shadow-sm transition-all duration-500 ease-out"></div>
              <p className="font-lora-m text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.05] origin-top-left">
                Vivimos el mandamiento del amor sirviendo a los más necesitados de nuestra comunidad y más allá.
              </p>
            </div>
            
          </div>
        </div>
      </section>
      
      {/* Sección Sacramentos */}
      <section className="relative bg-white py-20 px-4 z-10" id="sacramentos">
        <div className="max-w-7xl mx-auto">
          
          {/* Título de sección */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-down duration-800">
            <h2 className={`font-cinzel-b text-4xl md:text-5xl mb-6 ${liturgicalColor}`}>
              Sacramentos
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-gray-300"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="h-px w-20 bg-gray-300"></div>
            </div>
            <p className="font-cormorant-b text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Celebramos los momentos más importantes de la vida cristiana
            </p>
          </div>
          
          {/* Cards con imágenes usando ImageTextCard */}
          <div className="space-y-12">
            
            {/* Bautismo - Imagen a la izquierda */}
            <ImageTextCard
              image={bautismoImg}
              title="Bautismo"
              text="El Bautismo es el primer sacramento de iniciación cristiana. A través del agua y del Espíritu Santo, nacemos a una nueva vida en Cristo y nos convertimos en miembros de la familia de Dios. Preparamos a las familias para este momento especial con amor y dedicación."
              imagePosition="left"
              liturgicalColor={liturgicalColor}
              delay="200"
            />
            
            {/* Primera Comunión - Imagen a la derecha */}
            <ImageTextCard
              image={comunionImg}
              title="Primera Comunión"
              text="La Primera Comunión es un momento inolvidable en la vida de los niños. Los preparamos con catequesis especial para que puedan recibir por primera vez el Cuerpo de Cristo, fortaleciendo su fe y su relación con Jesús Eucaristía."
              imagePosition="right"
              liturgicalColor={liturgicalColor}
              delay="400"
            />
            
            {/* Confirmación - Imagen a la izquierda */}
            <ImageTextCard
              image={confirmacionImg}
              title="Confirmación"
              text="El Sacramento de la Confirmación completa la iniciación cristiana. Los jóvenes reciben los dones del Espíritu Santo para ser testigos valientes de Cristo en el mundo. Ofrecemos un programa de formación integral que prepara a los confirmandos para este compromiso."
              imagePosition="left"
              liturgicalColor={liturgicalColor}
              delay="600"
            />
            
            {/* Matrimonio - Imagen a la derecha */}
            <ImageTextCard
              image={matrimonioImg}
              title="Matrimonio"
              text="El Sacramento del Matrimonio es la unión de dos personas en el amor de Cristo. Acompañamos a las parejas en su preparación matrimonial, ayudándoles a construir su vida sobre la roca firme del amor de Dios y el compromiso mutuo."
              imagePosition="right"
              liturgicalColor={liturgicalColor}
              delay="800"
            />
            
          </div>
        </div>
      </section>
      
      {/* Separador decorativo */}
      <div className="py-12 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="flex items-center justify-center">
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
          <div className="mx-6 w-3 h-3 rounded-full bg-gray-400 shadow-md"></div>
          <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
        </div>
      </div>
      
      {/* Sección Horarios de Misa */}
      <section className="relative bg-white py-20 px-4 z-10" id="horarios">
        <div className="max-w-7xl mx-auto">
          
          {/* Título de sección */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-down duration-800">
            <h2 className={`font-cinzel-b text-4xl md:text-5xl mb-6 ${liturgicalColor}`}>
              Horarios de Misa
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-20 bg-gray-300"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gray-400"></div>
              <div className="h-px w-20 bg-gray-300"></div>
            </div>
            <p className="font-cormorant-b text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Te esperamos en nuestras celebraciones eucarísticas
            </p>
          </div>
          
          {/* Grid de horarios */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-1 place-items-center">
            <ScheduleCard
              day="Jueves"
              time="5:00 P.M."
              liturgicalColor={liturgicalColor}
              delay="200"
            />

            <ScheduleCard
              day="Domingo"
              time="7:00 A.M., 9:00 A.M. y 11:00 A.M."
              liturgicalColor={liturgicalColor}
              delay="400"
            />
          </div>
          
          {/* Nota adicional */}
          <div className="mt-12 text-center opacity-0 animate-fade-in delay-600 duration-800">
            <p className="font-lora-m text-lg text-gray-600 max-w-2xl mx-auto">
              Para información sobre horarios especiales en días festivos o solicitud de sacramentos, por favor contáctenos directamente.
            </p>
          </div>
          
        </div>
      </section>
      
      {/* Footer spacing */}
      <div className="h-20 bg-white relative z-10"></div>
      
    </div>
  );
}