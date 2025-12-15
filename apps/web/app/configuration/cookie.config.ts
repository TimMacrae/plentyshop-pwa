import type { CookieGroupFromNuxtConfig } from '@plentymarkets/shop-core';

export default {
  configHash: '',
  barTitle: 'CookieBar.about.label',
  barDescription: 'CookieBar.about.description',
  groups: [
    {
      id: 0,
      name: 'CookieBar.essentials.label',
      accepted: true,
      showMore: false,
      description: 'CookieBar.essentials.description',
      cookies: [
        {
          name: 'CookieBar.essentials.cookies.payPal.name',
          Provider: 'CookieBar.essentials.cookies.payPal.provider',
          Status: 'CookieBar.essentials.cookies.payPal.status',
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: '1 days',
          accepted: true,
        },
        {
          name: 'CookieBar.essentials.cookies.plentyId.name',
          Provider: 'CookieBar.essentials.cookies.plentyId.provider',
          Status: 'CookieBar.essentials.cookies.plentyId.status',
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: '1 days',
          accepted: true,
        },
        {
          name: 'CookieBar.essentials.cookies.consentCookie.name',
          Provider: 'CookieBar.essentials.cookies.consentCookie.provider',
          Status: 'CookieBar.essentials.cookies.consentCookie.status',
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: '100 days',
          accepted: true,
        },
        {
          name: 'CookieBar.essentials.cookies.cloudflareTurnstile.name',
          Provider: 'CookieBar.essentials.cookies.cloudflareTurnstile.provider',
          Status: 'CookieBar.essentials.cookies.cloudflareTurnstile.status',
          PrivacyPolicy: '/PrivacyPolicy',
          Lifespan: '100 days',
          accepted: true,
        },
      ],
    },
    {
      id: 1,
      name: 'CookieBar.externalMedia.label',
      accepted: false,
      showMore: false,
      description: 'CookieBar.externalMedia.description',
      cookies: [],
    },
    {
      id: 2,
      name: 'CookieBar.functional.label',
      accepted: false,
      showMore: false,
      description: 'CookieBar.functional.description',
      cookies: [],
    },
    {
      id: 3,
      name: 'CookieBar.marketing.label',
      accepted: true,
      showMore: false,
      description: 'CookieBar.marketing.description',
      cookies: [
        {
          name: 'CookieBar.marketing.cookies.googleAnalytics.name',
          Provider: 'Google',
          Status: 'CookieBar.marketing.cookies.googleAnalytics.status',
          PrivacyPolicy: 'https://policies.google.com/privacy',
          Lifespan: '730 days',
          cookieNames: ['_ga', '_ga_*', '_gid'],
          accepted: false,
        },
      ],
    },
  ],
} as CookieGroupFromNuxtConfig;
