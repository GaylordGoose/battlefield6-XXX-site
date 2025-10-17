import { ref, onMounted, onUnmounted } from 'vue'

export function useVideo() {
  const videoRef = ref(null)
  const isPlaying = ref(false)
  const isPaused = ref(false)
  const isLoading = ref(true)
  const error = ref(null)

  const play = async () => {
    if (videoRef.value) {
      try {
        await videoRef.value.play()
        isPlaying.value = true
        isPaused.value = false
      } catch (err) {
        console.error('Error playing video:', err)
        error.value = err.message
      }
    }
  }

  const pause = () => {
    if (videoRef.value) {
      videoRef.value.pause()
      isPlaying.value = false
      isPaused.value = true
    }
  }

  const toggle = () => {
    if (isPlaying.value) {
      pause()
    } else {
      play()
    }
  }

  const onLoadedData = () => {
    isLoading.value = false
    error.value = null
  }

  const onError = (err) => {
    console.error('Video error:', err)
    error.value = 'Failed to load video'
    isLoading.value = false
  }

  const onPlay = () => {
    isPlaying.value = true
    isPaused.value = false
  }

  const onPause = () => {
    isPlaying.value = false
    isPaused.value = true
  }

  const onEnded = () => {
    isPlaying.value = false
    isPaused.value = false
  }

  onMounted(() => {
    if (videoRef.value) {
      videoRef.value.addEventListener('loadeddata', onLoadedData)
      videoRef.value.addEventListener('error', onError)
      videoRef.value.addEventListener('play', onPlay)
      videoRef.value.addEventListener('pause', onPause)
      videoRef.value.addEventListener('ended', onEnded)
    }
  })

  onUnmounted(() => {
    if (videoRef.value) {
      videoRef.value.removeEventListener('loadeddata', onLoadedData)
      videoRef.value.removeEventListener('error', onError)
      videoRef.value.removeEventListener('play', onPlay)
      videoRef.value.removeEventListener('pause', onPause)
      videoRef.value.removeEventListener('ended', onEnded)
    }
  })

  return {
    videoRef,
    isPlaying,
    isPaused,
    isLoading,
    error,
    play,
    pause,
    toggle
  }
}