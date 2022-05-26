import { useSelector, useDispatch } from 'react-redux'
import { getGame, startGame } from '../slices/gameSlice'
import { getUser } from '../slices/userSlice'

const calcFinalScore = words => {
  const { good, bad, unselected } = words.reduce(
    (score, word) => {
      if (word.isValid && word.isSelected) {
        score.good++
      } else if (!word.isValid && word.isSelected) {
        score.bad++
      } else if (word.isValid && !word.isSelected) {
        score.unselected++
      }

      return score
    },
    {
      good: 0,
      bad: 0,
      unselected: 0,
    },
  )

  return good * 2 - (bad + unselected)
}

const FinalScore = () => {
  const dispatch = useDispatch()
  const { game } = useSelector(getGame)
  const { user } = useSelector(getUser)

  const finalScore = calcFinalScore(game.words)

  return (
    <>
      <h3>{finalScore > 0 ? `Congratulations, ${user}!` : `Better luck next time ${user} 😕`}</h3>
      <br />
      <h4>Your Score:</h4>
      <h4 className="points">{finalScore} points</h4>
      <button className="play-again" onClick={() => dispatch(startGame())}>
        Play again
      </button>
    </>
  )
}

export default FinalScore
