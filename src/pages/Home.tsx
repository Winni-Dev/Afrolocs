// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   ArrowRight, 
//   Star, 
//   Shield, 
//   Heart, 
//   ChevronLeft, 
//   ChevronRight,
//   Play,
//   Pause,
//   HomeIcon,
//   Scissors,
//   Users,
//   Award,
//   Clock,
//   CheckCircle,
//   MessageCircle,
//   Sparkles,
//   Calendar
// } from 'lucide-react';
// import { products, hairstyles, siteConfig, testimonials } from '../data/siteData';
// import ProductCard from '../components/ProductCard';
// import HairstyleCard from '../components/HairstyleCard';
// import WhatsAppButton from '../components/WhatsAppButton';
// import OrderModal from '../components/OrderModal';
// import { Link } from 'react-router-dom';

// const HomePage: React.FC = () => {
//   const featuredProducts = products.slice(0, 3);
//   const featuredHairstyles = hairstyles.slice(0, 3);
//   const [selectedProduct, setSelectedProduct] = useState<any>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // Carousel state
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);

//   const carouselSlides = [
//     {
//       image: "/images/carousel/slide1.jpg",
//       title: "Locks & Tresses Authentiques",
//       subtitle: "L'art de la coiffure afro réinventé",
//       description: "Expertise traditionnelle meets modern style"
//     },
//     {
//       image: "/images/carousel/slide2.jpg",
//       title: "Service à Domicile Premium",
//       subtitle: "Confort et excellence à votre porte",
//       description: "Déplacement gratuit dans Abidjan"
//     },
//     {
//       image: "/images/carousel/slide3.jpg",
//       title: "Produits 100% Naturels",
//       subtitle: "Soins biologiques pour vos locks",
//       description: "Naturel, pur, efficace"
//     },
//     {
//       image: "/images/carousel/slide4.jpg",
//       title: "Expertise Certifiée",
//       subtitle: "Plus de 10 ans d'expérience",
//       description: "Maîtrise des techniques ancestrales"
//     }
//   ];

//   // Carousel autoplay
//   useEffect(() => {
//     if (!isPlaying) return;
    
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [currentSlide, isPlaying, carouselSlides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   const handleOrderClick = (product: any) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.8 }
//   };

//   const staggerChildren = {
//     animate: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Carousel Section */}
//       <section className="relative h-screen overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0"
//           >
//             <div 
//               className="w-full h-full bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
//         >
//           <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
//         </button>
        
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
//         >
//           <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
//         </button>

//         {/* Play/Pause */}
//         <button
//           onClick={() => setIsPlaying(!isPlaying)}
//           className="absolute top-6 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
//         >
//           {isPlaying ? 
//             <Pause className="text-white" size={20} /> : 
//             <Play className="text-white" size={20} />
//           }
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//           {carouselSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-primary scale-125' 
//                   : 'bg-white/50 hover:bg-white/70'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 h-full flex items-center">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.5 }}
//               className="text-white max-w-2xl"
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.8 }}
//                 className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
//               >
//                 <Sparkles className="mr-2" size={16} />
//                 <span className="text-sm font-semibold">Expertise Afro depuis 2014</span>
//               </motion.div>

//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
//               >
//                 {carouselSlides[currentSlide].title}
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="text-xl md:text-2xl mb-4 text-gray-200 font-light"
//               >
//                 {carouselSlides[currentSlide].subtitle}
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.7 }}
//                 className="text-lg mb-8 text-gray-300"
//               >
//                 {carouselSlides[currentSlide].description}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.9 }}
//                 className="flex flex-col sm:flex-row gap-4"
//               >
//                 <Link
//                   to="/appointment"
//                   className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <Calendar size={20} />
//                   <span>Prendre Rendez-vous</span>
//                 </Link>
                
//                 <a
//                   href="/hairstyles"
//                   className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//                 >
//                   <Scissors size={20} />
//                   <span>Voir nos Modèles</span>
//                 </a>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gradient-to-br from-secondary to-primary text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
//           >
//             {[
//               { number: "10+", label: "Ans d'Expertise", icon: Award },
//               { number: "5K+", label: "Clients Satisfaits", icon: Users },
//               { number: "50+", label: "Modèles Uniques", icon: Scissors },
//               { number: "24/7", label: "Service à Domicile", icon: HomeIcon }
//             ].map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-6"
//               >
//                 <stat.icon className="mx-auto mb-4" size={40} />
//                 <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
//                 <div className="text-gray-200 font-medium">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* À Propos Section */}
//       <section className="py-20 bg-background relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full -translate-y-36 translate-x-36"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-48 -translate-x-48"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             {...fadeInUp}
//             className="text-center mb-16"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-6"
//             >
//               <Star className="text-primary mr-2" size={20} />
//               <span className="text-primary font-semibold">Notre Savoir-Faire Unique</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//               L'Excellence Afro
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Depuis plus de 10 ans, nous préservons et modernisons l'art des coiffures afro. 
//               Notre expertise en locks et tresses allie <span className="text-primary font-semibold">tradition ancestrale</span> et <span className="text-primary font-semibold">innovation moderne</span>.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerChildren}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-3 gap-8"
//           >
//             {[
//               { 
//                 icon: Star, 
//                 title: "Expertise Authentique", 
//                 desc: "Maîtrise des techniques traditionnelles transmises de génération en génération",
//                 features: ["Techniques ancestrales", "Formation continue", "Innovation constante"]
//               },
//               { 
//                 icon: Shield, 
//                 title: "Qualité Premium", 
//                 desc: "Produits 100% naturels et méthodes respectueuses de vos cheveux",
//                 features: ["Produits biologiques", "Hygiène irréprochable", "Durabilité garantie"]
//               },
//               { 
//                 icon: Heart, 
//                 title: "Passion Africaine", 
//                 desc: "Amour authentique pour la culture afro et la beauté naturelle",
//                 features: ["Conseils personnalisés", "Écoute active", "Service cœur"]
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
//               >
//                 <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <item.icon className="text-white" size={28} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-secondary mb-4">{item.title}</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
//                 <ul className="space-y-3">
//                   {item.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-gray-700">
//                       <CheckCircle className="text-primary mr-3 flex-shrink-0" size={18} />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Produits Section */}
//       <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full"></div>
//         <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             {...fadeInUp}
//             className="text-center mb-16"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center bg-green-100 rounded-full px-6 py-3 mb-6"
//             >
//               <span className="text-green-800 font-semibold">🎯 Produits Naturels</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//               Nos Produits Excellence
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Découvrez notre sélection de produits <span className="text-primary font-semibold">100% naturels</span> spécialement conçus pour l'entretien et la beauté des cheveux afro.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerChildren}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-3 gap-8 mb-12"
//           >
//             {featuredProducts.map((product, index) => (
//               <motion.div
//                 key={product.id}
//                 variants={fadeInUp}
//                 whileHover={{ y: -15 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <ProductCard 
//                   product={product} 
//                   onOrderClick={() => handleOrderClick(product)}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             {...fadeInUp}
//             className="text-center"
//           >
//             <Link
//               to="/products"
//               className="inline-flex items-center bg-secondary text-white hover:bg-secondary/90 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
//             >
//               <span>Explorer tous nos produits</span>
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modèles Section */}
//       <section className="py-20 bg-background relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             {...fadeInUp}
//             className="text-center mb-16"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="inline-flex items-center bg-purple-100 rounded-full px-6 py-3 mb-6"
//             >
//               <Scissors className="text-purple-800 mr-2" size={20} />
//               <span className="text-purple-800 font-semibold">💫 Créations Uniques</span>
//             </motion.div>
//             <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//               Notre Galerie d'Art
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Laissez-vous inspirer par nos créations de <span className="text-primary font-semibold">locks et tresses</span> qui allient tradition et modernité.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerChildren}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-3 gap-8 mb-12"
//           >
//             {featuredHairstyles.map((hairstyle, index) => (
//               <motion.div
//                 key={hairstyle.id}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <HairstyleCard hairstyle={hairstyle} />
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             {...fadeInUp}
//             className="text-center"
//           >
//             <Link
//               to="/hairstyles"
//               className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
//             >
//               <span>Découvrir tous nos modèles</span>
//               <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Témoignages Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             {...fadeInUp}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
//               Ils Nous Font Confiance
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Découvrez les retours de nos clients satisfaits par notre expertise et notre service à domicile.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={staggerChildren}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-3 gap-8"
//           >
//             {testimonials.map((testimonial) => (
//               <motion.div
//                 key={testimonial.id}
//                 variants={fadeInUp}
//                 whileHover={{ y: -5 }}
//                 className="bg-gradient-to-br from-background to-white rounded-3xl p-8 shadow-lg border border-gray-100"
//               >
//                 <div className="flex items-center mb-6">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={20}
//                       className={`${
//                         i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.comment}"</p>
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="font-bold text-secondary">{testimonial.name}</div>
//                     <div className="text-gray-500 text-sm">{testimonial.date}</div>
//                   </div>
//                   <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
//                     <Users className="text-primary" size={20} />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Final Section */}
//       <section className="py-20 bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
        
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <motion.div
//             {...fadeInUp}
//           >
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="text-4xl md:text-5xl font-bold text-white mb-6"
//             >
//               Prêt pour une Transformation Capillaire ?
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
//             >
//               Rejoignez nos nombreux clients satisfaits et découvrez l'excellence de nos services de coiffure afro à domicile.
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <Link
//                 to="/appointment"
//                 className="bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//               >
//                 <Calendar size={20} />
//                 <span>Prendre Rendez-vous</span>
//               </Link>
              
//               <Link
//                 to="/contact"
//                 className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
//               >
//                 <span>Nous Contacter</span>
//                 <ArrowRight size={20} />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Modal de commande */}
//       <OrderModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         product={selectedProduct}
//       />
//     </div>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Pause,
  Scissors,
  Users,
  Award,
  Clock,
  MessageCircle,
  Sparkles,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';
import { products, hairstyles, siteConfig, testimonials } from '../data/siteData';
import ProductCard from '../components/ProductCard';
import HairstyleCard from '../components/HairstyleCard';
import WhatsAppButton from '../components/WhatsAppButton';
import OrderModal from '../components/OrderModal';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import tresse7 from '../assets/img/tresse7.jpeg'
import tresse5 from '../assets/img/tresse5.jpeg'
import tresse1 from '../assets/img/tresse9.jpg'
import prod1 from'../assets/img/produis1.png'
import prod2 from'../assets/img/produis2.webp'
import prod3 from '../assets/img/produsi3.jpg'


// Images par catégorie pour les produits - chaque catégorie peut utiliser plusieurs images
const productCategoryImageSets: Record<string, string[]> = {
  'Soins': [prod1, img2 ,prod3],
  'Styling': [img2, prod2, img4, img1],
  'Kits': [img3, img4, img1, img2],
  'Autre': [img4, img1, img2, img3]
};

// Images par catégorie pour les coiffures - chaque catégorie peut utiliser plusieurs images
const hairstyleCategoryImageSets: Record<string, string[]> = {
  'Locks': [tresse7,tresse5,tresse5],
  'Tresses': [tresse1,tresse1],
  'Braids': [img3, img4, img1, img2],
  'Twists': [img4, img1, img2, img3],
  'Naturelles': [img1, img2, img3, img4],
  'Entretien': [img2, img3, img4, img1],
  'Consultation': [img3, img4, img1],
  'Autre': [img4, img1, img2, img3]
};

// Fonction pour obtenir une image différente pour un produit selon la catégorie et l'index
const getImageForProduct = (category: string, index: number): string => {
  const imageSet = productCategoryImageSets[category] || productCategoryImageSets['Autre'];
  return imageSet[index % imageSet.length];
};

// Fonction pour obtenir une image différente pour une coiffure selon la catégorie et l'index
const getImageForHairstyle = (category: string, index: number): string => {
  const imageSet = hairstyleCategoryImageSets[category] || hairstyleCategoryImageSets['Autre'];
  return imageSet[index % imageSet.length];
};

// Appliquer des images variées aux produits et coiffures selon leur index
const productsWithImages = products.map((product, index) => ({
  ...product,
  image: getImageForProduct(product.category, index)
}));

const hairstylesWithImages = hairstyles.map((hairstyle, index) => ({
  ...hairstyle,
  image: getImageForHairstyle(hairstyle.category, index)
}));

const HomePage: React.FC = () => {
  const featuredProducts = productsWithImages.slice(0, 3);
  const featuredHairstyles = hairstylesWithImages.slice(0, 3);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Images avec meilleur contraste pour la lisibilité
  const carouselSlides = [
    {
      image: img1,
      title: "Salon Afro Élégance",
      subtitle: "Votre expert en locks et tresses",
      description: "Ambiance chaleureuse et professionnelle"
    },
    {
      image: img2,
      title: "Espace Détente & Beauté",
      subtitle: "Service premium à domicile disponible",
      description: "Confort et expertise réunis"
    },
    {
      image: img3,
      title: "Notre Univers Créatif",
      subtitle: "Innovation et tradition africaine",
      description: "L'art de la coiffure réinventé"
    },
    {
      image: img4,
      title: "Expertise & Passion",
      subtitle: "Plus de 10 ans d'expérience",
      description: "Votre beauté, notre priorité"
    }
  ];

  // Carousel autoplay
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isPlaying, carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleOrderClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${carouselSlides[currentSlide].image})` }}
            >
              {/* Overlay avec meilleur contraste */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
              {/* Overlay supplémentaire pour le texte */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
              {/* Ligne de séparation pour améliorer la lisibilité */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Position mobile friendly */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="text-white group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
        >
          <ChevronRight className="text-white group-hover:scale-110 transition-transform w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Play/Pause - Position mobile */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300"
        >
          {isPlaying ? 
            <Pause className="text-white w-4 h-4 md:w-5 md:h-5" /> : 
            <Play className="text-white w-4 h-4 md:w-5 md:h-5" />
          }
        </button>

        {/* Slide Indicators - Taille mobile */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125 shadow-lg' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Info Salon Overlay - Version mobile compacte */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-black/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 text-white border border-white/20 max-w-[180px] md:max-w-none">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="bg-primary rounded-full p-1 md:p-2">
              <Scissors className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-xs md:text-sm truncate">{siteConfig.salonName}</div>
              <div className="text-[10px] md:text-xs text-gray-300 flex items-center truncate">
                <MapPin className="w-2 h-2 md:w-3 md:h-3 mr-1 flex-shrink-0" />
                <span className="truncate">Abidjan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content - Optimisé mobile */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white max-w-2xl mx-auto text-center md:text-left"
            >
              {/* Badge - Taille mobile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-flex items-center bg-primary/90 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 border border-white/20"
              >
                <Sparkles className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-semibold">Expertise Afro depuis 2014</span>
              </motion.div>

              {/* Titre principal - Taille mobile */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight"
              >
                {carouselSlides[currentSlide].title}
              </motion.h1>

              {/* Sous-titre - Taille mobile */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 text-primary font-bold"
              >
                {carouselSlides[currentSlide].subtitle}
              </motion.p>

              {/* Description - Taille mobile */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-200 max-w-lg mx-auto md:mx-0"
              >
                {carouselSlides[currentSlide].description}
              </motion.p>

              {/* Boutons CTA - Stack mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8"
              >
                <Link
                  to="/appointment"
                  className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  <span>Prendre Rendez-vous</span>
                </Link>
                
                <Link
                  to="/hairstyles"
                  className="border-2 border-white text-white hover:bg-white hover:text-secondary px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <Scissors className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                  <span>Voir nos Modèles</span>
                </Link>
              </motion.div>

              {/* Contact Info - Version mobile compacte */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-xs md:text-sm text-gray-300"
              >
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-medium">{siteConfig.phone}</span>
                </div>
                <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  <span>Lun-Sam: 8h-19h</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Optimisé mobile */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-8 text-center"
          >
            {[
              { number: "10+", label: "Ans d'Expertise", icon: Award },
              { number: "2K+", label: "Clients Satisfaits", icon: Users },
              { number: "15K+", label: "Coiffures Réalisées", icon: Scissors },
              { number: "100%", label: "Satisfaction", icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 md:p-6 group"
              >
                <div className="bg-white/20 rounded-full w-12 h-12 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white w-5 h-5 md:w-8 md:h-8" />
                </div>
                <div className="text-xl md:text-3xl font-bold mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-200 font-medium leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* À Propos Section - Stack mobile */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full -translate-y-32 translate-x-32 md:-translate-y-48 md:translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-accent/5 rounded-full translate-y-24 -translate-x-24 md:translate-y-36 md:-translate-x-36"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Salon */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={img4}
                  alt="Notre salon"
                  className="w-full h-64 md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-primary text-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="text-lg md:text-2xl font-bold">10+</div>
                <div className="text-xs md:text-sm">Ans d'expérience</div>
              </div>
            </motion.div>

            {/* Contenu */}
            <motion.div
              {...fadeInUp}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6"
              >
                <Star className="text-primary mr-2 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-primary font-semibold text-sm md:text-base">Notre Histoire</span>
              </motion.div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">
                L'Excellence Afro Depuis 2014
              </h2>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Fondé avec passion pour préserver et moderniser l'art des coiffures afro, notre salon allie <span className="text-primary font-semibold">savoir-faire ancestral</span> et <span className="text-primary font-semibold">innovation contemporaine</span>.
              </p>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "✅ Expertise certifiée en locks et tresses",
                  "✅ Produits 100% naturels et biologiques",
                  "✅ Service à domicile dans toute la ville",
                  "✅ Ambiance chaleureuse et professionnelle"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-700 text-sm md:text-lg"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Link
                  to="/appointment"
                  className="bg-primary text-white hover:bg-primary/90 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Visiter Notre Salon</span>
                </Link>
                <WhatsAppButton className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base">
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Nous Contacter</span>
                </WhatsAppButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Produits Section - Grid mobile */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-4 left-4 w-16 h-16 md:top-10 md:left-10 md:w-32 md:h-32 bg-primary/10 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 md:bottom-10 md:right-10 md:w-48 md:h-48 bg-accent/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6"
            >
              <span className="text-green-800 font-semibold text-sm md:text-base">🛍️ Produits Excellence</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">
              Soins Naturels & Professionnels
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre gamme de produits <span className="text-primary font-semibold">100% naturels</span> spécialement formulés pour l'entretien des cheveux afro.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard 
                  product={product} 
                  onOrderClick={() => handleOrderClick(product)}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center bg-secondary text-white hover:bg-secondary/90 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <span>Découvrir tous nos produits</span>
              <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modèles Section */}
      <section className="py-12 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...fadeInUp}
            className="text-center mb-8 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-purple-100 rounded-full px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6"
            >
              <Scissors className="text-purple-800 mr-2 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-purple-800 font-semibold text-sm md:text-base">💫 Notre Créativité</span>
            </motion.div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">
              Galerie de Nos Réalisations
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre univers créatif et laissez-vous inspirer par nos créations de <span className="text-primary font-semibold">locks et tresses</span> uniques.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
          >
            {featuredHairstyles.map((hairstyle, index) => (
              <motion.div
                key={hairstyle.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
              >
                <HairstyleCard hairstyle={hairstyle} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="text-center"
          >
            <Link
              to="/hairstyles"
              className="inline-flex items-center bg-primary text-white hover:bg-primary/90 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <span>Voir toute notre galerie</span>
              <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Témoignages Section - Grid mobile */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 md:mb-6">
              Ils Nous Font Confiance
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours authentiques de nos clients satisfaits par notre expertise et notre service personnalisé.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                className="bg-gradient-to-br from-background to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-lg mb-4 md:mb-6 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-secondary text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs md:text-sm">{testimonial.date}</div>
                  </div>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="text-primary w-3 h-3 md:w-5 md:h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white/10 rounded-full -translate-x-24 -translate-y-24 md:-translate-x-36 md:-translate-y-36"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full translate-x-32 translate-y-32 md:translate-x-48 md:translate-y-48"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            {...fadeInUp}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Prêt pour Votre Transformation ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto"
            >
              Rejoignez notre communauté de clients satisfaits et découvrez l'excellence de nos services de coiffure afro.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <Link
                to="/appointment"
                className="bg-white text-secondary hover:bg-gray-100 text-sm md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span>Prendre Rendez-vous</span>
              </Link>
              
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Visiter Notre Salon</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal de commande */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </div>
  );
};

export default HomePage;