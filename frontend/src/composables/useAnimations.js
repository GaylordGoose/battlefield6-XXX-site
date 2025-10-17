import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const isVisible = ref(false)
  const elementRef = ref(null)

  const observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  onMounted(() => {
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return {
    isVisible,
    elementRef
  }
}

export function useParallax() {
  const scrollY = ref(0)

  const updateScrollY = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScrollY)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollY)
  })

  return {
    scrollY
  }
}

export function useParticles() {
  const particles = ref([])

  const createParticle = () => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.2
    }
  }

  const initParticles = (count = 20) => {
    particles.value = Array.from({ length: count }, createParticle)
  }

  const animateParticles = () => {
    particles.value.forEach(particle => {
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Reset position if particle goes off screen
      if (particle.x < 0 || particle.x > window.innerWidth) {
        particle.speedX *= -1
      }
      if (particle.y < 0 || particle.y > window.innerHeight) {
        particle.speedY *= -1
      }

      // Keep particles within bounds
      particle.x = Math.max(0, Math.min(window.innerWidth, particle.x))
      particle.y = Math.max(0, Math.min(window.innerHeight, particle.y))
    })
  }

  onMounted(() => {
    initParticles()
    const interval = setInterval(animateParticles, 50)
    
    onUnmounted(() => {
      clearInterval(interval)
    })
  })

  return {
    particles
  }
}