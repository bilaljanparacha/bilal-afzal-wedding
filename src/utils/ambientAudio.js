// Clean HTML5 Audio player with smooth volume fade-in and fade-out
// Expects a real audio file (e.g. public/wedding-music.mp3).

export class RoyalAmbientAudio {
  constructor(audioUrl = '') {
    this.audioUrl = audioUrl
    this.audioEl = null
    this.isPlaying = false
    this.fadeTimer = null
    this.targetVolume = 0.55
  }

  clearFade() {
    if (this.fadeTimer) {
      window.clearInterval(this.fadeTimer)
      this.fadeTimer = null
    }
  }

  ensureAudio() {
    if (!this.audioUrl) return null
    if (!this.audioEl) {
      const audio = new Audio(this.audioUrl)
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = 0
      this.audioEl = audio
    }
    return this.audioEl
  }

  start(onStateChange) {
    const audio = this.ensureAudio()
    if (!audio || this.isPlaying) return

    this.clearFade()
    audio.volume = 0

    const playPromise = audio.play()
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise
        .then(() => {
          this.isPlaying = true
          if (onStateChange) onStateChange(true)
          this.fadeTo(this.targetVolume, 1200)
        })
        .catch(() => {
          this.isPlaying = false
          if (onStateChange) onStateChange(false)
        })
    } else {
      this.isPlaying = true
      if (onStateChange) onStateChange(true)
      this.fadeTo(this.targetVolume, 1200)
    }
  }

  pause(onStateChange) {
    if (!this.audioEl || !this.isPlaying) {
      this.isPlaying = false
      if (onStateChange) onStateChange(false)
      return
    }

    this.isPlaying = false
    if (onStateChange) onStateChange(false)

    this.fadeTo(0, 450, () => {
      if (this.audioEl && !this.isPlaying) {
        this.audioEl.pause()
      }
    })
  }

  fadeTo(endVolume, durationMs, onComplete) {
    if (!this.audioEl) return
    this.clearFade()

    const startVolume = this.audioEl.volume
    const steps = Math.max(1, Math.round(durationMs / 40))
    let currentStep = 0

    this.fadeTimer = window.setInterval(() => {
      currentStep += 1
      const progress = Math.min(1, currentStep / steps)
      if (this.audioEl) {
        this.audioEl.volume = Math.max(
          0,
          Math.min(1, startVolume + (endVolume - startVolume) * progress)
        )
      }
      if (progress >= 1) {
        this.clearFade()
        if (onComplete) onComplete()
      }
    }, 40)
  }

  destroy() {
    this.clearFade()
    if (this.audioEl) {
      this.audioEl.pause()
      this.audioEl.src = ''
      this.audioEl = null
    }
    this.isPlaying = false
  }
}
