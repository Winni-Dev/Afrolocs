// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Product } from '../types';
// import Modal from './Modal';
// import WhatsAppButton from './WhatsAppButton';

// interface OrderModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   product: Product | null;
// }

// const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: '',
//     date: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Le bouton WhatsApp gère la redirection
//   };

//   if (!product) return null;

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Commander le produit">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Produit sélectionné */}
//         <div className="bg-gray-50 p-4 rounded-lg">
//           <h4 className="font-semibold text-secondary">Produit à commander :</h4>
//           <p className="text-primary font-medium">{product.name}</p>
//           <p className="text-lg font-bold">{product.price.toLocaleString()} FCFA</p>
//         </div>

//         {/* Champs du formulaire */}
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Nom complet *
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Votre nom complet"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Numéro WhatsApp *
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Votre numéro WhatsApp"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Localité / Adresse de livraison *
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//               placeholder="Votre adresse de livraison"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Date souhaitée *
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Bouton d'envoi */}
//         <WhatsAppButton
//           productName={product.name}
//           isOrder={true}
//           className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
//         >
//           Envoyer la commande sur WhatsApp
//         </WhatsAppButton>

//         <p className="text-sm text-gray-500 text-center">
//           Vous serez redirigé vers WhatsApp pour finaliser votre commande
//         </p>
//       </form>
//     </Modal>
//   );
// };

// export default OrderModal;



import React, { useState } from 'react';
import { Product } from '../types';
import Modal from './Modal';
import WhatsAppButton from './WhatsAppButton';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Le bouton WhatsApp gère la redirection
  };

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Commander le produit">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Produit sélectionné */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl border border-primary/20">
          <h4 className="font-semibold text-secondary text-sm uppercase tracking-wide mb-2">Produit sélectionné</h4>
          <p className="text-primary font-bold text-lg">{product.name}</p>
          <p className="text-2xl font-bold text-secondary mt-2">{product.price.toLocaleString()} FCFA</p>
        </div>

        {/* Champs du formulaire */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
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
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Numéro WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
              placeholder="Votre numéro WhatsApp"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Localité / Adresse de livraison *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-gray-900 placeholder-gray-500"
              placeholder="Votre adresse de livraison"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
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
        </div>

        {/* Bouton d'envoi avec formData */}
        <WhatsAppButton
          productName={product.name}
          isOrder={true}
          formData={formData}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Envoyer la commande sur WhatsApp
        </WhatsAppButton>

        <p className="text-sm text-gray-500 text-center">
          📱 Vous serez redirigé vers WhatsApp pour finaliser votre commande
        </p>
      </form>
    </Modal>
  );
};

export default OrderModal;