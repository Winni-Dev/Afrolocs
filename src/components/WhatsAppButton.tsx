// import React from 'react';
// import { motion } from 'framer-motion';
// import { MessageCircle } from 'lucide-react';
// import { siteConfig } from '../data/siteData';

// interface WhatsAppButtonProps {
//   productName?: string;
//   isOrder?: boolean;
//   className?: string;
//   children?: React.ReactNode;
//   formData?: any;
// }

// const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
//   productName, 
//   isOrder = false, 
//   className = "",
//   children,
//   formData
// }) => {
//   const generateWhatsAppUrl = () => {
//     const baseUrl = `https://wa.me/${siteConfig.phone}`;
    
//     if (isOrder && productName) {
//       const text = `🎯 *COMMANDE PRODUIT*%0A%0A` +
//                    `📦 *Produit:* ${productName}%0A` +
//                    `👤 *Nom:* ${formData?.fullName || ''}%0A` +
//                    `📞 *Téléphone:* ${formData?.phone || ''}%0A` +
//                    `📍 *Localité:* ${formData?.address || ''}%0A` +
//                    `📅 *Date souhaitée:* ${formData?.date || ''}`;
//       return `${baseUrl}?text=${text}`;
//     } else if (formData) {
//       const text = `💇‍♀️ *PRISE DE RENDEZ-VOUS*%0A%0A` +
//                    `👤 *Nom:* ${formData.fullName}%0A` +
//                    `📞 *Téléphone:* ${formData.phone}%0A` +
//                    `💇 *Type de coiffure:* ${formData.hairstyleType}%0A` +
//                    `📅 *Date souhaitée:* ${formData.date}%0A` +
//                    `⏰ *Heure préférée:* ${formData.time}%0A` +
//                    `💬 *Message:* ${formData.message || 'Aucun message supplémentaire'}`;
//       return `${baseUrl}?text=${text}`;
//     }
    
//     // Message par défaut
//     const defaultText = `Bonjour ${siteConfig.salonName} !%0AJe suis intéressé(e) par vos services, pourriez-vous me renseigner ?`;
//     return `${baseUrl}?text=${defaultText}`;
//   };

//   const handleClick = () => {
//     const url = generateWhatsAppUrl();
//     window.open(url, '_blank');
//   };

//   if (children) {
//     return (
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleClick}
//         className={className}
//       >
//         {children}
//       </motion.button>
//     );
//   }

//   return (
//     <motion.a
//       href={generateWhatsAppUrl()}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={`bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-all duration-200 ${className}`}
//     >
//       <MessageCircle size={20} />
//       <span>WhatsApp</span>
//     </motion.a>
//   );
// };

// export default WhatsAppButton;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { MessageCircle } from 'lucide-react';
// import { siteConfig } from '../data/siteData';

// interface WhatsAppButtonProps {
//   productName?: string;
//   isOrder?: boolean;
//   className?: string;
//   children?: React.ReactNode;
//   formData?: any;
// }

// const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
//   productName, 
//   isOrder = false, 
//   className = "",
//   children,
//   formData
// }) => {
//   const generateWhatsAppUrl = () => {
//     const baseUrl = `https://wa.me/${siteConfig.phone}`;
    
//     if (isOrder && productName) {
//       const text = `🎯 *COMMANDE PRODUIT*%0A%0A` +
//                    `📦 *Produit:* ${productName}%0A` +
//                    `👤 *Nom:* ${formData?.fullName || ''}%0A` +
//                    `📞 *Téléphone:* ${formData?.phone || ''}%0A` +
//                    `📍 *Localité:* ${formData?.address || ''}%0A` +
//                    `📅 *Date souhaitée:* ${formData?.date || ''}`;
//       return `${baseUrl}?text=${text}`;
//     } else if (formData) {
//       const locationText = formData.locationType === 'domicile' 
//         ? `📍 *À DOMICILE*%0A🏠 *Adresse:* ${formData.address}%0A`
//         : `🏢 *AU SALON*%0A📌 *Adresse:* ${siteConfig.address}%0A`;
      
//       const text = `💇‍♀️ *DEMANDE DE RENDEZ-VOUS*%0A%0A` +
//                    `👤 *Nom:* ${formData.fullName}%0A` +
//                    `📞 *Téléphone:* ${formData.phone}%0A` +
//                    `💇 *Type de coiffure:* ${formData.hairstyleType}%0A` +
//                    locationText +
//                    `📅 *Date souhaitée:* ${formData.date}%0A` +
//                    `⏰ *Heure préférée:* ${formData.time}%0A` +
//                    `💬 *Message:* ${formData.message || 'Aucun message supplémentaire'}%0A%0A` +
//                    `_Merci de confirmer ce rendez-vous_ ✨`;
//       return `${baseUrl}?text=${text}`;
//     }
    
//     // Message par défaut
//     const defaultText = `Bonjour ${siteConfig.salonName} !%0AJe suis intéressé(e) par vos services, pourriez-vous me renseigner ?`;
//     return `${baseUrl}?text=${defaultText}`;
//   };

//   const handleClick = (e: React.MouseEvent) => {
//     e.preventDefault();
    
//     // Validation basique
//     if (formData) {
//       const requiredFields = ['fullName', 'phone', 'hairstyleType', 'date', 'time'];
//       const missingFields = requiredFields.filter(field => !formData[field]);
      
//       if (missingFields.length > 0) {
//         alert('Veuillez remplir tous les champs obligatoires (*)');
//         return;
//       }
      
//       if (formData.locationType === 'domicile' && !formData.address) {
//         alert('Veuillez renseigner votre adresse pour le service à domicile');
//         return;
//       }
//     }
    
//     const url = generateWhatsAppUrl();
//     window.open(url, '_blank');
//   };

//   if (children) {
//     return (
//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         onClick={handleClick}
//         className={className}
//       >
//         {children}
//       </motion.button>
//     );
//   }

//   return (
//     <motion.a
//       href={generateWhatsAppUrl()}
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={`bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-all duration-200 ${className}`}
//     >
//       <MessageCircle size={20} />
//       <span>WhatsApp</span>
//     </motion.a>
//   );
// };

// export default WhatsAppButton;


import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface WhatsAppButtonProps {
  productName?: string;
  isOrder?: boolean;
  className?: string;
  children?: React.ReactNode;
  formData?: any;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  productName, 
  isOrder = false, 
  className = "",
  children,
  formData
}) => {
  const generateWhatsAppUrl = () => {
    const baseUrl = `https://wa.me/${siteConfig.phone}`;
    
    if (isOrder && productName && formData) {
      const text = `🛍️ *COMMANDE PRODUIT*%0A%0A` +
                   `📦 *Produit:* ${productName}%0A` +
                   `👤 *Nom:* ${formData.fullName}%0A` +
                   `📞 *Téléphone:* ${formData.phone}%0A` +
                   `📍 *Adresse:* ${formData.address}%0A` +
                   `📅 *Date souhaitée:* ${formData.date}%0A%0A` +
                   `_Merci de confirmer cette commande_ ✨`;
      return `${baseUrl}?text=${text}`;
    } else if (formData) {
      const text = `💇‍♀️ *DEMANDE DE RENDEZ-VOUS*%0A%0A` +
                   `👤 *Nom:* ${formData.fullName}%0A` +
                   `📞 *Téléphone:* ${formData.phone}%0A` +
                   `💇 *Type de coiffure:* ${formData.hairstyleType}%0A` +
                   `📍 *Lieu:* ${formData.locationType === 'domicile' ? 'À DOMICILE' : 'AU SALON'}%0A` +
                   (formData.locationType === 'domicile' ? `🏠 *Adresse:* ${formData.address}%0A` : '') +
                   `📅 *Date souhaitée:* ${formData.date}%0A` +
                   `⏰ *Heure préférée:* ${formData.time}%0A` +
                   `💬 *Message:* ${formData.message || 'Aucun message supplémentaire'}%0A%0A` +
                   `_Merci de confirmer ce rendez-vous_ ✨`;
      return `${baseUrl}?text=${text}`;
    }
    
    // Message par défaut
    const defaultText = `Bonjour ${siteConfig.salonName} !%0AJe suis intéressé(e) par vos services, pourriez-vous me renseigner ?`;
    return `${baseUrl}?text=${defaultText}`;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Validation basique pour les commandes
    if (isOrder && formData) {
      const requiredFields = ['fullName', 'phone', 'address', 'date'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        alert('Veuillez remplir tous les champs obligatoires (*)');
        return;
      }
    }
    
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
  };

  if (children) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
        className={className}
        type="button"
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={generateWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-green-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-all duration-200 ${className}`}
    >
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;