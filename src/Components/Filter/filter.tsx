import './filter.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FilterComponent = () => {
    return (<>
        <div className='filter-container'>
            <p>Filter Results</p>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name (contains)</Form.Label>
                    <Form.Control type="text" placeholder="Text (string)" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formScore">
                    <Form.Label>Minimum Score</Form.Label>
                    <Form.Control type="number" placeholder="Enter email" />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Clear
                </Button>
            </Form>
        </div>
    </>)
}

export default FilterComponent;