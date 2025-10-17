import { ref, onMounted, onUnmounted } from 'vue'

// Composable for responsive breakpoints
export function useBreakpoints() {
  const windowWidth = ref(0)
  const windowHeight = ref(0)

  const updateDimensions = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  }

  onMounted(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDimensions)
  })

  const isMobile = computed(() => windowWidth.value < 768)
  const isTablet = computed(() => windowWidth.value >= 768 && windowWidth.value < 1024)
  const isDesktop = computed(() => windowWidth.value >= 1024)
  const isLargeDesktop = computed(() => windowWidth.value >= 1280)

  return {
    windowWidth,
    windowHeight,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  }
}

// Composable for device detection
export function useDevice() {
  const userAgent = ref('')
  const isTouchDevice = ref(false)
  const isIOS = ref(false)
  const isAndroid = ref(false)
  const isWindows = ref(false)
  const isMac = ref(false)

  onMounted(() => {
    userAgent.value = navigator.userAgent
    isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    isIOS.value = /iPad|iPhone|iPod/.test(userAgent.value)
    isAndroid.value = /Android/.test(userAgent.value)
    isWindows.value = /Windows/.test(userAgent.value)
    isMac.value = /Mac/.test(userAgent.value)
  })

  return {
    userAgent,
    isTouchDevice,
    isIOS,
    isAndroid,
    isWindows,
    isMac
  }
}

// Utility functions for responsive classes
export const getResponsiveClasses = (base, mobile, tablet, desktop) => {
  return {
    base,
    'sm': mobile,
    'md': tablet,
    'lg': desktop
  }
}

// Responsive text sizes
export const getResponsiveTextSize = (size) => {
  const sizes = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'base': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  }
  
  return sizes[size] || 'text-base'
}

// Responsive spacing
export const getResponsiveSpacing = (size) => {
  const spacings = {
    '0': 'p-0',
    '1': 'p-1',
    '2': 'p-2',
    '3': 'p-3',
    '4': 'p-4',
    '5': 'p-5',
    '6': 'p-6',
    '8': 'p-8',
    '10': 'p-10',
    '12': 'p-12',
    '16': 'p-16',
    '20': 'p-20',
    '24': 'p-24',
    '32': 'p-32'
  }
  
  return spacings[size] || 'p-4'
}

// Responsive grid columns
export const getResponsiveGrid = (cols) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  }
  
  return gridCols[cols] || 'grid-cols-1'
}

// Responsive flex direction
export const getResponsiveFlex = (direction) => {
  const directions = {
    'row': 'flex-row',
    'col': 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'col-reverse': 'flex-col-reverse'
  }
  
  return directions[direction] || 'flex-row'
}

// Responsive visibility
export const getResponsiveVisibility = (breakpoint, visible = true) => {
  const breakpoints = {
    'sm': 'sm:',
    'md': 'md:',
    'lg': 'lg:',
    'xl': 'xl:',
    '2xl': '2xl:'
  }
  
  const prefix = breakpoints[breakpoint] || ''
  return visible ? `${prefix}block` : `${prefix}hidden`
}

// Responsive container
export const getResponsiveContainer = () => {
  return 'container mx-auto px-4 sm:px-6 lg:px-8'
}

// Responsive hero section
export const getResponsiveHero = () => {
  return {
    container: 'relative h-screen overflow-hidden',
    content: 'relative container mx-auto px-4 h-full flex items-center',
    title: 'text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 relative',
    subtitle: 'text-lg sm:text-xl md:text-2xl text-white mb-4 tracking-wide',
    buttons: 'flex flex-col sm:flex-row gap-4'
  }
}

// Responsive navigation
export const getResponsiveNav = () => {
  return {
    container: 'flex items-center justify-between h-16 sm:h-20',
    logo: 'flex items-center gap-2 sm:gap-3',
    nav: 'hidden lg:flex items-center gap-6 xl:gap-8',
    mobileMenu: 'lg:hidden',
    search: 'hidden md:block'
  }
}

// Responsive cards
export const getResponsiveCards = () => {
  return {
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8',
    card: 'bg-gradient-to-br from-bf-medium to-bf-light border border-gray-800 rounded-lg overflow-hidden transition-all duration-300',
    image: 'relative h-32 sm:h-40 md:h-48 overflow-hidden',
    content: 'p-4 sm:p-6',
    title: 'text-lg sm:text-xl font-heading text-white mb-2 sm:mb-3',
    description: 'text-sm text-gray-400 leading-relaxed'
  }
}

// Responsive sections
export const getResponsiveSection = () => {
  return {
    container: 'py-12 sm:py-16 md:py-20',
    header: 'text-center mb-8 sm:mb-12 md:mb-16',
    title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading tracking-widest text-bf-orange uppercase',
    subtitle: 'text-base sm:text-lg text-gray-400 tracking-wide'
  }
}