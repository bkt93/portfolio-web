import { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role1: string;
    role2: string;
    description: string;
    cta: string;
    status: string;
    photoLabel: string;
  };
  about: {
    title: string;
    greeting: string;
    p1: string;
    p2: string;
    downloadCv: string;
    illustration: string;
    skillsTitle: string;
  };
  projects: {
    title: string;
    viewAll: string;
    live: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy un',
      role1: 'Desarrollador',
      role2: 'Full-Stack',
      description: 'Actualmente enfocado en Desarrollo Frontend, Backend, Diseño de Bases de Datos y en crear experiencias digitales completas.',
      cta: 'Ver más ↓',
      status: 'Trabajando en mi Portafolio',
      photoLabel: 'Tu Foto',
    },
    about: {
      title: '#sobre-mi',
      greeting: '¡Hola, soy un Desarrollador Full-Stack!',
      p1: 'Soy un apasionado desarrollador full-stack capaz de construir aplicaciones web completas desde el frontend hasta el backend. Desarrollo interfaces de usuario modernas y responsivas, APIs robustas y soluciones de base de datos eficientes.',
      p2: 'Me apasiona mejorar mis habilidades de programación y desarrollar aplicaciones de extremo a extremo. Siempre me esfuerzo por aprender sobre las tecnologías y frameworks más nuevos, tanto en el lado del cliente como del servidor.',
      downloadCv: 'Descargar CV ↓',
      illustration: 'Ilustración',
      skillsTitle: '#habilidades',
    },
    projects: {
      title: '#proyectos',
      viewAll: 'Ver todos →',
      live: 'Ver Demo <->',
      items: [
        {
          title: 'Proyecto Ejemplo 1',
          description: 'Una aplicación web moderna construida con React y TypeScript que ofrece una experiencia de usuario excepcional.',
        },
        {
          title: 'Proyecto Ejemplo 2',
          description: 'Plataforma de gestión con diseño responsive y funcionalidades avanzadas.',
        },
        {
          title: 'Proyecto Ejemplo 3',
          description: 'Sistema innovador con arquitectura escalable y código limpio.',
        },
      ],
    },
    contact: {
      title: '#contacto',
      description: 'Estoy interesado en oportunidades freelance. Sin embargo, si tienes otra petición o pregunta, no dudes en contactarme.',
      formTitle: 'Envíame un mensaje',
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Tu mensaje...',
      sendButton: 'Enviar Mensaje',
      successMessage: '¡Gracias por tu mensaje! Te contactaré pronto.',
    },
  },
  en: {
    nav: {
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm a",
      role1: 'Full-Stack',
      role2: 'Developer',
      description: "I'm currently into Frontend Dev, Backend Dev, Database Design, and creating complete digital experiences.",
      cta: 'Scroll Down ↓',
      status: 'Currently working on Portfolio',
      photoLabel: 'Your Photo',
    },
    about: {
      title: '#about-me',
      greeting: "Hello, I'm a Full-Stack Developer!",
      p1: "I'm a passionate full-stack developer who can build complete web applications from frontend to backend. I develop responsive and modern user interfaces, robust APIs, and efficient database solutions.",
      p2: "I am very passionate about improving my coding skills & developing end-to-end applications. I always strive to learn about the newest technologies and frameworks, both on the client and server side.",
      downloadCv: 'Download CV ↓',
      illustration: 'Illustration',
      skillsTitle: '#skills',
    },
    projects: {
      title: '#projects',
      viewAll: 'View all →',
      live: 'Live <->',
      items: [
        {
          title: 'Example Project 1',
          description: 'A modern web application built with React and TypeScript offering an exceptional user experience.',
        },
        {
          title: 'Example Project 2',
          description: 'Management platform with responsive design and advanced features.',
        },
        {
          title: 'Example Project 3',
          description: 'Innovative system with scalable architecture and clean code.',
        },
      ],
    },
    contact: {
      title: '#contacts',
      description: "I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me.",
      formTitle: 'Message me here',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message...',
      sendButton: 'Send Message',
      successMessage: 'Thanks for your message! I will contact you soon.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
