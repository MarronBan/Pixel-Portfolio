import { useState, useEffect } from 'react'

function useIntersectionObserver(
  elementRef,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = true,
  } = {}
) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef?.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyVisible = entry.isIntersecting
        setIsVisible(isCurrentlyVisible)
        
        if (isCurrentlyVisible && freezeOnceVisible) {
          observer.disconnect()
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(element)
    
    return () => {
      observer.disconnect()
    }
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible])

  return isVisible
}

export default useIntersectionObserver
