import { useEffect, useState, RefObject } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>)=> { 
const [isIntersecting, setIntersecting] = useState(true)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
   if(ref.current) observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}