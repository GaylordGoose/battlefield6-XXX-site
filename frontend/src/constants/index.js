// Color constants
export const COLORS = {
  primary: '#F97316',
  primaryDark: '#ea6a0f',
  dark: '#0f0f0f',
  darker: '#0a0a0a',
  medium: '#1a1a1a',
  light: '#2a2a2a',
  white: '#ffffff',
  gray: {
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  }
}

// Typography constants
export const TYPOGRAPHY = {
  fontFamily: {
    heading: 'Bebas Neue, sans-serif',
    body: 'Roboto, sans-serif'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
}

// Spacing constants
export const SPACING = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem'
}

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Animation durations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2
}

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
}

// Game-related constants
export const GAME_CONSTANTS = {
  classes: ['Assault', 'Engineer', 'Support', 'Recon'],
  difficulties: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
  categories: ['Strategy', 'Combat', 'Teamwork', 'Vehicles', 'Loadouts', 'Maps'],
  weaponTypes: ['Assault Rifle', 'SMG', 'Sniper Rifle', 'LMG', 'Pistol', 'Shotgun', 'Explosive'],
  mapTypes: ['Urban', 'Desert', 'Forest', 'Mountain', 'Arctic', 'Tropical']
}

// API endpoints (if needed)
export const API_ENDPOINTS = {
  base: '/api',
  news: '/api/news',
  loadouts: '/api/loadouts',
  guides: '/api/guides',
  weapons: '/api/weapons',
  maps: '/api/maps'
}

// Social media links
export const SOCIAL_LINKS = {
  twitter: '#',
  youtube: '#',
  discord: '#',
  github: '#',
  instagram: '#',
  facebook: '#'
}

// Navigation items
export const NAVIGATION_ITEMS = [
  { label: 'META LOADOUTS', href: '#loadouts' },
  { label: 'NEWS', href: '#news' },
  { label: 'FEATURES', href: '#features' },
  { label: 'GUIDES', href: '#guides' }
]

// Footer links
export const FOOTER_LINKS = {
  quick: [
    { name: 'Meta Loadouts', url: '#loadouts' },
    { name: 'Weapon Database', url: '#weapons' },
    { name: 'Latest News', url: '#news' },
    { name: 'Tactical Guides', url: '#guides' },
    { name: 'Community', url: '#community' },
    { name: 'Leaderboards', url: '#leaderboards' }
  ],
  resources: [
    { name: 'Patch Notes', url: '#patches' },
    { name: 'Weapon Stats', url: '#stats' },
    { name: 'Map Guides', url: '#maps' },
    { name: 'Class Builds', url: '#classes' },
    { name: 'Video Tutorials', url: '#tutorials' },
    { name: 'API Documentation', url: '#api' }
  ]
}