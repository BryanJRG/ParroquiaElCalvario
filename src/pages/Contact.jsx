import React, { useState } from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import ParoquiaCielo from '@/assets/images/gallery/ParroquiaCielo.jpg';
import ParoquiaCieloFull from '@/assets/images/gallery/ParroquiaDPlantas.jpg';
import CristoNegroF from '@/assets/images/gallery/CristoNegroF.jpg';
import CampanaManianaF from '@/assets/images/gallery/CampanaManianaF.jpg';
import VirgenConJesus from '@/assets/images/gallery/VirgenConJesus.jpg';
import useLiturgicalColor from '@/hooks/useLiturgicalColor';

// Componente de Card de Información
const InfoCard = ({ icon, title, content, delay = '0', liturgicalColor }) => {
  return (
    <div className={`group bg-gradient-to-br from-white to-gray-50/50 p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:from-gray-50/50 hover:to-white opacity-0 animate-fade-scale-up delay-${delay}`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${liturgicalColor} transition-transform duration-500 ease-out group-hover:scale-110 shadow-md`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-cinzel-m text-xl mb-3 ${liturgicalColor} drop-shadow-sm transition-all duration-500 ease-out group-hover:text-lg`}>
            {title}
          </h3>
          <div className="w-full h-[2px] bg-gradient-to-r from-gray-400 to-gray-300 mb-4 shadow-sm transition-all duration-500 ease-out "></div>
          <div className="font-lora-m text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out group-hover:scale-[1.01] origin-top-left">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de Horario
const ScheduleItem = ({ day, hours, liturgicalColor }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0 transition-all duration-500 hover:bg-gray-50/50 px-2 rounded">
      <span className={`font-cinzel-m text-base ${liturgicalColor}`}>{day}</span>
      <span className="font-lora-m text-gray-700">{hours}</span>
    </div>
  );
};

export default function Contact() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const liturgicalColor = useLiturgicalColor();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);

      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <div className="min-h-screen bg-white">
      
      <Navbar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        liturgicalColor={liturgicalColor}
        noHero={false}
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        liturgicalColor={liturgicalColor}
      />
      
      {/* Espaciador para el navbar */}
      <div className="h-0"></div>
      
      {/* Hero Section con imagen de fondo */}
      <section className="relative pt-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 h-full">
          <img 
            src={ParoquiaCielo} 
            alt="Parroquia El Calvario" 
            className="w-full h-full object-cover object-[50%_40%]"
            style={{ objectFit: 'cover', objectPosition: '50% 40%' }}
          />
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        {/* Contenido */}
        <div className="relative max-w-7xl mx-auto py-24 sm:py-32 px-4">
          <div className="text-center opacity-0 animate-fade-in-down duration-800">
            <h1 className="font-cinzel-b text-4xl sm:text-5xl md:text-6xl mb-6 text-white drop-shadow-2xl">
              Información de Contacto
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="mx-6 w-3 h-3 rounded-full bg-white/80 shadow-lg"></div>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
            <p className="font-cormorant-b text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Estamos aquí para servirle y acompañarle en su camino de fe
            </p>
          </div>
        </div>
      </section>

      {/* Sección de texto informativo con imagen */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Texto informativo - Izquierda */}
            <div className="opacity-0 animate-fade-in-up delay-200 duration-800">
              <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
                <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestra parroquia está comprometida con atender a todas las personas que deseen celebrar misas, especialmente misas de difuntos, y recibir los sacramentos. Le invitamos a ponerse en contacto con nosotros para coordinar cualquier servicio religioso.
                </p>
                <p className="font-lora-m text-lg text-gray-700 leading-relaxed">
                  <strong className={`font-lora-b ${liturgicalColor}`}>Importante:</strong> La disponibilidad puede variar según el horario de atención de la oficina parroquial y las actividades litúrgicas programadas. Le recomendamos llamar con anticipación para confirmar la disponibilidad y coordinar los detalles de su solicitud.
                </p>
              </div>
            </div>

            {/* Imagen Cristo Negro - Derecha */}
             <div className="opacity-0 animate-fade-in-up delay-300 duration-800 flex items-center justify-center">
              <div className="relative group overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 w-full max-w-md">
                <img 
                  src={CristoNegroF} 
                  alt="Cristo Negro" 
                  className="w-full h-[350px] md:h-[400px] object-fit transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Sección de Información de Contacto */}
      <section id='contact' className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid de información */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Teléfono */}
            <InfoCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Teléfono"
              content={
                <>
                  <p className="mb-2"><strong>Oficina Parroquial:</strong></p>
                  <p className="text-lg font-lora-b text-gray-900">+503 2382-1950</p>
                  <p className="mt-2 text-sm text-gray-600">Disponible en horario de oficina</p>
                </>
              }
              delay="200"
              liturgicalColor={liturgicalColor}
            />
            
            {/* Email */}
            <InfoCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Correo Electrónico"
              content={
                <>
                  <p className="mb-2"><strong>Para consultas generales:</strong></p>
                  <p className="text-lg font-lora-b text-gray-900 break-words">parroquiaelcalvariosuchitoto@gmail.com</p>
                  <p className="mt-2 text-sm text-gray-600">Responderemos a la brevedad posible</p>
                </>
              }
              delay="300"
              liturgicalColor={liturgicalColor}
            />
            
            {/* Dirección */}
            <InfoCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Dirección"
              content={
                <>
                  <p className="text-lg font-lora-m text-gray-900 leading-relaxed">
                    Parroquia El Calvario, C. El Calvario 39,<br />
                    Suchitoto, Cuscatlán<br />
                    El Salvador
                  </p>
                  <p className="mt-2 text-sm text-gray-600">Frente a Funeraria La Resurección</p>
                </>
              }
              delay="400"
              liturgicalColor={liturgicalColor}
            />
            
            {/* Horario de Oficina */}
            <InfoCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Horario de Atención de la Oficina Parroquial"
              content={
                <div className="space-y-1">
                  <ScheduleItem day="Lunes - Viernes" hours="8:00 AM - 12:00 PM" liturgicalColor={liturgicalColor} />
                  <ScheduleItem day="Sábado y Domingo" hours="Cerrado" liturgicalColor={liturgicalColor} />
                </div>
              }
              delay="500"
              liturgicalColor={liturgicalColor}
            />
            
          </div>
          
        </div>
      </section>

      {/* Imagen "Un Lugar de Encuentro" después de las cards */}
      <section className="relative bg-white py-9 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="opacity-0 animate-fade-scale-up delay-300 duration-800">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              {/* Imagen con overlay gradiente */}
              <div className="relative h-80 md:h-96">
                <img 
                  src={ParoquiaCieloFull} 
                  alt="Parroquia El Calvario" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              </div>
              
              {/* Contenido superpuesto */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-8 md:px-16">
                  <h3 className="font-cinzel-b text-3xl md:text-4xl text-white mb-4 drop-shadow-lg">
                    Un Lugar de Encuentro
                  </h3>
                  <p className="font-lora-m text-lg text-white/90 leading-relaxed">
                    Nuestra parroquia es más que un edificio, es el hogar espiritual de nuestra comunidad donde todos son bienvenidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Mapa */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Título de sección */}
          <div className="text-center mb-12 opacity-0 animate-fade-in-down duration-800">
            <h2 className={`font-cinzel-b text-3xl sm:text-4xl md:text-5xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
              Ubicación
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
              <div className="mx-4 w-2 h-2 rounded-full bg-gray-400 shadow-md"></div>
              <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gray-300 to-transparent shadow-sm"></div>
            </div>
            <p className="font-cormorant-b text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto">
              Encuéntranos fácilmente en el corazón de la comunidad
            </p>
          </div>
          
          {/* Contenedor del Mapa */}
          <div id='mapa' className=" opacity-0 animate-fade-scale-up delay-200 duration-800">
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.8473424891604!2d-89.02831460000002!3d13.9335984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f636a1792667cab%3A0xe5f142c7ab746e55!2sParroquia%20El%20Calvario!5e1!3m2!1ses!2ssv!4v1765579193781!5m2!1ses!2ssv"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Botón para abrir en Google Maps */}
            <div className="text-center mt-8">
              <a
                href="https://maps.app.goo.gl/V5jkQku1kmRGX5j27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-cormorant-b text-lg transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir en Google Maps
              </a>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Sección de Llamado a la Acción con imagen */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Imagen Campana Mañana - Izquierda */}
            <div className="opacity-0 animate-fade-in-up delay-200 duration-800 order-2 md:order-1 flex items-center justify-center">
              <div className="relative group overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 w-full max-w-md">
                <img 
                  src={CampanaManianaF} 
                  alt="Campana de la Parroquia" 
                  className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Cuadro de información - Derecha */}
            <div className="opacity-0 animate-fade-in-up delay-300 duration-800 order-1 md:order-2">
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
                <h3 className={`font-cinzel-b text-2xl sm:text-3xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
                  ¿Necesita más información?
                </h3>
                <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-8">
                  No dude en contactarnos. Estamos aquí para ayudarle y responder todas sus preguntas sobre nuestros servicios parroquiales, sacramentos, y actividades comunitarias.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+50323821950"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-cormorant-b text-lg transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Llamar Ahora
                  </a>
                  <a
                    href="mailto:parroquiaelcalvariosuchitoto@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-full font-cormorant-b text-lg transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-gray-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Enviar Correo
                  </a>
                </div>
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