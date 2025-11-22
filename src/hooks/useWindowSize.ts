// import { useState, useEffect } from 'react';

// interface WindowSize {
//   width: number;
//   height: number;
// }

// export const useWindowSize = (): WindowSize => {
//   const [windowSize, setWindowSize] = useState<WindowSize>({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowSize;
// };


// import { useState, useEffect } from 'react';

// interface WindowSize {
//   width: number;
//   height: number;
// }

// export const useWindowSize = (): WindowSize => {
//   const [windowSize, setWindowSize] = useState<WindowSize>({
//     width: typeof window !== 'undefined' ? window.innerWidth : 0,
//     height: typeof window !== 'undefined' ? window.innerHeight : 0,
//   });

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);
    
//     // Appel initial
//     handleResize();

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowSize;
// };


import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // S'assurer que window est défini (compatibilité SSR)
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Définir la taille initiale
    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};