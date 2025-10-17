// Image utility functions
export const getImageUrl = (path, options = {}) => {
  const {
    width = 400,
    height = 300,
    quality = 80,
    format = 'webp'
  } = options

  // If it's already a full URL, return as is
  if (path.startsWith('http')) {
    return path
  }

  // For local images, you might want to process them
  // This is a placeholder - implement based on your image processing setup
  return path
}

// Generate placeholder images
export const getPlaceholderImage = (width = 400, height = 300, text = 'BF6') => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  canvas.width = width
  canvas.height = height
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#1a1a1a')
  gradient.addColorStop(0.5, '#F97316')
  gradient.addColorStop(1, '#1a1a1a')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  
  // Add text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
  ctx.font = 'bold 32px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, width / 2, height / 2)
  
  return canvas.toDataURL()
}

// Lazy loading utility
export const useLazyLoading = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        }
      })
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  )

  const observe = (element) => {
    if (element) {
      observer.observe(element)
    }
  }

  const unobserve = (element) => {
    if (element) {
      observer.unobserve(element)
    }
  }

  return {
    observe,
    unobserve
  }
}

// Image optimization
export const optimizeImage = (url, options = {}) => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    fit = 'cover'
  } = options

  // This would integrate with your image optimization service
  // For now, return the original URL
  return url
}

// Generate responsive image srcset
export const generateSrcSet = (baseUrl, sizes = [400, 800, 1200, 1600]) => {
  return sizes
    .map(size => `${optimizeImage(baseUrl, { width: size })} ${size}w`)
    .join(', ')
}

// Preload critical images
export const preloadImage = (url) => {
  const img = new Image()
  img.src = url
  return new Promise((resolve, reject) => {
    img.onload = resolve
    img.onerror = reject
  })
}

// Preload multiple images
export const preloadImages = async (urls) => {
  try {
    await Promise.all(urls.map(preloadImage))
    return true
  } catch (error) {
    console.error('Error preloading images:', error)
    return false
  }
}

// Get image dimensions
export const getImageDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      })
    }
    img.onerror = reject
    img.src = url
  })
}

// Create image with fallback
export const createImageWithFallback = (primaryUrl, fallbackUrl) => {
  return {
    src: primaryUrl,
    onError: (event) => {
      if (event.target.src !== fallbackUrl) {
        event.target.src = fallbackUrl
      }
    }
  }
}

// Generate image alt text
export const generateAltText = (title, category = '') => {
  return `${title}${category ? ` - ${category}` : ''} - Battlefield 6`
}

// Image loading states
export const useImageLoading = () => {
  const isLoading = ref(false)
  const hasError = ref(false)
  const isLoaded = ref(false)

  const loadImage = async (url) => {
    isLoading.value = true
    hasError.value = false
    isLoaded.value = false

    try {
      await preloadImage(url)
      isLoaded.value = true
    } catch (error) {
      hasError.value = true
      console.error('Error loading image:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    hasError,
    isLoaded,
    loadImage
  }
}