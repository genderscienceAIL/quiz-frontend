const setOnLocalStorage = (key, data) => {
  localStorage.setItem(key, data)
}

const getOnLocalStorage = (key) => {
  return localStorage.getItem(key)
}

export { setOnLocalStorage, getOnLocalStorage }
