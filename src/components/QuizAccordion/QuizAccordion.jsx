import React, { useContext } from 'react'
import QuestionItem from '../QuestionItem/QuestionItem'
import { Accordion } from 'react-bootstrap'
import { QuizContext } from '../../context/QuizContext'

function QuizAccordion() {
  const { questions, category } = useContext(QuizContext);

  const filteredQuestions = category !== 'all' ? questions.filter(quest => quest.category == category) : questions;

  return (
    <Accordion defaultActiveKey="0">
      {filteredQuestions.map(quest => <QuestionItem questionObject={quest} key={quest.id} />)}
    </Accordion>
  )
}

export default QuizAccordion