import { mainnet, goerli } from '@wagmi/chains'

export const SITE_NAME = 'Next.js Web3 Starter'
export const SITE_DESCRIPTION = 'Next.js + Web3 powered by General Magic.'
export const SITE_URL = 'https://starter.generalmagic.io/'
export const MAIN_SITE_URL = 'https://dappnode.com/'

export const SOCIAL_DISCORD = 'dappnode'
export const SOCIAL_TWITTER = 'dappnode'
export const SOCIAL_GITHUB = 'dappnode'
export const SOCIAL_LINKEDIN = 'dappnode'

export const WEB3_CHAINS = [mainnet, goerli]

export const PAGES = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'How to use',
    path: '/about',
  },
  {
    name: 'Donate',
    path: '/donate',
  },
  {
    name: 'Analytics',
    path: 'https://dappnode.com/',
  },
]

export const SOCIALS = [
  {
    name: 'LinkedIn',
    path: `https://www.linkedin.com/company/${SOCIAL_LINKEDIN}`,
  },
  {
    name: 'Discord',
    path: `https://discord.gg/${SOCIAL_DISCORD}`,
  },
  {
    name: 'GitHub',
    path: `https://github.com/${SOCIAL_GITHUB}`,
  },
  {
    name: 'Twitter',
    path: `https://twitter.com/${SOCIAL_TWITTER}`,
  },
] as const

export const IRON_SESSION_CONFIG = {
  cookieName: `siwe ${SITE_NAME}`,
  password:
    process.env.IRON_SESSION_PASSWORD ??
    // UPDATE fallback password
    'complex_password_at_least_32_characters_long',
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === 'production',
  },
}
