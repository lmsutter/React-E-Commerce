import { useEffect } from 'react'

export default function useClickOutside(ref, handler) {

  useEffect(() => {
    const listener = event => {
      const el = ref?.current
      const toggle = event.target.classList.contains('toggle')
      if(!el || el.contains(event.target) || toggle) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener) 
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
  
}

