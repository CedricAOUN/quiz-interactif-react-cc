import { Container } from 'react-bootstrap'
import './App.css'
import FilterQuiz from './components/FilterQuiz/FilterQuiz'
import QuizAccordion from './components/QuizAccordion/QuizAccordion'

function App() {

  return (
    <Container className='d-flex gap-3 flex-column'>
      <h1>Quiz Interactif</h1>
      <FilterQuiz />
      <QuizAccordion />
    </Container>
  )
}

export default App
