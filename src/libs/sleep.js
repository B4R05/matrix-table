const sleep = (callback, timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, timeout)
  })
}

export default sleep
