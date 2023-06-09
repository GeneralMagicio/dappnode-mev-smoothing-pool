import { goerli, mainnet } from '@wagmi/chains'

export const SITE_NAME = 'Dappnode MEV Smoothing Pool'
export const SITE_DESCRIPTION =
  'Dappnode MEV Smoothing Pool is a dashboard for Ethereum validators to join and receive a share of block proposal fees, ensuring a more stable and predictable return on investment.'
export const SITE_URL = 'https://dappnode-mev-pool.vercel.app/'
export const MAIN_SITE_URL = 'https://dappnode.com/'

export const SOCIAL_DISCORD = 'dappnode'
export const SOCIAL_TWITTER = 'dappnode'
export const SOCIAL_GITHUB = 'dappnode'
export const SOCIAL_LINKEDIN = 'dappnode'

const SUPPORTED_CHAINS = ['mainnet', 'goerli']

if (!process.env.NEXT_PUBLIC_SMOOTHING_POOL_ADDRESS) {
  throw new Error('NEXT_PUBLIC_SMOOTHING_POOL_ADDRESS is not set')
}

if (!process.env.NEXT_PUBLIC_SELECTED_CHAIN) {
  throw new Error('NEXT_PUBLIC_SELECTED_CHAIN is not set')
}

if (!SUPPORTED_CHAINS.includes(process.env.NEXT_PUBLIC_SELECTED_CHAIN)) {
  throw new Error(
    'NEXT_PUBLIC_SELECTED_CHAIN is not one of the supported chains'
  )
}

export const SELECTED_CHAIN = process.env.NEXT_PUBLIC_SELECTED_CHAIN

export const SMOOTHING_POOL_ADDRESS = process.env
  .NEXT_PUBLIC_SMOOTHING_POOL_ADDRESS as `0x${string}`

export const WEB3_CHAINS = [SELECTED_CHAIN === 'mainnet' ? mainnet : goerli]

export const getBeaconChainExplorer = (
  type: 'slot' | 'validator',
  endpoint: string | number
) => {
  const baseUrl =
    SELECTED_CHAIN === 'mainnet'
      ? 'https://beacon.gnosischain.com'
      : 'https://prater.beaconcha.in'

  return `${baseUrl}/${type}/${endpoint}`
}

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
