import { Home, ScrollText , MapPin, HandCoins , Phone, ChevronRight, BookOpenText, X } from 'lucide-react';
import { PiHandsPraying } from "react-icons/pi";
import { animations } from '@/utils/animations';
import { lazy } from 'react';

const Sidebar = ({ isOpen, setIsOpen, liturgicalColor }) => {
  const navItems = [
    { icon: Home, label: 'Inicio', href: '#inicio' },
    { icon: Phone, label: 'Contacto', href: '#contacto' },
    { icon: ScrollText, label: 'Sacramentos', href: '#sacramentos'},
    { icon: PiHandsPraying, label: 'Oraciones', href: '#oraciones'},
    { icon: MapPin, label: 'Ubicacion', href: '#comunidad' },
    { icon: HandCoins , label: 'Donar', href: '#contacto' },
  ];
  
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className={`font-cinzel-b text-2xl ${liturgicalColor}`}>
              Menú
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className={`${liturgicalColor} p-2 rounded-lg hover:bg-gray-100 transition-colors`}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 p-4 rounded-lg font-cormorant-m text-lg text-gray-800 hover:bg-gray-50 transition-all duration-300 group ${animations.hoverLift}`}
                    >
                      <Icon className={`${liturgicalColor} transition-colors`} size={22} />
                      <span className="flex-1">{item.label}</span>
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <div className="p-6 border-t border-gray-100">
            <p className="font-lora-r text-sm text-gray-600 text-center">
              "Donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos"
              <span className="block mt-2 font-lora-m text-gray-800">
                Mateo 18:20
              </span>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;