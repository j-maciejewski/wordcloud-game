import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  game: {},
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: state => {
      state.game = {
        status: 'IN_GAME',
        question: null,
        words: null,
      }
    },
    setQuestion: (state, action) => {
      state.game = {
        status: 'IN_GAME',
        question: action.payload.question,
        words: action.payload.all_words.map((word, idx) => ({
          id: idx,
          word,
          isValid: action.payload.good_words.includes(word),
        })),
      }
    },
    toggleWordStatus: (state, action) => {
      state.game.words = state.game.words.map(word => {
        if (word.id === action.payload) {
          word.isSelected = !word.isSelected
          return word
        } else {
          return word
        }
      })
    },
    checkAnswers: state => {
      state.game.status = 'CHECK_ANSWERS'
    },
    finishGame: state => {
      state.game.status = 'FINAL_SCORE'
    },
  },
})

export const { startGame, toggleWordStatus, setQuestion, checkAnswers, finishGame } =
  gameSlice.actions

export const getGame = state => state.game

export default gameSlice.reducer
