import VideoGamesList from '../VideoGameList/video_game_list';
import { SearchContext } from '../../contexts/search_context';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './landing_page.css';
import './filter.css';

const LandingPage = () => {

    let [name, setName] = useState<string>("");
    let [score, setScore] = useState<number>(0);

    const clear = (e: any) => {
        e.target.form.elements.formName.value = "";
        e.target.form.elements.formScore.value = "";
        setName(''); setScore(0);
    }

    return (
        <div className='container'>
            <Container>
                <Row>
                    <Col style={{flex:'0 0'}}><div className='filter-container'>
                        <p>Filter Results</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name (contains)</Form.Label>
                                <Form.Control className='apply-dark' type="text"
                                    placeholder="Text (string)" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formScore">
                                <Form.Label>Minimum Score</Form.Label>
                                <Form.Control className='apply-dark' type="number"
                                    placeholder="Enter rating" onChange={(e) => setScore(Number(e.target.value))} />
                            </Form.Group>
                            <Button onClick={(e) => clear(e)} className='apply-dark'
                                style={{ border: '1px solid' }} type="button">
                                Clear
                            </Button>
                        </Form>
                    </div> </Col>
                    <SearchContext.Provider value={{ name: name, score: score }}>
                        <Col>  <VideoGamesList /></Col>
                    </SearchContext.Provider>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;