import { toggleWordStatus } from '../slices/gameSlice'
import { useDispatch } from 'react-redux'

const WordTile = ({ id, word, isValid, isSelected, checkingAnswers }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (checkingAnswers) return
    dispatch(toggleWordStatus(id))
  }

  return (
    <div
      className={[
        'word',
        ...(isSelected ? ['selected'] : []),
        ...(checkingAnswers && isSelected && isValid ? ['correct'] : []),
        ...(checkingAnswers && isSelected && !isValid ? ['uncorrect'] : []),
      ].join(' ')}
      onClick={handleClick}
    >
      <span>{word}</span>
    </div>
  )
}

export default WordTile
