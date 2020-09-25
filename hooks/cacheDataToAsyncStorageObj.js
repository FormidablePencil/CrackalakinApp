import { AsyncStorage } from "react-native"

export const cacheDataToAsyncStorageObj = {
  getLocallyStoredData: async (getFrom) => {
    const localStorageString = await AsyncStorage.getItem(getFrom)
    const result = await JSON.parse(localStorageString)
    console.log(result)
    return result
  },

  storeToLocalStorage: async (storeTo, whatData) => {
    try {
      const stringifiedData = JSON.stringify(whatData)
      await AsyncStorage.setItem(storeTo.toString(), stringifiedData)
    } catch (err) {
      console.warn(err)
    }
  },

  validateAndUpdateData: async (data, dirName) => {
    const localStorageResponse = await cacheDataToAsyncStorageObj.getLocallyStoredData(dirName)
    if (localStorageResponse === null || data !== localStorageResponse) {
      cacheDataToAsyncStorageObj.storeToLocalStorage(dirName, data)
      return { message: 'cached data', outcome: 1 }
    } else {
      return { message: `"${dirName}" updated`, outcome: 2 }
    }
  },
}

export default cacheDataToAsyncStorageObj