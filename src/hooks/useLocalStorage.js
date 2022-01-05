import { useEffect, useState } from "react";

export default function useLocalStorage (key, defaultValue) {
  //runs initially and there is nothing in state but there is in key
  //state updates and also updates what is currently in key

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