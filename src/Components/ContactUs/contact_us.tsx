import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../VideoGameList/card/filter_card.css';
import './contact_us.css';

const ContactUs = () => {

    let [name, setName] = useState<string>("");
    let [email, setEmail] = useState<string>("");
    let [msg, setMsg] = useState<string>("");

    const submitRequest=(event: React.MouseEvent<HTMLButtonElement>)=> {
        setName(name); setEmail(email);setMsg(msg);
      }

    return (
            <Container>
                <Row>
                    <Col><div className='filter-container'>
                        <p>Get in touch...</p>
                        <Form>
                            <Row>
                            <Col> <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name </Form.Label>
                                <Form.Control className='apply-dark' type="text"
                                    placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group> </Col>
                            <Col>
                            <Form.Group className="mb-3" controlId="formScore">
                                <Form.Label>Email</Form.Label>
                                <Form.Control className='apply-dark' type="text"
                                    placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control className='apply-dark' as="textarea" rows={3} />
                            </Form.Group>
                           
                            <Button onClick={(e)=>submitRequest(e)} className='apply-dark'
                                style={{ border: '1px solid' }} type="button">
                                Submit
                            </Button>
                        </Form>
                    </div> 
                    </Col>
                </Row>
            </Container>
    );
}

export default ContactUs;