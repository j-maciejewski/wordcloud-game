import './App.css'
import { useSelector } from 'react-redux'
import { getUser } from './slices/userSlice'
import { getGame } from './slices/gameSlice'
import Login from './pages/Login'
import Game from './pages/Game'
import FinalScore from './pages/FinalScore'

function App() {
  const { user } = useSelector(getUser)
  const { game } = useSelector(getGame)

  return (
    <div className="app">
      <header>Wordcloud game</header>
      {user ? (
        <>
          {game.status === 'IN_GAME' || game.status === 'CHECK_ANSWERS' ? <Game /> : <FinalScore />}
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
