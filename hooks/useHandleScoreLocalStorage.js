import { useEffect, useState } from "react"
import { cacheDataToAsyncStorageObj as asyncStorageMethods } from '../hooks/cacheDataToAsyncStorageObj'
import { useDispatch, useSelector } from "react-redux"
import { COMMIT_DATA, GAME_OVER } from "../actionsTypes/types"

function useHandleScoreLocalStorage() {
  const { playGame, savedData } = useSelector(state => state)
  const dispatch = useDispatch()
  const [firstLoaded, setFirstLoaded] = useState(false)

  useEffect(() => {/* //~ every game over save data locally */
    console.log('game over')
    if (playGame || !firstLoaded) return
    asyncStorageMethods.validateAndUpdateData(
      { highscore: savedData.highscore, highestround: savedData.highestround },
      'scores'
    )
  }, [playGame])
  /* //* save highscore & round */

  useEffect(() => {
    (async () => {
      const localScore = await asyncStorageMethods.getLocallyStoredData('scores')
      if (localScore) {
        dispatch({
          type: COMMIT_DATA,
          payload: {
            highscore: localScore.highscore,
            highestround: localScore.highestround,
            score: 0,
            round: 0
          }
        })
      }
      setFirstLoaded(true)
    })()
  }, [])
}

export default useHandleScoreLocalStorage