// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShoppingCart } from 'lucide-react';
// import { Product } from '../types';

// interface ProductCardProps {
//   product: Product;
//   onOrderClick?: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onOrderClick }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//     >
//       <div className="h-48 bg-gray-200 relative">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
//           {product.category}
//         </div>
//       </div>
      
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-secondary mb-2">{product.name}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold text-primary">
//             {product.price.toLocaleString()} FCFA
//           </span>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={onOrderClick}
//             className="bg-secondary text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-colors"
//           >
//             <ShoppingCart size={18} />
//             <span>Commander</span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShoppingCart, Eye, Sparkles } from 'lucide-react';
// import { Product } from '../types';

// interface ProductCardProps {
//   product: Product;
//   onClick?: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.02 }}
//       className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 cursor-pointer"
//       onClick={onClick}
//     >
//       {/* Image avec overlay */}
//       <div className="h-64 bg-gray-200 relative overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
//         {/* Badge de catégorie */}
//         <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//           {product.category}
//         </div>

//         {/* Overlay info au hover */}
//         <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <div className="flex items-center justify-between">
//             <p className="text-sm font-light">Cliquez pour voir les détails</p>
//             <Eye size={20} className="text-white" />
//           </div>
//         </div>

//         {/* Features */}
//         {product.features && (
//           <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="flex flex-wrap gap-1">
//               {product.features.slice(0, 2).map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30"
//                 >
//                   {feature}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Contenu */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1">
//             {product.name}
//           </h3>
//           <Sparkles className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1 ml-2" size={18} />
//         </div>

//         <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
//           {product.description}
//         </p>
        
//         <div className="flex items-center justify-between">
//           <div className="text-right">
//             <div className="text-2xl font-bold text-primary">
//               {product.price.toLocaleString()} FCFA
//             </div>
//             <div className="text-xs text-gray-500">Prix unitaire</div>
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={(e) => {
//               e.stopPropagation();
//               // Ici vous pouvez ajouter la logique pour commander directement
//             }}
//             className="bg-gradient-to-r from-secondary to-secondary/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group/btn"
//           >
//             <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
//             <span>Commander</span>
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;



import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  onOrderClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onOrderClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 cursor-pointer"
      onClick={onClick}
    >
      {/* Image avec overlay */}
      <div className="h-64 bg-gray-200 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge de catégorie */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          {product.category}
        </div>

        {/* Overlay info au hover */}
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between">
            <p className="text-sm font-light">Cliquez pour voir les détails</p>
            <Eye size={20} className="text-white" />
          </div>
        </div>

        {/* Features */}
        {product.features && (
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/30"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1">
            {product.name}
          </h3>
          <Sparkles className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1 ml-2" size={18} />
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {product.price.toLocaleString()} FCFA
            </div>
            <div className="text-xs text-gray-500">Prix unitaire</div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              if (onOrderClick) {
                onOrderClick();
              }
            }}
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
            <span>Commander</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;