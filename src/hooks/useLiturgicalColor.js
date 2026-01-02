import { useState, useEffect } from 'react';

const useLiturgicalColor = () => {
  const [colorClass, setColorClass] = useState('text-purple-700');
  
  useEffect(() => {
    const getLiturgicalSeason = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      
      // Adviento (aproximadamente del 1 al 24 de diciembre)
      if (month === 12 && day < 25) return 'violet';
      
      // Navidad (del 25 de diciembre al 6 de enero)
      if ((month === 12 && day >= 25) || (month === 1 && day <= 6)) return 'white';
      
      // Tiempo Ordinario (enero-febrero)
      if (month === 1 && day > 6) return 'green';
      if (month === 2 && day < 15) return 'green';
      
      // Cuaresma (aproximadamente febrero-marzo)
      if ((month === 2 && day >= 15) || (month === 3 && day < 20)) return 'purple';
      
      // Pascua (aproximadamente marzo-mayo)
      if ((month === 3 && day >= 20) || month === 4 || (month === 5 && day < 20)) return 'gold';
      
      // Tiempo Ordinario (resto del año)
      return 'green';
    };
    
    const colors = {
      violet: 'text-purple-700',
      white: 'text-slate-100',
      green: 'text-emerald-700',
      purple: 'text-purple-900',
      gold: 'text-yellow-600',
      red: 'text-red-600'
    };
    
    const season = getLiturgicalSeason();
    setColorClass(colors.gold);//colors[season]
  }, []);
  
  return colorClass;
};

export default useLiturgicalColor;