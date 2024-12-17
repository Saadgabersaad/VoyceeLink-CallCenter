import { useState, useEffect } from 'react'
import { SearchParams } from '../utils/types'

export function useDebounce(value?: string, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    console.log(value, 'in hook')
    if (typeof value !== 'string') return

    // Set a timeout to update the debounced value
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 600)

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay])

  return {
    query: debouncedValue
  } as SearchParams
}
