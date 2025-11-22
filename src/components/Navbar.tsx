// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Phone } from 'lucide-react';
// import { siteConfig } from '../data/siteData';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: 'Accueil', href: '/' },
//     { name: 'Produits', href: '/products' },
//     { name: 'Coiffures', href: '/hairstyles' },
//     { name: 'Rendez-vous', href: '/appointment' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const mobileMenuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3
//       }
//     },
//     open: {
//       opacity: 1,
//       height: 'auto',
//       transition: {
//         duration: 0.3
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="text-2xl font-bold text-secondary"
//               >
//                 {siteConfig.salonName}
//               </motion.div>
//             </div>

//             {/* Menu Desktop */}
//             <div className="hidden md:flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//               <motion.a
//                 href="/appointment"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-primary text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-all duration-200"
//               >
//                 <Phone size={16} />
//                 <span>Rendez-vous</span>
//               </motion.a>
//             </div>

//             {/* Menu Burger Mobile */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-gray-700 hover:text-primary transition-colors"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Menu Mobile */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               variants={mobileMenuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="md:hidden bg-white border-t"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1">
//                 {navItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>

//       {/* Bouton sticky mobile */}
//       <motion.a
//         href="/appointment"
//         className="md:hidden fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <Phone size={24} />
//       </motion.a>
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scissors, Sparkles, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { useLocation, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Produits', href: '/products' },
    { name: 'Coiffures', href: '/hairstyles' },
    { name: 'Rendez-vous', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
  ];

  // Effet de scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const phonePulse = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo avec animation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.div
                  animate={pulseAnimation}
                  className="relative"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Scissors className="text-white" size={24} />
                  </div>
                  <motion.div
                    animate={floatingAnimation}
                    className="absolute -top-1 -right-1"
                  >
                    <Sparkles className="text-yellow-400" size={16} />
                  </motion.div>
                </motion.div>
                <div>
                  <div className="text-xl font-black text-secondary leading-tight">
                    {siteConfig.salonName}
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Expert Locks & Tresses</div>
                </div>
              </Link>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onHoverStart={() => setActiveHover(item.name)}
                  onHoverEnd={() => setActiveHover(null)}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    className={`relative px-6 py-3 font-semibold transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    
                    {/* Indicateur de page active */}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35
                        }}
                      />
                    )}

                    {/* Effet de hover */}
                    <AnimatePresence>
                      {activeHover === item.name && !isActive(item.href) && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Menu Burger Mobile */}
            <div className="lg:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-3 text-gray-700 hover:text-primary transition-colors bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 }
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                        isActive(item.href)
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-gray-50 text-gray-700 hover:bg-primary hover:text-white'
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative z-10 flex items-center"
                      >
                        {item.name}
                        {isActive(item.href) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-2 w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.div>
                      
                      {/* Animation de fond */}
                      {!isActive(item.href) && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                          whileHover={{ opacity: 1 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Espace pour la navbar fixe */}
      <div className="h-20" />

      {/* Bouton flottant téléphone pour rendez-vous rapide */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <motion.div
          animate={floatingAnimation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to="/appointment"
            className="bg-gradient-to-r from-primary to-accent text-white p-5 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group"
          >
            {/* Effet de pulsation */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icone avec animation */}
            <motion.div
              animate={phonePulse}
            >
              <Phone size={24} className="relative z-10" />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-16 bg-black/90 text-white px-4 py-2 rounded-xl whitespace-nowrap text-sm font-semibold backdrop-blur-sm"
            >
              Rendez-vous rapide
              <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45" />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animation de transition entre les pages */}
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        />
      </AnimatePresence> */}
    </>
  );
};

export default Navbar;