// MOCKING DATA

const questions = [
  {
    question: 'Select animals',
    all_words: [
      'hole',
      'sofa',
      'pear',
      'tiger',
      'oatmeal',
      'square',
      'nut',
      'cub',
      'shirt',
      'tub',
      'passenger',
      'cow',
    ],
    good_words: ['tiger', 'cow'],
  },
  {
    question: 'Select colors',
    all_words: [
      'jeans',
      'existence',
      'ink',
      'red',
      'blue',
      'yellow',
      'laugh',
      'behavior',
      'expansion',
      'white',
      'black',
      'cakes',
    ],
    good_words: ['red', 'blue', 'yellow', 'white', 'black'],
  },
  {
    question: 'Select vehicles',
    all_words: ['belief', 'wire', 'car', 'bus', 'star', 'river', 'hat', 'skirt', 'train'],
    good_words: ['car', 'bus', 'train'],
  },
]

const getRandomQuestion = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve(questions[Math.floor(Math.random() * questions.length)]), 750),
  )
}

export default getRandomQuestion
