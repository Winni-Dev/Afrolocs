import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ShoppingCart, Star, Truck, Shield } from 'lucide-react';
import { Product } from '../types';
import WhatsAppButton from './WhatsAppButton';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  totalProducts: number;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  onNext,
  onPrev,
  currentIndex,
  totalProducts
}) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    address: '',
    date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!product) return null;

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
              {currentIndex} / {totalProducts}
            </div>

            {/* Section image */}
            <div className="lg:w-1/2 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                {product.category}
              </div>
            </div>

            {/* Section contenu */}
            <div className="lg:w-1/2 p-8 overflow-y-auto">
              <div className="space-y-6">
                {/* En-tête */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                    {product.name}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Prix */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-2xl border border-primary/20">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {product.price.toLocaleString()} FCFA
                  </div>
                  <div className="text-gray-600">Prix unitaire</div>
                </div>

                {/* Features */}
                {product.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Caractéristiques</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-700">
                          <Star size={16} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Avantages */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                    <Truck className="mx-auto text-green-600 mb-2" size={24} />
                    <div className="text-sm font-semibold text-green-800">Livraison rapide</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <Shield className="mx-auto text-blue-600 mb-2" size={24} />
                    <div className="text-sm font-semibold text-blue-800">100% Naturel</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <Star className="mx-auto text-purple-600 mb-2" size={24} />
                    <div className="text-sm font-semibold text-purple-800">Qualité premium</div>
                  </div>
                </div>

                {/* Formulaire de commande */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary">Commander ce produit</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="Votre numéro"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse de livraison *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
                      placeholder="Votre adresse complète"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900"
                    />
                  </div>

                  {/* Bouton de commande WhatsApp */}
                  <WhatsAppButton
                    productName={product.name}
                    isOrder={true}
                    formData={formData}
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                  >
                    <ShoppingCart size={20} />
                    <span>Commander sur WhatsApp</span>
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight, ShoppingCart, Star, Truck, Shield, Heart, Clock, CheckCircle, Sparkles } from 'lucide-react';
// import { Product } from '../types';
// import WhatsAppButton from './WhatsAppButton';

// interface ProductModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   product: Product | null;
//   onNext: () => void;
//   onPrev: () => void;
//   currentIndex: number;
//   totalProducts: number;
// }

// const ProductModal: React.FC<ProductModalProps> = ({
//   isOpen,
//   onClose,
//   product,
//   onNext,
//   onPrev,
//   currentIndex,
//   totalProducts
// }) => {
//   const [formData, setFormData] = React.useState({
//     fullName: '',
//     phone: '',
//     address: '',
//     date: ''
//   });

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

//   // Réinitialiser l'index d'image quand le produit change
//   useEffect(() => {
//     setCurrentImageIndex(0);
//   }, [product]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const nextImage = () => {
//     if (!product?.images) return;
//     setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
//   };

//   const prevImage = () => {
//     if (!product?.images) return;
//     setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
//   };

//   if (!product) return null;

//   const images = product.images || [product.image];

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

//             {/* Navigation entre produits */}
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
//               {currentIndex} sur {totalProducts}
//             </motion.div>

//             {/* Section image avec carousel amélioré */}
//             <div className="lg:w-1/2 relative bg-gradient-to-br from-gray-900 to-gray-800">
//               <div className="relative h-80 lg:h-full overflow-hidden">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentImageIndex}
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.9 }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                     className="w-full h-full"
//                   >
//                     <img
//                       src={images[currentImageIndex]}
//                       alt={product.name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Navigation images si multiples */}
//                 {images.length > 1 && (
//                   <>
//                     <motion.button
//                       whileHover={{ scale: 1.1, x: -2 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={prevImage}
//                       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 backdrop-blur-sm rounded-full p-3 hover:bg-primary/20 transition-all duration-300 shadow-2xl border border-gray-600/50 group"
//                     >
//                       <ChevronLeft size={20} className="text-gray-300 group-hover:text-primary" />
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.1, x: 2 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={nextImage}
//                       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 backdrop-blur-sm rounded-full p-3 hover:bg-primary/20 transition-all duration-300 shadow-2xl border border-gray-600/50 group"
//                     >
//                       <ChevronRight size={20} className="text-gray-300 group-hover:text-primary" />
//                     </motion.button>
//                   </>
//                 )}

//                 {/* Indicateurs de miniatures */}
//                 {images.length > 1 && (
//                   <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//                     {images.map((_, index) => (
//                       <motion.button
//                         key={index}
//                         whileHover={{ scale: 1.2 }}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                           index === currentImageIndex
//                             ? 'bg-primary scale-125 shadow-glow'
//                             : 'bg-gray-500/80 hover:bg-gray-400'
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 )}

//                 {/* Badge de catégorie */}
//                 <motion.div 
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl backdrop-blur-sm border border-primary/30"
//                 >
//                   {product.category}
//                 </motion.div>
//               </div>

//               {/* Miniatures si multiples images */}
//               {images.length > 1 && (
//                 <motion.div 
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="absolute bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm p-4 border-t border-gray-700/50"
//                 >
//                   <div className="flex gap-2 overflow-x-auto pb-2">
//                     {images.map((image, index) => (
//                       <motion.button
//                         key={index}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => setCurrentImageIndex(index)}
//                         className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
//                           index === currentImageIndex
//                             ? 'border-primary scale-110 shadow-glow'
//                             : 'border-gray-600 hover:border-gray-400'
//                         }`}
//                       >
//                         <img
//                           src={image}
//                           alt={`${product.name} ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                       </motion.button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </div>

//             {/* Section contenu */}
//             <motion.div 
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="lg:w-1/2 p-8 overflow-y-auto"
//             >
//               <div className="space-y-8">
//                 {/* En-tête avec favori */}
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <motion.h2 
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.3 }}
//                       className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
//                     >
//                       {product.name}
//                     </motion.h2>
//                     <motion.p 
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ delay: 0.4 }}
//                       className="text-lg text-gray-300 leading-relaxed"
//                     >
//                       {product.description}
//                     </motion.p>
//                   </div>
//                   <motion.button 
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="flex-shrink-0 ml-4 p-3 text-gray-400 hover:text-red-500 transition-colors duration-300 bg-gray-700/50 rounded-xl backdrop-blur-sm"
//                   >
//                     <Heart size={24} />
//                   </motion.button>
//                 </div>

//                 {/* Prix et stock */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                   className="bg-gradient-to-r from-gray-700/50 to-primary/20 p-6 rounded-2xl border border-gray-600/50 backdrop-blur-sm"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-4xl font-bold text-primary mb-1">
//                         {product.price.toLocaleString()} FCFA
//                       </div>
//                       <div className="text-gray-300 flex items-center gap-2">
//                         <CheckCircle size={16} className="text-green-400" />
//                         <span>En stock • Prêt à être livré</span>
//                       </div>
//                     </div>
//                     {product.rating && (
//                       <div className="text-right">
//                         <div className="flex items-center gap-1 text-amber-400">
//                           <Star size={20} className="fill-current" />
//                           <span className="font-bold text-lg">{product.rating}</span>
//                         </div>
//                         <div className="text-sm text-gray-400">Note clients</div>
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>

//                 {/* Caractéristiques */}
//                 {product.features && (
//                   <motion.div 
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.6 }}
//                     className="bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-6"
//                   >
//                     <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                       <Sparkles size={20} className="text-primary" />
//                       Caractéristiques principales
//                     </h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                       {product.features.map((feature, index) => (
//                         <motion.div 
//                           key={index}
//                           initial={{ x: -20, opacity: 0 }}
//                           animate={{ x: 0, opacity: 1 }}
//                           transition={{ delay: 0.7 + index * 0.1 }}
//                           className="flex items-center space-x-3 text-gray-300 p-2 rounded-lg hover:bg-gray-600/30 transition-colors"
//                         >
//                           <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
//                           <span className="text-sm">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* Avantages services */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.7 }}
//                   className="grid grid-cols-1 sm:grid-cols-3 gap-4"
//                 >
//                   <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 hover:shadow-glow transition-all duration-300">
//                     <Truck className="mx-auto text-green-400 mb-3" size={28} />
//                     <div className="font-semibold text-green-300 text-sm">Livraison 48h</div>
//                     <div className="text-green-400 text-xs">Gratuite dès 50.000 FCFA</div>
//                   </div>
//                   <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 hover:shadow-glow transition-all duration-300">
//                     <Shield className="mx-auto text-blue-400 mb-3" size={28} />
//                     <div className="font-semibold text-blue-300 text-sm">100% Naturel</div>
//                     <div className="text-blue-400 text-xs">Qualité certifiée</div>
//                   </div>
//                   <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-2xl border border-purple-500/20 hover:shadow-glow transition-all duration-300">
//                     <Clock className="mx-auto text-purple-400 mb-3" size={28} />
//                     <div className="font-semibold text-purple-300 text-sm">Support 7j/7</div>
//                     <div className="text-purple-400 text-xs">De 8h à 22h</div>
//                   </div>
//                 </motion.div>

//                 {/* Formulaire de commande */}
//                 <motion.div 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   className="space-y-6"
//                 >
//                   <h3 className="text-xl font-semibold text-white border-b border-gray-600/50 pb-2">
//                     Commander ce produit
//                   </h3>
                  
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         Nom complet *
//                       </label>
//                       <input
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
//                         placeholder="Votre nom complet"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-semibold text-gray-300 mb-2">
//                         Téléphone *
//                       </label>
//                       <input
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
//                         placeholder="Votre numéro"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-300 mb-2">
//                       Adresse de livraison *
//                     </label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
//                       placeholder="Votre adresse complète"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-semibold text-gray-300 mb-2">
//                       Date souhaitée *
//                     </label>
//                     <input
//                       type="date"
//                       name="date"
//                       value={formData.date}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-white backdrop-blur-sm"
//                     />
//                   </div>

//                   {/* Bouton de commande WhatsApp */}
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <WhatsAppButton
//                       productName={product.name}
//                       isOrder={true}
//                       formData={formData}
//                       className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm"
//                     >
//                       <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
//                       <span>Commander sur WhatsApp</span>
//                     </WhatsAppButton>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ProductModal;