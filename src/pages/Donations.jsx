import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import VirgenConJesus from '@/assets/images/gallery/VirgenConJesus.jpg';
import Jesus from '@/assets/images/gallery/JesusCrucificadoGrande.jpg';
import SanJudas from '@/assets/images/gallery/SanJudasF.jpg';
import useLiturgicalColor from '@/hooks/useLiturgicalColor';

// Componente de Card de Impacto
const ImpactCard = ({ icon, title, description, delay = '0', liturgicalColor }) => {
  return (
    <div className={`group bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:from-gray-50/50 hover:to-white opacity-0 animate-fade-scale-up delay-${delay}`}>
      <div className="flex flex-col items-center text-center">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${liturgicalColor} transition-all duration-500 ease-out group-hover:scale-110 shadow-md mb-6`}>
          {icon}
        </div>
        <h3 className={`font-cinzel-m text-xl mb-4 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-lg`}>
          {title}
        </h3>
        <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-5 shadow-sm transition-all duration-500 ease-out group-hover:w-28 mx-auto"></div>
        <p className="font-lora-m text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.01]">
          {description}
        </p>
      </div>
    </div>
  );
};

// Componente de Razón para Donar
const ReasonCard = ({ number, title, description, delay = '0', liturgicalColor }) => {
  return (
    <div className={`group relative bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 ease-out hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] opacity-0 animate-fade-in-left delay-${delay}`}>
      <div className="flex gap-6">
        <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center font-cinzel-b text-xl shadow-lg transition-transform duration-500 ease-out group-hover:scale-110`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className={`font-cinzel-m text-xl mb-3 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-lg`}>
            {title}
          </h3>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-4 shadow-sm transition-all duration-500 ease-out group-hover:w-24"></div>
          <p className="font-lora-m text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.01] origin-top-left">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Donations() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const liturgicalColor = useLiturgicalColor();
  
  const wompiUrl = "https://s.wompi.sv/51949I9t";
  
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
      
      {/* Sección Principal */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Columna izquierda: Título y texto */}
          <div className="flex flex-col justify-center">
            
            {/* Título principal */}
            <div className="mb-8 opacity-0 animate-fade-in-down duration-800 self-top">
              <h1 className={`font-cinzel-b text-3xl sm:text-4xl md:text-5xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
                Apoye Nuestra Misión
              </h1>
              <p className="font-cormorant-b text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                Su generosidad hace posible nuestra labor pastoral y el servicio a la comunidad
              </p>
            </div>
            
            {/* Texto informativo principal */}
            <div className="opacity-0 animate-fade-in-up delay-200 duration-800">
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
                <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-6">
                  Cada donación que recibimos es una bendición que nos permite continuar con nuestra misión de servir a Dios y a nuestra comunidad. Sus aportes nos ayudan a mantener nuestro templo, realizar actividades pastorales, y apoyar a quienes más lo necesitan.
                </p>
                <p className="font-lora-m text-lg text-gray-700 leading-relaxed">
                  <strong className={`font-lora-b ${liturgicalColor}`}>Importante:</strong> Todos los donativos son dirigidos directamente a nuestra parroquia a pesar de ser la cuenta de la <strong>Parroquia Santa Lucía </strong> y son utilizados con responsabilidad y transparencia para el beneficio de toda la comunidad de fe.
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Columna derecha: Imagen - Desktop */}
          <div className="opacity-0 animate-fade-in-right delay-300 duration-800 lg:flex hidden">
            <div className="relative group overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 w-full h-95 min-h-[600px]">
              <img 
                src={VirgenConJesus} 
                alt="Virgen con Jesús" 
                className="w-full h-full object-cover object-[center_5%] transition-transform duration-700 group-hover:scale-102"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Imagen para móvil - centrada y más pequeña */}
          <div className="opacity-0 animate-fade-in-up delay-300 duration-800 lg:hidden flex justify-center">
            <div className="relative group overflow-hidden rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-gray-200/80 w-full max-w-md h-[400px]">
              <img 
                src={VirgenConJesus} 
                alt="Virgen con Jesús" 
                className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
      
      {/* Sección de Impacto */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12 opacity-0 animate-fade-in-down duration-800">
            <h2 className={`font-cinzel-b text-3xl sm:text-4xl md:text-5xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
              ¿Cómo Ayudan sus Donaciones?
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gray-400 shadow-md"></div>
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
            </div>
          </div>
          
          {/* Grid de impacto */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <ImpactCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
              title="Mantenimiento"
              description="Conservación y mejora de nuestras instalaciones parroquiales para que sigan siendo un hogar espiritual acogedor."
              delay="200"
              liturgicalColor={liturgicalColor}
            />
            
            <ImpactCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Catequesis"
              description="Formación en la fe para niños, jóvenes y adultos con materiales educativos y actividades pastorales."
              delay="300"
              liturgicalColor={liturgicalColor}
            />
            
            <ImpactCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
              title="Caridad"
              description="Apoyo a familias necesitadas, enfermos y ancianos de nuestra comunidad con ayuda material y espiritual."
              delay="400"
              liturgicalColor={liturgicalColor}
            />
            
            <ImpactCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Liturgia"
              description="Celebraciones eucarísticas dignas, ornamentos litúrgicos, y todo lo necesario para el culto divino."
              delay="500"
              liturgicalColor={liturgicalColor}
            />
            
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
      
      {/* Sección de Llamado a la Acción - WOMPI */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-scale-up delay-200 duration-800">
          
          {/* Card principal de donación */}
          <div className="bg-gradient-to-br from-white via-gray-50/30 to-white p-10 md:p-14 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border-2 border-gray-200/80">
            
            {/* Ícono decorativo */}
            <div className="flex justify-center mb-8">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg`}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="text-center mb-10">
              <h2 className={`font-cinzel-b text-3xl sm:text-4xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
                Haga su Donación Ahora
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                <div className="mx-4 w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </div>
              <p className="font-lora-m text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-2">
                Será redirigido a nuestra plataforma segura de pagos <strong className="font-lora-b">WOMPI</strong> para completar su donación de manera rápida y segura.
              </p>
              <p className="font-lora-m text-base text-gray-600 italic">
                Todos los donativos son destinados directamente a nuestra parroquia a pesar de ser de aparecer que es para la <strong>Parroquia Santa Lucía</strong>.
              </p>
            </div>
            
            
            {/* Botón principal de donación */}
            <div className="text-center">
              <a
                href={wompiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white rounded-full font-cinzel-m text-xl transition-all duration-700 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Donar con WOMPI
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <p className="font-lora-m text-sm text-gray-500 mt-6">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Transacción 100% segura
              </p>
            </div>
            
          </div>
          
          {/* Nota de agradecimiento */}
          <div className="mt-10 text-center opacity-0 animate-fade-in delay-400 duration-800">
            <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
              <p className={`font-cinzel-m text-lg ${liturgicalColor} mb-2`}>
                "Dios ama al que da con alegría"
              </p>
              <p className="font-lora-m text-sm text-gray-600 italic">
                2 Corintios 9:7
              </p>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Sección de Agradecimiento */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Texto de agradecimiento - Izquierda */}
            <div className="opacity-0 animate-fade-in-up delay-200 duration-800 order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
                <h3 className={`font-cinzel-b text-2xl sm:text-3xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
                  Gracias por su Generosidad
                </h3>
                <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-300 mb-6 shadow-sm"></div>
                <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-6">
                  Cada donación, sin importar su monto, es una bendición para nuestra comunidad. Su apoyo nos permite continuar nuestra misión de servir a Dios y a nuestros hermanos.
                </p>
                <p className="font-lora-b text-base text-gray-600">
                  Que Dios multiplique sus bendiciones y recompense su generosidad
                </p>
              </div>
            </div>

            {/* Imagen San Judas - Derecha */}
            <div className="opacity-0 animate-fade-in-up delay-300 duration-800 order-1 md:order-2 flex md:items-end items-center justify-center md:pt-8">
              <div className="relative group overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 w-full max-w-md">
                <img 
                  src={SanJudas} 
                  alt="San Judas Tadeo" 
                  className="w-full h-[560px] md:h-[560px] object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-20"></div>
      
    </div>
  );
}