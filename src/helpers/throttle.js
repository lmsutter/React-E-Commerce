export default function throttle (callback, limit) {
  let calledwithinSecond = false

  return (...args) => {
    if (calledwithinSecond) return
    callback.apply(this, args)
    calledwithinSecond = true
    setTimeout(() => {
      calledwithinSecond = false
    }, limit)
  }
}