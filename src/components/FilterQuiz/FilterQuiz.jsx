import { Form } from 'react-bootstrap'
import { QuizContext } from '../../context/QuizContext'
import { useContext } from 'react';

const FilterQuiz = () => {
  const { category, dispatch } = useContext(QuizContext);

  const handleCategoryChange = (category) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      payload: {
        category
      },
    })
  }

  return (
    <Form.Select 
      aria-label="Default select example" 
      value={category}
      onChange={(e) => handleCategoryChange(e.target.value)}
    >
      <option value="all">Toutes</option>
      <option value="Math">Math</option>
      <option value="Science">Science</option>
      <option value="Histoire">Histoire</option>
    </Form.Select>
  )
}

export default FilterQuiz