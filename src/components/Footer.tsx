import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook, Scissors } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { name: 'Accueil', href: '/' },
        { name: 'Produits', href: '/products' },
        { name: 'Coiffures', href: '/hairstyles' },
        { name: 'Rendez-vous', href: '/appointment' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Locks Traditionnelles', href: '/hairstyles' },
        { name: 'Tresses Africaines', href: '/hairstyles' },
        { name: 'Entretien Locks', href: '/hairstyles' },
        { name: 'Produits Naturels', href: '/products' },
        { name: 'Consultation', href: '/appointment' },
      ]
    },
    {
      title: 'Informations',
      links: [
        { name: 'À propos', href: '/' },
        { name: 'Mentions légales', href: '#' },
        { name: 'Politique de confidentialité', href: '#' },
        { name: 'CGV', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Section principale du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Colonne Logo et description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Scissors className="text-primary" size={32} />
                <span className="text-2xl font-bold">{siteConfig.salonName}</span>
              </div>
              <p className="text-gray-300 mb-6">
                Spécialistes en locks et tresses africaines depuis plus de 5 ans. 
                Nous allions tradition et modernité pour sublimer votre beauté naturelle.
              </p>
              
              <WhatsAppButton className="bg-primary text-white hover:bg-opacity-90 px-6 py-3 rounded-lg font-semibold transition-colors">
                Prendre Rendez-vous
              </WhatsAppButton>
            </motion.div>
          </div>

          {/* Sections de liens */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Colonne Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">{siteConfig.address}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-primary">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a
                  href={siteConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={siteConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section de copyright */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-sm"
            >
              © {currentYear} {siteConfig.salonName}. Tous droits réservés.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6 text-sm"
            >
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                CGV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;