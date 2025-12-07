// import React from 'react';
// import { motion } from 'framer-motion';
// import { Clock, Calendar } from 'lucide-react';
// import { Hairstyle } from '../types';
// import WhatsAppButton from './WhatsAppButton';

// interface HairstyleCardProps {
//   hairstyle: Hairstyle;
// }

// const HairstyleCard: React.FC<HairstyleCardProps> = ({ hairstyle }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//     >
//       <div className="h-64 bg-gray-200 relative">
//         <img
//           src={hairstyle.image}
//           alt={hairstyle.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-4 right-4 bg-accent text-secondary px-3 py-1 rounded-full text-sm font-semibold">
//           {hairstyle.category}
//         </div>
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-secondary mb-3">{hairstyle.name}</h3>
        
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-2 text-gray-600">
//             <Clock size={18} />
//             <span>{hairstyle.duration}</span>
//           </div>
          
//           {hairstyle.price && (
//             <span className="text-2xl font-bold text-primary">
//               {hairstyle.price.toLocaleString()} FCFA
//             </span>
//           )}
//         </div>
        
//         <WhatsAppButton className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2">
//           <Calendar size={18} />
//           <span>Prendre Rendez-vous</span>
//         </WhatsAppButton>
//       </div>
//     </motion.div>
//   );
// };

// export default HairstyleCard;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Clock, Calendar, Sparkles } from 'lucide-react';
// import { Hairstyle } from '../types';
// import { Link } from 'react-router-dom';

// interface HairstyleCardProps {
//   hairstyle: Hairstyle;
// }

// const HairstyleCard: React.FC<HairstyleCardProps> = ({ hairstyle }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.02 }}
//       className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100"
//     >
//       {/* Image avec overlay gradient */}
//       <div className="h-72 bg-gray-200 relative overflow-hidden">
//         <img
//           src={hairstyle.image}
//           alt={hairstyle.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Badge de catégorie */}
//         <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//           {hairstyle.category}
//         </div>

//         {/* Overlay info au hover */}
//         <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <p className="text-sm font-light line-clamp-2">{hairstyle.description}</p>
//         </div>
//       </div>
      
//       {/* Contenu */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-4">
//           <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
//             {hairstyle.name}
//           </h3>
//           <Sparkles className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" size={18} />
//         </div>
        
//         {/* Informations durée et prix */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
//             <Clock size={16} className="text-primary" />
//             <span className="font-medium">{hairstyle.duration}</span>
//           </div>
          
//           {hairstyle.price && (
//             <div className="text-right">
//               <div className="text-2xl font-bold text-primary">
//                 {hairstyle.price.toLocaleString()} FCFA
//               </div>
//               <div className="text-xs text-gray-500">À partir de</div>
//             </div>
//           )}
//         </div>
        
//         {/* Bouton Prendre Rendez-vous */}
//         <Link
//           to="/appointment"
//           state={{ selectedHairstyle: hairstyle.name }}
//           className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 group/btn"
//         >
//           <Calendar size={20} className="group-hover/btn:scale-110 transition-transform" />
//           <span>Prendre Rendez-vous</span>
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default HairstyleCard;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { Clock, Eye, Sparkles, Calendar } from 'lucide-react';
// import { Hairstyle } from '../types';
// import { Link } from 'react-router-dom';

// interface HairstyleCardProps {
//   hairstyle: Hairstyle;
//   onClick?: () => void;
// }

// const HairstyleCard: React.FC<HairstyleCardProps> = ({ hairstyle, onClick }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.02 }}
//       className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 cursor-pointer"
//       onClick={onClick}
//     >
//       {/* Image avec overlay */}
//       <div className="h-72 bg-gray-200 relative overflow-hidden">
//         <img
//           src={hairstyle.image}
//           alt={hairstyle.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Badge de catégorie */}
//         <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//           {hairstyle.category}
//         </div>

//         {/* Overlay info au hover */}
//         <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-light">Cliquez pour voir les détails</p>
//             <Eye size={20} className="text-white" />
//           </div>
//         </div>
//       </div>
      
//       {/* Contenu */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1">
//             {hairstyle.name}
//           </h3>
//           <Sparkles className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1 ml-2" size={18} />
//         </div>

//         {hairstyle.description && (
//           <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
//             {hairstyle.description}
//           </p>
//         )}
        
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
//             <Clock size={16} className="text-primary" />
//             <span className="font-medium text-sm">{hairstyle.duration}</span>
//           </div>
          
//           {hairstyle.price && (
//             <div className="text-right">
//               <div className="text-2xl font-bold text-primary">
//                 {hairstyle.price.toLocaleString()} FCFA
//               </div>
//               <div className="text-xs text-gray-500">À partir de</div>
//             </div>
//           )}
//         </div>

//         {/* Bouton Prendre Rendez-vous */}
//         <Link
//           to="/appointment"
//           state={{ selectedHairstyle: hairstyle.name }}
//           className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <Calendar size={18} className="group-hover/btn:scale-110 transition-transform" />
//           <span>Prendre Rendez-vous</span>
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default HairstyleCard;



import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, Sparkles, Calendar } from 'lucide-react';
import { Hairstyle } from '../types';
import { Link } from 'react-router-dom';

interface HairstyleCardProps {
  hairstyle: Hairstyle;
  onClick?: () => void;
}

const getImageSource = (image: string | { type: 'video'; src: string }): string => {
  if (typeof image === 'string') {
    return image;
  }
  if (image.type === 'video') {
    // Retourner une image placeholder pour les vidéos
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23333" width="100" height="100"/%3E%3Cpolygon fill="%23fff" points="35,20 35,80 80,50"/%3E%3C/svg%3E';
  }
  return '';
};

const HairstyleCard: React.FC<HairstyleCardProps> = ({ hairstyle, onClick }) => {
  const isVideo = typeof hairstyle.image === 'object' && hairstyle.image.type === 'video';
  const imageUrl = getImageSource(hairstyle.image);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {/* Image/Vidéo avec overlay */}
      <div className="h-72 bg-gray-200 relative overflow-hidden">
        {isVideo && typeof hairstyle.image === 'object' ? (
          <video
            src={hairstyle.image.src}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={imageUrl}
            alt={hairstyle.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge de catégorie */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {hairstyle.category}
        </div>

        {/* Overlay info au hover */}
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <p className="text-sm font-light">Cliquez pour voir les détails</p>
            <Eye size={20} className="text-white" />
          </div>
        </div>
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1">
            {hairstyle.name}
          </h3>
          <Sparkles className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1 ml-2" size={18} />
        </div>

        {hairstyle.description && (
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {hairstyle.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
            <Clock size={16} className="text-primary" />
            <span className="font-medium text-sm">{hairstyle.duration}</span>
          </div>
          
          {hairstyle.price && (
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {hairstyle.price.toLocaleString()} FCFA
              </div>
              <div className="text-xs text-gray-500">À partir de</div>
            </div>
          )}
        </div>

        {/* Bouton Prendre Rendez-vous */}
        <Link
          to="/appointment"
          state={{ selectedHairstyle: hairstyle.name }}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn"
          onClick={(e) => e.stopPropagation()}
        >
          <Calendar size={18} className="group-hover/btn:scale-110 transition-transform" />
          <span>Prendre Rendez-vous</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default HairstyleCard;