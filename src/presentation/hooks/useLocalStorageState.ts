import { useEffect, useRef, useState } from 'react'

export function useLocalStorageState<T>(
  key: string,
  defaultValue: unknown = ''
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const isValueInLocalStorage = window.localStorage.getItem(key)

    if (isValueInLocalStorage) {
      return JSON.parse(isValueInLocalStorage)
    }

    return defaultValue
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [
    state,
    setState
  ]
}
