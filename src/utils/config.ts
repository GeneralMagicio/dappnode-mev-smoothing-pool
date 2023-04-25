import { mainnet, goerli } from '@wagmi/chains'

export const SITE_NAME = 'Dappnode MEV Smoothing Pool'
export const SITE_DESCRIPTION =
  'Dappnode MEV Smoothing Pool is a dashboard for Ethereum validators to join and receive a share of block proposal fees, ensuring a more stable and predictable return on investment.'
export const SITE_URL = 'https://dappnode-mev-pool.vercel.app/'
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
    path: '/how-to',
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
    path: SOCIAL_DISCORD,
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
