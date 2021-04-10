const timeout = (delay) => {
  return new Promise((res) => setTimeout(res, delay))
}

export { timeout }
