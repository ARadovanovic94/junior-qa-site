import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'sr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_services: 'Services',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Contact',
    hero_location: 'Belgrade, Serbia',
    hero_title: 'Aleksandar Radovanović',
    hero_subtitle: 'Software Quality & Web Solutions',
    hero_description: 'Delivering reliable testing and modern web development for businesses that demand excellence',
    hero_cta_primary: 'Explore Services',
    hero_cta_secondary: 'View Work',
    about_title: 'About',
    about_subtitle: 'Building quality through discipline and precision',
    about_p1: 'I approach software quality assurance with the same discipline and attention to detail that defined my 15-year career as a professional athlete. Quality is not negotiable.',
    about_p2: 'My work centers on systematic testing, clear documentation, and reliable outcomes. I help teams ship with confidence and businesses launch web solutions that perform.',
    about_p3: 'Based in Belgrade, I work with international teams and clients, fluent in English, German, and Serbian.',
    about_card1_title: 'Systematic',
    about_card1_desc: 'Methodical testing approach ensuring comprehensive coverage and reliable results',
    about_card2_title: 'Collaborative',
    about_card2_desc: 'Clear communication and documentation that keeps teams aligned',
    about_card3_title: 'Results-Focused',
    about_card3_desc: 'Delivering measurable outcomes, from bug-free releases to live websites',
    services_title: 'Services',
    services_subtitle: 'Professional quality assurance and web development',
    services_qa_title: 'QA & Software Testing',
    services_qa_desc: 'Comprehensive testing services for web applications, ensuring quality before deployment',
    services_qa_1: 'Manual & Automated Testing',
    services_qa_2: 'Test Case Design & Execution',
    services_qa_3: 'Bug Documentation & Tracking',
    services_qa_4: 'Responsive & Cross-Browser Testing',
    services_qa_5: 'API Testing with Postman & SoapUI',
    services_qa_6: 'Performance Testing with JMeter',
    services_web_title: 'Web Development',
    services_web_desc: 'Modern, responsive websites for small businesses and professionals',
    services_web_1: 'Business Websites & Landing Pages',
    services_web_2: 'Responsive Design (Mobile-First)',
    services_web_3: 'Fast Loading & SEO Optimized',
    services_web_4: 'Content Management Systems',
    services_web_5: 'E-commerce Solutions',
    services_web_6: 'Ongoing Maintenance & Support',
    services_tools_title: 'Technical Stack',
    services_tools_desc: 'Modern tools and technologies',
    portfolio_title: 'Portfolio',
    portfolio_subtitle: 'Selected work and case studies',
    portfolio_qa_title: 'QA Testing Project',
    portfolio_qa_company: 'Inner-Temple Web Application',
    portfolio_qa_role: 'QA Assistant',
    portfolio_qa_challenge: 'Challenge',
    portfolio_qa_challenge_text: 'Complex web application requiring thorough validation of form logic, calculations, and responsive behavior across devices.',
    portfolio_qa_approach: 'Approach',
    portfolio_qa_approach_text: 'Systematic manual testing of all user flows, validation logic, and responsive layouts. Used React Dev Tools and browser DevTools for debugging.',
    portfolio_qa_results: 'Results',
    portfolio_qa_result_1: 'Identified and documented critical validation issues',
    portfolio_qa_result_2: 'Verified calculation accuracy across scenarios',
    portfolio_qa_result_3: 'Ensured consistent mobile and desktop experience',
    portfolio_support_title: 'Technical Support',
    portfolio_support_company: 'Multilingual Support Agent',
    portfolio_support_role: 'German & English Support',
    portfolio_support_challenge: 'Challenge',
    portfolio_support_challenge_text: 'Providing technical support and testing user scenarios in multiple languages.',
    portfolio_support_approach: 'Approach',
    portfolio_support_approach_text: 'Bilingual technical support combined with proactive bug identification during user interactions.',
    portfolio_support_results: 'Results',
    portfolio_support_result_1: 'Resolved user issues efficiently in German and English',
    portfolio_support_result_2: 'Identified bugs through real user scenarios',
    portfolio_support_result_3: 'Improved product quality through feedback',
    portfolio_cta_title: 'Open to New Projects',
    portfolio_cta_desc: 'Available for QA positions, testing contracts, and web development projects for businesses.',
    portfolio_cta_button: 'Get in Touch',
    contact_title: 'Contact',
    contact_subtitle: 'Let\'s discuss your project or opportunity',
    contact_email: 'Email',
    contact_location: 'Location',
    contact_connect_title: 'Connect',
    contact_availability: 'Available for QA positions, freelance testing, and web development projects',
    contact_availability_detail: 'Open to remote work and relocation opportunities',
    footer_rights: '© 2024 Aleksandar Radovanović. All rights reserved.',
    lang_sr: 'Srpski',
    lang_en: 'English',
  },
  sr: {
    nav_home: 'Početna',
    nav_about: 'O meni',
    nav_services: 'Usluge',
    nav_portfolio: 'Portfolio',
    nav_contact: 'Kontakt',
    hero_location: 'Beograd, Srbija',
    hero_title: 'Aleksandar Radovanović',
    hero_subtitle: 'Kvalitet softvera i web rešenja',
    hero_description: 'Pouzdano testiranje i moderna izrada sajtova za firme sa visokim standardima',
    hero_cta_primary: 'Pogledajte usluge',
    hero_cta_secondary: 'Vidite radove',
    about_title: 'O meni',
    about_subtitle: 'Kvalitet kroz disciplinu i preciznost',
    about_p1: 'Pristupu testiranju softvera sa istom disciplinom i pažnjom na detalje koje su obeležile moju 15-godišnju karijeru profesionalnog sportiste. Kvalitet nije opcija.',
    about_p2: 'Moj rad se zasniva na sistematskom testiranju, jasnoj dokumentaciji i pouzdanim rezultatima. Pomažem timovima da objavljuju softver sa sigurnošću i firmama da pokrenu web rešenja koja funkcionišu.',
    about_p3: 'Sa sedištem u Beogradu, radim sa međunarodnim timovima i klijentima, tečno govorim engleski, nemački i srpski.',
    about_card1_title: 'Sistematičan',
    about_card1_desc: 'Metodičan pristup testiranju koji obezbeđuje sveobuhvatnu pokrivenost i pouzdane rezultate',
    about_card2_title: 'Kolaborativan',
    about_card2_desc: 'Jasna komunikacija i dokumentacija koja održava timove usklađenim',
    about_card3_title: 'Fokus na rezultate',
    about_card3_desc: 'Isporučujem merljive rezultate, od izdanja bez grešaka do živih veb sajtova',
    services_title: 'Usluge',
    services_subtitle: 'Profesionalno testiranje kvaliteta i izrada web sajtova',
    services_qa_title: 'QA i testiranje softvera',
    services_qa_desc: 'Sveobuhvatne usluge testiranja za web aplikacije, obezbeđujući kvalitet pre objave',
    services_qa_1: 'Manuelno i automatizovano testiranje',
    services_qa_2: 'Dizajn i izvršavanje test slučajeva',
    services_qa_3: 'Dokumentacija i praćenje grešaka',
    services_qa_4: 'Responsive i cross-browser testiranje',
    services_qa_5: 'API testiranje sa Postman i SoapUI',
    services_qa_6: 'Testiranje performansi sa JMeter',
    services_web_title: 'Izrada web sajtova',
    services_web_desc: 'Moderni, responzivni sajtovi za mala preduzeća i profesionalce',
    services_web_1: 'Poslovni sajtovi i landing stranice',
    services_web_2: 'Responzivan dizajn (mobile-first)',
    services_web_3: 'Brzo učitavanje i SEO optimizacija',
    services_web_4: 'Sistemi za upravljanje sadržajem',
    services_web_5: 'E-commerce rešenja',
    services_web_6: 'Redovno održavanje i podrška',
    services_tools_title: 'Tehnički stack',
    services_tools_desc: 'Moderni alati i tehnologije',
    portfolio_title: 'Portfolio',
    portfolio_subtitle: 'Odabrani radovi i studije slučaja',
    portfolio_qa_title: 'QA testiranje projekta',
    portfolio_qa_company: 'Inner-Temple Web aplikacija',
    portfolio_qa_role: 'QA asistent',
    portfolio_qa_challenge: 'Izazov',
    portfolio_qa_challenge_text: 'Kompleksna web aplikacija koja zahteva temeljnu validaciju logike formi, proračuna i responzivnog ponašanja na različitim uređajima.',
    portfolio_qa_approach: 'Pristup',
    portfolio_qa_approach_text: 'Sistematsko manuelno testiranje svih korisničkih tokova, logike validacije i responzivnih prikaza. Korišćenje React Dev Tools i browser DevTools za debugging.',
    portfolio_qa_results: 'Rezultati',
    portfolio_qa_result_1: 'Identifikovani i dokumentovani kritični problemi sa validacijom',
    portfolio_qa_result_2: 'Verifikovana tačnost proračuna u svim scenarijima',
    portfolio_qa_result_3: 'Obezbeđeno konzistentno iskustvo na mobilnim i desktop uređajima',
    portfolio_support_title: 'Tehnička podrška',
    portfolio_support_company: 'Višejezična tehnička podrška',
    portfolio_support_role: 'Podrška na nemačkom i engleskom',
    portfolio_support_challenge: 'Izazov',
    portfolio_support_challenge_text: 'Pružanje tehničke podrške i testiranje korisničkih scenarija na više jezika.',
    portfolio_support_approach: 'Pristup',
    portfolio_support_approach_text: 'Dvojezična tehnička podrška kombinovana sa proaktivnom identifikacijom grešaka tokom korisničkih interakcija.',
    portfolio_support_results: 'Rezultati',
    portfolio_support_result_1: 'Efikasno rešavanje korisničkih problema na nemačkom i engleskom',
    portfolio_support_result_2: 'Identifikacija grešaka kroz realne korisničke scenarije',
    portfolio_support_result_3: 'Poboljšanje kvaliteta proizvoda kroz feedback',
    portfolio_cta_title: 'Otvoren za nove projekte',
    portfolio_cta_desc: 'Dostupan za QA pozicije, ugovore o testiranju i projekte izrade web sajtova za firme.',
    portfolio_cta_button: 'Kontaktirajte me',
    contact_title: 'Kontakt',
    contact_subtitle: 'Razgovarajmo o Vašem projektu ili prilikama',
    contact_email: 'Email',
    contact_location: 'Lokacija',
    contact_connect_title: 'Povežimo se',
    contact_availability: 'Dostupan za QA pozicije, freelance testiranje i projekte izrade web sajtova',
    contact_availability_detail: 'Otvoren za rad na daljinu i mogućnosti relokacije',
    footer_rights: '© 2024 Aleksandar Radovanović. Sva prava zadržana.',
    lang_sr: 'Srpski',
    lang_en: 'English',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'sr' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
