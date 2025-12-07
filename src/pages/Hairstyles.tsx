// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Clock, Filter } from 'lucide-react';
// import { hairstyles } from '../data/siteData';
// import HairstyleCard from '../components/HairstyleCard';

// const Hairstyles: React.FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
//   const [searchTerm, setSearchTerm] = useState('');

//   const categories = ['Tous', ...Array.from(new Set(hairstyles.map(h => h.category)))];

//   const filteredHairstyles = hairstyles.filter(hairstyle => {
//     const matchesCategory = selectedCategory === 'Tous' || hairstyle.category === selectedCategory;
//     const matchesSearch = hairstyle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          hairstyle.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* En-tête */}
//         <motion.div
//           {...fadeInUp}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
//             Nos Coiffures
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Découvrez notre galerie de coiffures afro authentiques. 
//             Locks, tresses, et bien plus encore, réalisés avec passion et expertise.
//           </p>
//         </motion.div>

//         {/* Filtres et recherche */}
//         <motion.div
//           {...fadeInUp}
//           transition={{ delay: 0.2 }}
//           className="mb-12"
//         >
//           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
//             {/* Barre de recherche */}
//             <div className="w-full md:w-auto">
//               <input
//                 type="text"
//                 placeholder="Rechercher une coiffure..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full md:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//               />
//             </div>

//             {/* Filtres par catégorie */}
//             <div className="flex flex-wrap gap-2">
//               {categories.map(category => (
//                 <button
//                   key={category}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-4 py-2 rounded-full font-semibold transition-all ${
//                     selectedCategory === category
//                       ? 'bg-primary text-white'
//                       : 'bg-white text-gray-700 hover:bg-primary hover:text-white'
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Statistiques */}
//         <motion.div
//           {...fadeInUp}
//           transition={{ delay: 0.3 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
//         >
//           <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-primary mb-2">
//               {hairstyles.length}
//             </div>
//             <div className="text-gray-600">Modèles</div>
//           </div>
//           <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-primary mb-2">
//               {categories.length - 1}
//             </div>
//             <div className="text-gray-600">Catégories</div>
//           </div>
//           <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-primary mb-2">5+</div>
//             <div className="text-gray-600">Années d'expérience</div>
//           </div>
//           <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-primary mb-2">100%</div>
//             <div className="text-gray-600">Satisfaction client</div>
//           </div>
//         </motion.div>

//         {/* Grille de coiffures */}
//         {filteredHairstyles.length > 0 ? (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {filteredHairstyles.map((hairstyle, index) => (
//               <motion.div
//                 key={hairstyle.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <HairstyleCard hairstyle={hairstyle} />
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div
//             {...fadeInUp}
//             className="text-center py-12"
//           >
//             <Filter size={64} className="mx-auto text-gray-400 mb-4" />
//             <h3 className="text-2xl font-bold text-gray-600 mb-2">
//               Aucune coiffure trouvée
//             </h3>
//             <p className="text-gray-500">
//               Essayez de modifier vos critères de recherche ou de filtre
//             </p>
//           </motion.div>
//         )}

//         {/* Section d'information */}
//         <motion.div
//           {...fadeInUp}
//           transition={{ delay: 0.6 }}
//           className="mt-16 bg-white rounded-2xl shadow-lg p-8"
//         >
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold text-secondary mb-4">
//                 💫 Notre Expertise en Coiffures Afro
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Spécialistes des locks et tresses africaines, nous maîtrisons les techniques 
//                 traditionnelles et modernes pour vous offrir des coiffures durables et élégantes.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li className="flex items-center">
//                   <Clock className="w-4 h-4 text-primary mr-2" />
//                   Techniques traditionnelles préservées
//                 </li>
//                 <li className="flex items-center">
//                   <Clock className="w-4 h-4 text-primary mr-2" />
//                   Produits 100% naturels
//                 </li>
//                 <li className="flex items-center">
//                   <Clock className="w-4 h-4 text-primary mr-2" />
//                   Conseils personnalisés d'entretien
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-secondary mb-4">
//                 📞 Prendre Rendez-vous
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 Vous avez repéré une coiffure qui vous plaît ? N'attendez plus pour 
//                 prendre rendez-vous avec nos experts.
//               </p>
//               <div className="space-y-3">
//                 <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
//                   <p className="font-semibold text-secondary">Durée moyenne</p>
//                   <p className="text-gray-600">De 2 à 6 heures selon la complexité</p>
//                 </div>
//                 <div className="bg-accent bg-opacity-20 p-4 rounded-lg">
//                   <p className="font-semibold text-secondary">Tarifs</p>
//                   <p className="text-gray-600">À partir de 12 000 FCFA</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hairstyles;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Filter, X, Search, Scissors } from 'lucide-react';
// import { hairstyles } from '../data/siteData';
// import HairstyleCard from '../components/HairstyleCard';
// import HairstyleModal from '../components/HairstyleModal';
// import { Hairstyle } from '../types';

// const Hairstyles: React.FC = () => {
//   const [selectedHairstyle, setSelectedHairstyle] = useState<Hairstyle | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState<'name' | 'price' | 'duration'>('name');
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const categories = ['Tous', ...Array.from(new Set(hairstyles.map(h => h.category)))];

//   // Filtrage et tri des coiffures
//   const filteredHairstyles = hairstyles
//     .filter(hairstyle => {
//       const matchesCategory = selectedCategory === 'Tous' || hairstyle.category === selectedCategory;
//       const matchesSearch = hairstyle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           hairstyle.description?.toLowerCase().includes(searchTerm.toLowerCase());
//       return matchesCategory && matchesSearch;
//     })
//     .sort((a, b) => {
//       switch (sortBy) {
//         case 'price':
//           return (a.price || 0) - (b.price || 0);
//         case 'duration':
//           // Extraire les nombres de la durée pour le tri
//           const durationA = parseInt(a.duration) || 0;
//           const durationB = parseInt(b.duration) || 0;
//           return durationA - durationB;
//         case 'name':
//         default:
//           return a.name.localeCompare(b.name);
//       }
//     });

//   const handleHairstyleClick = (hairstyle: Hairstyle) => {
//     setSelectedHairstyle(hairstyle);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedHairstyle(null);
//   };

//   const handleNextHairstyle = () => {
//     if (!selectedHairstyle) return;
//     const currentIndex = filteredHairstyles.findIndex(h => h.id === selectedHairstyle.id);
//     const nextIndex = (currentIndex + 1) % filteredHairstyles.length;
//     setSelectedHairstyle(filteredHairstyles[nextIndex]);
//   };

//   const handlePrevHairstyle = () => {
//     if (!selectedHairstyle) return;
//     const currentIndex = filteredHairstyles.findIndex(h => h.id === selectedHairstyle.id);
//     const prevIndex = (currentIndex - 1 + filteredHairstyles.length) % filteredHairstyles.length;
//     setSelectedHairstyle(filteredHairstyles[prevIndex]);
//   };

//   // Fermer le filtre mobile quand on change de catégorie
//   useEffect(() => {
//     if (isFilterOpen) {
//       setIsFilterOpen(false);
//     }
//   }, [selectedCategory, sortBy]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background to-purple-50 py-8">
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
//             <Scissors className="text-white" size={28} />
//           </motion.div>
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
//             Nos Coiffures
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Découvrez notre galerie de <span className="text-primary font-semibold">locks et tresses</span> uniques, 
//             réalisées avec passion et expertise par nos artistes coiffeurs.
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
//                 placeholder="Rechercher une coiffure..."
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
//                 <option value="duration">Trier par durée</option>
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
//                     <option value="duration">Durée</option>
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
//             {filteredHairstyles.length} coiffure{filteredHairstyles.length > 1 ? 's' : ''} trouvée{filteredHairstyles.length > 1 ? 's' : ''}
//             {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
//             {searchTerm && ` pour "${searchTerm}"`}
//           </p>
//         </motion.div>

//         {/* Grille de coiffures */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           <AnimatePresence mode="popLayout">
//             {filteredHairstyles.map((hairstyle, index) => (
//               <motion.div
//                 key={hairstyle.id}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3, delay: index * 0.05 }}
//                 layout
//               >
//                 <HairstyleCard 
//                   hairstyle={hairstyle} 
//                   onClick={() => handleHairstyleClick(hairstyle)}
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Message si aucun résultat */}
//         {filteredHairstyles.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-12"
//           >
//             <div className="text-gray-400 mb-4">
//               <Scissors size={64} className="mx-auto" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-600 mb-2">
//               Aucune coiffure trouvée
//             </h3>
//             <p className="text-gray-500">
//               Essayez de modifier vos critères de recherche ou de filtre
//             </p>
//           </motion.div>
//         )}
//       </div>

//       {/* Modal coiffure plein écran */}
//       <HairstyleModal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         hairstyle={selectedHairstyle}
//         onNext={handleNextHairstyle}
//         onPrev={handlePrevHairstyle}
//         currentIndex={filteredHairstyles.findIndex(h => h.id === selectedHairstyle?.id) + 1}
//         totalHairstyles={filteredHairstyles.length}
//       />
//     </div>
//   );
// };

// export default Hairstyles;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Search, Scissors } from 'lucide-react';
import { hairstyles } from '../data/siteData';
import HairstyleCard from '../components/HairstyleCard';
import HairstyleModal from '../components/HairstyleModal';
import { Hairstyle } from '../types';

// Import de toutes vos images
import img1 from '../assets/img/tresse1.jpeg';
import img2 from '../assets/img/tresse2.jpeg';
import img3 from '../assets/img/tresse3.jpeg';
import img4 from '../assets/img/tresse4.jpeg';
import img5 from '../assets/img/tresse5.jpeg';
import img6 from '../assets/img/tresse6.jpeg';
import img7 from '../assets/img/tresse7.jpeg';
import img8 from '../assets/img/tresse8.jpeg';

import barelle from '../assets/img/videobarelle.mp4';
import retwistV from '../assets/img/retwistvideo.mp4';



// Images par catégorie - chaque catégorie peut utiliser plusieurs images
const categoryImageSets: Record<string, (string | { type: 'video'; src: string })[]> = {
  'Locks': [{ type: 'video', src: retwistV },img2, img3, img1, img4, img5, { type: 'video', src: barelle }, img6, img7, img8],
  'Tresses': [img2, img6, img1, img3, img5],
  'Braids': [img3, img4, img5, img6],
  'Twists': [img7, img8, img1, img2],
  'Naturelles': [img2, img3, img4, img5],
  'Entretien': [img6, img7, img8, img1],
  'Consultation': [img1, img5, img3],
  'Autre': [img4, img5, img6, img7, img8]
};

// Fonction pour obtenir une image différente selon la catégorie et l'index
const getImageForCategory = (category: string, index: number): string | { type: 'video'; src: string } => {
  const imageSet = categoryImageSets[category] || categoryImageSets['Autre'];
  // Utiliser l'index modulo la taille du tableau pour alterner les images
  return imageSet[index % imageSet.length];
};

// Remplacer toutes les images par des images variées selon la catégorie et l'index
const hairstylesWithImages = hairstyles.map((hairstyle, index) => ({
  ...hairstyle,
  image: getImageForCategory(hairstyle.category, index)
}));

// Le reste du code reste identique...
const Hairstyles: React.FC = () => {
  const [selectedHairstyle, setSelectedHairstyle] = useState<Hairstyle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'duration'>('name');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['Tous', ...Array.from(new Set(hairstylesWithImages.map(h => h.category)))];

  // Filtrage et tri des coiffures
  const filteredHairstyles = hairstylesWithImages
    .filter(hairstyle => {
      const matchesCategory = selectedCategory === 'Tous' || hairstyle.category === selectedCategory;
      const matchesSearch = hairstyle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hairstyle.description?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'duration':
          const durationA = parseInt(a.duration) || 0;
          const durationB = parseInt(b.duration) || 0;
          return durationA - durationB;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const handleHairstyleClick = (hairstyle: Hairstyle) => {
    setSelectedHairstyle(hairstyle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHairstyle(null);
  };

  const handleNextHairstyle = () => {
    if (!selectedHairstyle) return;
    const currentIndex = filteredHairstyles.findIndex(h => h.id === selectedHairstyle.id);
    const nextIndex = (currentIndex + 1) % filteredHairstyles.length;
    setSelectedHairstyle(filteredHairstyles[nextIndex]);
  };

  const handlePrevHairstyle = () => {
    if (!selectedHairstyle) return;
    const currentIndex = filteredHairstyles.findIndex(h => h.id === selectedHairstyle.id);
    const prevIndex = (currentIndex - 1 + filteredHairstyles.length) % filteredHairstyles.length;
    setSelectedHairstyle(filteredHairstyles[prevIndex]);
  };

  useEffect(() => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-purple-50 py-8">
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
            <Scissors className="text-white" size={28} />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nos Coiffures
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre galerie de <span className="text-primary font-semibold">locks et tresses</span> uniques, 
            réalisées avec passion et expertise par nos artistes coiffeurs.
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
                placeholder="Rechercher une coiffure..."
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
                className="bg-white text-gray-900 border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              >
                <option value="name">Trier par nom</option>
                <option value="price">Trier par prix</option>
                <option value="duration">Trier par durée</option>
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
                    className="w-full bg-white text-gray-900 border-2 border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="name">Nom</option>
                    <option value="price">Prix</option>
                    <option value="duration">Durée</option>
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
            {filteredHairstyles.length} coiffure{filteredHairstyles.length > 1 ? 's' : ''} trouvée{filteredHairstyles.length > 1 ? 's' : ''}
            {selectedCategory !== 'Tous' && ` dans ${selectedCategory}`}
            {searchTerm && ` pour "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Grille de coiffures */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredHairstyles.map((hairstyle, index) => (
              <motion.div
                key={hairstyle.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <HairstyleCard 
                  hairstyle={hairstyle} 
                  onClick={() => handleHairstyleClick(hairstyle)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Message si aucun résultat */}
        {filteredHairstyles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Scissors size={64} className="mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">
              Aucune coiffure trouvée
            </h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche ou de filtre
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal coiffure plein écran */}
      <HairstyleModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        hairstyle={selectedHairstyle}
        onNext={handleNextHairstyle}
        onPrev={handlePrevHairstyle}
        currentIndex={filteredHairstyles.findIndex(h => h.id === selectedHairstyle?.id) + 1}
        totalHairstyles={filteredHairstyles.length}
      />
    </div>
  );
};

export default Hairstyles;