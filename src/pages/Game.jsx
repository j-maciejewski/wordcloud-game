import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getRandomQuestion from '../api/getRandomQuestion'
import { setQuestion, checkAnswers, finishGame, getGame } from '../slices/gameSlice'
import WordTile from './WordTile'

const LoginPage = () => {
  const { game } = useSelector(getGame)
  const dispatch = useDispatch()

  useEffect(() => {
    getRandomQuestion().then(data => dispatch(setQuestion(data)))
  }, [])

  return (
    <>
      {game.question ? (
        <>
          <h3 className="question">{game.question}</h3>
          <div
            className={['words-box', ...(game.status === 'CHECK_ANSWERS' ? ['disabled'] : [])].join(
              ' ',
            )}
          >
            {game.words.map(word => (
              <WordTile key={word.id} checkingAnswers={game.status === 'CHECK_ANSWERS'} {...word} />
            ))}
          </div>
          {game.status === 'IN_GAME' ? (
            <button
              className="finish-game"
              onClick={() => dispatch(checkAnswers())}
              disabled={!game.words.some(word => word.isSelected)}
            >
              Check answers
            </button>
          ) : (
            <button className="finish-game" onClick={() => dispatch(finishGame())}>
              Finish game
            </button>
          )}
        </>
      ) : (
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      )}
    </>
  )
}

export default LoginPage
