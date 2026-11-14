// Data index - provides locale-aware access to content
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Import TR and EN data
import { heroSlides as trHeroSlides, products as trProducts, productSubGroups as trProductSubGroups, services as trServices, projects as trProjects, corporateFacts as trCorporateFacts, corporateTimeline as trCorporateTimeline, visionMission as trVisionMission, aboutText as trAboutText, corporateAccordion as trCorporateAccordion, contactInfo as trContactInfo, navLinks as trNavLinks, ourValues as trOurValues, team as trTeam, pressArticles as trPressArticles, pukabBaskaniArticle as trPukabBaskaniArticle, sahaExpoSolarCarportArticle as trSahaExpoSolarCarportArticle, luleburgazFabrikaArticle as trLuleburgazFabrikaArticle, fortyNineUlkeArticle as trFortyNineUlkeArticle, bauMuenihArticle as trBauMuenihArticle } from './content.tr';
import { heroSlides as enHeroSlides, products as enProducts, productSubGroups as enProductSubGroups, services as enServices, projects as enProjects, corporateFacts as enCorporateFacts, corporateTimeline as enCorporateTimeline, visionMission as enVisionMission, aboutText as enAboutText, corporateAccordion as enCorporateAccordion, contactInfo as enContactInfo, navLinks as enNavLinks, ourValues as enOurValues, team as enTeam, pressArticles as enPressArticles } from './content.en';
import { pukabBaskaniArticle as contentPukabBaskaniArticle, sahaExpoSolarCarportArticle as contentSahaExpoSolarCarportArticle, luleburgazFabrikaArticle as contentLuleburgazFabrikaArticle, fortyNineUlkeArticle as contentFortyNineUlkeArticle, bauMuenihArticle as contentBauMuenihArticle } from './content';

// Type definitions
export type {
  Product,
  ProductSubGroup,
  Service,
  HeroSlide,
  Project,
  PressArticle,
  CorporateFact,
  CorporateTimelineEntry,
  VisionMission,
  CorporateAccordionItem,
  ContactInfo,
  NavLink,
} from './types';

export interface PressBlock { kind: "p" | "question"; text: string; }

// Locale data getter
export const getContent = (locale: 'tr' | 'en') => {
  switch (locale) {
    case 'tr':
      return {
        heroSlides: trHeroSlides,
        products: trProducts,
        productSubGroups: trProductSubGroups,
        services: trServices,
        projects: trProjects,
corporateFacts: trCorporateFacts,
        corporateTimeline: trCorporateTimeline,
        visionMission: trVisionMission,
        aboutText: trAboutText,
        corporateAccordion: trCorporateAccordion,
        contactInfo: trContactInfo,
        navLinks: trNavLinks,
        ourValues: trOurValues,
        team: trTeam,
        pressArticles: trPressArticles,
        pukabBaskaniArticle: contentPukabBaskaniArticle,
        sahaExpoSolarCarportArticle: contentSahaExpoSolarCarportArticle,
        luleburgazFabrikaArticle: contentLuleburgazFabrikaArticle,
        fortyNineUlkeArticle: contentFortyNineUlkeArticle,
        bauMuenihArticle: contentBauMuenihArticle,
      };
    case 'en':
      return {
        heroSlides: enHeroSlides,
        products: enProducts,
        productSubGroups: enProductSubGroups,
        services: enServices,
        projects: enProjects,
        corporateFacts: enCorporateFacts,
        corporateTimeline: enCorporateTimeline,
        visionMission: enVisionMission,
        aboutText: enAboutText,
        corporateAccordion: enCorporateAccordion,
        contactInfo: enContactInfo,
        navLinks: enNavLinks,
        ourValues: enOurValues,
        team: enTeam,
        pressArticles: enPressArticles,
        pukabBaskaniArticle: contentPukabBaskaniArticle,
        sahaExpoSolarCarportArticle: contentSahaExpoSolarCarportArticle,
        luleburgazFabrikaArticle: contentLuleburgazFabrikaArticle,
        fortyNineUlkeArticle: contentFortyNineUlkeArticle,
        bauMuenihArticle: contentBauMuenihArticle,
      };
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
};
