import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../slices/userSlice'
import { startGame } from '../slices/gameSlice'

const LoginPage = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')

  const handleChange = evt => {
    setUsername(evt.target.value)
  }

  const submitName = () => {
    if (!username.trim()) return

    dispatch(signIn(username))
    dispatch(startGame())
  }

  return (
    <>
      <input
        className="username"
        placeholder="Enter your nickname here..."
        value={username}
        onChange={handleChange}
      />
      <button onClick={submitName} disabled={!username.trim()}>
        play
      </button>
    </>
  )
}

export default LoginPage
