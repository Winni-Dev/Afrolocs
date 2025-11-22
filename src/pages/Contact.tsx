// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';
// import { siteConfig } from '../data/siteData';
// import WhatsAppButton from '../components/WhatsAppButton';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Ici vous pouvez ajouter l'envoi par email si backend
//     console.log('Formulaire envoyé:', formData);
//     alert('Message envoyé! Nous vous répondrons rapidement.');
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* En-tête */}
//         <motion.div
//           {...fadeInUp}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
//             Contactez-Nous
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Une question ? Une demande particulière ? N'hésitez pas à nous contacter, 
//             nous vous répondrons avec plaisir.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Informations de contact */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <h2 className="text-3xl font-bold text-secondary mb-6">Nos Coordonnées</h2>
//               <p className="text-gray-600 mb-8">
//                 Nous sommes à votre disposition pour toute question concernant nos services, 
//                 produits ou pour prendre rendez-vous.
//               </p>
//             </div>

//             {/* Cartes d'information */}
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
//                 <div className="bg-primary bg-opacity-10 p-3 rounded-full">
//                   <MapPin className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-secondary mb-2">Adresse</h3>
//                   <p className="text-gray-600">{siteConfig.address}</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
//                 <div className="bg-primary bg-opacity-10 p-3 rounded-full">
//                   <Phone className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-secondary mb-2">Téléphone</h3>
//                   <a 
//                     href={`tel:${siteConfig.phone}`}
//                     className="text-gray-600 hover:text-primary transition-colors"
//                   >
//                     {siteConfig.phone}
//                   </a>
//                   <div className="mt-2">
//                     <WhatsAppButton className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
//                       Écrire sur WhatsApp
//                     </WhatsAppButton>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
//                 <div className="bg-primary bg-opacity-10 p-3 rounded-full">
//                   <Mail className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-secondary mb-2">Email</h3>
//                   <a 
//                     href={`mailto:${siteConfig.email}`}
//                     className="text-gray-600 hover:text-primary transition-colors"
//                   >
//                     {siteConfig.email}
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
//                 <div className="bg-primary bg-opacity-10 p-3 rounded-full">
//                   <Clock className="text-primary" size={24} />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-secondary mb-2">Horaires</h3>
//                   <div className="text-gray-600 space-y-1">
//                     <p>Lundi - Vendredi: 9h00 - 19h00</p>
//                     <p>Samedi: 9h00 - 18h00</p>
//                     <p>Dimanche: Fermé</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Réseaux sociaux */}
//             <div className="pt-6">
//               <h3 className="font-semibold text-secondary mb-4">Suivez-nous</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href={siteConfig.socialMedia.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-secondary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
//                 >
//                   <span className="sr-only">Instagram</span>
//                   📷
//                 </a>
//                 <a
//                   href={siteConfig.socialMedia.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-secondary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
//                 >
//                   <span className="sr-only">Facebook</span>
//                   📘
//                 </a>
//               </div>
//             </div>
//           </motion.div>

//           {/* Formulaire de contact */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ delay: 0.4 }}
//             className="bg-white rounded-2xl shadow-lg p-8"
//           >
//             <h2 className="text-2xl font-bold text-secondary mb-6">Envoyez-nous un message</h2>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Nom complet *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                     placeholder="Votre nom"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                     placeholder="votre@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Sujet *
//                 </label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   placeholder="Sujet de votre message"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
//                   placeholder="Votre message..."
//                 />
//               </div>

//               <motion.button
//                 type="submit"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
//               >
//                 <Send size={20} />
//                 <span>Envoyer le message</span>
//               </motion.button>
//             </form>

//             <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//               <p className="text-sm text-gray-600 text-center">
//                 💡 <strong>Conseil :</strong> Pour une réponse plus rapide, contactez-nous directement sur WhatsApp !
//               </p>
//               <div className="mt-3">
//                 <WhatsAppButton className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
//                   Contacter sur WhatsApp
//                 </WhatsAppButton>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Carte Google Maps */}
//         <motion.div
//           {...fadeInUp}
//           transition={{ delay: 0.6 }}
//           className="mt-16"
//         >
//           <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Notre Salon</h2>
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="h-96 bg-gray-200 flex items-center justify-center">
//               {/* Remplacez par votre intégration Google Maps */}
//               <div className="text-center text-gray-500">
//                 <MapPin size={48} className="mx-auto mb-4" />
//                 <p className="text-lg">Carte Google Maps</p>
//                 <p className="text-sm">Intégration à configurer avec votre API key</p>
//                 <p className="text-sm mt-2">{siteConfig.address}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, Send } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire envoyé:', formData);
    alert('Message envoyé! Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Une demande particulière ? N'hésitez pas à nous contacter, 
            nous vous répondrons avec plaisir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Nos Coordonnées</h2>
              <p className="text-gray-600 mb-8">
                Nous sommes à votre disposition pour toute question concernant nos services, 
                produits ou pour prendre rendez-vous.
              </p>
            </div>

            {/* Cartes d'information */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Adresse</h3>
                  <p className="text-gray-600">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Téléphone</h3>
                  <a 
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <div className="mt-2">
                    <WhatsAppButton className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                      Écrire sur WhatsApp
                    </WhatsAppButton>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Email</h3>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Horaires</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Lundi - Vendredi: 9h00 - 19h00</p>
                    <p>Samedi: 9h00 - 18h00</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-6">
              <h3 className="font-semibold text-secondary mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href={siteConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a
                  href={siteConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-secondary mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder-gray-500"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder-gray-500"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder-gray-500"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none placeholder-gray-500"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Envoyer le message</span>
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                💡 <strong>Conseil :</strong> Pour une réponse plus rapide, contactez-nous directement sur WhatsApp !
              </p>
              <div className="mt-3">
                <WhatsAppButton className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Contacter sur WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Carte Google Maps */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Notre Salon</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg">Carte Google Maps</p>
                <p className="text-sm">Intégration à configurer avec votre API key</p>
                <p className="text-sm mt-2">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;