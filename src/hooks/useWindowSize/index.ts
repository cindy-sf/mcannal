import { useEffect, useState } from 'react'

type WindowsSize = Record<'width' | 'height', number | undefined>

export const useWindowSize = (): WindowsSize => {
  const [windowSize, setWindowSize] = useState<WindowsSize>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
