export const incrementCounter = () => {
  return { type: 'INCREMENT' }
}

export const decrementCounter = () => {
  return { type: 'DECREMENT' }
}

export const setWheelchair = ( v ) =>{
  return {
    type: 'SET',
    value: v
  }
}
