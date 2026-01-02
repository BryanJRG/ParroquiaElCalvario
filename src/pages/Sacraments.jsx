import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';
import JardinI from '@/assets/images/gallery/JardinCampana.jpg';
import ParoquiaCielo from '@/assets/images/gallery/ParroquiaCielo.jpg';
import VirgenConJesus from '@/assets/images/gallery/VirgenConJesus.jpg';
import CristoNegro from '@/assets/images/gallery/CristoNegroI.jpg';
import Jesus from '@/assets/images/gallery/JesusCrucificadoGrande.jpg';
import useLiturgicalColor from '@/hooks/useLiturgicalColor';

// Componente de Card de Sacramento
const SacramentCard = ({ title, description, requirements, image, delay = '0', liturgicalColor }) => {
  return (
    <div className={`group bg-gradient-to-br from-white to-gray-50/50 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:from-gray-50/50 hover:to-white opacity-0 animate-fade-scale-up delay-${delay}`}>
      
      {/* Imagen del sacramento */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t  to-transparent"></div>
        
        {/* Título superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-cinzel-b text-2xl text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Contenido del sacramento */}
      <div className="p-8">
        <div className="w-16 h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-5 shadow-sm transition-all duration-500 ease-out group-hover:w-24"></div>
        
        <p className="font-lora-m text-base text-gray-700 leading-relaxed mb-6 transition-all duration-500 ease-out group-hover:scale-[1.01] origin-top-left">
          {description}
        </p>
        
        {/* Requisitos */}
        {requirements && requirements.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <p className="font-cinzel-m text-xs uppercase tracking-wide text-gray-500 mb-3">
              Requisitos:
            </p>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-lora-m text-sm text-gray-500 leading-relaxed">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Sacraments() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const liturgicalColor = useLiturgicalColor();
  
  const sacraments = [
    {
      title: "Bautismo",
      description: "El Bautismo es el primer sacramento de iniciación cristiana, por el cual nacemos a la vida de la gracia y nos convertimos en hijos de Dios y miembros de la Iglesia. Es la puerta de entrada a todos los demás sacramentos.",
      requirements: [
        "Presentar acta de nacimiento original",
        "Certificados de los padrinos (deben ser católicos confirmados)",
        "Plática prebautismal para padres y padrinos",
        "Coordinar fecha con la oficina parroquial"
      ],
      image: VirgenConJesus
    },
    {
      title: "Confirmación",
      description: "La Confirmación perfecciona la gracia bautismal y nos fortalece con los dones del Espíritu Santo para vivir plenamente nuestra fe cristiana y dar testimonio de Cristo en el mundo.",
      requirements: [
        "Haber recibido el Bautismo y Primera Comunión",
        "Certificado de Bautismo",
        "Asistir al curso de preparación (duración aproximada de 1 año)",
        "Elegir un padrino o madrina confirmado",
        "Carta de motivación personal"
      ],
      image: CristoNegro
    },
    {
      title: "Primera Comunión",
      description: "La Eucaristía es el sacramento en el cual Cristo se hace presente bajo las especies del pan y del vino. Es el centro y cumbre de toda la vida cristiana, donde recibimos el Cuerpo y la Sangre de Cristo.",
      requirements: [
        "Estar bautizado en la fe católica",
        "Asistir al curso de catequesis (duración de 2 años)",
        "Participar en las misas dominicales regularmente",
        "Presentar certificado de bautismo",
        "Asistir a retiro espiritual previo"
      ],
      image: Jesus
    },
    {
      title: "Reconciliación (Confesión)",
      description: "El sacramento de la Reconciliación o Penitencia nos permite recibir el perdón de Dios por nuestros pecados cometidos después del Bautismo, restaurando nuestra relación con Él y con la comunidad.",
      requirements: [
        "Examen de conciencia previo",
        "Disposición sincera de arrepentimiento",
        "Propósito de enmienda",
        "Disponible en horarios establecidos (consultar en oficina)"
      ],
      image: ParoquiaCielo
    },
    {
      title: "Matrimonio",
      description: "El Matrimonio es la alianza por la cual un hombre y una mujer constituyen una comunidad de vida y amor. Es signo del amor de Cristo por su Iglesia y fuente de gracia para los esposos.",
      requirements: [
        "Certificados de bautismo de ambos contrayentes",
        "Actas de nacimiento",
        "Curso prematrimonial completo",
        "Presentar testigos (padrinos)",
        "Solicitar fecha con mínimo 6 meses de anticipación",
        "Entrevista con el párroco"
      ],
      image: CristoNegro
    }
  ];
  
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
      
      {/* Hero Section con imagen de fondo */}
      <section className="relative pt-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 h-full">
          <img 
            src={JardinI} 
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
              Los Sacramentos
            </h1>
            <div className="flex items-center justify-center mb-8">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <div className="mx-6 w-3 h-3 rounded-full bg-white/80 shadow-lg"></div>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
            <p className="font-cormorant-b text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Signos visibles del amor de Dios que nos acompañan en nuestro camino de fe
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Información General */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="opacity-0 animate-fade-in-up delay-200 duration-800">
            <div className="bg-gradient-to-br from-white to-gray-50/50 p-8 md:p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
              
              <h2 className={`font-cinzel-b text-2xl sm:text-3xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
                Sacramentos Disponibles en Nuestra Parroquia
              </h2>
              
              <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-gray-200 mb-6 shadow-sm"></div>
              
              <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-6">
                Nuestra parroquia celebra cinco de los siete sacramentos de la Iglesia Católica. Los sacramentos son signos sensibles y eficaces de la gracia, instituidos por Cristo y confiados a la Iglesia, por los cuales se nos otorga la vida divina.
              </p>
              
              <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-6">
                Ofrecemos el Bautismo, la Confirmación, la Eucaristía, la Reconciliación y el Matrimonio. Estos sacramentos acompañan las etapas importantes de la vida del cristiano: dan nacimiento y crecimiento, curación y misión a la vida de fe.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="font-lora-m text-base text-gray-700 leading-relaxed">
                  <strong className={`font-lora-b ${liturgicalColor}`}>Importante:</strong> Para solicitar cualquier sacramento, le invitamos a acercarse a la oficina parroquial donde con gusto le atenderemos y orientaremos sobre los requisitos específicos y fechas disponibles. Cada sacramento requiere preparación espiritual y documental.
                </p>
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

      {/* Sección de Cards de Sacramentos */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid de sacramentos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sacraments.map((sacrament, index) => (
              <SacramentCard
                key={index}
                title={sacrament.title}
                description={sacrament.description}
                requirements={sacrament.requirements}
                image={sacrament.image}
                delay={((index % 3) * 100 + 200).toString()}
                liturgicalColor={liturgicalColor}
              />
            ))}
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

      {/* Sección de Llamado a la Acción */}
      <section className="relative bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in-up delay-300 duration-800">
          <div className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-200/80">
            
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mx-auto mb-6 shadow-lg`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className={`font-cinzel-b text-2xl sm:text-3xl mb-6 ${liturgicalColor} drop-shadow-sm`}>
              ¿Desea Recibir un Sacramento?
            </h3>
            
            <p className="font-lora-m text-lg text-gray-700 leading-relaxed mb-8">
              Estamos aquí para acompañarle en su camino de fe. Acérquese a nuestra oficina parroquial para iniciar el proceso de preparación para cualquier sacramento. Nuestro equipo pastoral le guiará con amor y dedicación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-cormorant-b text-lg transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contactar Oficina
              </a>
              <a
                href="/horarios"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-800 rounded-full font-cormorant-b text-lg transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-gray-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Horarios
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer spacing */}
      <div className="h-20"></div>
      
    </div>
  );
}