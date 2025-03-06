import { Form } from 'react-bootstrap'

const FilterQuiz = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option value="all">Toutes</option>
      <option value="math">Math</option>
      <option value="geo">Geographie</option>
      <option value="misc">Misc.</option>
    </Form.Select>
  )
}

export default FilterQuiz