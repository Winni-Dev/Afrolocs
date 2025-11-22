// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { products } from '../data/siteData';
// import ProductCard from '../components/ProductCard';
// import OrderModal from '../components/OrderModal';
// import { Product } from '../types';

// const Products: React.FC = () => {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOrderClick = (product: Product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const categories = Array.from(new Set(products.map(p => p.category)));

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* En-tête */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
//             Nos Produits
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Découvrez notre sélection de produits naturels spécialement conçus 
//             pour l'entretien et la beauté des cheveux afro.
//           </p>
//         </motion.div>

//         {/* Filtres par catégorie */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-4 mb-8"
//         >
//           <button className="px-4 py-2 bg-primary text-white rounded-full font-semibold">
//             Tous
//           </button>
//           {categories.map(category => (
//             <button
//               key={category}
//               className="px-4 py-2 bg-white text-gray-700 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
//             >
//               {category}
//             </button>
//           ))}
//         </motion.div>

//         {/* Grille de produits */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//         >
//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <ProductCard 
//                 product={product} 
//                 onOrderClick={() => handleOrderClick(product)}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Modal de commande */}
//       <OrderModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         product={selectedProduct}
//       />
//     </div>
//   );
// };

// export default Products;




// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Filter, X, Search } from 'lucide-react';
// import { products } from '../data/siteData';
// import ProductCard from '../components/ProductCard';
// import ProductModal from '../components/ProductModal';
// import { Product } from '../types';

// const Products: React.FC = () => {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const categories = ['Tous', ...Array.from(new Set(products.map(p => p.category)))];

//   // Filtrage et tri des produits
//   const filteredProducts = products
//     .filter(product => {
//       const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
//       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price':
//           return a.price - b.price;
//         case 'category':
//           return a.category.localeCompare(b.category);
//         case 'name':
//         default:
//           return a.name.localeCompare(b.name);
//       }
//     });

//   const handleProductClick = (product: Product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedProduct(null);
//   };

//   const handleNextProduct = () => {
//     if (!selectedProduct) return;
//     const currentIndex = filteredProducts.findIndex(p => p.id === selectedProduct.id);
//     const nextIndex = (currentIndex + 1) % filteredProducts.length;
//     setSelectedProduct(filteredProducts[nextIndex]);
//   };

//   const handlePrevProduct = () => {
//     if (!selectedProduct) return;
//     const currentIndex = filteredProducts.findIndex(p => p.id === selectedProduct.id);
//     const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
//     setSelectedProduct(filteredProducts[prevIndex]);
//   };

//   // Fermer le filtre mobile quand on change de catégorie
//   useEffect(() => {
//     if (isFilterOpen) {
//       setIsFilterOpen(false);
//     }
//   }, [selectedCategory, sortBy]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background to-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* En-tête */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.2, type: "spring" }}
//             className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"
//           >
//             <Filter className="text-white" size={28} />
//           </motion.div>
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
//             Nos Produits
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Découvrez notre sélection de produits <span className="text-primary font-semibold">100% naturels</span> spécialement conçus pour l'entretien et la beauté des cheveux afro.
//           </p>
//         </motion.div>

//         {/* Barre de recherche et filtres */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="mb-8"
//         >
//           <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
//             {/* Barre de recherche */}
//             <div className="relative w-full lg:w-80">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Rechercher un produit..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
//               />
//             </div>

//             {/* Bouton filtre mobile */}
//             <button
//               onClick={() => setIsFilterOpen(!isFilterOpen)}
//               className="lg:hidden bg-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 hover:bg-primary/90"
//             >
//               <Filter size={20} />
//               <span>Filtres</span>
//             </button>

//             {/* Filtres desktop */}
//             <div className="hidden lg:flex items-center gap-4">
//               {/* Tri */}
//               <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value as any)}
//                 className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
//               >
//                 <option value="name">Trier par nom</option>
//                 <option value="price">Trier par prix</option>
//                 <option value="category">Trier par catégorie</option>
//               </select>

//               {/* Catégories */}
//               <div className="flex flex-wrap gap-2">
//                 {categories.map(category => (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category)}
//                     className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
//                       selectedCategory === category
//                         ? 'bg-primary text-white shadow-lg'
//                         : 'bg-white text-gray-700 hover:bg-primary hover:text-white border-2 border-gray-200'
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Filtres mobile */}
//           <AnimatePresence>
//             {isFilterOpen && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="lg:hidden mt-4 bg-white rounded-2xl p-6 border-2 border-gray-200"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-bold text-lg text-secondary">Filtres</h3>
//                   <button
//                     onClick={() => setIsFilterOpen(false)}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
                
//                 {/* Tri mobile */}
//                 <div className="mb-4">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Trier par</label>
//                   <select
//                     value={sortBy}
//                     onChange={(e) => setSortBy(e.target.value as any)}
//                     className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
//                   >
//                     <option value="name">Nom</option>
//                     <option value="price">Prix</option>
//                     <option value="category">Catégorie</option>
//                   </select>
//                 </div>

//                 {/* Catégories mobile */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">Catégories</label>
//                   <div className="grid grid-cols-2 gap-2">
//                     {categories.map(category => (
//                       <button
//                         key={category}
//                         onClick={() => setSelectedCategory(category)}
//                         className={`px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
//                           selectedCategory === category
//                             ? 'bg-primary text-white shadow-lg'
//                             : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
//                         }`}
//                       >
//                         {category}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         {/* Compteur de résultats */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="mb-6"
//         >
//           <p className="text-gray-600">
//             {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
//             {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
//             {searchTerm && ` pour "${searchTerm}"`}
//           </p>
//         </motion.div>

//         {/* Grille de produits */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//                 layout
//               >
//                 <ProductCard 
//                   product={product} 
//                   onClick={() => handleProductClick(product)}
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Message si aucun résultat */}
//         {filteredProducts.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <div className="text-gray-400 mb-4">
//               <Filter size={64} className="mx-auto" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-600 mb-2">
//               Aucun produit trouvé
//             </h3>
//             <p className="text-gray-500">
//               Essayez de modifier vos critères de recherche ou de filtre
//             </p>
//           </motion.div>
//         )}
//       </div>

//       {/* Modal produit plein écran */}
//       <ProductModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         product={selectedProduct}
//         onNext={handleNextProduct}
//         onPrev={handlePrevProduct}
//         currentIndex={filteredProducts.findIndex(p => p.id === selectedProduct?.id) + 1}
//         totalProducts={filteredProducts.length}
//       />
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Search } from 'lucide-react';
import { products } from '../data/siteData';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

// Import de toutes vos images
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import prod1 from'../assets/img/produis1.png'
import prod2 from'../assets/img/produis2.webp'
import prod3 from '../assets/img/produsi3.jpg'
// Images par catégorie - chaque catégorie peut utiliser plusieurs images
const categoryImageSets: Record<string, string[]> = {
  'Soins': [prod3, prod1, prod2, prod1],
  'Styling': [img2, prod3, img4, img1],
  'Kits': [prod2, img4, img1, prod2,prod2,prod2],
  'Autre': [img4, img1, img2, img3]
};

// Fonction pour obtenir une image différente selon la catégorie et l'index
const getImageForCategory = (category: string, index: number): string => {
  const imageSet = categoryImageSets[category] || categoryImageSets['Autre'];
  // Utiliser l'index modulo la taille du tableau pour alterner les images
  return imageSet[index % imageSet.length];
};

// Remplacer toutes les images par des images variées selon la catégorie et l'index
const productsWithImages = products.map((product, index) => ({
  ...product,
  image: getImageForCategory(product.category, index)
}));

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['Tous', ...Array.from(new Set(productsWithImages.map(p => p.category)))];

  // Filtrage et tri des produits
  const filteredProducts = productsWithImages
    .filter(product => {
      const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleNextProduct = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedProduct.id);
    const nextIndex = (currentIndex + 1) % filteredProducts.length;
    setSelectedProduct(filteredProducts[nextIndex]);
  };

  const handlePrevProduct = () => {
    if (!selectedProduct) return;
    const currentIndex = filteredProducts.findIndex(p => p.id === selectedProduct.id);
    const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
    setSelectedProduct(filteredProducts[prevIndex]);
  };

  // Fermer le filtre mobile quand on change de catégorie
  useEffect(() => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6"
          >
            <Filter className="text-white" size={28} />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nos Produits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de produits <span className="text-primary font-semibold">100% naturels</span> spécialement conçus pour l'entretien et la beauté des cheveux afro.
          </p>
        </motion.div>

        {/* Barre de recherche et filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Barre de recherche */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
              />
            </div>

            {/* Bouton filtre mobile */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden bg-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 hover:bg-primary/90"
            >
              <Filter size={20} />
              <span>Filtres</span>
            </button>

            {/* Filtres desktop */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Tri */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              >
                <option value="name">Trier par nom</option>
                <option value="price">Trier par prix</option>
                <option value="category">Trier par catégorie</option>
              </select>

              {/* Catégories */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary hover:text-white border-2 border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filtres mobile */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 bg-white rounded-2xl p-6 border-2 border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-secondary">Filtres</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                {/* Tri mobile */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Trier par</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="name">Nom</option>
                    <option value="price">Prix</option>
                    <option value="category">Catégorie</option>
                  </select>
                </div>

                {/* Catégories mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Catégories</label>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Compteur de résultats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
            {searchTerm && ` pour "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Grille de produits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <ProductCard 
                  product={product} 
                  onClick={() => handleProductClick(product)}
                  onOrderClick={() => handleOrderClick(product)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Message si aucun résultat */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Filter size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche ou de filtre
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal produit plein écran */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        onNext={handleNextProduct}
        onPrev={handlePrevProduct}
        currentIndex={filteredProducts.findIndex(p => p.id === selectedProduct?.id) + 1}
        totalProducts={filteredProducts.length}
      />
    </div>
  );
};

// Export par défaut
export default Products;