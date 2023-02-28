import './landing_page.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoGamesList from '../VideoGameList/video_game_list';
import FilterComponent from '../Filter/filter';

const LandingPage = () => {

    return (
        <div className='container'>
            <Container>
                <Row>
                    <Col><FilterComponent /></Col>

                    <Col>  <VideoGamesList /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default LandingPage;