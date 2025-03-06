import { Form } from 'react-bootstrap'
import { QuizContext } from '../../context/QuizContext'
import { useContext } from 'react';

const FilterQuiz = () => {
  const { category, handleCategoryChange } = useContext(QuizContext);

  return (
    <Form.Select 
      aria-label="Default select example" 
      value={category} 
      onChange={(e) => handleCategoryChange(e.target.value)}
    >
      <option value="all">Toutes</option>
      <option value="math">Math</option>
      <option value="geo">Geographie</option>
      <option value="misc">Misc.</option>
    </Form.Select>
  )
}

export default FilterQuiz