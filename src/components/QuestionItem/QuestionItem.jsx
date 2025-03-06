import React, { useContext } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import { QuizContext } from '../../context/QuizContext';

const QuestionItem = ({ questionObject }) => {
  const { dispatch } = useContext(QuizContext);
  const { id, question, answer, validation} = questionObject;

  const handleUserChoice = (id, userChoice) => {
    dispatch({
      type: 'VALIDATE',
      payload: {
        id,
        userChoice,
      }
    })
  }

  const showValidation = validation !== null;

  return (
    <Accordion.Item eventKey={id}>
    <Accordion.Header>
      <div className="d-flex align-items-center w-100">
        <p className="mb-0">{question}</p>
        { 
        showValidation &&
          <span className={`ms-auto px-3 ${!validation ? 'text-danger' : 'text-success'}`}>
            {validation === false ? 'Fausse': 'Juste'}
          </span>
        }
      </div>
    </Accordion.Header>
    <Accordion.Body>
      <Card>
        <Card.Body>
          <Card.Title>Reponse</Card.Title>
          <Card.Text>{answer}</Card.Text>
          <Button className='mx-1' variant="success" onClick={() => handleUserChoice(id, true)} disabled={showValidation}>Juste</Button>
          <Button className='mx-1' variant="danger" onClick={() => handleUserChoice(id, false)} disabled={showValidation}>Fausse</Button>
        </Card.Body>
      </Card>
    </Accordion.Body>
  </Accordion.Item>
  )
}

export default QuestionItem