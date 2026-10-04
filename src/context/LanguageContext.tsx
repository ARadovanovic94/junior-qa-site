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
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_contact: 'Contact',
    hero_location: 'Belgrade, Serbia',
    hero_title: 'Aleksandar Radovanović',
    hero_subtitle: 'Junior QA Tester | Manual Testing | API Testing | SQL | Selenium & Python',
    hero_description: 'Building practical QA experience through manual testing, API testing and automation projects while working in Customer Service & Quality at GLS Serbia.',
    hero_cta_primary: 'View QA Projects',
    hero_cta_secondary: 'View GitHub',
    about_title: 'About',
    about_subtitle: 'Building quality through discipline and precision',
    about_p1: 'My 15-year career as a professional athlete built the qualities I now bring to QA: discipline, responsibility, teamwork, consistency, and the ability to perform under pressure.',
    about_p2: 'I transitioned into IT through focused QA study and practical projects in manual testing, API testing, SQL and test automation with Selenium and Python.',
    about_p3: 'Based in Belgrade, I speak Serbian, English and German and enjoy working in international environments.',
    about_card1_title: 'Systematic',
    about_card1_desc: 'I break problems into clear scenarios, expected results and reproducible steps.',
    about_card2_title: 'Collaborative',
    about_card2_desc: 'Team sport taught me the value of clear communication, feedback and shared responsibility.',
    about_card3_title: 'Persistent',
    about_card3_desc: 'I keep investigating until I understand what happened and can explain it clearly.',
    portfolio_title: 'QA Projects',
    portfolio_subtitle: 'Practical projects with test cases, execution results and code available on GitHub.',
    portfolio_manual_type: 'Manual QA',
    portfolio_manual_title: 'Manual QA Practice',
    portfolio_manual_app: 'Practice Test Automation',
    portfolio_completed: 'Completed',
    portfolio_manual_desc: 'Manual functional testing of login and dynamic UI scenarios, documented from test design through execution.',
    portfolio_test_cases: 'Test cases',
    portfolio_passed: 'Passed',
    portfolio_defects: 'Defects',
    portfolio_manual_point_1: 'Positive and negative login scenarios',
    portfolio_manual_point_2: 'Dynamic elements, editing and delayed loading',
    portfolio_manual_point_3: 'Expected vs actual results and execution summary',
    portfolio_automation_type: 'Test Automation',
    portfolio_automation_title: 'Selenium WebDriver Practice',
    portfolio_practice: 'Practice project',
    portfolio_automation_desc: 'Browser automation practice for the same test site, using Python, Selenium WebDriver, pytest and the Page Object Model.',
    portfolio_automation_point_1: 'Positive and negative login automation',
    portfolio_automation_point_2: 'Dynamic element scenarios and explicit waits',
    portfolio_automation_point_3: 'pytest markers, HTML reporting and Page Object Model structure',
    portfolio_view_github: 'View on GitHub',
    portfolio_more: 'API and SQL projects will be added as they are completed.',
    contact_title: 'Contact',
    contact_subtitle: 'For QA opportunities, professional connections or questions about my projects.',
    contact_email: 'Email',
    contact_location: 'Location',
    contact_connect_title: 'Connect',
    contact_availability: 'Junior QA focused on manual testing, API, SQL and gradual automation growth',
    contact_availability_detail: 'Based in Belgrade and open to remote or local QA opportunities.',
    footer_rights: '© 2026 Aleksandar Radovanović. All rights reserved.',
    lang_sr: 'Srpski',
    lang_en: 'English',
  },
  sr: {
    nav_home: 'Početna',
    nav_about: 'O meni',
    nav_skills: 'Veštine',
    nav_projects: 'Projekti',
    nav_experience: 'Iskustvo',
    nav_contact: 'Kontakt',
    hero_location: 'Beograd, Srbija',
    hero_title: 'Aleksandar Radovanović',
    hero_subtitle: 'Junior QA Tester | Manuelno testiranje | API testiranje | SQL | Selenium & Python',
    hero_description: 'Gradim praktično QA iskustvo kroz manuelno testiranje, API testiranje i automation projekte, uz trenutno zaposlenje u Customer Service & Quality u GLS Serbia.',
    hero_cta_primary: 'Pogledaj QA projekte',
    hero_cta_secondary: 'Pogledaj GitHub',
    about_title: 'O meni',
    about_subtitle: 'Kvalitet kroz disciplinu i preciznost',
    about_p1: 'Moja 15-godišnja karijera profesionalnog sportiste izgradila je kvalitete koje sada primenjujem u QA-u: disciplinu, odgovornost, timski rad, doslednost i rad pod pritiskom.',
    about_p2: 'Prelazak u IT ostvario sam kroz fokusirano QA učenje i praktične projekte iz manuelnog testiranja, API testiranja, SQL-a i automatizacije sa Selenium i Python.',
    about_p3: 'Živim u Beogradu, govorim srpski, engleski i nemački i prijaju mi međunarodna radna okruženja.',
    about_card1_title: 'Sistematičan',
    about_card1_desc: 'Probleme razlažem na jasne scenarije, očekivane rezultate i reproduktivne korake.',
    about_card2_title: 'Timski',
    about_card2_desc: 'Profesionalni sport me je naučio jasnoj komunikaciji, feedback-u i zajedničkoj odgovornosti.',
    about_card3_title: 'Uporan',
    about_card3_desc: 'Istražujem problem dok ne razumem šta se desilo i mogu jasno da ga objasnim.',
    portfolio_title: 'QA projekti',
    portfolio_subtitle: 'Praktični projekti sa test slučajevima, rezultatima izvršavanja i kodom dostupnim na GitHubu.',
    portfolio_manual_type: 'Manuelni QA',
    portfolio_manual_title: 'Manual QA Practice',
    portfolio_manual_app: 'Practice Test Automation',
    portfolio_completed: 'Završeno',
    portfolio_manual_desc: 'Manuelno funkcionalno testiranje login i dinamičkih UI scenarija, dokumentovano od dizajna testova do izvršavanja.',
    portfolio_test_cases: 'Test slučajevi',
    portfolio_passed: 'Prošlo',
    portfolio_defects: 'Defekti',
    portfolio_manual_point_1: 'Pozitivni i negativni login scenariji',
    portfolio_manual_point_2: 'Dinamički elementi, izmena i odloženo učitavanje',
    portfolio_manual_point_3: 'Očekivani i stvarni rezultat uz execution summary',
    portfolio_automation_type: 'Automatizacija',
    portfolio_automation_title: 'Selenium WebDriver Practice',
    portfolio_practice: 'Vežba',
    portfolio_automation_desc: 'Vežba automatizacije browsera na istom test sajtu koristeći Python, Selenium WebDriver, pytest i Page Object Model.',
    portfolio_automation_point_1: 'Automatizacija pozitivnih i negativnih login scenarija',
    portfolio_automation_point_2: 'Dinamički elementi i explicit waits',
    portfolio_automation_point_3: 'pytest markeri, HTML izveštaj i Page Object Model struktura',
    portfolio_view_github: 'Pogledaj na GitHubu',
    portfolio_more: 'API i SQL projekti biće dodati kada budu završeni.',
    contact_title: 'Kontakt',
    contact_subtitle: 'Za QA prilike, profesionalno povezivanje ili pitanja o mojim projektima.',
    contact_email: 'Email',
    contact_location: 'Lokacija',
    contact_connect_title: 'Povežimo se',
    contact_availability: 'Fokusiran na Junior QA: manuelno testiranje, API, SQL i postepeni razvoj automatizacije',
    contact_availability_detail: 'U Beogradu sam i otvoren za remote ili lokalne QA prilike.',
    footer_rights: '© 2026 Aleksandar Radovanović. Sva prava zadržana.',
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
