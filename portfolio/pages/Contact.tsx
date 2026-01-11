import React, { useState } from 'react';

// Interface pour typer l'état du formulaire
interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
    alert('Message envoyé avec succès !');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="max-w-2xl mx-auto my-12 p-8 bg-neutral-800 rounded-xl shadow-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-fuchsia-400">Contactez-moi</h2>
        <p className="text-gray-400 mt-2">Une question ou une proposition ? Envoyez-moi un message.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ Nom */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
            placeholder="Jean Dupont"
          />
        </div>

        {/* Champ Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all"
            placeholder="jean@exemple.fr"
          />
        </div>

        {/* Champ Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Comment puis-je vous aider ?"
          />
        </div>

        {/* Bouton Envoyer */}
        <button 
        className="w-full px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-fuchsia-600 hover:cursor-pointer transition-colors duration-300" 
        type="submit"
        >
          Envoyer le message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;