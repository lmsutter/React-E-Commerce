import { useEffect, useState } from "react";

export default function useLocalStorage (key, defaultValue) {
//when initializing state it checks first if there is anything in the local storage with the key passed to this 

  const [state, updateState] = useState(() => {
    let saved = localStorage.getItem(key)
    if(saved !== null) {
      return JSON.parse(saved);
    } else {
      return defaultValue
    }
  }) 

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state, key, updateState])

  return [state, updateState]
}