// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, Scissors, User, Phone } from 'lucide-react';
// import { hairstyles } from '../data/siteData';
// import WhatsAppButton from '../components/WhatsAppButton';

// const Appointment: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     hairstyleType: '',
//     date: '',
//     time: '',
//     message: ''
//   });

//   const timeSlots = [
//     '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
//     '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* En-tête */}
//         <motion.div
//           {...fadeInUp}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
//             Prendre Rendez-vous
//           </h1>
//           <p className="text-xl text-gray-600">
//             Réservez votre créneau pour une coiffure unique et personnalisée
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Formulaire de rendez-vous */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="bg-white rounded-2xl shadow-lg p-8"
//           >
//             <h2 className="text-2xl font-bold text-secondary mb-2">Formulaire de Réservation</h2>
//             <p className="text-gray-600 mb-6">Remplissez ce formulaire et nous vous confirmerons le rendez-vous sur WhatsApp</p>

//             <form className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <User className="inline w-4 h-4 mr-1" />
//                   Nom complet *
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   placeholder="Votre nom complet"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <Phone className="inline w-4 h-4 mr-1" />
//                   Numéro WhatsApp *
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   placeholder="Votre numéro WhatsApp"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   <Scissors className="inline w-4 h-4 mr-1" />
//                   Type de coiffure *
//                 </label>
//                 <select
//                   name="hairstyleType"
//                   value={formData.hairstyleType}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 >
//                   <option value="">Sélectionnez une coiffure</option>
//                   <optgroup label="Locks">
//                     {hairstyles.filter(h => h.category === 'Locks').map(hairstyle => (
//                       <option key={hairstyle.id} value={hairstyle.name}>
//                         {hairstyle.name} - {hairstyle.duration}
//                       </option>
//                     ))}
//                   </optgroup>
//                   <optgroup label="Tresses">
//                     {hairstyles.filter(h => h.category === 'Tresses').map(hairstyle => (
//                       <option key={hairstyle.id} value={hairstyle.name}>
//                         {hairstyle.name} - {hairstyle.duration}
//                       </option>
//                     ))}
//                   </optgroup>
//                   <optgroup label="Entretien">
//                     {hairstyles.filter(h => h.category === 'Entretien').map(hairstyle => (
//                       <option key={hairstyle.id} value={hairstyle.name}>
//                         {hairstyle.name} - {hairstyle.duration}
//                       </option>
//                     ))}
//                   </optgroup>
//                   <option value="autre">Autre (précisez dans le message)</option>
//                 </select>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Calendar className="inline w-4 h-4 mr-1" />
//                     Date souhaitée *
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={handleInputChange}
//                     required
//                     min={new Date().toISOString().split('T')[0]}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     <Clock className="inline w-4 h-4 mr-1" />
//                     Heure préférée *
//                   </label>
//                   <select
//                     name="time"
//                     value={formData.time}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   >
//                     <option value="">Sélectionnez une heure</option>
//                     {timeSlots.map(slot => (
//                       <option key={slot} value={slot}>{slot}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message supplémentaire
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
//                   placeholder="Informations supplémentaires, demandes particulières..."
//                 />
//               </div>

//               <WhatsAppButton
//                 className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
//                 formData={formData}
//               >
//                 <Calendar size={20} />
//                 <span>Confirmer le rendez-vous sur WhatsApp</span>
//               </WhatsAppButton>
//             </form>
//           </motion.div>

//           {/* Informations importantes */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ delay: 0.4 }}
//             className="space-y-6"
//           >
//             <div className="bg-primary bg-opacity-10 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-secondary mb-4">💡 Comment ça marche ?</h3>
//               <ol className="space-y-3 text-gray-700">
//                 <li className="flex items-start">
//                   <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
//                   Remplissez le formulaire de réservation
//                 </li>
//                 <li className="flex items-start">
//                   <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
//                   Cliquez sur "Confirmer le rendez-vous"
//                 </li>
//                 <li className="flex items-start">
//                   <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
//                   Vous serez redirigé vers WhatsApp pour finalisation
//                 </li>
//                 <li className="flex items-start">
//                   <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">4</span>
//                   Nous confirmons votre rendez-vous par message
//                 </li>
//               </ol>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-secondary mb-4">📋 Informations importantes</h3>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   Veuillez arriver 10 minutes avant votre rendez-vous
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   Annulation possible jusqu'à 24h à l'avance
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   Paiement en espèces ou mobile money accepté
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   Première consultation ? Prévoir 15 minutes supplémentaires
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold text-secondary mb-4">⏰ Horaires d'ouverture</h3>
//               <div className="space-y-2 text-gray-700">
//                 <div className="flex justify-between">
//                   <span>Lundi - Vendredi:</span>
//                   <span className="font-semibold">9h00 - 19h00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Samedi:</span>
//                   <span className="font-semibold">9h00 - 18h00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Dimanche:</span>
//                   <span className="font-semibold text-red-500">Fermé</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-accent bg-opacity-20 rounded-2xl p-6">
//               <h3 className="text-xl font-bold text-secondary mb-2">📞 Contact direct</h3>
//               <p className="text-gray-700 mb-4">
//                 Vous préférez parler directement ? Contactez-nous sur WhatsApp :
//               </p>
//               <WhatsAppButton className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
//                 Appeler sur WhatsApp
//               </WhatsAppButton>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Scissors, 
  User, 
  Phone, 
  MapPin, 
  Home, 
  Building,
  Star,
  Shield,
  Heart,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import { hairstyles, siteConfig } from '../data/siteData';
import WhatsAppButton from '../components/WhatsAppButton';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    hairstyleType: '',
    date: '',
    time: '',
    locationType: 'domicile',
    address: '',
    message: ''
  });

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-primary/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête hero */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6"
          >
            <Calendar className="text-white" size={32} />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
            Prendre Rendez-vous
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Service de coiffure à domicile disponible • 
            <span className="text-primary font-semibold"> Expertise locks & tresses</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire de rendez-vous */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-secondary mb-3">
                  Formulaire de Réservation
                </h2>
                <p className="text-gray-600 text-lg">
                  Remplissez ce formulaire et nous vous confirmerons le rendez-vous sur WhatsApp
                </p>
              </div>

              <motion.form 
                className="space-y-8"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                {/* Informations personnelles */}
                <motion.div
                  variants={fadeInUp}
                  className="grid md:grid-cols-2 gap-6"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <User className="w-5 h-5 text-primary mr-2" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-gray-500"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-2" />
                      Numéro WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-gray-500"
                      placeholder="Votre numéro WhatsApp"
                    />
                  </div>
                </motion.div>

                {/* Type de coiffure */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                    <Scissors className="w-5 h-5 text-primary mr-2" />
                    Type de coiffure *
                  </label>
                  <select
                    name="hairstyleType"
                    value={formData.hairstyleType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 appearance-none"
                  >
                    <option value="" className="text-gray-500">Sélectionnez une coiffure</option>
                    <optgroup label="👑 Locks - Notre spécialité" className="text-gray-900">
                      {hairstyles.filter(h => h.category === 'Locks').map(hairstyle => (
                        <option key={hairstyle.id} value={hairstyle.name} className="text-gray-900">
                          {hairstyle.name} - {hairstyle.duration} - {hairstyle.price?.toLocaleString()} FCFA
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💫 Tresses Africaines" className="text-gray-900">
                      {hairstyles.filter(h => h.category === 'Tresses').map(hairstyle => (
                        <option key={hairstyle.id} value={hairstyle.name} className="text-gray-900">
                          {hairstyle.name} - {hairstyle.duration} - {hairstyle.price?.toLocaleString()} FCFA
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="✨ Entretien & Soins" className="text-gray-900">
                      {hairstyles.filter(h => h.category === 'Entretien').map(hairstyle => (
                        <option key={hairstyle.id} value={hairstyle.name} className="text-gray-900">
                          {hairstyle.name} - {hairstyle.duration} - {hairstyle.price?.toLocaleString()} FCFA
                        </option>
                      ))}
                    </optgroup>
                    <option value="autre" className="text-gray-900">🎯 Autre (précisez dans le message)</option>
                  </select>
                </motion.div>

                {/* Lieu du rendez-vous */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold text-gray-800 mb-4">
                    📍 Lieu du rendez-vous *
                  </label>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 ${
                        formData.locationType === 'domicile' 
                          ? 'border-primary bg-primary/10 shadow-md' 
                          : 'border-gray-300 bg-white hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="locationType"
                        value="domicile"
                        checked={formData.locationType === 'domicile'}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="flex items-center space-x-3">
                        <Home className={`w-6 h-6 ${
                          formData.locationType === 'domicile' ? 'text-primary' : 'text-gray-600'
                        }`} />
                        <div>
                          <div className={`font-semibold ${
                            formData.locationType === 'domicile' ? 'text-gray-900' : 'text-gray-800'
                          }`}>À domicile</div>
                          <div className={`text-sm ${
                            formData.locationType === 'domicile' ? 'text-gray-700' : 'text-gray-600'
                          }`}>Service de déplacement</div>
                        </div>
                      </div>
                    </motion.label>

                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`cursor-pointer border-2 rounded-xl p-4 transition-all duration-300 ${
                        formData.locationType === 'salon' 
                          ? 'border-primary bg-primary/10 shadow-md' 
                          : 'border-gray-300 bg-white hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="locationType"
                        value="salon"
                        checked={formData.locationType === 'salon'}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="flex items-center space-x-3">
                        <Building className={`w-6 h-6 ${
                          formData.locationType === 'salon' ? 'text-primary' : 'text-gray-600'
                        }`} />
                        <div>
                          <div className={`font-semibold ${
                            formData.locationType === 'salon' ? 'text-gray-900' : 'text-gray-800'
                          }`}>Au salon</div>
                          <div className={`text-sm ${
                            formData.locationType === 'salon' ? 'text-gray-700' : 'text-gray-600'
                          }`}>{siteConfig.address}</div>
                        </div>
                      </div>
                    </motion.label>
                  </div>

                  {formData.locationType === 'domicile' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4"
                    >
                      <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        <MapPin className="w-5 h-5 text-primary mr-2" />
                        Adresse complète *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 placeholder-gray-500"
                        placeholder="Votre adresse complète (quartier, rue, repères...)"
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        💡 Nous couvrons toute la ville d'Abidjan. Frais de déplacement inclus.
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Date et heure */}
                <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      <Clock className="w-5 h-5 text-primary mr-2" />
                      Heure préférée *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 appearance-none"
                    >
                      <option value="" className="text-gray-500">Sélectionnez une heure</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot} className="text-gray-900">{slot}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                {/* Message supplémentaire */}
                <motion.div variants={fadeInUp}>
                  <label className="block text-sm font-semibold text-gray-800 mb-3">
                    💬 Message supplémentaire
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 bg-white text-gray-900 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none placeholder-gray-500"
                    placeholder="Informations supplémentaires, demandes particulières, allergies, etc."
                  />
                </motion.div>

                {/* Bouton d'envoi */}
                <motion.div variants={fadeInUp}>
                  <WhatsAppButton
                    className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                    formData={formData}
                  >
                    <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                    <span>Confirmer le rendez-vous sur WhatsApp</span>
                  </WhatsAppButton>
                  <p className="text-center text-gray-600 text-sm mt-3">
                    📱 Vous serez redirigé vers WhatsApp pour finaliser la réservation
                  </p>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>

          {/* Sidebar Informations */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Avantages à domicile */}
            <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Home className="w-6 h-6 mr-2" />
                Service à Domicile
              </h3>
              <div className="space-y-3">
                {[
                  "🚗 Déplacement gratuit dans Abidjan",
                  "💎 Matériel professionnel inclus",
                  "🏠 Confort et intimité chez vous",
                  "⏰ Gain de temps considérable",
                  "👨‍👩‍👧‍👦 Possibilité de soins groupés"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3 text-sm"
                  >
                    <CheckCircle size={16} className="text-green-300 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process de réservation */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Star className="w-6 h-6 text-primary mr-2" />
                Comment ça marche ?
              </h3>
              <ol className="space-y-4">
                {[
                  { step: "1", text: "Remplissez le formulaire de réservation" },
                  { step: "2", text: "Choisissez 'À domicile' ou 'Au salon'" },
                  { step: "3", text: "Confirmez sur WhatsApp en 1 clic" },
                  { step: "4", text: "Recevez confirmation sous 30min" }
                ].map((item, index) => (
                  <motion.li
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Garanties */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Shield className="w-6 h-6 text-primary mr-2" />
                Nos Garanties
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Shield, text: "Produits 100% naturels et bio" },
                  { icon: Heart, text: "Expertise certifiée locks & tresses" },
                  { icon: Star, text: "Satisfaction garantie ou remboursé" },
                  { icon: CheckCircle, text: "Hygiène et sécurité optimales" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3 text-sm text-gray-700"
                  >
                    <item.icon size={16} className="text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact direct */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                Contact Direct
              </h3>
              <p className="text-green-100 mb-4 text-sm">
                Une question urgente ? Contactez-nous directement sur WhatsApp :
              </p>
              <WhatsAppButton className="w-full bg-white text-green-600 hover:bg-green-50 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <MessageCircle size={18} />
                <span>Écrire sur WhatsApp</span>
              </WhatsAppButton>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-secondary mb-4 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-2" />
                Horaires
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Lun - Ven</span>
                  <span className="font-semibold text-primary">8h - 19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span>Samedi</span>
                  <span className="font-semibold text-primary">8h - 18h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Dimanche</span>
                  <span className="font-semibold text-red-500">Sur RDV</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;