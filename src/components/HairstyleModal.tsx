import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, Clock, Scissors, Star, Shield, Heart } from 'lucide-react';
import { Hairstyle } from '../types';
import { Link } from 'react-router-dom';

interface HairstyleModalProps {
  isOpen: boolean;
  onClose: () => void;
  hairstyle: Hairstyle | null;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalHairstyles: number;
}

const HairstyleModal: React.FC<HairstyleModalProps> = ({
  isOpen,
  onClose,
  hairstyle,
  onNext,
  onPrev,
  currentIndex,
  totalHairstyles
}) => {

  if (!hairstyle) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Boutons de fermeture et navigation */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button
                onClick={onPrev}
                className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={onNext}
                className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
              <button
                onClick={onClose}
                className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-300 shadow-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Indicateur de progression */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentIndex} / {totalHairstyles}
            </div>

            {/* Section image */}
            <div className="lg:w-1/2 relative">
              <img
                src={hairstyle.image}
                alt={hairstyle.name}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                {hairstyle.category}
              </div>
            </div>

            {/* Section contenu */}
            <div className="lg:w-1/2 p-8 overflow-y-auto">
              <div className="space-y-6">
                {/* En-tête */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                    {hairstyle.name}
                  </h2>
                  {hairstyle.description && (
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {hairstyle.description}
                    </p>
                  )}
                </div>

                {/* Informations détaillées */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Durée */}
                  <div className="bg-blue-50 p-4 rounded-2xl border border-blue-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="text-blue-600" size={24} />
                      <div>
                        <div className="font-semibold text-blue-800">Durée</div>
                        <div className="text-2xl font-bold text-blue-900">{hairstyle.duration}</div>
                      </div>
                    </div>
                    <div className="text-sm text-blue-700">Temps moyen de réalisation</div>
                  </div>

                  {/* Prix */}
                  {hairstyle.price && (
                    <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                      <div className="flex items-center space-x-3 mb-2">
                        <Star className="text-green-600" size={24} />
                        <div>
                          <div className="font-semibold text-green-800">Prix</div>
                          <div className="text-2xl font-bold text-green-900">
                            {hairstyle.price.toLocaleString()} FCFA
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-green-700">À partir de</div>
                    </div>
                  )}
                </div>

                {/* Caractéristiques de la coiffure */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary mb-4 flex items-center">
                    <Scissors className="mr-2 text-primary" size={20} />
                    Caractéristiques
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                      <Shield size={18} className="text-primary flex-shrink-0" />
                      <span>Technique professionnelle</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                      <Heart size={18} className="text-primary flex-shrink-0" />
                      <span>Soins naturels inclus</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                      <Star size={18} className="text-primary flex-shrink-0" />
                      <span>Expertise certifiée</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700 p-3 bg-gray-50 rounded-xl">
                      <Clock size={18} className="text-primary flex-shrink-0" />
                      <span>Résultat durable</span>
                    </div>
                  </div>
                </div>

                {/* Conseils d'entretien */}
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                    <Star className="mr-2" size={18} />
                    Conseils d'entretien
                  </h4>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li>• Utilisez des produits naturels pour préserver la coiffure</li>
                    <li>• Évitez les expositions prolongées au soleil</li>
                    <li>• Brossage doux recommandé</li>
                    <li>• Consultation d'entretien conseillée après 2 semaines</li>
                  </ul>
                </div>

                {/* Boutons d'action */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/appointment"
                    state={{ selectedHairstyle: hairstyle.name }}
                    className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <Calendar size={20} />
                    <span>Prendre Rendez-vous</span>
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <span>Nous Contacter</span>
                    <ChevronRight size={20} />
                  </Link>
                </div>

                {/* Note importante */}
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                  <p className="text-yellow-800 text-sm text-center">
                    💡 <strong>Service à domicile disponible</strong> - Nous nous déplaçons chez vous pour plus de confort !
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HairstyleModal;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight, Calendar, Clock, Scissors, Star, Shield, Heart, Sparkles, MapPin, Users } from 'lucide-react';
// import { Hairstyle } from '../types';
// import { Link } from 'react-router-dom';

// interface HairstyleModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   hairstyle: Hairstyle | null;
//   onNext: () => void;
//   onPrev: () => void;
//   currentIndex: number;
//   totalHairstyles: number;
// }

// const HairstyleModal: React.FC<HairstyleModalProps> = ({
//   isOpen,
//   onClose,
//   hairstyle,
//   onNext,
//   onPrev,
//   currentIndex,
//   totalHairstyles
// }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Gestion des animations d'entrée/sortie
//   useEffect(() => {
//     if (isOpen) {
//       setIsVisible(true);
//     }
//   }, [isOpen]);

//   const handleClose = () => {
//     setIsVisible(false);
//     setTimeout(onClose, 400);
//   };

//   if (!hairstyle) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isVisible ? 1 : 0 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4, ease: "easeInOut" }}
//           className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 backdrop-blur-xl z-50 flex items-center justify-center p-4"
//           onClick={handleClose}
//         >
//           {/* Effets de particules lumineuses en arrière-plan */}
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full blur-sm animate-pulse"></div>
//             <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-blue-400 rounded-full blur-sm animate-pulse delay-300"></div>
//             <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full blur-sm animate-pulse delay-700"></div>
//           </div>

//           <motion.div
//             initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: 10 }}
//             animate={{ 
//               scale: isVisible ? 1 : 0.8, 
//               opacity: isVisible ? 1 : 0, 
//               y: isVisible ? 0 : 50,
//               rotateX: isVisible ? 0 : 10
//             }}
//             exit={{ scale: 0.8, opacity: 0, y: 50, rotateX: 10 }}
//             transition={{ 
//               type: "spring", 
//               damping: 25, 
//               stiffness: 300,
//               duration: 0.5
//             }}
//             className="bg-gray-800/90 backdrop-blur-2xl rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-gray-700/50 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Effet de brillance sur les bords */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>

//             {/* Bouton de fermeture */}
//             <motion.button
//               whileHover={{ scale: 1.1, rotate: 90 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={handleClose}
//               className="absolute top-6 right-6 z-20 bg-gray-700/80 backdrop-blur-sm rounded-full p-3 hover:bg-red-500/20 transition-all duration-300 shadow-2xl border border-gray-600/50 group"
//             >
//               <X size={20} className="text-gray-300 group-hover:text-white transition-colors" />
//             </motion.button>

//             {/* Navigation entre coiffures */}
//             <div className="absolute top-6 left-6 z-20 flex gap-2">
//               <motion.button
//                 whileHover={{ scale: 1.1, x: -2 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={onPrev}
//                 className="bg-gray-700/80 backdrop-blur-sm rounded-full p-3 hover:bg-primary/20 transition-all duration-300 shadow-2xl border border-gray-600/50 group"
//               >
//                 <ChevronLeft size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.1, x: 2 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={onNext}
//                 className="bg-gray-700/80 backdrop-blur-sm rounded-full p-3 hover:bg-primary/20 transition-all duration-300 shadow-2xl border border-gray-600/50 group"
//               >
//                 <ChevronRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
//               </motion.button>
//             </div>

//             {/* Indicateur de progression */}
//             <motion.div 
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.2 }}
//               className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 bg-gray-700/80 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm font-semibold shadow-2xl border border-gray-600/50"
//             >
//               {currentIndex} sur {totalHairstyles}
//             </motion.div>

//             {/* Section image */}
//             <div className="lg:w-1/2 relative bg-gradient-to-br from-gray-900 to-gray-800">
//               <div className="relative h-80 lg:h-full overflow-hidden">
//                 <motion.img
//                   initial={{ scale: 1.1, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, ease: "easeOut" }}
//                   src={hairstyle.image}
//                   alt={hairstyle.name}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                
//                 {/* Badge de catégorie */}
//                 <motion.div 
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl backdrop-blur-sm border border-primary/30"
//                 >
//                   {hairstyle.category}
//                 </motion.div>

//                 {/* Overlay d'informations */}
//                 <motion.div 
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="absolute bottom-4 left-4 right-4 text-white"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full">
//                       <Clock size={16} className="text-primary" />
//                       <span className="text-sm font-medium">{hairstyle.duration}</span>
//                     </div>
//                     {hairstyle.price && (
//                       <div className="bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
//                         <div className="text-lg font-bold">{hairstyle.price.toLocaleString()} FCFA</div>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               </div>
//             </div>

//             {/* Section contenu */}
//             <motion.div 
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="lg:w-1/2 p-8 overflow-y-auto"
//             >
//               <div className="space-y-8">
//                 {/* En-tête */}
//                 <div>
//                   <motion.h2 
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                     className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
//                   >
//                     {hairstyle.name}
//                   </motion.h2>
//                   {hairstyle.description && (
//                     <motion.p 
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.4 }}
//                       className="text-lg text-gray-300 leading-relaxed"
//                     >
//                       {hairstyle.description}
//                     </motion.p>
//                   )}
//                 </div>

//                 {/* Informations détaillées */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="grid grid-cols-1 sm:grid-cols-2 gap-6"
//                 >
//                   {/* Durée */}
//                   <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
//                     <div className="flex items-center space-x-3 mb-2">
//                       <Clock className="text-blue-400" size={24} />
//                       <div>
//                         <div className="font-semibold text-blue-300">Durée estimée</div>
//                         <div className="text-2xl font-bold text-white">{hairstyle.duration}</div>
//                       </div>
//                     </div>
//                     <div className="text-sm text-blue-400">Temps moyen de réalisation</div>
//                   </div>

//                   {/* Prix */}
//                   {hairstyle.price && (
//                     <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-2xl border border-green-500/20 backdrop-blur-sm">
//                       <div className="flex items-center space-x-3 mb-2">
//                         <Star className="text-green-400" size={24} />
//                         <div>
//                           <div className="font-semibold text-green-300">Investissement</div>
//                           <div className="text-2xl font-bold text-white">
//                             {hairstyle.price.toLocaleString()} FCFA
//                           </div>
//                         </div>
//                       </div>
//                       <div className="text-sm text-green-400">À partir de</div>
//                     </div>
//                   )}
//                 </motion.div>

//                 {/* Caractéristiques de la coiffure */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.6 }}
//                 >
//                   <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
//                     <Sparkles className="mr-2 text-primary" size={20} />
//                     Nos Garanties
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <motion.div 
//                       whileHover={{ scale: 1.02, x: 5 }}
//                       className="flex items-center space-x-3 text-gray-300 p-3 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/50 hover:border-primary/30 transition-all duration-300"
//                     >
//                       <Shield size={18} className="text-primary flex-shrink-0" />
//                       <span className="text-sm">Technique professionnelle</span>
//                     </motion.div>
//                     <motion.div 
//                       whileHover={{ scale: 1.02, x: 5 }}
//                       className="flex items-center space-x-3 text-gray-300 p-3 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/50 hover:border-primary/30 transition-all duration-300"
//                     >
//                       <Heart size={18} className="text-primary flex-shrink-0" />
//                       <span className="text-sm">Soins naturels inclus</span>
//                     </motion.div>
//                     <motion.div 
//                       whileHover={{ scale: 1.02, x: 5 }}
//                       className="flex items-center space-x-3 text-gray-300 p-3 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/50 hover:border-primary/30 transition-all duration-300"
//                     >
//                       <Star size={18} className="text-primary flex-shrink-0" />
//                       <span className="text-sm">Expertise certifiée</span>
//                     </motion.div>
//                     <motion.div 
//                       whileHover={{ scale: 1.02, x: 5 }}
//                       className="flex items-center space-x-3 text-gray-300 p-3 bg-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/50 hover:border-primary/30 transition-all duration-300"
//                     >
//                       <Users size={18} className="text-primary flex-shrink-0" />
//                       <span className="text-sm">Conseil personnalisé</span>
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 {/* Conseils d'entretien */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
//                 >
//                   <h4 className="font-semibold text-purple-300 mb-3 flex items-center">
//                     <Star className="mr-2 text-purple-400" size={18} />
//                     Conseils d'entretien expert
//                   </h4>
//                   <ul className="text-purple-200 space-y-2 text-sm">
//                     <li className="flex items-center space-x-2">
//                       <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                       <span>Utilisez des produits naturels pour préserver la coiffure</span>
//                     </li>
//                     <li className="flex items-center space-x-2">
//                       <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                       <span>Évitez les expositions prolongées au soleil</span>
//                     </li>
//                     <li className="flex items-center space-x-2">
//                       <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                       <span>Brossage doux recommandé pour maintenir la forme</span>
//                     </li>
//                     <li className="flex items-center space-x-2">
//                       <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
//                       <span>Consultation d'entretien conseillée après 2 semaines</span>
//                     </li>
//                   </ul>
//                 </motion.div>

//                 {/* Boutons d'action */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   className="flex flex-col sm:flex-row gap-4"
//                 >
//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
//                     <Link
//                       to="/appointment"
//                       state={{ selectedHairstyle: hairstyle.name }}
//                       className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm"
//                     >
//                       <Calendar size={20} className="group-hover:scale-110 transition-transform" />
//                       <span>Prendre Rendez-vous</span>
//                     </Link>
//                   </motion.div>
                  
//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
//                     <Link
//                       to="/contact"
//                       className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm"
//                     >
//                       <span>Nous Contacter</span>
//                       <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                   </motion.div>
//                 </motion.div>

//                 {/* Note importante */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.9 }}
//                   className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-4 rounded-xl border border-amber-500/20 backdrop-blur-sm"
//                 >
//                   <p className="text-amber-300 text-sm text-center flex items-center justify-center space-x-2">
//                     <MapPin size={16} className="text-amber-400" />
//                     <span><strong>Service à domicile disponible</strong> - Nous nous déplaçons chez vous pour plus de confort !</span>
//                   </p>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default HairstyleModal;