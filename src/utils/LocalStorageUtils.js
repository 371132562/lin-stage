const APP_KEY = process.env.PROJECT_NAME

class LocalStorageUtils {
  setItem(key, value) {
    return localStorage.setItem(`${APP_KEY}_${key}`, JSON.stringify(value))
  }

  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(`${APP_KEY}_${key}`))
    } catch (e) {
      return {}
    }
  }

  removeItem(key) {
    return localStorage.removeItem(`${APP_KEY}_${key}`)
  }
}

export default new LocalStorageUtils()
