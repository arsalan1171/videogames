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
                    <Form.Control className='apply-dark' type="text" placeholder="Text (string)" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formScore">
                    <Form.Label>Minimum Score</Form.Label>
                    <Form.Control className='apply-dark' type="number" placeholder="Enter rating" />

                </Form.Group>

                <Button className='apply-dark' style={{ border: '1px solid' }} type="button">
                    Clear
                </Button>
            </Form>
        </div>
    </>)
}

export default FilterComponent;